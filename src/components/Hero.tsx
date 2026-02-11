export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585747860019-8bfa44e6d55f?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Est Badge */}
        <div className="inline-block mb-6">
          <span className="font-heading text-sm sm:text-base tracking-[0.2em] text-primary border border-primary/40 px-4 py-2">
            SERVING TAMPA BAY SINCE 2000
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-accent leading-[0.95] mb-6">
          HEADLINES
          <br />
          BARBERSHOPS
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
          The Professional Twist To The Modern Barber Shop
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://booksy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-light text-accent font-heading text-lg tracking-widest px-10 py-4 transition-colors duration-200 min-w-[220px]"
          >
            BOOK APPOINTMENT
          </a>
          <a
            href="#locations"
            className="border-2 border-accent/80 hover:border-accent text-accent font-heading text-lg tracking-widest px-10 py-4 transition-colors duration-200 min-w-[220px] hover:bg-accent/5"
          >
            FIND A LOCATION
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
