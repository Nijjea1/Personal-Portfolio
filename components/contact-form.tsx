"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentURL, setCurrentURL] = useState("")

  useEffect(() => {
    setCurrentURL(window.location.href)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      const searchParams = new URLSearchParams()

      for (const [key, value] of formData.entries()) {
        searchParams.append(key, value.toString())
      }

      const endpoint = "https://formsubmit.co/ajax/avneetnijjer06@gmail.com"
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: searchParams.toString()
      })

      const data = await response.json()

      if (!response.ok || data.success !== "true") {
        throw new Error(data.message || "Failed to send message")
      }

      // Clear all form fields
      const inputs = form.querySelectorAll('input:not([type="hidden"]), textarea')
      inputs.forEach((element) => {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
          element.value = ''
        }
      })

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-3xl font-bold mb-8">Send Me a Message</h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* FormSubmit.co Configuration */}
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Contact Form Submission" />

            <div>
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 h-12 text-base"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 h-12 text-base"
              />
            </div>
            <div>
              <Input
                name="subject"
                placeholder="Subject"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 h-12 text-base"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 text-base"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 h-12 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <span className="flex items-center justify-center">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
