import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Wifi, DollarSign, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import AdSlot from "@/components/AdSlot";
import { useQuiz } from "@/contexts/QuizContext";
import plansData from "@/data/plans.json";

const SelectCarrier = () => {
  const navigate = useNavigate();
  const { quizData, updateQuizData } = useQuiz();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCarrier, setSelectedCarrier] = useState("");

  const carriers = selectedCountry ? plansData.carriers[selectedCountry as keyof typeof plansData.carriers] : [];

  const handleCountrySelect = (countryCode: string) => {
    setSelectedCountry(countryCode);
    setSelectedCarrier("");
  };

  const handleNext = () => {
    if (selectedCountry && selectedCarrier) {
      updateQuizData({ 
        country: selectedCountry,
        carrier: selectedCarrier 
      });
      navigate("/duration");
    }
  };

  const handleBack = () => {
    navigate("/model");
  };

  return (
    <QuizLayout currentStep={2}>
      <div className="container py-12">
        <AdSlot id="carrier-top-ad" className="mb-8" />

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
                className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-accent shadow-glow"
              >
                <Globe className="h-10 w-10 text-accent-foreground" />
              </motion.div>
              <h1 className="mb-3 text-4xl font-bold text-foreground bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Select Your Location & Carrier
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Samsung device insurance costs and coverage options vary significantly by country and carrier network. 
                Select your location to see accurate pricing.
              </p>
            </div>

            {/* High CPC Content Section */}
            <div className="mb-8 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 p-6 shadow-lg">
              <div className="flex gap-4 items-start">
                <DollarSign className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Carrier Insurance Price Differences</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Insurance premiums can vary by up to 30% between carriers for the same device. AT&T, Verizon, and T-Mobile 
                    each offer different protection plans through providers like Asurion and Servify.
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs">
                    <div className="bg-card/50 rounded-lg p-3 border border-border">
                      <p className="font-semibold text-foreground">Unlocked Devices</p>
                      <p className="text-muted-foreground">More insurance provider options, typically 10-20% cheaper</p>
                    </div>
                    <div className="bg-card/50 rounded-lg p-3 border border-border">
                      <p className="font-semibold text-foreground">Carrier-Locked</p>
                      <p className="text-muted-foreground">Limited to carrier insurance, may include bundle discounts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Select Your Country
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {plansData.countries.map((country) => (
                  <motion.button
                    key={country.code}
                    onClick={() => handleCountrySelect(country.code)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-xl border-2 p-5 text-left transition-all ${
                      selectedCountry === country.code
                        ? "border-primary bg-gradient-primary/5 shadow-md"
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{country.flag}</span>
                      <div>
                        <span className="font-semibold text-foreground text-lg block">{country.name}</span>
                        <span className="text-xs text-muted-foreground">Click to view carrier options</span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {selectedCountry && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-accent" />
                  Select Your Carrier Network
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {carriers.map((carrier) => (
                    <motion.button
                      key={carrier}
                      onClick={() => setSelectedCarrier(carrier)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`rounded-xl border-2 p-5 text-left transition-all ${
                        selectedCarrier === carrier
                          ? "border-accent bg-gradient-accent/5 shadow-md"
                          : "border-border bg-card hover:border-accent/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                          <Wifi className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <span className="font-semibold text-foreground text-lg block">{carrier}</span>
                          <span className="text-xs text-muted-foreground">Tap to select</span>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            <AdSlot id="carrier-middle-ad" className="mb-8" />

            {/* Additional High CPC Content */}
            <div className="mb-8 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-accent/30 p-6 shadow-lg">
              <div className="flex gap-3 items-start">
                <Info className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Carrier Insurance Comparison</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="bg-card/70 rounded-lg p-4 border border-border">
                      <p className="font-semibold text-foreground mb-1">Verizon Total Mobile Protection</p>
                      <p>Covers up to $400 in repairs, includes AppleCare-style support. Deductibles: $29-$249 based on device.</p>
                    </div>
                    <div className="bg-card/70 rounded-lg p-4 border border-border">
                      <p className="font-semibold text-foreground mb-1">AT&T Protect Advantage</p>
                      <p>ProTech support included, same-day replacement in select markets. Monthly cost: $8.99-$17 depending on tier.</p>
                    </div>
                    <div className="bg-card/70 rounded-lg p-4 border border-border">
                      <p className="font-semibold text-foreground mb-1">T-Mobile Protection 360</p>
                      <p>Includes device insurance, malware protection, and McAfee security. Comprehensive coverage at $18/month.</p>
                    </div>
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
                disabled={!selectedCountry || !selectedCarrier}
                size="lg"
                className="bg-gradient-accent hover:opacity-90 transition-opacity shadow-lg text-lg px-8"
              >
                Continue to Duration →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default SelectCarrier;