// src/components/SectionHeader.jsx
export default function SectionHeader({ title, subtitle, accent = "green-600" }) {
  return (
    <header className="text-center mb-10">
      <h1 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-3`}>
        {title}
      </h1>
      <div className={`mx-auto mb-6 w-24 h-1 rounded ${"bg-" + accent}`}></div>
      <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </header>
  );
}
