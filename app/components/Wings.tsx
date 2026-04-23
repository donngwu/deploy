const labs = [
  "Bio-Intelligence",
  "Kinetic Systems",
  "Elemental Logic",
  "Autonomous Foundry"
];

export default function Wings() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-2xl mb-8">Research Wings</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {labs.map((l, i) => (
          <div key={i} className="p-6 border border-white/10">
            {l}
          </div>
        ))}
      </div>
    </section>
  );
}