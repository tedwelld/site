import "server-only";
import nodemailer from "nodemailer";
import settings from "../../appsettings.json" with { type: "json" };

export function getEmailSettings() {
  const defaults = settings.emailSettings;
  const secure = process.env.SMTP_SECURE ?? String(defaults.SmtpSecure);
  const port = Number(process.env.SMTP_PORT ?? defaults.SmtpPort);
  if (!["true", "false"].includes(secure) || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("Invalid SMTP port or secure setting.");
  }
  return {
    host: process.env.SMTP_HOST || defaults.EmailHost,
    username: process.env.SMTP_USERNAME || defaults.EmailUsername,
    password: process.env.SMTP_PASSWORD || defaults.EmailPassword,
    from: process.env.SMTP_FROM || defaults.EmailFrom,
    admin: process.env.SMTP_ADMIN_EMAIL || defaults.AdminEmail,
    refLink: process.env.SMTP_REF_LINK || defaults.RefLink,
    port,
    secure: secure === "true",
  };
}

export function isEmailConfigured() {
  return Boolean(getEmailSettings().password);
}

export async function sendEmail({ subject, text, replyTo, to }: {
  subject: string;
  text: string;
  replyTo?: string;
  to?: string;
}) {
  const config = getEmailSettings();
  if (!config.password) throw new Error("SMTP_PASSWORD is required to send email.");
  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    requireTLS: !config.secure,
    auth: { user: config.username, pass: config.password },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 30000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  const result = await transport.sendMail({
    from: config.from,
    to: to ?? config.admin,
    replyTo,
    subject,
    text: `${text}\n\n${config.refLink}`,
  });
  if (!result.accepted.length || result.rejected.length) {
    throw new Error("SMTP server did not accept the recipient.");
  }
  return result;
}
