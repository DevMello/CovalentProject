"use client"

import { useState } from "react"
import { MessageSquare, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { toast} from "sonner";

type Comment = {
    id: string
    author: string
    text: string
    date: string
}

type CommentSectionProps = {
    projectId: string
    comments: Comment[]
}

export function CommentSection({ projectId, comments }: CommentSectionProps) {
    console.log(projectId, comments)
    const [isLoggedIn, setIsLoggedIn] = useState(false) // In a real app, this would come from auth state
    const [showCommentForm, setShowCommentForm] = useState(false)
    const [commentText, setCommentText] = useState("")
    const [localComments, setLocalComments] = useState<Comment[]>(comments)

    const handleAddComment = () => {
        if (!isLoggedIn) {
            // In a real app, this would redirect to your login page
            toast("Please log in to add a comment.")
            setIsLoggedIn(false)
            // router.push("/login") // Uncomment in a real app
            return
        }

        setShowCommentForm(true)
    }

    const handleSubmitComment = () => {
        if (!commentText.trim()) {
            toast("Empty comment")
            return
        }

        // In a real app, this would be an API call to save the comment
        const newComment: Comment = {
            id: `temp-${Date.now()}`,
            author: "Current User", // Would come from auth in a real app
            text: commentText,
            date: new Date().toLocaleDateString(),
        }

        setLocalComments([...localComments, newComment])
        setCommentText("")
        setShowCommentForm(false)

        toast( "Comment added - Your comment has been added successfully.")
    }

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
    }

    return (
        <Card>
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        <CardTitle>Discussion</CardTitle>
                    </div>
                    <Button onClick={handleAddComment} size="sm">
                        Add Comment
                    </Button>
                </div>
                <CardDescription>Questions, insights, and discussion about this research</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {showCommentForm && (
                    <div className="space-y-4">
                        <Textarea
                            placeholder="Share your thoughts or questions about this research..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            className="min-h-[100px]"
                        />
                        <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm" onClick={() => setShowCommentForm(false)}>
                                Cancel
                            </Button>
                            <Button size="sm" onClick={handleSubmitComment}>
                                <Send className="mr-2 h-4 w-4" />
                                Submit
                            </Button>
                        </div>
                    </div>
                )}

                {localComments.length === 0 ? (
                    <div className="text-center py-8">
                        <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                        <h3 className="text-lg font-medium mb-1">No comments yet</h3>
                        <p className="text-muted-foreground">Be the first to comment on this research</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {localComments.map((comment, index) => (
                            <div key={comment.id}>
                                {index > 0 && <Separator className="my-4" />}
                                <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarFallback>{getInitials(comment.author)}</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">{comment.author}</span>
                                            <span className="text-xs text-muted-foreground">{comment.date}</span>
                                        </div>
                                        <p className="text-sm">{comment.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
