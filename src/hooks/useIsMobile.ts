import { useEffect, useState } from 'react'

type MobileState = boolean | null

const useIsMobile = (breakpoint: number = 1024) => {
  const [isMobile, setIsMobile] = useState<MobileState>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])

  return isMobile
}

export default useIsMobile