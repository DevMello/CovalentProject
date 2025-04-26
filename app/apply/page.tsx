import type { Metadata } from "next"
import SubmitAbstractForm from "@/components/sections/abstract-form"

export const metadata: Metadata = {
    title: "Submit an Abstract",
    description: "Submit your abstract for consideration",
}

export default function SubmitAbstractPage() {
    return (
        <main className="flex items-center justify-center min-h-screen pt-16">
            <div className="container max-w-3xl py-10 px-4 md:py-16">
                <div className="space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Submit an Abstract</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Researchers, academics, and industry professionals are invited to submit abstracts for consideration.
                            Selected abstracts will be featured in our examples and upcoming publications.
                        </p>
                    </div>

                    <div className="rounded-lg border bg-card text-card-foreground shadow">
                        <div className="p-6 sm:p-8">
                            <SubmitAbstractForm />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}