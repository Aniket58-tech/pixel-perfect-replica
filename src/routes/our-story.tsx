import { createFileRoute } from "@tanstack/react-router";
import { PageHeading, Eyebrow, Invitation } from "@/components/restaurant";
import { images, pageHead } from "@/lib/restaurant";
export const Route = createFileRoute("/our-story")({
  head: () =>
    pageHead(
      "Our Story",
      "Meet the culinary philosophy and chef behind The Saffron Table, a warm and refined modern Indian restaurant in Ludhiana.",
    ),
  component: Story,
});
function Story() {
  return (
    <main>
      <PageHeading
        label="Rooted in India"
        title="The Story of Our Table"
        description="A love letter to our culinary heritage. A fresh expression of everything that makes Indian dining extraordinary."
      />
      <section className="section cream-section">
        <div className="shell story-grid">
          <img
            className="story-photo"
            src={images.interior}
            alt="An elegant dining room with arches, brass lights and olive upholstered chairs"
            width="750"
            height="650"
          />
          <div className="story-text">
            <Eyebrow>Our beginnings</Eyebrow>
            <h2>
              Great food.
              <br />
              Even better memories.
            </h2>
            <p>
              The Saffron Table was imagined around a simple belief: the richness of Indian cooking
              deserves a setting as beautiful as its stories. In the heart of Ludhiana, our table
              celebrates the generosity, colour and craft of Indian cuisine.
            </p>
            <p>
              We look to family kitchens, bustling spice markets and the quiet skill of traditional
              cooks for inspiration. Then we bring our own perspective—lighter touches, considered
              presentation, and ingredients allowed to shine.
            </p>
            <div className="story-signature">Tradition is our inspiration. You are our reason.</div>
          </div>
        </div>
      </section>
      <div className="shell">
        <section className="philosophy-grid">
          {[
            {
              title: "Respect the roots",
              text: "We honour time-tested techniques: the glowing tandoor, the slow dum, the careful layering of spices. Heritage gives every dish its soul.",
            },
            {
              title: "Let ingredients lead",
              text: "Seasonal produce, aromatic whole spices and carefully selected ingredients bring honest, expressive flavours to every plate.",
            },
            {
              title: "Make it personal",
              text: "We believe fine dining should feel inviting, never distant. Warm service and thoughtful little details turn a meal into a memory.",
            },
          ].map((p, i) => (
            <article key={p.title}>
              <span className="philosophy-number">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </section>
        <section className="chef-section">
          <Eyebrow>The hands behind the flavours</Eyebrow>
          <h2>Chef Arjun Malhotra</h2>
          <p>
            Raised in Punjab, our fictional Executive Chef Arjun Malhotra found his earliest
            inspiration in his grandmother’s kitchen. After a decade exploring regional cooking
            across India, he brings that curiosity home: familiar flavours with a modern, meticulous
            point of view.
          </p>
          <p>
            “The best cooking doesn’t forget where it came from. It simply finds a new way to tell
            the story.”
          </p>
          <span className="text-primary text-xs">EXECUTIVE CHEF · THE SAFFRON TABLE</span>
        </section>
      </div>
      <Invitation />
    </main>
  );
}
