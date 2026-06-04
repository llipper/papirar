import { useEffect, useState } from "react"
import { Menu, Play, Search } from "lucide-react"

import { AboutSection } from "./components/about-section"
import { PolicySection } from "./components/policy-section"
import { PortfolioSection } from "./components/portfolio-section"
import { ServiceRail } from "./components/service-rail"
import { ServicesSection } from "./components/services-section"
import { TopicRibbon } from "./components/topic-ribbon"
import { WebsiteMenu } from "./components/website-menu"

const lightTopics = ["Lei seca", "Constituição", "Código Penal", "Revisão"]
const darkTopics = [
  "Leitura",
  "Áudio",
  "Marcações",
  "Perfil",
  "Tempo lendo",
  "Estudo",
]

export function WebsiteExperience() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scene]")
    )

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        }
      },
      { threshold: 0.32 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="experience-page" aria-labelledby="experience-title">
      <header className="experience-header" aria-label="Cabeçalho do Papirar">
        <div className="experience-social" aria-hidden="true">
          <span>IG</span>
          <i />
          <span>IN</span>
          <i />
          <span>YT</span>
        </div>

        <a
          className="experience-logo"
          href="#inicio"
          aria-label="Papirar início"
        >
          <span aria-hidden="true" />
          Papirar
        </a>

        <div className="experience-actions">
          <button type="button" aria-label="Pesquisar">
            <Search size={20} strokeWidth={1.8} />
          </button>
          <span aria-hidden="true" />
          <button
            type="button"
            className="experience-menu"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            Menu
            <Menu size={28} strokeWidth={2} />
          </button>
        </div>
      </header>

      <ServiceRail />
      <WebsiteMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <section
        id="inicio"
        className="experience-screen experience-hero-screen is-visible"
        data-scene
      >
        <section
          className="experience-hero"
          aria-label="Apresentação do Papirar"
        >
          <span className="experience-ghost" aria-hidden="true">
            p
          </span>
          <div className="experience-copy">
            <p className="experience-kicker">Papirar para rotina jurídica</p>
            <h1 id="experience-title">
              Lei seca<span>.</span>Áudio<span>.</span>Marcações.
              <br />
              Revisão organizada.
              <br />
              &amp;Mais
            </h1>
          </div>
        </section>

        <TopicRibbon className="topic-ribbon--light" topics={lightTopics} />
        <TopicRibbon className="topic-ribbon--dark" topics={darkTopics} />
      </section>

      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <PolicySection />

      <a
        className="watch-control"
        href="#sobre"
        aria-label="Conhecer o Papirar"
      >
        <span className="watch-control__text" aria-hidden="true">
          Ver app
        </span>
        <span className="watch-control__button">
          <Play size={18} fill="currentColor" />
        </span>
      </a>
    </main>
  )
}
