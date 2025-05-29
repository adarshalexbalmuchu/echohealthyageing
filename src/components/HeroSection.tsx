
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender-50 via-white to-skyblue-50 overflow-hidden">
      {/* Ken Burns Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lavender-100/30 to-skyblue-100/30 animate-gentle-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-lavender-200/40 to-skyblue-200/40 rounded-full opacity-60 animate-[gentle-pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-skyblue-200/40 to-lavender-200/40 rounded-full opacity-50 animate-[gentle-pulse_8s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-br from-lavender-300/30 to-skyblue-300/30 rounded-full opacity-40 animate-[gentle-pulse_10s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-lavender-300/20 rounded-full animate-[float_15s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Campaign badge with enhanced animation */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-lavender-200/50 animate-[fade-in_0.8s_ease-out]">
            <Heart className="w-5 h-5 text-lavender-600 animate-[heartbeat_2s_ease-in-out_infinite]" />
            <span className="text-lavender-800 font-semibold">Dementia Awareness Week 2024</span>
          </div>
          
          {/* Main heading with staggered animation */}
          <h1 className="text-5xl md:text-7xl font-bold text-lavender-900 mb-6 leading-tight animate-[fade-in_1s_ease-out_0.2s_both]">
            Unlocking{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 via-skyblue-600 to-lavender-700 animate-[gradient-shift_3s_ease-in-out_infinite]">
              Cognitive Wellness
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-lavender-800 mb-4 animate-[fade-in_1s_ease-out_0.4s_both]">
            Early Detection Matters
          </h2>
          
          {/* Subheader with typewriter effect simulation */}
          <p className="text-xl md:text-2xl text-lavender-700 mb-12 leading-relaxed max-w-3xl mx-auto animate-[fade-in_1s_ease-out_0.6s_both]">
            Join Echo Healthy Ageing in the fight against dementia with our compassionate, 
            science-backed support system designed for families and caregivers.
          </p>
          
          {/* CTA buttons with enhanced effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fade-in_1s_ease-out_0.8s_both]">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-lavender-600 to-lavender-700 hover:from-lavender-700 hover:to-lavender-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Download Early Detection Guide
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-lavender-600 text-lavender-700 hover:bg-lavender-50 hover:border-lavender-700 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Join Our Campaign
            </Button>
          </div>
          
          {/* Trust indicator with enhanced styling */}
          <div className="mt-12 text-lavender-600 animate-[fade-in_1s_ease-out_1s_both]">
            <p className="text-sm font-medium">Trusted by families and healthcare professionals worldwide</p>
            <div className="flex justify-center gap-8 mt-4 text-xs text-lavender-500">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-lavender-400 rounded-full animate-pulse"></div>
                10,000+ Families
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-skyblue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                Evidence-Based
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-lavender-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                Scientifically Validated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
