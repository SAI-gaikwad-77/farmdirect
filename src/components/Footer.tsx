import { Sprout } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Sprout className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900">FarmDirect</p>
              <p className="text-xs text-gray-500">
                Sell Smarter. Earn Better.
              </p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400">
            Hackathon Prototype &middot; Smart India Hackathon 2026 &middot;
            Uses mock/demo data
          </p>
        </div>
      </div>
    </footer>
  );
}
