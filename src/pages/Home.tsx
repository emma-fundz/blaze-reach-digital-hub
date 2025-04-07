
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/sections/CallToAction';
import { 
  BarChart3, 
  Search, 
  MessageCircle, 
  Mail, 
  Palette, 
  Globe, 
  TrendingUp,
  ArrowRight,
  Star
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <MessageCircle className="h-10 w-10 text-blazereach-orange mb-4" />,
      title: "Social Media Marketing",
      description: "Grow your audience and engagement on all major social platforms with tailored content strategies."
    },
    {
      icon: <Search className="h-10 w-10 text-blazereach-orange mb-4" />,
      title: "Search Engine Optimization",
      description: "Climb the Google rankings with our proven SEO strategies that drive organic traffic."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-blazereach-orange mb-4" />,
      title: "PPC Advertising",
      description: "Get immediate visibility with targeted pay-per-click campaigns on Google, YouTube and more."
    },
    {
      icon: <Mail className="h-10 w-10 text-blazereach-orange mb-4" />,
      title: "Email Marketing",
      description: "Connect with your audience through personalized email campaigns that convert."
    },
    {
      icon: <Palette className="h-10 w-10 text-blazereach-orange mb-4" />,
      title: "Content Creation",
      description: "Captivate your audience with eye-catching graphics, videos, and engaging blog content."
    },
    {
      icon: <Globe className="h-10 w-10 text-blazereach-orange mb-4" />,
      title: "Website Design",
      description: "Make a stunning first impression with responsive, conversion-optimized websites."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, FitLife Gym",
      comment: "BlazeReach transformed our social media presence. Our membership sign-ups have increased by 40% since working with them!",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Founder, Tech Startup",
      comment: "Their SEO work got us ranking on the first page for our most valuable keywords within just 3 months. Incredible results!",
      rating: 5
    },
    {
      name: "Aisha Williams",
      position: "Real Estate Agent",
      comment: "The landing pages BlazeReach designed for my listings have dramatically increased my lead conversion rate. Highly recommended!",
      rating: 4
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blazereach-navy to-blazereach-purple pt-36 pb-20 min-h-[90vh] flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ignite Your Brand. <br />
                <span className="text-blazereach-orange">Dominate Your Market.</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 max-w-lg">
                We help businesses grow their online presence and convert clicks into customers using smart, result-driven digital strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-blazereach-orange hover:bg-blazereach-orange/90 text-white px-8 py-6 text-lg"
                  asChild
                >
                  <Link to="/contact">Book a Free Strategy Session</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blazereach-purple px-8 py-6 text-lg"
                  asChild
                >
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl animate-zoom-in">
                  <div className="bg-blazereach-orange/10 p-6 rounded-lg mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="font-bold">Social Media Growth</div>
                      <TrendingUp className="text-blazereach-orange" />
                    </div>
                    <div className="h-32 bg-white/5 rounded-md flex items-end justify-between p-2">
                      <div className="w-1/6 h-20% bg-white/20 rounded-sm"></div>
                      <div className="w-1/6 h-40% bg-white/30 rounded-sm"></div>
                      <div className="w-1/6 h-30% bg-white/20 rounded-sm"></div>
                      <div className="w-1/6 h-60% bg-white/40 rounded-sm"></div>
                      <div className="w-1/6 h-80% bg-blazereach-orange rounded-sm"></div>
                      <div className="w-1/6 h-95% bg-blazereach-orange rounded-sm"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-white/20"></div>
                    <div>
                      <div className="h-4 w-32 bg-white/20 rounded-full mb-2"></div>
                      <div className="h-3 w-24 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="text-xs text-white/60">Website Traffic</div>
                      <div className="text-white font-bold">+217%</div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="text-xs text-white/60">Conversions</div>
                      <div className="text-white font-bold">+185%</div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="text-xs text-white/60">ROI</div>
                      <div className="text-white font-bold">432%</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blazereach-orange text-white p-3 rounded-full shadow-lg">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Help Businesses <span className="text-blazereach-orange">Thrive</span> in the Digital World
            </h2>
            <p className="text-lg text-gray-700">
              BlazeReach Digital is your partner for comprehensive digital marketing solutions. We combine creativity, data-driven strategies, and industry expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Data-Driven Approach</h3>
              <p className="text-gray-700">
                We don't guess, we analyze. Every campaign is based on solid data and optimized for maximum performance.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Custom Strategies</h3>
              <p className="text-gray-700">
                No one-size-fits-all solutions. We create tailored marketing plans designed for your specific business goals.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
              <p className="text-gray-700">
                We track every metric that matters, providing transparent reporting and continuous optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Services</h2>
            <p className="text-lg text-gray-700">
              From social media management to complete brand overhauls, we offer the full spectrum of digital marketing services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-blazereach-orange font-medium inline-flex items-center hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="bg-blazereach-purple hover:bg-blazereach-purple/90"
              asChild
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-700">
              Don't just take our word for it. Here's what our clients have to say about working with BlazeReach Digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default Home;
