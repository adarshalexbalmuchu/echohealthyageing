
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Users, Calendar, ChevronRight } from "lucide-react";

const ResourceCards = () => {
  const resources = [
    {
      icon: Download,
      title: "Early Detection Guide",
      description: "Comprehensive 20-page guide with warning signs, assessment tools, and action steps for families.",
      features: ["Warning signs checklist", "Questions for doctors", "Family conversation starters"],
      color: "lavender",
      ctaText: "Download Free Guide",
      badge: "Most Popular"
    },
    {
      icon: Users,
      title: "Caregiver Community",
      description: "Connect with thousands of families who understand your journey and share practical support.",
      features: ["24/7 peer support", "Expert-led discussions", "Local meetup groups"],
      color: "skyblue",
      ctaText: "Join Community",
      badge: "Free Forever"
    },
    {
      icon: Calendar,
      title: "Awareness Week Events",
      description: "Exclusive workshops, webinars, and resources available only during Dementia Awareness Week.",
      features: ["Live expert sessions", "Family workshops", "Q&A with specialists"],
      color: "lavender",
      ctaText: "Explore Events",
      badge: "Limited Time"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-lavender-900 mb-6">
            Your Next Steps to Hope
          </h2>
          <p className="text-xl text-lavender-700 max-w-3xl mx-auto leading-relaxed">
            Choose the resource that feels right for where you are today. 
            Every small step forward is a victory worth celebrating.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            const isLavender = resource.color === "lavender";
            
            return (
              <Card 
                key={index}
                className={`
                  relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl
                  bg-white border-0 shadow-lg group
                  animate-[fade-in_0.6s_ease-out_${index * 0.1}s_both]
                `}
              >
                {/* Badge */}
                {resource.badge && (
                  <div className={`
                    absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold
                    ${isLavender ? 'bg-lavender-100 text-lavender-700' : 'bg-skyblue-100 text-skyblue-700'}
                  `}>
                    {resource.badge}
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300
                    ${isLavender ? 'bg-lavender-100' : 'bg-skyblue-100'}
                  `}>
                    <Icon className={`
                      w-8 h-8 
                      ${isLavender ? 'text-lavender-600' : 'text-skyblue-600'}
                    `} />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-lavender-900 mb-2">
                    {resource.title}
                  </CardTitle>
                  
                  <CardDescription className="text-lavender-700 text-base leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Features list */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {resource.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-lavender-600">
                          <div className={`
                            w-1.5 h-1.5 rounded-full 
                            ${isLavender ? 'bg-lavender-400' : 'bg-skyblue-400'}
                          `} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    className={`
                      w-full group/btn transition-all duration-300 transform hover:scale-105
                      ${isLavender 
                        ? 'bg-lavender-600 hover:bg-lavender-700' 
                        : 'bg-skyblue-600 hover:bg-skyblue-700'
                      } 
                      text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl
                    `}
                  >
                    <span>{resource.ctaText}</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom encouragement */}
        <div className="text-center mt-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-lavender-200/50">
            <p className="text-lg text-lavender-800 mb-4">
              <span className="font-semibold">Not sure where to start?</span> 
              Our Early Detection Guide is the perfect first step for most families.
            </p>
            <p className="text-lavender-600">
              Remember: Taking action today shows incredible love and courage for your family's future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceCards;
