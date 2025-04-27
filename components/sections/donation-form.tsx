"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CreditCard, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { toast} from "sonner";

const formSchema = z.object({
    amount: z.string().min(1, "Please select or enter an amount"),
    customAmount: z.string().optional(),
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    cardNumber: z.string().min(1, "Card number is required"),
    expiryDate: z.string().min(1, "Expiry date is required"),
    cvc: z.string().min(1, "CVC is required"),
    recurring: z.boolean().default(false),
})

type FormValues = z.infer<typeof formSchema>

export function DonationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [donationType, setDonationType] = useState<"oneTime" | "monthly">("oneTime")

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            amount: "50",
            customAmount: "",
            firstName: "",
            lastName: "",
            email: "",
            cardNumber: "",
            expiryDate: "",
            cvc: "",
            recurring: false,
        },
    })

    const selectedAmount = form.watch("amount")
    const isCustomAmount = selectedAmount === "custom"

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)

        // In a real app, this would be an API call to process the payment
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500))

            toast({
                title: "Donation successful!",
                description: `Thank you for your ${donationType === "monthly" ? "monthly" : "one-time"} donation of $${
                    isCustomAmount ? data.customAmount : data.amount
                }.`,
            })

            form.reset()
        } catch (error) {
            toast({
                title: "Donation failed",
                description: "There was an error processing your donation. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="border-2">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Make a Donation</CardTitle>
                <CardDescription>Support the next generation of scientific researchers</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Donation Type Tabs */}
                        <Tabs
                            defaultValue="oneTime"
                            onValueChange={(value) => setDonationType(value as "oneTime" | "monthly")}
                            className="w-full"
                        >
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="oneTime">One-time</TabsTrigger>
                                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        {/* Amount Selection */}
                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Donation Amount</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="grid grid-cols-3 gap-4"
                                        >
                                            <FormItem>
                                                <FormLabel className="cursor-pointer [&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div]:bg-primary/10">
                                                    <FormControl>
                                                        <RadioGroupItem value="25" className="sr-only" />
                                                    </FormControl>
                                                    <div className="border-2 rounded-md p-4 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors">
                                                        <span className="text-lg font-semibold">$25</span>
                                                    </div>
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem>
                                                <FormLabel className="cursor-pointer [&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div]:bg-primary/10">
                                                    <FormControl>
                                                        <RadioGroupItem value="50" className="sr-only" />
                                                    </FormControl>
                                                    <div className="border-2 rounded-md p-4 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors">
                                                        <span className="text-lg font-semibold">$50</span>
                                                    </div>
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem>
                                                <FormLabel className="cursor-pointer [&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div]:bg-primary/10">
                                                    <FormControl>
                                                        <RadioGroupItem value="100" className="sr-only" />
                                                    </FormControl>
                                                    <div className="border-2 rounded-md p-4 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors">
                                                        <span className="text-lg font-semibold">$100</span>
                                                    </div>
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem>
                                                <FormLabel className="cursor-pointer [&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div]:bg-primary/10">
                                                    <FormControl>
                                                        <RadioGroupItem value="250" className="sr-only" />
                                                    </FormControl>
                                                    <div className="border-2 rounded-md p-4 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors">
                                                        <span className="text-lg font-semibold">$250</span>
                                                    </div>
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem>
                                                <FormLabel className="cursor-pointer [&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div]:bg-primary/10">
                                                    <FormControl>
                                                        <RadioGroupItem value="500" className="sr-only" />
                                                    </FormControl>
                                                    <div className="border-2 rounded-md p-4 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors">
                                                        <span className="text-lg font-semibold">$500</span>
                                                    </div>
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem>
                                                <FormLabel className="cursor-pointer [&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div]:bg-primary/10">
                                                    <FormControl>
                                                        <RadioGroupItem value="custom" className="sr-only" />
                                                    </FormControl>
                                                    <div className="border-2 rounded-md p-4 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors">
                                                        <span className="text-lg font-semibold">Custom</span>
                                                    </div>
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Custom Amount */}
                        {isCustomAmount && (
                            <FormField
                                control={form.control}
                                name="customAmount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Custom Amount</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                                                <Input {...field} type="number" min="1" className="pl-7" placeholder="Enter amount" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}

                        {/* Personal Information */}
                        <div className="space-y-4">
                            <h3 className="font-medium">Personal Information</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="email" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Payment Information */}
                        <div className="space-y-4">
                            <h3 className="font-medium">Payment Information</h3>
                            <FormField
                                control={form.control}
                                name="cardNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Card Number</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input {...field} className="pl-10" placeholder="1234 5678 9012 3456" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="expiryDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Expiry Date</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="MM/YY" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cvc"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>CVC</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="123" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        {/* Recurring Donation Option */}
                        {donationType === "oneTime" && (
                            <FormField
                                control={form.control}
                                name="recurring"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>Make this a recurring monthly donation</FormLabel>
                                            <p className="text-sm text-muted-foreground">
                                                Your support will help sustain our programs throughout the year
                                            </p>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        )}

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Heart className="mr-2 h-4 w-4" />
                                    {donationType === "monthly" ? "Donate Monthly" : "Donate Now"}
                                </>
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="bg-muted/30 px-6 py-4 text-center text-sm text-muted-foreground">
                Your donation is secure and encrypted. The Covalent Project is a registered 501(c)(3) nonprofit organization.
            </CardFooter>
        </Card>
    )
}
