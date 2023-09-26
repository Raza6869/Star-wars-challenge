import ReyCard from "@/components/ReyCard";
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="flex gap-4 justify-center items-center h-screen w-full bg-gradient-to-tr from-background-initial to-background-final overflow-hidden">
      <Card title="Finn" style="finn-card" />
      <ReyCard />
      <Card title="bb-8" style="bb8-card" />
    </main>
  );
}
