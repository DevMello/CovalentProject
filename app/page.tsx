import {Brain, Link2, DollarSign, Workflow} from "lucide-react";
import { Button } from "@/components/ui/button";
//import { ScrollSection } from "@/components/sections/scroll-section";
import Image from "next/image";
import Link from "next/link";
import {ScrollSection} from "@/components/sections/scroll-section";

const features = [
  {
    title: "Connections That Matter",
    description: "Helping you connect with like-minded researchers and professionals in your topic.",
    icon: Link2,
  },
  {
    title: "Finance Your Research",
    description: "Find sponsors and funding opportunities to support your research projects.",
    icon: DollarSign,
  },
  {
    title: "Knowledge is Power",
    description: "Free access to a vast repository of research papers, articles, and resources to fuel your projects.",
    icon: Brain,
  },
  {
    title: "Work Smarter, Not Harder",
    description: "Find tools and resources to streamline your research process and boost productivity.",
    icon: Workflow,
  },
];

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 relative">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Empowering Independent
                <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"> Researches</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                A free and non-profit service which helps you get connected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Sign Up
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative h-[400px] md:h-[600px] w-full">
              <Image
                  src="/dna.png"
                  alt="Tennis Racket"
                  fill
                  className="object-cover rounded-lg filter grayscale"
                  priority
              />
            </div>
          </div>
        </section>

        {/* Scrolling Section */}
        {/*<ScrollSection />*/}
        <ScrollSection/>

        {/* Advanced Features Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/80 relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock Your Full Potential</h2>
              <p className="text-lg text-muted-foreground">Find the Help Needed to Complete Your Project</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <div
                        key={index}
                        className="relative p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors"
                    >
                      <div className="mb-4">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
  );
}