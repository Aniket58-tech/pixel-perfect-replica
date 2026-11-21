import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { MapPin, Clock, Phone, MessageCircle, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/restaurant";
import { pageHead } from "@/lib/restaurant";
import {
  reservationSchema,
  localDate,
  enquiryText,
  whatsappUrl,
  type Reservation,
} from "@/lib/reservation";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact & Reservations",
      "Find The Saffron Table in fictional Sarabha Nagar, Ludhiana. View opening hours and prepare a reservation enquiry. Enquiries are not confirmed bookings.",
    ),
  component: Contact,
});
function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Reservation | null>(null);
  const [today, setToday] = useState("");
  useEffect(() => setToday(localDate()), []);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = reservationSchema.safeParse(Object.fromEntries(data));
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const key = i.path[0];
        if (typeof key === "string") next[key] = i.message;
      });
      setErrors(next);
      setResult(null);
      return;
    }
    setErrors({});
    setResult(parsed.data);
  }
  function download() {
    if (!result) return;
    const blob = new Blob([enquiryText(result)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "saffron-table-enquiry.txt";
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <main>
      <PageHeading
        label="We look forward to welcoming you"
        title="Your Table Awaits"
        description="An intimate dinner, a family celebration or simply an evening well spent. Let’s make it memorable."
      />
      <section className="shell contact-grid">
        <div className="contact-info">
          <h2>Come find us.</h2>
          <div className="contact-detail">
            <MapPin />
            <div>
              <h3>Our address</h3>
              <p>
                24, Saffron Avenue, Sarabha Nagar
                <br />
                Ludhiana, Punjab 141001
              </p>
            </div>
          </div>
          <div className="contact-detail">
            <Clock />
            <div>
              <h3>Opening hours · Every day</h3>
              <p>
                Lunch: 12:00 pm – 3:30 pm
                <br />
                Dinner: 7:00 pm – 11:00 pm
              </p>
            </div>
          </div>
          <div className="contact-detail">
            <Phone />
            <div>
              <h3>Let’s talk</h3>
              <p>
                +91 00000 00000
                <br />
                hello@thesaffrontable.example
              </p>
            </div>
          </div>
          <Button asChild variant="goldOutline" size="restaurant">
            <a
              href={whatsappUrl(
                "Hello, I would like to enquire about a table at The Saffron Table.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
              Contact on WhatsApp
            </a>
          </Button>
          <p className="fiction-note">
            The Saffron Table is fictional. The address, email and WhatsApp number are placeholders
            and are not monitored.
          </p>
        </div>
        <form className="reservation-form" onSubmit={submit} noValidate>
          <h2>Reservation enquiry</h2>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                placeholder="Your full name"
                autoComplete="name"
                maxLength={100}
                required
                aria-invalid={Boolean(errors["name"])}
                aria-describedby={errors["name"] ? "name-error" : undefined}
              />
              {errors["name"] && (
                <span id="name-error" className="form-error">
                  {errors["name"]}
                </span>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="10-digit mobile number"
                autoComplete="tel"
                maxLength={15}
                required
                aria-invalid={Boolean(errors["phone"])}
                aria-describedby={errors["phone"] ? "phone-error" : undefined}
              />
              {errors["phone"] && (
                <span id="phone-error" className="form-error">
                  {errors["phone"]}
                </span>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="date">Preferred date</label>
              <input
                id="date"
                name="date"
                type="date"
                min={today}
                required
                aria-invalid={Boolean(errors["date"])}
                aria-describedby={errors["date"] ? "date-error" : undefined}
              />
              {errors["date"] && (
                <span id="date-error" className="form-error">
                  {errors["date"]}
                </span>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="guests">Number of guests</label>
              <select id="guests" name="guests" defaultValue="2">
                {Array.from({ length: 12 }, (_, i) => (
                  <option value={i + 1} key={i}>
                    {i + 1} {i === 0 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
              {errors["guests"] && <span className="form-error">{errors["guests"]}</span>}
            </div>
          </div>
          <Button type="submit" variant="gold" size="restaurant" className="form-submit">
            Prepare Enquiry <ArrowRight />
          </Button>
          <p className="fiction-note">
            This demonstration prepares an enquiry only; it does not send or store your details. No
            reservation is confirmed.
          </p>
          {result && (
            <section className="enquiry-result" aria-live="polite">
              <h3>Your enquiry is ready.</h3>
              <p>It has not been sent. Your table is not reserved.</p>
              <div className="enquiry-summary">{`${result.name}\n${result.phone}\n${result.date} · ${result.guests} ${result.guests === 1 ? "guest" : "guests"}`}</div>
              <Button type="button" variant="goldOutline" className="mt-4" onClick={download}>
                <Download />
                Download Enquiry
              </Button>
            </section>
          )}
        </form>
      </section>
    </main>
  );
}
