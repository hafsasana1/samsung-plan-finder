import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import AdSlot from "@/components/AdSlot";
import { useQuiz } from "@/contexts/QuizContext";
import plansData from "@/data/plans.json";

const Quote = () => {
  const navigate = useNavigate();
  const { quizData, resetQuiz } = useQuiz();

  const devicePlan = quizData.device ? plansData.plans[quizData.device as keyof typeof plansData.plans] : null;
  
  const providers = devicePlan ? [
    {
      name: "Samsung Care+",
      monthly: devicePlan.samsungCare[quizData.duration.toString() as keyof typeof devicePlan.samsungCare],
      total: (parseFloat(devicePlan.samsungCare[quizData.duration.toString() as keyof typeof devicePlan.samsungCare].replace('$', '')) * quizData.duration).toFixed(2),
    },
    {
      name: "Asurion",
      monthly: devicePlan.asurion[quizData.duration.toString() as keyof typeof devicePlan.asurion],
      total: (parseFloat(devicePlan.asurion[quizData.duration.toString() as keyof typeof devicePlan.asurion].replace('$', '')) * quizData.duration).toFixed(2),
    },
    {
      name: `${quizData.carrier} Insurance`,
      monthly: devicePlan.carrier[quizData.duration.toString() as keyof typeof devicePlan.carrier],
      total: (parseFloat(devicePlan.carrier[quizData.duration.toString() as keyof typeof devicePlan.carrier].replace('$', '')) * quizData.duration).toFixed(2),
    },
  ] : [];

  const handleStartOver = () => {
    resetQuiz();
    navigate("/");
  };

  return (
    <QuizLayout currentStep={6} totalSteps={6}>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Your Personalized Quote</h1>
              <p className="text-muted-foreground">
                Complete breakdown of protection costs for your {quizData.device}
              </p>
            </div>

            <AdSlot id="quote-top-ad" className="mb-8" />

            <div className="mb-8 rounded-lg border border-border bg-card p-6 shadow-card">
              <h2 className="mb-4 text-xl font-semibold text-foreground">Quote Summary</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Device</p>
                  <p className="font-semibold text-foreground">{quizData.device}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Coverage Period</p>
                  <p className="font-semibold text-foreground">{quizData.duration} months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Country</p>
                  <p className="font-semibold text-foreground">{quizData.country}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Carrier</p>
                  <p className="font-semibold text-foreground">{quizData.carrier}</p>
                </div>
              </div>
            </div>

            <div className="mb-8 space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Cost Comparison</h2>
              {providers.map((provider, index) => (
                <motion.div
                  key={provider.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="rounded-lg border border-border bg-card p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{provider.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {provider.monthly}/month × {quizData.duration} months
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">${provider.total}</p>
                      <p className="text-sm text-muted-foreground">Total cost</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                      Get {provider.name}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mb-8 flex gap-4">
              <Button variant="outline" className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                Download Quote
              </Button>
              <Button variant="outline" className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                Share Quote
              </Button>
            </div>

            <AdSlot id="quote-bottom-ad" className="mb-8" />

            <div className="text-center">
              <Button onClick={handleStartOver} variant="outline" size="lg">
                Start New Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Quote;
