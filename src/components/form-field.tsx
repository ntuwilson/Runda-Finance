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
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-[#050505]">
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
  "min-h-11 w-full rounded-md border border-[#cfd6ea] bg-white px-3 py-2 text-sm text-[#050505] shadow-sm focus:border-[#263479] focus:outline-none focus:ring-2 focus:ring-[#263479]/20";
