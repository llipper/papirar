import { useEffect, useState } from "react"

import { WebsiteExperience } from "@/features/website/website-experience"
import { SplashPage } from "@/features/splash/splash-page"

const SPLASH_DURATION_MS = 2100
const SPLASH_EXIT_MS = 700

export function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true)
  const [isSplashLeaving, setIsSplashLeaving] = useState(false)

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setIsSplashLeaving(true)
    }, SPLASH_DURATION_MS)

    const hideTimer = window.setTimeout(() => {
      setIsSplashVisible(false)
    }, SPLASH_DURATION_MS + SPLASH_EXIT_MS)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  return (
    <>
      <WebsiteExperience />
      {isSplashVisible ? <SplashPage isLeaving={isSplashLeaving} /> : null}
    </>
  )
}

export default App
