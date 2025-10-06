import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold text-foreground">Privacy Policy</h1>
            
            <AdSlot id="privacy-ad" className="mb-8" />

            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us when using our Samsung Care+ Insurance Calculator, 
                including device model, location, and coverage preferences. This information is used solely to provide 
                personalized insurance recommendations and is not sold to third parties.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">How We Use Your Information</h2>
              <p className="mb-4">
                The information we collect is used to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate insurance cost estimates</li>
                <li>Generate personalized protection plan recommendations</li>
                <li>Improve our calculator and user experience</li>
                <li>Display relevant advertisements</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to improve your experience and serve targeted 
                advertisements through Google AdX. You can control cookie preferences through your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Third-Party Services</h2>
              <p className="mb-4">
                Our website uses Google AdX for advertising. These services may collect information about your visits 
                to this and other websites. Please review their respective privacy policies for more information.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Data Security</h2>
              <p className="mb-4">
                We implement reasonable security measures to protect your information. However, no method of 
                transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, please contact us through our contact page.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
