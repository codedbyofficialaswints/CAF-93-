import React, { useState } from 'react';
import { Wifi, BatteryCharging, Shield, Car, Compass, Image as ImageIcon, MapPin, Eye, X } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface SpacePageProps {
  currentLang: Language;
}

export default function SpacePage({ currentLang }: SpacePageProps) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const t = (key: string) => TRANSLATIONS[key]?.[currentLang] || key;

  // Curated spatial photography gallery showing the flagship interior design
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
      caption: { en: "The warm 2700K ambient ceiling lighting", ar: "إضاءة الأسقف الدافئة طيف ٢٧٠٠ك" }
    },
    {
      src: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800",
      caption: { en: "Our signature walnut cane-back armchairs", ar: "كراسي خشب الجوز وقش الخيزران الفريدة" }
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      caption: { en: "The peaceful biophilic workspace zones", ar: "مساحات العمل الطبيعية المهدئة للتوتر" }
    },
    {
      src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800",
      caption: { en: "Barista station and unglazed stoneware cups", ar: "منصة باريستا كافيه ٩٣ وأكواب السيراميك" }
    },
    {
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
      caption: { en: "Our central olive tree nature connection", ar: "شجرة الزيتون في قلب صالة كافيه ٩٣" }
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      caption: { en: "Fully integrated desks with power points", ar: "طاولات متكاملة بمقابس طاقة مدمجة" }
    }
  ];

  const amenities = [
    { icon: Wifi, text: t('amenitiesWifi') },
    { icon: BatteryCharging, text: t('amenitiesPlugs') },
    { icon: Compass, text: t('amenitiesChairs') },
    { icon: Shield, text: t('amenitiesLounge') },
    { icon: Car, text: t('amenitiesDrivethru') },
    { icon: Car, text: t('amenitiesParking') }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-[#7A1F1F] to-[#4A1010] bg-grain min-h-screen relative overflow-hidden">
      <div className="bg-pattern" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-display text-lg tracking-widest block mb-2 italic">
            {currentLang === 'en' ? "OUR SPATIAL CONCEPT" : "فلسفة التصميم الداخلي"}
          </span>
          <h1 className={`text-4xl sm:text-6xl font-normal text-white mb-4 ${currentLang === 'ar' ? 'arabic' : 'font-display italic'}`}>
            {t('spaceTitle')}
          </h1>
          <p className="text-cream/80 text-sm sm:text-base">
            {t('spaceSubtitle')}
          </p>
          <div className="w-24 h-0.5 bg-gold/40 mx-auto mt-6" />
        </div>

        {/* High-Performance Amenities Grid */}
        <div className="bg-wine/30 border border-gold/15 rounded-3xl p-8 sm:p-12 glass-card mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              {t('amenitiesTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-cream/70">
              {currentLang === 'en' 
                ? "Every detail is custom engineered for high cognitive performance, private brainstorming, or social gatherings."
                : "كل التفاصيل مصممة لدعم العمل الذهني عالي الأداء، أو التواصل الاجتماعي الهادئ والمريح."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 p-5 bg-dark-red/50 border border-gold/10 hover:border-gold/30 rounded-xl transition-luxury"
              >
                <div className="p-3 bg-wine text-gold rounded-xl shadow-md">
                  <amenity.icon className="w-5 h-5" />
                </div>
                <span className="text-cream/90 text-sm font-medium">
                  {amenity.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Mosaic Masonry Grid Gallery */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              {currentLang === 'en' ? "Flagship Interior Gallery" : "معرض تفاصيل الفرع الرئيسي"}
            </h2>
            <p className="text-xs sm:text-sm text-cream/70">
              {currentLang === 'en' ? "Click images to view full-resolution bespoke details of our Barka branch." : "انقر على الصور لمعاينة الدقة الكاملة للتصميم الداخلي والأثاث ببركاء."}
            </p>
            <div className="w-12 h-0.5 bg-gold/30 mx-auto mt-4" />
          </div>

          {/* Masonry Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setLightboxImg(img.src)}
                className="break-inside-avoid relative overflow-hidden rounded-2xl border border-gold/10 hover:border-gold/40 group cursor-pointer shadow-lg transition-luxury"
              >
                <img 
                  src={img.src} 
                  alt={img.caption[currentLang]} 
                  className="w-full object-cover rounded-2xl group-hover:scale-103 transition-transform duration-500"
                />
                
                {/* Overlay hover element */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-red/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif font-bold text-white">
                      {img.caption[currentLang]}
                    </span>
                    <Eye className="w-4.5 h-4.5 text-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxImg && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 p-2.5 bg-wine/60 text-white rounded-full hover:bg-gold hover:text-espresso transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={lightboxImg} 
              alt="Bespoke luxury interior" 
              className="max-w-full max-h-[85vh] rounded-xl border border-gold/30 object-contain shadow-2xl"
            />
          </div>
        )}

        {/* Extensible CMS-ready "Coming Soon" module */}
        <div className="bg-[#1A1210] border border-gold/25 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-wine/10 rounded-full blur-2xl" />

          <span className="text-[10px] font-mono uppercase text-gold tracking-widest block mb-2">
            {currentLang === 'en' ? "CMS EXTENSION MODULE — EXPANDING RITUALS" : "نظام إدارة المحتوى — فروع قادمة"}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
            {currentLang === 'en' ? "Future Branch Openings" : "فروع كافيه ٩٣ القادمة"}
          </h3>
          <p className="text-xs sm:text-sm text-cream/70 max-w-md mx-auto leading-relaxed mb-6">
            {currentLang === 'en' 
              ? "We are mapping future sanctuaries. Soon, Oman's signature 93° focus experience will expand to Muscat and Sohar. Stay tuned to our newsletter."
              : "نعمل حالياً على رسم خارطة ملاذاتنا الجديدة. قريباً، ستتوسع تجربة كافيه ٩٣ للتركيز والعمل لتشمل مسقط وصحار. انضم لقائمتنا البريدية للمستجدات."}
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <div className="bg-wine/40 border border-gold/15 px-4 py-2.5 rounded-lg flex items-center gap-2 text-xs font-mono text-gold">
              <MapPin className="w-4 h-4 text-gold/60" />
              <span>{currentLang === 'en' ? "Muscat — Phase 2" : "محافظة مسقط — المرحلة ٢"}</span>
            </div>
            <div className="bg-wine/40 border border-gold/15 px-4 py-2.5 rounded-lg flex items-center gap-2 text-xs font-mono text-gold">
              <MapPin className="w-4 h-4 text-gold/60" />
              <span>{currentLang === 'en' ? "Sohar — Phase 3" : "ولاية صحار — المرحلة ٣"}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
