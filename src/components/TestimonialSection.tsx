
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lavender-900 mb-6">
              Stories of Hope
            </h2>
            <p className="text-xl text-lavender-700 leading-relaxed">
              Real families, real experiences, real hope through early detection and community support.
            </p>
          </div>
          
          {/* Main testimonial */}
          <div className="bg-gradient-to-r from-lavender-50 to-skyblue-50 rounded-3xl p-12 relative">
            <Quote className="w-16 h-16 text-lavender-300 absolute top-8 left-8" />
            
            <div className="relative z-10 pt-8">
              <blockquote className="text-2xl md:text-3xl text-lavender-800 leading-relaxed mb-8 italic">
                "When we first noticed Mom's memory changes, we felt lost and scared. 
                Echo Healthy Ageing didn't just give us tools for early detection — they gave us hope. 
                The support system helped our entire family navigate this journey with dignity and love. 
                Early intervention has meant we've had more quality time together, and for that, we're forever grateful."
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-lavender-200 flex items-center justify-center">
                  <span className="text-2xl font-bold text-lavender-700">MH</span>
                </div>
                <div>
                  <div className="text-xl font-semibold text-lavender-900">
                    Maria & Her Family
                  </div>
                  <div className="text-lavender-600">
                    EHA Community Member since 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Supporting stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-lavender-600 mb-2">89%</div>
              <div className="text-lavender-700">of families report feeling more confident about their journey</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-skyblue-600 mb-2">2.5x</div>
              <div className="text-lavender-700">earlier detection rate with our screening tools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lavender-600 mb-2">10,000+</div>
              <div className="text-lavender-700">families supported in our community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
