import React from 'react';
import { GraduationCap, MonitorPlay, Users, Clock, Award, BookOpen, MessageSquare, Video } from 'lucide-react';

const AboutOnlineTuition = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
          Revolutionizing <span className="text-primary">Online Education</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Personalized 1-on-1 online tutoring that adapts to your learning style and schedule.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="bg-primary/5 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">How Our Online Tuition Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Platform Features</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {platformFeatures.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex">
                <div className="bg-primary/10 text-primary p-3 rounded-lg mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            {platformFeatures.slice(3).map((feature, index) => (
              <div key={index} className="flex">
                <div className="bg-primary/10 text-primary p-3 rounded-lg mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of students achieving academic success with our online tutors.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn btn-white px-8 text-primary">
            Book Free Trial
          </button>
          <button className="btn btn-outline btn-white px-8">
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat with Us
          </button>
        </div>
      </div>
    </div>
  );
};

// Feature data
const features = [
  {
    icon: <GraduationCap size={32} />,
    title: "Expert Tutors",
    description: "Certified educators with subject matter expertise and teaching experience."
  },
  {
    icon: <MonitorPlay size={32} />,
    title: "Interactive Classes",
    description: "Live sessions with digital whiteboard, screen sharing, and multimedia tools."
  },
  {
    icon: <Clock size={32} />,
    title: "Flexible Scheduling",
    description: "Book sessions 24/7 according to your availability across timezones."
  }
];

// Steps data
const steps = [
  {
    icon: <BookOpen size={20} />,
    title: "Choose Subject",
    description: "Select from 100+ academic subjects and test prep courses"
  },
  {
    icon: <Users size={20} />,
    title: "Match with Tutor",
    description: "Get paired with your ideal tutor based on learning needs"
  },
  {
    icon: <Video size={20} />,
    title: "Attend Session",
    description: "Join live video sessions with interactive tools"
  },
  {
    icon: <Award size={20} />,
    title: "Track Progress",
    description: "Receive regular reports and performance analytics"
  }
];

// Platform features
const platformFeatures = [
  {
    icon: <MonitorPlay size={24} />,
    title: "Virtual Classroom",
    description: "Interactive whiteboard, document sharing, and real-time collaboration tools"
  },
  {
    icon: <BookOpen size={24} />,
    title: "Personalized Curriculum",
    description: "Custom lesson plans tailored to your academic goals and learning pace"
  },
  {
    icon: <Clock size={24} />,
    title: "Session Recordings",
    description: "Access recordings of all your sessions for later review"
  },
  {
    icon: <Award size={24} />,
    title: "Progress Tracking",
    description: "Detailed analytics and performance reports to monitor improvement"
  }
];

export default AboutOnlineTuition;