"use client"

import { useState, type FormEvent } from "react"
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
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [service, setService] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || "Something went wrong.")
      }

      setStatus("success")
      form.reset()
      setService("")
    } catch (err) {
      setStatus("error")
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message. Please try again."
      )
    }
  }

  if (status === "success") {
    return (
      <div className="card-premium p-10 text-center" role="status">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-50">
          <CheckCircle className="h-7 w-7 text-brand-green-500" />
        </div>
        <h3 className="font-heading text-xl font-bold text-neutral-800 mb-2">
          Message Sent!
        </h3>
        <p className="text-neutral-500 text-base mb-6">
          Thank you for reaching out. A member of our team will get back to you within one business day.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          variant="outline"
          className="rounded-xl cursor-pointer"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="text-sm font-semibold text-neutral-700 mb-2 block">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            required
            aria-required="true"
            className="h-12 border-neutral-200 rounded-xl bg-neutral-50/50 focus:bg-white focus:border-brand-blue-300 focus:ring-brand-blue-500/10 transition-all duration-200"
            placeholder="Your full name"
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-semibold text-neutral-700 mb-2 block">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            className="h-12 border-neutral-200 rounded-xl bg-neutral-50/50 focus:bg-white focus:border-brand-blue-300 focus:ring-brand-blue-500/10 transition-all duration-200"
            placeholder="you@example.com"
            disabled={status === "submitting"}
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
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <Label htmlFor="service" className="text-sm font-semibold text-neutral-700 mb-2 block">
            Service Interest
          </Label>
          <Select value={service} onValueChange={setService} disabled={status === "submitting"}>
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
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={5}
          className="min-h-[140px] border-neutral-200 rounded-xl bg-neutral-50/50 focus:bg-white focus:border-brand-blue-300 focus:ring-brand-blue-500/10 transition-all duration-200 resize-y"
          placeholder="Tell us about your goals and how we can help..."
          disabled={status === "submitting"}
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200" role="alert">
          <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto bg-brand-blue-500 hover:bg-brand-blue-600 min-h-[52px] px-8 font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
