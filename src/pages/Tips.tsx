import { motion } from "framer-motion";
import { BookOpen, Shield, DollarSign, Clock, AlertCircle, CheckCircle, TrendingUp, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Tips = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-subtle py-12 md:py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-4 text-5xl font-bold text-foreground">
                Samsung Device Insurance Guide
              </h1>
              <p className="text-xl text-muted-foreground">
                Complete guide to protecting your Galaxy smartphone: insurance plans, deductibles, coverage options, and money-saving tips
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container py-12">
          <AdSlot id="tips-top-ad" className="mb-12" />

          {/* Main Insurance Guide Article */}
          <article className="mb-16 mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Is Samsung Device Insurance Worth It? Complete Analysis
              </h2>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <p className="text-lg text-muted-foreground mb-4">
                  With flagship Samsung Galaxy devices costing $800-$1,400, and average screen repair costs reaching $350-450, 
                  device insurance has become essential for protecting your investment. This comprehensive guide analyzes whether Samsung Care+, 
                  carrier insurance, or third-party protection plans offer the best value for your specific needs.
                </p>
                <div className="grid gap-4 md:grid-cols-3 mt-6">
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <p className="font-bold text-destructive text-2xl mb-2">$450</p>
                    <p className="text-sm text-muted-foreground">Average cost of Samsung S24 Ultra screen replacement without insurance</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <p className="font-bold text-primary text-2xl mb-2">$29-99</p>
                    <p className="text-sm text-muted-foreground">Samsung Care+ deductible for screen repairs (saves $350+)</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <p className="font-bold text-accent text-2xl mb-2">42%</p>
                    <p className="text-sm text-muted-foreground">Percentage of smartphone owners who damage their device annually</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Understanding Samsung Insurance Options</h3>
              <p className="text-muted-foreground mb-6">
                Samsung Galaxy owners have three primary insurance options: official Samsung Care+ protection, carrier-provided insurance 
                (Verizon Mobile Protect, AT&T Protect, T-Mobile Protection 360), and third-party providers like Asurion or SquareTrade. 
                Each option differs significantly in monthly premiums, deductibles, replacement speed, coverage limits, and claim processes.
              </p>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      When Insurance Makes Financial Sense
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Premium Devices:</strong> Galaxy S24 Ultra, Z Fold 6, or devices over $800 where repair costs exceed annual premiums</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>High-Risk Users:</strong> Previous device damage history or physically demanding jobs/lifestyles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>No Emergency Fund:</strong> Cannot afford $400-1,200 unexpected repair/replacement costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Theft-Prone Areas:</strong> Live or work in areas with high smartphone theft rates</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-destructive" />
                      When Self-Insurance May Be Better
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span><strong>Budget Devices:</strong> Galaxy A series or phones under $400 where premiums approach device value</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span><strong>Careful Users:</strong> No damage history and consistent use of protective cases/screen protectors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span><strong>Existing Coverage:</strong> Credit card purchase protection or homeowner's/renter's insurance covers devices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span><strong>Frequent Upgrades:</strong> Replace device every 12-18 months before significant damage risk</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <AdSlot id="tips-middle-1-ad" className="mb-8" />

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Samsung Care+ vs Carrier Insurance: Cost Comparison</h3>
              <p className="text-muted-foreground mb-6">
                Understanding the true cost of device insurance requires analyzing monthly premiums, deductibles per claim, coverage limits, 
                and potential out-of-pocket expenses. Here's a comprehensive breakdown of what you'll actually pay with each insurance option:
              </p>

              <div className="bg-muted/50 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-foreground mb-4">Total Cost of Ownership Example (24-Month Coverage for Galaxy S24 Ultra)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 text-foreground font-semibold">Insurance Provider</th>
                        <th className="text-center py-3 text-foreground font-semibold">Monthly Premium</th>
                        <th className="text-center py-3 text-foreground font-semibold">24-Month Cost</th>
                        <th className="text-center py-3 text-foreground font-semibold">Screen Repair Deductible</th>
                        <th className="text-center py-3 text-foreground font-semibold">Total (1 Claim)</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-semibold text-foreground">Samsung Care+</td>
                        <td className="text-center">$11.99</td>
                        <td className="text-center">$287.76</td>
                        <td className="text-center font-semibold text-primary">$29</td>
                        <td className="text-center font-bold text-primary">$316.76</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-semibold text-foreground">Asurion Protection</td>
                        <td className="text-center">$15.00</td>
                        <td className="text-center">$360.00</td>
                        <td className="text-center">$99</td>
                        <td className="text-center">$459.00</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-semibold text-foreground">Verizon Mobile Protect</td>
                        <td className="text-center">$17.00</td>
                        <td className="text-center">$408.00</td>
                        <td className="text-center">$149</td>
                        <td className="text-center">$557.00</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-foreground">No Insurance (Out-of-Pocket)</td>
                        <td className="text-center">$0</td>
                        <td className="text-center">$0</td>
                        <td className="text-center text-destructive">$450</td>
                        <td className="text-center font-bold text-destructive">$450</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  *Analysis assumes one screen repair claim during 24-month coverage period. Samsung Care+ provides best value with lowest total cost.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Top 5 Money-Saving Tips for Samsung Device Insurance</h3>
              
              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      1. Enroll During the 60-Day Window to Avoid Higher Premiums
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p className="mb-3">
                      Samsung Care+ costs significantly less when added within 60 days of device purchase. Waiting beyond this window forces you 
                      into month-to-month plans with 20-30% higher premiums or requires device inspection at Samsung stores.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <p className="font-semibold text-foreground mb-2">Savings Example:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Enrolled within 60 days: $11.99/month ($287.76 for 24 months)</li>
                        <li>• Enrolled after 60 days: $14.99/month ($359.76 for 24 months)</li>
                        <li className="text-primary font-semibold">• Total savings: $72 over 24 months</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-accent" />
                      2. Choose Annual Payment Plans for 10-15% Discount
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p className="mb-3">
                      Most insurance providers offer discounted annual payment options compared to month-to-month billing. Paying upfront 
                      can save $15-25 per year on premium device coverage.
                    </p>
                    <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                      <p className="text-sm">
                        <strong className="text-foreground">Pro Tip:</strong> If your carrier allows, pay annual Samsung Care+ premiums with 
                        credit cards offering purchase protection or extended warranty benefits for double coverage.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-secondary" />
                      3. Bundle Multiple Devices for Family Discount Plans
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p className="mb-3">
                      Carriers and third-party insurers like Asurion offer multi-device protection plans with discounts up to 25% when covering 
                      3+ devices. Ideal for families with multiple smartphones, tablets, or smartwatches.
                    </p>
                    <p className="text-sm">
                      Example: Asurion multi-device plan covers 4 devices for $25/month vs $60/month individual plans (saves $420/year).
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      4. Invest in Quality Screen Protectors and Cases ($30 vs $450 Repair)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p className="mb-3">
                      High-quality tempered glass screen protectors ($15-25) and rugged cases with raised bezels ($20-40) prevent 80% of common 
                      damage scenarios. This upfront $50 investment can eliminate the need for expensive insurance altogether.
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      Best Protection Combo: OtterBox Defender case ($40) + amFilm tempered glass ($15) = $55 one-time cost vs $287+ annual insurance
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-accent" />
                      5. Check Credit Card and Homeowner's Insurance Coverage
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p className="mb-3">
                      Many premium credit cards (Chase Sapphire, Amex Platinum) include cell phone protection when you pay monthly bills with the card. 
                      Homeowner's or renter's insurance may also cover personal electronics with low deductibles.
                    </p>
                    <div className="bg-muted rounded-lg p-4 mt-3">
                      <p className="text-sm">
                        <strong className="text-foreground">Coverage to Check:</strong>
                      </p>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>• Credit card cell phone protection: $600-800 coverage with $25-100 deductible</li>
                        <li>• Homeowner's insurance: Often covers $1,000-2,500 electronics with $250-500 deductible</li>
                        <li>• Employer benefits: Some companies offer subsidized device insurance</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <AdSlot id="tips-middle-2-ad" className="mb-8" />

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">How to File a Samsung Care+ Insurance Claim: Step-by-Step Guide</h3>
              <p className="text-muted-foreground mb-6">
                Filing an insurance claim efficiently can mean the difference between same-day device replacement and a week-long wait. 
                Here's the complete process for Samsung Care+, carrier insurance, and third-party providers:
              </p>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 mb-8 border border-primary/20">
                <h4 className="font-bold text-foreground text-xl mb-6">Samsung Care+ Claim Filing Process</h4>
                <div className="grid gap-4 md:grid-cols-4 mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl font-bold text-primary">1</span>
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">Open Samsung Members App</h5>
                    <p className="text-sm text-muted-foreground">Navigate to 'Get Help' → 'Samsung Care+' → 'File a Claim' for instant online filing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl font-bold text-primary">2</span>
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">Describe Damage & Upload Photos</h5>
                    <p className="text-sm text-muted-foreground">Provide clear photos of damage, IMEI number, and detailed description of incident</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl font-bold text-primary">3</span>
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">Pay Deductible Online</h5>
                    <p className="text-sm text-muted-foreground">$29-99 for screen repairs, $99-249 for other damage, charged to credit/debit card</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl font-bold text-primary">4</span>
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">Receive Replacement</h5>
                    <p className="text-sm text-muted-foreground">Same-day service at Samsung stores or overnight shipping for mail-in repairs</p>
                  </div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Average Processing Time:</strong> Samsung Care+ claims are typically approved within 15-30 minutes. 
                    Same-day replacement available in 200+ cities. Express mail-in service delivers replacement devices within 24-48 hours.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Common Insurance Claim Denial Reasons & How to Avoid Them</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-destructive pl-4 py-2">
                  <h4 className="font-semibold text-foreground mb-2">Pre-Existing Damage Claims</h4>
                  <p className="text-sm text-muted-foreground">
                    Insurance won't cover damage that existed before enrollment. Solution: Take photos of your pristine device when activating 
                    coverage and store proof of condition. Samsung may require device inspection if enrolling after 60-day window.
                  </p>
                </div>
                <div className="border-l-4 border-destructive pl-4 py-2">
                  <h4 className="font-semibold text-foreground mb-2">Claim Limit Exceeded (3 Claims per 12 Months)</h4>
                  <p className="text-sm text-muted-foreground">
                    Most plans limit you to 2-3 annual claims. Solution: Track claim dates carefully and consider protective cases if you're 
                    accident-prone. Some carriers offer higher-tier plans with 4-5 claim limits for additional monthly fees.
                  </p>
                </div>
                <div className="border-l-4 border-destructive pl-4 py-2">
                  <h4 className="font-semibold text-foreground mb-2">Lapsed Coverage (Missed Payments)</h4>
                  <p className="text-sm text-muted-foreground">
                    One missed payment can void coverage. Solution: Set up autopay and maintain valid payment methods. If coverage lapses, 
                    you may need to re-enroll with device inspection and waiting periods.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <AdSlot id="tips-bottom-ad" className="mb-16" />

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions About Samsung Device Insurance</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" data-testid="faq-samsung-care-worth">
                  <AccordionTrigger className="text-left">
                    Is Samsung Care+ worth it for Galaxy S24 Ultra?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, for most S24 Ultra owners. With screen replacement costs at $450+ and back glass repairs at $280, a single claim justifies the $287 annual premium. 
                    Samsung Care+ offers the lowest deductibles ($29 for screens) and same-day replacement. However, if you use a rugged case and have never damaged a phone, 
                    self-insurance may be more economical.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" data-testid="faq-deductible-cost">
                  <AccordionTrigger className="text-left">
                    How much are Samsung Care+ deductibles?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Samsung Care+ deductibles vary by device and damage type: Screen repairs cost $29 (Galaxy A series) to $99 (Z Fold). 
                    Back glass and other damage ranges from $99-$249. Theft/loss claims have $249 deductibles. These are 60-70% lower than 
                    carrier insurance deductibles ($99-$249 for screens) and 80% lower than out-of-pocket repair costs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" data-testid="faq-add-after-purchase">
                  <AccordionTrigger className="text-left">
                    Can I add Samsung Care+ after purchasing my Galaxy phone?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, within 60 days of purchase at standard rates. After 60 days, you can still enroll but Samsung requires in-store device inspection 
                    to verify no existing damage, and premiums may be 20-30% higher. The device must be fully functional with no cracks, water damage, 
                    or hardware issues. Some carriers extend this window to 90 days.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" data-testid="faq-vs-carrier">
                  <AccordionTrigger className="text-left">
                    What's the difference between Samsung Care+ and carrier insurance like Verizon Mobile Protect?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Samsung Care+ is official manufacturer insurance with same-day replacement ($29 screen deductibles, $11.99/month). 
                    Carrier insurance like Verizon Mobile Protect ($17/month) has higher deductibles ($149 screens), slower 2-3 day replacement, 
                    but includes additional perks like cloud storage and tech support. For pure device protection value, Samsung Care+ saves $100-200 
                    annually compared to carrier plans.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" data-testid="faq-claim-limit">
                  <AccordionTrigger className="text-left">
                    How many insurance claims can I file per year with Samsung Care+?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Samsung Care+ allows 3 approved claims per 12-month period. This resets annually from enrollment date, not calendar year. 
                    Carrier insurance typically limits to 2 claims/year. Claims include screen repairs, device replacements, and theft/loss 
                    (if covered). Exceeding limits means paying full out-of-pocket costs until the next cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" data-testid="faq-theft-loss">
                  <AccordionTrigger className="text-left">
                    Does Samsung Care+ cover theft and loss protection?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Theft and loss coverage is included in Samsung Care+ with Theft and Loss plans (costs $3-5/month more than standard). 
                    It covers stolen or lost devices with a $249 deductible. Standard Samsung Care+ only covers accidental damage and mechanical failures. 
                    You must file a police report within 48 hours for theft claims and provide the report number during claim filing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" data-testid="faq-works-outside-us">
                  <AccordionTrigger className="text-left">
                    Does Samsung Care+ work outside the United States?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, Samsung Care+ provides international coverage in 70+ countries, but replacement services vary by region. 
                    In supported countries, you can file claims and receive repairs at authorized Samsung service centers. For unsupported regions, 
                    you may need to mail your device to a US service center. Always check coverage availability before international travel.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8" data-testid="faq-cancel-refund">
                  <AccordionTrigger className="text-left">
                    Can I cancel Samsung Care+ and get a refund?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, you can cancel anytime. If you cancel within 60 days and haven't filed claims, you receive a full refund. 
                    After 60 days, refunds are prorated based on unused months. If you've filed a claim, you're not eligible for refunds 
                    but can still cancel to stop future charges. Contact Samsung support or your carrier to initiate cancellation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <div className="text-center bg-gradient-card rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">Get Your Personalized Insurance Quote</h3>
            <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
              Compare Samsung Care+, carrier insurance, and third-party providers with our instant calculator. 
              Find the lowest-cost protection plan for your specific Galaxy device.
            </p>
            <Link to="/model">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg" data-testid="button-start-quiz">
                Calculate Insurance Costs Now →
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tips;
