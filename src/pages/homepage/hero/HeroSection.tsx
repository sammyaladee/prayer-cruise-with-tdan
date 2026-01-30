import { useEffect, useRef } from "react";
import image from "../../../assets/20250323_203222.webp";

export default function HeroSection() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Preload and keep image in memory
    if (imgRef.current) {
      imgRef.current.loading = "eager";
      // Force the image to decode immediately
      imgRef.current.decode().catch(() => {
        // Ignore decode errors
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 sm:pb-8 lg:px-12 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Prayer Cruise <br />with{" "}
              <span className="text-blue-400">TDAN</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Raising Intentional Believers through <br />
              Prayer, Fasting & God's Word.
            </p>
            
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
            >
              Join Us
            </a>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-orange-400 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <img
                ref={imgRef}
                src={image}
                alt="Prayer Cruise with Rev. Oyetoki Oluwatobi Daniel"
                className="hero-image relative rounded-2xl shadow-2xl w-[28rem] h-[32rem] object-cover border-4 border-white"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}