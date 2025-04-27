"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, ChevronDown, MessageSquare, BookOpen } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { mockProjects } from "@/lib/mock-data"

type Category =
    | "biology"
    | "chemistry"
    | "physics"
    | "engineering"
    | "social-sciences"
    | "computer-science"
    | "mathematics"
    | "environmental-science"
    | "all"

export function ProjectsList() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<Category>("all")
    const [selectedKeywords, setSelectedKeywords] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [projects, setProjects] = useState<typeof mockProjects>([])
    const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({})

    // Simulate loading data
    useEffect(() => {
        const timer = setTimeout(() => {
            setProjects(mockProjects)
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    // Filter projects based on search query, category, and keywords
    const filteredProjects = projects.filter((project) => {
        const matchesSearch =
            searchQuery === "" ||
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.walkthrough.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

        const matchesKeywords =
            selectedKeywords.length === 0 || selectedKeywords.some((keyword) => project.keywords.includes(keyword))

        return matchesSearch && matchesCategory && matchesKeywords
    })

    // Toggle abstract expansion
    const toggleAbstractExpansion = (id: string) => {
        setExpandedAbstracts((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    // Get all unique keywords from projects
    const allKeywords = Array.from(new Set(projects.flatMap((project) => project.keywords))).sort()

    // Toggle keyword selection
    const toggleKeyword = (keyword: string) => {
        setSelectedKeywords((prev) => (prev.includes(keyword) ? prev.filter((k) => k !== keyword) : [...prev, keyword]))
    }

    return (
        <div className="space-y-8">
            {/* Search and Filter Controls */}
            <div className="flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search abstracts, titles, or keywords..."
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex gap-2">

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Filter className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <div className="p-2">
                                <p className="text-sm font-medium mb-2">Filter by Keywords</p>
                                <div className="space-y-1 max-h-[300px] overflow-y-auto">
                                    {allKeywords.map((keyword) => (
                                        <DropdownMenuCheckboxItem
                                            key={keyword}
                                            checked={selectedKeywords.includes(keyword)}
                                            onCheckedChange={() => toggleKeyword(keyword)}
                                        >
                                            {keyword}
                                        </DropdownMenuCheckboxItem>
                                    ))}
                                </div>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Category Tabs (More Categories) */}
            <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setSelectedCategory(value as Category)}>
                <TabsList className="grid grid-cols-7 w-full">
                    <TabsTrigger value="physics">All</TabsTrigger>
                    <TabsTrigger value="engineering">Engineering</TabsTrigger>
                    <TabsTrigger value="social-sciences">Social Sciences</TabsTrigger>
                    <TabsTrigger value="computer-science">Computer Science</TabsTrigger>
                    <TabsTrigger value="biology">Biology</TabsTrigger>
                    <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
                    <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
                </TabsList>
            </Tabs>

            {/* Selected Filters Display */}
            {selectedKeywords.length > 0 && (
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-sm text-muted-foreground">Filtered by:</span>
                    {selectedKeywords.map((keyword) => (
                        <Badge key={keyword} variant="outline" className="flex items-center gap-1">
                            {keyword}
                            <button onClick={() => toggleKeyword(keyword)} className="ml-1 rounded-full hover:bg-muted p-0.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </Badge>
                    ))}
                    <Button variant="ghost" size="sm" onClick={() => setSelectedKeywords([])} className="h-7 text-xs">
                        Clear all
                    </Button>
                </div>
            )}

            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
                Showing {filteredProjects.length} of {projects.length} projects
            </div>

            {/* Projects List */}
            <div className="space-y-6">
                {isLoading ? (
                    // Loading skeletons
                    Array.from({ length: 3 }).map((_, i) => (
                        <Card key={i}>
                            <CardHeader>
                                <Skeleton className="h-6 w-3/4 mb-2" />
                                <Skeleton className="h-4 w-1/4" />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Skeleton className="h-24 w-full" />
                                <div className="flex flex-wrap gap-2">
                                    <Skeleton className="h-5 w-16" />
                                    <Skeleton className="h-5 w-20" />
                                    <Skeleton className="h-5 w-14" />
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : filteredProjects.length === 0 ? (
                    <div className="text-center py-12">
                        <h3 className="text-lg font-medium">No matching projects found</h3>
                        <p className="text-muted-foreground mt-2">Try adjusting your search or filters</p>
                    </div>
                ) : (
                    filteredProjects.map((project) => (
                        <Card key={project.id} className="overflow-hidden">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl">
                                            <Link href={`/projects/${project.id}`} className="hover:underline">
                                                {project.title}
                                            </Link>
                                        </CardTitle>
                                        <CardDescription>
                                            By {project.authors} • {project.institution}
                                        </CardDescription>
                                    </div>
                                    <Badge variant="outline" className="capitalize">
                                        {project.category.replace("-", " ")}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {/* Abstract */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <BookOpen className="h-4 w-4 text-primary" />
                                        <h3 className="font-semibold">Abstract</h3>
                                    </div>
                                    <div className={`text-sm ${!expandedAbstracts[project.id] && "line-clamp-3"}`}>
                                        {project.abstract}
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleAbstractExpansion(project.id)}
                                        className="mt-1 h-7 text-xs"
                                    >
                                        {expandedAbstracts[project.id] ? "Show less" : "Read more"}
                                        <ChevronDown
                                            className={`ml-1 h-4 w-4 transition-transform ${expandedAbstracts[project.id] ? "rotate-180" : ""}`}
                                        />
                                    </Button>
                                </div>

                                {/* Walkthrough */}
                                <div className="bg-muted/30 p-4 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MessageSquare className="h-4 w-4 text-primary" />
                                        <h3 className="font-semibold">Simplified Walkthrough</h3>
                                    </div>
                                    <p className="text-sm">{project.walkthrough}</p>
                                </div>

                                {/* Keywords */}
                                <div className="flex flex-wrap gap-2">
                                    {project.keywords.map((keyword) => (
                                        <Badge
                                            key={keyword}
                                            variant="secondary"
                                            className="cursor-pointer"
                                            onClick={() => toggleKeyword(keyword)}
                                        >
                                            {keyword}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>

                            <Separator />

                            <CardFooter className="flex justify-between py-4">
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <span>Submitted on {project.submissionDate}</span>
                                </div>
                                <div className="flex gap-2">
                                    {project.comments && (
                                        <Button variant="ghost" size="sm" className="text-xs" asChild>
                                            <Link href={`/projects/${project.id}#comments`}>
                                                <MessageSquare className="mr-1 h-3.5 w-3.5" />
                                                {project.comments.length} Comments
                                            </Link>
                                        </Button>
                                    )}
                                    <Button size="sm" className="text-xs" asChild>
                                        <Link href={`/projects/${project.id}`}>View Details</Link>
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))
                )}
            </div>
        </div>
    )
}
