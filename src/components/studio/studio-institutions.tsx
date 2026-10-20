import { MarqueeLogoScroller } from "@/components/ui/marquee-logo-scroller";

// Preview selection requested by the owner; these are not verified clients.
const institutions = [
  { name: "Bank Indonesia", image: "bi.png", color: "#b9cceb" },
  { name: "Universitas Gadjah Mada", image: "ugm.png", color: "#e8d9b0" },
  { name: "Bank Central Asia", image: "bca.svg", color: "#b4d4f0" },
  { name: "Universitas Indonesia", image: "ui.png", color: "#f1e4a8" },
].map(({ name, image, color }) => ({
  src: `/images/studio/institutions/${image}`,
  alt: name,
  gradient: { from: color, via: `${color}88`, to: `${color}00` },
}));

export function StudioInstitutions() {
  return (
    <div className="w-full">
      <MarqueeLogoScroller
        className="w-full"
        title="Dipercaya untuk membangun bersama."
        description="Inilah instansi yang bekerja sama dengan kami untuk mewujudkan website, aplikasi, dan solusi digital sesuai kebutuhan mereka."
        logos={institutions}
        speed="normal"
      />
    </div>
  );
}
