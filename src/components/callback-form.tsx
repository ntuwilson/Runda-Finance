"use client";

import { useState } from "react";
import { loanProducts } from "@/lib/content";
import { callbackSchema } from "@/lib/validation";
import { FormField, inputClass } from "@/components/form-field";

type Errors = Record<string, string>;

export function CallbackForm({ sourcePage = "contact" }: { sourcePage?: string }) {
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
      loanType: String(formData.get("loanType") ?? ""),
      amountNeeded: String(formData.get("amountNeeded") ?? ""),
      status: String(formData.get("employmentStatus") ?? ""),
      preferredContactTime: String(formData.get("preferredContactTime") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      sourcePage,
    };
    const parsed = callbackSchema.safeParse(payload);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      setStatus("idle");
      return;
    }
    const response = await fetch("/api/callbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-md border border-[#d7dce2] bg-white p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField id="fullName" label="Full Name" required error={errors.fullName}>
          <input className={inputClass} id="fullName" name="fullName" autoComplete="name" aria-describedby={errors.fullName ? "fullName-error" : undefined} />
        </FormField>
        <FormField id="phone" label="Phone Number" required error={errors.phone}>
          <input className={inputClass} id="phone" name="phone" autoComplete="tel" aria-describedby={errors.phone ? "phone-error" : undefined} />
        </FormField>
        <FormField id="email" label="Email Address" error={errors.email}>
          <input className={inputClass} id="email" name="email" type="email" autoComplete="email" aria-describedby={errors.email ? "email-error" : undefined} />
        </FormField>
        <FormField id="loanType" label="Loan Type" required error={errors.loanType}>
          <select className={inputClass} id="loanType" name="loanType">
            <option value="">Choose a loan type</option>
            {loanProducts.map((loan) => (
              <option key={loan.slug} value={loan.name}>
                {loan.name}
              </option>
            ))}
          </select>
        </FormField>
        <FormField id="amountNeeded" label="Amount Needed" required error={errors.amountNeeded}>
          <input className={inputClass} id="amountNeeded" name="amountNeeded" placeholder="Example: UGX 2,000,000" />
        </FormField>
        <FormField id="employmentStatus" label="Employment or Business Status" required error={errors.status}>
          <input className={inputClass} id="employmentStatus" name="employmentStatus" placeholder="Employed, business owner, supplier..." />
        </FormField>
        <FormField id="preferredContactTime" label="Preferred Contact Time" required error={errors.preferredContactTime}>
          <select className={inputClass} id="preferredContactTime" name="preferredContactTime">
            <option value="">Choose a time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </FormField>
      </div>
      <FormField id="message" label="Message">
        <textarea className={inputClass} id="message" name="message" rows={4} placeholder="Share anything the loan officer should know." />
      </FormField>
      <label className="flex gap-3 text-sm leading-6 text-[#3f4656]">
        <input className="mt-1 h-4 w-4" name="consent" type="checkbox" />
        <span>
          I consent to Runda Finance contacting me about my inquiry and processing my details according to the{" "}
          <a className="font-medium text-[#050505] underline" href="/privacy-policy">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {errors.consent && <p className="text-sm text-[#9a3412]">{errors.consent}</p>}
      <button className="min-h-11 rounded-md bg-[#050505] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#263479] hover:shadow-md active:translate-y-px" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Request Callback"}
      </button>
      {status === "success" && <p className="text-sm font-semibold text-[#166534]">Thank you. Your request has been received. A Runda Finance team member will contact you using the details provided.</p>}
      {status === "error" && <p className="text-sm font-semibold text-[#9a3412]">We could not send your request. Please call {`[Phone Number]`} for support.</p>}
    </form>
  );
}
