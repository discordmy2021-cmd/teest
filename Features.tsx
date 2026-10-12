import { Shield, Zap, MapPin, CreditCard, Star, Headphones } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "أمان وحماية",
      desc: "نظام تتبع GPS مباشر ومشاركة الرحلة مع العائلة والأصدقاء",
    },
    {
      icon: Zap,
      title: "سرعة الاستجابة",
      desc: "وصول الكابتن خلال دقائق معدودة مع أقرب سائق متاح",
    },
    {
      icon: MapPin,
      title: "تغطية واسعة",
      desc: "خدمة متاحة في جميع أنحاء المملكة الأردنية الهاشمية",
    },
    {
      icon: CreditCard,
      title: "دفع مرن",
      desc: "ادفع نقداً أو إلكترونياً بكل سهولة وأمان",
    },
    {
      icon: Star,
      title: "كباتن محترفين",
      desc: "سائقون مدربون ومرخصون بتقييمات عالية من المستخدمين",
    },
    {
      icon: Headphones,
      title: "دعم فني 24/7",
      desc: "فريق دعم متخصص جاهز لمساعدتك في أي وقت",
    },
  ];

  return (
    <section id="features" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0b0b12] to-[#09090b]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E50914]/3 rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#E50914] text-sm font-bold bg-[#E50914]/10 px-4 py-1.5 rounded-full mb-4">
            مميزاتنا
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            لماذا <span className="text-[#E50914]">تختارنا</span>؟
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            نقدم لك تجربة توصيل فريدة مع مميزات لا مثيل لها
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-zinc-900/40 border border-zinc-800/40 rounded-2xl p-6 sm:p-7 hover:border-[#E50914]/30 hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E50914]/10 flex items-center justify-center mb-4 group-hover:bg-[#E50914]/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-5 h-5 text-[#E50914]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
