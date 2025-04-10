
import { Activity, AlertTriangle, CalendarCheck, CheckCircle2, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DashboardStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="dashboard-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-urban-teal" />
              <span className="text-2xl font-bold">24</span>
            </div>
            <span className="text-xs text-muted-foreground">+8% from last month</span>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs mb-1">
              <span>Progress</span>
              <span>68%</span>
            </div>
            <Progress value={68} className="h-2" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="dashboard-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-urban-orange" />
              <span className="text-2xl font-bold">13</span>
            </div>
            <span className="text-xs text-muted-foreground">5 urgent</span>
          </div>
          <div className="mt-3 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>Water Department</span>
              <span className="font-medium text-urban-orange">4</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Road & Transport</span>
              <span className="font-medium text-urban-orange">5</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Urban Planning</span>
              <span className="font-medium text-urban-orange">4</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="dashboard-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-urban-red" />
              <span className="text-2xl font-bold">7</span>
            </div>
            <span className="text-xs text-muted-foreground">2 critical</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-md bg-red-50 p-2">
              <span className="font-medium text-red-700">Critical</span>
              <p className="font-bold">2</p>
            </div>
            <div className="rounded-md bg-amber-50 p-2">
              <span className="font-medium text-amber-700">High</span>
              <p className="font-bold">3</p>
            </div>
            <div className="rounded-md bg-blue-50 p-2">
              <span className="font-medium text-blue-700">Medium</span>
              <p className="font-bold">2</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="dashboard-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Upcoming Meetings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-primary" />
              <span className="text-2xl font-bold">5</span>
            </div>
            <span className="text-xs text-muted-foreground">This week</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex gap-2 text-xs">
              <div className="w-16 flex-shrink-0">
                <span className="font-medium">Today</span>
                <p className="text-muted-foreground">14:00</p>
              </div>
              <div>
                <span className="font-medium">Quarterly Review</span>
                <p className="text-muted-foreground">Conference Room A</p>
              </div>
            </div>
            <div className="flex gap-2 text-xs">
              <div className="w-16 flex-shrink-0">
                <span className="font-medium">Tomorrow</span>
                <p className="text-muted-foreground">10:30</p>
              </div>
              <div>
                <span className="font-medium">Budget Planning</span>
                <p className="text-muted-foreground">Virtual Meeting</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="dashboard-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Departments Engaged</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-secondary" />
              <span className="text-2xl font-bold">12</span>
            </div>
            <span className="text-xs text-muted-foreground">of 15 total</span>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs mb-1">
              <span>Participation Rate</span>
              <span>80%</span>
            </div>
            <Progress value={80} className="h-2" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="dashboard-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Completed Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-2xl font-bold">43</span>
            </div>
            <span className="text-xs text-muted-foreground">This year</span>
          </div>
          <div className="mt-3 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>Infrastructure</span>
              <span className="font-medium">18</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Environmental</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Public Services</span>
              <span className="font-medium">13</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
