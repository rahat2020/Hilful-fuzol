import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "react-feather";

const AboutHero = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
      <Image
        src="/assets/program-1.jpg"
        alt="Hero Image"
        layout="fill"
        loading="lazy"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Innovate. Create. Inspire.
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Shaping the future through technology and creativity
          </p>
          <Link
            href="#mission"
            className="bg-brand text-white-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 hover:text-green-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="text-white w-12 h-12 animate-bounce" />
      </div>
    </section>
  );
};

export default AboutHero;
