import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hello World — Lovable App" },
      { name: "description", content: "A simple hello world page built with Lovable." },
      { property: "og:title", content: "Hello World — Lovable App" },
      { property: "og:description", content: "A simple hello world page built with Lovable." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-6 text-center">
      <div className="relative">
        <span className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
        <h1 className="relative text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          Hello, world
        </h1>
      </div>
      <p className="relative max-w-md text-lg text-muted-foreground">
        Welcome to your new app. Start building something amazing.
      </p>
      <div className="relative flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://docs.lovable.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Read the docs
        </a>
        <a
          href="https://github.com/lovable-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          Visit GitHub
        </a>
      </div>
    </main>
  );
}
