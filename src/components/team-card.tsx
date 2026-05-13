export function TeamCard({ member }: { member: { name: string; title: string; summary: string; image: string } }) {
  return (
    <article className="rounded-xl border border-[#e5e7eb] bg-white p-5">
      <div className="mb-5 flex h-48 items-center justify-center rounded-lg border border-dashed border-[#c8cdd5] bg-[#f5f5f7] text-sm font-medium text-[#667085]">
        {member.image}
      </div>
      <h3 className="text-xl font-medium text-[#111827]">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-[#667085]">{member.title}</p>
      <p className="mt-4 text-sm leading-6 text-[#475467]">{member.summary}</p>
    </article>
  );
}
