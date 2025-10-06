import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Smartphone, Search, Shield, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QuizLayout from "@/components/QuizLayout";
import AdSlot from "@/components/AdSlot";
import { useQuiz } from "@/contexts/QuizContext";
import plansData from "@/data/plans.json";

const SelectModel = () => {
  const navigate = useNavigate();
  const { updateQuizData } = useQuiz();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");

  const filteredDevices = plansData.devices.filter(device =>
    device.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeviceSelect = (device: string) => {
    setSelectedDevice(device);
  };

  const handleNext = () => {
    if (selectedDevice) {
      updateQuizData({ device: selectedDevice });
      navigate("/carrier");
    }
  };

  return (
    <QuizLayout currentStep={1}>
      <div className="container py-12">
        <AdSlot id="model-top-ad" className="mb-8" />

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
                <Smartphone className="h-10 w-10 text-primary-foreground" />
              </motion.div>
              <h1 className="mb-3 text-4xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Select Your Samsung Device Model
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose your Samsung Galaxy device to get personalized protection plan pricing. 
                Compare Samsung Care+, carrier insurance, and third-party options instantly.
              </p>
            </div>

            {/* High CPC Content Section */}
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-xl bg-gradient-card border border-primary/20 p-5 shadow-card"
              >
                <Shield className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Premium Protection</h3>
                <p className="text-sm text-muted-foreground">
                  Flagship devices qualify for comprehensive Samsung Care+ coverage with same-day replacement
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-xl bg-gradient-card border border-accent/20 p-5 shadow-card"
              >
                <DollarSign className="h-8 w-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Save Money</h3>
                <p className="text-sm text-muted-foreground">
                  Compare monthly premiums, deductibles, and total coverage costs across all providers
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-xl bg-gradient-card border border-secondary/20 p-5 shadow-card"
              >
                <TrendingUp className="h-8 w-8 text-secondary mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Current Rates</h3>
                <p className="text-sm text-muted-foreground">
                  Updated insurance rates for Galaxy S24 Ultra, Z Fold6, and all current models
                </p>
              </motion.div>
            </div>

            <div className="mb-8 rounded-xl bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/30 p-6 shadow-lg">
              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 flex-shrink-0">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Expert Insurance Tip</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Flagship phones like the Galaxy S24 Ultra, Z Fold6, and Z Flip6 qualify for extended Samsung Care+ with Theft & Loss protection. 
                    This premium coverage includes same-day device replacement, accidental damage protection, and mechanical breakdown coverage.
                  </p>
                  <p className="text-sm font-semibold text-accent-foreground">
                    Average savings: $150-300/year by comparing plans before purchasing
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Search for Your Device Model
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search Galaxy S24, Z Fold, A-series..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base border-2 focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-sm font-semibold text-foreground mb-3">Available Samsung Models</h2>
              <div className="grid gap-3">
                {filteredDevices.map((device) => (
                  <motion.button
                    key={device}
                    onClick={() => handleDeviceSelect(device)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-xl border-2 p-5 text-left transition-all ${
                      selectedDevice === device
                        ? "border-primary bg-gradient-primary/5 shadow-md"
                        : "border-border bg-card hover:border-primary/50 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground text-lg">{device}</span>
                      {selectedDevice === device && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="h-6 w-6 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow"
                        >
                          <span className="text-xs text-primary-foreground font-bold">✓</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <AdSlot id="model-middle-ad" className="mb-8" />

            {/* Additional High CPC Content */}
            <div className="mb-8 rounded-xl bg-muted/50 border border-border p-6">
              <h3 className="font-bold text-foreground mb-3">Why Device Insurance Matters</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Screen Repairs:</strong> Samsung Galaxy flagship screens cost $200-$400 to repair. 
                  With Samsung Care+, deductibles are as low as $29.
                </p>
                <p>
                  <strong className="text-foreground">Theft Protection:</strong> Device theft claims have increased 40% since 2023. 
                  Comprehensive insurance plans include theft and loss coverage.
                </p>
                <p>
                  <strong className="text-foreground">Water Damage:</strong> Even IP68-rated phones need protection. Accidental liquid damage 
                  is covered under most premium insurance plans.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                onClick={handleNext}
                disabled={!selectedDevice}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg text-lg px-8"
              >
                Continue to Carrier Selection →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default SelectModel;