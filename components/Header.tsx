"use client";

import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown, Dumbbell, Footprints, Scissors, Building2, HandHeart, Stethoscope } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginPopup from "./LoginPopup";

const navItems = [
  { label: "DOGS", hasDropdown: true },
  { label: "CATS", hasDropdown: true },
  { label: "BIRDS", hasDropdown: true },
  { label: "FISHES", hasDropdown: true },
  { label: "SERVICES", hasDropdown: true },
  { label: "PAWSCRIPTION", hasDropdown: false, href: "/pawscription" },
  { label: "PAWSSURANCE", hasDropdown: false, href: "/pawssurance" },
  { label: "PETFLUENCER", hasDropdown: false, href: "/petfluencer" },
];

const dogsDropdownData = [
  {
    title: "FOOD",
    items: ["Puppy Cornor", "Dry Food", "Wet Food", "Vitamins & Supplements", "Prescription Diet"],
  },
  {
    title: "TREATS & CHEWS",
    items: ["Biscuits & Cookies", "Bones & Chews", "Dental Treats", "Jerky Treats", "Training Treats"],
  },
  {
    title: "HEALTH & WELLNESS",
    items: ["Flea & Ticks", "Grooming Supplies", "Training, Cleaning & Waste Disposals", "Vitamins & Supplements", "Other Health Care Aids"],
  },
  {
    title: "ACCESSORIES",
    items: ["Collars, Leashes & Harness", "Bowls & Feeders", "Toys", "Clothes & Accessories", "Bedding & Travel Supplies"],
  },
];

const catsDropdownData = [
  {
    title: "FOOD & TREATS",
    items: ["Kitten Corner", "Dry Food", "Wet Food", "Kitten Food", "Treats", "Prescription Diet"],
  },
  {
    title: "LITTER SUPPLIES",
    items: ["Litter", "Litter Boxes & Toilets", "Waste Disposals", "Cleaning & Deodorizers"],
  },
  {
    title: "HEALTH & WELLNESS",
    items: ["Fleas & Ticks", "Grooming Supplies", "Health Care Aids"],
  },
  {
    title: "ACCESSORIES",
    items: ["Toys", "Bowls & Feeders", "Collars, Leashes & Harnesses", "Beds, Mats & Tents", "Carrier & Travel Supplies"],
  },
];

const birdsDropdownData = [
  {
    title: "FOOD & FEEDING",
    items: ["Food", "Treats", "Feeders & Waterers"],
  },
  {
    title: "CAGES & ACCESSORIES",
    items: ["Cages", "Litter & Liners", "Cleanup & Odour Control", "Cage Covers"],
  },
  {
    title: "PERCHES & TOYS",
    items: ["Perches", "Swings", "Playstands", "Toys"],
  },
  {
    title: "HEALTH & GROOMING",
    items: ["Grooming & Bathing", "Health & Wellness"],
  },
];

const fishesDropdownData = [
  "FILTER & MEDIA", "ACCESSORIES", "CO2", "SOIL & SUBSTRATES", "TREATMENT", "FOOD", "LIGHTS", "CHILLERS & HEATERS", "FERTILIZERS & ADDITIVES", "LAYOUT MATERIALS", "PUMPS", "MARINE SUPPLIES", "SHRIMP PRODUCTS", "AQUARIUM TANKS", "LIVE FISHES", "Plants",
];

type ServiceItem = { label: string; icon: React.ElementType };

const servicesByPet: Record<string, ServiceItem[]> = {
  Dog: [
    { label: "Dog Training",  icon: Dumbbell },
    { label: "Dog Walking",   icon: Footprints },
    { label: "Pet Grooming", icon: Scissors },
    { label: "Pet Boarding", icon: Building2 },
    { label: "Pet Sitting",  icon: HandHeart },
    { label: "Vet@home",     icon: Stethoscope },
  ],
  Cat: [
    { label: "Pet Grooming", icon: Scissors },
    { label: "Pet Boarding", icon: Building2 },
    { label: "Pet Sitting",  icon: HandHeart },
    { label: "Vet@home",     icon: Stethoscope },
  ],
};

const petTabs = ["Dog", "Cat"] as const;
type PetTab = typeof petTabs[number];

const dropdownDataMap: Record<string, {title: string, items: string[]}[]> = {
  DOGS: dogsDropdownData,
  CATS: catsDropdownData,
  BIRDS: birdsDropdownData,
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeServicePet, setActiveServicePet] = useState<PetTab>("Dog");
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  // Close dropdown when interacting outside (simplified handling)
  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="bg-background border-b border-border relative">
      {/* Top Bar */}
      <div
        className="w-full px-4 sm:px-10 py-3 text-sm relative"
        style={{ backgroundColor: "#52002B", color: "#FFFFFF" }}
      >
        <div className="w-full h-full flex items-center justify-between font-medium text-[15px]">
          <Link href="/become-vendor" className="cursor-pointer hover:text-gray-200 transition-colors">
            Become a Vendor
          </Link>
          <Link href="/get-franchise" className="cursor-pointer hover:text-gray-200 transition-colors">
            Get a Franchise
          </Link>
        </div>

        {/* Center Icons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-3px] z-10 pointer-events-none">
          <Image
            src="/images/logos/img_frame_427321168.png"
            alt="Pets Icon"
            width={80}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      {/* Main bar */}

      {/* <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-200"> */}
      <div className="w-full px-4 sm:px-10 py-3 sm:py-4 flex items-center justify-between border-b border-gray-200">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logos/img_image_3.png"
            alt="Petoty Logo"
            width={160}
            height={70}
            className="object-contain cursor-pointer w-[110px] sm:w-[160px] h-auto"
          />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-[650px] mx-6">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 text-base outline-none transition-all
        hover:bg-gray-200 focus:ring-2 focus:ring-[#8B1E4F]"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-10">
          
          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button
            className="md:hidden p-1.5 text-[#8B1E4F] hover:bg-pink-50 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>

          {/* Wishlist */}
          <button className="hidden sm:flex items-center gap-3 text-lg font-semibold text-black hover:text-[#8B1E4F] transition">
            <Heart className="h-7 w-7 text-[#8B1E4F]" />
            <span>Wishlist</span>
          </button>

          {/* Cart */}
          <button 
            onClick={() => setIsLoginOpen(true)}
            className="hidden sm:flex items-center gap-3 text-lg font-semibold text-black hover:text-[#8B1E4F] transition"
          >
            <ShoppingCart className="h-7 w-7 text-[#8B1E4F]" />
            <span>Cart</span>
          </button>

          {/* Login — icon-only on mobile, full label on sm+ */}
          <button 
             onClick={() => setIsLoginOpen(true)}
             className="flex items-center gap-2 text-sm sm:text-lg font-semibold bg-gray-200 px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#8B1E4F] hover:text-white transition group"
          >
            <User className="h-5 w-5 sm:h-7 sm:w-7 text-[#8B1E4F] group-hover:text-white transition-colors shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">Login/Sign Up</span>
          </button>

        </div>

      </div>
      {/* Desktop nav */}
      <nav 
        className="hidden md:block border-t border-border"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-12 xl:gap-16 py-5">
            {navItems.map((item) => (
              <li 
                key={item.label} 
                className="relative"
                onMouseEnter={() => {
                  if (item.hasDropdown) {
                    setActiveDropdown(item.label);
                  } else {
                    setActiveDropdown(null);
                  }
                }}
              >
                {item.href ? (
                  <Link 
                    href={item.href}
                    className="flex items-center gap-1 text-base font-semibold tracking-wide text-gray-800 hover:text-[#8B1E4F] transition-colors"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="h-4 w-4 mt-[1px]" />}
                  </Link>
                ) : (
                  <button 
                    className="flex items-center gap-1 text-base font-semibold tracking-wide text-gray-800 hover:text-[#8B1E4F] transition-colors"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="h-4 w-4 mt-[1px]" />}
                  </button>
                )}

                {/* Specific Fish Dropdown anchored to this LI */}
                {item.label === "FISHES" && activeDropdown === "FISHES" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-[20px] w-[260px] z-50 text-left">
                    <div className="bg-[#FCFAFA] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 py-6 px-8 rounded-2xl">
                      <ul className="space-y-4">
                        {fishesDropdownData.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <a href="#" className="text-[14px] font-medium text-[#8B1E4F] hover:text-[#52002B] tracking-wide transition-colors">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mega Menu Dropdown */}
        {(activeDropdown === "DOGS" || activeDropdown === "CATS" || activeDropdown === "BIRDS") && (
          <div className="absolute left-10 right-10 mx-auto max-w-[1400px] bg-[#FCFAFA] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100/60 rounded-b-3xl z-50 pt-10 pb-12">
            <div className="container mx-auto px-10 flex justify-center gap-16 xl:gap-24">
              {dropdownDataMap[activeDropdown].map((col, idx) => (
                <div key={idx} className="flex-1 max-w-[280px]">
                  <h3 className="text-[13px] font-bold text-[#8B1E4F] mb-6 tracking-wide uppercase">{col.title}</h3>
                  <ul className="space-y-5">
                    {col.items.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a href="#" className="text-[14px] font-medium text-[#C4467E] hover:text-[#52002B] transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Two-Level Services Dropdown */}
        {activeDropdown === "SERVICES" && (
          <div className="absolute left-10 right-10 mx-auto max-w-[1200px] bg-[#FCFAFA] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100/60 rounded-b-3xl z-50 py-0 overflow-hidden">
            <div className="flex">

              {/* LEFT PANEL — Pet Type Tabs */}
              <div className="flex flex-col border-r border-gray-200 bg-white min-w-[160px] py-4">
                {petTabs.map((pet) => (
                  <button
                    key={pet}
                    onMouseEnter={() => setActiveServicePet(pet)}
                    onClick={() => setActiveServicePet(pet)}
                    className={`flex items-center gap-3 px-6 py-4 text-[14px] font-semibold text-left transition-colors ${
                      activeServicePet === pet
                        ? "text-[#8B1E4F] bg-pink-50 border-r-2 border-[#8B1E4F]"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#8B1E4F]"
                    }`}
                  >
                    <span className="text-lg">{pet === "Dog" ? "🐶" : "🐱"}</span>
                    {pet}
                  </button>
                ))}
              </div>

              {/* RIGHT PANEL — Services Grid with Icons + Conditional View Package */}
              <div className="flex-1 px-10 py-6 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-5">
                    {activeServicePet} Services
                  </p>
                  <div className="flex flex-wrap gap-8">
                    {servicesByPet[activeServicePet].map((service, idx) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={idx}
                          href={`/services/book?service=${encodeURIComponent(service.label)}&pet=${activeServicePet}`}
                          onClick={() => setActiveDropdown(null)}
                          className="flex flex-col items-center gap-2 group w-[80px] text-center focus:outline-none"
                        >
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 bg-pink-50 text-[#8B1E4F] group-hover:bg-[#f0d5e3]"
                          >
                            <Icon className="w-6 h-6 stroke-[1.8]" />
                          </div>
                          <span
                            className="text-[12.5px] font-semibold leading-snug transition-colors text-gray-600 group-hover:text-[#8B1E4F]"
                          >
                            {service.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-2">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-muted border-none outline-none text-sm"
              />
            </div>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link 
                      href={item.href}
                      className="w-full flex items-center justify-between py-2.5 px-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                    >
                      {item.label}
                      {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                    </Link>
                  ) : (
                    <div className="flex flex-col">
                      <button 
                        onClick={() => item.hasDropdown ? setMobileActiveDropdown(prev => prev === item.label ? null : item.label) : undefined}
                        className={`w-full flex items-center justify-between py-2.5 px-2 text-sm font-semibold rounded-lg transition-colors ${mobileActiveDropdown === item.label ? 'bg-pink-50 text-[#8B1E4F]' : 'text-foreground hover:text-primary hover:bg-muted'}`}
                      >
                        {item.label}
                        {item.hasDropdown && (
                          <ChevronDown className={`h-4 w-4 transition-transform ${mobileActiveDropdown === item.label ? "rotate-180" : ""}`} />
                        )}
                      </button>
                      
                      {/* Mobile Dropdown Inner Content */}
                      {mobileActiveDropdown === item.label && item.hasDropdown && (
                        <div className="pl-4 pr-2 py-3 border-l-2 border-[#8B1E4F]/20 ml-4 mb-2 mt-1">
                          
                          {/* DOGS, CATS, BIRDS */}
                          {dropdownDataMap[item.label] && (
                            <div className="flex flex-col gap-6">
                              {dropdownDataMap[item.label].map((col, idx) => (
                                <div key={idx}>
                                  <h4 className="text-[11px] font-bold text-[#8B1E4F] mb-3 uppercase tracking-wider">{col.title}</h4>
                                  <ul className="space-y-3">
                                    {col.items.map((link, i) => (
                                      <li key={i}>
                                        <a href="#" className="text-[13px] text-gray-600 hover:text-[#8B1E4F] block">{link}</a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* FISHES */}
                          {item.label === "FISHES" && (
                            <ul className="space-y-3">
                              {fishesDropdownData.map((link, i) => (
                                <li key={i}>
                                  <a href="#" className="text-[13px] text-gray-600 hover:text-[#8B1E4F] block">{link}</a>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* SERVICES */}
                          {item.label === "SERVICES" && (
                            <div className="flex flex-col gap-6">
                              {petTabs.map(pet => (
                                <div key={pet}>
                                  <h4 className="text-[13px] font-bold text-[#8B1E4F] mb-3">{pet} Services</h4>
                                  <ul className="space-y-3">
                                    {servicesByPet[pet].map((svc, i) => {
                                      const Icon = svc.icon;
                                      return (
                                        <li key={i}>
                                          <a href="#" className="flex items-center gap-3 text-[13px] text-gray-600 hover:text-[#8B1E4F]">
                                            <Icon className="h-4 w-4" />
                                            {svc.label}
                                          </a>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 py-3 border-t border-border mt-2">
              <button className="flex items-center gap-1.5 text-sm font-medium">
                <Heart className="h-5 w-5" /> Wishlist
              </button>
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="flex items-center gap-1.5 text-sm font-medium"
              >
                <ShoppingCart className="h-5 w-5" /> Cart
              </button>
            </div>
          </div>
        </nav>
      )}
      
      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
};

export default Header;
