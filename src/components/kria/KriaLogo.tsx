import logo from "@/assets/kria-logo.png.asset.json";

export function KriaLogo({ className }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Kria AI"
      width={64}
      height={64}
      className={className}
    />
  );
}
