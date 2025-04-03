"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";
import Button from "@/components/ui/Buttons/Button";
import { navLinks } from "@/constants/path";
import Image from "next/image";


interface NavbarProps{
  active:boolean
}

const Navbar: React.FC<NavbarProps> = ({ active }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
 console.log("active",active);
 
 

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent border-b  border-gray-600  shadow-lg ">
      <div className="px-20 py-5 mx-auto flex justify-between items-center  ">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/icons/logo.png"
            alt="Billion Tags Logo"
            width={150}
            height={50}
            className=""
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="">
          {" "}
          <ul className={`flex gap-5 font-[700] text-[16px] ${active? "text-black" : "text-white"}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
               <p>{link.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-black/70 px-4 py-2 absolute w-full left-0 top-full">
          {navLinks.map((link) => (
            <li key={link.path} className="py-2 border-b border-gray-700">
              <Button
                onClick={() => {
                  setIsOpen(false);
                  router.push(link.path);
                }}
              >
                {link.name}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
export default Navbar