import { motion } from "framer-motion";
import { Shield, CheckCircle, TrendingDown, Clock, DollarSign, Award, Smartphone, AlertTriangle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-subtle py-8 md:py-12">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Samsung Device Protection</span>
                </div>
                
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Find the Best Samsung Care+ Insurance & Device Protection Plan
                </h1>
                
                <p className="mb-6 text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
                  Compare Samsung Care+, carrier insurance plans, and third-party device protection providers. 
                  Get personalized Galaxy smartphone insurance recommendations and accurate cost estimates for screen repair coverage, 
                  theft protection, and mechanical breakdown insurance in under 2 minutes.
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/model">
                    <Button size="default" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg" data-testid="button-start-quiz">
                      Calculate Insurance Costs →
                    </Button>
                  </Link>
                  <Link to="/tips">
                    <Button size="default" variant="outline" data-testid="link-view-guide">
                      View Complete Guide
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ad Slot */}
        <div className="container py-8">
          <AdSlot id="home-top-ad" />
        </div>

        {/* Insurance Cost Overview */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
              viewport={{ once: true }}
              className="mx-auto max-w-6xl"
            >
              <h2 className="mb-4 text-center text-4xl font-bold text-foreground">
                Samsung Device Insurance Costs: What You'll Actually Pay
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Understanding the true cost of smartphone insurance requires analyzing monthly premiums, repair deductibles, 
                replacement fees, and coverage limits. Here's a comprehensive breakdown of Samsung Galaxy protection plan pricing.
              </p>
              
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="border-2 border-primary bg-gradient-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Award className="h-6 w-6" />
                      Best Value - Samsung Care+
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-foreground mb-2">$11.99<span className="text-xl text-muted-foreground">/mo</span></p>
                    <p className="text-sm text-muted-foreground mb-4">Galaxy S24 Ultra Protection</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">$29 screen repair deductible (vs $450 out-of-pocket)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Same-day replacement service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">3 claims per year coverage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Official Samsung authorized repairs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-6 w-6 text-accent" />
                      Carrier Insurance Plans
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-foreground mb-2">$12-18<span className="text-xl text-muted-foreground">/mo</span></p>
                    <p className="text-sm text-muted-foreground mb-4">Verizon, AT&T, T-Mobile Plans</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">$99-249 deductibles per claim</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">2-3 day replacement timeline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Bundled with monthly bill</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Limited to 2 claims annually</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-secondary" />
                      Third-Party Insurance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-foreground mb-2">$13-17<span className="text-xl text-muted-foreground">/mo</span></p>
                    <p className="text-sm text-muted-foreground mb-4">Asurion, SquareTrade Plans</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">$49-149 screen repair deductibles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Next-day replacement (most areas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Multi-device discount options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Flexible monthly/annual payments</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  Real Cost Analysis: 2-Year Protection Plan for Samsung Galaxy S24 Ultra
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 text-foreground font-semibold">Insurance Type</th>
                        <th className="text-center py-3 text-foreground font-semibold">24-Month Premium</th>
                        <th className="text-center py-3 text-foreground font-semibold">Screen Deductible</th>
                        <th className="text-center py-3 text-foreground font-semibold">Total (1 Repair)</th>
                        <th className="text-center py-3 text-foreground font-semibold">Savings vs No Insurance</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50 bg-primary/5">
                        <td className="py-3 font-semibold text-foreground">Samsung Care+</td>
                        <td className="text-center">$287.76</td>
                        <td className="text-center font-semibold text-primary">$29</td>
                        <td className="text-center font-bold text-primary">$316.76</td>
                        <td className="text-center font-bold text-primary">$133.24</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-semibold text-foreground">Asurion</td>
                        <td className="text-center">$360.00</td>
                        <td className="text-center">$99</td>
                        <td className="text-center">$459.00</td>
                        <td className="text-center text-muted-foreground">Break even</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-semibold text-foreground">Carrier Insurance</td>
                        <td className="text-center">$408.00</td>
                        <td className="text-center">$149</td>
                        <td className="text-center">$557.00</td>
                        <td className="text-center text-destructive">-$107.00</td>
                      </tr>
                      <tr className="bg-destructive/5">
                        <td className="py-3 font-semibold text-foreground">No Insurance</td>
                        <td className="text-center">$0</td>
                        <td className="text-center text-destructive font-bold">$450</td>
                        <td className="text-center font-bold text-destructive">$450</td>
                        <td className="text-center">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  *Analysis based on current pricing for Galaxy S24 Ultra with one screen repair claim. Samsung Care+ offers lowest total cost of ownership.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ad Slot */}
        <div className="container py-8">
          <AdSlot id="home-middle-ad" />
        </div>

        {/* Features Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                Why Use Our Samsung Insurance Calculator?
              </h2>
              
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary shadow-lg">
                    <TrendingDown className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Save $100-300 Annually</h3>
                  <p className="text-sm text-muted-foreground">
                    Compare real-time pricing across Samsung Care+, carrier insurance, and third-party providers to find the lowest-cost 
                    protection plan for your specific Galaxy device and save hundreds on premiums and deductibles.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary shadow-lg">
                    <Clock className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">2-Minute Quote Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant personalized insurance quotes by answering 5 simple questions about your Samsung device model, 
                    carrier, location, and coverage preferences. No personal information required.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary shadow-lg">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Expert Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive AI-powered insurance recommendations based on your device value, damage risk profile, budget, 
                    and whether manufacturer or third-party coverage offers better protection value.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="mb-6 text-center text-3xl font-bold text-foreground">
                Understanding Samsung Galaxy Device Protection Plans
              </h2>
              
              <div className="space-y-6 text-muted-foreground mb-8">
                <p className="text-lg">
                  <strong className="text-foreground">Samsung Care+</strong> is Samsung's official extended warranty and comprehensive device protection plan 
                  covering accidental damage (cracked screens, water damage, drops), mechanical breakdowns, hardware failures, and battery degradation. 
                  Available for flagship devices including Galaxy S24/S23 series, Z Fold 6/5, Z Flip 6/5, and select Galaxy A models with monthly 
                  premiums starting at $7.99 for budget devices and $11.99-13.99 for premium smartphones.
                </p>
                
                <p className="text-lg">
                  <strong className="text-foreground">Carrier insurance plans</strong> from major US providers (AT&T Protect Advantage, Verizon Mobile Protect, 
                  T-Mobile Protection 360) offer device protection through partnerships with Asurion and other third-party insurers. These plans typically 
                  cost $12-18/month with higher deductibles ($99-249 per claim) but include bundled benefits like cloud storage, identity theft monitoring, 
                  and tech support. Replacement timelines average 2-3 business days compared to Samsung's same-day service.
                </p>
                
                <p className="text-lg">
                  <strong className="text-foreground">Third-party insurance providers</strong> like Asurion Home+, SquareTrade, and Worth Ave Group provide 
                  independent smartphone protection plans with flexible coverage options, multi-device discounts, and competitive pricing. Monthly premiums 
                  range from $9-17 depending on device value, with deductibles typically $49-149 for screen repairs and $99-199 for full replacements. 
                  These plans often cover devices regardless of carrier or purchase location.
                </p>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-6">
                  <h3 className="font-bold text-foreground text-xl mb-3">Key Insurance Decision Factors</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Device Value vs Premium:</strong> Insurance makes sense when repair costs exceed 2x annual premiums (e.g., $450 screen repair vs $144 yearly Samsung Care+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Deductible Analysis:</strong> Lower monthly premiums often mean higher per-claim costs; calculate total 2-year cost including likely repairs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Coverage Limits:</strong> Most plans allow 2-3 claims annually; frequent damage may exceed limits requiring full replacement costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Replacement Speed:</strong> Samsung offers same-day service (200+ cities), carriers take 2-3 days, third-party varies by provider</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/model">
                  <Button variant="default" size="lg" className="bg-gradient-primary hover:opacity-90 shadow-lg" data-testid="button-get-quote">
                    Compare Insurance Costs for Your Device →
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ad Slot */}
        <div className="container py-8">
          <AdSlot id="home-middle-2-ad" />
        </div>

        {/* FAQ Section - People Also Ask */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                    <HelpCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Frequently Asked Questions About Samsung Device Insurance
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Common questions about Samsung Care+, carrier insurance plans, deductibles, coverage limits, and device protection costs
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" data-testid="faq-how-much-samsung-care">
                    <AccordionTrigger className="text-left text-lg">
                      How much does Samsung Care+ cost?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      Samsung Care+ pricing varies by device model: Galaxy S24 Ultra costs $11.99/month ($287.76 for 24 months), 
                      Galaxy Z Fold 6 is $13.99/month, Galaxy S24/S24+ ranges $9.99-11.99/month, and Galaxy A series starts at $7.99/month. 
                      These premiums include accidental damage protection, mechanical breakdown coverage, and same-day replacement service. 
                      Adding theft & loss protection costs an additional $3-5/month. Annual payment options offer 10-15% discounts.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" data-testid="faq-worth-it">
                    <AccordionTrigger className="text-left text-lg">
                      Is Samsung device insurance worth it or should I self-insure?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      Insurance is worth it for premium devices ($800+) where single screen repairs cost $350-450. With Samsung Care+ at $287 annually 
                      and $29 screen deductibles, you break even after one repair and save $100+ on subsequent claims. Self-insurance works better for 
                      budget devices under $400, users with excellent damage history, or those with existing credit card/homeowner's insurance coverage. 
                      Key factors: device value, personal damage risk, emergency savings availability, and deductible tolerance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" data-testid="faq-deductible-amounts">
                    <AccordionTrigger className="text-left text-lg">
                      What are Samsung Care+ deductible amounts for repairs?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      Samsung Care+ deductibles: Screen repairs $29 (budget devices) to $99 (Z Fold series). Back glass and general damage 
                      $99-149. Full device replacements $99-249 depending on model value. Theft/loss claims require $249 deductible plus police report. 
                      These are 60-80% lower than carrier insurance deductibles ($99-249) and dramatically cheaper than out-of-pocket repairs 
                      ($350-600). Battery replacements are covered free when capacity drops below 80%.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" data-testid="faq-samsung-vs-carrier">
                    <AccordionTrigger className="text-left text-lg">
                      Samsung Care+ vs carrier insurance: which is better?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      Samsung Care+ typically offers better value: lower deductibles ($29 screens vs $99-199 carrier), faster replacement (same-day vs 2-3 days), 
                      more annual claims (3 vs 2), and official Samsung repairs with OEM parts. Cost comparison for Galaxy S24 Ultra: Samsung Care+ $287/year 
                      vs Verizon $204-408/year (but higher $149 deductibles). Carrier insurance advantages: bundled billing, included perks (cloud storage, 
                      tech support), and sometimes covering non-Samsung devices. Choose Samsung for pure protection value, carriers for convenience and extras.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" data-testid="faq-claim-limits">
                    <AccordionTrigger className="text-left text-lg">
                      How many insurance claims can I file per year?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      Samsung Care+ allows 3 approved claims per 12-month rolling period (not calendar year). Carrier insurance (AT&T, Verizon, T-Mobile) 
                      typically limits to 2 claims annually. Third-party providers like Asurion offer 3 claims/year. Each claim type counts toward limit: 
                      screen repairs, device replacements, theft/loss. Exceeding limits means paying full out-of-pocket costs ($400-1,200) until next cycle. 
                      Pro tip: Strategic claim timing - save claims for major damage rather than minor cosmetic issues that don't affect functionality.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" data-testid="faq-add-later">
                    <AccordionTrigger className="text-left text-lg">
                      Can I add Samsung Care+ after buying my Galaxy phone?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      Yes, but with limitations. You have 60 days from purchase to add Samsung Care+ at standard rates without device inspection. 
                      After 60 days (some carriers extend to 90), enrollment requires in-store inspection at Samsung Experience Stores to verify no 
                      existing damage, and monthly premiums increase 20-30%. Device must be fully functional with no screen cracks, water damage, 
                      hardware issues, or prior repairs. Best practice: enroll within first week to avoid higher costs and ensure immediate protection coverage.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" data-testid="faq-screen-repair-cost">
                    <AccordionTrigger className="text-left text-lg">
                      How much does Samsung screen replacement cost without insurance?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      Out-of-pocket Samsung screen replacement costs: Galaxy S24 Ultra $450-500, S24+ $380-420, S24 $350-380, Z Fold 6 $550-600 
                      (main display), Z Flip 6 $300-350. These prices reflect official Samsung repair centers; third-party shops may charge less but void 
                      warranty. Additional costs: back glass $200-280, battery $100-150, charging port $80-120. With Samsung Care+ $29 screen deductible, 
                      you save $320-470 per repair. Break-even analysis: insurance pays for itself after one major repair within 24-month coverage period.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" data-testid="faq-theft-loss-coverage">
                    <AccordionTrigger className="text-left text-lg">
                      Does Samsung Care+ cover theft and loss of my device?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      Theft and loss coverage requires Samsung Care+ with Theft and Loss plan (adds $3-5/month to base premium). Standard Samsung Care+ 
                      only covers accidental damage and mechanical failures. Theft/loss coverage includes: stolen devices (requires police report filed 
                      within 48 hours), lost phones (FindMy verification required), $249 replacement deductible, 2 theft/loss claims per 12 months (separate 
                      from damage claim limit). Alternative: Many credit cards (Chase Sapphire, Amex Platinum) include $600-800 cell phone theft protection 
                      when you pay monthly bills with the card.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" data-testid="faq-asurion-vs-samsung">
                    <AccordionTrigger className="text-left text-lg">
                      Asurion vs Samsung Care+: which insurance is better value?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      For most Samsung users, Samsung Care+ offers better value: $11.99/month vs Asurion's $13-17/month, lower deductibles ($29 vs $49-149 screens), 
                      same-day vs next-day replacement, and official Samsung repairs. Asurion advantages: multi-device family plans (25% discount for 3+ devices), 
                      covers all phone brands not just Samsung, sometimes bundled free with premium carrier plans. Cost example (2-year S24 Ultra with 1 screen repair): 
                      Samsung Care+ $317 total vs Asurion $459 total - saving $142 with Samsung. Choose Asurion if you need multi-brand coverage or value bundled perks.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" data-testid="faq-claim-process">
                    <AccordionTrigger className="text-left text-lg">
                      How do I file a Samsung Care+ insurance claim?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      Samsung Care+ claim filing process: (1) Open Samsung Members app → Get Help → Samsung Care+ → File Claim, or call 1-866-371-9501. 
                      (2) Describe damage with photos, provide IMEI/serial number. (3) Pay applicable deductible online ($29-249 based on damage type). 
                      (4) Choose service: same-day replacement at Samsung stores (200+ US cities), mail-in repair (overnight shipping both ways), or 
                      authorized repair center visit. Average approval: 15-30 minutes. Same-day service available 9am-7pm local time. Mail-in replacement 
                      ships within 24 hours. Keep damaged device until receiving replacement to avoid non-return fees.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-12 text-center bg-gradient-card rounded-xl p-8 border border-primary/20">
                  <h3 className="text-xl font-bold text-foreground mb-3">Still Have Questions? Get Personalized Answers</h3>
                  <p className="text-muted-foreground mb-6">
                    Our insurance calculator provides customized recommendations based on your specific Samsung device, usage patterns, and budget
                  </p>
                  <Link to="/model">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-lg" data-testid="button-calculate-insurance">
                      Calculate My Insurance Cost →
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
