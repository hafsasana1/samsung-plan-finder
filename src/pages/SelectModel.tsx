import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Smartphone, Search } from "lucide-react";
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
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Select Your Device Model</h1>
              <p className="text-muted-foreground">
                Choose your Samsung device to get accurate protection plan pricing
              </p>
            </div>

            <div className="mb-8 rounded-lg bg-accent/10 border border-accent/20 p-4">
              <p className="text-sm text-accent-foreground">
                💡 <strong>Tip:</strong> Flagship phones like the S24 Ultra and Z Fold5 qualify for extended Care+ coverage 
                with more comprehensive protection options.
              </p>
            </div>

            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for your device..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="mb-8 grid gap-3">
              {filteredDevices.map((device) => (
                <button
                  key={device}
                  onClick={() => handleDeviceSelect(device)}
                  className={`rounded-lg border-2 p-4 text-left transition-all ${
                    selectedDevice === device
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{device}</span>
                    {selectedDevice === device && (
                      <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-xs text-primary-foreground">✓</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <AdSlot id="model-ad" className="mb-8" />

            <div className="flex justify-end">
              <Button
                onClick={handleNext}
                disabled={!selectedDevice}
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Continue to Carrier Selection
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default SelectModel;
