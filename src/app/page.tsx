import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-customBg">
      <Link
        className="bg-purple-600 rounded p-3 hover:bg-opacity-85"
        href="custom-packet"
      >
        Go To Custom Packet Page
      </Link>
    </main>
  );
}
