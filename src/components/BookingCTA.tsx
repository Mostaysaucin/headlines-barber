export default function BookingCTA() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Heading */}
          <h2 className="font-heading text-4xl sm:text-5xl text-accent mb-4">
            READY FOR A FRESH CUT?
          </h2>
          <p className="font-body text-text-secondary text-base max-w-xl mx-auto mb-10">
            Walk into any Headlines location or book your appointment online.
            10 locations across Tampa Bay, open 6 days a week.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#locations"
              className="bg-primary hover:bg-primary-light text-accent font-heading text-lg tracking-widest px-10 py-4 transition-colors duration-200 min-w-[260px]"
            >
              BOOK YOUR APPOINTMENT
            </a>
            <a
              href="tel:8139070707"
              className="border-2 border-accent/80 hover:border-accent text-accent font-heading text-lg tracking-widest px-10 py-4 transition-colors duration-200 min-w-[260px] hover:bg-accent/5"
            >
              CALL YOUR NEAREST LOCATION
            </a>
          </div>

          {/* Hours reminder */}
          <p className="font-body text-text-secondary text-sm mt-8">
            Mon-Fri 10AM-7PM &bull; Sat 9AM-6PM &bull; Walk-ins Welcome
          </p>
        </div>
      </div>
    </section>
  );
}
