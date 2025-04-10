
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Search, SlidersHorizontal, Mail, Phone, User, MoreVertical } from "lucide-react";
import CitySelector from "@/components/CitySelector";

const Departments = () => {
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [searchQuery, setSearchQuery] = useState("");
  
  const departments = [
    {
      id: 1,
      name: "Urban Planning Department",
      description: "City development, zoning, and land use planning",
      head: "Dr. Anil Sharma",
      email: "urban.planning@mumbai.gov.in",
      phone: "+91 22 2267 1234",
      activeProjects: 7,
      teamSize: 23,
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-8 w-8"
        >
          <path d="M12 22c-4.97 0-9-2.24-9-5v-3.33C3 10.56 7.03 8.32 12 8.32s9 2.24 9 5v3.33c0 2.76-4.03 5-9 5z"/>
          <path d="M12 8.32V2"/>
          <path d="m4.73 11.13 7.27-5 7.27 5"/>
          <path d="M12 17v-5"/>
        </svg>
      )
    },
    {
      id: 2,
      name: "Roads & Transport Department",
      description: "Infrastructure, mobility, and public transportation",
      head: "Rohit Patel",
      email: "roads.transport@mumbai.gov.in",
      phone: "+91 22 2267 5678",
      activeProjects: 9,
      teamSize: 42,
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-8 w-8"
        >
          <path d="M14 4c0-1.1.9-2 2-2"/>
          <path d="M14 10c0-1.1.9-2 2-2"/>
          <path d="M14 16c0-1.1.9-2 2-2"/>
          <path d="M14 22c0-1.1.9-2 2-2"/>
          <path d="M8 4c0-1.1.9-2 2-2"/>
          <path d="M8 10c0-1.1.9-2 2-2"/>
          <path d="M8 16c0-1.1.9-2 2-2"/>
          <path d="M8 22c0-1.1.9-2 2-2"/>
          <path d="M10 2h4"/>
          <path d="M10 8h4"/>
          <path d="M10 14h4"/>
          <path d="M10 20h4"/>
          <path d="M16 2h2c.5 0 1 .5 1 1v3c0 .5-.5 1-1 1h-2"/>
          <path d="M16 14h2c.5 0 1 .5 1 1v3c0 .5-.5 1-1 1h-2"/>
          <path d="M6 2h2c.5 0 1 .5 1 1v3c0 .5-.5 1-1 1H6"/>
          <path d="M6 14h2c.5 0 1 .5 1 1v3c0 .5-.5 1-1 1H6"/>
        </svg>
      )
    },
    {
      id: 3,
      name: "Water Department",
      description: "Water supply, sewage treatment, and management",
      head: "Priya Desai",
      email: "water.dept@mumbai.gov.in",
      phone: "+91 22 2267 9101",
      activeProjects: 5,
      teamSize: 19,
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-8 w-8"
        >
          <path d="M8.44 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>
          <path d="M2.35 18H8a2 2 0 0 1 2 2v4H6.5a2.5 2.5 0 0 1-2.5-2.5V20c0-.55-.25-1.45-.65-2Z"/>
          <path d="M14.5 3.5A2.5 2.5 0 0 1 17 6c1.5 0 3.5 0 5 1.5V20a2 2 0 0 1-2 2h-3"/>
          <path d="M20 6a2 2 0 0 0-2-2h-1.5"/>
          <path d="M17 6h1"/>
        </svg>
      )
    },
    {
      id: 4,
      name: "Electricity Board",
      description: "Power supply infrastructure and maintenance",
      head: "Suresh Kumar",
      email: "electricity@mumbai.gov.in",
      phone: "+91 22 2267 1121",
      activeProjects: 6,
      teamSize: 27,
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-8 w-8"
        >
          <path d="M9 10a1 1 0 0 1-1-1 2 2 0 1 1 4 0 4 4 0 0 1-4 4H5a1 1 0 0 1-1-1 2 2 0 1 1 4 0 4 4 0 0 1-4 4"/>
          <path d="M20 12h-5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4"/>
          <path d="M15 11v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3"/>
        </svg>
      )
    },
    {
      id: 5,
      name: "Health Department",
      description: "Public health, hospitals, and medical services",
      head: "Dr. Meera Gupta",
      email: "health@mumbai.gov.in",
      phone: "+91 22 2267 3141",
      activeProjects: 4,
      teamSize: 36,
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-8 w-8"
        >
          <path d="M19 14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1.5"/>
          <path d="M5 10H3.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H5"/>
          <rect width="10" height="8" x="7" y="8" rx="1"/>
          <path d="M12 8v8"/>
          <path d="M8 12h8"/>
          <path d="M7 19a2 2 0 0 1-2-2"/>
          <path d="M17 17a2 2 0 0 0 2 2"/>
          <path d="M18 5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2"/>
        </svg>
      )
    },
    {
      id: 6,
      name: "Solid Waste Management",
      description: "Waste collection, disposal, and recycling",
      head: "Rakesh Joshi",
      email: "waste.management@mumbai.gov.in",
      phone: "+91 22 2267 5617",
      activeProjects: 3,
      teamSize: 52,
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-8 w-8"
        >
          <path d="M3 6h18"/>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
          <line x1="10" x2="10" y1="11" y2="17"/>
          <line x1="14" x2="14" y1="11" y2="17"/>
        </svg>
      )
    }
  ];
  
  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    department.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Departments</h1>
              <p className="text-muted-foreground">
                View and manage city departments and their contact information
              </p>
            </div>
            
            <CitySelector selectedCity={selectedCity} onChange={setSelectedCity} />
          </div>
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search departments"
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDepartments.map((department) => (
              <Card key={department.id} className="department-card dashboard-card">
                <CardHeader>
                  <div className="flex justify-between">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="text-primary">{department.icon}</div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>View Projects</DropdownMenuItem>
                        <DropdownMenuItem>Contact</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardTitle className="mt-2">{department.name}</CardTitle>
                  <CardDescription>{department.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{department.head}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{department.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{department.phone}</span>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="text-sm">
                    <span className="font-medium">{department.activeProjects}</span> Active Projects
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">{department.teamSize}</span> Team Members
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Departments;
