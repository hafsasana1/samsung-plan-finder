import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, CheckCircle, DollarSign, AlertCircle, Phone, Clock, MapPin, ExternalLink, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdSlot from "@/components/AdSlot";
import { useEffect } from "react";
import { useQuiz } from "@/contexts/QuizContext";

const CarrierInsurance = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { quizData } = useQuiz();
  const providerData = (location.state as any)?.provider;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const carrierLinks: Record<string, string> = {
    "Verizon": "https://www.verizon.com/support/device-protection/",
    "AT&T": "https://www.att.com/device-support/insurance/",
    "T-Mobile": "https://www.t-mobile.com/protection/device-protection",
    "Unlocked": "https://www.samsung.com/us/support/samsung-care-plus/"
  };

  const officialLink = carrierLinks[quizData.carrier] || "https://www.samsung.com/us/support/samsung-care-plus/";

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <AdSlot id="carrier-top-ad" className="mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-8 text-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow"
            >
              <Phone className="h-12 w-12 text-primary-foreground" />
            </motion.div>
            <h1 className="mb-3 text-5xl font-bold text-foreground bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent" data-testid="heading-carrier-insurance">
              {quizData.carrier} Device Protection Insurance
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Carrier-provided mobile phone insurance with bundled billing, network-exclusive benefits, and comprehensive device coverage
            </p>
          </div>

          {providerData && (
            <Card className="mb-8 border-2 border-primary bg-gradient-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Your Estimated Cost</p>
                    <p className="text-4xl font-bold text-foreground">{providerData.monthly}/month</p>
                    <p className="text-muted-foreground">Total: ${providerData.total} for {providerData.duration} months</p>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg"
                    onClick={() => window.open(officialLink, '_blank')}
                    data-testid="button-get-carrier"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Get {quizData.carrier} Protection
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mb-8 rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/30 p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              Carrier Insurance Plans Overview
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Mobile carrier insurance plans like {quizData.carrier} Device Protection offer convenient billing through your monthly phone bill, 
              exclusive network benefits, and streamlined claim processing. Compare pricing, deductibles, and coverage options to find the 
              best smartphone protection plan for your needs.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-card rounded-xl p-4 border border-border">
                <p className="font-bold text-primary text-3xl mb-2">$99-249</p>
                <p className="text-sm text-muted-foreground">Deductible range varies by device value and claim type</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <p className="font-bold text-secondary text-3xl mb-2">2-3 Days</p>
                <p className="text-sm text-muted-foreground">Standard replacement device shipping timeline</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <p className="font-bold text-accent text-3xl mb-2">Bundle</p>
                <p className="text-sm text-muted-foreground">Add to monthly bill with other carrier services</p>
              </div>
            </div>
          </div>

          <AdSlot id="carrier-middle-ad" className="mb-8" />

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  Carrier Insurance Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3" data-testid="feature-billing">
                    <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Simplified Billing & Payment</p>
                      <p className="text-sm text-muted-foreground">Insurance premium added directly to monthly carrier bill - no separate payment required</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-testid="feature-network">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Network Store Support</p>
                      <p className="text-sm text-muted-foreground">File claims and get assistance at any carrier retail location nationwide</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-testid="feature-damage">
                    <Smartphone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Basic Damage Coverage</p>
                      <p className="text-sm text-muted-foreground">Protection against cracked screens, water damage, and accidental drops</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-testid="feature-replacement">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Device Replacement Service</p>
                      <p className="text-sm text-muted-foreground">Like-new or refurbished replacement devices for covered claims (2 claims per year)</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  Major Carrier Insurance Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-bold text-foreground mb-1">Verizon Mobile Protect</p>
                    <p className="text-2xl font-bold text-primary mb-2">$12.99-17/month</p>
                    <p className="text-sm text-muted-foreground">Includes phone insurance, tech support, and cloud storage (500GB)</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="font-bold text-foreground mb-1">AT&T Protect Advantage</p>
                    <p className="text-2xl font-bold text-secondary mb-2">$12.99-15/month</p>
                    <p className="text-sm text-muted-foreground">Device protection plus identity theft monitoring and fraud protection</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-bold text-foreground mb-1">T-Mobile Protection 360</p>
                    <p className="text-2xl font-bold text-accent mb-2">$12-18/month</p>
                    <p className="text-sm text-muted-foreground">Coverage includes AppleCare/Samsung Care services plus T-Mobile benefits</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8 rounded-xl bg-destructive/10 border border-destructive/30 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertCircle className="h-7 w-7 text-destructive" />
              Important Limitations of Carrier Insurance
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold text-foreground mb-2">Higher Deductibles</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Carrier insurance typically charges $99-249 deductibles compared to $29-99 for manufacturer plans like Samsung Care+. 
                  Screen repairs alone can cost $149-199 deductible with carrier insurance.
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>Example:</strong> Samsung S24 Ultra screen repair = $199 deductible with AT&T vs $29 with Samsung Care+
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold text-foreground mb-2">Limited Claim Allowance</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Most carrier plans limit you to 2 claims per 12 months, while Samsung Care+ and Asurion allow 3 annual claims. 
                  This can be restrictive for users prone to device accidents.
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>Impact:</strong> Heavy device users may exceed claim limits and face full replacement costs
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold text-foreground mb-2">Slower Replacement Times</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Standard 2-3 day shipping for replacement devices, compared to same-day or next-day service from Samsung Care+ 
                  and Asurion in major metro areas.
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>Downtime:</strong> You may be without a phone for 3-5 business days during replacement process
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold text-foreground mb-2">Network Lock-in</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Coverage usually applies only to devices purchased through your carrier. If you switch carriers or buy unlocked devices, 
                  you may need new insurance.
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>Flexibility:</strong> Less portable than third-party or manufacturer insurance plans
                </p>
              </div>
            </div>
          </div>

          <AdSlot id="carrier-bottom-ad" className="mb-8" />

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                How Carrier Insurance Claims Work
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Visit Store or Call</h4>
                  <p className="text-sm text-muted-foreground">File claim online, by phone, or at carrier retail store</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Pay Deductible</h4>
                  <p className="text-sm text-muted-foreground">$99-249 charged to your account or credit card</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Wait for Shipping</h4>
                  <p className="text-sm text-muted-foreground">2-3 business days for replacement device delivery</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Return Damaged</h4>
                  <p className="text-sm text-muted-foreground">Send back broken device in prepaid return package</p>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Pro Tip:</strong> Check if your carrier offers in-store device replacement or loaner phones 
                  while waiting for your replacement. Some premium plans include temporary device rental at no extra cost.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Carrier vs. Manufacturer Insurance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-foreground font-semibold">Feature</th>
                      <th className="text-center py-3 text-foreground font-semibold">Carrier Plans</th>
                      <th className="text-center py-3 text-foreground font-semibold">Samsung Care+</th>
                      <th className="text-center py-3 text-foreground font-semibold">Asurion</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3">Monthly Premium</td>
                      <td className="text-center">$12-18</td>
                      <td className="text-center">$11.99-13.99</td>
                      <td className="text-center">$13.25-17</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Screen Repair Deductible</td>
                      <td className="text-center text-destructive">$99-199</td>
                      <td className="text-center font-semibold text-primary">$29</td>
                      <td className="text-center">$49-99</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Replacement Speed</td>
                      <td className="text-center">2-3 Days</td>
                      <td className="text-center font-semibold text-primary">Same Day</td>
                      <td className="text-center">1-2 Days</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Annual Claim Limit</td>
                      <td className="text-center text-destructive">2 Claims</td>
                      <td className="text-center">3 Claims</td>
                      <td className="text-center">3 Claims</td>
                    </tr>
                    <tr>
                      <td className="py-3">Bundled Billing</td>
                      <td className="text-center font-semibold text-primary">✓ Yes</td>
                      <td className="text-center">Separate</td>
                      <td className="text-center">Separate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">When Carrier Insurance Makes Sense</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Bundled Convenience</p>
                  <p className="text-sm text-muted-foreground">If you prefer single-bill simplicity and already have multiple carrier services bundled together</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Carrier Loyalty Benefits</p>
                  <p className="text-sm text-muted-foreground">Long-term customers may receive discounted insurance rates or waived deductibles as rewards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">In-Store Support</p>
                  <p className="text-sm text-muted-foreground">Prefer face-to-face assistance at retail locations rather than online or phone-based claims</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Add-on Services Value</p>
                  <p className="text-sm text-muted-foreground">Carrier plans often include tech support, cloud storage, and security features beyond device protection</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate(-1)}
              data-testid="button-back"
            >
              ← Back to Quote
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg"
              onClick={() => window.open(officialLink, '_blank')}
              data-testid="button-learn-more"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Learn More at {quizData.carrier}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CarrierInsurance;
