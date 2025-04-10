
import { ArrowRight, Calendar, Clock, FileEdit, Users } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const ProjectsOverview = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Active Projects</h2>
        <Button variant="outline" size="sm" onClick={() => navigate("/projects")}>
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="dashboard-card">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <Badge className="bg-urban-teal hover:bg-urban-teal/90 text-white">Infrastructure</Badge>
              <Badge variant="outline" className="border-urban-orange text-urban-orange">High Priority</Badge>
            </div>
            <CardTitle className="mt-2">Metro Line Extension</CardTitle>
            <CardDescription>Phase 2 corridor development</CardDescription>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Started: 05 Jan 2025</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Due: 22 Jul 2025</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>37%</span>
                </div>
                <Progress value={37} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5">
                  <FileEdit className="h-4 w-4 text-muted-foreground" />
                  <span>14 tasks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>3 departments</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary text-primary-foreground">View Details</Button>
          </CardFooter>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <Badge className="bg-green-600 hover:bg-green-600/90 text-white">Environmental</Badge>
              <Badge variant="outline" className="border-muted-foreground text-muted-foreground">Medium Priority</Badge>
            </div>
            <CardTitle className="mt-2">Smart Water Management</CardTitle>
            <CardDescription>IoT-based water monitoring system</CardDescription>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Started: 12 Feb 2025</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Due: 30 Sep 2025</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>56%</span>
                </div>
                <Progress value={56} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5">
                  <FileEdit className="h-4 w-4 text-muted-foreground" />
                  <span>9 tasks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>2 departments</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary text-primary-foreground">View Details</Button>
          </CardFooter>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <Badge className="bg-blue-600 hover:bg-blue-600/90 text-white">Public Services</Badge>
              <Badge variant="outline" className="border-urban-red text-urban-red">Critical Priority</Badge>
            </div>
            <CardTitle className="mt-2">Unified Emergency Response</CardTitle>
            <CardDescription>Integrated disaster management system</CardDescription>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Started: 20 Mar 2025</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-urban-red" />
                  <span className="text-urban-red font-medium">Due: 15 May 2025</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>15%</span>
                </div>
                <Progress value={15} className="h-2" color="red" />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5">
                  <FileEdit className="h-4 w-4 text-muted-foreground" />
                  <span>22 tasks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>5 departments</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary text-primary-foreground">View Details</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsOverview;
