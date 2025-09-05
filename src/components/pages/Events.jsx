import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet'
import { Calendar, Clock, MapPin, X } from 'lucide-react'

const Events = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const events = [
    {
      title: "Christmas Program",
      date: "December 28, 2025",
      time: "6:00 PM & 8:00 PM",
      location: "Catub Church",
      description: "Join us for a special Christmas Program celebration with carols, candlelight, and the Christmas story.",
      category: "Special Service"
    },
    {
      title: "Jesus Reigns",
      date: "November 30, 2025",
      time: "8:00 AM & 6:00 PM",
      location: "Caglayan Gym",
      description: "Join us for Jesus Reigns! Grow in Faith, Worship, and Fellowship.",
      category: "Youth Event"
    },
    {
      title: "Youth Camp 2026",
      date: "May 30, 2026",
      time: "8:00 AM & 6:00 PM",
      location: "Catub Church",
      description: "Join us for Youth Camp, a time to grow closer to God and reflect on His faithfulness.",
      category: "Youth Event"
    },
    {
      title: "DVBS 2026",
      date: "May 30, 2025",
      time: "8:00 AM & 6:00 PM",
      location: "Catub Church",
      description: "Join us for Daily Vacation Bible School (DVBS) — a super fun way for kids to learn about God’s love!",
      category: "Children Event"
    }
  ]

  const handleComingSoonClick = () => {
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>Events & Calendar | Christ to the Philippines - Catub Chapter</title>
        <meta
          name="description"
          content="Stay connected with upcoming events and activities in the Christ to the Philippines - Catub Chapter community."
        />
        <meta
          name="keywords"
          content="Events, Calendar, Church Events, Special Services, Youth Events, Children Events, Christ to the Philippines, Catub Chapter"
        />
        <meta name="author" content="Christ to the Philippines - Catub Chapter" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Events & Calendar | Christ to the Philippines - Catub Chapter"
        />
        <meta
          property="og:description"
          content="Stay connected with upcoming events and activities in the Christ to the Philippines - Catub Chapter community."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cttpcatubchapter.com/events" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://cttpcatubchapter.com/events" />
      </Helmet>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Events & Calendar</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay connected with upcoming events and activities in our church community
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={handleComingSoonClick}
                  >
                    Coming Soon!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg border border-gray-200 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setModalOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <p className="text-gray-800">
              Registration has not started yet. Stay updated on our{' '}
              <a
                href="https://www.facebook.com/61552938899679"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Facebook page
              </a>.
            </p>
            <div className="mt-4 text-right">
              <Button onClick={() => setModalOpen(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Events
