import { motion } from "framer-motion";
import { Shield, CheckCircle, TrendingDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-subtle py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Samsung Device Protection</span>
                </div>
                
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                  Find the Best Protection Plan for Your Samsung Device
                </h1>
                
                <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                  Compare Samsung Care+, carrier insurance, and third-party providers. 
                  Get personalized recommendations and cost estimates in minutes.
                </p>
                
                <Link to="/model">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                    Start Insurance Quiz
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ad Slot */}
        <div className="container py-8">
          <AdSlot id="home-top-ad" />
        </div>

        {/* Features Section */}
        <section className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                Why Use Our Calculator?
              </h2>
              
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingDown className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Save Money</h3>
                  <p className="text-sm text-muted-foreground">
                    Compare prices across providers to find the most cost-effective protection plan
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Quick & Easy</h3>
                  <p className="text-sm text-muted-foreground">
                    Get personalized quotes in under 2 minutes with our simple quiz
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">AI-Powered</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive smart recommendations based on your device and usage patterns
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ad Slot */}
        <div className="container py-8">
          <AdSlot id="home-middle-ad" />
        </div>

        {/* Info Section */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl"
            >
              <h2 className="mb-6 text-center text-3xl font-bold text-foreground">
                Understanding Samsung Device Protection
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Samsung Care+ is Samsung's official extended warranty and protection plan that covers accidental damage, 
                  mechanical breakdowns, and provides expert support. It's available for flagship devices like the Galaxy S series, 
                  Z Fold, and Z Flip phones.
                </p>
                
                <p>
                  Carrier insurance plans from AT&T, Verizon, T-Mobile, and others offer similar protection but may have 
                  different pricing, deductibles, and coverage terms. Third-party providers like Asurion also offer competitive 
                  insurance options.
                </p>
                
                <p>
                  Our calculator helps you compare all these options side-by-side, considering your specific device model, 
                  location, and coverage preferences to find the best value for your needs.
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/model">
                  <Button variant="outline" size="lg">
                    Get Your Quote Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
