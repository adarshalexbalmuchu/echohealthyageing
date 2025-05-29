
import { Heart, Brain } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Brain className="w-8 h-8 text-lavender-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-lavender-900">
              About Our Campaign
            </h2>
            <Heart className="w-8 h-8 text-skyblue-500" />
          </div>
          
          {/* Main content */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-lavender-800 leading-relaxed">
              Echo Healthy Ageing was born from a simple yet powerful belief: 
              <span className="font-semibold text-lavender-700"> every family deserves hope, support, and early intervention</span> 
              in their journey with cognitive health.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-lavender-50 rounded-2xl p-8 text-left">
                <h3 className="text-2xl font-bold text-lavender-900 mb-4">Our Mission</h3>
                <p className="text-lavender-700 leading-relaxed">
                  To bridge the gap between early detection and comprehensive support, providing families 
                  with the tools, knowledge, and community they need during one of life's most challenging journeys.
                </p>
              </div>
              
              <div className="bg-skyblue-50 rounded-2xl p-8 text-left">
                <h3 className="text-2xl font-bold text-lavender-900 mb-4">Why Early Detection?</h3>
                <p className="text-lavender-700 leading-relaxed">
                  Research shows that early intervention can significantly improve quality of life, 
                  preserve independence longer, and provide families with precious time to plan and bond together.
                </p>
              </div>
            </div>
            
            {/* Call to emotion */}
            <div className="bg-gradient-to-r from-lavender-100 to-skyblue-100 rounded-2xl p-8 mt-12">
              <p className="text-lg text-lavender-800 italic leading-relaxed">
                "During Dementia Awareness Week, we stand together as a community committed to changing 
                how families experience cognitive health challenges. You are not alone in this journey."
              </p>
              <div className="mt-4 text-lavender-600 font-semibold">
                — The Echo Healthy Ageing Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
