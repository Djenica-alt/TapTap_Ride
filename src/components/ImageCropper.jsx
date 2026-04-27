import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import './ImageCropper.css'

export default function ImageCropper({ image, onCrop, onCancel }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const getCroppedImage = useCallback(async () => {
    try {
      setIsProcessing(true)
      const canvas = await createImage(image, croppedAreaPixels)
      const croppedImageUrl = canvas.toDataURL('image/jpeg')
      onCrop(croppedImageUrl)
    } catch (error) {
      console.error('Failed to crop image:', error)
      alert('Failed to crop image')
    } finally {
      setIsProcessing(false)
    }
  }, [image, croppedAreaPixels, onCrop])

  return (
    <div className="image-cropper-overlay">
      <div className="image-cropper-modal">
        <div className="image-cropper-header">
          <h2>Crop Your Profile Picture</h2>
        </div>

        <div className="image-cropper-container">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            showGrid={false}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            onMouseDown={() => {}}
            onTouchStart={() => {}}
          />
        </div>

        <div className="image-cropper-controls">
          <div className="zoom-control">
            <label htmlFor="zoom-slider">Zoom:</label>
            <input
              id="zoom-slider"
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="zoom-slider"
            />
            <span className="zoom-value">{(zoom * 100).toFixed(0)}%</span>
          </div>
        </div>

        <div className="image-cropper-actions">
          <button
            type="button"
            className="cropper-btn-cancel"
            onClick={onCancel}
            disabled={isProcessing}
          >
            Cancel
          </button>
          <button
            type="button"
            className="cropper-btn-crop"
            onClick={getCroppedImage}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Crop & Save'}
          </button>
        </div>
      </div>
    </div>
  )
}

// Helper function to create cropped image
const createImage = (url, pixelCrop) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => {
      const canvas = document.createElement('canvas')
      canvas.width = 300
      canvas.height = 300
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        reject(new Error('No 2d context'))
        return
      }

      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        300,
        300
      )

      resolve(canvas)
    })
    image.addEventListener('error', (err) => reject(err))
    image.setAttribute('crossOrigin', 'anonymous')
    image.src = url
  })
}
