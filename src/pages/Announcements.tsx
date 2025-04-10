
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
import { Search, SlidersHorizontal, ExternalLink, MoreVertical } from "lucide-react";
import CitySelector from "@/components/CitySelector";

const Announcements = () => {
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [searchQuery, setSearchQuery] = useState("");
  
  const announcements = [
    {
      id: 1,
      title: "Budget Allocation for Q2 2025",
      content: "The Q2 budget allocation meeting has been scheduled for April 18th. All department heads are required to submit their budget proposals by April 15th. The allocation will prioritize ongoing infrastructure projects and smart city initiatives.",
      department: "Mayor's Office",
      date: "08 Apr 2025",
      tag: "Important",
      tagColor: "border-urban-orange text-urban-orange",
      isNew: true,
    },
    {
      id: 2,
      title: "System Maintenance Notification",
      content: "The platform will undergo scheduled maintenance on April 15th from 11 PM to 2 AM. During this time, the system will be unavailable. Please ensure all important tasks are completed before the maintenance window.",
      department: "IT Department",
      date: "07 Apr 2025",
      tag: "System",
      tagColor: "border-secondary-foreground text-secondary-foreground",
      isNew: true,
    },
    {
      id: 3,
      title: "New Interdepartmental Coordination Policy",
      content: "A new policy for interdepartmental project coordination has been approved. The policy introduces standardized communication channels, resource sharing guidelines, and joint approval processes. All departments must implement these changes by May 1st.",
      department: "Administrative Office",
      date: "10 Apr 2025",
      tag: "New",
      tagColor: "border-urban-red text-urban-red",
      isNew: true,
    },
    {
      id: 4,
      title: "Quarterly Department Head Meeting",
      content: "The quarterly meeting for all department heads will be held on April 20th at 10:00 AM in Conference Hall A. Attendance is mandatory. Please prepare progress reports for ongoing projects and be ready to discuss interdepartmental challenges.",
      department: "Mayor's Office",
      date: "05 Apr 2025",
      tag: "Meeting",
      tagColor: "border-blue-500 text-blue-500",
      isNew: false,
    },
    {
      id: 5,
      title: "Updated Document Sharing Protocols",
      content: "New security protocols for sharing sensitive documents between departments have been implemented. All staff must complete the online training module by April 25th. The new system includes enhanced encryption and access controls.",
      department: "IT Department",
      date: "03 Apr 2025",
      tag: "Update",
      tagColor: "border-purple-500 text-purple-500",
      isNew: false,
    },
    {
      id: 6,
      title: "Annual Municipal Awards Nominations",
      content: "Nominations for the Annual Municipal Excellence Awards are now open. Departments can submit nominations for outstanding projects, teams, and individuals by May 10th. This year includes a new category for 'Best Interdepartmental Collaboration'.",
      department: "Human Resources",
      date: "01 Apr 2025",
      tag: "Announcement",
      tagColor: "border-green-600 text-green-600",
      isNew: false,
    },
  ];
  
  const filteredAnnouncements = announcements.filter((announcement) =>
    announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    announcement.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    announcement.department.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Announcements</h1>
              <p className="text-muted-foreground">
                Important citywide and interdepartmental announcements
              </p>
            </div>
            
            <CitySelector selectedCity={selectedCity} onChange={setSelectedCity} />
          </div>
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search announcements"
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </Button>
            <Button className="bg-primary text-primary-foreground">New Announcement</Button>
          </div>
          
          <div className="space-y-4">
            {filteredAnnouncements.map((announcement) => (
              <Card 
                key={announcement.id} 
                className={`dashboard-card ${announcement.isNew ? 'animate-notification' : ''}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{announcement.title}</CardTitle>
                    <Badge variant="outline" className={announcement.tagColor}>
                      {announcement.tag}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <span>{announcement.department}</span>
                    <span>•</span>
                    <span>{announcement.date}</span>
                    {announcement.isNew && (
                      <>
                        <span>•</span>
                        <span className="text-urban-red font-medium">New</span>
                      </>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {announcement.content}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <Button variant="outline" size="sm" className="gap-1">
                      Read Full Announcement <ExternalLink className="h-3 w-3" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Mark as Read</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem>Print</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Announcements;
