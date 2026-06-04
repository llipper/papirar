import { SectionHeading } from "./section-heading"

export function PolicySection() {
  return (
    <section
      id="politica"
      className="experience-screen experience-policy-screen"
      data-scene
    >
      <SectionHeading label="Contato" />
      <span className="screen-ghost screen-ghost--policy" aria-hidden="true">
        c
      </span>
      <div className="policy-content">
        <p className="policy-title">Política, suporte e contato.</p>
        <p>
          O Papirar utiliza login para acesso, perfil do usuário e recursos de
          estudo. As informações são usadas para manter a experiência de
          leitura, marcações e progresso.
        </p>
        <div className="policy-links">
          <a href="mailto:regy@papirar.app">regy@papirar.app</a>
          <a href="/fontes-oficiais.html">Fontes oficiais</a>
          <a href="/politica-de-privacidade.html">Política completa</a>
          <a href="/exclusao-de-conta.html">Excluir conta</a>
          <a href="#inicio">Voltar ao início</a>
        </div>
      </div>
    </section>
  )
}
