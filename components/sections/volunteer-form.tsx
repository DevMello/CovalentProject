"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from 'sonner'

const volunteerFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    bio: z
        .string()
        .min(30, {
            message: "Bio must be at least 30 characters.",
        })
        .max(500, {
            message: "Bio must not exceed 500 characters.",
        }),
    interests: z.array(z.string()).refine((value) => value.length > 0, {
        message: "You must select at least one area of interest.",
    }),
    experience: z.string().optional(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
        message: "You must agree to the terms and conditions.",
    }),
})

type VolunteerFormValues = z.infer<typeof volunteerFormSchema>

const interestOptions = [
    {
        id: "walkthroughs",
        label: "Writing Walkthroughs",
    },
    {
        id: "translation",
        label: "Translating Research",
    },
    {
        id: "mentorship",
        label: "Mentoring Students",
    },
    {
        id: "events",
        label: "Organizing Events",
    },
    {
        id: "fundraising",
        label: "Fundraising",
    },
    {
        id: "other",
        label: "Other",
    },
]

export default function VolunteerForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<VolunteerFormValues>({
        resolver: zodResolver(volunteerFormSchema),
        defaultValues: {
            name: "",
            email: "",
            bio: "",
            interests: [],
            experience: "",
            agreeToTerms: false,
        },
    })

    async function onSubmit(data: VolunteerFormValues) {
        setIsSubmitting(true)
        try {
            // In a real application, you would submit this data to your backend
            console.log("Form data:", data)

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500))

            toast("Application submitted successfully", {
                description: "Thank you for your interest in volunteering. We'll be in touch soon!",
            })

            form.reset()
        } catch (error) {
            toast("Submission failed", {
                error: "There was an error submitting your application. Please try again.",
            })
            console.error("Submission error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormDescription>We&#39;ll use this email to contact you about volunteer opportunities.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us about yourself, your background, and why you're interested in volunteering with The Covalent Project."
                                    className="min-h-[120px] resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                <span className={field.value.length > 500 ? "text-destructive" : ""}>
                  {field.value.length}/500 characters
                </span>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="interests"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel>Areas of Interest</FormLabel>
                                <FormDescription>Select all the areas you&#39;re interested in volunteering for.</FormDescription>
                            </div>
                            {interestOptions.map((option) => (
                                <FormField
                                    key={option.id}
                                    control={form.control}
                                    name="interests"
                                    render={({ field }) => {
                                        return (
                                            <FormItem key={option.id} className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(option.id)}
                                                        onCheckedChange={(checked) => {
                                                            return checked
                                                                ? field.onChange([...field.value, option.id])
                                                                : field.onChange(field.value?.filter((value) => value !== option.id))
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">{option.label}</FormLabel>
                                            </FormItem>
                                        )
                                    }}
                                />
                            ))}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Relevant Experience (Optional)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Share any relevant experience you have in research, education, science communication, etc."
                                    className="min-h-[100px] resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>This helps us match you with appropriate volunteer opportunities.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="agreeToTerms"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>I agree to the volunteer terms and conditions</FormLabel>
                                <FormDescription>
                                    By checking this box, you agree to our{" "}
                                    <a href="#" className="text-primary underline">
                                        volunteer guidelines
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-primary underline">
                                        privacy policy
                                    </a>
                                    .
                                </FormDescription>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        "Submit Application"
                    )}
                </Button>
            </form>
        </Form>
    )
}
