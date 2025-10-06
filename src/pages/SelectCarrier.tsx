import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Wifi } from "lucide-react";
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
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Select Your Location & Carrier</h1>
              <p className="text-muted-foreground">
                Insurance costs vary by country and carrier
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Country</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {plansData.countries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => handleCountrySelect(country.code)}
                    className={`rounded-lg border-2 p-4 text-left transition-all ${
                      selectedCountry === country.code
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{country.flag}</span>
                      <span className="font-medium text-foreground">{country.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {selectedCountry && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <h2 className="mb-4 text-lg font-semibold text-foreground">Carrier</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {carriers.map((carrier) => (
                    <button
                      key={carrier}
                      onClick={() => setSelectedCarrier(carrier)}
                      className={`rounded-lg border-2 p-4 text-left transition-all ${
                        selectedCarrier === carrier
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Wifi className="h-5 w-5 text-primary" />
                        <span className="font-medium text-foreground">{carrier}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="mb-8 rounded-lg bg-accent/10 border border-accent/20 p-4">
              <p className="text-sm text-accent-foreground">
                💡 <strong>Tip:</strong> Coverage and pricing differences can be significant between carriers. 
                Unlocked devices often have more flexible insurance options.
              </p>
            </div>

            <AdSlot id="carrier-ad" className="mb-8" />

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedCountry || !selectedCarrier}
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Continue to Duration
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default SelectCarrier;
