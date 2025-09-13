"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Users, Utensils, Music, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "",
    guestCount: "1",
    guestNames: "",
    dietaryRestrictions: "",
    songRequest: "",
    specialAccommodations: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (formData.attendance === "yes") {
      toast({
        title: "RSVP Confirmed!",
        description: "Thank you for confirming your attendance. We can't wait to celebrate with you!",
      })
    } else {
      toast({
        title: "RSVP Received",
        description: "Thank you for letting us know. We'll miss you on our special day!",
      })
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      attendance: "",
      guestCount: "1",
      guestNames: "",
      dietaryRestrictions: "",
      songRequest: "",
      specialAccommodations: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleChange(e.target.name, e.target.value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Heart className="h-6 w-6 text-primary fill-current" />
          Wedding RSVP
        </CardTitle>
        <p className="text-muted-foreground">Please respond by May 1st, 2024. We're excited to celebrate with you!</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Your Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Attendance */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Will you be attending our wedding?</h3>
            <RadioGroup value={formData.attendance} onValueChange={(value) => handleChange("attendance", value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes, I'll be there! Can't wait to celebrate with you.</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">Unfortunately, I can't make it.</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Guest Details - Only show if attending */}
          {formData.attendance === "yes" && (
            <>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Guest Details</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="guestCount">Number of Guests (including yourself)</Label>
                    <Select value={formData.guestCount} onValueChange={(value) => handleChange("guestCount", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {Number.parseInt(formData.guestCount) > 1 && (
                    <div className="space-y-2">
                      <Label htmlFor="guestNames">Names of Additional Guests</Label>
                      <Input
                        id="guestNames"
                        name="guestNames"
                        value={formData.guestNames}
                        onChange={handleInputChange}
                        placeholder="Enter names of your guests"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Dietary Restrictions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Dietary Requirements
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="dietaryRestrictions">
                    Please let us know about any dietary restrictions or allergies
                  </Label>
                  <Textarea
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    placeholder="e.g., Vegetarian, Gluten-free, Nut allergy, etc."
                    rows={3}
                  />
                </div>
              </div>

              {/* Song Request */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Music className="h-5 w-5 text-primary" />
                  Music Request
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="songRequest">Any song requests to get you on the dance floor? (Optional)</Label>
                  <Input
                    id="songRequest"
                    name="songRequest"
                    value={formData.songRequest}
                    onChange={handleInputChange}
                    placeholder="Song title and artist"
                  />
                </div>
              </div>

              {/* Special Accommodations */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Special Accommodations</h3>
                <div className="space-y-2">
                  <Label htmlFor="specialAccommodations">Do you need any special accommodations? (Optional)</Label>
                  <Textarea
                    id="specialAccommodations"
                    name="specialAccommodations"
                    value={formData.specialAccommodations}
                    onChange={handleInputChange}
                    placeholder="e.g., Wheelchair accessibility, transportation assistance, etc."
                    rows={3}
                  />
                </div>
              </div>
            </>
          )}

          {/* Message */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Additional Message (Optional)</h3>
            <div className="space-y-2">
              <Label htmlFor="message">Share any additional thoughts or well wishes</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="We'd love to hear from you..."
                rows={4}
              />
            </div>
          </div>

          <Button type="submit" disabled={isSubmitting || !formData.attendance} className="w-full">
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Submit RSVP
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
