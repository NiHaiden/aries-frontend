import Image from "next/image";
import SomeClientComponent from "@/components/SomeClient";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SomeClientComponent/>
    </main>
  );
}
