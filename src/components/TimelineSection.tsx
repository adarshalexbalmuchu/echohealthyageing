
import { CheckCircle, Heart, Users, Brain, Calendar } from "lucide-react";

const TimelineSection = () => {
  const timelineSteps = [
    {
      icon: Brain,
      title: "Early Recognition",
      description: "Notice subtle changes and understand the importance of early intervention",
      color: "lavender",
      delay: "0s"
    },
    {
      icon: CheckCircle,
      title: "Professional Assessment",
      description: "Connect with healthcare professionals for comprehensive evaluation",
      color: "skyblue",
      delay: "0.2s"
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Build a caring support network with other families on similar journeys",
      color: "lavender",
      delay: "0.4s"
    },
    {
      icon: Calendar,
      title: "Ongoing Care",
      description: "Access resources, tools, and community support for the road ahead",
      color: "skyblue",
      delay: "0.6s"
    },
    {
      icon: Heart,
      title: "Thriving Together",
      description: "Maintain dignity, love, and quality of life throughout the journey",
      color: "lavender",
      delay: "0.8s"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-lavender-50/50 relative overflow-hidden">
      {/* Curved divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-lavender-900 mb-6">
            Your Journey of Hope
          </h2>
          <p className="text-xl text-lavender-700 max-w-3xl mx-auto leading-relaxed">
            Every family's journey is unique, but you don't have to walk it alone. 
            Here's how Echo Healthy Ageing supports you at every step.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-lavender-300 to-skyblue-300 rounded-full opacity-30"></div>
            
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              const isLavender = step.color === "lavender";
              
              return (
                <div 
                  key={index}
                  className={`relative flex items-center mb-12 animate-[fade-in_0.8s_ease-out_${step.delay}_both]`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-lavender-200 flex items-center justify-center z-10">
                    <Icon className={`w-8 h-8 ${isLavender ? 'text-lavender-600' : 'text-skyblue-600'}`} />
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-5/12 ${isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8'} ${isLeft ? 'text-right' : 'text-left'}`}>
                    <div className={`
                      bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                      ${isLavender ? 'border-l-4 border-lavender-400' : 'border-l-4 border-skyblue-400'}
                    `}>
                      <h3 className="text-xl font-bold text-lavender-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lavender-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom encouragement */}
        <div className="text-center mt-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-lavender-200/50">
            <p className="text-lg text-lavender-800 mb-4">
              <span className="font-semibold">Remember:</span> Early detection opens doors to better outcomes, 
              more time together, and hope for the future.
            </p>
            <p className="text-lavender-600">
              You're not alone in this journey. Our community is here to support you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
