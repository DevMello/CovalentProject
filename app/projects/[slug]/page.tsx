import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ChevronLeft, BookOpen, MessageSquare, ExternalLink, Share2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CommentSection } from "@/components/sections/comment-section"
import { mockProjects } from "@/lib/mock-data"

type Props = {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const f = await params;
    const project = mockProjects.find((p) => p.id === f.slug)

    if (!project) {
        return {
            title: "Abstract Not Found",
            description: "The requested research abstract could not be found",
        }
    }

    return {
        title: `${project.title} | Research Abstract`,
        description: project.abstract.substring(0, 160) + "...",
    }
}
export default async function ProjectPage({ params }: Props) {
    const f = await params;
    const project = mockProjects.find((p) => p.id === f.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <main className="container py-12 px-4 md:py-16 lg:py-24">
                <div className="mx-auto max-w-4xl">
                    {/* Back Navigation */}
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
                    >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Back to all projects
                    </Link>

                    {/* Abstract Header */}
                    <div className="mb-8">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            <Badge variant="outline" className="capitalize">
                                {project.category.replace("-", " ")}
                            </Badge>
                            <div className="text-sm text-muted-foreground">Submitted on {project.submissionDate}</div>
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">{project.title}</h1>
                        <p className="text-xl text-muted-foreground">
                            By {project.authors} • {project.institution}
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Left Column - Abstract and Walkthrough */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Abstract */}
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="h-5 w-5 text-primary" />
                                        <CardTitle>Abstract</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="whitespace-pre-line">{project.abstract}</p>
                                </CardContent>
                            </Card>

                            {/* Walkthrough */}
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-2">
                                        <MessageSquare className="h-5 w-5 text-primary" />
                                        <CardTitle>Simplified Walkthrough</CardTitle>
                                    </div>
                                    <CardDescription>A more accessible explanation of the research</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-muted/30 p-4 rounded-lg">
                                        <p>{project.walkthrough}</p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Comments Section */}
                            <CommentSection projectId={project.id} comments={project.comments || []} />
                        </div>

                        {/* Right Column - Metadata and Actions */}
                        <div className="space-y-6">
                            {/* Keywords */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Keywords</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.keywords.map((keyword) => (
                                            <Badge key={keyword} variant="secondary">
                                                {keyword}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Actions */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Actions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {project.paperUrl && (
                                        <Button className="w-full justify-start" asChild>
                                            <Link href={project.paperUrl} target="_blank">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                View Full Paper
                                            </Link>
                                        </Button>
                                    )}

                                    <Button variant="outline" className="w-full justify-start">
                                        <Share2 className="mr-2 h-4 w-4" />
                                        Share Abstract
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Related Content Placeholder */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Related Research</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {mockProjects
                                        .filter(
                                            (p) =>
                                                p.id !== project.id &&
                                                (p.category === project.category || p.keywords.some((k) => project.keywords.includes(k))),
                                        )
                                        .slice(0, 3)
                                        .map((relatedProject) => (
                                            <Link
                                                key={relatedProject.id}
                                                href={`/projects/${relatedProject.id}`}
                                                className="block p-3 rounded-lg hover:bg-muted transition-colors"
                                            >
                                                <h3 className="font-medium line-clamp-2 mb-1">{relatedProject.title}</h3>
                                                <p className="text-sm text-muted-foreground line-clamp-2">
                                                    {relatedProject.abstract.substring(0, 100)}...
                                                </p>
                                            </Link>
                                        ))}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
