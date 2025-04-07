
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-blazereach-purple">404</h1>
        <div className="h-2 w-20 bg-blazereach-orange mx-auto my-6"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          className="bg-blazereach-purple hover:bg-blazereach-purple/90"
          asChild
        >
          <Link to="/" className="flex items-center">
            <Home className="mr-2 h-5 w-5" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
