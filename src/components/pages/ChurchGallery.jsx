import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Image, FolderOpen, X, ArrowLeft } from 'lucide-react'

// Image imports
import congregationImg from '/src/assets/images/congregation.jpg'
import musicteam2Img from '/src/assets/images/musicteam2.jpg'
import childrenMinistryImg from '/src/assets/images/children-ministry.jpg'
import youthGroupImg from '/src/assets/images/youth-group.jpg'
import outreachImg from '/src/assets/images/outreach.jpg'
import menImg from '/src/assets/images/men.jpg'

// Ministries with folders, photos, and categories
const ministries = [
  {
    title: 'Men Ministry',
    image: menImg,
    category: 'Men',
    folders: [
      {
        name: 'Mens Fellowship',
        photos: [menImg, menImg, menImg],
      },
      {
        name: 'Service Projects',
        photos: [menImg, menImg],
      },
      {
        name: 'Annual Retreat',
        photos: [menImg, menImg, menImg, menImg],
      },
    ],
  },
  {
    title: 'Women Ministry',
    image: congregationImg,
    category: 'Women',
    folders: [
      {
        name: 'Fellowship Moments',
        photos: [congregationImg, congregationImg, congregationImg],
      },
      {
        name: 'Prayer Breakfast',
        photos: [congregationImg, congregationImg],
      },
      {
        name: 'Community Outreach',
        photos: [congregationImg, congregationImg, congregationImg, congregationImg],
      },
    ],
  },
  {
    title: 'Youth Ministry',
    image: youthGroupImg,
    category: 'Youth',
    folders: [
      {
        name: 'Youth Camp',
        photos: [youthGroupImg, youthGroupImg, youthGroupImg],
      },
      {
        name: 'Bible Study',
        photos: [youthGroupImg, youthGroupImg],
      },
      {
        name: 'Jesus Reigns',
        photos: [youthGroupImg, youthGroupImg, youthGroupImg, youthGroupImg],
      },
    ],
  },
  {
    title: 'Children Ministry',
    image: childrenMinistryImg,
    category: 'Children',
    folders: [
      {
        name: 'CHOP Pictures',
        photos: [childrenMinistryImg, childrenMinistryImg, childrenMinistryImg],
      },
      {
        name: 'DVBS 2025',
        photos: [childrenMinistryImg, childrenMinistryImg],
      },
      {
        name: 'Christmas Party',
        photos: [childrenMinistryImg, childrenMinistryImg, childrenMinistryImg, childrenMinistryImg],
      },
    ],
  },
  {
    title: 'Music Ministry',
    image: musicteam2Img,
    category: 'Other events',
    folders: [
      {
        name: 'Choir Practice',
        photos: [musicteam2Img, musicteam2Img, musicteam2Img],
      },
      {
        name: 'Worship Night',
        photos: [musicteam2Img, musicteam2Img],
      },
      {
        name: 'Instrumentalists',
        photos: [musicteam2Img, musicteam2Img, musicteam2Img, musicteam2Img],
      },
    ],
  },
  {
    title: 'Outreach Ministry',
    image: outreachImg,
    category: 'Other events',
    folders: [
      {
        name: 'Community Visits',
        photos: [outreachImg, outreachImg, outreachImg],
      },
      {
        name: 'Food Drive',
        photos: [outreachImg, outreachImg],
      },
      {
        name: 'Homeless Shelter Support',
        photos: [outreachImg, outreachImg, outreachImg, outreachImg],
      },
    ],
  },
  {
    title: 'Jesus Reigns 2024',
    image: congregationImg,
    category: 'Other events',
    folders: [
      {
        name: 'Prayer Meetings',
        photos: [congregationImg, congregationImg],
      },
      {
        name: 'Prayer Walks',
        photos: [congregationImg, congregationImg, congregationImg],
      },
    ],
  },
  {
    title: 'Thanksgiving Day 2025 ',
    image: menImg,
    category: 'Other events',
    folders: [
      {
        name: 'Home Groups',
        photos: [menImg, menImg, menImg],
      },
      {
        name: 'Discipleship Classes',
        photos: [menImg, menImg],
      },
    ],
  },
  {
    title: 'Bible Study Pictures',
    image: outreachImg,
    category: 'Other events',
    folders: [
      {
        name: 'Overseas Missions',
        photos: [outreachImg, outreachImg, outreachImg],
      },
      {
        name: 'Local Missions',
        photos: [outreachImg, outreachImg],
      },
    ],
  },
  {
    title: 'Fellowship Matter',
    image: childrenMinistryImg,
    category: 'Other events',
    folders: [
      {
        name: 'Sunday Welcoming',
        photos: [childrenMinistryImg, childrenMinistryImg],
      },
      {
        name: 'Event Support',
        photos: [childrenMinistryImg, childrenMinistryImg, childrenMinistryImg],
      },
    ],
  },
]

const categories = ['All', 'Men', 'Women', 'Youth', 'Children', 'Other events']

const ChurchGallery = () => {
  const [selectedMinistry, setSelectedMinistry] = useState(null)
  const [selectedFolder, setSelectedFolder] = useState(null)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const closeModal = () => {
    setSelectedMinistry(null)
    setSelectedFolder(null)
    setSelectedPhoto(null)
  }

  const filteredMinistries = selectedCategory === 'All' 
    ? ministries 
    : ministries.filter(ministry => ministry.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <Image className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Church Gallery
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
            Discover the heart of our community through moments of faith, fellowship, and celebration
          </p>
        </div>
      </section>

      {/* Ministry Cards */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Ministries</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMinistries.map((ministry, index) => (
              <Card key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 bg-white border-0">
                <div className="relative">
                  <div
                    className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${ministry.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        className="bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-bold shadow-xl transform transition-all duration-300 hover:scale-105 border-2 border-white/20"
                        onClick={() => {
                          setSelectedMinistry(ministry)
                          setSelectedFolder(null)
                        }}
                      >
                        <Image className="w-5 h-5 mr-2" />
                        See Photos
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <CardTitle className="text-2xl font-bold text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {ministry.title}
                  </CardTitle>
                  <div className="text-center mt-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {ministry.category}
                    </span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {filteredMinistries.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Image className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No ministries found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedMinistry && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col relative animate-in slide-in-from-bottom-4 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-200"
              onClick={closeModal}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {!selectedFolder ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">{selectedMinistry.title}</h2>
                  <p className="text-gray-600 text-lg">Choose a folder to explore</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto pr-2">
                  {selectedMinistry.folders.map((folder, idx) => (
                    <div
                      key={idx}
                      className="group border-2 border-gray-100 rounded-2xl p-8 cursor-pointer hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 hover:shadow-lg"
                      onClick={() => setSelectedFolder(folder)}
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <FolderOpen className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {folder.name}
                      </h3>
                      <p className="text-gray-500 font-medium">
                        {folder.photos.length} {folder.photos.length === 1 ? 'photo' : 'photos'}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center mb-8">
                  <button
                    className="flex items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-full transition-all duration-200 mr-6"
                    onClick={() => setSelectedFolder(null)}
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Back to Folders</span>
                  </button>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedFolder.name}</h2>
                    <p className="text-gray-600">{selectedFolder.photos.length} photos</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 overflow-y-auto pr-2">
                  {selectedFolder.photos.map((photo, idx) => (
                    <img
                      key={idx}
                      src={photo}
                      alt={`Photo ${idx + 1}`}
                      className="rounded-xl shadow-md object-cover w-full h-48 cursor-pointer transform hover:scale-105 transition-all duration-300 group-hover:shadow-xl"
                      onClick={() => setSelectedPhoto(photo)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 flex justify-center items-center z-50 p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div className="relative animate-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedPhoto} 
              alt="Full View" 
              className="max-w-[95vw] max-h-[95vh] object-contain rounded-2xl shadow-2xl" 
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
              onClick={closeModal}
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChurchGallery

