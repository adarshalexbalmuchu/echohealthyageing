
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Heart, Download } from "lucide-react";

const StickyCtaBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > 75 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-[slide-up_0.5s_ease-out]">
      <div className="bg-gradient-to-r from-lavender-600 to-skyblue-600 shadow-2xl border-t border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-white animate-[heartbeat_2s_ease-in-out_infinite]" />
              <div>
                <p className="text-white font-semibold text-lg">
                  Ready to take the first step?
                </p>
                <p className="text-white/90 text-sm">
                  Download our free Early Detection Guide – thousands of families have found hope here.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                className="bg-white text-lavender-700 hover:bg-white/90 font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Get Free Guide
              </Button>
              
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white transition-colors duration-300 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCtaBanner;
