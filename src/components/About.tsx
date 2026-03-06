import Image from "next/image";

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-semibold text-navy mb-4">
          Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Peace Time Agency was created to bring like‑minded creators together
          in a supportive, collaborative environment where growth is shared
          and encouraged. We saw too many agencies on TikTok operating with
          predatory practices, restrictive contracts, and one‑sided expectations.
          Our agency is the alternative – a transparent, community‑driven
          partner that handles the stress so you can focus on the fun of
          streaming.
        </p>
        <p className="mt-4 text-gray-600 italic">
          “We’re like the grandparent you come to for advice, comfort, and
          reassurance – whatever you need in the moment, we can provide it.”
        </p>
      </div>

      <div className="relative rounded-lg overflow-hidden shadow-lg">
        {/* Replace `about.png` with the PNG you prefer for the founder image */}
        <Image
          src="/images/about.png"
          alt="Founder portrait"
          width={600}
          height={400}
          className="object-cover w-full h-full"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
