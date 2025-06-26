
import { Shield, Zap, ArrowRight, Target, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-avengers-black via-avengers-black-light to-avengers-gray-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.1)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(220,38,38,0.05)_50%,_transparent_70%)]" />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        {/* Hero Section - Compact */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="mb-4">
            <Shield className="w-16 h-16 mx-auto text-avengers-red animate-glow-pulse" />
          </div>
          
          <h1 className="font-hero text-4xl md:text-6xl font-black text-white mb-4 hero-glow tracking-wider">
            TICKET
            <span className="block text-avengers-red-glow">AVENGERS</span>
          </h1>
          
          <p className="text-lg md:text-xl text-avengers-silver font-light mb-4 max-w-2xl mx-auto leading-relaxed">
            Assemble the ultimate ticket management solution. 
            <span className="block mt-1 text-avengers-red font-medium">Power. Precision. Performance.</span>
          </p>
          
          <div className="flex items-center justify-center gap-2 text-avengers-gold">
            <Zap className="w-4 h-4" />
            <span className="text-xs font-medium tracking-widest">POWERED BY AGENTIC-AI</span>
            <Zap className="w-4 h-4" />
          </div>
        </div>

        {/* Projects Grid - Compact */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
          {/* Auto Triage Card */}
          <div className="group card-hover">
            <div className="metal-gradient red-glow-border rounded-xl p-6 h-full relative overflow-hidden">
              {/* Card Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-avengers-red/5 to-avengers-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-avengers-red/10 rounded-full blur-2xl transform translate-x-12 -translate-y-12" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-avengers-red to-avengers-red-dark rounded-lg flex items-center justify-center mr-3 group-hover:shadow-lg group-hover:shadow-avengers-red/30 transition-all duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-hero text-xl font-bold text-white mb-1">AUTO TRIAGE</h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-avengers-red to-transparent rounded-full" />
                  </div>
                </div>
                
                <p className="text-avengers-silver text-sm mb-4 leading-relaxed">Intelligent ticket classification powered by Agentic-AI. Automatically triage tickets to the right teams with superhuman accuracy.</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-avengers-silver">
                    <div className="w-1.5 h-1.5 bg-avengers-red rounded-full mr-2" />
                    Smart Priority Assignment
                  </div>
                  <div className="flex items-center text-xs text-avengers-silver">
                    <div className="w-1.5 h-1.5 bg-avengers-red rounded-full mr-2" />
                    Real-time Classification
                  </div>
                  <div className="flex items-center text-xs text-avengers-silver">
                    <div className="w-1.5 h-1.5 bg-avengers-red rounded-full mr-2" />
                    Team Auto-routing
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-avengers-red to-avengers-red-dark hover:from-avengers-red-dark hover:to-avengers-red text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-avengers-red/30">
                  <span>Engage Auto Triage</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Similar Ticket Card */}
          <div className="group card-hover">
            <div className="metal-gradient red-glow-border rounded-xl p-6 h-full relative overflow-hidden">
              {/* Card Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-avengers-red/5 to-avengers-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-24 h-24 bg-avengers-red/10 rounded-full blur-2xl transform -translate-x-12 -translate-y-12" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-avengers-red to-avengers-red-dark rounded-lg flex items-center justify-center mr-3 group-hover:shadow-lg group-hover:shadow-avengers-red/30 transition-all duration-300">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-hero text-xl font-bold text-white mb-1">SIMILAR TICKET</h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-avengers-red to-transparent rounded-full" />
                  </div>
                </div>
                
                <p className="text-avengers-silver text-sm mb-4 leading-relaxed">Advanced pattern recognition to identify duplicate and similar tickets. Reduce workload and improve response times across operations.</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-avengers-silver">
                    <div className="w-1.5 h-1.5 bg-avengers-red rounded-full mr-2" />
                    Duplicate Detection
                  </div>
                  <div className="flex items-center text-xs text-avengers-silver">
                    <div className="w-1.5 h-1.5 bg-avengers-red rounded-full mr-2" />
                    Solution Suggestions
                  </div>
                  <div className="flex items-center text-xs text-avengers-silver">
                    <div className="w-1.5 h-1.5 bg-avengers-red rounded-full mr-2" />
                    Knowledge Base Integration
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-avengers-red to-avengers-red-dark hover:from-avengers-red-dark hover:to-avengers-red text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-avengers-red/30">
                  <span>Deploy Similar Search</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action - Compact */}
        <div className="text-center animate-slide-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-avengers-black-light to-avengers-gray-dark rounded-full border border-avengers-red/30">
            <Shield className="w-4 h-4 text-avengers-red" />
            <span className="text-avengers-silver font-medium text-sm">Ready to assemble your workflow?</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-avengers-red/5 rounded-full blur-3xl transform -translate-x-24 translate-y-24" />
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-avengers-red/5 rounded-full blur-3xl transform translate-x-16" />
    </div>
  );
};

export default Index;
