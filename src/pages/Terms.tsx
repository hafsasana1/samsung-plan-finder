import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";

const Terms = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold text-foreground">Terms of Service</h1>
            
            <AdSlot id="terms-ad" className="mb-8" />

            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the Samsung Care+ Insurance Calculator, you accept and agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Service Description</h2>
              <p className="mb-4">
                Our calculator provides estimated insurance costs and comparisons for informational purposes only. 
                Actual prices, coverage terms, and availability may vary by region, carrier, and provider. We are 
                not an insurance provider and do not sell insurance policies directly.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Disclaimer</h2>
              <p className="mb-4">
                The information provided by our calculator is for general informational purposes only. While we 
                strive for accuracy, we make no warranties or representations about the completeness, accuracy, or 
                reliability of the information. Always verify pricing and terms directly with insurance providers 
                before making a purchase decision.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Limitation of Liability</h2>
              <p className="mb-4">
                We shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                resulting from your use or inability to use the service. This includes any damages resulting from 
                insurance purchase decisions based on our calculator.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">User Conduct</h2>
              <p className="mb-4">
                You agree to use the service only for lawful purposes and in a manner that does not infringe the 
                rights of, or restrict or inhibit the use and enjoyment of the service by any third party.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Continued use of the service after changes 
                constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Contact</h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact us through our contact page.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
