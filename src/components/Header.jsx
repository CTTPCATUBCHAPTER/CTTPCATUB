import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import cttpLogo from '../assets/images/cttp-logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Upcoming Events', path: '/events' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Giving', path: '/giving' },
    { name: 'Church Gallery', path: '/churchgallery' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Church Name */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src={cttpLogo}
              alt="Christ to the Philippines - Catub Chapter logo"
              className="h-16 w-auto"
            />
            <div className="flex flex-col">
              <p className="text-lg font-bold text-gray-900 leading-tight">
                Christ to the Philippines
              </p>
              <p className="text-sm text-gray-600 leading-tight">
                Catub Chapter
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-1"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-orange-500 text-white'
                    : 'text-orange-600 hover:bg-orange-50 hover:text-orange-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-orange-600 hover:text-orange-700 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <nav
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-orange-500 text-white'
                    : 'text-orange-600 hover:bg-orange-50 hover:text-orange-700'
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
