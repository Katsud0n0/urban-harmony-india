
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardStats from "@/components/DashboardStats";
import ProjectsOverview from "@/components/ProjectsOverview";
import DepartmentsOverview from "@/components/DepartmentsOverview";
import RecentAnnouncements from "@/components/RecentAnnouncements";
import CitySelector from "@/components/CitySelector";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">City Administration Dashboard</h1>
              <p className="text-muted-foreground">
                Interdepartmental collaboration platform for seamless city management
              </p>
            </div>
            
            <CitySelector selectedCity={selectedCity} onChange={setSelectedCity} />
          </div>
          
          <div className="mb-8">
            <DashboardStats />
          </div>
          
          <div className="mb-8">
            <ProjectsOverview />
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <RecentAnnouncements />
            </div>
            <div>
              <DepartmentsOverview />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
