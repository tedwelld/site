import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { ArrowRight, Heart } from "@/components/ui/Icons";

export function CTABand({
  title = "Community-led change needs people behind it",
  body = "Whether you give, volunteer, mentor or partner with us, you make the next season of work possible for households in and around Dete.",
  primary = { label: "Donate", href: "/get-involved/donate" },
  secondary = { label: "Other ways to help", href: "/get-involved" },
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-earth-800 py-16 text-sand-50 sm:py-20">
      <div aria-hidden="true" className="absolute inset-0 opacity-25">
        <svg className="h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
          <path d="M0 30 Q 25 18 50 27 T 100 20 V40 H0Z" fill="var(--color-forest-700)" />
          <path d="M0 36 Q 35 26 65 34 T 100 30 V40 H0Z" fill="var(--color-forest-900)" />
        </svg>
      </div>

      <Container className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-sand-200/85">{body}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button href={primary.href} variant="donate" size="lg">
            <Heart />
            {primary.label}
          </Button>
          <Button href={secondary.href} variant="onDark" size="lg">
            {secondary.label}
            <ArrowRight />
          </Button>
        </div>
      </Container>
    </section>
  );
}
