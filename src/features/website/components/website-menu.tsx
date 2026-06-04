type WebsiteMenuProps = {
  isOpen: boolean
  onClose: () => void
}

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Recursos", href: "#servicos" },
  { label: "App", href: "#portfolio" },
  { label: "Contato", href: "mailto:regy@papirar.app" },
  { label: "Política", href: "/politica-de-privacidade.html" },
  { label: "Excluir conta", href: "/exclusao-de-conta.html" },
]

export function WebsiteMenu({ isOpen, onClose }: WebsiteMenuProps) {
  return (
    <div
      className={isOpen ? "website-menu is-open" : "website-menu"}
      aria-hidden={!isOpen}
    >
      <div
        className="website-menu__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu do Papirar"
      >
        <button type="button" onClick={onClose} aria-label="Fechar menu">
          Fechar
        </button>
        <nav aria-label="Links principais">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </nav>
        <p>
          Papirar é uma experiência para estudo de lei seca com áudio, marcações
          e revisão organizada.
        </p>
      </div>
    </div>
  )
}
