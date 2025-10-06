import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Download, Share2, TrendingDown, Shield } from "lucide-react";
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
      recommended: true
    },
    {
      name: "Asurion",
      monthly: devicePlan.asurion[quizData.duration.toString() as keyof typeof devicePlan.asurion],
      total: (parseFloat(devicePlan.asurion[quizData.duration.toString() as keyof typeof devicePlan.asurion].replace('$', '')) * quizData.duration).toFixed(2),
      recommended: false
    },
    {
      name: `${quizData.carrier} Insurance`,
      monthly: devicePlan.carrier[quizData.duration.toString() as keyof typeof devicePlan.carrier],
      total: (parseFloat(devicePlan.carrier[quizData.duration.toString() as keyof typeof devicePlan.carrier].replace('$', '')) * quizData.duration).toFixed(2),
      recommended: false
    },
  ] : [];

  const handleStartOver = () => {
    resetQuiz();
    navigate("/");
  };

  const handleProviderClick = (provider: typeof providers[0]) => {
    const routes: Record<string, string> = {
      "Samsung Care+": "/samsung-care-plus",
      "Asurion": "/asurion-insurance",
    };
    
    const carrierRoute = "/carrier-insurance";
    
    const route = routes[provider.name] || carrierRoute;
    navigate(route, { state: { provider: { ...provider, duration: quizData.duration } } });
  };

  return (
    <QuizLayout currentStep={6} totalSteps={6}>
      <div className="container py-12">
        <AdSlot id="quote-top-ad" className="mb-8" />

        <div className="mx-auto max-w-5xl">
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
                className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow"
              >
                <FileText className="h-12 w-12 text-primary-foreground" />
              </motion.div>
              <h1 className="mb-3 text-4xl font-bold text-foreground bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Your Personalized Insurance Quote
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete cost breakdown and savings analysis for {quizData.device} protection plans
              </p>
            </div>

            <div className="mb-8 rounded-2xl border-2 border-primary/20 bg-gradient-card p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Quote Summary
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-card/70 rounded-xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Device Model</p>
                  <p className="font-bold text-foreground text-lg">{quizData.device}</p>
                </div>
                <div className="bg-card/70 rounded-xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Coverage Period</p>
                  <p className="font-bold text-foreground text-lg">{quizData.duration} months</p>
                </div>
                <div className="bg-card/70 rounded-xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Region</p>
                  <p className="font-bold text-foreground text-lg">{quizData.country}</p>
                </div>
                <div className="bg-card/70 rounded-xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Carrier</p>
                  <p className="font-bold text-foreground text-lg">{quizData.carrier}</p>
                </div>
              </div>
            </div>

            <div className="mb-8 space-y-4">
              <h2 className="text-2xl font-bold text-foreground mb-4">Insurance Cost Comparison</h2>
              {providers.map((provider, index) => (
                <motion.div
                  key={provider.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`rounded-2xl border-2 p-6 shadow-lg ${
                    provider.recommended ? 'border-primary bg-gradient-primary/5' : 'border-border bg-card'
                  }`}
                >
                  {provider.recommended && (
                    <div className="mb-3">
                      <span className="inline-block text-xs font-bold bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full">
                        Recommended Choice
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{provider.name}</h3>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{provider.monthly}/month</span>
                        <span>×</span>
                        <span>{quizData.duration} months</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-1">Total Cost</p>
                      <p className="text-4xl font-bold text-foreground">${provider.total}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90 transition-opacity" 
                      size="lg"
                      onClick={() => handleProviderClick(provider)}
                      data-testid={`button-get-${provider.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Get {provider.name} →
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <AdSlot id="quote-middle-ad" className="mb-8" />

            <div className="mb-8 rounded-xl bg-accent/10 border border-accent/30 p-6">
              <div className="flex gap-3 items-start">
                <TrendingDown className="h-8 w-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Potential Savings with Insurance</h3>
                  <p className="text-sm text-muted-foreground">
                    Without insurance, a single screen repair for {quizData.device} costs $350-450. With Samsung Care+, 
                    your deductible is only $29-99, saving you up to $350 per incident.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8 flex gap-4">
              <Button variant="outline" className="flex-1" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Quote PDF
              </Button>
              <Button variant="outline" className="flex-1" size="lg">
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