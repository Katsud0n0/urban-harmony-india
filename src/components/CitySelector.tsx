
import React from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin } from "lucide-react";

interface CitySelectorProps {
  onChange: (city: string) => void;
  selectedCity: string;
}

const CitySelector: React.FC<CitySelectorProps> = ({ onChange, selectedCity }) => {
  const cities = [
    "New Delhi",
    "Mumbai",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Surat",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
  ];

  return (
    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-sm border">
      <span className="text-sm font-medium flex items-center">
        <MapPin className="h-4 w-4 mr-1 text-urban-teal" />
        City:
      </span>
      <Select value={selectedCity} onValueChange={onChange}>
        <SelectTrigger className="w-[180px] border-0 shadow-none focus:ring-0">
          <SelectValue placeholder="Select city" />
        </SelectTrigger>
        <SelectContent>
          <ScrollArea className="h-[200px]">
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CitySelector;
