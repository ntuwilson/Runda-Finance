import { z } from "zod";

const phone = z.string().min(7, "Enter a valid phone number.").max(32);
const email = z.string().email("Enter a valid email address.").optional().or(z.literal(""));
const consent = z.literal(true, { error: "Consent is required." });

export const callbackSchema = z.object({
  fullName: z.string().min(2, "Full name is required.").max(120),
  phone: phone,
  email,
  loanType: z.string().min(1, "Choose a loan type."),
  amountNeeded: z.string().min(1, "Enter the amount needed."),
  status: z.string().min(1, "Choose your employment or business status."),
  preferredContactTime: z.string().min(1, "Choose a preferred contact time."),
  message: z.string().max(1000).optional().or(z.literal("")),
  consent,
  sourcePage: z.string().optional(),
});

export const complaintSchema = z.object({
  fullName: z.string().min(2, "Full name is required.").max(120),
  phone,
  email,
  loanReference: z.string().max(80).optional().or(z.literal("")),
  category: z.string().min(1, "Choose a complaint category."),
  message: z.string().min(20, "Please describe the issue.").max(2000),
  preferredContactMethod: z.string().min(1, "Choose a preferred contact method."),
});

export const applicationSchema = z.object({
  loanType: z.string().min(1, "Choose a loan type."),
  fullName: z.string().min(2, "Full name is required.").max(120),
  phone,
  email,
  requestedAmount: z.string().min(1, "Enter requested amount."),
  employmentOrBusinessStatus: z.string().min(1, "Choose your status."),
  loanPurpose: z.string().min(5, "Describe the loan purpose.").max(1000),
  preferredContactTime: z.string().min(1, "Choose a preferred contact time."),
  assetOrBusinessDetails: z.string().max(1000).optional().or(z.literal("")),
  documentNames: z.array(z.string()).default([]),
  consent,
  sourcePage: z.string().optional(),
});

export const presignSchema = z.object({
  fileName: z.string().min(1),
  fileType: z.string().min(1),
  fileSize: z.number().int().positive().max(10 * 1024 * 1024, "Maximum file size is 10MB."),
});

export type CallbackInput = z.infer<typeof callbackSchema>;
export type ComplaintInput = z.infer<typeof complaintSchema>;
export type ApplicationInput = z.infer<typeof applicationSchema>;
