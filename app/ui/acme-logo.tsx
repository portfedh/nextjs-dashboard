import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/S2G_Energy.79207f7f.svg"
        alt="S2G Energy Logo"
        width={215}
        height={45}
        className="mr-2"
      />
    </div>
  );
}
