
import { Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted py-6">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-5 w-5 text-primary"
              >
                <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"/>
                <path d="M12 13v8"/>
                <path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>
              </svg>
              <span className="font-bold text-primary">JD</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Facilitating seamless interdepartmental cooperation in Indian cities
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>Ministry of Urban Development</p>
              <p>Nirman Bhawan, New Delhi</p>
              <p>India - 110001</p>
              <p className="mt-2">support@jd.gov.in</p>
              <p>+91 11 2306 2277</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>© 2025 JD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
