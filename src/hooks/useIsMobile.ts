// import { useEffect, useState } from 'react'

// const useIsMobile = (breakpoint: number = 1024) => {
//   const [isMobile, setIsMobile] = useState(() => {
//     if (typeof window === 'undefined') return false
//     return window.innerWidth < breakpoint
//   })

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < breakpoint)
//     window.addEventListener('resize', check)
//     return () => window.removeEventListener('resize', check)
//   }, [breakpoint])

//   return isMobile
// }

// export default useIsMobile