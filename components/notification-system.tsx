"use client"

import { useEffect } from "react"
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"

interface NotificationProps {
  id: string
  type: "success" | "error" | "warning" | "info"
  title: string
  description?: string
  duration?: number
  onClose: (id: string) => void
}

const NotificationIcon = ({ type }: { type: NotificationProps["type"] }) => {
  const iconClass = "h-5 w-5"
  
  switch (type) {
    case "success":
      return <CheckCircle className={`${iconClass} text-green-600`} />
    case "error":
      return <XCircle className={`${iconClass} text-red-600`} />
    case "warning":
      return <AlertCircle className={`${iconClass} text-yellow-600`} />
    case "info":
      return <Info className={`${iconClass} text-blue-600`} />
    default:
      return <Info className={`${iconClass} text-gray-600`} />
  }
}

export function Notification({ id, type, title, description, duration = 5000, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id)
    }, duration)

    return () => clearTimeout(timer)
  }, [id, duration, onClose])

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200"
      case "error":
        return "bg-red-50 border-red-200"
      case "warning":
        return "bg-yellow-50 border-yellow-200"
      case "info":
        return "bg-blue-50 border-blue-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative flex items-start gap-3 p-4 rounded-xl border shadow-lg backdrop-blur-sm ${getBackgroundColor()}`}
    >
      <NotificationIcon type={type} />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-black">{title}</h4>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </div>
      <button
        onClick={() => onClose(id)}
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  )
}

// Utility functions for showing notifications
export const showSuccessNotification = (title: string, description?: string) => {
  const { toast } = useToast()
  toast({
    variant: "success",
    title,
    description,
  })
}

export const showErrorNotification = (title: string, description?: string) => {
  const { toast } = useToast()
  toast({
    variant: "destructive",
    title,
    description,
  })
}

export const showInfoNotification = (title: string, description?: string) => {
  const { toast } = useToast()
  toast({
    title,
    description,
  })
}
