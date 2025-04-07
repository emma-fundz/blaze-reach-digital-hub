
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/sections/CallToAction';
import { CheckCircle, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Results-Driven",
      description: "We measure our success by your success. Every strategy we implement is designed to deliver measurable results."
    },
    {
      title: "Transparency",
      description: "We believe in open communication and complete transparency. You'll always know exactly what we're doing and why."
    },
    {
      title: "Innovation",
      description: "The digital landscape evolves rapidly. We stay ahead of trends to ensure your brand remains competitive."
    },
    {
      title: "Partnership",
      description: "We don't see ourselves as vendors but as extensions of your team, deeply invested in your success."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      position: "Founder & CEO",
      bio: "Digital marketing strategist with 10+ years of experience helping businesses grow their online presence.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Maya Williams",
      position: "Creative Director",
      bio: "Award-winning designer who believes in the power of visual storytelling to build memorable brands.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "David Okonkwo",
      position: "SEO Specialist",
      bio: "Data-driven SEO expert who has helped dozens of businesses achieve first-page Google rankings.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Sophie Chen",
      position: "Social Media Manager",
      bio: "Social media strategist who specializes in creating engaging content that converts followers into customers.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blazereach-navy to-blazereach-purple pt-36 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About BlazeReach Digital</h1>
            <p className="text-xl text-white/90">
              We're not just a marketing agency—we're your strategic partner in navigating the digital landscape and achieving real business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                BlazeReach Digital was founded in 2018 with a simple mission: to help small and medium-sized businesses harness the power of digital marketing to grow their brands and increase their revenue.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founder, Alex Johnson, saw that many businesses were struggling to navigate the increasingly complex digital landscape. Traditional marketing agencies were either too expensive for small businesses or didn't deliver the results they promised.
              </p>
              <p className="text-lg text-gray-700">
                What started as a one-person consultancy has grown into a full-service digital marketing agency with a team of experts in SEO, social media, content creation, and more. Despite our growth, we've remained true to our core values of transparency, innovation, and results-driven strategies.
              </p>
            </div>
            <div className="relative">
              <div className="bg-blazereach-purple/10 rounded-xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Team meeting" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blazereach-orange text-white p-3 rounded-full shadow-lg">
                <Users className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses with innovative digital marketing strategies that drive growth, build brand authority, and deliver measurable results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted digital marketing partner for small and mid-sized businesses, known for our expertise, integrity, and client success stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-700">
              These principles guide everything we do at BlazeReach Digital, from how we work with our clients to how we develop our strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <CheckCircle className="h-6 w-6 text-blazereach-orange mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-700">
              Our talented team of digital marketing experts is passionate about helping businesses succeed online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blazereach-orange font-medium mb-4">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Strategy?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Partner with BlazeReach Digital and take your brand to new heights. Let's craft a digital strategy that delivers real results.
            </p>
            <Button 
              className="bg-blazereach-purple hover:bg-blazereach-purple/90 text-lg px-8 py-6"
              asChild
            >
              <Link to="/contact">Let's Work Together</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to Start Your Digital Journey?" 
        subtitle="Book a free consultation with our team and discover how we can help you achieve your business goals."
      />
    </>
  );
};

export default About;
