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
import { Send } from "lucide-react"

export function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="text-sm font-semibold text-neutral-700 mb-2 block">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            className="h-12 border-neutral-200 rounded-xl bg-neutral-50/50 focus:bg-white focus:border-brand-blue-300 focus:ring-brand-blue-500/10 transition-all duration-200"
            placeholder="Your full name"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-semibold text-neutral-700 mb-2 block">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="h-12 border-neutral-200 rounded-xl bg-neutral-50/50 focus:bg-white focus:border-brand-blue-300 focus:ring-brand-blue-500/10 transition-all duration-200"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone" className="text-sm font-semibold text-neutral-700 mb-2 block">
            Phone <span className="text-neutral-400 font-normal">(optional)</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            className="h-12 border-neutral-200 rounded-xl bg-neutral-50/50 focus:bg-white focus:border-brand-blue-300 focus:ring-brand-blue-500/10 transition-all duration-200"
            placeholder="(813) 000-0000"
          />
        </div>

        <div>
          <Label htmlFor="service" className="text-sm font-semibold text-neutral-700 mb-2 block">
            Service Interest
          </Label>
          <Select name="service">
            <SelectTrigger className="h-12 border-neutral-200 rounded-xl bg-neutral-50/50">
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
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-semibold text-neutral-700 mb-2 block">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="min-h-[140px] border-neutral-200 rounded-xl bg-neutral-50/50 focus:bg-white focus:border-brand-blue-300 focus:ring-brand-blue-500/10 transition-all duration-200 resize-y"
          placeholder="Tell us about your goals and how we can help..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto bg-brand-blue-500 hover:bg-brand-blue-600 min-h-[52px] px-8 font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-px">
        <Send className="h-4 w-4 mr-2" />
        Send Message
      </Button>
    </form>
  )
}
