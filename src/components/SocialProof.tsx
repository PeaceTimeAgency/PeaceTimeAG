import Image from "next/image";

export default function SocialProof() {
  // Replace with real logos / testimonial content later
  const mockLogos = [
    "/images/social-proof.png",
    "/images/social-proof.png",
    "/images/social-proof.png",
  ];

  return (
    <section className="text-center py-12">
      <h2 className="text-3xl font-semibold text-navy mb-8">Trusted By</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {mockLogos.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Client logo ${i + 1}`}
            width={120}
            height={80}
            className="object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>

      {/* Placeholder testimonial – swap out when you have real quotes */}
      <blockquote className="mt-8 max-w-2xl mx-auto italic text-gray-600">
        “Peace Time gave me the analytics insight I needed to double my view‑time
        in 6 weeks. The Discord community feels like a family.” – <span className="font-medium text-navy">Creator, 120k followers</span>
      </blockquote>
    </section>
  );
}
