import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHeading, DishCard, Invitation } from "@/components/restaurant";
import { categories, dishes, pageHead, type Category } from "@/lib/restaurant";
export const Route = createFileRoute("/menu")({
  head: () =>
    pageHead(
      "Our Menu",
      "Explore starters, main courses, breads and rice, desserts and beverages at The Saffron Table. Discover modern Indian dishes with prices in INR.",
    ),
  component: MenuPage,
});
function MenuPage() {
  const [category, setCategory] = useState<Category>("All");
  return (
    <main>
      <PageHeading
        label="Made with care"
        title="A Menu to Savour"
        description="The familiar and the unexpected, in perfect balance. A considered collection of Indian flavours, made for sharing."
      />
      <section className="shell menu-section">
        <div className="category-tabs" role="group" aria-label="Menu categories">
          {categories.map((c) => (
            <Button
              key={c}
              variant={category === c ? "gold" : "goldOutline"}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </Button>
          ))}
        </div>
        <div className="dish-grid">
          {dishes
            .filter((d) => category === "All" || d.category === category)
            .map((d) => (
              <DishCard key={d.name} dish={d} />
            ))}
        </div>
        <p className="menu-note">
          All prices are in Indian rupees (INR). Applicable taxes are additional.
          <br />
          Please tell us about any allergies or dietary requirements before ordering.
        </p>
      </section>
      <Invitation />
    </main>
  );
}
