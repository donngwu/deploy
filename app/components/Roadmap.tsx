const steps = [
  { year: "2026", text: "Incubation Phase" },
  { year: "2028", text: "Quantum Integration" },
  { year: "2030", text: "Global Scale" }
];

export default function Roadmap() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-2xl mb-8">Roadmap</h2>
      <div className="space-y-6">
        {steps.map((s, i) => (
          <div key={i}>
            <span className="text-[#00FFD1]">{s.year}</span>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}