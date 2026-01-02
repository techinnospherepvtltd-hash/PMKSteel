import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowRight, Recycle, Factory, Leaf, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const stats = [
  { value: 100000, suffix: "+", label: "Metric Tons Processed Annually" },
  { value: 2000, suffix: "+", label: "Industrial Partnerships" },
  { value: 30, suffix: "+", label: "Years of Market Leadership" },
];

const partners = [
  "TATA Steel Limited",
  "Karamtara",
  "Rehoboth Environment",
  "Rajdeep Cans Pvt Ltd",
];

const sustainabilityBenefits = [
  {
    icon: Recycle,
    title: "95% Energy Optimization",
    description: "Metal recycling delivers transformative energy savings—up to 95% reduction versus primary extraction and virgin material processing.",
  },
  {
    icon: Factory,
    title: "Zero-Mining Dependency",
    description: "Every metric ton of recycled metal eliminates the ecological burden of extraction, preserving critical natural resources.",
  },
  {
    icon: Leaf,
    title: "Industrial Decarbonization",
    description: "Systematic metal recovery dramatically reduces greenhouse emissions, accelerating your pathway to carbon neutrality.",
  },
  {
    icon: TrendingUp,
    title: "Circular Economy Leadership",
    description: "Pioneering closed-loop material flows that generate sustained value for industry while advancing environmental stewardship.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
        </motion.div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.1)_25%,hsl(var(--primary)/0.1)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.1)_75%)] bg-[length:60px_60px]" />
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="container-industrial relative z-10 pt-24"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Recycle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">Industrial Resource Recovery & Metal Trading</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="heading-xl text-secondary-foreground mb-6"
            >
              Commanding The Future
              <span className="block text-primary">Of Metal Recycling</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-secondary-foreground/80 max-w-2xl mb-10"
            >
              India's trusted authority in ferrous and non-ferrous metal recovery. 
              We engineer sustainable material flows that power industrial growth while 
              driving measurable environmental impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Link to="/contact">
                  Request Strategic Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary bg-primary/10 text-primary-foreground hover:bg-primary/20 text-lg px-8 py-6">
                <Link to="/contact">Initiate Partnership</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-secondary-foreground/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
        <div className="container-industrial relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-secondary">
        <div className="container-industrial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-secondary-foreground/60 text-sm uppercase tracking-wider font-medium">
              Powering Operations For Industry Leaders
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-secondary-foreground/5 rounded-lg border border-secondary-foreground/10"
              >
                <span className="text-secondary-foreground/70 font-semibold text-sm md:text-base">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-background">
        <div className="container-industrial">
          <SectionHeading
            label="Environmental Stewardship"
            title="Driving Industrial Decarbonization"
            description="Metal recycling represents the most effective pathway to reduce industrial carbon intensity. Every metric ton recovered advances the global sustainability mandate."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container-industrial">
          <SectionHeading
            label="Operational Excellence"
            title="World-Class Processing Infrastructure"
            description="Purpose-built facilities engineered to deliver precision metal recovery, processing, and quality assurance at industrial scale."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=2070",
                title: "Integrated Scrap Yard Operations",
              },
              {
                image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070",
                title: "Advanced Metal Processing",
              },
              {
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
                title: "Precision Manufacturing",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-secondary-foreground font-bold text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(0_0%_100%/0.1)_25%,hsl(0_0%_100%/0.1)_50%,transparent_50%,transparent_75%,hsl(0_0%_100%/0.1)_75%)] bg-[length:60px_60px]" />
        </div>
        <div className="container-industrial relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-primary-foreground mb-6">
              Ready To Optimize Your Material Value Chain?
            </h2>
            <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-10">
              Unlock competitive advantage through strategic metal recovery partnerships. 
              Our specialists deliver customized solutions engineered for your operational requirements.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-10 py-6">
              <Link to="/contact">
                Schedule Executive Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
