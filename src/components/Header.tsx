
import { Bell, Menu, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <div className="flex items-center gap-6">
      <NavLink to="/" className={({ isActive }) => 
        `font-medium ${isActive ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`
      }>
        Dashboard
      </NavLink>
      <NavLink to="/departments" className={({ isActive }) => 
        `font-medium ${isActive ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`
      }>
        Departments
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => 
        `font-medium ${isActive ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`
      }>
        Projects
      </NavLink>
      <NavLink to="/issues" className={({ isActive }) => 
        `font-medium ${isActive ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`
      }>
        Issues
      </NavLink>
      <NavLink to="/announcements" className={({ isActive }) => 
        `font-medium ${isActive ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`
      }>
        Announcements
      </NavLink>
    </div>
  );

  return (
    <header className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-6 w-6 text-primary"
            >
              <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"/>
              <path d="M12 13v8"/>
              <path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>
            </svg>
            <span className="text-xl font-bold text-primary">JD</span>
          </div>
          
          {!isMobile && <NavLinks />}
        </div>
        
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-urban-red text-[10px] font-medium text-white">3</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col">
                  <p className="font-medium">Road Works Delayed</p>
                  <span className="text-xs text-muted-foreground">Transportation Dept · 10m ago</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col">
                  <p className="font-medium">New Project Proposal</p>
                  <span className="text-xs text-muted-foreground">Urban Planning · 30m ago</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col">
                  <p className="font-medium">Meeting Scheduled</p>
                  <span className="text-xs text-muted-foreground">Mayor's Office · 1h ago</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-center font-medium text-primary">
                View All
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserCircle className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Rahul Sharma</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 pt-10">
                  <NavLink to="/" className={({ isActive }) => 
                    `font-medium ${isActive ? 'text-primary' : 'text-foreground'}`
                  }>
                    Dashboard
                  </NavLink>
                  <NavLink to="/departments" className={({ isActive }) => 
                    `font-medium ${isActive ? 'text-primary' : 'text-foreground'}`
                  }>
                    Departments
                  </NavLink>
                  <NavLink to="/projects" className={({ isActive }) => 
                    `font-medium ${isActive ? 'text-primary' : 'text-foreground'}`
                  }>
                    Projects
                  </NavLink>
                  <NavLink to="/issues" className={({ isActive }) => 
                    `font-medium ${isActive ? 'text-primary' : 'text-foreground'}`
                  }>
                    Issues
                  </NavLink>
                  <NavLink to="/announcements" className={({ isActive }) => 
                    `font-medium ${isActive ? 'text-primary' : 'text-foreground'}`
                  }>
                    Announcements
                  </NavLink>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
