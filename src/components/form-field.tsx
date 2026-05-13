type BaseProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

export function FormField({ id, label, required, error, children }: BaseProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-[#111827]">
        {label} {required && <span className="text-[#9a3412]">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#9a3412]">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputClass =
  "min-h-11 w-full rounded-lg border border-[#d0d5dd] bg-white px-3 py-2 text-sm text-[#111827] shadow-sm focus:border-[#2f6fed] focus:outline-none focus:ring-2 focus:ring-[#2f6fed]/20";
