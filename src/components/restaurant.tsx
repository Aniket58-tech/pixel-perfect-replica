import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Menu, X, MapPin, Utensils, Flame, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dish } from "@/lib/restaurant";

const links = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="The Saffron Table home">
      <svg className="brand-mark" viewBox="0 0 44 52" fill="none" aria-hidden="true">
        <path
          d="M22 4C12 11 6 22 6 32c0 9 7 15 16 15s16-6 16-15C38 22 32 11 22 4Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M22 47V14m0 23C9 31 11 21 11 21s11 2 11 16Zm0-5c11-4 12-13 12-13s-10 1-12 13Zm0 11C10 39 6 31 6 31m16 12c12-4 16-12 16-12"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M15 50h14" stroke="currentColor" />
      </svg>
      <span>
        <span className="brand-name">The Saffron Table</span>
        <span className="brand-caption">MODERN INDIAN DINING</span>
      </span>
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link" activeOptions={{ exact: true }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="goldOutline" className="header-reserve">
          <Link to="/contact">
            Reserve a Table <ArrowRight />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link"
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant="gold">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Reserve a Table <ArrowRight />
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <Brand />
            <p className="footer-description">
              An elevated dining experience inspired by India's rich culinary heritage.
            </p>
          </div>
          <div>
            <h3 className="footer-heading">Visit our table</h3>
            <div className="footer-detail">
              24, Saffron Avenue, Sarabha Nagar
              <br />
              Ludhiana, Punjab 141001
              <br />
              +91 00000 00000
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Opening hours</h3>
            <div className="footer-detail">
              Monday – Sunday
              <br />
              Lunch: 12:00 pm – 3:30 pm
              <br />
              Dinner: 7:00 pm – 11:00 pm
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} The Saffron Table. A fictional dining experience.
          </span>
          <div className="footer-links">
            {links.slice(1).map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}
export function PageHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-heading shell reveal">
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
export function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="dish-card">
      <div className="dish-photo">
        <img src={dish.image} alt={dish.name} loading="lazy" width="720" height="480" />
        <span className="dish-badge">
          {dish.signature
            ? "CHEF’S SIGNATURE"
            : dish.vegetarian
              ? "VEGETARIAN"
              : "FROM OUR KITCHEN"}
        </span>
      </div>
      <div className="dish-info">
        <div className="dish-title">
          <h3>{dish.name}</h3>
          <span className="dish-price">₹{dish.price}</span>
        </div>
        <p className="dish-description">{dish.description}</p>
      </div>
    </article>
  );
}
export function Invitation() {
  return (
    <section className="invitation">
      <div className="shell invitation-inner">
        <div>
          <h2>A place for memorable evenings.</h2>
          <p>Good company. Exceptional food. A table waiting to welcome you.</p>
        </div>
        <Button asChild variant="gold" size="restaurant">
          <Link to="/contact">
            Reserve a Table <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
export function ExperienceStrip() {
  return (
    <div className="experience-strip">
      <span>
        <Utensils />
        Modern Indian Cuisine
      </span>
      <i className="separator" />
      <span>
        <Flame />
        Crafted with Passion
      </span>
      <i className="separator" />
      <span>
        <Leaf />
        Finest Ingredients
      </span>
      <i className="separator" />
      <span>
        <MapPin />
        Ludhiana, Punjab
      </span>
    </div>
  );
}
export function Stars() {
  return (
    <div className="stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
}
