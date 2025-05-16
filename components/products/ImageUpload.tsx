"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Upload, X } from "lucide-react"

interface ImageUploadProps {
  onChange: (file: File | null) => void
  value: File | null
}

export default function ImageUpload({ onChange, value }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    
    if (file) {
      onChange(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const file = e.dataTransfer.files?.[0] || null
    
    if (file) {
      onChange(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  
  const handleRemoveImage = () => {
    onChange(null)
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }
  
  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }
  
  return (
    <div className="space-y-2">
      <Label className="mb-2 block">Imagem do produto</Label>
      
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
      />
      
      {!preview ? (
        <div 
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-10 w-10 text-gray-400 mb-2" />
          <p className="text-gray-500">Arraste uma imagem ou clique para fazer upload</p>
          <Button 
            type="button" 
            variant="outline" 
            className="mt-4"
            onClick={handleButtonClick}
          >
            Selecionar imagem
          </Button>
        </div>
      ) : (
        <div className="relative">
          <div className="w-full h-48 relative rounded-lg overflow-hidden">
            <Image 
              src={preview} 
              alt="Preview" 
              fill 
              className="object-cover"
            />
          </div>
          <button 
            type="button"
            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full"
            onClick={handleRemoveImage}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
} 