import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Connect",
    desc: "Accept the TikTok agency invitation – it’s a single click, no hidden contracts.",
    img: "/images/process.png",
  },
  {
    number: "2",
    title: "Audit",
    desc: "We review your analytics, highlight growth levers, and set realistic milestones.",
    img: "/images/process.png",
  },
  {
    number: "3",
    title: "Scale",
    desc: "Weekly strategy calls, Discord community support, and merch integration help you grow sustainably.",
    img: "/images/process.png",
  },
];

export default function Process() {
  return (
    <section className="bg-calm py-12 rounded-lg">
      <h2 className="text-3xl font-semibold text-navy text-center mb-10">
        How We Work (1‑2‑3)
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-sky text-white rounded-full text-2xl font-bold mb-4">
              {step.number}
            </div>
            <Image
              src={step.img}
              alt={step.title}
              width={120}
              height={120}
              className="mb-4"
            />
            <h3 className="text-xl font-medium text-navy">{step.title}</h3>
            <p className="mt-2 text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
