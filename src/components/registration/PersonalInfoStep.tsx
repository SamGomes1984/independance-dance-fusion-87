
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, User, Calendar, MapPin, Phone, Mail, GraduationCap } from "lucide-react";

interface PersonalInfoStepProps {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
}

const PersonalInfoStep = ({ formData, updateFormData, onNext }: PersonalInfoStepProps) => {
  // Calculate age when date of birth changes
  useEffect(() => {
    if (formData.dateOfBirth) {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      updateFormData({ age });
    }
  }, [formData.dateOfBirth]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.dateOfBirth || !formData.gender || 
        !formData.mobile || !formData.email || !formData.schoolCollege) {
      alert('Please fill in all required fields');
      return;
    }
    
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      {/* Mobile: Stack cards vertically, Desktop: 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Personal Details */}
        <Card className="border-orange-200 order-1">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center mb-3 sm:mb-4">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">Personal Details</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-1">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData({ name: e.target.value })}
                  className="h-11 sm:h-10 text-base sm:text-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700 block mb-1">
                    Date of Birth *
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateFormData({ dateOfBirth: e.target.value })}
                    className="h-11 sm:h-10 text-base sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="age" className="text-sm font-medium text-gray-700 block mb-1">
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    readOnly
                    className="h-11 sm:h-10 text-base sm:text-sm bg-gray-50"
                    placeholder="Auto-calculated"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="gender" className="text-sm font-medium text-gray-700 block mb-1">
                  Gender *
                </Label>
                <Select value={formData.gender} onValueChange={(value) => updateFormData({ gender: value })}>
                  <SelectTrigger className="h-11 sm:h-10 text-base sm:text-sm">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="z-50">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-green-200 order-2">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center mb-3 sm:mb-4">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">Contact Information</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <Label htmlFor="mobile" className="text-sm font-medium text-gray-700 block mb-1">
                  Mobile Number *
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => updateFormData({ mobile: e.target.value })}
                  className="h-11 sm:h-10 text-base sm:text-sm"
                  placeholder="+91 12345 67890"
                  required
                />
              </div>

              <div>
                <Label htmlFor="alternateMobile" className="text-sm font-medium text-gray-700 block mb-1">
                  Alternate Mobile
                </Label>
                <Input
                  id="alternateMobile"
                  type="tel"
                  value={formData.alternateMobile}
                  onChange={(e) => updateFormData({ alternateMobile: e.target.value })}
                  className="h-11 sm:h-10 text-base sm:text-sm"
                  placeholder="+91 12345 67890 (optional)"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData({ email: e.target.value })}
                  className="h-11 sm:h-10 text-base sm:text-sm"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Address - Full width */}
      <Card className="border-blue-200">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center mb-3 sm:mb-4">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">Address</h3>
          </div>
          
          <div>
            <Label htmlFor="address" className="text-sm font-medium text-gray-700 block mb-1">
              Complete Address *
            </Label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => updateFormData({ address: e.target.value })}
              className="min-h-[80px] sm:min-h-[60px] text-base sm:text-sm"
              placeholder="Enter your complete address including city, state, and pincode"
              rows={3}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Educational Information - Full width */}
      <Card className="border-purple-200">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center mb-3 sm:mb-4">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">Educational & Dance Information</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="schoolCollege" className="text-sm font-medium text-gray-700 block mb-1">
                School/College Name *
              </Label>
              <Input
                id="schoolCollege"
                type="text"
                value={formData.schoolCollege}
                onChange={(e) => updateFormData({ schoolCollege: e.target.value })}
                className="h-11 sm:h-10 text-base sm:text-sm"
                placeholder="Enter your school or college name"
                required
              />
            </div>
            <div>
              <Label htmlFor="teacherName" className="text-sm font-medium text-gray-700 block mb-1">
                Dance Teacher's Name
              </Label>
              <Input
                id="teacherName"
                type="text"
                value={formData.teacherName}
                onChange={(e) => updateFormData({ teacherName: e.target.value })}
                className="h-11 sm:h-10 text-base sm:text-sm"
                placeholder="Enter your dance teacher's name (optional)"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button - Mobile optimized */}
      <div className="flex justify-center sm:justify-end pt-2">
        <Button 
          type="submit"
          size="lg"
          className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-12 sm:h-auto text-base sm:text-sm font-medium"
        >
          Continue to Category & Video
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>
    </form>
  );
};

export default PersonalInfoStep;
