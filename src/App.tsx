import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./contexts/QuizContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";

const SelectModel = lazy(() => import("./pages/SelectModel"));
const SelectCarrier = lazy(() => import("./pages/SelectCarrier"));
const SelectDuration = lazy(() => import("./pages/SelectDuration"));
const ComparePlans = lazy(() => import("./pages/ComparePlans"));
const Recommendation = lazy(() => import("./pages/Recommendation"));
const Quote = lazy(() => import("./pages/Quote"));
const SamsungCarePlus = lazy(() => import("./pages/SamsungCarePlus"));
const AsurionInsurance = lazy(() => import("./pages/AsurionInsurance"));
const CarrierInsurance = lazy(() => import("./pages/CarrierInsurance"));
const Tips = lazy(() => import("./pages/Tips"));
const About = lazy(() => import("./pages/About"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const AffiliateDisclosure = lazy(() => import("./pages/AffiliateDisclosure"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background">
    <div className="text-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4"></div>
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <QuizProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<LoadingFallback />}>
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QuizProvider>
  </QueryClientProvider>
);

export default App;
