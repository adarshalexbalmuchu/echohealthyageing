
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "When we first noticed Mom's memory changes, we felt lost and scared. Echo Healthy Ageing didn't just give us tools for early detection — they gave us hope. The support system helped our entire family navigate this journey with dignity and love. Early intervention has meant we've had more quality time together, and for that, we're forever grateful.",
      author: "Maria & Her Family",
      role: "EHA Community Member since 2023",
      initials: "MH",
      bgColor: "lavender"
    },
    {
      quote: "As a caregiver, I thought I had to carry everything alone. The EHA community showed me that asking for help isn't weakness—it's wisdom. The early detection resources helped us catch changes before they became overwhelming, and the emotional support has been a lifeline for our entire family.",
      author: "David Chen",
      role: "Caregiver & EHA Advocate",
      initials: "DC",
      bgColor: "skyblue"
    },
    {
      quote: "My husband was diagnosed early thanks to the screening tools EHA recommended. Instead of panic, we felt prepared. The community support and practical resources have helped us maintain our independence longer and plan for our future with confidence and hope.",
      author: "Eleanor & Robert",
      role: "Married 52 years, EHA Members",
      initials: "E&R",
      bgColor: "lavender"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];
  const isLavender = current.bgColor === "lavender";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lavender-900 mb-6">
              Stories of Hope & Strength
            </h2>
            <p className="text-xl text-lavender-700 leading-relaxed">
              Real families, real experiences, real hope through early detection and community support.
            </p>
          </div>
          
          {/* Carousel */}
          <div className="relative">
            {/* Main testimonial */}
            <div className={`
              bg-gradient-to-r ${isLavender ? 'from-lavender-50 to-skyblue-50' : 'from-skyblue-50 to-lavender-50'} 
              rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-500
            `}>
              <Quote className="w-16 h-16 text-lavender-300 absolute top-8 left-8 opacity-50" />
              
              <div className="relative z-10 pt-8">
                <blockquote 
                  key={currentTestimonial}
                  className="text-xl md:text-2xl text-lavender-800 leading-relaxed mb-8 italic animate-[fade-in_0.5s_ease-out]"
                >
                  "{current.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center
                    ${isLavender ? 'bg-lavender-200' : 'bg-skyblue-200'}
                  `}>
                    <span className={`
                      text-lg font-bold 
                      ${isLavender ? 'text-lavender-700' : 'text-skyblue-700'}
                    `}>
                      {current.initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-lavender-900">
                      {current.author}
                    </div>
                    <div className="text-lavender-600">
                      {current.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full border-lavender-300 text-lavender-600 hover:bg-lavender-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300
                      ${index === currentTestimonial 
                        ? 'bg-lavender-600 scale-125' 
                        : 'bg-lavender-300 hover:bg-lavender-400'
                      }
                    `}
                  />
                ))}
              </div>
              
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full border-lavender-300 text-lavender-600 hover:bg-lavender-50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Supporting stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="text-4xl font-bold text-lavender-600 mb-2 group-hover:scale-110 transition-transform duration-300">89%</div>
              <div className="text-lavender-700">of families report feeling more confident about their journey</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-skyblue-600 mb-2 group-hover:scale-110 transition-transform duration-300">2.5x</div>
              <div className="text-lavender-700">earlier detection rate with our screening tools</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-lavender-600 mb-2 group-hover:scale-110 transition-transform duration-300">15,000+</div>
              <div className="text-lavender-700">families supported in our community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
