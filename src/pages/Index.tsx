import { Shield, Zap, ArrowRight, Target, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-avengers-black via-avengers-black-light to-avengers-gray-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.1)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(220,38,38,0.05)_50%,_transparent_70%)]" />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="mb-8">
            <Shield className="w-20 h-20 mx-auto text-avengers-red animate-glow-pulse" />
          </div>
          
          <h1 className="font-hero text-6xl md:text-8xl font-black text-white mb-6 hero-glow tracking-wider">
            TICKET
            <span className="block text-avengers-red-glow">AVENGERS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-avengers-silver font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Assemble the ultimate ticket management solution. 
            <span className="block mt-2 text-avengers-red font-medium">Power. Precision. Performance.</span>
          </p>
          
          <div className="flex items-center justify-center gap-2 text-avengers-gold">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium tracking-widest">POWERED BY AGENTIC-AI</span>
            <Zap className="w-5 h-5" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Auto Triage Card */}
          <div className="group card-hover">
            <div className="metal-gradient red-glow-border rounded-2xl p-8 h-full relative overflow-hidden">
              {/* Card Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-avengers-red/5 to-avengers-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-avengers-red/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-avengers-red to-avengers-red-dark rounded-xl flex items-center justify-center mr-4 group-hover:shadow-lg group-hover:shadow-avengers-red/30 transition-all duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="font-hero text-2xl font-bold text-white mb-1">AUTO TRIAGE</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-avengers-red to-transparent rounded-full" />
                  </div>
                </div>
                
                <p className="text-avengers-silver text-lg mb-8 leading-relaxed">Intelligent ticket classification powered by Agentic-AI . LLM, RAG Automatically triage tickets to the right teams with superhuman accuracy and speed.</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-avengers-silver">
                    <div className="w-2 h-2 bg-avengers-red rounded-full mr-3" />
                    Smart Priority Assignment
                  </div>
                  <div className="flex items-center text-sm text-avengers-silver">
                    <div className="w-2 h-2 bg-avengers-red rounded-full mr-3" />
                    Real-time Classification
                  </div>
                  <div className="flex items-center text-sm text-avengers-silver">
                    <div className="w-2 h-2 bg-avengers-red rounded-full mr-3" />
                    Team Auto-routing
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-avengers-red to-avengers-red-dark hover:from-avengers-red-dark hover:to-avengers-red text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-avengers-red/30">
                  <span>Engage Auto Triage</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Similar Ticket Card */}
          <div className="group card-hover">
            <div className="metal-gradient red-glow-border rounded-2xl p-8 h-full relative overflow-hidden">
              {/* Card Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-avengers-red/5 to-avengers-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-avengers-red/10 rounded-full blur-3xl transform -translate-x-16 -translate-y-16" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-avengers-red to-avengers-red-dark rounded-xl flex items-center justify-center mr-4 group-hover:shadow-lg group-hover:shadow-avengers-red/30 transition-all duration-300">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="font-hero text-2xl font-bold text-white mb-1">SIMILAR TICKET</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-avengers-red to-transparent rounded-full" />
                  </div>
                </div>
                
                <p className="text-avengers-silver text-lg mb-8 leading-relaxed">Advanced pattern recognition to identify duplicate and similar tickets. Reduce workload, improve response times, and maintain consistency across the support operations.</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-avengers-silver">
                    <div className="w-2 h-2 bg-avengers-red rounded-full mr-3" />
                    Duplicate Detection
                  </div>
                  <div className="flex items-center text-sm text-avengers-silver">
                    <div className="w-2 h-2 bg-avengers-red rounded-full mr-3" />
                    Solution Suggestions
                  </div>
                  <div className="flex items-center text-sm text-avengers-silver">
                    <div className="w-2 h-2 bg-avengers-red rounded-full mr-3" />
                    Knowledge Base Integration
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-avengers-red to-avengers-red-dark hover:from-avengers-red-dark hover:to-avengers-red text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-avengers-red/30">
                  <span>Deploy Similar Search</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-20 animate-slide-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-avengers-black-light to-avengers-gray-dark rounded-full border border-avengers-red/30">
            <Shield className="w-5 h-5 text-avengers-red" />
            <span className="text-avengers-silver font-medium">Ready to assemble your workflow?</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-avengers-red/5 rounded-full blur-3xl transform -translate-x-32 translate-y-32" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-avengers-red/5 rounded-full blur-3xl transform translate-x-24" />
    </div>;
};
export default Index;