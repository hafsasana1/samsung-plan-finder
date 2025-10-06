import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Info, TrendingDown, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import AdSlot from "@/components/AdSlot";
import { useQuiz } from "@/contexts/QuizContext";
import plansData from "@/data/plans.json";

const SelectDuration = () => {
  const navigate = useNavigate();
  const { quizData, updateQuizData } = useQuiz();
  const [selectedDuration, setSelectedDuration] = useState<number>(24);

  const durations = [
    { months: 12, label: "1 Year Plan", recommended: false, savings: "Standard Rate" },
    { months: 24, label: "2 Year Plan", recommended: true, savings: "Save 15%" },
    { months: 36, label: "3 Year Plan", recommended: false, savings: "Save 25%" },
  ];

  const devicePlan = quizData.device ? plansData.plans[quizData.device as keyof typeof plansData.plans] : null;
  
  const getEstimate = (months: number) => {
    if (!devicePlan) return null;
    const monthlyRate = devicePlan.samsungCare[months.toString() as keyof typeof devicePlan.samsungCare];
    const monthlyPrice = parseFloat(monthlyRate.replace('$', ''));
    return {
      monthly: monthlyRate,
      total: `$${(monthlyPrice * months).toFixed(2)}`,
      perMonth: monthlyPrice
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
        <AdSlot id="duration-top-ad" className="mb-8" />

        <div className="mx-auto max-w-4xl">
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
                className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow"
              >
                <Calendar className="h-10 w-10 text-primary-foreground" />
              </motion.div>
              <h1 className="mb-3 text-4xl font-bold text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Select Your Coverage Duration
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Longer insurance plans offer significant monthly savings. Choose the coverage period that matches your device upgrade cycle.
              </p>
            </div>

            {/* High CPC Content Section */}
            <div className="mb-8 rounded-xl bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/30 p-6 shadow-lg">
              <div className="flex gap-4 items-start">
                <TrendingDown className="h-10 w-10 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Multi-Year Insurance Discounts</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Extended coverage plans provide better value and protection. Samsung Care+ and carrier insurance plans 
                    offer reduced monthly rates for 24 and 36-month commitments.
                  </p>
                  <div className="grid gap-2 sm:grid-cols-3 text-xs">
                    <div className="bg-card/70 rounded-lg p-3 border border-border">
                      <p className="font-bold text-primary text-xl mb-1">15-20%</p>
                      <p className="text-muted-foreground">Average savings on 2-year plans vs monthly</p>
                    </div>
                    <div className="bg-card/70 rounded-lg p-3 border border-border">
                      <p className="font-bold text-accent text-xl mb-1">25-30%</p>
                      <p className="text-muted-foreground">Total savings on 3-year protection plans</p>
                    </div>
                    <div className="bg-card/70 rounded-lg p-3 border border-border">
                      <p className="font-bold text-secondary text-xl mb-1">$150+</p>
                      <p className="text-muted-foreground">Money saved over device lifetime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-4">Choose Your Plan Duration</h2>
              <div className="space-y-4">
                {durations.map((duration) => {
                  const estimate = getEstimate(duration.months);
                  return (
                    <motion.button
                      key={duration.months}
                      onClick={() => setSelectedDuration(duration.months)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`relative rounded-2xl border-2 p-6 text-left transition-all w-full ${
                        selectedDuration === duration.months
                          ? "border-primary bg-gradient-primary/5 shadow-lg"
                          : "border-border bg-card hover:border-primary/50 hover:shadow-md"
                      }`}
                    >
                      {duration.recommended && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-3 right-6 rounded-full bg-gradient-accent px-4 py-1.5 text-xs font-bold text-accent-foreground shadow-lg flex items-center gap-1"
                        >
                          <Award className="h-3 w-3" />
                          Most Popular - Best Value
                        </motion.div>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-foreground">{duration.label}</h3>
                            <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                              {duration.savings}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {duration.months} months of comprehensive device protection
                          </p>
                          {estimate && (
                            <div className="flex gap-6 text-sm">
                              <div>
                                <p className="text-muted-foreground">Monthly Payment</p>
                                <p className="font-semibold text-foreground">{estimate.monthly}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Total Cost</p>
                                <p className="font-semibold text-foreground">{estimate.total}</p>
                              </div>
                            </div>
                          )}
                        </div>
                        {estimate && (
                          <div className="text-right ml-6">
                            <div className="text-4xl font-bold text-foreground">
                              {estimate.monthly}
                            </div>
                            <p className="text-sm text-muted-foreground">per month</p>
                          </div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <AdSlot id="duration-middle-ad" className="mb-8" />

            {/* Additional High CPC Content */}
            <div className="mb-8 space-y-4">
              <div className="rounded-xl bg-gradient-card border border-primary/20 p-6">
                <div className="flex gap-3">
                  <Info className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Cost Savings Analysis for {quizData.device}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Extended insurance coverage plans reduce your monthly premiums significantly. For premium devices like the 
                      Galaxy S24 Ultra and Z Fold series, multi-year plans can save $200-400 over the device's lifetime.
                    </p>
                    <div className="bg-card/70 rounded-lg p-4 border border-border">
                      <p className="text-xs font-semibold text-foreground mb-2">What's Included in Your Coverage:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>✓ Accidental damage protection (screen, water, drops)</li>
                        <li>✓ Mechanical and electrical breakdown coverage</li>
                        <li>✓ Same-day replacement service (Samsung Care+)</li>
                        <li>✓ Low deductibles ($29-$249 depending on claim type)</li>
                        <li>✓ Theft and loss protection (premium plans only)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-secondary/10 border border-secondary/30 p-6">
                <h3 className="font-bold text-foreground mb-3">Why Choose Extended Coverage?</h3>
                <div className="grid gap-3 sm:grid-cols-2 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-1">• Lower Monthly Payments</p>
                    <p className="text-muted-foreground">Commit longer, pay less each month</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">• Match Upgrade Cycle</p>
                    <p className="text-muted-foreground">Align coverage with your typical device lifespan</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">• Peace of Mind</p>
                    <p className="text-muted-foreground">Continuous protection without renewal hassles</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">• Better ROI</p>
                    <p className="text-muted-foreground">Maximum value for premium devices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <Button variant="outline" onClick={handleBack} size="lg">
                ← Back
              </Button>
              <Button
                onClick={handleNext}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg text-lg px-8"
              >
                Compare Providers →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default SelectDuration;