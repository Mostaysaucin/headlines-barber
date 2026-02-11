const locations = [
  {
    name: "Sunlake",
    address: "19455 Shumard Oak Dr #103",
    city: "Land O' Lakes, FL 34638",
    phone: "(813) 803-7110",
  },
  {
    name: "Bexley",
    address: "16936 Focus Loop",
    city: "Land O'Lakes, FL 34638",
    phone: "(813) 749-6109",
  },
  {
    name: "Northdale / Carrollwood",
    address: "13032 N Dale Mabry Hwy",
    city: "Tampa, FL 33618",
    phone: "(813) 374-9420",
  },
  {
    name: "New Tampa",
    address: "6431 E County Line Rd #103",
    city: "Tampa, FL 33463",
    phone: "(813) 907-0707",
  },
  {
    name: "Brandon",
    address: "10274 Causeway Blvd",
    city: "Tampa, FL 33619",
    phone: "(813) 605-0719",
  },
  {
    name: "Land O Lakes",
    address: "23104 FL-54",
    city: "Lutz, FL 33549",
    phone: "(813) 428-5917",
  },
  {
    name: "Tampa Palms",
    address: "17024 Palm Pointe Dr",
    city: "Tampa, FL 33647",
    phone: "(813) 284-7417",
  },
  {
    name: "West Palm Beach",
    address: "2650 S Military Trail Unit 25",
    city: "West Palm Beach, FL 33415",
    phone: "(561) 559-9701",
  },
  {
    name: "Bloomingdale",
    address: "909 E Bloomingdale Ave",
    city: "Brandon, FL 33511",
    phone: "(813) 278-5346",
  },
  {
    name: "Avalon Park",
    address: "33913 FL 54",
    city: "Wesley Chapel, FL 33545",
    phone: "(813) 783-3621",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl text-accent mb-4">
            FIND YOUR LOCATION
          </h2>
          <p className="font-body text-text-secondary text-base max-w-xl mx-auto">
            10 locations across Tampa Bay. Find the Headlines nearest you.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-surface border border-white/5 p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Location Name */}
              <h3 className="font-heading text-2xl sm:text-3xl text-accent mb-3 group-hover:text-primary transition-colors">
                {location.name}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3 mb-2">
                <svg
                  className="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-body text-accent text-sm">{location.address}</p>
                  <p className="font-body text-text-secondary text-sm">
                    {location.city}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-4 h-4 text-primary flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}
                  className="font-body text-accent text-sm hover:text-primary transition-colors"
                >
                  {location.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="border-t border-white/5 pt-4">
                <p className="font-body text-text-secondary text-xs">
                  Mon-Fri 10AM-7PM &bull; Sat 9AM-6PM &bull; Sun Closed
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-4">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${location.address}, ${location.city}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-surface border border-primary/30 text-primary font-heading text-xs tracking-widest py-2 hover:bg-primary hover:text-accent transition-all duration-200"
                >
                  DIRECTIONS
                </a>
                <a
                  href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}
                  className="flex-1 text-center bg-primary text-accent font-heading text-xs tracking-widest py-2 hover:bg-primary-light transition-colors duration-200"
                >
                  CALL
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
