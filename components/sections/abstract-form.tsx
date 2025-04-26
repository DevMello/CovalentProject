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


const formSchema = z.object({
    title: z.string().min(5, {
        message: "Title must be at least 5 characters.",
    }),
    authors: z.string().min(2, {
        message: "Please provide at least one author.",
    }),
    institution: z.string().min(2, {
        message: "Institution is required.",
    }),
    abstract: z
        .string()
        .min(50, {
            message: "Abstract must be at least 50 characters.",
        })
        .max(2000, {
            message: "Abstract must not exceed 2000 characters.",
        }),
    keywords: z.string().min(3, {
        message: "Please provide at least one keyword.",
    }),
    walkthrough: z.string().optional(),
    permission: z.boolean().refine((val) => val === true, {
        message: "You must give permission to feature your abstract.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
})

type FormValues = z.infer<typeof formSchema>

export default function SubmitAbstractForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    //const { toast: toaster } = toast()

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            authors: "",
            institution: "",
            abstract: "",
            keywords: "",
            walkthrough: "",
            permission: false,
            email: "",
        },
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)
        try {
            console.error(data)
            // toaster({
            //     title: "Abstract submitted successfully",
            //     description: "Thank you for your submission. We will review it shortly.",
            // })
            form.reset()
        } catch (error) {
            // toaster({
            //     title: "Submission failed",
            //     description: "There was an error submitting your abstract. Please try again.",
            //     variant: "destructive",
            // })
            console.error("Submission error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Abstract Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the title of your abstract" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="authors"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Author(s)</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., John Doe, Jane Smith" {...field} />
                            </FormControl>
                            <FormDescription>List all authors separated by commas.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="institution"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Institution</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., University of Science" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="abstract"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Abstract</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter your abstract here (max 2000 characters)"
                                    className="min-h-[200px] resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                <span className={field.value.length > 2000 ? "text-destructive" : ""}>
                  {field.value.length}/2000 characters
                </span>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="keywords"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Keywords</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., machine learning, data science, AI" {...field} />
                            </FormControl>
                            <FormDescription>Separate keywords with commas.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="walkthrough"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Walkthrough Explanation (Optional)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Provide additional context or explanation if needed"
                                    className="min-h-[120px] resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This field is optional. Use it to provide additional context about your abstract.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="permission"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>Permission to Feature</FormLabel>
                                <FormDescription>
                                    I grant permission for my abstract to be featured in publications, the website, and
                                    promotional materials.
                                </FormDescription>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contact Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormDescription>We&#39;ll use this email to contact you about your submission.</FormDescription>
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
                        "Submit Abstract"
                    )}
                </Button>
            </form>
        </Form>
    )
}