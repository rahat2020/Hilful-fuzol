"use client";
import { getCurrentYear } from "@/utils/appHelpers";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Map,
  Phone,
  Twitter,
} from "react-feather";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-50  text-gray-700 pt-10 pb-6 mt-20">
      {/* Footer Links Section */}
      <div className="container mx-auto px-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-1">
            <div className="">
              <Link href="/">
                <Image
                  src={"/assets/logo.jpg"}
                  alt="logo"
                  width={100}
                  height={80}
                  quality={100}
                  priority={true}
                />
              </Link>
            </div>
            <p className="text-gray-600 mb-4">
              Hilful Fozul is a non-profit an Islmic sunni organization that is
              dedicated to helping the poor and needy people in the society.
            </p>
            <p className="mb-2">
              Say Hello to:{" "}
              <a href="mailto:support@gmail.com" className="text-blue-500">
                khilfulfuzul2014@gmail.com{" "}
              </a>
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100019575372017"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-icons-facebook" />
              </Link>
              {/* <Link href="#" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-icons-twitter" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-icons-instagram" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-icons-linkedin" />
              </Link> */}
            </div>
          </div>

          {/* quick Links */}
          <div>
            <h3 className="font-semibold mb-2">Qucik links</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-green-700">
                  Home
                </a>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-green-700">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/programms" className="hover:text-green-700">
                  Our Programms
                </a>
              </li>
              <li>
                <Link href="/members" className="hover:text-green-700">
                  Our Members
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-green-700">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="font-semibold mb-2">Official Info</h3>
            <ul>
              <li className="mb-1 flex items-center">
                <span className="mr-2">
                  <Map className="w-4 h-4 text-green-500" />
                </span>{" "}
                East Khurushia, Padua, South Rangunia, Chattogram, Bangladesh
              </li>
              <li className="mb-1 flex items-center">
                <span className="mr-2">
                  <Mail className="w-4 h-4 text-green-500" />
                </span>{" "}
                <a
                  href="mailto:khilfulfuzul2014@gmail.com"
                  className="hover:text-green-700"
                >
                  khilfulfuzul2014@gmail.com
                </a>
              </li>
              <li className="mb-1 flex items-center">
                <span className="mr-2">
                  <Phone className="w-4 h-4 text-green-500" />
                </span>{" "}
                01856105870 or 01843399352
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
          <p>&copy; {getCurrentYear} Hilful Fozul. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-green-700">
              Terms and conditions
            </a>{" "}
            <span className="px-1">.</span>
            <a href="#" className="hover:text-green-700">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
