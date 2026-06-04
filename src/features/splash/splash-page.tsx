import { SplashBrandMark } from "./components/splash-brand-mark"

type SplashPageProps = {
  isLeaving?: boolean
}

export function SplashPage({ isLeaving = false }: SplashPageProps) {
  return (
    <main
      className={isLeaving ? "splash-page splash-page--leaving" : "splash-page"}
      aria-labelledby="splash-title"
    >
      <h1 id="splash-title" className="sr-only">
        Papirar
      </h1>
      <SplashBrandMark productName="Papirar" mark="p" />
      <div className="splash-loader" aria-hidden="true" />
    </main>
  )
}
