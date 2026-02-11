const services = [
  {
    name: "Men's Haircut",
    price: "$25-$35",
    description:
      "Precision cuts tailored to your style. Includes consultation, shampoo, and styling.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    name: "Kids Haircut",
    price: "$25-$30",
    description:
      "Patient, fun haircuts for the little ones. Family-friendly atmosphere they will love.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Military Haircut",
    price: "$25-$35",
    description:
      "Regulation-ready cuts with military precision. Clean, sharp, and inspection-ready.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: "Haircut & Beard Trim",
    price: "$30-$40",
    description:
      "The full package. Precision haircut paired with expert beard shaping and detailing.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Beard Trim",
    price: "$15-$20",
    description:
      "Expert beard sculpting and trimming. Clean lines, perfect shape, every time.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
  },
  {
    name: "Hot Towel Shave",
    price: "$25-$35",
    description:
      "Classic barbershop luxury. Hot towel prep, straight razor shave, and cool towel finish.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl text-accent mb-4">
            OUR SERVICES
          </h2>
          <p className="font-body text-text-secondary text-base max-w-xl mx-auto">
            Premium grooming services delivered by expert barbers. Walk-ins
            welcome, appointments recommended.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-surface p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-primary mb-4 group-hover:text-primary-light transition-colors">
                {service.icon}
              </div>

              {/* Service Name & Price */}
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-heading text-2xl sm:text-3xl text-accent">
                  {service.name}
                </h3>
                <span className="font-heading text-2xl text-primary ml-4 whitespace-nowrap">
                  {service.price}
                </span>
              </div>

              {/* Description */}
              <p className="font-body text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#locations"
            className="inline-block bg-primary hover:bg-primary-light text-accent font-heading text-lg tracking-widest px-10 py-4 transition-colors duration-200"
          >
            BOOK YOUR SERVICE
          </a>
        </div>
      </div>
    </section>
  );
}
