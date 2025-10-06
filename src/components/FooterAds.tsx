import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const FooterAds = () => {
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
    <div className="py-8 flex justify-center items-center bg-muted/30">
      <div className="footer-area-ads">
        <ins className="adsbygoogle"
          style={{ display: 'inline-block', width: '728px', height: '90px' }}
          data-ad-client="ca-pub-3633046559958303"
          data-ad-slot="test72890"
          data-tag-src="gamtg">
        </ins>
      </div>
    </div>
  );
};

export default FooterAds;
