import { MapPin, Shield, Clock, ChevronLeft } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0d0d15] to-[#09090b]" />
      
      {/* Red glow effects */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E50914]/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-[#E50914]/3 rounded-full blur-[120px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E50914]/10 border border-[#E50914]/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#E50914] rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-[#E50914] font-semibold">
                متوفر الآن في الأردن 🇯🇴
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-white">رحلتك...</span>
              <br />
              <span className="text-[#E50914] text-glow">بأمان وراحة</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              نشاما درايف - خدمة التوصيل الذكية في الأردن. احجز رحلتك بسهولة،
              وصل بأمان مع كباتن محترفين وأسعار منافسة.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              {[
                { icon: Shield, text: "رحلات آمنة 100%" },
                { icon: Clock, text: "وصول سريع" },
                { icon: MapPin, text: "تغطية شاملة" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800/50 rounded-full px-3 py-1.5"
                >
                  <item.icon className="w-3.5 h-3.5 text-[#E50914]" />
                  <span className="text-xs text-zinc-400 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-[#E50914] hover:bg-[#c90812] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#E50914]/30 hover:shadow-[#E50914]/50 hover:-translate-y-0.5"
              >
                <span>احجز رحلتك الآن</span>
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 bg-zinc-900/60 hover:bg-zinc-800/60 text-zinc-300 hover:text-white font-semibold px-8 py-3.5 rounded-full border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300"
              >
                كيف يعمل التطبيق؟
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative animate-float">
              <div className="phone-device w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] relative overflow-hidden flex items-center justify-center">
                {/* Screen Content */}
                <div className="absolute inset-3 rounded-[36px] overflow-hidden bg-gradient-to-b from-[#111118] to-[#0a0a0f]">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 pt-4 pb-2">
                    <span className="text-[10px] text-zinc-500">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 bg-zinc-600 rounded-sm" />
                      <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-5 pt-3 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-right">
                        <p className="text-[10px] text-zinc-500">مرحباً بك في</p>
                        <p className="text-sm font-bold text-white">نشاما درايف</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#E50914]/20 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-[#E50914]" />
                      </div>
                    </div>

                    {/* Search bar */}
                    <div className="bg-zinc-800/60 rounded-xl px-3 py-2.5 flex items-center gap-2 border border-zinc-700/30">
                      <MapPin className="w-3.5 h-3.5 text-[#E50914]" />
                      <span className="text-[11px] text-zinc-500">إلى أين تريد الذهاب؟</span>
                    </div>
                  </div>

                  {/* Map area simulation */}
                  <div className="mx-4 h-44 rounded-xl bg-zinc-800/40 border border-zinc-700/20 relative overflow-hidden">
                    {/* Grid lines */}
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: "linear-gradient(rgba(229,9,20,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(229,9,20,0.3) 1px, transparent 1px)",
                        backgroundSize: "30px 30px"
                      }}
                    />
                    {/* Location pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-10 h-10 bg-[#E50914]/20 rounded-full animate-ping absolute -top-1 -left-1" />
                        <div className="w-8 h-8 bg-[#E50914] rounded-full flex items-center justify-center relative z-10 shadow-lg shadow-[#E50914]/40">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    {/* Road lines */}
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-zinc-600/30" />
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-zinc-600/30" />
                  </div>

                  {/* Quick actions */}
                  <div className="px-4 pt-4">
                    <div className="grid grid-cols-3 gap-2">
                      {["منزل", "عمل", "مفضل"].map((label, i) => (
                        <div key={i} className="bg-zinc-800/40 border border-zinc-700/20 rounded-lg py-2 text-center">
                          <p className="text-[9px] text-zinc-400 font-medium">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow behind phone */}
              <div className="absolute -inset-4 bg-[#E50914]/10 rounded-[55px] blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-zinc-600 font-medium">اسحب للأسفل</span>
        <div className="w-5 h-8 rounded-full border border-zinc-700/50 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#E50914] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
