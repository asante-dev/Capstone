export default function CurrencySelector({ label, currency, setCurrency, currencies }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
}

export { CurrencySelector };