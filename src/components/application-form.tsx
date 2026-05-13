"use client";

import { useState } from "react";
import { loanProducts } from "@/lib/content";
import { applicationSchema } from "@/lib/validation";
import { FormField, inputClass } from "@/components/form-field";

type Errors = Record<string, string>;
const steps = ["Loan type", "Personal details", "Status details", "Documents", "Review"];

export function ApplicationForm({ initialLoan = "" }: { initialLoan?: string }) {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [files, setFiles] = useState<string[]>([]);

  function next() {
    setStep((value) => Math.min(value + 1, steps.length - 1));
  }

  function back() {
    setStep((value) => Math.max(value - 1, 0));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    const payload = {
      loanType: String(formData.get("loanType") ?? ""),
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      requestedAmount: String(formData.get("requestedAmount") ?? ""),
      employmentOrBusinessStatus: String(formData.get("employmentOrBusinessStatus") ?? ""),
      loanPurpose: String(formData.get("loanPurpose") ?? ""),
      preferredContactTime: String(formData.get("preferredContactTime") ?? ""),
      assetOrBusinessDetails: String(formData.get("assetOrBusinessDetails") ?? ""),
      documentNames: files,
      consent: formData.get("consent") === "on",
      sourcePage: "start-application",
    };
    const parsed = applicationSchema.safeParse(payload);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      setStatus("idle");
      return;
    }
    const response = await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="rounded-md border border-[#d7dce2] bg-white p-6">
      <ol className="mb-8 grid gap-2 sm:grid-cols-5" aria-label="Application progress">
        {steps.map((label, index) => (
          <li key={label} className={`rounded-md px-3 py-2 text-xs font-medium ${index === step ? "bg-[#050505] text-white" : "bg-[#eef1ff] text-[#3f4656]"}`}>
            {index + 1}. {label}
          </li>
        ))}
      </ol>

      <div className={step === 0 ? "grid gap-5" : "hidden"}>
        <FormField id="loanType" label="Choose loan type" required error={errors.loanType}>
          <select className={inputClass} id="loanType" name="loanType" defaultValue={initialLoan}>
            <option value="">Choose a loan product</option>
            {loanProducts.map((loan) => (
              <option key={loan.slug} value={loan.slug}>
                {loan.name}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <div className={step === 1 ? "grid gap-5 md:grid-cols-2" : "hidden"}>
        <FormField id="fullName" label="Full name" required error={errors.fullName}>
          <input className={inputClass} id="fullName" name="fullName" autoComplete="name" />
        </FormField>
        <FormField id="phone" label="Phone number" required error={errors.phone}>
          <input className={inputClass} id="phone" name="phone" autoComplete="tel" />
        </FormField>
        <FormField id="email" label="Email address" error={errors.email}>
          <input className={inputClass} id="email" name="email" type="email" autoComplete="email" />
        </FormField>
        <FormField id="preferredContactTime" label="Preferred contact time" required error={errors.preferredContactTime}>
          <select className={inputClass} id="preferredContactTime" name="preferredContactTime">
            <option value="">Choose a time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </FormField>
      </div>

      <div className={step === 2 ? "grid gap-5" : "hidden"}>
        <div className="grid gap-5 md:grid-cols-2">
          <FormField id="requestedAmount" label="Requested amount" required error={errors.requestedAmount}>
            <input className={inputClass} id="requestedAmount" name="requestedAmount" placeholder="Example: UGX 5,000,000" />
          </FormField>
          <FormField id="employmentOrBusinessStatus" label="Employment, business, or asset status" required error={errors.employmentOrBusinessStatus}>
            <input className={inputClass} id="employmentOrBusinessStatus" name="employmentOrBusinessStatus" placeholder="Employed, SME owner, vehicle owner..." />
          </FormField>
        </div>
        <FormField id="loanPurpose" label="Purpose of loan" required error={errors.loanPurpose}>
          <textarea className={inputClass} id="loanPurpose" name="loanPurpose" rows={4} />
        </FormField>
        <FormField id="assetOrBusinessDetails" label="Employment, business, or asset details">
          <textarea className={inputClass} id="assetOrBusinessDetails" name="assetOrBusinessDetails" rows={4} placeholder="Share employer, business, LPO, or vehicle details where relevant." />
        </FormField>
      </div>

      <div className={step === 3 ? "grid gap-5" : "hidden"}>
        <FormField id="documents" label="Upload documents">
          <input
            className={inputClass}
            id="documents"
            name="documents"
            type="file"
            multiple
            onChange={(event) => setFiles(Array.from(event.target.files ?? []).map((file) => file.name))}
          />
        </FormField>
        <p className="text-sm leading-6 text-[#3f4656]">
          Documents are captured for routing and secure upload configuration. Accepted files and size limits are enforced by the upload endpoint before storage.
        </p>
        {files.length > 0 && <p className="text-sm text-[#3f4656]">Selected: {files.join(", ")}</p>}
      </div>

      <div className={step === 4 ? "grid gap-5" : "hidden"}>
        <div className="rounded-md bg-[#eef1ff] p-4 text-sm leading-6 text-[#3f4656]">
          Review your details before submitting. Submission does not guarantee approval. A Runda Finance team member may request more information or documents.
        </div>
        <label className="flex gap-3 text-sm leading-6 text-[#3f4656]">
          <input className="mt-1 h-4 w-4" name="consent" type="checkbox" />
          <span>
            I confirm the information is accurate and consent to processing according to the{" "}
            <a className="font-medium text-[#050505] underline" href="/privacy-policy">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && <p className="text-sm text-[#9a3412]">{errors.consent}</p>}
      </div>

      {Object.keys(errors).length > 0 && (
        <div className="mt-6 rounded-md border border-[#fed7aa] bg-[#fff7ed] p-4 text-sm text-[#9a3412]">
          Please review the highlighted fields. Required information may be missing from an earlier step.
        </div>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button type="button" className="min-h-11 rounded-md border border-[#e4e8f4] px-5 py-3 text-sm font-medium text-[#050505]" onClick={back} disabled={step === 0}>
          Back
        </button>
        {step < steps.length - 1 ? (
          <button type="button" className="min-h-11 rounded-md bg-[#050505] px-5 py-3 text-sm font-medium text-white" onClick={next}>
            Continue
          </button>
        ) : (
          <button className="min-h-11 rounded-md bg-[#050505] px-5 py-3 text-sm font-medium text-white" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Submit Application"}
          </button>
        )}
      </div>
      {status === "success" && <p className="mt-5 text-sm font-semibold text-[#166534]">Thank you. Your application has been received for assessment. A Runda Finance team member will contact you using the details provided.</p>}
      {status === "error" && <p className="mt-5 text-sm font-semibold text-[#9a3412]">We could not submit your application. Please call the fallback phone number for support.</p>}
    </form>
  );
}
