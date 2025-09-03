export default function ConversionResult({ result, fromCurrency, toCurrency }) {
  if (!result) return null;

  return (
    <div className="p-4 mt-4 rounded-2xl border shadow text-center bg-gray-50">
      <p className="text-lg font-semibold">
        {result.toFixed(2)} {toCurrency}
      </p>
      <p className="text-sm text-gray-500">
        Converted from {fromCurrency}
      </p>
    </div>
  );
}

export { ConversionResult };