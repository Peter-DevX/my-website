import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import FloatingNavWrapper from "@/components/FloatingNavWrapper"; // 👈 Client component wrapper
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <main className="bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavWrapper />
        <ScrollAnimations />
        <Hero />
        <Grid />
        <RecentProject />
        <ContactForm/>
        <Footer />
      </div>
    </main>
  );
}
