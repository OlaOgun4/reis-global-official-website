import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  ["/about", "About"],
  ["/capabilities", "Capabilities"],
  ["/solutions", "Solutions"],
  ["/industries", "Industries"],
  ["/research", "Research"],
  ["/publications", "Publications"],
] as const;

type NavigationPath = (typeof navigation)[number][0] | "/";

export function SiteHeader({ active }: { active: NavigationPath }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="reis-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-5 px-6 lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="REIS Global home">
          <ReisMark />
          <div className="min-w-0">
            <div className="text-xl font-bold tracking-[0.04em]">REIS GLOBAL</div>
            <div className="hidden text-[9px] uppercase tracking-[0.18em] opacity-65 sm:block">
              Research · Engineering · Innovation · Solutions
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm xl:flex" aria-label="Primary navigation">
          {navigation.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className={`reis-nav-link ${active === to ? "text-white" : ""}`}
              aria-current={active === to ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="reis-primary-button hidden items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold xl:inline-flex"
          >
            Start a conversation <ArrowRight size={16} />
          </Link>
          <button
            type="button"
            className="reis-icon-button xl:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="reis-mobile-navigation"
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="reis-mobile-navigation" className="reis-mobile-menu border-t px-6 py-5 xl:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navigation.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className={active === to ? "font-semibold text-white" : ""}
                aria-current={active === to ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link to="/contact" className="reis-card-link font-semibold" onClick={() => setMobileOpen(false)}>
              Start a conversation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="reis-footer border-t">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 md:grid-cols-2 xl:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <ReisMark />
            <span className="text-xl font-bold tracking-[0.05em]">REIS GLOBAL</span>
          </div>
          <p className="mt-5 max-w-md leading-7 opacity-60">
            Research, engineering, innovation and solutions for governments, enterprises and communities.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Company</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm opacity-70">
            <Link to="/about">About</Link>
            <Link to="/capabilities">Capabilities</Link>
            <Link to="/solutions">Solutions</Link>
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Explore</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm opacity-70">
            <Link to="/industries">Industries</Link>
            <Link to="/research">Research</Link>
            <Link to="/publications">Publications</Link>
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Contact</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm opacity-70">
            <Link to="/contact">Start a conversation</Link>
            <a href="mailto:info@reis-global.com">info@reis-global.com</a>
            <span>United Kingdom · Serving clients globally</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-2 border-t px-6 py-6 text-xs opacity-45 sm:flex-row sm:justify-between lg:px-10">
        <span>© 2026 REIS Global Ltd. All rights reserved.</span>
        <span>Research · Engineering · Innovation · Solutions</span>
      </div>
    </footer>
  );
}

function ReisMark() {
  return (
    <div className="relative h-11 w-11 shrink-0" aria-hidden="true">
      <span className="absolute left-1 top-1 h-4 w-8 rotate-[-35deg] rounded-md bg-[#28b8ff]" />
      <span className="absolute left-3 top-4 h-4 w-8 rotate-[-35deg] rounded-md bg-[#087cff]" />
      <span className="absolute left-1 top-7 h-4 w-8 rotate-[-35deg] rounded-md bg-[#1366d8]" />
    </div>
  );
}
