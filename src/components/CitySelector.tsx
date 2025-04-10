
import React from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">City:</span>
      <Select value={selectedCity} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
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
