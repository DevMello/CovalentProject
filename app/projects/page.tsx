import type { Metadata } from "next"
import { ProjectsList } from "@/components/sections/projects-list"

export const metadata: Metadata = {
    title: "Research Projects | The Covalent Project",
    description: "Browse submitted research abstracts and projects from our community",
}

export default function ProjectsPage() {
    return (
        <main className="flex items-center justify-center min-h-screen mt-16">
            <div className="mx-auto max-w-5xl py-10">
                <div className="space-y-4 text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Research Walkthroughs</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Explore research abstracts submitted by our community. Search, filter, and discover innovative projects
                        across various scientific disciplines.
                    </p>
                </div>

                <ProjectsList />
            </div>
        </main>
    )
}
