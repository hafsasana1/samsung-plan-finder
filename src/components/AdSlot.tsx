import { useEffect } from "react";

interface AdSlotProps {
  id: string;
  className?: string;
  size?: "header" | "standard" | "medium";
}

const AdSlot = ({ id, className = "", size = "standard" }: AdSlotProps) => {
  useEffect(() => {
    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      if (adsbygoogle.loaded !== undefined) {
        adsbygoogle.push({});
      }
    } catch (err) {
      if (err instanceof Error && !err.message.includes("already have ads")) {
        console.error("AdSense error:", err);
      }
    }
  }, []);

  const isHeaderAd = size === "header" || id.includes("top-ad");
  const isMediumAd = size === "medium";
  
  if (isHeaderAd) {
    return (
      <div 
        id={id}
        className={`ad-slot w-full flex items-center justify-center py-4 ${className}`}
        role="complementary"
        aria-label="Advertisement"
      >
        <div className="w-full max-w-[970px] overflow-hidden flex justify-center">
          <ins 
            className="adsbygoogle"
            style={{ display: "inline-block", width: "970px", height: "250px", maxWidth: "100%" }}
            data-ad-client="ca-pub-3633046559958303"
            data-ad-slot="970250"
            data-tag-src="gamtg"
          />
        </div>
      </div>
    );
  }

  if (isMediumAd) {
    return (
      <div 
        id={id}
        className={`ad-slot w-full flex items-center justify-center py-4 ${className}`}
        role="complementary"
        aria-label="Advertisement"
      >
        <div className="w-full max-w-[300px] overflow-hidden flex justify-center">
          <ins 
            className="adsbygoogle"
            style={{ display: "inline-block", width: "300px", height: "250px" }}
            data-ad-client="ca-pub-3633046559958303"
            data-ad-slot="300250"
            data-tag-src="gamtg"
          />
        </div>
      </div>
    );
  }

  return (
    <div 
      id={id}
      className={`ad-slot w-full flex items-center justify-center py-4 ${className}`}
      role="complementary"
      aria-label="Advertisement"
    >
      <div className="w-full max-w-[336px] overflow-hidden flex justify-center">
        <ins 
          className="adsbygoogle"
          style={{ display: "inline-block", width: "336px", height: "280px", maxWidth: "100%" }}
          data-ad-client="ca-pub-3633046559958303"
          data-ad-slot="336280"
          data-tag-src="gamtg"
        />
      </div>
    </div>
  );
};

export default AdSlot;