import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { leadership, team, trustees, type TeamMember } from "@/content/people";
import { img } from "@/content/credits";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the people behind Tikobane Trust — our leadership, programme team and board of trustees working with communities in Dete, Zimbabwe.",
  alternates: { canonical: "/about/team" },
};

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <Reveal as="li" delay={index * 60} className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-forest-900/8 bg-white shadow-soft">
        <Photo
          src={member.image}
          seed={member.imageSeed}
          alt={`${member.name}, ${member.role}`}
          rounded={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="aspect-4/3 w-full"
        />
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">{member.role}</p>
          <h3 className="mt-2 font-display text-lg text-forest-800">{member.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{member.bio}</p>
        </div>
      </article>
    </Reveal>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Meet the people behind Tikobane"
        lead="Our staff live in the communities we serve. Governance sits with an independent board of trustees."
        crumbs={[{ label: "About", href: "/about" }, { label: "Our Team" }]}
        seed="team-hero"
        image={img.trainingParticipants}
      />

      <Section>
        <div className="rounded-2xl border border-dashed border-gold-500/50 bg-gold-300/15 p-5 text-sm leading-relaxed text-earth-800">
          <strong className="font-semibold">Content pending confirmation.</strong> Names, roles, biographies and
          photographs below are placeholders. Real details will be published once confirmed by the Trust, with
          written consent from each person.
        </div>

        <div className="mt-12">
          <SectionHeading eyebrow="Leadership" title="Programme leadership" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((m, i) => (
              <MemberCard key={m.role} member={m} index={i} />
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Programme team" title="Delivering the work, week to week" />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <MemberCard key={m.role} member={m} index={i} />
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Governance"
          title="Board of trustees"
          lead="The board provides independent oversight of strategy, finance, risk and safeguarding, and holds the executive accountable to the Trust's objectives."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustees.map((m, i) => (
            <MemberCard key={m.role} member={m} index={i} />
          ))}
        </ul>
        <div className="mt-10">
          <Button href="/transparency" variant="secondary" size="lg">
            Read our governance and policies
          </Button>
        </div>
      </Section>

      <CTABand
        title="Want to join the team?"
        body="We work with volunteers, mentors and specialist professionals across animal welfare, training, monitoring and community development."
        primary={{ label: "Volunteer with us", href: "/get-involved/volunteer" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
