
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface HeaderProps {
  showNavigation?: boolean;
  variant?: 'default' | 'minimal';
}

const Header = ({ showNavigation = true, variant = 'default' }: HeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/51e2a358-8853-4747-9669-b650bce85248.png" 
            alt="NPA Nashik Performing Arts" 
            className="h-10 sm:h-12 w-auto"
          />
          {variant === 'default' && (
            <div className="hidden sm:block">
              <Badge className="bg-blue-900 text-white px-3 py-1 text-xs font-medium">
                IndepeDANCE 2024
              </Badge>
            </div>
          )}
        </Link>
        
        {showNavigation && (
          <>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/register" className="text-blue-900 hover:text-orange-500 font-medium transition-colors">Register</Link>
              <Link to="/status" className="text-blue-900 hover:text-orange-500 font-medium transition-colors">Check Status</Link>
              <Link to="/rules" className="text-blue-900 hover:text-orange-500 font-medium transition-colors">Rules</Link>
              <Link to="/admin" className="text-blue-900 hover:text-orange-500 font-medium transition-colors">Admin</Link>
            </nav>
            <div className="md:hidden">
              <Badge className="bg-orange-500 text-white text-xs">IndepeDANCE</Badge>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
