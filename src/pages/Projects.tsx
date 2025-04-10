
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Search, SlidersHorizontal, Calendar, Clock, Users, FileEdit, MoreVertical } from "lucide-react";
import CitySelector from "@/components/CitySelector";

const Projects = () => {
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [searchQuery, setSearchQuery] = useState("");
  
  const projects = [
    {
      id: 1,
      name: "Metro Line Extension",
      description: "Phase 2 corridor development from Central to Eastern suburbs",
      startDate: "05 Jan 2025",
      dueDate: "22 Jul 2025",
      progress: 37,
      tasks: 14,
      departments: 3,
      category: "Infrastructure",
      priority: "High Priority",
      categoryColor: "bg-urban-teal",
      priorityColor: "border-urban-orange text-urban-orange",
    },
    {
      id: 2,
      name: "Smart Water Management",
      description: "IoT-based water monitoring and management system for efficient distribution",
      startDate: "12 Feb 2025",
      dueDate: "30 Sep 2025",
      progress: 56,
      tasks: 9,
      departments: 2,
      category: "Environmental",
      priority: "Medium Priority",
      categoryColor: "bg-green-600",
      priorityColor: "border-muted-foreground text-muted-foreground",
    },
    {
      id: 3,
      name: "Unified Emergency Response",
      description: "Integrated disaster management system for coordinated emergency response",
      startDate: "20 Mar 2025",
      dueDate: "15 May 2025",
      progress: 15,
      tasks: 22,
      departments: 5,
      category: "Public Services",
      priority: "Critical Priority",
      categoryColor: "bg-blue-600",
      priorityColor: "border-urban-red text-urban-red",
    },
    {
      id: 4,
      name: "City Traffic Management",
      description: "AI-powered traffic management system to reduce congestion",
      startDate: "10 Feb 2025",
      dueDate: "05 Aug 2025",
      progress: 42,
      tasks: 18,
      departments: 2,
      category: "Transportation",
      priority: "High Priority",
      categoryColor: "bg-purple-600",
      priorityColor: "border-urban-orange text-urban-orange",
    },
    {
      id: 5,
      name: "Public WiFi Network",
      description: "Citywide free WiFi network in public spaces and transit",
      startDate: "01 Mar 2025",
      dueDate: "15 Oct 2025",
      progress: 28,
      tasks: 11,
      departments: 3,
      category: "Digital Infrastructure",
      priority: "Medium Priority",
      categoryColor: "bg-indigo-600",
      priorityColor: "border-muted-foreground text-muted-foreground",
    },
    {
      id: 6,
      name: "Urban Green Spaces",
      description: "Creating and renovating parks and green areas across the city",
      startDate: "15 Jan 2025",
      dueDate: "30 Nov 2025",
      progress: 21,
      tasks: 16,
      departments: 4,
      category: "Environmental",
      priority: "Medium Priority",
      categoryColor: "bg-green-600",
      priorityColor: "border-muted-foreground text-muted-foreground",
    },
  ];
  
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Projects</h1>
              <p className="text-muted-foreground">
                Track and manage interdepartmental projects
              </p>
            </div>
            
            <CitySelector selectedCity={selectedCity} onChange={setSelectedCity} />
          </div>
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects"
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </Button>
            <Button className="bg-primary text-primary-foreground">New Project</Button>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="dashboard-card">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <Badge className={`${project.categoryColor} hover:${project.categoryColor}/90 text-white`}>
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className={project.priorityColor}>
                      {project.priority}
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Started: {project.startDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Due: {project.dueDate}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1.5">
                        <FileEdit className="h-4 w-4 text-muted-foreground" />
                        <span>{project.tasks} tasks</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{project.departments} departments</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className="px-6 pb-4 flex justify-between">
                  <Button className="bg-primary text-primary-foreground">View Details</Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Project</DropdownMenuItem>
                      <DropdownMenuItem>View Timeline</DropdownMenuItem>
                      <DropdownMenuItem>Generate Report</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
