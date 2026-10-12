import { Users, Target, Award, TrendingUp } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, value: "+10,000", label: "مستخدم نشط" },
    { icon: Target, value: "+50,000", label: "رحلة مكتملة" },
    { icon: Award, value: "+500", label: "كابتن معتمد" },
    { icon: TrendingUp, value: "4.9", label: "تقييم المستخدمين" },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0c0c14] to-[#09090b]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#E50914] text-sm font-bold bg-[#E50914]/10 px-4 py-1.5 rounded-full mb-4">
            من نحن
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            نشاما <span className="text-[#E50914]">درايف</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            نحن فريق أردني طموح نؤمن بأن كل رحلة تستحق أن تكون آمنة ومريحة.
            نسعى لتقديم أفضل خدمة توصيل ذكية في المملكة الأردنية الهاشمية.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-zinc-900/50 border border-zinc-800/40 rounded-2xl p-5 sm:p-6 text-center hover:border-[#E50914]/30 hover:bg-zinc-900/70 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#E50914]/10 flex items-center justify-center group-hover:bg-[#E50914]/20 transition-colors">
                <stat.icon className="w-5 h-5 text-[#E50914]" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-zinc-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              لماذا <span className="text-[#E50914]">نشاما درايف</span>؟
            </h3>
            <div className="space-y-4">
              {[
                { title: "أمان مطلق", desc: "جميع كباتننا مرخصون ومعتمدون مع نظام تتبع GPS متقدم" },
                { title: "أسعار عادلة", desc: "نقدم أسعار منافسة وشفافة بدون رسوم خفية" },
                { title: "دعم 24/7", desc: "فريق دعم متواجد على مدار الساعة لخدمتكم" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-1.5 h-1.5 mt-2 bg-[#E50914] rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
              {/* Decorative circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-800/40 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[#E50914]/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#E50914]/20 to-[#E50914]/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#E50914]/20">
                  <div className="text-center">
                    <p className="text-3xl sm:text-4xl font-black text-[#E50914]">🇯🇴</p>
                    <p className="text-xs text-zinc-400 font-bold mt-1">صنع في الأردن</p>
                  </div>
                </div>
              </div>
              {/* Orbiting dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#E50914] rounded-full shadow-lg shadow-[#E50914]/50" />
              <div className="absolute bottom-8 right-2 w-2 h-2 bg-[#E50914]/60 rounded-full" />
              <div className="absolute top-1/3 left-0 w-2 h-2 bg-[#E50914]/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
