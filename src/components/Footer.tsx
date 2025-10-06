import { Link } from "react-router-dom";
import { Shield, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const Footer = () => {
  const adInitialized = useRef(false);

  useEffect(() => {
    if (!adInitialized.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adInitialized.current = true;
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-orange-900/10 mt-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
      <div className="relative container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Samsung Care+</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Compare and calculate Samsung device protection costs across providers.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tips" className="text-sm text-muted-foreground hover:text-blue-500 transition-all duration-300 flex items-center gap-1 group">
                  <span>Tips & Guides</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-cyan-500 transition-all duration-300 flex items-center gap-1 group">
                  <span>About Us</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-emerald-500 transition-all duration-300 flex items-center gap-1 group">
                  <span>Privacy Policy</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-teal-500 transition-all duration-300 flex items-center gap-1 group">
                  <span>Terms of Service</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/affiliate-disclosure" className="text-sm text-muted-foreground hover:text-emerald-400 transition-all duration-300 flex items-center gap-1 group">
                  <span>Affiliate Disclosure</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-orange-500 transition-all duration-300 flex items-center gap-1 group">
                  <span>Contact Us</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center items-center">
          <div className="footer-area-ads">
            <ins className="adsbygoogle"
              style={{ display: 'inline-block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-3633046559958303"
              data-ad-slot="test72890"
              data-tag-src="gamtg">
            </ins>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2 text-xs text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">Fast</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">Secure</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">Reliable</span>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Samsung Care+ Calculator. All rights reserved. 
              <span className="block mt-2 text-xs opacity-75">Estimates are for informational purposes only. Actual prices may vary.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
