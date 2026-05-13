"use client";

import { useState } from "react";
import { complaintSchema } from "@/lib/validation";
import { FormField, inputClass } from "@/components/form-field";

type Errors = Record<string, string>;

export function ComplaintForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      loanReference: String(formData.get("loanReference") ?? ""),
      category: String(formData.get("category") ?? ""),
      message: String(formData.get("message") ?? ""),
      preferredContactMethod: String(formData.get("preferredContactMethod") ?? ""),
    };
    const parsed = complaintSchema.safeParse(payload);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      setStatus("idle");
      return;
    }
    const response = await fetch("/api/complaints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-lg border border-[#d7dce2] bg-white p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField id="fullName" label="Full Name" required error={errors.fullName}>
          <input className={inputClass} id="fullName" name="fullName" autoComplete="name" />
        </FormField>
        <FormField id="phone" label="Phone Number" required error={errors.phone}>
          <input className={inputClass} id="phone" name="phone" autoComplete="tel" />
        </FormField>
        <FormField id="email" label="Email Address" error={errors.email}>
          <input className={inputClass} id="email" name="email" type="email" autoComplete="email" />
        </FormField>
        <FormField id="loanReference" label="Loan Reference, if applicable">
          <input className={inputClass} id="loanReference" name="loanReference" />
        </FormField>
        <FormField id="category" label="Complaint Category" required error={errors.category}>
          <select className={inputClass} id="category" name="category">
            <option value="">Choose a category</option>
            <option>Loan application</option>
            <option>Customer service</option>
            <option>Repayment support</option>
            <option>Communication</option>
            <option>Other</option>
          </select>
        </FormField>
        <FormField id="preferredContactMethod" label="Preferred Contact Method" required error={errors.preferredContactMethod}>
          <select className={inputClass} id="preferredContactMethod" name="preferredContactMethod">
            <option value="">Choose a method</option>
            <option>Phone call</option>
            <option>Email</option>
            <option>SMS</option>
          </select>
        </FormField>
      </div>
      <FormField id="message" label="Message" required error={errors.message}>
        <textarea className={inputClass} id="message" name="message" rows={5} placeholder="Describe the concern clearly." />
      </FormField>
      <button className="min-h-11 rounded-lg bg-[#111827] px-5 py-3 text-sm font-medium text-white hover:bg-[#1f2937]" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Submit Complaint"}
      </button>
      {status === "success" && <p className="text-sm font-semibold text-[#166534]">Your complaint has been received. Runda Finance will review it and contact you through the details provided.</p>}
      {status === "error" && <p className="text-sm font-semibold text-[#9a3412]">We could not send your complaint. Please use the official phone number for support.</p>}
    </form>
  );
}
