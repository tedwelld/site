import { Pin } from "@/components/ui/Icons";
import { site } from "@/content/site";

const locations = [
  { name: "Dete", note: "Our base, including 253 Soweto Township — programme office and community hub." },
  { name: "Surrounding communities", note: "Villages, wards and farming households across the Dete area." },
  { name: "Hwange National Park boundary", note: "Households living directly alongside wildlife." },
  { name: "Matabeleland North", note: "Wider district-level partnerships and coordination." },
];

const { latitude: lat, longitude: lon } = site.where;
const bbox = [lon - 0.22, lat - 0.19, lon + 0.22, lat + 0.19].map((n) => n.toFixed(4)).join("%2C");
const embedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
const fullMap = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=11/${lat}/${lon}`;

export function WhereWeWork() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="flex items-center gap-2 text-sm font-semibold text-gold-600">
          <Pin width={18} height={18} />
          {site.where.label}
        </p>
        <h2 className="mt-4 text-3xl text-forest-800 sm:text-4xl">Where we work</h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-500">
          Tikobane Trust is based in Dete, in Hwange district, Matabeleland North — immediately adjacent to
          Hwange National Park. That location shapes everything we do: our communities live with wildlife
          every day, not at a distance.
        </p>
        <ul className="mt-8 space-y-4">
          {locations.map((l) => (
            <li key={l.name} className="flex gap-4 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-forest-900/8">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-forest-50 text-forest-700">
                <Pin width={18} height={18} />
              </span>
              <span>
                <span className="block font-semibold text-forest-800">{l.name}</span>
                <span className="mt-0.5 block text-sm leading-relaxed text-ink-500">{l.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-3xl border border-forest-900/10 bg-sand-100 shadow-lift">
        <div className="aspect-4/3 w-full">
          <iframe
            src={embedSrc}
            title="Map showing Dete, Hwange district, Zimbabwe — where Tikobane Trust works"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-forest-900/10 bg-white px-5 py-3 text-xs text-ink-500">
          <span>Dete, Hwange District, Matabeleland North, Zimbabwe</span>
          <a
            href={fullMap}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-forest-700 underline"
          >
            Open larger map
          </a>
        </div>
      </div>
    </div>
  );
}
