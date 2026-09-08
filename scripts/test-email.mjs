import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd());
const { sendEmail } = await import("../src/lib/email.ts");
const to = process.argv[2];
if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
  throw new Error("Usage: npm run email:test -- recipient@example.com");
}
try {
  const result = await sendEmail({
    to,
    subject: "Tikobane Zimbabwe — SMTP test email",
    text: "This is the requested SMTP test email from the Tikobane Zimbabwe website. The website is configured to send admin notifications to info@tikobanezimbabwe.org.",
  });
  console.log(JSON.stringify({ accepted: result.accepted, messageId: result.messageId, response: result.response }, null, 2));
} catch (error) {
  console.error("Test email failed:", error.code ?? error.message, error.response ?? "");
  process.exitCode = 1;
}
