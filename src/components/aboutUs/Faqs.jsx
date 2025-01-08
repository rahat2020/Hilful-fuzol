import { useState } from "react";
import { ChevronDown } from "react-feather";
import ComponentHeader from "@/UI/ComponentHeader";

const faqsData = [
  {
    question: "What makes TechInnovate different?",
    answer:
      "Our unique blend of cutting-edge technology, user-centric design, and commitment to sustainability sets us apart in the industry.",
  },
  {
    question: "Are you hiring?",
    answer:
      "We're always on the lookout for talented individuals who share our passion for innovation. Check our careers page for current openings.",
  },
  {
    question: "Do you offer internships?",
    answer:
      "Yes, we have internship programs across various departments. These are great opportunities for students and recent graduates to gain hands-on experience.",
  },
  {
    question: "How can I get in touch for business inquiries?",
    answer:
      "For business inquiries, please reach out to our partnerships team at partnerships@techinnovate.com.",
  },
];

const Faqs = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <ComponentHeader
          title=" Frequently Asked Questions"
          titleClasses="text-4xl"
          customStyles="text-4xl font-bold text-start mb-8 text-brand"
        />
        <div className="space-y-6">
          {faqsData?.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    activeAccordion === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`mt-4 text-gray-600 transition-all duration-300 ease-in-out ${
                  activeAccordion === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
