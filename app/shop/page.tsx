"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { SlidersHorizontal, ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ShopContent = () => {
  const searchParams = useSearchParams();
  const initialPet = searchParams.get("pet");
  const initialCat = searchParams.get("category");

  const [petType, setPetType] = useState<string[]>(initialPet ? [initialPet] : ["Cat"]);
  const [productCategory, setProductCategory] = useState<string[]>(initialCat ? [initialCat] : ["Cat"]);
  const [brand, setBrand] = useState<string[]>(["Acana"]);

  useEffect(() => {
    if (initialPet) setPetType([initialPet]);
    if (initialCat) setProductCategory([initialCat]);
  }, [initialPet, initialCat]);

  const toggleFilter = (state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>, val: string) => {
    if (state.includes(val)) {
      setState(state.filter(item => item !== val));
    } else {
      setState([...state, val]);
    }
  };

  const categories = [
    { name: "Cat", count: 5 },
    { name: "Treats", count: 5 },
    { name: "Toys", count: 5 },
    { name: "Grooming", count: 5 },
    { name: "Accessories", count: 5 },
    { name: "Beds & Crates", count: 5 },
    { name: "Health & wellness", count: 5 },
    { name: "Training supplies", count: 5 },
    { name: "Litter & cleaning", count: 5 },
  ];

  const brands = [
    { name: "Acana", count: 5 },
    { name: "Applaws", count: 5 },
    { name: "Arden Grange", count: 5 },
    { name: "Bayer", count: 5 },
    { name: "Bio Groom", count: 5 },
    { name: "Bramton", count: 5 },
    { name: "RUNO'S WILD Essentials", count: 5 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-10 py-10 mt-2">
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[300px] flex-shrink-0">
            {/* Filter Header */}
            <div className="flex items-center gap-4 mb-8">
              <button className="flex items-center gap-2 border border-black rounded-full px-5 py-2 hover:bg-gray-100 transition-colors">
                <SlidersHorizontal className="w-4 h-4" />
                <span className="font-semibold text-sm">Filter By</span>
              </button>
              <button className="text-[15px] text-black hover:text-[#8B1E4F] font-medium transition-colors">
                Hide
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[17px]">Price range</h3>
              </div>
              <div className="w-full relative h-[2px] bg-black mb-4">
                {/* Thumb 1 */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[14px] h-[14px] bg-black rounded-full" />
                {/* Thumb 2 */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[14px] h-[14px] bg-black rounded-full" />
              </div>
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>₹ 0</span>
                <span>₹ 15000</span>
              </div>
            </div>

            {/* Pet Type */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4 cursor-pointer">
                <h3 className="font-bold text-[17px]">Pet type</h3>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="space-y-3">
                {["Cat", "Dog", "Bird", "Fish"].map((type) => (
                  <label key={type} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className={`w-[18px] h-[18px] rounded-[4px] border border-gray-300 flex items-center justify-center transition-colors ${petType.includes(type) ? 'bg-[#9fb4f2] border-[#9fb4f2]' : 'bg-transparent group-hover:border-[#9fb4f2]'}`}>
                        {petType.includes(type) && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={petType.includes(type)} 
                        onChange={() => toggleFilter(petType, setPetType, type)} 
                      />
                      <span className="text-[15px]">{type}</span>
                    </div>
                    <span className="text-[11px] text-gray-500 border border-gray-200 rounded-full px-2 py-0.5 min-w-[24px] text-center bg-gray-50">
                      5
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Product Category */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4 cursor-pointer">
                <h3 className="font-bold text-[17px]">Product Category</h3>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
                {categories.map((cat) => (
                  <label key={cat.name} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className={`w-[18px] h-[18px] rounded-[4px] border border-gray-300 flex items-center justify-center transition-colors ${productCategory.includes(cat.name) ? 'bg-[#9fb4f2] border-[#9fb4f2]' : 'bg-transparent group-hover:border-[#9fb4f2]'}`}>
                        {productCategory.includes(cat.name) && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={productCategory.includes(cat.name)} 
                        onChange={() => toggleFilter(productCategory, setProductCategory, cat.name)} 
                      />
                      <span className="text-[15px]">{cat.name}</span>
                    </div>
                    <span className="text-[11px] text-gray-500 border border-gray-200 rounded-full px-2 py-0.5 min-w-[24px] text-center bg-gray-50">
                      {cat.count}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand */}
            <div>
              <div className="flex items-center justify-between mb-4 cursor-pointer">
                <h3 className="font-bold text-[17px]">Brand</h3>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="space-y-3 relative">
                {brands.map((b) => (
                  <label key={b.name} className="flex items-center justify-between cursor-pointer group pr-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-[18px] h-[18px] rounded-[4px] border border-gray-300 flex items-center justify-center transition-colors ${brand.includes(b.name) ? 'bg-[#9fb4f2] border-[#9fb4f2]' : 'bg-transparent group-hover:border-[#9fb4f2]'}`}>
                        {brand.includes(b.name) && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={brand.includes(b.name)} 
                        onChange={() => toggleFilter(brand, setBrand, b.name)} 
                      />
                      <span className="text-[15px]">{b.name}</span>
                    </div>
                    <span className="text-[11px] text-gray-500 border border-gray-200 rounded-full px-2 py-0.5 min-w-[24px] text-center bg-gray-50">
                      {b.count}
                    </span>
                  </label>
                ))}
                
                {/* Scrollbar visualization */}
                <div className="absolute right-0 top-0 w-1.5 h-10 bg-gray-300 rounded-full" />
              </div>
            </div>

          </aside>

          {/* MAIN PRODUCT GRID */}
          <div className="flex-1">
            
            {/* Header / Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
              <span className="text-[20px] font-semibold">48 products</span>
              
              <div className="relative">
                <select className="appearance-none border border-gray-300 rounded-full pl-5 pr-12 py-2 text-[15px] font-medium text-black bg-white focus:outline-none focus:border-black cursor-pointer">
                  <option>Sort by</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-black" />
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 relative pr-0 xl:pr-10">
              
              {/* Product Card Template */}
              {Array.from({ length: 9 }).map((_, idx) => (
                <Link key={idx} href={`/product/${idx + 1}`} className="flex flex-col items-center">
                  {/* Image Container */}
                  <div className="w-full bg-[#f6f6f6] rounded-[24px] overflow-hidden aspect-square mb-6 flex items-center justify-center relative hover:shadow-md transition-shadow cursor-pointer">
                    {/* Placeholder image representation with a real image if available or general puppy shape via CSS */}
                    <img 
                     src="/assets/img_waterproof_ripstop.png"
                      alt="Waterproof Ripstop Dog Coat—Blue"
                      className="object-cover w-full h-full mix-blend-multiply" 
                      style={{ filter: "brightness(1) contrast(1.1)", objectFit: 'contain', padding: '1rem' }}
                    />
                  </div>

                  {/* Details */}
                  <h4 className="text-[13px] font-bold text-center mb-2 px-2 hover:text-[#8B1E4F] cursor-pointer transition-colors max-w-full truncate whitespace-normal leading-tight">
                    Waterproof Ripstop Dog Coat—Blue
                  </h4>
                  
                  {/* Stars */}
                  <div className="flex items-center gap-[2px] mb-2 cursor-pointer">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>

                  {/* Price */}
                  <span className="text-[13px] font-bold">
                    $150.00
                  </span>
                </Link>
              ))}

              {/* Grid Scrollbar visualization */}
              <div className="hidden xl:block absolute -right-4 top-0 w-2.5 h-40 bg-[#acacac] rounded-full" />
              
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

const ShopPage = () => {
  return (
    <Suspense fallback={<div>Loading filters...</div>}>
      <ShopContent />
    </Suspense>
  );
};

export default ShopPage;
