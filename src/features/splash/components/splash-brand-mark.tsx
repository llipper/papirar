type SplashBrandMarkProps = {
  productName: string
  mark: string
}

export function SplashBrandMark({ productName, mark }: SplashBrandMarkProps) {
  return (
    <div className="splash-brand" aria-label={`${productName} splash`}>
      <span className="splash-brand__ghost" aria-hidden="true">
        {mark}
      </span>
      <strong className="splash-brand__name">
        <span className="splash-brand__accent" aria-hidden="true" />
        {productName}
      </strong>
    </div>
  )
}
