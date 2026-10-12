import { Car, DollarSign, Clock, TrendingUp, ChevronLeft } from "lucide-react";

export default function DriverApp() {
  const benefits = [
    { icon: DollarSign, title: "دخل مرن", desc: "اعمل بالوقت الذي يناسبك واكسب دخلاً إضافياً" },
    { icon: Clock, title: "حرية الوقت", desc: "أنت من تحدد ساعات عملك بدون قيود" },
    { icon: TrendingUp, title: "مكافآت أسبوعية", desc: "احصل على مكافآت ومحفزات عند إتمام عدد رحلات معين" },
    { icon: Car, title: "دعم مستمر", desc: "فريق دعم متخصص للكباتن متاح 24/7" },
  ];

  return (
    <section id="driver-app" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0d0d15] to-[#09090b]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />
      
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#E50914]/4 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block text-[#E50914] text-sm font-bold bg-[#E50914]/10 px-4 py-1.5 rounded-full">
              تطبيق السائق
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              انضم لفريق{" "}
              <span className="text-[#E50914]">نشاما درايف</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg">
              كن جزءاً من عائلة نشاما درايف واستمتع بالعمل كسائق محترف مع دخل
              مجزي ومرونة كاملة في ساعات العمل.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-zinc-900/40 border border-zinc-800/40 rounded-xl p-4 hover:border-[#E50914]/20 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#E50914]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#E50914]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                    <p className="text-[11px] text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#E50914] hover:bg-[#c90812] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#E50914]/30 hover:shadow-[#E50914]/50 mt-4"
            >
              <span>سجّل ككابتن الآن</span>
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Visual */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Background circles */}
              <div className="absolute inset-0 rounded-full border border-zinc-800/30" />
              <div className="absolute inset-8 rounded-full border border-[#E50914]/10" />
              <div className="absolute inset-16 rounded-full border border-[#E50914]/20" />
              
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 bg-gradient-to-br from-[#E50914] to-[#8b0000] rounded-full flex items-center justify-center shadow-2xl shadow-[#E50914]/30 animate-pulse-glow">
                  <Car className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-4 right-8 bg-zinc-900/80 border border-zinc-800/50 rounded-lg px-3 py-1.5 backdrop-blur-sm animate-float">
                <p className="text-[10px] text-zinc-400 font-medium">دخل يومي</p>
                <p className="text-sm font-bold text-[#E50914]">+50 JD</p>
              </div>

              <div className="absolute bottom-8 left-4 bg-zinc-900/80 border border-zinc-800/50 rounded-lg px-3 py-1.5 backdrop-blur-sm" style={{ animation: "float 3s ease-in-out 1s infinite" }}>
                <p className="text-[10px] text-zinc-400 font-medium">تقييم</p>
                <p className="text-sm font-bold text-yellow-400">⭐ 4.9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
