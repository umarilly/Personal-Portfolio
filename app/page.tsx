import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full h-auto">
      <div className="relative flex flex-col justify-center items-center" >
        <Hero />
      </div>
      <div className="mt-[100vh]" />
      <div> Hello Mate </div>
    </main>
  );
}