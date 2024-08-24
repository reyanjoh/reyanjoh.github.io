import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import light from './light.module.css'
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reyan John Narvaja",
  description: "Reyan John Narvaja | Web Developer / SEO Specialist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={light.light}></div>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
