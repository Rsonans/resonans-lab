import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Waypoints, Handshake } from "lucide-react";

export function CapabilitiesSection() {
  return (
    <section className="py-24 bg-[#FCFAFD]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-[#9C0075] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Capabilities
            </h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#2C0052] leading-tight">
              Research shouldn't stop at publishing.
            </h2>
          </div>
          <div className="max-w-md lg:pt-10">
            <p className="text-lg text-gray-600 leading-relaxed font-body">
              We deliver the infrastructure for innovation through four core pillars of translational excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1: Scalable Products */}
          <div className="bg-[#FCF5FF] rounded-lg p-8 lg:p-10 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-[#2C0052] rounded-md flex items-center justify-center mb-8">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-[#2C0052] mb-4">Scalable Products</h4>
            <p className="text-gray-600 mb-12 flex-grow">
              Hardened, research-validated tools built for immediate deployment into complex health and tech ecosystems.
            </p>
            <Link to="/products" className="inline-flex items-center text-[#9C0075] text-sm font-bold tracking-widest uppercase hover:text-[#7A005B] transition-colors gap-2 mt-auto">
              View Product Suite <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Open Platforms */}
          <div className="bg-white rounded-lg p-8 lg:p-10 flex flex-col h-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border-b-4 border-[#9C0075] transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-[#FDECF7] rounded-md flex items-center justify-center mb-8">
              <Waypoints className="w-6 h-6 text-[#9C0075]" />
            </div>
            <h4 className="text-2xl font-bold text-[#2C0052] mb-4">Open Platforms</h4>
            <p className="text-gray-600 mb-8 flex-grow">
              Interoperable data environments designed to catalyze cross-sector collaboration and knowledge sharing.
            </p>
          </div>

          {/* Card 3: Dynamic Partnerships */}
          <div className="bg-[#2C0052] rounded-lg p-8 lg:p-10 flex flex-col h-full relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-[#421B68] rounded-md flex items-center justify-center mb-8">
                <Handshake className="w-6 h-6 text-[#E8CD00]" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Dynamic Partnerships</h4>
              <p className="text-[#D3BDE3] mb-8 flex-grow leading-relaxed">
                Embedding our scientists within your organization to co-create bespoke innovation roadmaps.
              </p>
            </div>
            {/* Background design elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full pointer-events-none" />
            <div className="absolute bottom-6 right-16 w-16 h-16 rounded-full border-[8px] border-white/5 pointer-events-none" />
            <div className="absolute bottom-2 right-24 w-8 h-8 rounded-full bg-white/5 pointer-events-none" />
          </div>
        </div>

        {/* Card 4: Actionable Insights */}
        <div className="bg-[#F5E6F7] rounded-lg p-8 md:p-12 w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start transition-transform hover:-translate-y-1 duration-300">
          <div className="flex-1">
            <div className="inline-block bg-[#FA7AE5] text-[#2C0052] text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-6">
              New Benchmark
            </div>
            <h4 className="text-3xl md:text-4xl font-bold text-[#2C0052] mb-6">Actionable Insights</h4>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
              Turning raw data into high-fidelity decision frameworks. Our insights platform uses proprietary ResonansLab models to predict translational success rates with 92% accuracy.
            </p>
          </div>
          <div className="flex flex-row gap-4 lg:gap-6 mt-6 lg:mt-0 lg:pt-4">
            <div className="bg-white rounded-md p-6 min-w-[140px] text-center shadow-sm">
              <div className="text-4xl lg:text-5xl font-black text-[#B3006A] mb-2 tracking-tight">12M+</div>
              <div className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">Data Points</div>
            </div>
            <div className="bg-white rounded-md p-6 min-w-[140px] text-center shadow-sm">
              <div className="text-4xl lg:text-5xl font-black text-[#2C0052] mb-2 tracking-tight">450%</div>
              <div className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">ROI Target</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
