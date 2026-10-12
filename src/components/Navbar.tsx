import { useState, useEffect, useRef } from "react";
import { Menu, X, Database, ExternalLink, Car } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  const adminRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (adminRef.current && !adminRef.current.contains(e.target as Node)) {
        setAdminMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "عنا", href: "#about" },
    { name: "مميزاتنا", href: "#features" },
    { name: "كيف يعمل؟", href: "#how-it-works" },
    { name: "تطبيق السائق", href: "#driver-app" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-[#0d0d12]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              درايف
            </span>
            <span className="text-2xl sm:text-3xl font-black text-[#E50914] tracking-tight">
              نشاما
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  link.name === "الرئيسية"
                    ? "text-white border-b-2 border-[#E50914]"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Left Side: Admin Menu + Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* ☰ Admin Hamburger - 3 خطوط */}
            <div className="relative" ref={adminRef}>
              <button
                onClick={() => setAdminMenuOpen(!adminMenuOpen)}
                className="flex flex-col items-center justify-center w-9 h-9 gap-[5px] rounded-lg hover:bg-zinc-800/60 transition-colors duration-200 group"
                title="قاعدة البيانات"
              >
                <span className="block w-5 h-[2.5px] bg-zinc-400 group-hover:bg-[#E50914] transition-colors rounded-full"></span>
                <span className="block w-5 h-[2.5px] bg-zinc-400 group-hover:bg-[#E50914] transition-colors rounded-full"></span>
                <span className="block w-5 h-[2.5px] bg-zinc-400 group-hover:bg-[#E50914] transition-colors rounded-full"></span>
              </button>

              {/* Admin Dropdown */}
              {adminMenuOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-[#111116] border border-zinc-800 rounded-xl shadow-2xl shadow-black/60 overflow-hidden animate-fade-in z-50">
                  <div className="p-3 border-b border-zinc-800/60 bg-gradient-to-l from-[#E50914]/10 to-transparent">
                    <p className="text-xs text-zinc-500 font-medium">لوحة التحكم</p>
                  </div>
                  <a
                    href="https://nashama-drive-web-ap-fhr3.bolt.host/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E50914]/15 flex items-center justify-center group-hover:bg-[#E50914]/25 transition-colors">
                      <Database className="w-4 h-4 text-[#E50914]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">الدخول لقاعدة البيانات</p>
                      <p className="text-[10px] text-zinc-500">مركز قيادة نشاما درايف</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#E50914] transition-colors" />
                  </a>
                </div>
              )}
            </div>

            {/* Join as Captain Button */}
            <a
              href="#driver-app"
              className="hidden sm:flex items-center gap-2 bg-[#1a1a22] hover:bg-[#222230] text-white text-sm font-semibold px-4 py-2 rounded-full border border-zinc-700/50 hover:border-zinc-600 transition-all duration-200"
            >
              <Car className="w-4 h-4 text-[#E50914]" />
              <span>انضم ككابتن</span>
            </a>

            {/* Account Room Button */}
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#E50914] hover:bg-[#c90812] text-white text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 shadow-lg shadow-[#E50914]/20 hover:shadow-[#E50914]/40"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>غرفة حساب</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-zinc-800/60 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-zinc-400" />
              ) : (
                <Menu className="w-5 h-5 text-zinc-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d12]/98 backdrop-blur-xl border-t border-zinc-800/50 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/40 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-zinc-800/50">
              <a
                href="#driver-app"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/40 rounded-lg transition-colors"
              >
                <Car className="w-4 h-4 text-[#E50914]" />
                انضم ككابتن
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
