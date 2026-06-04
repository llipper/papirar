type TopicRibbonProps = {
  className: string
  topics: string[]
}

export function TopicRibbon({ className, topics }: TopicRibbonProps) {
  return (
    <div className={`topic-ribbon ${className}`} aria-hidden="true">
      <div className="topic-ribbon__track">
        {[...topics, ...topics].map((topic, index) => (
          <span key={`${topic}-${index}`}>
            {topic}
            <i />
          </span>
        ))}
      </div>
    </div>
  )
}
