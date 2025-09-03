export default function ConvertButton({ onConvert, loading }) {
  return (
    <button
      onClick={onConvert}
      disabled={loading}
      className="px-4 py-2 rounded-2xl bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 disabled:bg-gray-400"
    >
      {loading ? "Converting..." : "Convert"}
    </button>
  );
}

export { ConvertButton };