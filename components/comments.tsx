"use client"

import { useState, useEffect } from "react"
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { User, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface Comment {
  id: string
  name: string
  comment: string
  createdAt: Timestamp
}

export function Comments() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState({
    name: "",
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      const q = query(collection(db, "comments"), orderBy("createdAt", "desc"))
      const querySnapshot = await getDocs(q)
      const commentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Comment[]
      setComments(commentsData)
    } catch (error) {
      console.error("Error fetching comments:", error)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await addDoc(collection(db, "comments"), {
        ...newComment,
        createdAt: Timestamp.now(),
      })

      setNewComment({ name: "", comment: "" })
      fetchComments() // Refresh comments
    } catch (error) {
      console.error("Error adding comment:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold">Leave a Comment</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <User className="absolute left-4 top-4 w-5 h-5 text-zinc-400 group-focus-within:text-purple-500 transition-colors" />
            <input
              type="text"
              value={newComment.name}
              onChange={(e) => setNewComment(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Your Name"
              required
              className="w-full pl-12 p-4 bg-zinc-900/50 border border-zinc-700 rounded-xl focus:border-purple-500 focus:ring-purple-500/20 transition-colors h-12 text-base"
            />
          </div>
          <div className="relative group">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-zinc-400 group-focus-within:text-purple-500 transition-colors" />
            <Textarea
              value={newComment.comment}
              onChange={(e) => setNewComment(prev => ({ ...prev, comment: e.target.value }))}
              placeholder="Your Comment"
              required
              className="pl-12 bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 min-h-[120px] text-base resize-none"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 h-12 text-base"
          >
            {isSubmitting ? "Posting..." : "Post Comment"}
          </Button>
        </form>
      </div>

      <div className="space-y-6">
        <h3 className="text-3xl font-bold">Comments</h3>
        {comments.length === 0 ? (
          <p className="text-zinc-400 text-base">No comments yet. Be the first to comment!</p>
        ) : (
          <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <User className="w-6 h-6 mt-1 text-purple-500" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-lg">{comment.name}</h4>
                    <p className="text-zinc-400 text-sm mb-3">
                      {comment.createdAt.toDate().toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-base leading-relaxed break-words">{comment.comment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
