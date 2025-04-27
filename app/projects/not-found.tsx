import Link from "next/link"
import { FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <main className="container flex flex-col items-center justify-center min-h-[70vh] py-12 px-4 text-center">
            <FileQuestion className="h-24 w-24 text-muted-foreground mb-6" />
            <h1 className="text-4xl font-bold mb-4">Abstract Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md">
                We couldn&#39;t find the research abstract you&#39;re looking for. It may have been removed or the URL might be
                incorrect.
            </p>
            <Button asChild>
                <Link href="/projects">Browse All Abstracts</Link>
            </Button>
        </main>
    )
}
