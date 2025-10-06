import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Shield, TrendingUp, Award } from "lucide-react";
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
        <AdSlot id="recommendation-top-ad" className="mb-8" />

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow"
              >
                <Sparkles className="h-12 w-12 text-primary-foreground" />
              </motion.div>
              <h1 className="mb-3 text-4xl font-bold text-foreground bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                AI-Powered Insurance Recommendation
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Personalized protection plan analysis for your {quizData.device} based on device value, 
                usage patterns, and cost-benefit analysis
              </p>
            </div>

            {/* High CPC Content - Main Recommendation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 rounded-2xl border-2 border-primary bg-gradient-card p-8 shadow-xl"
            >
              <div className="mb-6 flex items-start gap-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary shadow-glow flex-shrink-0"
                >
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-3xl font-bold text-foreground">{recommendation.title}</h2>
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{recommendation.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Why This Plan is Perfect for Your {quizData.device}:
                </h3>
                <ul className="space-y-3">
                  {recommendation.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 bg-card/70 p-4 rounded-xl border border-primary/10"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Cost Savings Analysis */}
            <div className="mb-8 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/30 p-6 shadow-lg">
              <div className="flex gap-4 items-start">
                <TrendingUp className="h-10 w-10 text-accent flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-3 text-lg">Insurance Cost-Benefit Analysis</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Based on current repair cost data, {quizData.device} repairs average $350-550 for screen damage and 
                    $450-750 for water damage. With Samsung Care+, your total out-of-pocket costs are significantly reduced.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="bg-card/70 rounded-lg p-4 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Without Insurance</p>
                      <p className="text-2xl font-bold text-destructive mb-1">$350-750</p>
                      <p className="text-xs text-muted-foreground">Per repair incident</p>
                    </div>
                    <div className="bg-card/70 rounded-lg p-4 border border-primary/20">
                      <p className="text-xs text-muted-foreground mb-1">With Samsung Care+</p>
                      <p className="text-2xl font-bold text-primary mb-1">$29-99</p>
                      <p className="text-xs text-muted-foreground">Deductible only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Device Summary Cards */}
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="rounded-xl bg-gradient-primary/5 border border-primary/20 p-5 shadow-card"
              >
                <h3 className="mb-2 font-bold text-foreground text-sm">Your Device</h3>
                <p className="text-lg font-semibold text-primary">{quizData.device}</p>
                <p className="text-xs text-muted-foreground mt-1">Premium flagship model</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="rounded-xl bg-gradient-accent/5 border border-accent/20 p-5 shadow-card"
              >
                <h3 className="mb-2 font-bold text-foreground text-sm">Coverage Period</h3>
                <p className="text-lg font-semibold text-accent">{quizData.duration} months</p>
                <p className="text-xs text-muted-foreground mt-1">Extended protection</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="rounded-xl bg-gradient-secondary/5 border border-secondary/20 p-5 shadow-card"
              >
                <h3 className="mb-2 font-bold text-foreground text-sm">Provider</h3>
                <p className="text-lg font-semibold text-secondary">{quizData.carrier}</p>
                <p className="text-xs text-muted-foreground mt-1">Network carrier</p>
              </motion.div>
            </div>

            <AdSlot id="recommendation-middle-ad" size="medium" className="mb-8" />

            {/* Expert Insights */}
            <div className="mb-8 rounded-xl bg-muted/50 border border-border p-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Expert Insurance Insights
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Repair Cost Trends:</strong> Samsung flagship device repair costs 
                  have increased due to advanced displays and components. A single screen replacement can cost 
                  40-50% of the device's original value.
                </p>
                <p>
                  <strong className="text-foreground">Insurance ROI:</strong> For devices over $800, comprehensive insurance 
                  pays for itself after just one major repair. Historical data shows 1 in 3 smartphone users experience 
                  accidental damage within 2 years.
                </p>
                <p>
                  <strong className="text-foreground">Coverage Gaps:</strong> Manufacturer warranties don't cover accidental 
                  damage, liquid exposure, or theft. These account for 85% of all device protection claims.
                </p>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <Button variant="outline" onClick={handleBack} size="lg">
                ← Back to Compare
              </Button>
              <Button
                onClick={handleNext}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg text-lg px-8"
              >
                View Final Quote →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Recommendation;