
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  showNavigation?: boolean;
  variant?: 'default' | 'minimal';
}

const Header = ({ showNavigation = true, variant = 'default' }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { to: "/register", label: "Register" },
    { to: "/status", label: "Check Status" },
    { to: "/rules", label: "Rules" },
    { to: "/admin", label: "Admin" }
  ];

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-orange-200/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/51e2a358-8853-4747-9669-b650bce85248.png" 
              alt="NPA Nashik Performing Arts" 
              className="h-10 sm:h-12 w-auto"
            />
            {variant === 'default' && (
              <div className="hidden sm:block">
                <Badge className="bg-gradient-to-r from-orange-500 to-blue-900 text-white px-3 py-1 text-xs font-medium shadow-lg">
                  IndepeDANCE 2024
                </Badge>
              </div>
            )}
          </Link>
          
          {showNavigation && (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link 
                    key={item.to}
                    to={item.to} 
                    className="relative text-blue-900 hover:text-orange-500 font-medium transition-colors duration-300 group"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-orange-500 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                ))}
              </nav>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center space-x-3">
                {variant === 'default' && (
                  <Badge className="bg-gradient-to-r from-orange-500 to-green-600 text-white text-xs px-2 py-1">
                    IndepeDANCE
                  </Badge>
                )}
                
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-orange-100 transition-colors"
                    >
                      <Menu className="h-6 w-6 text-blue-900" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                    <SheetHeader className="text-left">
                      <SheetTitle className="text-xl font-bold bg-gradient-to-r from-orange-500 via-blue-900 to-green-600 bg-clip-text text-transparent">
                        IndepeDANCE 2024
                      </SheetTitle>
                    </SheetHeader>
                    
                    <nav className="flex flex-col space-y-4 mt-8">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={closeSheet}
                          className="flex items-center py-3 px-4 rounded-lg text-blue-900 hover:bg-gradient-to-r hover:from-orange-50 hover:to-green-50 hover:text-orange-600 font-medium transition-all duration-300 border border-transparent hover:border-orange-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                      
                      <div className="pt-6 mt-6 border-t border-orange-200">
                        <div className="text-center space-y-2">
                          <p className="text-sm text-gray-600">Express Your Freedom</p>
                          <p className="text-xs text-gray-500">Through Dance!</p>
                        </div>
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
