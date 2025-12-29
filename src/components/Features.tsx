import React from 'react';
import { Eye, Map, Shield, Monitor } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Real-time Obstacle Detection',
    description: 'Advanced computer vision algorithms identify hazards, debris, and obstacles on railway tracks in real-time.',
    color: 'green'
  },
  {
    icon: Map,
    title: 'Predictive Risk Mapping',
    description: 'AI-powered risk assessment creates dynamic hazard maps for proactive safety management.',
    color: 'amber'
  },
  {
    icon: Shield,
    title: 'Fail-Safe Hazard Alerts',
    description: 'Critical safety alerts with automatic backup systems ensure no threat goes undetected.',
    color: 'red'
  },
  {
    icon: Monitor,
    title: 'Interactive Driver Dashboard',
    description: 'Intuitive interface provides drivers with clear, actionable safety information and warnings.',
    color: 'blue'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Next-Generation <span className="text-green-400">Railway Safety</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Suraksha Rail combines cutting-edge AI with railway expertise to deliver unparalleled collision prevention technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              green: 'text-green-400 bg-green-400/10 border-green-400/20 group-hover:border-green-400/40 group-hover:bg-green-400/20',
              amber: 'text-amber-400 bg-amber-400/10 border-amber-400/20 group-hover:border-amber-400/40 group-hover:bg-amber-400/20',
              red: 'text-red-400 bg-red-400/10 border-red-400/20 group-hover:border-red-400/40 group-hover:bg-red-400/20',
              blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20 group-hover:border-blue-400/40 group-hover:bg-blue-400/20'
            };

            return (
              <div
                key={index}
                className="group relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 transition-all duration-500 ${colorClasses[feature.color as keyof typeof colorClasses]} group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="relative text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;