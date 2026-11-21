import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, DishCard, ExperienceStrip, Stars, Invitation } from "@/components/restaurant";
import { images, dishes, pageHead } from "@/lib/restaurant";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Modern Indian Fine Dining",
      "Discover The Saffron Table in Ludhiana. Modern Indian cuisine, signature dishes and an elevated dining experience inspired by our culinary heritage.",
    ),
  component: Home,
});
function Home() {
  return (
    <main>
      <section className="hero">
        <img
          className="hero-image"
          src={images.hero}
          alt="A modern Indian feast with butter chicken, saffron rice and freshly baked naan"
          fetchPriority="high"
          width="1672"
          height="941"
        />
        <div className="shell hero-content reveal">
          <Eyebrow>Tradition, thoughtfully reimagined</Eyebrow>
          <h1>
            A Taste of Tradition.
            <br />A Touch of <em>Luxury.</em>
          </h1>
          <p className="hero-copy">
            An elevated dining experience inspired by India's rich culinary heritage. Discover
            familiar flavours, beautifully reimagined.
          </p>
          <div className="hero-actions">
            <Button asChild variant="gold" size="restaurant">
              <Link to="/menu">
                Explore Our Menu <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="goldOutline" size="restaurant">
              <Link to="/contact">Reserve a Table</Link>
            </Button>
          </div>
          <div className="hero-note">
            <MapPin size={12} />
            Sarabha Nagar, Ludhiana <span>·</span> A little extraordinary, every day.
          </div>
        </div>
        <div className="shell hero-bottom">
          <span>THE SAFFRON TABLE · MODERN INDIAN DINING</span>
          <a href="#signature-dishes">
            DISCOVER MORE <ArrowDown size={13} />
          </a>
        </div>
      </section>
      <ExperienceStrip />
      <section className="section shell" id="signature-dishes">
        <div className="section-heading">
          <div>
            <Eyebrow>From our kitchen</Eyebrow>
            <h2>Our Signature Creations</h2>
            <p className="section-intro">
              Rooted in tradition. Refined with imagination. Made to be remembered.
            </p>
          </div>
          <Link to="/menu" className="text-link">
            View the Full Menu <ArrowRight size={15} />
          </Link>
        </div>
        <div className="dish-grid">
          {dishes.slice(0, 3).map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </div>
      </section>
      <section className="section cream-section">
        <div className="shell story-grid">
          <img
            className="story-photo"
            src={images.interior}
            alt="Warm brass lighting and intimate dining tables at The Saffron Table"
            loading="lazy"
            width="750"
            height="650"
          />
          <div className="story-text">
            <Eyebrow>More than a meal</Eyebrow>
            <h2>
              Indian at heart.
              <br />
              Extraordinary by nature.
            </h2>
            <p>
              Some of the best memories begin around a table. Ours brings together the warmth of
              Indian hospitality and a fresh perspective on the flavours we grew up loving.
            </p>
            <p>
              From the first fragrant spice to the final sweet indulgence, every detail is
              considered. Every plate has a story. And every guest belongs.
            </p>
            <Link to="/our-story" className="text-link">
              Discover Our Story <ArrowRight size={16} />
            </Link>
            <div className="story-signature">With warmth, The Saffron Table</div>
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="testimonial-heading">
          <Eyebrow>Words from our guests</Eyebrow>
          <h2>Moments Worth Coming Back For</h2>
        </div>
        <div className="testimonials">
          {[
            {
              quote:
                "The butter chicken is simply unforgettable. Beautiful flavours, thoughtful service, and an evening we’ll remember.",
              name: "Aarav & Meera · Ludhiana",
            },
            {
              quote:
                "A gorgeous space with food to match. The paneer tikka was a revelation. Our new favourite for special occasions.",
              name: "Simran K. · Chandigarh",
            },
            {
              quote:
                "Everything feels considered, yet wonderfully warm. The saffron biryani alone is worth returning for.",
              name: "Rohan S. · Ludhiana",
            },
          ].map((t) => (
            <div className="testimonial" key={t.name}>
              <Stars />
              <blockquote>“{t.quote}”</blockquote>
              <cite>{t.name}</cite>
            </div>
          ))}
        </div>
      </section>
      <Invitation />
    </main>
  );
}
