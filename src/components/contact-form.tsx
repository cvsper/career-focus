"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  return (
    <form className="space-y-5">
      <div>
        <Label htmlFor="name" className="text-sm font-semibold text-neutral-700 mb-1.5">
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          required
          className="h-12 border-neutral-300 focus:border-brand-blue-500 focus:ring-brand-blue-500/15"
          placeholder="Your full name"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-semibold text-neutral-700 mb-1.5">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="h-12 border-neutral-300 focus:border-brand-blue-500 focus:ring-brand-blue-500/15"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm font-semibold text-neutral-700 mb-1.5">
          Phone (optional)
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          className="h-12 border-neutral-300 focus:border-brand-blue-500 focus:ring-brand-blue-500/15"
          placeholder="(813) 000-0000"
        />
      </div>

      <div>
        <Label htmlFor="service" className="text-sm font-semibold text-neutral-700 mb-1.5">
          Service Interest
        </Label>
        <Select name="service">
          <SelectTrigger className="h-12 border-neutral-300">
            <SelectValue placeholder="Select a service..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="adult-supported-employment">Adult - Supported Employment</SelectItem>
            <SelectItem value="adult-ojt">Adult - On the Job Training</SelectItem>
            <SelectItem value="adult-self-employment">Adult - Self Employment</SelectItem>
            <SelectItem value="adult-vocational-eval">Adult - Vocational Evaluation</SelectItem>
            <SelectItem value="adult-benefits">Adult - Benefits Counseling</SelectItem>
            <SelectItem value="youth-work-based">Youth - Work-Based Learning</SelectItem>
            <SelectItem value="youth-post-secondary">Youth - Post-Secondary Planning</SelectItem>
            <SelectItem value="youth-career-camp">Youth - Career Camp</SelectItem>
            <SelectItem value="youth-job-search">Youth - Job Search Support</SelectItem>
            <SelectItem value="employer-partnership">Employer Partnership</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-semibold text-neutral-700 mb-1.5">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="min-h-[120px] border-neutral-300 focus:border-brand-blue-500 focus:ring-brand-blue-500/15 resize-y"
          placeholder="How can we help you?"
        />
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto bg-brand-blue-500 hover:bg-brand-blue-600 min-h-12 px-8 font-semibold">
        Send Message
      </Button>
    </form>
  )
}
