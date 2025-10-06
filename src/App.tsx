import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./contexts/QuizContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import SelectModel from "./pages/SelectModel";
import SelectCarrier from "./pages/SelectCarrier";
import SelectDuration from "./pages/SelectDuration";
import ComparePlans from "./pages/ComparePlans";
import Recommendation from "./pages/Recommendation";
import Quote from "./pages/Quote";
import SamsungCarePlus from "./pages/SamsungCarePlus";
import AsurionInsurance from "./pages/AsurionInsurance";
import CarrierInsurance from "./pages/CarrierInsurance";
import Tips from "./pages/Tips";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <QuizProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/model" element={<SelectModel />} />
            <Route path="/carrier" element={<SelectCarrier />} />
            <Route path="/duration" element={<SelectDuration />} />
            <Route path="/compare" element={<ComparePlans />} />
            <Route path="/recommendation" element={<Recommendation />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/samsung-care-plus" element={<SamsungCarePlus />} />
            <Route path="/asurion-insurance" element={<AsurionInsurance />} />
            <Route path="/carrier-insurance" element={<CarrierInsurance />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QuizProvider>
  </QueryClientProvider>
);

export default App;
