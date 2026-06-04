const services = ["Lei seca", "Áudio", "Marcações", "Perfil"]

export function ServiceRail() {
  return (
    <aside className="service-rail" aria-label="Recursos principais">
      {services.map((service) => (
        <span key={service}>{service}</span>
      ))}
    </aside>
  )
}
