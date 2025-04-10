
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
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Search, SlidersHorizontal, Calendar, Clock, Users, MessagesSquare, MoreVertical } from "lucide-react";
import CitySelector from "@/components/CitySelector";

const Issues = () => {
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [searchQuery, setSearchQuery] = useState("");
  
  const issues = [
    {
      id: 1,
      title: "Road Work Coordination Delay",
      description: "Delay in coordinating road work between Water Department and Roads & Transport",
      reportedDate: "03 Apr 2025",
      status: "Open",
      comments: 8,
      departments: ["Water Department", "Roads & Transport"],
      severity: "Critical",
      severityColor: "bg-urban-red",
      statusColor: "border-urban-orange text-urban-orange",
    },
    {
      id: 2,
      title: "Budget Allocation Dispute",
      description: "Disagreement on budget allocation for Smart City projects",
      reportedDate: "01 Apr 2025",
      status: "In Progress",
      comments: 12,
      departments: ["Finance Department", "Urban Planning", "IT Department"],
      severity: "High",
      severityColor: "bg-urban-orange",
      statusColor: "border-urban-teal text-urban-teal",
    },
    {
      id: 3,
      title: "Water Pipeline Project Overlap",
      description: "Two departments planning work in the same area causing potential conflicts",
      reportedDate: "28 Mar 2025",
      status: "Open",
      comments: 5,
      departments: ["Water Department", "Electricity Board"],
      severity: "Medium",
      severityColor: "bg-blue-500",
      statusColor: "border-urban-orange text-urban-orange",
    },
    {
      id: 4,
      title: "Public Transport Integration",
      description: "Integration issues between metro and bus schedule systems",
      reportedDate: "27 Mar 2025",
      status: "Under Review",
      comments: 7,
      departments: ["Roads & Transport", "IT Department"],
      severity: "High",
      severityColor: "bg-urban-orange",
      statusColor: "border-purple-500 text-purple-500",
    },
    {
      id: 5,
      title: "Procurement Process Delays",
      description: "Interdepartmental approval bottlenecks in procurement",
      reportedDate: "25 Mar 2025",
      status: "In Progress",
      comments: 9,
      departments: ["Administrative Office", "Finance Department"],
      severity: "Medium",
      severityColor: "bg-blue-500",
      statusColor: "border-urban-teal text-urban-teal",
    },
    {
      id: 6,
      title: "Data Sharing Protocol Violation",
      description: "Department not following agreed data sharing protocols",
      reportedDate: "20 Mar 2025",
      status: "Resolved",
      comments: 15,
      departments: ["IT Department", "Health Department"],
      severity: "Low",
      severityColor: "bg-green-500",
      statusColor: "border-green-600 text-green-600",
    },
  ];
  
  const filteredIssues = issues.filter((issue) =>
    issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.departments.some(dept => dept.toLowerCase().includes(searchQuery.toLowerCase())) ||
    issue.severity.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.status.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Interdepartmental Issues</h1>
              <p className="text-muted-foreground">
                Track and resolve issues between departments
              </p>
            </div>
            
            <CitySelector selectedCity={selectedCity} onChange={setSelectedCity} />
          </div>
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search issues"
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </Button>
            <Button className="bg-primary text-primary-foreground">Report Issue</Button>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredIssues.map((issue) => (
              <Card key={issue.id} className="dashboard-card">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <Badge className={`${issue.severityColor} hover:${issue.severityColor}/90 text-white`}>
                      {issue.severity} Severity
                    </Badge>
                    <Badge variant="outline" className={issue.statusColor}>
                      {issue.status}
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">{issue.title}</CardTitle>
                  <CardDescription>{issue.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Reported: {issue.reportedDate}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1.5">
                        <MessagesSquare className="h-4 w-4 text-muted-foreground" />
                        <span>{issue.comments} comments</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{issue.departments.length} departments</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {issue.departments.map((dept, index) => (
                        <span 
                          key={index} 
                          className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {dept}
                        </span>
                      ))}
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
                      <DropdownMenuItem>Update Status</DropdownMenuItem>
                      <DropdownMenuItem>Assign to Department</DropdownMenuItem>
                      <DropdownMenuItem>Add Comment</DropdownMenuItem>
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

export default Issues;
