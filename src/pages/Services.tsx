
import React from 'react';
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
  CheckCircle,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <MessageCircle className="h-12 w-12 text-white mb-4" />,
      title: "Social Media Marketing",
      description: "From content creation to paid advertising, we help you build brand awareness and engage with your target audience across all major social platforms.",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      features: [
        "Platform-specific content strategies",
        "Community management and engagement",
        "Paid social media advertising",
        "Influencer partnership campaigns",
        "Analytics and performance reporting"
      ]
    },
    {
      icon: <Search className="h-12 w-12 text-white mb-4" />,
      title: "Search Engine Optimization",
      description: "Climb the Google rankings with our data-driven SEO strategies that increase your visibility and drive organic traffic to your website.",
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
      features: [
        "Keyword research and targeting",
        "On-page optimization",
        "Technical SEO audits and fixes",
        "Link building strategies",
        "Local SEO for business listings"
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-white mb-4" />,
      title: "PPC Advertising",
      description: "Get immediate visibility with targeted pay-per-click campaigns on Google, YouTube, and other platforms that deliver high-quality leads.",
      bgColor: "bg-gradient-to-br from-yellow-500 to-yellow-700",
      features: [
        "Google Ads campaign management",
        "Display advertising",
        "YouTube video advertising",
        "Remarketing campaigns",
        "A/B testing and optimization"
      ]
    },
    {
      icon: <Mail className="h-12 w-12 text-white mb-4" />,
      title: "Email Marketing",
      description: "Connect with your audience through personalized email campaigns that nurture leads, drive conversions, and build customer loyalty.",
      bgColor: "bg-gradient-to-br from-red-500 to-red-700",
      features: [
        "Email list building strategies",
        "Newsletter design and copywriting",
        "Automated email sequences",
        "A/B testing for higher conversions",
        "Performance analytics and optimization"
      ]
    },
    {
      icon: <Palette className="h-12 w-12 text-white mb-4" />,
      title: "Content Creation",
      description: "Captivate your audience with eye-catching graphics, engaging videos, and high-quality blog content that establishes your brand authority.",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
      features: [
        "Blog post writing and SEO",
        "Social media graphics creation",
        "Video production and editing",
        "Infographic and visual content design",
        "Content calendar management"
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-white mb-4" />,
      title: "Website Design",
      description: "Make a stunning first impression with responsive, conversion-optimized websites that showcase your brand and turn visitors into customers.",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-700",
      features: [
        "Custom website design",
        "Mobile-responsive development",
        "E-commerce functionality",
        "Landing page optimization",
        "Website maintenance and updates"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-white mb-4" />,
      title: "Brand Strategy",
      description: "Define your brand identity and messaging to stand out in a crowded marketplace and connect with your ideal customers on a deeper level.",
      bgColor: "bg-gradient-to-br from-pink-500 to-pink-700",
      features: [
        "Brand identity development",
        "Messaging and positioning strategy",
        "Competitor analysis",
        "Target audience research",
        "Brand guidelines creation"
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: "Tailored Strategies",
      description: "We create custom marketing plans based on your unique business goals and target audience."
    },
    {
      title: "Proven Results",
      description: "Our data-driven approach has helped numerous businesses achieve significant growth and ROI."
    },
    {
      title: "Transparent Reporting",
      description: "We provide clear, comprehensive reports so you always know exactly how your campaigns are performing."
    },
    {
      title: "Dedicated Support",
      description: "Your success is our priority, with responsive communication and ongoing optimization."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blazereach-navy to-blazereach-purple pt-36 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90">
              Comprehensive digital marketing solutions designed to help your business grow online and convert more customers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Digital Marketing Solutions</h2>
            <p className="text-lg text-gray-700">
              From social media and SEO to website design and brand strategy, we offer all the digital services you need to succeed online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className={`p-8 text-center ${service.bgColor}`}>
                  <div className="bg-white/10 p-4 rounded-full inline-block mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                </div>
                <div className="p-6 bg-white flex-grow">
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <h4 className="font-bold mb-4">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blazereach-orange mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose BlazeReach Digital?</h2>
              <p className="text-lg text-gray-700 mb-8">
                We're not just another marketing agency. Our commitment to results, transparency, and personalized service sets us apart.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="h-6 w-6 text-blazereach-orange mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blazereach-purple text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Discovery</h4>
                    <p className="text-gray-700">We learn about your business, goals, target audience, and current marketing efforts.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blazereach-purple text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Strategy Development</h4>
                    <p className="text-gray-700">We create a custom marketing plan aligned with your specific business objectives.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blazereach-purple text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Implementation</h4>
                    <p className="text-gray-700">Our team executes the strategy across all relevant channels and platforms.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blazereach-purple text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Monitoring & Optimization</h4>
                    <p className="text-gray-700">We continuously track results and refine our approach to maximize performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blazereach-purple text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Reporting & Growth</h4>
                    <p className="text-gray-700">Regular updates on performance metrics and strategic recommendations for future growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-blazereach-navy rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
                <p className="text-white/90 text-lg mb-8">
                  Take the first step toward transforming your digital presence and increasing your revenue.
                </p>
                <Button 
                  className="bg-blazereach-orange hover:bg-blazereach-orange/90 text-white text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/contact">Schedule a Free Consultation</Link>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blazereach-purple to-blazereach-orange opacity-30 lg:opacity-100">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center mix-blend-overlay">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Get answers to common questions about our services and approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">How long does it take to see results?</h3>
              <p className="text-gray-700">
                It varies by service: PPC can show results within days, while SEO typically takes 3-6 months to see significant improvements. We'll provide realistic timelines based on your specific situation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Do you offer contracts or month-to-month services?</h3>
              <p className="text-gray-700">
                We offer both options. While we recommend at least a 3-month commitment for best results, we also provide flexible month-to-month arrangements for certain services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">How do you measure success?</h3>
              <p className="text-gray-700">
                We establish clear KPIs at the beginning of our engagement based on your business goals, whether that's traffic, leads, sales, or brand awareness. We provide regular reports tracking these metrics.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">What industries do you work with?</h3>
              <p className="text-gray-700">
                We work with a wide range of industries, including e-commerce, professional services, real estate, fitness, and more. Our strategies are customized for your specific market and audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Let's Grow Your Business Together" 
        subtitle="Ready to take your digital marketing to the next level? Contact us today to schedule a free consultation."
      />
    </>
  );
};

export default Services;
