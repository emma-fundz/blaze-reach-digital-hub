
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  bgColor?: string;
}

const CallToAction = ({
  title = "Ready to Ignite Your Digital Presence?",
  subtitle = "Let's talk about how BlazeReach Digital can transform your online strategy and drive real business results.",
  buttonText = "Book a Free Strategy Session",
  buttonLink = "/contact",
  bgColor = "bg-blazereach-purple"
}: CallToActionProps) => {
  return (
    <section className={`${bgColor} py-16 md:py-20`}>
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">{subtitle}</p>
        <Button 
          className="bg-blazereach-orange hover:bg-blazereach-orange/90 text-white text-lg px-8 py-6"
          asChild
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
