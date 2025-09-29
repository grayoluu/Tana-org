export function TanaLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold text-primary">T</span>
      <div className="relative">
        {/* Ethereum logo as the "A" */}
        <svg className="w-6 h-6 text-primary" viewBox="0 0 256 417" fill="currentColor">
          <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" opacity="0.602" />
          <path d="M127.961 0L0 212.32l127.961 75.639V154.158z" opacity="0.8" />
          <path d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z" opacity="0.602" />
          <path d="M127.961 416.905v-104.718L0 236.587z" opacity="0.8" />
          <path d="M127.961 287.958l127.962-75.637-127.962-58.162z" opacity="0.2" />
          <path d="M0 212.32l127.961 75.638v-133.8z" opacity="0.602" />
        </svg>
      </div>
      <span className="text-2xl font-bold text-primary">na</span>
    </div>
  )
}
