import { ReactNode } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import FooterAds from "./FooterAds";
import ProgressBar from "./ProgressBar";

interface QuizLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps?: number;
  showProgress?: boolean;
}

const QuizLayout = ({ 
  children, 
  currentStep, 
  totalSteps = 7,
  showProgress = true 
}: QuizLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {showProgress && (
        <div className="sticky top-16 z-40 bg-background border-b border-border">
          <div className="container py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          </div>
        </div>
      )}
      
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      
      <FooterAds />
      <Footer />
    </div>
  );
};

export default QuizLayout;
