export default function Footer() {
  return (
    <footer className="relative bg-[#06060a] border-t border-zinc-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white">درايف</span>
              <span className="text-2xl font-black text-[#E50914]">نشاما</span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
              خدمة التوصيل الذكية في الأردن. رحلتك بأمان وراحة مع كباتن محترفين وأسعار منافسة.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {["الرئيسية", "عنا", "مميزاتنا", "كيف يعمل؟", "تواصل معنا"].map((link, i) => (
                <li key={i}>
                  <a href={`#${["home","about","features","how-it-works","contact"][i]}`} className="text-xs text-zinc-500 hover:text-[#E50914] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">الخدمات</h4>
            <ul className="space-y-2">
              {["توصيل ركاب", "توصيل طلبات", "رحلات خاصة", "تطبيق السائق", "خدمة الشركات"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-xs text-zinc-500 hover:text-[#E50914] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">قانوني</h4>
            <ul className="space-y-2">
              {["سياسة الخصوصية", "شروط الاستخدام", "سياسة الإلغاء", "الأسئلة الشائعة"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-xs text-zinc-500 hover:text-[#E50914] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-600">
            © {new Date().getFullYear()} نشاما درايف. جميع الحقوق محفوظة 🇯🇴
          </p>
          <div className="flex items-center gap-4">
            {["فيسبوك", "انستغرام", "تويتر"].map((name, i) => (
              <a
                key={i}
                href="#"
                className="text-[10px] text-zinc-600 hover:text-[#E50914] transition-colors font-medium"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
