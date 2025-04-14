import ContactForm from "@/components/ContactForm";
import {
  FaHeart,
  FaChevronDown,
  FaRocket,
  FaShieldAlt,
  FaMobileAlt,
  FaChartLine,
  FaCog,
  FaHeadset,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaCheck,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://proposals.aghadiinfotech.com/wp-content/uploads/2021/10/pattern.svg')] bg-cover animate-pulse"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <img
            src="https://proposals.aghadiinfotech.com/wp-content/uploads/2021/10/logo.svg"
            alt="Aghadi Infotech Logo"
            className="mx-auto mb-8 w-48 md:w-56 transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-300">
              Web Design & Development
            </span>
            <br />
            Proposal
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 mx-auto max-w-2xl">
            Crafting digital experiences that drive results
          </p>

          <div className="my-10">
            <hr className="border-t-2 border-white w-32 mx-auto opacity-50" />
            <p className="uppercase mt-4 tracking-widest text-sm opacity-80">
              Prepared for
            </p>
            <p className="text-2xl mt-2 font-medium">Client Name</p>
          </div>

          <div className="absolute bottom-1 w-full animate-bounce">
            <FaChevronDown className="mx-auto text-2xl opacity-70" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
              Challenge
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
              Identifying The Problem
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-8"></div>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Slate Executive Search Group faces website stability and load
                speed optimization issues that affect user experience and
                conversion rates.
              </p>
              <p>
                The current Bullhorn CRM integration uses an outdated Iframe
                setup that limits functionality and control over displayed data.
              </p>
              <p>
                The website's architecture doesn't scale well with growing
                business needs and candidate database.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://proposals.aghadiinfotech.com/wp-content/uploads/2021/10/Business-failure-bro.svg"
              alt="Problem Illustration"
              className="w-full max-w-md mx-auto transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="bg-white py-20 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://proposals.aghadiinfotech.com/wp-content/uploads/2021/10/Problem-solving-pana-1.svg"
              alt="Solution Illustration"
              className="w-full max-w-md mx-auto transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <div>
            <span className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
              Our Approach
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
              Strategic Solution
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-8"></div>

            {[
              "Custom WordPress Development",
              "API-based CRM Integration",
              "Comprehensive Support",
            ].map((title, i) => (
              <div key={i} className="flex items-start mb-6">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <FaCheck className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-700">
                    {i === 0 &&
                      "Modern, stable architecture with optimized performance"}
                    {i === 1 &&
                      "Seamless Bullhorn integration with full data control"}
                    {i === 2 &&
                      "2 months free support with post-launch training"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 w-full">
          <svg
            className="w-full"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"
              fill="#f9fafb"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Key Features & Benefits
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive solution addresses all your challenges with
            cutting-edge technology
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaRocket />,
              title: "Blazing Fast Performance",
              desc: "Optimized architecture for lightning-fast load times",
            },
            {
              icon: <FaShieldAlt />,
              title: "Secure Integration",
              desc: "API-based CRM connection with enterprise-grade security",
            },
            {
              icon: <FaMobileAlt />,
              title: "Responsive Design",
              desc: "Flawless experience across all devices and screen sizes",
            },
            {
              icon: <FaChartLine />,
              title: "SEO Optimized",
              desc: "Built for search engine visibility and lead generation",
            },
            {
              icon: <FaCog />,
              title: "Easy Management",
              desc: "User-friendly CMS for effortless content updates",
            },
            {
              icon: <FaHeadset />,
              title: "Dedicated Support",
              desc: "Ongoing maintenance and technical assistance",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-3xl text-indigo-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Ready To Transform Your Digital Presence?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 to-purple-800 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="https://proposals.aghadiinfotech.com/wp-content/uploads/2021/10/logo.svg"
                alt="Aghadi Infotech Logo"
                className="h-8 mb-4"
              />
              <p className="text-gray-300 mb-4">
                Innovating for a better digital future
              </p>
              <div className="flex space-x-4">
                {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "UI/UX Design",
                  "Digital Marketing",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Case Studies", "Careers", "Blog"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0 text-sm text-gray-400">
              Made with <FaHeart className="inline text-red-400" /> in India ©{" "}
              {new Date().getFullYear()} Aghadi Infotech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {["Sitemap", "Accessibility"].map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
