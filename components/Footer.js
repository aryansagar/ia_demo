export default function Footer() {
    return (
      <footer className="border-t bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
  
            {/* Logo + Tagline + Social Icons */}
            <div className="col-span-2">
              <img src="/images/logos/iaverse.png" alt="iAverse Logo" className="h-10 height-100 width-100" />
  
              <p className="text-gray-600 mt-4">
                Empowering industries with next-generation Digital Twin solutions.
              </p>
  
              {/* Social Icons */}
              <div className="flex space-x-4 mt-4 text-gray-700">
                <a href="#"><i className="ri-instagram-line text-xl"></i></a>
                <a href="#"><i className="ri-linkedin-fill text-xl"></i></a>
                <a href="#"><i className="ri-twitter-x-line text-xl"></i></a>
              </div>
            </div>
  
            {/* Company */}
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/our-works">Our Works</a></li>
              </ul>
            </div>
  
            {/* Solutions */}
            <div>
              <h3 className="font-semibold mb-3">Solutions</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="/itwinity">iTwinity</a></li>
                <li><a href="/isimulo">iSimulo</a></li>
              </ul>
            </div>
  
            {/* Support */}
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="/demo">Book a Demo</a></li>
                <li><a href="/linkedin">Join LinkedIn</a></li>
                <li><a href="/instagram">Join Instagram</a></li>
              </ul>
            </div>
          </div>
  
          {/* Lower Middle Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
  
            {/* Our Works */}
            <div>
              <h3 className="font-semibold mb-3">Our Works</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
              </ul>
            </div>
  
            {/* Blogs */}
            <div>
              <h3 className="font-semibold mb-3">Blogs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Case Study 1</li>
                <li>Case Study 2</li>
                <li>Case Study 3</li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-12 flex flex-col md:flex-row justify-between text-gray-600 text-sm">
  
            <div>
              <p>Headquarters: Bengaluru, India</p>
              <p>info@iaverse.com | www.iaverse.com</p>
              <p>© {new Date().getFullYear()} Iaverse Technologies Pvt. Ltd. | All Rights Reserved</p>
            </div>
  
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </div>
  
          </div>
        </div>
      </footer>
    );
  }
  