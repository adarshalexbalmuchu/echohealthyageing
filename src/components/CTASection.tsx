
import { Button } from "@/components/ui/button";
import { Heart, Brain } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-lavender-600 to-skyblue-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full opacity-50 animate-gentle-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full opacity-30 animate-gentle-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Icon header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="w-12 h-12 text-white/90" />
            <Brain className="w-12 h-12 text-white/90" />
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Take the First Step Toward 
            <span className="block text-skyblue-100">Hope & Early Detection</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white/90 max-w-3xl mx-auto">
            Join thousands of families who have found strength, support, and hope through 
            our compassionate approach to cognitive wellness. Your journey begins with a single step.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-lavender-700 hover:bg-white/90 px-10 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Download Your Free Early Detection Guide
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-lavender-700 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Join Our Community
            </Button>
          </div>
          
          {/* Additional encouragement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-white/95 mb-4">
              <span className="font-semibold">This Dementia Awareness Week,</span> take action that could change everything. 
              Early detection saves precious time, preserves independence, and strengthens family bonds.
            </p>
            <p className="text-white/80 text-base">
              ✨ Free resources • No commitment required • Immediate access • Family-centered support
            </p>
          </div>
          
          {/* Urgency note */}
          <div className="mt-8 text-skyblue-100 text-sm font-medium">
            Special Dementia Awareness Week offer expires soon
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
