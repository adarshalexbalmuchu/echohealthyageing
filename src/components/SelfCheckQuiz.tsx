
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, CheckCircle, AlertCircle, Heart } from "lucide-react";

const SelfCheckQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Have you or a loved one noticed changes in memory that are concerning or affecting daily activities?",
      context: "This could include forgetting recent conversations, appointments, or having difficulty with familiar tasks."
    },
    {
      question: "Are there changes in thinking, reasoning, or decision-making that seem different from before?",
      context: "Such as difficulty following conversations, trouble with familiar activities, or changes in judgment."
    }
  ];

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const yesCount = answers.filter(answer => answer).length;

  return (
    <section className="py-20 bg-gradient-to-br from-skyblue-50 to-lavender-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-lavender-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-lavender-900">
                Early Signs Self-Check
              </h2>
            </div>
            <p className="text-xl text-lavender-700 leading-relaxed">
              A quick, confidential assessment to help you understand if it might be time to seek professional guidance.
            </p>
          </div>

          {!showResults ? (
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center gap-2 mb-4">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentQuestion 
                          ? 'bg-lavender-600' 
                          : index < currentQuestion 
                            ? 'bg-skyblue-400' 
                            : 'bg-lavender-200'
                      }`}
                    />
                  ))}
                </div>
                <CardTitle className="text-2xl text-lavender-900">
                  Question {currentQuestion + 1} of {questions.length}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-lavender-800 mb-4 leading-relaxed">
                    {questions[currentQuestion].question}
                  </h3>
                  <p className="text-lavender-600 italic">
                    {questions[currentQuestion].context}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => handleAnswer(true)}
                    className="bg-lavender-600 hover:bg-lavender-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Yes, I've noticed this
                  </Button>
                  <Button
                    onClick={() => handleAnswer(false)}
                    variant="outline"
                    className="border-2 border-lavender-600 text-lavender-700 hover:bg-lavender-50 px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    No, not really
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="pt-8">
                <div className="text-center">
                  {yesCount > 0 ? (
                    <div className="mb-8">
                      <AlertCircle className="w-16 h-16 text-lavender-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-lavender-900 mb-4">
                        Consider Speaking with a Professional
                      </h3>
                      <p className="text-lg text-lavender-700 mb-6 leading-relaxed">
                        Based on your responses, it may be beneficial to discuss these changes with a healthcare professional. 
                        Early consultation can provide valuable insights and peace of mind.
                      </p>
                      <div className="bg-lavender-50 rounded-xl p-6 mb-6">
                        <p className="text-lavender-800 font-medium">
                          Remember: Seeking help early is a sign of strength and love for yourself and your family.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-8">
                      <CheckCircle className="w-16 h-16 text-skyblue-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-lavender-900 mb-4">
                        Great to Hear!
                      </h3>
                      <p className="text-lg text-lavender-700 mb-6 leading-relaxed">
                        It sounds like things are going well. Continue to stay informed about cognitive health 
                        and remember that our resources are here whenever you need them.
                      </p>
                      <div className="bg-skyblue-50 rounded-xl p-6 mb-6">
                        <p className="text-lavender-800 font-medium">
                          Keep staying proactive about cognitive wellness - prevention is always the best approach.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      className="bg-gradient-to-r from-lavender-600 to-skyblue-600 hover:from-lavender-700 hover:to-skyblue-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      Download Our Early Detection Guide
                    </Button>
                    <Button
                      onClick={resetQuiz}
                      variant="outline"
                      className="border-2 border-lavender-600 text-lavender-700 hover:bg-lavender-50 px-8 py-3 text-lg rounded-full transition-all duration-300"
                    >
                      Take Quiz Again
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-lavender-600">
                    <Heart className="w-4 h-4" />
                    <p className="text-sm">
                      This assessment is for informational purposes only and is not a substitute for professional medical advice.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default SelfCheckQuiz;
