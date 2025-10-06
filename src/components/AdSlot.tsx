interface AdSlotProps {
  id: string;
  className?: string;
}

const AdSlot = ({ id, className = "" }: AdSlotProps) => {
  return (
    <div 
      id={id}
      className={`ad-slot min-h-[250px] bg-muted/30 border border-dashed border-border rounded-lg flex items-center justify-center ${className}`}
    >
      <span className="text-sm text-muted-foreground">Advertisement</span>
    </div>
  );
};

export default AdSlot;
