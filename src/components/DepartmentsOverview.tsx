
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
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Key Departments</h2>
        <Button variant="outline" size="sm" onClick={() => navigate("/departments")}>
          View All Departments
        </Button>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="department-card dashboard-card">
          <CardHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="department-icon h-6 w-6 text-primary"
              >
                <path d="M12 22c-4.97 0-9-2.24-9-5v-3.33C3 10.56 7.03 8.32 12 8.32s9 2.24 9 5v3.33c0 2.76-4.03 5-9 5z"/>
                <path d="M12 8.32V2"/>
                <path d="m4.73 11.13 7.27-5 7.27 5"/>
                <path d="M12 17v-5"/>
              </svg>
            </div>
            <CardTitle className="text-center">Urban Planning</CardTitle>
            <CardDescription className="text-center">City development and zoning</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-center">
            <p>Active Projects: <span className="font-medium">7</span></p>
            <p>Team Members: <span className="font-medium">23</span></p>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="ghost" size="sm" className="gap-1">
              View Department <ExternalLink className="h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="department-card dashboard-card">
          <CardHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="department-icon h-6 w-6 text-primary"
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
            </div>
            <CardTitle className="text-center">Roads & Transport</CardTitle>
            <CardDescription className="text-center">Infrastructure and mobility</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-center">
            <p>Active Projects: <span className="font-medium">9</span></p>
            <p>Team Members: <span className="font-medium">42</span></p>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="ghost" size="sm" className="gap-1">
              View Department <ExternalLink className="h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="department-card dashboard-card">
          <CardHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="department-icon h-6 w-6 text-primary"
              >
                <path d="M8.44 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>
                <path d="M2.35 18H8a2 2 0 0 1 2 2v4H6.5a2.5 2.5 0 0 1-2.5-2.5V20c0-.55-.25-1.45-.65-2Z"/>
                <path d="M14.5 3.5A2.5 2.5 0 0 1 17 6c1.5 0 3.5 0 5 1.5V20a2 2 0 0 1-2 2h-3"/>
                <path d="M20 6a2 2 0 0 0-2-2h-1.5"/>
                <path d="M17 6h1"/>
              </svg>
            </div>
            <CardTitle className="text-center">Water Department</CardTitle>
            <CardDescription className="text-center">Water supply and management</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-center">
            <p>Active Projects: <span className="font-medium">5</span></p>
            <p>Team Members: <span className="font-medium">19</span></p>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="ghost" size="sm" className="gap-1">
              View Department <ExternalLink className="h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="department-card dashboard-card">
          <CardHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="department-icon h-6 w-6 text-primary"
              >
                <path d="M9 10a1 1 0 0 1-1-1 2 2 0 1 1 4 0 4 4 0 0 1-4 4H5a1 1 0 0 1-1-1 2 2 0 1 1 4 0 4 4 0 0 1-4 4"/>
                <path d="M20 12h-5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4"/>
                <path d="M15 11v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3"/>
              </svg>
            </div>
            <CardTitle className="text-center">Electricity Board</CardTitle>
            <CardDescription className="text-center">Power supply and infrastructure</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-center">
            <p>Active Projects: <span className="font-medium">6</span></p>
            <p>Team Members: <span className="font-medium">27</span></p>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="ghost" size="sm" className="gap-1">
              View Department <ExternalLink className="h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DepartmentsOverview;
