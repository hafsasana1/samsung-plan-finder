import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Clock, Phone, DollarSign, MapPin, Smartphone, ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdSlot from "@/components/AdSlot";
import { useEffect } from "react";

const AsurionInsurance = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const providerData = (location.state as any)?.provider;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const officialLink = "https://www.asurion.com/mobile/";

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <AdSlot id="asurion-top-ad" className="mb-8" />

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
              <Shield className="h-12 w-12 text-primary-foreground" />
            </motion.div>
            <h1 className="mb-3 text-5xl font-bold text-foreground bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent" data-testid="heading-asurion">
              Asurion Device Protection Insurance 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading third-party mobile device insurance provider with next-day replacement, multi-device coverage, and comprehensive smartphone protection plans
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
                    data-testid="button-get-asurion"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Get Asurion Protection
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mb-8 rounded-xl bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 border border-accent/30 p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-accent" />
              Asurion Mobile Insurance Coverage 2025
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Asurion is America's largest device protection provider, serving over 300 million customers worldwide. With competitive pricing, 
              fast replacement services, and flexible coverage options, Asurion insurance protects your Samsung Galaxy and other smartphones 
              from accidental damage, theft, loss, and mechanical breakdowns.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-card rounded-xl p-4 border border-border">
                <p className="font-bold text-accent text-3xl mb-2">$49-149</p>
                <p className="text-sm text-muted-foreground">Deductible range for repairs and replacements</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <p className="font-bold text-primary text-3xl mb-2">1-2 Days</p>
                <p className="text-sm text-muted-foreground">Next-day replacement in most metro areas</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <p className="font-bold text-secondary text-3xl mb-2">3 Claims</p>
                <p className="text-sm text-muted-foreground">Annual claim limit for device replacements</p>
              </div>
            </div>
          </div>

          <AdSlot id="asurion-middle-ad" className="mb-8" />

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-accent" />
                  What Asurion Insurance Covers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3" data-testid="feature-cracked-screen">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Cracked Screen & Accidental Damage</p>
                      <p className="text-sm text-muted-foreground">Full coverage for screen cracks, drops, spills, and physical damage to your device</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-testid="feature-theft">
                    <Smartphone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Theft & Loss Protection Add-on</p>
                      <p className="text-sm text-muted-foreground">Optional coverage for stolen or lost devices with device replacement (additional monthly fee)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-testid="feature-malfunction">
                    <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Hardware Malfunction Coverage</p>
                      <p className="text-sm text-muted-foreground">Protection against battery failures, charging port issues, and hardware defects after manufacturer warranty</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-testid="feature-multi-device">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Multi-Device Protection Plans</p>
                      <p className="text-sm text-muted-foreground">Bundle coverage for smartphones, tablets, laptops, and smart watches with discounted rates</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-accent" />
                  Asurion Pricing Structure 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-bold text-foreground mb-1">Premium Smartphone Insurance</p>
                    <p className="text-2xl font-bold text-accent mb-2">$13.25-17/month</p>
                    <p className="text-sm text-muted-foreground">For flagship devices like Samsung Galaxy S24, iPhone 15, Google Pixel 9</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-bold text-foreground mb-1">Mid-Range Device Protection</p>
                    <p className="text-2xl font-bold text-primary mb-2">$9-13/month</p>
                    <p className="text-sm text-muted-foreground">Coverage for Galaxy A series, mid-tier devices valued $400-700</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="font-bold text-foreground mb-1">Basic Phone Insurance</p>
                    <p className="text-2xl font-bold text-secondary mb-2">$6-9/month</p>
                    <p className="text-sm text-muted-foreground">Affordable protection for budget smartphones under $400</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8 rounded-xl bg-muted/50 border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Clock className="h-7 w-7 text-accent" />
              Asurion Claim Process & Replacement Timeline
            </h3>
            <div className="grid gap-4 md:grid-cols-4 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">File Claim 24/7</h4>
                <p className="text-sm text-muted-foreground">Online or phone claim filing with immediate approval status</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Pay Deductible</h4>
                <p className="text-sm text-muted-foreground">$49-149 deductible based on device value and damage type</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Device Shipped</h4>
                <p className="text-sm text-muted-foreground">Next-day or 2-day shipping to your address</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-accent">4</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Return Old Device</h4>
                <p className="text-sm text-muted-foreground">Mail back damaged device using prepaid return label</p>
              </div>
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Average Replacement Time:</strong> Most customers receive replacement devices within 1-2 business days. 
                Same-day replacement available in select metro areas (additional fee may apply). Expedited overnight shipping available for urgent claims.
              </p>
            </div>
          </div>

          <AdSlot id="asurion-bottom-ad" className="mb-8" />

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Asurion vs Manufacturer Insurance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-foreground font-semibold">Feature</th>
                      <th className="text-center py-3 text-foreground font-semibold">Asurion</th>
                      <th className="text-center py-3 text-foreground font-semibold">Samsung Care+</th>
                      <th className="text-center py-3 text-foreground font-semibold">AppleCare+</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3">Monthly Premium (Flagship)</td>
                      <td className="text-center">$13.25-17</td>
                      <td className="text-center">$11.99-13.99</td>
                      <td className="text-center">$9.99-13.99</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Screen Repair Deductible</td>
                      <td className="text-center">$49-99</td>
                      <td className="text-center">$29</td>
                      <td className="text-center">$29</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Replacement Timeline</td>
                      <td className="text-center font-semibold text-accent">1-2 Days</td>
                      <td className="text-center">Same Day</td>
                      <td className="text-center">1-2 Days</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Theft & Loss Coverage</td>
                      <td className="text-center">✓ Add-on</td>
                      <td className="text-center">✓ Included</td>
                      <td className="text-center">✓ Included</td>
                    </tr>
                    <tr>
                      <td className="py-3">Multi-Device Discount</td>
                      <td className="text-center font-semibold text-accent">✓ Yes</td>
                      <td className="text-center">Limited</td>
                      <td className="text-center">Limited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Asurion Device Insurance?</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Nationwide Coverage Network</p>
                  <p className="text-sm text-muted-foreground">Over 11,000 authorized repair locations and service centers across the United States</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Expert Tech Support 24/7</p>
                  <p className="text-sm text-muted-foreground">Free unlimited technical support for device setup, software issues, and troubleshooting</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Flexible Payment Options</p>
                  <p className="text-sm text-muted-foreground">Monthly or annual payment plans with no long-term contracts or cancellation fees</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Battery Replacement Service</p>
                  <p className="text-sm text-muted-foreground">Free battery replacement when capacity drops below 80% (with active coverage)</p>
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
              data-testid="button-get-protection"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Get Asurion Protection Now
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AsurionInsurance;
