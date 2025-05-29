
import { Heart, Brain, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-lavender-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Brain className="w-8 h-8 text-skyblue-300" />
                <Heart className="w-6 h-6 text-lavender-300" />
              </div>
              <span className="text-2xl font-bold">Echo Healthy Ageing</span>
            </div>
            <p className="text-lavender-200 leading-relaxed">
              Empowering families through early detection and compassionate support 
              in the journey of cognitive wellness.
            </p>
            <p className="text-skyblue-300 font-semibold">
              Science-backed. Soul-centered. Family-focused.
            </p>
          </div>
          
          {/* Resources section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-lavender-100">Resources</h3>
            <ul className="space-y-3 text-lavender-200">
              <li><a href="#" className="hover:text-skyblue-300 transition-colors">Early Detection Guide</a></li>
              <li><a href="#" className="hover:text-skyblue-300 transition-colors">Family Support Groups</a></li>
              <li><a href="#" className="hover:text-skyblue-300 transition-colors">Educational Webinars</a></li>
              <li><a href="#" className="hover:text-skyblue-300 transition-colors">Professional Network</a></li>
              <li><a href="#" className="hover:text-skyblue-300 transition-colors">Research & Studies</a></li>
            </ul>
          </div>
          
          {/* Contact section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-lavender-100">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lavender-200">
                <Mail className="w-5 h-5 text-skyblue-300" />
                <span>support@echohealthyageing.org</span>
              </div>
              <div className="flex items-center gap-3 text-lavender-200">
                <Phone className="w-5 h-5 text-skyblue-300" />
                <span>1-800-ECHO-HELP</span>
              </div>
            </div>
            <div className="bg-lavender-800 rounded-lg p-4">
              <p className="text-sm text-lavender-200 mb-3">Stay updated with our latest resources:</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 rounded-lg bg-lavender-700 text-white placeholder-lavender-300 border border-lavender-600 focus:outline-none focus:border-skyblue-300"
                />
                <button className="bg-skyblue-500 hover:bg-skyblue-600 px-4 py-2 rounded-lg transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-lavender-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-lavender-300 text-sm">
              © 2024 Echo Healthy Ageing. Made with 💜 for families everywhere.
            </div>
            <div className="flex gap-6 text-sm text-lavender-300">
              <a href="#" className="hover:text-skyblue-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-skyblue-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-skyblue-300 transition-colors">Accessibility</a>
            </div>
          </div>
          <div className="text-center mt-6 text-lavender-400 text-sm">
            Dementia Awareness Week 2024 • Together, we can make a difference
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
