import Image from "next/image";

export default function DiscordCTA() {
  const widgetUrl = process.env.NEXT_PUBLIC_DISCORD_WIDGET_URL; // e.g. https://discord.com/widget?id=123456789012345678&theme=light

  return (
    <section className="bg-sky text-white py-12 rounded-lg text-center">
      <h2 className="text-3xl font-bold mb-4">
        Join Our Community
      </h2>
      <p className="mb-6 max-w-xl mx-auto">
        All resources, live strategy sessions, and peer support live in our private Discord.
        Jump in, ask questions, share wins, and grow together.
      </p>

      {/* Discord widget – responsive */}
      {widgetUrl ? (
        <iframe
          src={widgetUrl}
          width="350"
          height="500"
          allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className="mx-auto rounded-lg shadow-lg"
        ></iframe>
      ) : (
        <p className="text-sm">
          Discord widget URL not set. Add <code>NEXT_PUBLIC_DISCORD_WIDGET_URL</code> to <code>.env.local</code>.
        </p>
      )}

      {/* Direct Join Button – also works if the widget is hidden on mobile */}
      <div className="mt-6">
        <a
          href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD_SERVER_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-navy font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Open Discord Invite
        </a>
      </div>
    </section>
  );
}
