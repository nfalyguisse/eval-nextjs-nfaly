import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-[#0F1941]">
      <nav className="flex justify-between w-full items-center p-4">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={80} height={80} />
        </Link>
        <Link href="/favoris">
          <Image src="/login.png" alt="logo" width={30} height={40} />
        </Link>
      </nav>
    </header>
  );
}
