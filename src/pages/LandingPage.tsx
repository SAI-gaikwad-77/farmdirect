import {
  Sprout,
  ShoppingBasket,
  Scale,
  TrendingUp,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { useApp } from "../context/useApp";
import { Button } from "../components/Button";

const STEPS = [
  {
    icon: ShoppingBasket,
    title: "List Your Produce",
    desc: "Add your crop, quantity, quality grade, and location in seconds.",
  },
  {
    icon: Scale,
    title: "Compare Buyer Offers",
    desc: "See every offer side by side with full cost breakdown.",
  },
  {
    icon: TrendingUp,
    title: "Choose Highest Net Realization",
    desc: "Pick the buyer that gives you the best actual earning — not just the highest quoted price.",
  },
];

export function LandingPage() {
  const { navigate } = useApp();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/11070641/pexels-photo-11070641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-emerald-800/75 to-gray-900/80" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-emerald-100 ring-1 ring-white/20 backdrop-blur-sm">
              <Sprout className="h-4 w-4" />
              Smart India Hackathon 2026 Prototype
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              FarmDirect
            </h1>
            <p className="mt-2 text-xl font-semibold text-emerald-200 sm:text-2xl">
              Sell Smarter. Earn Better.
            </p>
            <p className="mt-2 text-base font-medium text-gray-300 sm:text-lg">
              From Price Discovery to Profit Discovery.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200">
              Connect farmers with better buyers and discover which offer
              provides the highest estimated earning after transportation and
              handling costs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate("farmer-entry")}
                className="w-full sm:w-auto"
              >
                I'm a Farmer <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("buyer-entry")}
                className="w-full border-white/40 text-white hover:bg-white/10 sm:w-auto"
              >
                I'm a Buyer <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key insight banner */}
      <section className="bg-amber-50 py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-600" />
            <p className="text-center text-sm font-semibold text-amber-800 sm:text-base">
              The highest quoted price is not always the highest earning.
            </p>
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-600">
                The Problem
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                Multiple intermediaries reduce farmers' earnings and increase
                consumer prices.
              </h2>
              <p className="mt-4 text-gray-600">
                Farmers sell to layers of middlemen who each take a cut. By
                the time produce reaches the consumer, the price has doubled
                — yet the farmer sees less. The farmer rarely knows what
                different buyers are offering, and even when they do, the
                highest quoted price can hide transport and handling costs
                that eat into the actual earning.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-xl border border-red-100 bg-red-50 px-5 py-4">
                  <p className="text-3xl font-extrabold text-red-600">40%</p>
                  <p className="mt-1 text-xs font-medium text-gray-600">
                    Farmer's share of consumer price
                  </p>
                </div>
                <div className="rounded-xl border border-orange-100 bg-orange-50 px-5 py-4">
                  <p className="text-3xl font-extrabold text-orange-600">
                    4-6
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-600">
                    Intermediary layers typical
                  </p>
                </div>
                <div className="rounded-xl border border-amber-100 bg-amber-50 px-5 py-4">
                  <p className="text-3xl font-extrabold text-amber-600">
                    2x
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-600">
                    Price markup by final sale
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                The Solution
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Direct farmer-to-buyer marketplace with Net Realization
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                FarmDirect removes the intermediaries and helps farmers compare
                buyer offers based on what they actually take home — not just
                the quoted price.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Compare multiple buyer offers side by side",
                  "See true earning after transport & handling costs",
                  "Automatically identify the best buyer for you",
                  "Skip the middlemen — sell direct",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            How It Works
          </h2>
          <p className="mt-3 text-center text-gray-500">
            Three simple steps from listing to better earnings
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Net realization explanation */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            What is Net Realization?
          </h2>
          <p className="mt-3 text-center text-gray-500">
            The actual money you take home after all costs
          </p>
          <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 sm:p-12">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-6 sm:text-left">
              <div className="rounded-xl bg-emerald-50 px-6 py-4">
                <p className="text-sm font-medium text-gray-500">
                  Offered Price
                </p>
                <p className="text-2xl font-bold text-emerald-700">₹29/kg</p>
              </div>
              <span className="text-2xl font-bold text-gray-300">−</span>
              <div className="rounded-xl bg-orange-50 px-6 py-4">
                <p className="text-sm font-medium text-gray-500">Transport</p>
                <p className="text-2xl font-bold text-orange-600">₹5/kg</p>
              </div>
              <span className="text-2xl font-bold text-gray-300">−</span>
              <div className="rounded-xl bg-amber-50 px-6 py-4">
                <p className="text-sm font-medium text-gray-500">Handling</p>
                <p className="text-2xl font-bold text-amber-600">₹0/kg</p>
              </div>
              <span className="text-2xl font-bold text-gray-300">=</span>
              <div className="rounded-xl bg-gray-900 px-6 py-4">
                <p className="text-sm font-medium text-gray-400">
                  Net Realization
                </p>
                <p className="text-2xl font-bold text-white">₹24/kg</p>
              </div>
            </div>
            <p className="mt-8 text-center text-sm text-gray-500">
              A buyer offering ₹29/kg far away may earn you less than a buyer
              offering ₹27/kg nearby. FarmDirect does this math for every
              offer — automatically.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Ready to discover your best offer?
          </h2>
          <p className="mt-3 text-gray-500">
            Try the live demo now — no signup required
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" onClick={() => navigate("farmer-entry")}>
              Start as Farmer <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("buyer-entry")}
            >
              Start as Buyer <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
