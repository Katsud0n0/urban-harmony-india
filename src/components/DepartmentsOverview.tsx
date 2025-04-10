
import { ExternalLink } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DepartmentsOverview = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Key Departments</h2>
        <Button variant="outline" size="sm" onClick={() => navigate("/departments")} className="shadow-sm hover:shadow-md transition-all">
          View All Departments
        </Button>
      </div>
      
      <div className="grid gap-4">
        {departments.map((dept) => (
          <Card key={dept.name} className="department-card dashboard-card border-l-4 hover:border-l-[10px] transition-all duration-300" style={{ borderLeftColor: dept.color }}>
            <div className="flex items-center p-4">
              <div className="mr-4 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <dept.icon className="department-icon h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-base mb-0.5">{dept.name}</CardTitle>
                <CardDescription className="text-xs">{dept.description}</CardDescription>
              </div>
              <div className="ml-2 flex-shrink-0 text-xs text-right">
                <p className="font-medium">{dept.projects} Projects</p>
                <p className="text-muted-foreground">{dept.members} Members</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-2 h-7 w-7 rounded-full hover:bg-gray-100">
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Department data
const departments = [
  {
    name: "Urban Planning",
    description: "City development and zoning",
    icon: (props) => (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
      >
        <path d="M12 22c-4.97 0-9-2.24-9-5v-3.33C3 10.56 7.03 8.32 12 8.32s9 2.24 9 5v3.33c0 2.76-4.03 5-9 5z"/>
        <path d="M12 8.32V2"/>
        <path d="m4.73 11.13 7.27-5 7.27 5"/>
        <path d="M12 17v-5"/>
      </svg>
    ),
    projects: 7,
    members: 23,
    color: "#4D96FF"
  },
  {
    name: "Roads & Transport",
    description: "Infrastructure and mobility",
    icon: (props) => (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
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
    ),
    projects: 9,
    members: 42,
    color: "#FF6D60"
  },
  {
    name: "Water Department",
    description: "Water supply and management",
    icon: (props) => (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
      >
        <path d="M8.44 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>
        <path d="M2.35 18H8a2 2 0 0 1 2 2v4H6.5a2.5 2.5 0 0 1-2.5-2.5V20c0-.55-.25-1.45-.65-2Z"/>
        <path d="M14.5 3.5A2.5 2.5 0 0 1 17 6c1.5 0 3.5 0 5 1.5V20a2 2 0 0 1-2 2h-3"/>
        <path d="M20 6a2 2 0 0 0-2-2h-1.5"/>
        <path d="M17 6h1"/>
      </svg>
    ),
    projects: 5,
    members: 19,
    color: "#1BAEEA"
  },
  {
    name: "Electricity Board",
    description: "Power supply and infrastructure",
    icon: (props) => (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
      >
        <path d="M9 10a1 1 0 0 1-1-1 2 2 0 1 1 4 0 4 4 0 0 1-4 4H5a1 1 0 0 1-1-1 2 2 0 1 1 4 0 4 4 0 0 1-4 4"/>
        <path d="M20 12h-5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4"/>
        <path d="M15 11v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3"/>
      </svg>
    ),
    projects: 6,
    members: 27,
    color: "#F7CB45"
  }
];

export default DepartmentsOverview;
