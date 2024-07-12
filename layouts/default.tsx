import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-4">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3" style={{
        background: "linear-gradient(135deg, #228B22 50%, #32CD32 50%)", // Gradient background
      }}>
        <div className="text-white text-center">
        <p className="font-bold text-xl mb-2">Shennoy | Kaitlyn - Wedding RSVP</p>
        <p>Thank you for being a part of our special day!</p><br ></br>
        <p>&copy; {new Date().getFullYear()} Shennoy & Kaitlyn. All rights reserved.</p>
      </div>
      </footer>
    </div>
  );
}
