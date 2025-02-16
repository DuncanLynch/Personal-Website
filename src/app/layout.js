import { Kanit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});


export const metadata = {
  title: "Duncan Lynch",
  description: "ME",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
