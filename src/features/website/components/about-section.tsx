import { SectionHeading } from "./section-heading"

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="experience-screen experience-info-screen"
      data-scene
    >
      <SectionHeading label="Sobre" />
      <span className="screen-ghost screen-ghost--about" aria-hidden="true">
        p
      </span>
      <div className="about-content">
        <p className="about-title">Estudo de lei seca com foco e constância.</p>
        <p>
          O Papirar nasceu para organizar a leitura jurídica no celular. A
          experiência atual concentra o essencial: lei seca, áudio integrado,
          marcações e perfil do usuário.
        </p>
        <p>
          A proposta é reduzir distrações e deixar a revisão mais clara para
          quem precisa manter contato diário com legislação.
        </p>
        <a href="#servicos">Conhecer recursos</a>
      </div>
    </section>
  )
}
