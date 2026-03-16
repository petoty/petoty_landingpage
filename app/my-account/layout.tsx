import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Account – Petoty",
  description: "Manage your Petoty account, profile, orders, wishlist and more.",
};

export default function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
