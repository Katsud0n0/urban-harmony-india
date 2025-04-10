
import { ExternalLink } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const RecentAnnouncements = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-primary">Recent Announcements</h2>
        <Button variant="outline" size="sm" onClick={() => navigate("/announcements")}>
          View All
        </Button>
      </div>
      
      <div className="space-y-4">
        <Card className="dashboard-card relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-urban-orange/5 to-transparent"></div>
          <CardHeader className="pb-2 relative">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Budget Allocation for Q2 2025</CardTitle>
              <Badge variant="outline" className="border-urban-orange text-urban-orange">Important</Badge>
            </div>
            <CardDescription className="flex items-center gap-2">
              <span>Mayor's Office</span>
              <span>•</span>
              <span>2 days ago</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <p className="text-sm text-muted-foreground">
              The Q2 budget allocation meeting has been scheduled for April 18th. All department heads are required to submit their budget proposals by April 15th. The allocation will prioritize ongoing infrastructure projects and smart city initiatives.
            </p>
            <div className="mt-2 flex justify-end">
              <Button variant="ghost" size="sm" className="gap-1 group">
                Read More <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-foreground/5 to-transparent"></div>
          <CardHeader className="pb-2 relative">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">System Maintenance Notification</CardTitle>
              <Badge variant="outline" className="border-secondary-foreground text-secondary-foreground">System</Badge>
            </div>
            <CardDescription className="flex items-center gap-2">
              <span>IT Department</span>
              <span>•</span>
              <span>3 days ago</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <p className="text-sm text-muted-foreground">
              The platform will undergo scheduled maintenance on April 15th from 11 PM to 2 AM. During this time, the system will be unavailable. Please ensure all important tasks are completed before the maintenance window.
            </p>
            <div className="mt-2 flex justify-end">
              <Button variant="ghost" size="sm" className="gap-1 group">
                Read More <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card animate-notification relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-urban-red/5 to-transparent"></div>
          <CardHeader className="pb-2 relative">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">New Interdepartmental Coordination Policy</CardTitle>
              <Badge className="bg-urban-red text-white">New</Badge>
            </div>
            <CardDescription className="flex items-center gap-2">
              <span>Administrative Office</span>
              <span>•</span>
              <span>Today</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <p className="text-sm text-muted-foreground">
              A new policy for interdepartmental project coordination has been approved. The policy introduces standardized communication channels, resource sharing guidelines, and joint approval processes. All departments must implement these changes by May 1st.
            </p>
            <div className="mt-2 flex justify-end">
              <Button variant="ghost" size="sm" className="gap-1 group">
                Read More <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecentAnnouncements;
