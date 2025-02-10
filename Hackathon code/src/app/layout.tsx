import Navibar from "./components/globalcomponents/Navbar";
import "./globals.css";
import poppin from "./components/globalcomponents/Poppin";
import Footer from "./components/globalcomponents/footer";
import Herosection from "./components/globalcomponents/herosectio";
import Marketing from "./components/globalcomponents/Qualitylist";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      
   <ClerkProvider>

    <html lang="en">
      <body className={`${poppin.className}`}>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>   
        <Navibar />
        <Herosection />
        {children}
      <Marketing/>
        <Footer />
      </body>
    </html>
      
   </ClerkProvider>     
  );
}
