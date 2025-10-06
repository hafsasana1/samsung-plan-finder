import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import AdSlot from "@/components/AdSlot";
import { useQuiz } from "@/contexts/QuizContext";
import plansData from "@/data/plans.json";

const SelectDuration = () => {
  const navigate = useNavigate();
  const { quizData, updateQuizData } = useQuiz();
  const [selectedDuration, setSelectedDuration] = useState<number>(12);

  const durations = [
    { months: 12, label: "1 Year", recommended: false },
    { months: 24, label: "2 Years", recommended: true },
    { months: 36, label: "3 Years", recommended: false },
  ];

  const devicePlan = quizData.device ? plansData.plans[quizData.device as keyof typeof plansData.plans] : null;
  
  const getEstimate = (months: number) => {
    if (!devicePlan) return null;
    const monthlyRate = devicePlan.samsungCare[months.toString() as keyof typeof devicePlan.samsungCare];
    return {
      monthly: monthlyRate,
      total: `$${(parseFloat(monthlyRate.replace('$', '')) * months).toFixed(2)}`
    };
  };

  const handleNext = () => {
    updateQuizData({ duration: selectedDuration });
    navigate("/compare");
  };

  const handleBack = () => {
    navigate("/carrier");
  };

  return (
    <QuizLayout currentStep={3}>
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Select Coverage Duration</h1>
              <p className="text-muted-foreground">
                Longer plans typically offer better monthly rates
              </p>
            </div>

            <div className="mb-8 grid gap-4">
              {durations.map((duration) => {
                const estimate = getEstimate(duration.months);
                return (
                  <button
                    key={duration.months}
                    onClick={() => setSelectedDuration(duration.months)}
                    className={`relative rounded-lg border-2 p-6 text-left transition-all ${
                      selectedDuration === duration.months
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    {duration.recommended && (
                      <div className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                        Most Popular
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{duration.label}</h3>
                        <p className="text-sm text-muted-foreground">
                          {duration.months} months of coverage
                        </p>
                      </div>
                      {estimate && (
                        <div className="text-right">
                          <p className="text-2xl font-bold text-foreground">{estimate.monthly}<span className="text-sm text-muted-foreground">/mo</span></p>
                          <p className="text-sm text-muted-foreground">{estimate.total} total</p>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mb-8 rounded-lg bg-accent/10 border border-accent/20 p-4">
              <div className="flex gap-3">
                <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-accent-foreground mb-1">
                    Cost Savings with Longer Plans
                  </p>
                  <p className="text-sm text-accent-foreground">
                    Extended coverage periods often come with reduced monthly rates. The estimates shown are 
                    based on Samsung Care+ pricing for your selected device.
                  </p>
                </div>
              </div>
            </div>

            <AdSlot id="duration-ad" className="mb-8" />

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button
                onClick={handleNext}
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Compare Providers
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default SelectDuration;
