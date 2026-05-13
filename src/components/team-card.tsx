export function TeamCard({ member }: { member: { name: string; title: string; summary: string; image: string } }) {
  return (
    <article className="rounded-md border border-[#e4e8f4] bg-white p-5">
      <div className="mb-5 flex h-48 items-center justify-center rounded-md border border-dashed border-[#b8c0df] bg-[#eef1ff] text-sm font-medium text-[#263479]">
        {member.image}
      </div>
      <h3 className="text-xl font-medium text-[#050505]">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-[#263479]">{member.title}</p>
      <p className="mt-4 text-sm leading-6 text-[#3f4656]">{member.summary}</p>
    </article>
  );
}
