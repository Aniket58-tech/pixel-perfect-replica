import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PageHeading, Invitation } from "@/components/restaurant";
import { images, pageHead } from "@/lib/restaurant";
export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead(
      "Gallery",
      "Step inside The Saffron Table. Explore our intimate restaurant interiors, signature dishes and contemporary Indian dining photography.",
    ),
  component: Gallery,
});
const photos = [
  { src: images.interior, label: "An intimate setting" },
  { src: images.paneer, label: "Tandoori Paneer Tikka" },
  { src: images.chicken, label: "Signature Butter Chicken" },
  { src: images.biryani, label: "Saffron Dum Biryani" },
  { src: images.dessert, label: "A sweet ending" },
  { src: images.naan, label: "Fresh from the tandoor" },
  { src: images.lassi, label: "A taste of sunshine" },
];
function Gallery() {
  const [selected, setSelected] = useState<(typeof photos)[number] | null>(null);
  return (
    <main>
      <PageHeading
        label="A glimpse of the experience"
        title="Through Our Lens"
        description="Warm spaces, beautiful plates and little details. Take a moment to discover life at The Saffron Table."
      />
      <section className="shell menu-section">
        <div className="gallery-grid">
          {photos.map((p) => (
            <Button
              variant="photo"
              className="gallery-item"
              key={p.label}
              onClick={() => setSelected(p)}
              aria-label={`View ${p.label}`}
            >
              <img src={p.src} alt={p.label} loading="lazy" width="750" height="500" />
              <span className="gallery-label">{p.label}</span>
              <ZoomIn className="zoom-icon" />
            </Button>
          ))}
        </div>
      </section>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="max-w-4xl">
          <DialogTitle className="font-serif text-3xl">{selected?.label}</DialogTitle>
          <DialogDescription className="sr-only">
            Restaurant and food photography from The Saffron Table.
          </DialogDescription>
          {selected && <img src={selected.src} alt={selected.label} className="lightbox-image" />}
        </DialogContent>
      </Dialog>
      <Invitation />
    </main>
  );
}
