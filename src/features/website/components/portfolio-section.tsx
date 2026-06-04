import homeImage from "../../../../git/imagens/home.png"
import leituraImage from "../../../../git/imagens/texto_marcado_opções.png"
import leiSecaImage from "../../../../git/imagens/lei_seca_2.png"
import leiSecaTwoImage from "../../../../git/imagens/leitura.png"
import perfilImage from "../../../../git/imagens/perfil_leitura.png"

import { SectionHeading } from "./section-heading"

const items = [
  {
    title: "Home de estudo",
    label: "Tempo lendo",
    image: homeImage,
  },
  {
    title: "Biblioteca",
    label: "Lei seca",
    image: leiSecaImage,
  },
  {
    title: "Vade mecum",
    label: "Lei seca 2",
    image: leiSecaTwoImage,
  },
  {
    title: "Leitura marcada",
    label: "Marcação",
    image: leituraImage,
  },
  {
    title: "Perfil do aluno",
    label: "Progresso",
    image: perfilImage,
  },
]

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="experience-screen experience-portfolio-screen"
      data-scene
    >
      <SectionHeading label="App" />
      <span className="screen-ghost screen-ghost--portfolio" aria-hidden="true">
        p
      </span>
      <div className="portfolio-grid">
        {items.map((item) => (
          <article key={item.title} className="portfolio-item">
            <div className="portfolio-screenshot">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>
              <span aria-hidden="true" />
              {item.label}
            </p>
          </article>
        ))}
      </div>
      <span className="bottom-ghost-title" aria-hidden="true">
        PAPIRAR
      </span>
    </section>
  )
}
