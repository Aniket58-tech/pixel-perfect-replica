import { describe, it, expect } from "vitest";
import { reservationSchema, enquiryText, localDate, whatsappUrl } from "@/lib/reservation";
const valid = { name: "Aniket Garg", phone: "9876543210", date: localDate(), guests: 2 };
describe("Static reservation enquiries", () => {
  it("accepts a complete enquiry without confirming a reservation", () => {
    expect(reservationSchema.safeParse(valid).success).toBe(true);
    expect(enquiryText(valid)).toContain("not a confirmed reservation");
  });
  it("does not imply enquiries are sent or stored", () => {
    expect(enquiryText(valid)).toContain("does not send or store enquiries");
  });
  it("rejects invalid phone numbers", () => {
    expect(reservationSchema.safeParse({ ...valid, phone: "123" }).success).toBe(false);
  });
  it("rejects past dates and impossible dates", () => {
    expect(reservationSchema.safeParse({ ...valid, date: "2000-01-01" }).success).toBe(false);
    expect(reservationSchema.safeParse({ ...valid, date: "2099-02-31" }).success).toBe(false);
  });
  it("rejects names containing markup", () => {
    expect(reservationSchema.safeParse({ ...valid, name: "<script>" }).success).toBe(false);
  });
  it("encodes WhatsApp input and uses the placeholder number", () => {
    expect(whatsappUrl("A & B")).toBe("https://wa.me/910000000000?text=A%20%26%20B");
  });
});
