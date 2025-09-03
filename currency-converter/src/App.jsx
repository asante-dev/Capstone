import { useEffect, useState } from "react";
import AmountInput from "./components/AmountInput";
import CurrencySelector from "./components/CurrencySelector";
import ConvertButton from "./components/ConvertButton";
import CurrencySelector from "./components/CurrencySelector";
import ConversionResult from "./components/ConversionResult";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.exchangerate.host/symbols")
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(Object.keys(data.symbols));
      });
  }, []);

  const handleConvert = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(
        `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
      );
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error("Conversion failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          Currency Converter
        </h1>

        <AmountInput amount={amount} setAmount={setAmount} />

        <div className="grid grid-cols-2 gap-4">
          <CurrencySelector
            label="From"
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            currencies={currencies}
          />
          <CurrencySelector
            label="To"
            currency={toCurrency}
            setCurrency={setToCurrency}
            currencies={currencies}
          />
        </div>

        <div className="flex justify-center">
          <ConvertButton onConvert={handleConvert} loading={loading} />
        </div>

        <ConversionResult
          result={result}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
        />
      </div>
    </div>
  );
}
