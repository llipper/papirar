import { SectionHeading } from "./section-heading"

const services = [
  {
    title: "Leitura limpa.",
    description:
      "Tela focada no texto da lei, com hierarquia visual para artigos, parágrafos, incisos e rubricas.",
  },
  {
    title: "Áudio integrado.",
    description:
      "Reprodução junto ao conteúdo para apoiar revisão, leitura acompanhada e rotina de estudo.",
  },
  {
    title: "Marcações.",
    description:
      "Trechos classificados como importante, cai muito, revisar ou dominado para voltar ao que importa.",
  },
]

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="experience-screen experience-services-screen"
      data-scene
    >
      <SectionHeading label="Recursos" />
      <span className="screen-ghost screen-ghost--services" aria-hidden="true">
        r
      </span>
      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#portfolio">Ver detalhe</a>
          </article>
        ))}
      </div>
      <span className="bottom-ghost-title" aria-hidden="true">
        PAPIRAR
      </span>
    </section>
  )
}
