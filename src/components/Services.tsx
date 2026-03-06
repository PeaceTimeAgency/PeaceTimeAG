import Image from "next/image";

const services = [
  {
    title: "Analytics Review",
    desc: "Deep dive into viewer retention, gifting trends, and stream consistency. We surface actionable insights you can implement today.",
    icon: "/images/services.png",
  },
  {
    title: "Strategic Growth Roadmap",
    desc: "A 3‑step plan: audit → tactical push → scale. Every step is data‑driven and paced to your comfort level.",
    icon: "/images/services.png",
  },
  {
    title: "Community & Discord Access",
    desc: "Instant entry to our private Discord hub – education, live strategy sessions, and peer support.",
    icon: "/images/services.png",
  },
];

export default function Services() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold text-navy mb-8">
        What We Offer
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={s.icon}
              alt={s.title}
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-medium text-navy mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
