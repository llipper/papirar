type SectionHeadingProps = {
  label: string
}

export function SectionHeading({ label }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <h2>{label}</h2>
      <span aria-hidden="true" />
    </header>
  )
}
