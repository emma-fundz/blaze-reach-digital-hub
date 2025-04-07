
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/sections/CallToAction';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "FitLife Gym",
      category: "Social Media & PPC",
      description: "A comprehensive social media strategy and Google Ads campaign for a local gym chain that increased membership sign-ups by 40% in just three months.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      results: [
        "40% increase in membership sign-ups",
        "250% ROI on ad spend",
        "15,000+ new Instagram followers",
        "3x increase in website traffic"
      ]
    },
    {
      title: "EcoHome Solutions",
      category: "SEO & Content Creation",
      description: "A complete SEO overhaul and content strategy for an eco-friendly home products company that resulted in first-page Google rankings for their target keywords.",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      results: [
        "First-page rankings for 20+ target keywords",
        "185% increase in organic traffic",
        "62% lower bounce rate",
        "43% increase in online sales"
      ]
    },
    {
      title: "ModernFinance",
      category: "Website Design & Email Marketing",
      description: "A website redesign and email nurture campaign for a financial advisory firm that dramatically improved their lead generation and conversion rates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      results: [
        "310% increase in lead generation",
        "28% email open rate (industry average: 18%)",
        "12% conversion rate on landing pages",
        "75% reduction in website bounce rate"
      ]
    },
    {
      title: "Urban Taste",
      category: "Brand Strategy & Social Media",
      description: "A complete rebranding and social media strategy for a local restaurant chain that helped them stand out in a competitive market and attract a younger demographic.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      results: [
        "35% increase in foot traffic",
        "28% growth in average order value",
        "20,000+ social media followers gained",
        "Featured in 3 local publications"
      ]
    },
    {
      title: "TechStart Solutions",
      category: "PPC & Content Marketing",
      description: "A targeted Google Ads campaign and content marketing strategy for a B2B tech startup that generated high-quality leads and established them as industry thought leaders.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      results: [
        "215% increase in qualified leads",
        "320% ROI on ad spend",
        "45% lower cost per acquisition",
        "8 downloadable resources with 5000+ downloads"
      ]
    },
    {
      title: "Luxury Homes Realty",
      category: "Website Design & SEO",
      description: "A premium website redesign and local SEO campaign for a luxury real estate agency that significantly increased their property inquiries and brand visibility.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      results: [
        "150% increase in property inquiries",
        "First position in local search rankings",
        "68% increase in time spent on site",
        "42% increase in high-value property sales"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blazereach-navy to-blazereach-purple pt-36 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-white/90">
              Explore our work and discover how we've helped businesses across different industries achieve remarkable growth through strategic digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <span className="text-sm text-blazereach-orange font-medium">{item.category}</span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6">{item.description}</p>
                  <h4 className="font-bold text-lg mb-3">Results:</h4>
                  <ul className="space-y-2 mb-6">
                    {item.results.map((result, i) => (
                      <li key={i} className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-blazereach-orange mr-2 shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full border-blazereach-purple text-blazereach-purple hover:bg-blazereach-purple hover:text-white"
                      asChild
                    >
                      <Link to={`/portfolio/${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-lg text-gray-700">
              We have experience working with businesses across a wide range of industries, each with their unique challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold">E-commerce</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold">Real Estate</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold">Health & Fitness</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold">Finance</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold">Hospitality</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold">Technology</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold">Education</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold">Professional Services</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold">Retail</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold">Manufacturing</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold">Entertainment</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold">Non-profit</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach to Projects</h2>
            <p className="text-lg text-gray-700">
              Every successful project follows a structured process that ensures we deliver exceptional results that align with your business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blazereach-purple">
              <div className="bg-blazereach-purple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blazereach-purple">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Discovery</h3>
              <p className="text-gray-700">
                We start by understanding your business, goals, audience, and current digital presence to identify opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blazereach-purple">
              <div className="bg-blazereach-purple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blazereach-purple">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Strategy</h3>
              <p className="text-gray-700">
                We develop a customized action plan with clear objectives, timelines, and KPIs to measure success.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blazereach-purple">
              <div className="bg-blazereach-purple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blazereach-purple">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Execution</h3>
              <p className="text-gray-700">
                Our team implements the strategy across all relevant channels with meticulous attention to detail.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blazereach-purple">
              <div className="bg-blazereach-purple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blazereach-purple">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Optimization</h3>
              <p className="text-gray-700">
                We continuously monitor, analyze, and refine our approach to maximize performance and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-blazereach-navy text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-xl italic mb-6">
                    "Working with BlazeReach Digital transformed our online presence completely. Their strategic approach to our digital marketing helped us reach new customers we never thought possible. The team is responsive, creative, and truly cares about our success."
                  </p>
                  <div>
                    <h4 className="font-bold text-lg">Rebecca Johnson</h4>
                    <p className="text-white/80">CEO, ModernFinance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to Be Our Next Success Story?" 
        subtitle="Let's discuss how we can help your business achieve remarkable growth through strategic digital marketing."
      />
    </>
  );
};

export default Portfolio;
