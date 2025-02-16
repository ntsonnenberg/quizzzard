import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-40 drop-shadow-2xl bg-red-50 px-10 h-16 w-full flex justify-between items-center">
      <Link href="/">Quizzard</Link>
      <div className="flex gap-20">
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
        <Link href="https://forms.gle/GhTk7rdnWhHeRU449">Feedback</Link>
        <Link href="/">Stay Updated</Link>
      </div>
    </nav>
  );
}
