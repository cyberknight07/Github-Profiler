import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import './NotFoundPage.css'

function drawParticleText(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
  const parent = canvas.parentElement
  if (!ctx || !parent) return

  const width = parent.clientWidth
  const height = Math.min(parent.clientHeight, 320) || 260
  const dpr = window.devicePixelRatio || 1

  canvas.width = width * dpr
  canvas.height = height * dpr
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)

  const cx = width / 2
  const cy = height / 2
  const fontSize = Math.min(width * 0.26, 200)
  const font = `700 ${fontSize}px system-ui, sans-serif`

  const mask = document.createElement('canvas')
  mask.width = width
  mask.height = height
  const mctx = mask.getContext('2d')
  if (!mctx) return

  mctx.font = font
  mctx.textAlign = 'center'
  mctx.textBaseline = 'middle'
  mctx.fillStyle = '#fff'
  mctx.fillText('404', cx, cy)
  mctx.strokeStyle = '#fff'
  mctx.lineWidth = 3
  mctx.strokeText('404', cx, cy)

  const { data } = mctx.getImageData(0, 0, width, height)
  const step = 2

  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const alpha = data[(y * width + x) * 4 + 3]
      if (alpha < 40 || Math.random() > 0.45) continue

      const jitterX = x + (Math.random() - 0.5) * step * 2
      const jitterY = y + (Math.random() - 0.5) * step * 2
      const radius = Math.random() * 1.4 + 0.4
      const opacity = Math.random() * 0.5 + 0.5

      ctx.beginPath()
      ctx.fillStyle = `rgba(214, 232, 255, ${opacity})`
      ctx.arc(jitterX, jitterY, radius, 0, Math.PI * 2)
      ctx.fill()
    }
  }
}

function NotFoundPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const redraw = () => drawParticleText(canvas)
    redraw()

    window.addEventListener('resize', redraw)
    return () => window.removeEventListener('resize', redraw)
  }, [])

  return (
    <div className="not-found">
      <div className="not-found__hero">
        <canvas ref={canvasRef} className="not-found__canvas" role="img" aria-label="404" />
        <Link to="/" className="not-found__dot" aria-label="Back to home" />
      </div>
      <div className="not-found__footer" />
    </div>
  )
}

export default NotFoundPage
