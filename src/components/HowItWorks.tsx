import { Download, MapPin, Car, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      step: "01",
      title: "حمّل التطبيق",
      desc: "قم بتحميل تطبيق نشاما درايف من متجر التطبيقات وسجّل حسابك بخطوات بسيطة",
    },
    {
      icon: MapPin,
      step: "02",
      title: "حدد وجهتك",
      desc: "أدخل موقعك الحالي ووجهتك المطلوبة واختر نوع الرحلة المناسب",
    },
    {
      icon: Car,
      step: "03",
      title: "استمتع بالرحلة",
      desc: "سيصل إليك أقرب كابتن محترف. تتبع رحلتك مباشرة على الخريطة",
    },
    {
      icon: CheckCircle,
      step: "04",
      title: "وصلت بأمان",
      desc: "ادفع بالطريقة التي تناسبك وقيّم تجربتك لتحسين خدماتنا",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0e0e18] to-[#09090b]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#E50914] text-sm font-bold bg-[#E50914]/10 px-4 py-1.5 rounded-full mb-4">
            كيف يعمل؟
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            أربع خطوات <span className="text-[#E50914]">بسيطة</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            احجز رحلتك في أقل من دقيقة واستمتع بتجربة توصيل فريدة
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <div key={i} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -left-3 w-6 h-[2px] bg-gradient-to-l from-[#E50914]/40 to-transparent" />
              )}
              
              <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-2xl p-6 text-center hover:border-[#E50914]/30 hover:bg-zinc-900/60 transition-all duration-300 h-full">
                {/* Step number */}
                <span className="text-[10px] text-[#E50914]/40 font-black absolute top-4 right-5">{item.step}</span>
                
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#E50914]/15 to-[#E50914]/5 flex items-center justify-center border border-[#E50914]/10 group-hover:scale-105 transition-transform">
                  <item.icon className="w-6 h-6 text-[#E50914]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
