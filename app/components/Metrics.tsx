const data = [
  { label: "R&D COMPRESSION", value: "90%" },
  { label: "IP PORTFOLIO", value: "100%" },
  { label: "TARGET VALUATION", value: "$1B+" },
  { label: "GLOBAL IMPACT", value: "06" }
];

export default function Metrics() {
  return (
    <section className="py-20 grid grid-cols-2 md:grid-cols-4 text-center">
      {data.map((m, i) => (
        <div key={i}>
          <h2 className="text-3xl text-[#00FFD1]">{m.value}</h2>
          <p className="text-xs opacity-50">{m.label}</p>
        </div>
      ))}
    </section>
  );
}