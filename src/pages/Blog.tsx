
import React from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/sections/CallToAction';
import { Button } from '@/components/ui/button';
import { SearchIcon, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 SEO Strategies That Actually Work in 2025",
      excerpt: "Learn the most effective SEO tactics that are delivering real results this year, from core web vitals to E-E-A-T principles.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "March 25, 2025",
      readTime: "8 min read",
      category: "SEO",
      featured: true
    },
    {
      id: 2,
      title: "How to Create a Social Media Content Calendar That Converts",
      excerpt: "A step-by-step guide to planning your social media content strategy for maximum engagement and conversion.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "March 18, 2025",
      readTime: "6 min read",
      category: "Social Media"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Google Ads in 2025",
      excerpt: "Everything you need to know about running successful Google Ads campaigns in the current digital landscape.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2025",
      readTime: "10 min read",
      category: "PPC"
    },
    {
      id: 4,
      title: "5 Website Design Trends That Boost Conversion Rates",
      excerpt: "Discover the latest web design elements that not only look great but also help turn visitors into customers.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "March 3, 2025",
      readTime: "7 min read",
      category: "Web Design"
    },
    {
      id: 5,
      title: "Email Marketing: Crafting Campaigns That People Actually Open",
      excerpt: "Learn how to create email campaigns with compelling subject lines, valuable content, and effective calls to action.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "February 24, 2025",
      readTime: "9 min read",
      category: "Email Marketing"
    },
    {
      id: 6,
      title: "Building Your Brand Voice: A Guide for Small Businesses",
      excerpt: "How to develop a consistent and authentic brand voice that resonates with your target audience across all channels.",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "February 17, 2025",
      readTime: "8 min read",
      category: "Branding"
    }
  ];

  const categories = [
    "SEO",
    "Social Media",
    "PPC",
    "Content Marketing",
    "Email Marketing",
    "Web Design",
    "Branding",
    "Analytics"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blazereach-navy to-blazereach-purple pt-36 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-white/90">
              Insights, tips, and strategies to help your business succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Category Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="relative w-full md:w-96">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant="outline"
                  size="sm"
                  className="bg-white"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8 flex flex-col">
                <div className="mb-4 flex items-center">
                  <span className="bg-blazereach-orange/10 text-blazereach-orange text-sm font-medium px-3 py-1 rounded-full">{featuredPost.category}</span>
                  <div className="flex items-center text-gray-500 text-sm ml-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{featuredPost.date}</span>
                    <Clock className="h-4 w-4 ml-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                <Button 
                  className="mt-auto bg-blazereach-purple hover:bg-blazereach-purple/90 w-fit"
                  asChild
                >
                  <Link to={`/blog/${featuredPost.id}`}>Read Full Article</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <div 
                key={post.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3 flex items-center">
                    <span className="bg-blazereach-purple/10 text-blazereach-purple text-xs font-medium px-2 py-1 rounded-full">{post.category}</span>
                    <div className="flex items-center text-gray-500 text-xs ml-3">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="mt-auto text-blazereach-orange font-medium text-sm inline-flex items-center hover:underline"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              className="border-blazereach-purple text-blazereach-purple hover:bg-blazereach-purple hover:text-white"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-blazereach-purple/10 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-700 mb-6">
                Get the latest digital marketing insights, tips, and strategies delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-grow"
                />
                <Button className="bg-blazereach-orange hover:bg-blazereach-orange/90">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to Implement These Strategies?" 
        subtitle="Book a free consultation to discuss how we can help you apply these insights to your business."
        bgColor="bg-blazereach-navy"
      />
    </>
  );
};

export default Blog;
