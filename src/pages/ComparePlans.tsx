import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, DollarSign } from "lucide-react";
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
      features: ["Official Samsung coverage", "Same-day replacement", "Expert support", "Theft & loss protection"],
      isBestValue: true,
    },
    {
      name: "Asurion",
      price: devicePlan.asurion[quizData.duration.toString() as keyof typeof devicePlan.asurion],
      features: ["Third-party provider", "Next-day replacement", "24/7 support", "Accidental damage"],
      isBestValue: false,
    },
    {
      name: `${quizData.carrier} Insurance`,
      price: devicePlan.carrier[quizData.duration.toString() as keyof typeof devicePlan.carrier],
      features: ["Carrier-branded plan", "Standard replacement", "Phone support", "Basic coverage"],
      isBestValue: false,
    },
  ] : [];

  const handleNext = () => {
    navigate("/recommendation");
  };

  const handleBack = () => {
    navigate("/duration");
  };

  return (
    <QuizLayout currentStep={4}>
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Compare Insurance Providers</h1>
              <p className="text-muted-foreground">
                See how different protection plans stack up for your {quizData.device}
              </p>
            </div>

            <AdSlot id="compare-top-ad" className="mb-8" />

            <div className="mb-8 grid gap-6 md:grid-cols-3">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-lg border-2 bg-card p-6 shadow-card ${
                    plan.isBestValue ? "border-accent" : "border-border"
                  }`}
                >
                  {plan.isBestValue && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                        <Award className="h-3 w-3" />
                        Best Value
                      </div>
                    </div>
                  )}

                  <div className="mb-4 text-center">
                    <h3 className="mb-2 text-xl font-bold text-foreground">{plan.name}</h3>
                    <div className="mb-1">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {quizData.duration} month plan
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 text-primary">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.isBestValue ? "default" : "outline"}
                    className={`w-full ${plan.isBestValue ? "bg-gradient-primary hover:opacity-90" : ""}`}
                  >
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="mb-8 rounded-lg bg-muted/50 border border-border p-4">
              <p className="text-sm text-center text-muted-foreground">
                <strong>Note:</strong> Prices vary by region and are estimates only. Deductibles and claim limits may apply. 
                Check with each provider for exact terms and conditions.
              </p>
            </div>

            <AdSlot id="compare-bottom-ad" className="mb-8" />

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button
                onClick={handleNext}
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                View AI Recommendation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default ComparePlans;
