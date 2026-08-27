import Email from "../assets/logos/Contact-mail.png";
import ContactModal from "../components/ContactModal";
import { useState } from "react";

function Contact() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="bg-[#0A0A0A] px-[50px] pb-[20px]">
      <div className="bg-[#0A0A0A] pl-[15%] text-white flex gap-50 py-[30px] border-x border-b border-[#B88A46]">
        <div className="flex gap-10">
          <a>
            <img className="w-20" src={Email} />
          </a>
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-[25px] font-thin tracking-[2px] text-white leading-none pb-[10px] uppercase">
              Let's Work Together
            </h2>
            <p className="tracking-[1px] text-[18px] font-thin">
              Have a project in mind or want to collaborate?
            </p>
          </div>
        </div>

        <div className="pt-[10px]">
          <button
            onClick={() => setIsContactOpen(true)}
            class="bg-[#B88A46] text-[14px] hover:bg-black hover:text-[#B88A46] text-black py-3 px-7 border border-[#B88A46] uppercase rounded"
          >
            <a className="inline-flex items-center gap-5">
              Get in touch
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </button>

          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
