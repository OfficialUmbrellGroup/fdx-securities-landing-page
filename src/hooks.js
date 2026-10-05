import { useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useInView({ threshold = 0, rootMargin = '0px 0px -10% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}

export function useInterval(callback, delay) {
  const saved = useRef(callback)
  useEffect(() => {
    saved.current = callback
  }, [callback])
  useEffect(() => {
    if (delay == null) return
    const id = setInterval(() => saved.current(), delay)
    return () => clearInterval(id)
  }, [delay])
}

export function useClickOutside(ref, onOutside, active) {
  useEffect(() => {
    if (!active) return
    const handle = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onOutside()
    }
    const key = (e) => e.key === 'Escape' && onOutside()
    document.addEventListener('mousedown', handle)
    document.addEventListener('keydown', key)
    return () => {
      document.removeEventListener('mousedown', handle)
      document.removeEventListener('keydown', key)
    }
  }, [ref, onOutside, active])
}
