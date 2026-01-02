import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, ArrowRight, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const values = [
  {
    icon: Award,
    title: "Uncompromising Excellence",
    description: "Setting the benchmark for precision, quality, and operational superiority in metal recovery and trading.",
  },
  {
    icon: Users,
    title: "Strategic Partnership",
    description: "Cultivating enduring alliances built on transparency, mutual value creation, and shared growth objectives.",
  },
  {
    icon: Shield,
    title: "Environmental Accountability",
    description: "Embedding sustainability into every process, decision, and material flow we engineer.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.1)_25%,hsl(var(--primary)/0.1)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.1)_75%)] bg-[length:60px_60px]" />
        </div>

        <div className="container-industrial relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <span className="text-sm font-medium text-secondary-foreground">Our Heritage</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl text-secondary-foreground mb-6"
            >
              Three Decades of
              <span className="block text-primary">Industrial Authority</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-secondary-foreground/80"
            >
              PMK Iron & Steel stands as a testament to visionary leadership and relentless 
              commitment to operational excellence in India's metal recycling and trading sector.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container-industrial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070"
                    alt="Industrial operations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
                >
                  <div className="text-4xl font-bold">30+</div>
                  <div className="text-sm opacity-80">Years of Market Leadership</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                The Founding Vision
              </span>
              <h2 className="heading-lg mb-2">
                Parvez Khan
              </h2>
              <p className="text-primary font-semibold text-lg mb-6">Founder & Visionary (Est. 1994)</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg italic border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
                  "Built on integrity. Defined by excellence. Driven by an unwavering commitment to sustainable industrial progress."
                </p>
                <p>
                  In 1994, Parvez Khan established PMK IRON & STEEL with a singular vision—to build 
                  an enterprise of unquestionable integrity and operational excellence in the 
                  scrap recycling and metal trading sector. Through decades of strategic growth 
                  and disciplined execution, he forged a legacy that continues to define 
                  industry standards.
                </p>
                <p className="font-medium text-foreground">
                  His foundational principles of trust, quality, and sustainable value creation 
                  remain the bedrock upon which PMK Iron & Steel commands its market position today.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <div className="container-industrial">
          <SectionHeading
            label="Executive Leadership"
            title="Commanding Industry Expertise"
            description="A family-led enterprise with deep operational knowledge and proven track record across the metal recycling and trading value chain."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
            {/* Kaif Khan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground">Kaif Khan</h3>
                  <p className="text-primary font-semibold">Managing Director</p>
                </div>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Spearheading PMK IRON & STEEL's operations, Kaif Khan brings <span className="text-foreground font-medium">7 years of strategic leadership</span> in 
                  industrial scrap recovery, waste stream optimization, and operational execution.
                </p>
                <p>
                  With comprehensive command of market dynamics and an unwavering focus on 
                  operational excellence, he drives continuous growth while maintaining 
                  the highest standards of quality and client satisfaction.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                  <Award className="w-4 h-4" />
                  7+ Years Strategic Leadership
                </span>
              </div>
            </motion.div>

            {/* Javed Khan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground">Javed Khan</h3>
                  <p className="text-primary font-semibold">Senior Advisor & Partner</p>
                </div>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  An integral pillar of PMK's leadership, Javed Khan contributes <span className="text-foreground font-medium">12 years of deep industry expertise</span>, 
                  providing senior counsel, operational oversight, and strategic direction.
                </p>
                <p>
                  His comprehensive knowledge of the scrap recycling and metal trading 
                  ecosystem strengthens enterprise decision-making and ensures sustainable 
                  long-term value creation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                  <Award className="w-4 h-4" />
                  12+ Years Industry Authority
                </span>
              </div>
            </motion.div>
          </div>

          {/* Family Legacy Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This <span className="text-foreground font-medium">family-led enterprise</span> combines 
              decades of accumulated expertise, ensuring PMK IRON & STEEL remains the preferred 
              strategic partner for industries demanding reliable, scalable metal recovery solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-secondary">
        <div className="container-industrial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-10 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors duration-300">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver industrial-grade metal recovery solutions that maximize resource 
                efficiency and minimize environmental impact. We are committed to engineering 
                sustainable material flows that create measurable value for partners, 
                stakeholders, and the planet.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-10 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors duration-300">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To command industry leadership in India's metal recycling sector, establishing 
                new benchmarks for environmental stewardship, operational excellence, and 
                strategic partnerships built on trust, transparency, and mutual value creation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container-industrial">
          <SectionHeading
            label="Core Principles"
            title="The Foundation Of Our Authority"
            description="Every strategic decision and operational process is anchored in our unwavering commitment to excellence, partnership, and environmental responsibility."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container-industrial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Competitive Advantage
              </span>
              <h2 className="heading-lg text-secondary-foreground mb-6">
                Your Strategic Industrial Partner
              </h2>
              <ul className="space-y-4">
                {[
                  "Three decades of proven market leadership and operational expertise",
                  "Trusted by major industrial enterprises across India",
                  "Transparent pricing structures with competitive market positioning",
                  "Integrated solutions spanning collection, processing, and trading",
                  "Sustainability-first approach aligned with global environmental standards",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-secondary-foreground/80"
                  >
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8"
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">
                    Initiate Partnership
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
                  alt="Industrial facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
