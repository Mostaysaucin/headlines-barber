const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    alt: "Barber performing a precision fade haircut",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Classic barbershop tools and clippers",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    alt: "Clean fade haircut close-up",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "Barbershop interior with dark aesthetic",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=600&q=80",
    alt: "Hot towel shave preparation",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80",
    alt: "Barber chair in moody lighting",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl text-accent mb-4">
            THE HEADLINES EXPERIENCE
          </h2>
          <p className="font-body text-text-secondary text-base max-w-xl mx-auto">
            Step inside the culture. Premium cuts, premium atmosphere.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} overflow-hidden group relative`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
