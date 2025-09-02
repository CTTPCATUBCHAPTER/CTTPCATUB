import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import mapImg from '../../assets/images/map.png';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Youtube,
  Send
} from 'lucide-react'

const Contact = () => {
  // Contact Info with working links
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Purok 06 Sitio Catub", "Paddaoan, Conner, Apayao"],
      action: "Get Directions",
      url: "https://maps.app.goo.gl/cVBsyEcaZvP9EEJs8"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["Main: (+63) 961-0942-608", "Prayer Line: Available Soon"],
      action: "Call Us",
      url: "tel:+639610942608"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cttpcatub.com", "pastor@cttpcatub.com"],
      action: "Send Email",
      url: "mailto:info@cttpcatub.com"
    },
  ]

  // Social Media with working links
  const socialMedia = [
    { icon: Facebook, name: "Facebook", url: "https://www.facebook.com/61552938899679", color: "text-blue-600" },
    { icon: Youtube, name: "YouTube", url: "https://www.youtube.com", color: "text-red-600" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out with questions, prayer requests, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to connect with CTTP Catub family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(info.url, "_blank")}
                    >
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <Card>
                <CardContent className="p-6">
                  <form
                    action="https://formspree.io/f/xeolqwby"
                    method="POST"
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="border px-3 py-2 rounded w-full"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="border px-3 py-2 rounded w-full"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        className="border px-3 py-2 rounded w-full"
                      />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="border px-3 py-2 rounded w-full"
                      />
                    </div>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Your message..."
                      required
                      className="border px-3 py-2 rounded w-full"
                    ></textarea>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
                    >
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Find Us
              </h3>
              
              {/* Map */}
              <Card className="mb-6">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-t-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src={mapImg}   
                      alt="Map location" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-4 text-center text-gray-600">
                    <p className="text-sm">Purok 06, Sitio Catub, Paddaoan, Conner, Apayao</p>
                  </div>
                </CardContent>
              </Card>

              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-6"
                onClick={() => window.open("https://maps.app.goo.gl/cVBsyEcaZvP9EEJs8", "_blank")}
              >
                Get Directions
              </Button>

              {/* Service Times */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-blue-600" />
                    Service Times
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday Worship</span>
                      <span className="text-gray-600">9:00 AM & 11:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday School</span>
                      <span className="text-gray-600">7:00 AM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>Stay connected through social media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {socialMedia.map((social, index) => {
                      const IconComponent = social.icon
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          className="flex items-center justify-center space-x-2"
                          onClick={() => window.open(social.url, "_blank")}
                        >
                          <IconComponent className={`h-4 w-4 ${social.color}`} />
                          <span>{social.name}</span>
                        </Button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Immediate Prayer or Pastoral Care?
          </h3>
          <p className="text-gray-700 mb-6">
            If you have an urgent prayer request or need immediate pastoral care, 
            please don't hesitate to reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-red-600 hover:bg-red-700"
              onClick={() => window.open("tel:+639610942608")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Prayer Line: (+63) 9610942608
            </Button>
            <Button 
              variant="outline" 
              className="border-red-600 text-red-600 hover:bg-red-50"
              onClick={() => window.open("mailto:pastor@cttpcatub.com")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Pastor Directly
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
