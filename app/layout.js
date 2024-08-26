import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reyan John Narvaja",
  description: "Reyan John Narvaja | Web Developer / SEO Specialist",
  openGraph: {
    images: [
        {
            url: './page covers/Home page cover.webp',
            height: 628,
            width: 1200,
            alt: 'Reyan John Narvaja'
        }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='light'></div>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
