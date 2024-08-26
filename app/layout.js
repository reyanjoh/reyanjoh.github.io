import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reyan John Narvaja",
  description: "Reyan John Narvaja | Web Developer / SEO Specialist",
  openGraph: {
    title: "Reyan John Narvaja",
    description: "Reyan John Narvaja | Web Developer / SEO Specialist",
    url: 'https://reyanjoh.github.io/',
    siteName: 'Reyan John Narvaja Portfolio',
    images: [
      {
        url:'https://reyanjoh.github.io/page%20covers/Home%20page%20cover.webp',
        width: '1200',
        height: '628',
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
