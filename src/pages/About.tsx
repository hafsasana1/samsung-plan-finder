import { motion } from "framer-motion";
import { Shield, Users, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-subtle py-12 md:py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="mb-4 text-4xl font-bold text-foreground">About Us</h1>
              <p className="text-lg text-muted-foreground">
                Helping you make informed decisions about Samsung device protection
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container py-12">
          <div className="mx-auto max-w-3xl">
            <AdSlot id="about-top-ad" className="mb-12" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="prose prose-lg mx-auto mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                We created the Samsung Care+ Insurance Calculator to help consumers navigate the complex world of 
                device protection plans. With so many options available—from Samsung's official Care+ program to 
                carrier insurance and third-party providers—it can be overwhelming to determine which plan offers 
                the best value for your specific needs.
              </p>

              <div className="grid gap-8 md:grid-cols-3 not-prose mb-12">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Transparency</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear, unbiased comparisons of all major protection plans
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Consumer-First</h3>
                  <p className="text-sm text-muted-foreground">
                    Recommendations based on your needs, not commissions
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Accuracy</h3>
                  <p className="text-sm text-muted-foreground">
                    Up-to-date pricing and coverage information
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">How We Help</h2>
              <p className="text-muted-foreground mb-6">
                Our intelligent calculator analyzes your device model, location, and coverage preferences to provide 
                personalized recommendations. We compare costs across Samsung Care+, major carriers, and leading 
                third-party insurers to help you find the best protection at the right price.
              </p>

              <p className="text-muted-foreground">
                Whether you own a flagship Galaxy S24 Ultra or a budget-friendly A-series device, our tool provides 
                tailored advice on whether insurance makes financial sense for your situation.
              </p>
            </motion.div>

            <AdSlot id="about-bottom-ad" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
