import { Shield, Star, FileCheck, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const badgeConfig = {
  insurance: { icon: Shield, label: "Fully Insured" },
  rating: { icon: Star, label: "5 Star Rated" },
  freeSurvey: { icon: FileCheck, label: "Free Surveys" },
  local: { icon: MapPin, label: "Local & Reliable" },
  guarantee: { icon: Shield, label: "Workmanship Guarantee" },
};

interface TrustBadgeProps {
  type: keyof typeof badgeConfig;
  className?: string;
}

export default function TrustBadge({ type, className }: TrustBadgeProps) {
  const config = badgeConfig[type];
  const IconComponent = config.icon;

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-kemnay-white/80",
        className
      )}
    >
      <IconComponent className="w-5 h-5 text-kemnay-gold" />
      <span className="text-sm font-medium">{config.label}</span>
    </div>
  );
}
