"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  CheckCircle2,
  Image as ImageIcon
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // form submission logic
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12 md:py-20 mt-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* LEFT COLUMN */}
          <div className="flex flex-col w-full">

            {/* Map Placeholder or Grey Box */}
            <div className="w-full h-[400px] bg-[#e6e6e6] flex items-center justify-center rounded-sm mb-12">
              {/* <ImageIcon className="w-16 h-16 text-gray-500" /> */}
              <div className="flex flex-col items-center justify-center text-gray-500">
                <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6" />
                </svg>
                {/* <div className="text-4xl">☹</div> */}
              </div>
            </div>

            {/* Contact Details row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-[#8B1E4F] mb-12">

              {/* Location */}
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-3" strokeWidth={1.5} />
                <h3 className="font-bold mb-2">Location:</h3>
                <p className="text-[15px] leading-relaxed max-w-[200px]">
                  Embassy Manyata Business Park,
                  <br />
                  Block D3, Nagavara, Karnataka, 560045
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-3" strokeWidth={1.5} />
                <h3 className="font-bold mb-2">Email:</h3>
                <a href="mailto:help@petoty.com" className="text-[15px] hover:underline">
                  help@petoty.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-3" strokeWidth={1.5} />
                <h3 className="font-bold mb-2">Phone:</h3>
                <a href="tel:+919000696496" className="text-[15px] hover:underline">
                  +91 9000696496
                </a>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6 text-[#52002B] mt-4">
              <a href="#" className="hover:text-[#8B1E4F]">
                <Instagram className="w-7 h-7" strokeWidth={2} />
              </a>
              <a href="#" className="hover:text-[#8B1E4F]">
                <Facebook className="w-7 h-7" strokeWidth={2} />
              </a>
              {/* Custom SVG for Pinterest, since Lucide doesn't have it by default or to match X */}
              <a href="#" className="hover:text-[#8B1E4F] flex items-center justify-center">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.366 18.622 0 12.017 0z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#8B1E4F] flex items-center justify-center">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#8B1E4F]">
                <Youtube className="w-8 h-8" strokeWidth={2} />
              </a>
              <a href="#" className="hover:text-[#8B1E4F]">
                <Linkedin className="w-7 h-7" strokeWidth={2} />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN - Let's Talk Form */}
          <div className="flex flex-col w-full pl-0 lg:pl-10">

            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#52002B] mb-6">Let's Talk</h2>
              <p className="text-[15px] font-medium text-[#8B1E4F] leading-relaxed max-w-sm mx-auto">
                To request a quote our products, contact us directly or fill out the form and we will get back to you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

              {/* Name field */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#52002B] mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your First Name"
                  className="w-full py-2 bg-transparent border-t-0 border-x-0 border-b border-gray-300 focus:border-[#52002B] focus:ring-0 outline-none text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#52002B] mb-1">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email Here"
                    className="w-full py-2 pr-8 bg-transparent border-t-0 border-x-0 border-b border-gray-300 focus:border-[#52002B] focus:ring-0 outline-none text-gray-700 placeholder-gray-400"
                  />
                  {(formData.email.includes('@') && formData.email.includes('.')) || formData.email.length > 5 ? (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#52002B] rounded-full p-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#52002B] rounded-full p-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* Phone number field */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#52002B] mb-1">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full py-2 bg-transparent border-t-0 border-x-0 border-b border-gray-300 focus:border-[#52002B] focus:ring-0 outline-none text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Comment field */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#52002B] mb-1">Comment</label>
                <div className="relative">
                  <input
                    type="text"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Comment"
                    className="w-full pt-2 pb-6 pr-8 bg-transparent border-t-0 border-x-0 border-b border-gray-300 focus:border-[#52002B] focus:ring-0 outline-none text-gray-700 placeholder-gray-400"
                  />
                  <div className="absolute right-0 bottom-2 bg-[#52002B] rounded-full p-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#52002B] hover:bg-[#3d0020] transition-colors text-white font-bold py-4 rounded-sm mt-4 tracking-wider"
              >
                SEND
              </button>

            </form>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
