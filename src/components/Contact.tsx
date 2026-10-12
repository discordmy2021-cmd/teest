import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0c0c14] to-[#09090b]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#E50914] text-sm font-bold bg-[#E50914]/10 px-4 py-1.5 rounded-full mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            نحن هنا <span className="text-[#E50914]">لمساعدتك</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            لديك سؤال أو استفسار؟ لا تتردد في التواصل معنا
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">معلومات التواصل</h3>
              
              {[
                { icon: Phone, label: "الهاتف", value: "+962 7X XXX XXXX", href: "tel:+962" },
                { icon: Mail, label: "البريد الإلكتروني", value: "info@nashamadrive.com", href: "mailto:info@nashamadrive.com" },
                { icon: MapPin, label: "الموقع", value: "عمّان، الأردن 🇯🇴", href: "#" },
                { icon: MessageCircle, label: "واتساب", value: "تواصل عبر واتساب", href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#E50914]/10 flex items-center justify-center group-hover:bg-[#E50914]/20 transition-colors flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#E50914]" />
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-500 font-medium">{item.label}</p>
                    <p className="text-sm text-zinc-300 group-hover:text-white transition-colors font-semibold">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-white mb-4">تابعنا على</h4>
              <div className="flex gap-3">
                {["فيسبوك", "انستغرام", "تويتر", "تيكتوك"].map((name, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 rounded-xl bg-zinc-800/60 border border-zinc-700/30 flex items-center justify-center hover:bg-[#E50914]/20 hover:border-[#E50914]/30 transition-all text-xs text-zinc-400 hover:text-white font-bold"
                  >
                    {name[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-6">أرسل لنا رسالة</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-500 font-medium mb-1.5">الاسم الكامل</label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك"
                    className="w-full bg-zinc-800/40 border border-zinc-700/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-[#E50914] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 font-medium mb-1.5">رقم الهاتف</label>
                  <input
                    type="tel"
                    placeholder="+962"
                    className="w-full bg-zinc-800/40 border border-zinc-700/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-[#E50914] focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-zinc-500 font-medium mb-1.5">البريد الإلكتروني</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full bg-zinc-800/40 border border-zinc-700/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-[#E50914] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-500 font-medium mb-1.5">الموضوع</label>
                <select className="w-full bg-zinc-800/40 border border-zinc-700/40 rounded-xl px-4 py-2.5 text-sm text-zinc-400 focus:border-[#E50914] focus:outline-none transition-colors">
                  <option>استفسار عام</option>
                  <option>التسجيل ككابتن</option>
                  <option>مشكلة تقنية</option>
                  <option>اقتراح أو شكوى</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-zinc-500 font-medium mb-1.5">الرسالة</label>
                <textarea
                  rows={4}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full bg-zinc-800/40 border border-zinc-700/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-[#E50914] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#E50914] hover:bg-[#c90812] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-[#E50914]/20 hover:shadow-[#E50914]/40"
              >
                <Send className="w-4 h-4" />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
