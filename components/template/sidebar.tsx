export default function Navbar() {
  return (
    <nav className="w-full border-b px-4 py-3 flex items-center justify-between text-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1">
          <span className="text-xl">☰</span>
          <span>Menu</span>
        </button>
        <button className="flex items-center gap-1">
          ← <span>Change model</span>
        </button>
        <button className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
          <span>Save</span>
        </button>
        <button className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          <span>Create Porsche Code</span>
        </button>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src="/porsche-logo.svg" alt="Porsche" className="h-5" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor"><path d="M3 3h18v18H3V3z" /></svg>
            <span>$2,743.45</span><span className="text-xs text-gray-500">/mo</span>
          </div>
          <div className="text-xs text-gray-500 leading-none">Calculate monthly pay...</div>
        </div>
        <div className="text-right">
          <div>$154,150</div>
          <div className="text-xs text-gray-500 leading-none">All information is subj...</div>
        </div>
        <button className="border px-4 py-1 rounded">Summary</button>
        <button className="bg-black text-white px-4 py-1 rounded">Inquire</button>
        <svg className="w-5 h-5" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /></svg>
        <svg className="w-5 h-5" fill="none" stroke="currentColor"><path d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4z" /></svg>
      </div>
    </nav>
  );
}

