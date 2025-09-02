import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Cross, 
  Phone, 
  Mail, 
  Facebook, 
  Youtube
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus('Please enter your email.');
      return;
    }

    setSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('https://formspree.io/f/mrbabdzq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setStatus('Thank you for subscribing! 🎉');
        setEmail('');
      } else {
        const data = await response.json();
        setStatus(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cross className="h-8 w-8 text-blue-400" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Christ to the Philippines</span>
                <span className="text-sm text-gray-400">Catub Chapter</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              A welcoming community where faith, hope, and love come together. 
              Join us as we grow in our relationship with God and serve our community.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={() => window.open('https://www.facebook.com/61552938899679', '_blank')}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-white"
                onClick={() => window.open('https://www.youtube.com', '_blank')}
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/sermons" className="text-gray-300 hover:text-white transition-colors">Sermons</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Get Involved</Link></li>
              <li><Link to="/giving" className="text-gray-300 hover:text-white transition-colors">Give Online</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ministries</h3>
            <ul className="space-y-2">
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Men Ministry</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Women Ministry</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Youth Ministry</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Children Ministry</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Music Ministry</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Outreach Ministry</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">(+63)9610942608</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">cttpcatubchapter.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and announcements</p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row max-w-md mx-auto gap-2"
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700"
                disabled={submitting}
              >
                {submitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>

            {status && (
              <p className={`mt-2 text-sm ${status.includes('Thank') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Christ to the Philippines - Catub Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
