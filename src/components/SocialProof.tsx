const stats = [
  { number: "10", label: "Locations Across Tampa Bay" },
  { number: "4.8", label: "Star Average Rating" },
  { number: "7,968+", label: "Happy Clients" },
];

export default function SocialProof() {
  return (
    <section className="bg-surface border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x sm:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <span className="font-heading text-6xl sm:text-7xl text-primary">
                {stat.number}
              </span>
              <p className="font-body text-sm text-text-secondary mt-1 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
