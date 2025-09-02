import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, MapPin, Users, Heart, BookOpen, ArrowRight, Play, X, ChevronLeft, ChevronRight } from 'lucide-react'

// Import all images correctly
import congregationImg from '../../assets/images/congregation.jpg'
import musicteam2Img from '../../assets/images/musicteam2.jpg'
import childrenMinistryImg from '../../assets/images/children-ministry.jpg'
import youthGroupImg from '../../assets/images/youth-group.jpg'
import outreachImg from '../../assets/images/outreach.jpg'
import menImg from '../../assets/images/men.jpg'
import facebooklogoImg from '../../assets/images/facebooklogo.png'
import heroakoImg from '../../assets/images/heroako.jpg'

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentMinistryIndex, setCurrentMinistryIndex] = useState(0)

  const upcomingEvents = [
    { title: 'Jesus Reigns', date: 'Saturday, Nov. 30', time: '9:00 AM - 12:00 AM', location: 'Caglayan Gym'},
    { title: 'Christmas Program', date: 'Sunday, Dec 28', time: '6:00 PM', location: 'Catub Church'},
  ]

  const recentEvents = [
    {
      id: 1,
      title: 'Sunday Worship Service',
      description: 'Join us for an inspiring worship experience',
      videoUrl: 'https://www.youtube.com/embed/7tEu9JEDimQ',
      thumbnail: 'https://img.youtube.com/vi/7tEu9JEDimQ/maxresdefault.jpg'
    },
    {
      id: 2,
      title: 'Youth Ministry Gathering',
      description: 'Young hearts coming together in faith',
      videoUrl: 'https://www.youtube.com/embed/W1B6T_bksQA',
      thumbnail: 'https://img.youtube.com/vi/W1B6T_bksQA/maxresdefault.jpg'
    },
    {
      id: 3,
      title: 'Community Outreach',
      description: 'Serving our community with love',
      videoUrl: 'https://www.youtube.com/embed/6fpNW6OBxrw',
      thumbnail: 'https://img.youtube.com/vi/6fpNW6OBxrw/maxresdefault.jpg'
    }
  ]

  // Combined all ministries into one array for easier slider management
  const allMinistries = [
    { title: 'Men Ministry', description: 'Building strong faith and kindness through meaningful activities, brotherhood, and service.', image: menImg, link: '/get-involved#small-groups' },
    { title: 'Women Ministry', description: 'Encouraging women to strengthen their relationship with God through Bible study, worship, and meaningful kindness.', image: congregationImg, link: '/get-involved#small-groups' },
    { title: 'Youth Ministry', description: 'Empowering teenagers to grow in faith and build lasting friendships.', image: youthGroupImg, link: '/get-involved#small-groups' },
    { title: 'Children Ministry', description: 'Guiding children in faith, activities, and Bible study that nurtures growth and kindness.', image: childrenMinistryImg, link: '/get-involved#small-groups' },
    { title: 'Music Ministry', description: 'Leading worship and praise through the beauty of music.', image: musicteam2Img, link: '/get-involved#small-groups' },
    { title: 'Outreach Ministry', description: 'Serving the community and sharing the kindness of Christ with others.', image: outreachImg, link: '/get-involved#small-groups' },
  ]

  const openVideoModal = (video) => {
    setSelectedVideo(video)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % recentEvents.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + recentEvents.length) % recentEvents.length)
  }

  const nextMinistry = () => {
    setCurrentMinistryIndex((prev) => (prev + 1) % allMinistries.length)
  }

  const prevMinistry = () => {
    setCurrentMinistryIndex((prev) => (prev - 1 + allMinistries.length) % allMinistries.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-start justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroakoImg})` }} />
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/10" />

        <div className="relative z-10 max-w-5xl w-full px-4 pt-16 sm:pt-20 md:pt-24 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lora font-semibold leading-tight text-gray-800">
            MAKING ALL THINGS NEW
          </h1>
          <p className="text-xs sm:text-sm md:text-base mt-2 text-slate-700">2 Cor. 5: 17</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              size="sm"
              className="bg-white/90 text-blue-900 hover:bg-white hover:text-blue-800 text-sm px-4 py-2 flex items-center backdrop-blur-sm"
              onClick={() => window.open('https://www.facebook.com/61552938899679', '_blank')}
            >
              <img src={facebooklogoImg} alt="Facebook" className="mr-2 h-4 w-4" />
              <span className="text-blue-800 font-semibold">Visit Our Page</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Events Video Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Events</h2>
            <p className="text-xl text-gray-600">Watch highlights from our recent gatherings and celebrations</p>
          </div>

          {/* Desktop View - Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {recentEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => openVideoModal(event)}>
                <div className="relative">
                  <img 
                    src={event.thumbnail} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <Play className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Mobile View - Slider */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentVideoIndex * 100}%)` }}
              >
                {recentEvents.map((event) => (
                  <div key={event.id} className="w-full flex-shrink-0 px-4">
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => openVideoModal(event)}>
                      <div className="relative">
                        <img 
                          src={event.thumbnail} 
                          alt={event.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-3">
                            <Play className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <button 
              onClick={prevVideo}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={nextVideo}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>

            {/* Slider Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {recentEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentVideoIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="relative">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-64 md:h-96"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Service Times */}
      {/* ... the rest of your code stays unchanged ... */}
    </div>
  )
}

export default Home
