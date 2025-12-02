import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md";
}

export default function Logo({ size = "md" }: LogoProps) {
  const props = {
    alt: "Logo",
    width: size == "sm" ? 60 : 80,
    height: size == "sm" ? 60 : 80,
  };

  return (
    <Link href="/">
      <Image
        src="/assets/logo/logo-light.svg"
        alt={props.alt}
        width={props.width}
        height={props.height}
        className="dark:hidden"
      />
      <Image
        src="/assets/logo/logo-dark.svg"
        alt={props.alt}
        width={props.width}
        height={props.height}
        className="hidden dark:block"
      />
    </Link>
  );
}
