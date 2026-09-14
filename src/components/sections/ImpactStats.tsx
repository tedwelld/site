import { impactCategories } from "@/content/impact";
export function ImpactStats({ dark = false }: { dark?: boolean }) {
  return (
    <ul
      className={
        dark
          ? "grid gap-6 text-sand-50 sm:grid-cols-3"
          : "grid gap-6 text-forest-800 sm:grid-cols-3"
      }
    >
      {impactCategories.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  );
}
