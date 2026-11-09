import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-6 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="font-display text-sm font-bold tracking-tight text-foreground">
          OBIARI UCHE
        </button>
        <nav className="flex gap-8">
          {[
            { label: "WORK", id: "catalog" },
            { label: "ABOUT", id: "about" },
            { label: "CONTACT", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-mono-meta text-[11px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
