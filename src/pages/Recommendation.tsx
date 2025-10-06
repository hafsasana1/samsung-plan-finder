import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import AdSlot from "@/components/AdSlot";
import { useQuiz } from "@/contexts/QuizContext";
import plansData from "@/data/plans.json";

const Recommendation = () => {
  const navigate = useNavigate();
  const { quizData } = useQuiz();

  const devicePlan = quizData.device ? plansData.plans[quizData.device as keyof typeof plansData.plans] : null;
  const recommendation = devicePlan ? plansData.recommendations[devicePlan.type as keyof typeof plansData.recommendations] : null;

  const handleNext = () => {
    navigate("/quote");
  };

  const handleBack = () => {
    navigate("/compare");
  };

  if (!recommendation) {
    return null;
  }

  return (
    <QuizLayout currentStep={5}>
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary"
              >
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </motion.div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">AI-Powered Recommendation</h1>
              <p className="text-muted-foreground">
                Based on your {quizData.device} and usage profile
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 rounded-lg border-2 border-primary bg-card p-8 shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{recommendation.title}</h2>
              </div>

              <p className="mb-6 text-muted-foreground">{recommendation.description}</p>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Key Benefits:</h3>
                <ul className="space-y-2">
                  {recommendation.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-0.5 text-primary">✓</span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                <h3 className="mb-2 font-semibold text-foreground">Your Device</h3>
                <p className="text-sm text-muted-foreground">{quizData.device}</p>
              </div>
              <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                <h3 className="mb-2 font-semibold text-foreground">Coverage Period</h3>
                <p className="text-sm text-muted-foreground">{quizData.duration} months</p>
              </div>
            </div>

            <AdSlot id="recommendation-ad" className="mb-8" />

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button
                onClick={handleNext}
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                View Personalized Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Recommendation;
