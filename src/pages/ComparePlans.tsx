import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, DollarSign, Shield, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import AdSlot from "@/components/AdSlot";
import { useQuiz } from "@/contexts/QuizContext";
import plansData from "@/data/plans.json";

const ComparePlans = () => {
  const navigate = useNavigate();
  const { quizData } = useQuiz();

  const devicePlan = quizData.device ? plansData.plans[quizData.device as keyof typeof plansData.plans] : null;
  
  const plans = devicePlan ? [
    {
      name: "Samsung Care+",
      price: devicePlan.samsungCare[quizData.duration.toString() as keyof typeof devicePlan.samsungCare],
      features: [
        "Official Samsung coverage & authorized repairs",
        "Same-day replacement service available",
        "Expert technical support 24/7",
        "Theft & loss protection included",
        "Low deductibles: $29-$99 screen repairs",
        "Mechanical breakdown coverage"
      ],
      isBestValue: true,
      tag: "Official Samsung",
      rating: 4.8
    },
    {
      name: "Asurion Protection",
      price: devicePlan.asurion[quizData.duration.toString() as keyof typeof devicePlan.asurion],
      features: [
        "Third-party insurance provider",
        "Next-day replacement in most areas",
        "24/7 customer support hotline",
        "Accidental damage from handling",
        "Deductibles: $49-$149 per claim",
        "Multi-device coverage options"
      ],
      isBestValue: false,
      tag: "Popular Choice",
      rating: 4.3
    },
    {
      name: `${quizData.carrier} Insurance`,
      price: devicePlan.carrier[quizData.duration.toString() as keyof typeof devicePlan.carrier],
      features: [
        "Carrier-branded protection plan",
        "Standard 2-3 day replacement",
        "Phone support during business hours",
        "Basic damage coverage",
        "Higher deductibles: $99-$249",
        "Limited to carrier network devices"
      ],
      isBestValue: false,
      tag: "Carrier Bundle",
      rating: 3.9
    },
  ] : [];

  const handleNext = () => {
    navigate("/recommendation");
  };

  const handleBack = () => {
    navigate("/duration");
  };

  const handleSelectPlan = (plan: typeof plans[0]) => {
    const routes: Record<string, string> = {
      "Samsung Care+": "/samsung-care-plus",
      "Asurion Protection": "/asurion-insurance",
    };
    
    const carrierRoute = "/carrier-insurance";
    
    const route = routes[plan.name] || carrierRoute;
    const monthlyPrice = parseFloat(plan.price.replace('$', ''));
    const total = (monthlyPrice * quizData.duration).toFixed(2);
    
    navigate(route, { 
      state: { 
        provider: { 
          name: plan.name,
          monthly: plan.price,
          total: total,
          duration: quizData.duration 
        } 
      } 
    });
  };

  return (
    <QuizLayout currentStep={4}>
      <div className="container py-12">
        <AdSlot id="compare-top-ad" className="mb-8" />

        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow"
              >
                <DollarSign className="h-10 w-10 text-primary-foreground" />
              </motion.div>
              <h1 className="mb-3 text-4xl font-bold text-foreground bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Compare Samsung Insurance Providers
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Side-by-side comparison of protection plans for your {quizData.device}. 
                Save up to 30% by choosing the right coverage.
              </p>
            </div>

            {/* High CPC Content Section */}
            <div className="mb-8 rounded-xl bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-primary/20 p-6 shadow-lg">
              <div className="flex gap-4 items-start">
                <TrendingUp className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Insurance Pricing Trends</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Device protection costs have increased due to rising repair costs. Premium devices like the 
                    Galaxy S24 Ultra now cost $350-450 for screen replacement without insurance. Comprehensive coverage 
                    with low deductibles can save you hundreds on just one claim.
                  </p>
                  <div className="grid gap-2 sm:grid-cols-3 text-xs">
                    <div className="bg-card/70 rounded-lg p-3 border border-primary/20">
                      <p className="font-bold text-primary text-xl mb-1">$350+</p>
                      <p className="text-muted-foreground">Average screen repair cost without insurance</p>
                    </div>
                    <div className="bg-card/70 rounded-lg p-3 border border-accent/20">
                      <p className="font-bold text-accent text-xl mb-1">$29-99</p>
                      <p className="text-muted-foreground">Deductible with Samsung Care+</p>
                    </div>
                    <div className="bg-card/70 rounded-lg p-3 border border-secondary/20">
                      <p className="font-bold text-secondary text-xl mb-1">3-5x</p>
                      <p className="text-muted-foreground">ROI on insurance for expensive devices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 grid gap-6 lg:grid-cols-3">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-2xl border-2 bg-card p-6 shadow-lg transition-transform hover:scale-105 ${
                    plan.isBestValue ? "border-primary bg-gradient-card" : "border-border"
                  }`}
                >
                  {plan.isBestValue && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2"
                    >
                      <div className="flex items-center gap-1 rounded-full bg-gradient-primary px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-glow">
                        <Award className="h-4 w-4" />
                        Best Value - Recommended
                      </div>
                    </motion.div>
                  )}

                  <div className="mb-2">
                    <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                      {plan.tag}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">{plan.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < Math.floor(plan.rating) ? 'text-secondary' : 'text-muted-foreground/30'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{plan.rating}/5.0</span>
                    </div>
                    <div className="mb-1">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {quizData.duration} month coverage plan
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-foreground mb-3">Coverage includes:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant={plan.isBestValue ? "default" : "outline"}
                    className={`w-full text-base ${plan.isBestValue ? "bg-gradient-primary hover:opacity-90 shadow-md" : ""}`}
                    size="lg"
                    onClick={() => handleSelectPlan(plan)}
                    data-testid={`button-select-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Select {plan.name}
                  </Button>
                </motion.div>
              ))}
            </div>

            <AdSlot id="compare-middle-ad" className="mb-8" />

            {/* Detailed Comparison Table */}
            <div className="mb-8 rounded-xl bg-card border border-border p-6 shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Detailed Coverage Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-foreground font-semibold">Feature</th>
                      <th className="text-center py-3 text-foreground font-semibold">Samsung Care+</th>
                      <th className="text-center py-3 text-foreground font-semibold">Asurion</th>
                      <th className="text-center py-3 text-foreground font-semibold">Carrier</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3">Replacement Speed</td>
                      <td className="text-center">Same Day</td>
                      <td className="text-center">1-2 Days</td>
                      <td className="text-center">2-3 Days</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Screen Repair Deductible</td>
                      <td className="text-center font-semibold text-primary">$29-99</td>
                      <td className="text-center">$49-149</td>
                      <td className="text-center">$99-199</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Theft & Loss Protection</td>
                      <td className="text-center text-primary">✓ Included</td>
                      <td className="text-center text-accent">✓ Add-on</td>
                      <td className="text-center text-muted-foreground">Limited</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Authorized Repair Centers</td>
                      <td className="text-center text-primary">✓ Samsung</td>
                      <td className="text-center">✓ Partner</td>
                      <td className="text-center">✓ Carrier</td>
                    </tr>
                    <tr>
                      <td className="py-3">Maximum Claims/Year</td>
                      <td className="text-center">3 claims</td>
                      <td className="text-center">3 claims</td>
                      <td className="text-center">2 claims</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mb-8 rounded-xl bg-muted/50 border border-border p-6">
              <div className="flex gap-3 items-start">
                <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Important Pricing Information</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong className="text-foreground">Regional Variations:</strong> Insurance premiums shown are estimates based on {quizData.country} pricing for {quizData.carrier}. 
                    Actual costs may vary by 5-15% depending on local taxes, state regulations, and promotional offers.
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong className="text-foreground">Deductible Costs:</strong> All plans require deductibles when filing claims. 
                    Lower monthly premiums often mean higher deductibles per incident.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Coverage Limits:</strong> Most plans have annual claim limits and may not cover pre-existing damage. 
                    Always verify coverage details before purchase.
                  </p>
                </div>
              </div>
            </div>

            <AdSlot id="compare-bottom-ad" className="mb-8" />

            <div className="flex justify-between gap-4">
              <Button variant="outline" onClick={handleBack} size="lg">
                ← Back
              </Button>
              <Button
                onClick={handleNext}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg text-lg px-8"
              >
                View AI Recommendation →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default ComparePlans;