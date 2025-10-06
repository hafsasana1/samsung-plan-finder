import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterAds from "@/components/FooterAds";
import AdSlot from "@/components/AdSlot";

const AffiliateDisclosure = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold text-foreground">Affiliate Disclosure</h1>
            
            <AdSlot id="affiliate-ad" className="mb-8" />

            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Affiliate Relationships</h2>
              <p className="mb-4">
                The Samsung Care+ Insurance Calculator participates in affiliate marketing programs. This means we 
                may earn a commission when you click on certain links to insurance providers or make a purchase 
                through our referral links.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Our Commitment to Transparency</h2>
              <p className="mb-4">
                We believe in full transparency regarding our affiliate relationships. When you see links or buttons 
                to insurance providers on our site, some of these may be affiliate links. However, this does not 
                influence our recommendations or the accuracy of our calculator.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Unbiased Recommendations</h2>
              <p className="mb-4">
                Our primary goal is to help you find the best protection plan for your Samsung device. All 
                recommendations are based on:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Actual pricing and coverage data</li>
                <li>Your specific device and usage needs</li>
                <li>Objective comparison of plan features</li>
                <li>Real value for money analysis</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Advertising</h2>
              <p className="mb-4">
                In addition to affiliate relationships, we display advertisements through Google AdX. Ad revenue 
                helps us maintain and improve our free calculator service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">No Cost to You</h2>
              <p className="mb-4">
                Using our affiliate links does not cost you anything extra. The price you pay for insurance is the 
                same whether you use our link or go directly to the provider. The commission comes from the 
                insurance provider, not from your pocket.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Questions?</h2>
              <p className="mb-4">
                If you have any questions about our affiliate relationships or how we operate, please feel free to 
                contact us through our contact page.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <FooterAds />
      <Footer />
    </div>
  );
};

export default AffiliateDisclosure;
