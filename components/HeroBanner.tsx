import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-4 sm:py-6 overflow-hidden">
      <div className="relative w-full">
        <Image
          src="/assets/hero-pets1.png"
          alt="Happy cat and dog"
          width={1200}
          height={450}
          className="w-full h-auto rounded-t-[24px] sm:rounded-t-[36px]"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-6">
          <h1 className="text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-display text-primary-foreground mb-2 sm:mb-3 drop-shadow-lg leading-tight">
            Every Paw Tells a Story
          </h1>

          <p className="hidden sm:block text-primary-foreground/90 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 drop-shadow-md max-w-lg">
            Create your pet&apos;s profile and keep everything in one place
          </p>

          {/* mobile description — shorter */}
          <p className="block sm:hidden text-primary-foreground/90 text-[11px] mb-4 drop-shadow-md max-w-[200px] leading-snug">
            Create your pet&apos;s profile and keep everything in one place
          </p>

          <button className="flex items-center gap-1.5 sm:gap-2 bg-background text-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-foreground hover:text-background transition-colors shadow-lg">
            Add Pet
            <span className="bg-foreground text-background rounded-full p-0.5 sm:p-1">
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;