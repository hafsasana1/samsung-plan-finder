import { useEffect } from "react";

interface AdSlotProps {
  id: string;
  className?: string;
}

const AdSlot = ({ id, className = "" }: AdSlotProps) => {
  useEffect(() => {
    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

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
};

export default AdSlot;