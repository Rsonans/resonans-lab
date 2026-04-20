import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#1C003D] text-[#D3BDE3] py-20 px-6 xl:px-0">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col">
          <h2 className="text-[#E8CD00] text-2xl font-bold font-heading mb-8 tracking-wide">
            Resonans
          </h2>
          <p className="text-sm leading-relaxed max-w-[220px]">
            © {new Date().getFullYear()} Resonans. The Architectural Pulse of Translational Research.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-sm tracking-[0.15em] uppercase mb-8">
            Company
          </h4>
          <ul className="space-y-5 text-sm">
            <li>
              <Link to="/contact" className="hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/lab" className="hover:text-white transition-colors duration-200">
                ResonansLab
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-sm tracking-[0.15em] uppercase mb-8">
            Legal
          </h4>
          <ul className="space-y-5 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/ethics" className="hover:text-white transition-colors duration-200">
                Research Ethics
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Form */}
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-sm tracking-[0.15em] uppercase mb-8">
            Newsletter
          </h4>
          <p className="text-sm mb-6 leading-relaxed max-w-[280px]">
            Receive our monthly insights on translational breakthroughs.
          </p>
          <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 bg-[#421B68] text-white placeholder-[#8E79A5] w-full focus:outline-none text-sm rounded-none"
            />
            <button
              type="submit"
              className="bg-[#E8CD00] text-black font-bold text-xs tracking-[0.15em] uppercase px-5 py-3 whitespace-nowrap hover:bg-[#CCA800] transition-colors rounded-none"
            >
              JOIN
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
