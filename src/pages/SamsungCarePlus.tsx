import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Clock, Award, DollarSign, Phone, Smartphone, Wrench, TrendingDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdSlot from "@/components/AdSlot";
import { useEffect } from "react";

const SamsungCarePlus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const providerData = (location.state as any)?.provider;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const officialLink = "https://www.samsung.com/us/support/samsung-care-plus/";

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <AdSlot id="samsungcare-top-ad" className="mb-8" />

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
            <h1 className="mb-3 text-5xl font-bold text-foreground bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent" data-testid="heading-samsung-care-plus">
              Samsung Care+ Premium Device Protection
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Official Samsung insurance protection plan with same-day replacement, expert repairs, and comprehensive coverage for Galaxy devices
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
                    data-testid="button-get-samsung-care"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Get Samsung Care+ Official
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mb-8 rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/30 p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Why Choose Samsung Care+ Insurance?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With smartphone repair costs reaching record highs, Samsung Care+ offers the most comprehensive device protection plan 
              for Galaxy phones and tablets. Save hundreds on repairs, replacements, and technical support with Samsung's official insurance program.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-card rounded-xl p-4 border border-border">
                <p className="font-bold text-primary text-3xl mb-2">$29-99</p>
                <p className="text-sm text-muted-foreground">Low deductible for screen repairs vs $350-450 without insurance</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <p className="font-bold text-accent text-3xl mb-2">Same Day</p>
                <p className="text-sm text-muted-foreground">Device replacement service in most major cities</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <p className="font-bold text-secondary text-3xl mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">Expert technical support and claim filing assistance</p>
              </div>
            </div>
          </div>

          <AdSlot id="samsungcare-middle-ad" className="mb-8" />

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  Comprehensive Coverage Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3" data-testid="feature-accidental-damage">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Accidental Damage Protection</p>
                      <p className="text-sm text-muted-foreground">Covers drops, spills, cracked screens, and liquid damage for Galaxy smartphones</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-testid="feature-theft-loss">
                    <Smartphone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Theft & Loss Protection</p>
                      <p className="text-sm text-muted-foreground">Full device replacement if your Samsung phone is stolen or lost (included in premium plans)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-testid="feature-mechanical">
                    <Wrench className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Mechanical & Electrical Breakdown</p>
                      <p className="text-sm text-muted-foreground">Coverage for hardware failures, battery issues, and manufacturing defects after warranty expires</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-testid="feature-authorized">
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Authorized Samsung Repairs</p>
                      <p className="text-sm text-muted-foreground">All repairs done by certified Samsung technicians using genuine OEM parts</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  Insurance Cost Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-bold text-foreground mb-1">Galaxy S24 Ultra Insurance</p>
                    <p className="text-2xl font-bold text-primary mb-2">$11.99/month</p>
                    <p className="text-sm text-muted-foreground">Premium flagship device protection with theft & loss coverage included</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-bold text-foreground mb-1">Galaxy Z Fold 6 Insurance</p>
                    <p className="text-2xl font-bold text-accent mb-2">$13.99/month</p>
                    <p className="text-sm text-muted-foreground">Specialized foldable device insurance with hinge protection coverage</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="font-bold text-foreground mb-1">Galaxy A Series Insurance</p>
                    <p className="text-2xl font-bold text-secondary mb-2">$7.99/month</p>
                    <p className="text-sm text-muted-foreground">Affordable protection for mid-range Galaxy smartphones and tablets</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8 rounded-xl bg-muted/50 border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingDown className="h-7 w-7 text-accent" />
              Save Money on Samsung Device Repairs
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                <p className="text-sm font-semibold text-destructive mb-2">Without Insurance:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Screen replacement: $350-450</li>
                  <li>• Back glass repair: $200-280</li>
                  <li>• Battery replacement: $100-150</li>
                  <li>• Water damage repair: $400-600</li>
                  <li>• Full device replacement: $800-1,400</li>
                </ul>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-sm font-semibold text-primary mb-2">With Samsung Care+:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Screen repair deductible: $29</li>
                  <li>• Other damage deductible: $99</li>
                  <li>• Battery service: Covered free</li>
                  <li>• Claim limit: 3 per year</li>
                  <li>• Potential savings: Up to $1,200/year</li>
                </ul>
              </div>
            </div>
          </div>

          <AdSlot id="samsungcare-bottom-ad" className="mb-8" />

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                How Samsung Care+ Claims Work
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">File Claim Online</h4>
                  <p className="text-sm text-muted-foreground">Submit claim 24/7 via Samsung Members app or website with instant approval</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Pay Deductible</h4>
                  <p className="text-sm text-muted-foreground">Low $29-99 deductible charged online with secure payment processing</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Get Repaired</h4>
                  <p className="text-sm text-muted-foreground">Same-day repair at authorized Samsung service centers or mail-in service</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Device Returned</h4>
                  <p className="text-sm text-muted-foreground">Receive repaired device within 24-48 hours with genuine Samsung parts</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Phone className="h-7 w-7 text-primary" />
              Expert Technical Support Included
            </h3>
            <p className="text-muted-foreground mb-4">
              Samsung Care+ includes unlimited access to expert technical support for all your Galaxy devices. Get help with:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Device setup, data transfer, and Samsung account assistance</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Software troubleshooting, app issues, and OS updates</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Battery optimization, performance tuning, and storage management</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Security settings, privacy controls, and Samsung Knox configuration</span>
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
              data-testid="button-enroll-now"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Enroll in Samsung Care+ Now
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SamsungCarePlus;
