
import { Brain, Heart, TrendingUp, HandHeart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Scientifically-Backed Cognitive Tools",
      description: "Access evidence-based assessments and interventions developed by leading researchers in cognitive health and dementia care.",
      color: "lavender"
    },
    {
      icon: HandHeart,
      title: "Family-Centered Support System",
      description: "Connect with a caring community of families, caregivers, and professionals who understand your journey and offer genuine support.",
      color: "skyblue"
    },
    {
      icon: TrendingUp,
      title: "Special Resources for Dementia Awareness Week",
      description: "Exclusive access to workshops, webinars, and educational materials designed to empower families with knowledge and hope.",
      color: "lavender"
    },
    {
      icon: Heart,
      title: "Compassionate Care Approach",
      description: "Our approach combines cutting-edge science with deep empathy, ensuring that both cognitive health and emotional wellbeing are prioritized.",
      color: "skyblue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-lavender-50 to-skyblue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-lavender-900 mb-6">
            How We Support You
          </h2>
          <p className="text-xl text-lavender-700 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach combines scientific rigor with heartfelt care, 
            creating a support system that honors both the mind and the spirit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isLavender = benefit.color === "lavender";
            
            return (
              <div 
                key={index}
                className={`
                  bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2
                  ${isLavender ? 'border-t-4 border-lavender-400' : 'border-t-4 border-skyblue-400'}
                `}
              >
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center mb-6
                  ${isLavender ? 'bg-lavender-100' : 'bg-skyblue-100'}
                `}>
                  <Icon className={`
                    w-8 h-8 
                    ${isLavender ? 'text-lavender-600' : 'text-skyblue-600'}
                  `} />
                </div>
                
                <h3 className="text-2xl font-bold text-lavender-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-lavender-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Additional trust section */}
        <div className="mt-16 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-lavender-800 mb-4">
              <span className="font-semibold">Developed in partnership with</span> leading medical institutions, 
              research universities, and most importantly — families who have walked this path before you.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-lavender-600 font-medium">
              <span>Evidence-Based Research</span>
              <span>•</span>
              <span>Clinical Validation</span>
              <span>•</span>
              <span>Family-Tested</span>
              <span>•</span>
              <span>Professionally Endorsed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
