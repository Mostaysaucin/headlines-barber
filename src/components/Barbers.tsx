const barbers = [
  {
    name: "Chris Bossio",
    role: "Manager / Lead Barber",
    social: "@Bossiocuts",
    socialUrl: "https://www.youtube.com/@Bossiocuts",
    socialPlatform: "YouTube",
    featured: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Luke",
    role: "Senior Barber",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Alfonso",
    role: "Barber",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
  {
    name: "Michael Harmon",
    role: "Barber",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Jorge",
    role: "Barber",
    image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=400&q=80",
  },
  {
    name: "Luis",
    role: "Barber",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80",
  },
  {
    name: "Kali",
    role: "Barber",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    name: "Kris Loko",
    role: "Barber",
    image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&q=80",
  },
];

export default function Barbers() {
  const featured = barbers.find((b) => b.featured);
  const others = barbers.filter((b) => !b.featured);

  return (
    <section id="barbers" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl text-accent mb-4">
            MEET YOUR BARBERS
          </h2>
          <p className="font-body text-text-secondary text-base max-w-xl mx-auto">
            Hand-picked professionals who master both classic techniques and
            modern trends.
          </p>
        </div>

        {/* Featured Barber */}
        {featured && (
          <div className="mb-16 max-w-2xl mx-auto">
            <div className="bg-background border border-primary/20 p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8">
              <div className="relative flex-shrink-0">
                <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-primary">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-heading text-2xl sm:text-3xl text-accent mb-1">
                  {featured.name}
                </h3>
                <p className="font-body text-primary text-sm font-medium mb-3">
                  {featured.role}
                </p>
                <p className="font-body text-text-secondary text-sm mb-4">
                  Leading the Headlines team with world-class technique and a
                  passion for the craft. Known for precision fades and
                  transformative cuts that have earned a massive following.
                </p>
                <a
                  href={featured.socialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  {featured.social}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Other Barbers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {others.map((barber) => (
            <div key={barber.name} className="text-center group">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-primary transition-all duration-300">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl text-accent">{barber.name}</h3>
              <p className="font-body text-text-secondary text-sm">
                {barber.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
