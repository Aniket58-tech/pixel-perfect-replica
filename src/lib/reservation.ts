import { z } from "zod";
export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export const reservationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Please use 100 characters or fewer.")
    .regex(/^[\p{L}\p{M} .'-]+$/u, "Please use letters, spaces, apostrophes or hyphens."),
  phone: z
    .string()
    .trim()
    .regex(/^(?:\+91[ -]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number."),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please select a date.")
    .refine((value) => {
      const d = new Date(`${value}T12:00:00`);
      return Number.isFinite(d.getTime()) && localDate(d) === value && value >= localDate();
    }, "Please choose today or a future date."),
  guests: z.coerce
    .number()
    .int()
    .min(1, "Please select at least one guest.")
    .max(12, "Please contact us for parties larger than 12."),
});
export type Reservation = z.infer<typeof reservationSchema>;
export function enquiryText(input: Reservation) {
  const data = reservationSchema.parse(input);
  return `The Saffron Table — Reservation Enquiry\nName: ${data.name}\nPhone: ${data.phone}\nDate: ${data.date}\nGuests: ${data.guests}\n\nThis is an enquiry, not a confirmed reservation.\nThis fictional demonstration does not send or store enquiries.`;
}
export function whatsappUrl(message: string) {
  const text = z.string().trim().min(1).max(1000).parse(message);
  return `https://wa.me/910000000000?text=${encodeURIComponent(text)}`;
}
