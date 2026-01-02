import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

// Service images
import scrapRecoveryImg from "@/assets/services/scrap-recovery.jpg";
import logisticsWasteImg from "@/assets/services/logistics-waste.jpg";
import metalTradingImg from "@/assets/services/metal-trading.jpg";
import aluminiumIngotImg from "@/assets/services/aluminium-ingot.jpg";
import sustainabilityImg from "@/assets/services/sustainability.jpg";

const services = [
  {
    title: "Industrial Scrap Recovery",
    description: "End-to-end recovery and processing of ferrous and non-ferrous metal scrap, executed through disciplined segregation, material optimization, and responsible recycling workflows designed for large-scale industrial efficiency.",
    image: scrapRecoveryImg,
  },
  {
    title: "Integrated Logistics & Waste Management",
    description: "Seamlessly integrated logistics and waste management solutions engineered to ensure safe handling, efficient transportation, and environmentally responsible disposal of industrial scrap materials.",
    image: logisticsWasteImg,
  },
  {
    title: "Strategic Metal Trading",
    description: "Reliable and transparent metal trading services built on market intelligence, supply chain discipline, and long-term industrial partnerships across ferrous and non-ferrous metal segments.",
    image: metalTradingImg,
  },
  {
    title: "Aluminium Ingot Manufacturing",
    description: "Precision-driven aluminium ingot manufacturing supported by controlled production processes, consistent quality standards, and modern industrial infrastructure.",
    image: aluminiumIngotImg,
  },
  {
    title: "Sustainability & Compliance Solutions",
    description: "Industry-aligned sustainability practices that support carbon footprint reduction, resource conservation, and compliance with modern environmental and industrial standards.",
    image: sustainabilityImg,
  },
];

export default function Services() {
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
              <span className="text-sm font-medium text-secondary-foreground">Service Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl text-secondary-foreground mb-6"
            >
              Industrial Capabilities
              <span className="block text-primary">& Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-secondary-foreground/80 max-w-3xl"
            >
              Enterprise-grade, globally competitive industrial solutions engineered with precision 
              and purpose. Our integrated service portfolio delivers measurable value across the 
              entire metal recovery lifecycle—from raw material procurement to sustainable processing.
            </motion.p>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        />
      </section>

      {/* Services Section - Premium Alternating Layout */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-industrial">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 lg:mb-28"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Capabilities</span>
            </div>
            <h2 className="heading-lg text-foreground mb-6">
              Comprehensive Industrial Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A vertically integrated portfolio of services designed for industrial-scale operations, 
              delivered with precision, transparency, and environmental responsibility.
            </p>
          </motion.div>

          {/* Services Cards */}
          <div className="space-y-16 lg:space-y-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                index={index}
                isReversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="container-industrial">
          <SectionHeading
            label="Operational Framework"
            title="Streamlined Execution Protocol"
            description="A systematic approach engineered to deliver maximum efficiency and transparency across every engagement."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Consultation", description: "Strategic assessment of your material requirements and operational parameters." },
              { step: "02", title: "Technical Evaluation", description: "Comprehensive material analysis and competitive value proposition." },
              { step: "03", title: "Logistics Deployment", description: "Coordinated collection and transport with full documentation compliance." },
              { step: "04", title: "Value Realization", description: "Precision processing and material recovery executed to specification." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-block text-6xl font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-foreground mb-2">{item.title}</h3>
                  <p className="text-secondary-foreground/70 text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 text-primary/30">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
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
              Require A Customized Solution?
            </h2>
            <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-10">
              Every industrial operation presents unique challenges. Engage our specialists 
              to architect a tailored solution aligned with your specific operational requirements.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-10 py-6">
              <Link to="/contact">
                Request Strategic Proposal
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
