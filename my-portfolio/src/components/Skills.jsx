import Frontend from "../assets/logos/Frontend.png";
import Backend from "../assets/logos/Backend.png";
import Wordpressgold from "../assets/logos/Wordpress-gold.png";
import Cart from "../assets/logos/Cart.png";
import Tools from "../assets/logos/Tools.png";

function Skills() {
  return (
    <section
      className="bg-[#0A0A0A] pl-[40px] py-[40px] border-t border-[#B88A46]"
      id="Skills"
    >
      <div className="project-content">
        <h2 className="font-['Cormorant_Garamond'] text-[20px] font-normal tracking-[2px] text-white leading-none pb-[20px] uppercase">
          development skills
        </h2>
      </div>
      <div className="flex gap-10 pl-[40px]">
        <div className="gap-1">
          <a className="flex gap-3">
            <img className="max-w-10" src={Frontend} alt="FrontEnd Logo" />
            <h4 className="text-white text-[14px] uppercase pt-[6px] tracking-[2px]">
              frontend
            </h4>
          </a>
          <div className="text-white">
            <ul class="list-disc list-outside pl-5 space-y-2 text-[13px] pt-[15px] pl-[70px] tracking-[1px]">
              <li>React</li>
              <li>Javascript(ES6+)</li>
              <li>HTML5 / CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <div className="gap-1">
          <a className="flex gap-3">
            <img className="max-w-10" src={Backend} alt="FrontEnd Logo" />
            <h4 className="text-white text-[14px] uppercase pt-[6px] tracking-[2px]">
              backend
            </h4>
          </a>
          <div className="text-white">
            <ul class="list-disc list-outside pl-5 space-y-2 text-[13px] pt-[15px] pl-[70px] tracking-[1px]">
              <li>Node</li>
              <li>RESTfull APIs</li>
              <li>Python</li>
              <li>PHP (Novice)</li>
            </ul>
          </div>
        </div>

        <div className="gap-1">
          <a className="flex gap-3">
            <img className="max-w-10" src={Wordpressgold} alt="FrontEnd Logo" />
            <h4 className="text-white text-[14px] uppercase pt-[6px] tracking-[2px]">
              wordpress
            </h4>
          </a>
          <div className="text-white">
            <ul class="list-disc list-outside pl-5 space-y-2 text-[13px] pt-[15px] pl-[70px] tracking-[1px]">
              <li>Custom Themes</li>
              <li>Elementor</li>
              <li>WooCommerce</li>
              <li>ACF / Custom Fields</li>
            </ul>
          </div>
        </div>

        <div className="gap-1">
          <a className="flex gap-3">
            <img className="max-w-10" src={Cart} alt="FrontEnd Logo" />
            <h4 className="text-white text-[14px] uppercase pt-[6px] tracking-[2px]">
              e-commerce
            </h4>
          </a>
          <div className="text-white">
            <ul class="list-disc list-outside pl-5 space-y-2 text-[13px] pt-[15px] pl-[70px] tracking-[1px]">
              <li>Woocommerce</li>
              <li>Shopify (Learning)</li>
              <li>Product Management</li>
              <li>Payment Integration</li>
            </ul>
          </div>
        </div>

        <div className="gap-1">
          <a className="flex gap-3">
            <img className="max-w-10" src={Tools} alt="FrontEnd Logo" />
            <h4 className="text-white text-[14px] uppercase pt-[6px] tracking-[2px]">
              tools
            </h4>
          </a>
          <div className="text-white">
            <ul class="list-disc list-outside pl-5 space-y-2 text-[13px] pt-[15px] pl-[70px] tracking-[1px]">
              <li>Git & GitHub</li>
              <li>Photoshop</li>
              <li>VS Code</li>
              <li>Chrome DevTools</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
