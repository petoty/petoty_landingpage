"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  User,
  PawPrint,
  ShoppingBag,
  Heart,
  FileText,
  ChevronRight,
  Camera,
  Pencil,
  LogOut,
  Home,
  Bell,
  Shield,
} from "lucide-react";

/* ── sidebar config ── */
type SidebarItem = {
  id: string;
  label: string;
  subLabel: string;
  icon: React.ElementType;
  badge: string | null;
  badgeColor: string;
};

const sidebarItems: SidebarItem[] = [
  {
    id: "profile",
    label: "My Profile",
    subLabel: "Create a unique profile",
    icon: User,
    badge: null,
    badgeColor: "",
  },
  {
    id: "pet-profile",
    label: "My Pet Profile",
    subLabel: "Create pet profile to personalize your experience",
    icon: PawPrint,
    badge: "Add pet",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    id: "orders",
    label: "My Orders",
    subLabel: "Check your order status",
    icon: ShoppingBag,
    badge: null,
    badgeColor: "",
  },
  {
    id: "wishlist",
    label: "My Wishlist",
    subLabel: "Shop from your wishlist",
    icon: Heart,
    badge: null,
    badgeColor: "",
  },
  {
    id: "medical",
    label: "My Medical Records",
    subLabel: "Check your EMR",
    icon: FileText,
    badge: null,
    badgeColor: "",
  },
  {
    id: "notifications",
    label: "Notifications",
    subLabel: "Manage your alerts",
    icon: Bell,
    badge: null,
    badgeColor: "",
  },
  {
    id: "privacy",
    label: "Privacy & Security",
    subLabel: "Manage account security",
    icon: Shield,
    badge: null,
    badgeColor: "",
  },
];

/* ── helpers ── */
/** mask a phone like "9876543210" → "98765*****" */
function maskPhone(phone: string) {
  if (!phone) return "";
  return phone.slice(0, 5) + "*".repeat(Math.max(0, phone.length - 5));
}

/** derive initials from name, fallback to phone digits */
function initials(name: string, phone: string) {
  if (name.trim()) {
    return name
      .trim()
      .split(" ")
      .map((w) => w[0]?.toUpperCase() ?? "")
      .slice(0, 2)
      .join("");
  }
  return phone ? phone.slice(0, 2) : "?";
}

/* ── page ── */
export default function MyAccountPage() {
  const [activeSection, setActiveSection] = useState("profile");
  const [isEditing, setIsEditing]         = useState(false);
  const [phone, setPhone]                 = useState("");      // from localStorage
  const [completionPct, setCompletionPct] = useState(0);

  const [form, setForm] = useState({
    fullName:        "",
    email:           "",
    mobile:          "",          // pre-filled from login
    dob:             "",
    gender:          "",
    alternateMobile: "",
    address:         "",
    pincode:         "",
  });

  /* read phone from localStorage on mount */
  useEffect(() => {
    const saved = localStorage.getItem("petoty_phone") ?? "";
    setPhone(saved);
    setForm((prev) => ({
      ...prev,
      mobile: saved ? `+91${saved}` : "",
    }));
  }, []);

  /* recompute completion % whenever form changes */
  useEffect(() => {
    const fields = Object.values(form);
    const filled  = fields.filter((v) => v.trim() !== "").length;
    setCompletionPct(Math.round((filled / fields.length) * 100));
  }, [form]);

  const handleInputChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSave = () => setIsEditing(false);

  /* ── render ── */
  return (
    <div className="min-h-screen bg-[#FBF7F8]">

      {/* breadcrumb */}
      <div className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="flex items-center gap-1 hover:text-[#8B1E4F] transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <span className="text-[#52002B] font-semibold">My Account</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-6 items-start">

          {/* ────── SIDEBAR ────── */}
          <aside className="w-[300px] shrink-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">

            {/* user card */}
            <div
              className="p-6"
              style={{ background: "linear-gradient(135deg, #52002B 0%, #8B1E4F 100%)" }}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-white text-xl font-bold shadow-md select-none">
                    {initials(form.fullName, phone)}
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Camera className="w-2.5 h-2.5 text-[#8B1E4F]" />
                  </button>
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-tight">
                    {form.fullName ? `Hey, ${form.fullName}` : "Hey there!"}
                  </p>
                  <p className="text-white/70 text-xs mt-0.5 font-medium">
                    {phone ? `Logged in via +91${maskPhone(phone)}` : "Logged in"}
                  </p>
                </div>
              </div>
            </div>

            {/* nav */}
            <nav className="py-2">
              {sidebarItems.map((item) => {
                const Icon     = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-start gap-4 px-5 py-4 text-left transition-all duration-200 group border-l-[3px] ${
                      isActive
                        ? "bg-pink-50 border-[#8B1E4F]"
                        : "border-transparent hover:bg-gray-50 hover:border-[#D4A0B8]"
                    }`}
                  >
                    <div
                      className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isActive
                          ? "bg-[#8B1E4F] text-white shadow-sm"
                          : "bg-pink-50 text-[#8B1E4F] group-hover:bg-pink-100"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[13.5px] font-semibold ${isActive ? "text-[#52002B]" : "text-gray-700"}`}>
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-gray-400 leading-snug mt-0.5">
                        {item.subLabel}
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 mt-1 transition-colors ${
                        isActive ? "text-[#8B1E4F]" : "text-gray-300 group-hover:text-[#8B1E4F]"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* logout */}
            <div className="px-5 py-4 border-t border-gray-100">
              <button
                onClick={() => {
                  localStorage.removeItem("petoty_phone");
                  window.location.href = "/";
                }}
                className="flex items-center gap-3 text-[13px] font-semibold text-gray-500 hover:text-red-500 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                  <LogOut className="w-4 h-4" />
                </div>
                Logout
              </button>
            </div>
          </aside>

          {/* ────── MAIN CONTENT ────── */}
          <main className="flex-1 min-w-0">

            {/* Profile section */}
            {activeSection === "profile" && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                {/* header row */}
                <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-gray-100">
                  <div>
                    <div className="flex items-center gap-3">
                      <h1
                        className="text-2xl font-bold text-gray-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Profile Details
                      </h1>
                      {completionPct > 0 && (
                        <span className="bg-amber-50 text-amber-600 border border-amber-200 text-[11px] font-bold px-3 py-1 rounded-full">
                          {completionPct}% Completed
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-gray-400 mt-1">
                      You can add or edit your profile details
                    </p>
                  </div>
                  <button
                    onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 shadow-sm ${
                      isEditing
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "bg-[#52002B] hover:bg-[#8B1E4F] text-white"
                    }`}
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    {isEditing ? "Save" : "Edit"}
                  </button>
                </div>

                {/* avatar */}
                <div className="flex justify-center pt-8 pb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-[#f0d5e3] bg-pink-50 flex items-center justify-center overflow-hidden shadow-md">
                      {form.fullName ? (
                        <span className="text-[#8B1E4F] text-3xl font-bold select-none">
                          {initials(form.fullName, phone)}
                        </span>
                      ) : (
                        <User className="w-14 h-14 text-[#D4A0B8]" />
                      )}
                    </div>
                    {isEditing && (
                      <button className="absolute bottom-1 right-1 w-7 h-7 bg-[#8B1E4F] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#52002B] transition-colors">
                        <Camera className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* form */}
                <div className="px-8 pb-10">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-6">

                    {/* Full Name */}
                    <Field
                      label="Full Name"
                      value={form.fullName}
                      placeholder="Enter your full name"
                      editing={isEditing}
                      onChange={(v) => handleInputChange("fullName", v)}
                    />

                    {/* Email */}
                    <Field
                      label="Email Address"
                      value={form.email}
                      placeholder="Enter your email"
                      editing={isEditing}
                      onChange={(v) => handleInputChange("email", v)}
                    />

                    {/* Mobile — pre-filled, not editable */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide">
                        Mobile Number <span className="text-[#8B1E4F]">*</span>
                      </label>
                      <input
                        disabled
                        value={form.mobile}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/60 text-[14px] text-gray-600 cursor-default outline-none"
                        placeholder="+91 XXXXXXXXXX"
                      />
                      <p className="text-[10px] text-gray-400">Registered mobile — cannot be changed</p>
                    </div>

                    {/* Date of Birth */}
                    <Field
                      label="Date of Birth"
                      value={form.dob}
                      placeholder="dd-mm-yyyy"
                      editing={isEditing}
                      type={isEditing ? "date" : "text"}
                      onChange={(v) => handleInputChange("dob", v)}
                    />

                    {/* Gender */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide">
                        Gender
                      </label>
                      <select
                        disabled={!isEditing}
                        value={form.gender}
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-[14px] text-gray-800 outline-none transition-all appearance-none ${
                          isEditing
                            ? "border-[#8B1E4F] ring-1 ring-[#8B1E4F]/20 bg-white cursor-pointer"
                            : "border-gray-200 bg-gray-50/60 cursor-default text-gray-500"
                        }`}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not">Prefer not to say</option>
                      </select>
                    </div>

                    {/* Alternate Mobile */}
                    <Field
                      label="Alternate Mobile Number"
                      value={form.alternateMobile}
                      placeholder="Alternate number"
                      editing={isEditing}
                      onChange={(v) => handleInputChange("alternateMobile", v)}
                    />

                    {/* Address */}
                    <div className="col-span-2 flex flex-col gap-1.5">
                      <label className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide">
                        Delivery Address
                      </label>
                      <textarea
                        disabled={!isEditing}
                        value={form.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        rows={3}
                        className={`w-full px-4 py-3 rounded-xl border text-[14px] text-gray-800 outline-none transition-all resize-none ${
                          isEditing
                            ? "border-[#8B1E4F] ring-1 ring-[#8B1E4F]/20 bg-white"
                            : "border-gray-200 bg-gray-50/60 cursor-default"
                        }`}
                        placeholder="Enter your delivery address"
                      />
                    </div>

                    {/* Pincode */}
                    <Field
                      label="Pincode"
                      value={form.pincode}
                      placeholder="6-digit pincode"
                      editing={isEditing}
                      onChange={(v) => handleInputChange("pincode", v)}
                    />
                  </div>

                  {/* Save button at bottom (edit mode) */}
                  {isEditing && (
                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={handleSave}
                        className="px-8 py-3 bg-[#52002B] hover:bg-[#8B1E4F] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm"
                      >
                        Save Changes
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Placeholder for other sections */}
            {activeSection !== "profile" && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center py-24 gap-4">
                <div className="w-20 h-20 rounded-full bg-pink-50 flex items-center justify-center">
                  {(() => {
                    const item = sidebarItems.find((s) => s.id === activeSection);
                    const Icon = item?.icon ?? User;
                    return <Icon className="w-10 h-10 text-[#8B1E4F]" />;
                  })()}
                </div>
                <h2
                  className="text-xl font-bold text-gray-800"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {sidebarItems.find((s) => s.id === activeSection)?.label}
                </h2>
                <p className="text-gray-400 text-sm">
                  {sidebarItems.find((s) => s.id === activeSection)?.subLabel}
                </p>
                <button className="mt-2 px-6 py-2.5 bg-[#52002B] text-white text-sm font-bold rounded-full hover:bg-[#8B1E4F] transition-all shadow-sm">
                  Coming Soon
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

/* ── tiny reusable field component ── */
function Field({
  label,
  value,
  placeholder,
  editing,
  type = "text",
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  editing: boolean;
  type?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide">
        {label}
      </label>
      <input
        disabled={!editing}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 rounded-xl border text-[14px] text-gray-800 outline-none transition-all ${
          editing
            ? "border-[#8B1E4F] ring-1 ring-[#8B1E4F]/20 bg-white"
            : "border-gray-200 bg-gray-50/60 cursor-default"
        }`}
        placeholder={placeholder}
      />
    </div>
  );
}
