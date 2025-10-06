interface AdSlotProps {
  id: string;
  className?: string;
}

const AdSlot = ({ id, className = "" }: AdSlotProps) => {
  return (
    <div 
      id={id}
      className={`ad-slot min-h-[280px] bg-gradient-to-br from-muted/30 to-muted/10 border-2 border-dashed border-primary/20 rounded-xl flex items-center justify-center transition-all hover:border-primary/40 ${className}`}
      role="complementary"
      aria-label="Advertisement"
    >
      <div className="text-center p-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
          <span className="text-2xl">📢</span>
        </div>
        <p className="text-sm font-semibold text-foreground mb-1">Advertisement Space</p>
        <p className="text-xs text-muted-foreground">High-visibility ad placement</p>
      </div>
    </div>
  );
};

export default AdSlot;