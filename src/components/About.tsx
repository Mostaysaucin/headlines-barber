const amenities = [
  "Walk-ins Welcome",
  "Appointments Recommended",
  "Complimentary Soda/Juice/Beer",
  "Family Friendly",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl text-accent mb-6">
              MORE THAN A HAIRCUT
            </h2>
            <p className="font-body text-text-secondary text-base leading-relaxed mb-6">
              Founded in 2000, Headlines Barbershops has grown from a single
              chair in Tampa Bay to 10 thriving locations across the region. We
              built Headlines on a simple belief: every man deserves a barbershop
              experience that makes him feel confident, sharp, and taken care of.
            </p>
            <p className="font-body text-text-secondary text-base leading-relaxed mb-8">
              Our barbers are hand-picked professionals who stay ahead of trends
              while mastering classic techniques. From precision fades to hot
              towel shaves, every service is delivered with the care and
              attention that has earned us a 4.8-star reputation across nearly
              8,000 reviews.
            </p>

            {/* Amenities */}
            <div className="space-y-3">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-body text-accent text-base">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Column */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80"
                alt="Headlines Barbershop interior - premium barbershop experience"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Red accent bar */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
