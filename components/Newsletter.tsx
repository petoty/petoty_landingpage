import { Apple, Play } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-6 sm:py-10">
      <div className="bg-[#7A3B66] rounded-[20px] sm:rounded-[26px] min-h-[290px] px-6 py-8 sm:px-12 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">

        {/* LEFT */}
        <div className="w-full md:max-w-[60%] text-center md:text-left">
          <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-white uppercase mb-2 sm:mb-3 leading-tight md:whitespace-nowrap overflow-hidden text-clip">
            Stay Up To Date About Our Latest Offers
          </h2>

          <p className="text-white/90 text-[14px] sm:text-[15px] font-semibold mb-1">
            Let's keep in touch
          </p>

          <p className="text-white/70 text-[13px] sm:text-[15px] mb-5 sm:mb-6">
            Get recommendations, tips, updates and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-[260px] px-4 py-3 rounded-full bg-white text-sm outline-none"
            />

            <button className="bg-[#5a0b2f] text-white px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center md:items-end gap-3 sm:gap-4 w-full md:w-auto mt-4 md:mt-0">

          <button className="bg-white text-black px-6 py-2 rounded-full text-[18px] sm:text-[25px] font-semibold">
            Download App
          </button>

          <p className="text-white/90 text-[14px] sm:text-[16px] text-center md:text-right">
            The mobile app is available now
          </p>

          <div className="flex justify-center md:justify-end gap-3 w-full">
            <button className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <Apple size={18} />
            </button>

            <button className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <Play size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;