import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Play, 
  Calendar, 
  Clock,
  BookOpen,
  Search,
  Eye,
  X
} from 'lucide-react'

const Sermons = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedNotes, setSelectedNotes] = useState(null)

  const sermonSeries = [
    {
      title: "Walking in Faith",
      description: "A journey through the book of Hebrews exploring what it means to live by faith",
      sermons: 8,
      status: "current",
      speaker: "Ptr. Elizabeth C. Leon",
      notes: "Faith is not just believing in God's existence, but trusting in His character and promises even when circumstances seem impossible. In Hebrews 11, we see a hall of fame of faith - ordinary people who did extraordinary things because they trusted in an extraordinary God.\n\nKey Points:\n1. Faith sees the invisible (Hebrews 11:1)\n2. Faith acts on God's promises (Hebrews 11:8-10)\n3. Faith perseveres through trials (Hebrews 11:35-40)\n\nApplication:\n- Trust God's timing even when it doesn't make sense\n- Step out in obedience before you see the full picture\n- Remember that faith is a journey, not a destination\n\nPrayer: Lord, help us to walk by faith and not by sight, trusting in Your perfect plan for our lives."
    },
    {
      title: "The Heart of Worship",
      description: "Discovering authentic worship in the Psalms",
      sermons: 12,
      status: "completed",
      speaker: "Ptr. Elizabeth C. Leon",
      notes: "True worship goes beyond singing songs - it's a lifestyle of surrender and devotion to God. The Psalms teach us that worship involves our whole being: heart, mind, soul, and strength.\n\nKey Points:\n1. Worship is about God's worthiness, not our feelings\n2. Authentic worship requires honesty before God\n3. Worship transforms our perspective on life\n\nApplication:\n- Make worship a daily practice, not just a Sunday activity\n- Be honest with God about your struggles and doubts\n- Let worship change how you see your circumstances\n\nPrayer: Father, help us to worship You in spirit and in truth, with hearts fully surrendered to Your will."
    }
  ]

  const recentSermons = [
    {
      title: "Faith That Overcomes",
      speaker: "Ptr. Elizabeth C. Leon",
      date: "January 12, 2025",
      duration: "42 min",
      series: "Walking in Faith",
      description: "Exploring how faith helps us overcome life's challenges through Hebrews 11.",
      notes: "Faith is the victory that overcomes the world. When we face challenges, our faith in God's goodness and sovereignty gives us the strength to persevere.\n\nKey Points:\n1. Faith sees beyond present circumstances\n2. Faith draws strength from God's promises\n3. Faith produces perseverance in trials\n\nApplication:\n- Trust God's plan even in difficult seasons\n- Meditate on God's promises daily\n- Encourage others with testimonies of God's faithfulness\n\nPrayer: Lord, strengthen our faith to overcome every obstacle and trust in Your perfect timing."
    },
    {
      title: "The Power of Prayer",
      speaker: "Ptr. Elizabeth C. Leon",
      date: "January 5, 2025",
      duration: "38 min",
      series: "Walking in Faith",
      description: "Understanding the role of prayer in the life of faith.",
      notes: "Prayer is not just asking God for things - it's communion with our Heavenly Father. Through prayer, we align our hearts with God's will and experience His peace.\n\nKey Points:\n1. Prayer changes us more than our circumstances\n2. Persistent prayer demonstrates faith\n3. Prayer connects us to God's power\n\nApplication:\n- Develop a consistent prayer life\n- Pray according to God's will revealed in Scripture\n- Trust God's timing in answering prayers\n\nPrayer: Father, teach us to pray with faith, persistence, and surrender to Your perfect will."
    },
    {
      title: "Trusting God's Promises",
      speaker: "Ptr. Elizabeth C. Leon",
      date: "December 29, 2024",
      duration: "45 min",
      series: "Walking in Faith",
      description: "How Abraham's faith teaches us to trust in God's promises.",
      notes: "Abraham's journey of faith shows us that trusting God's promises often requires stepping into the unknown. God's promises are always faithful, even when the fulfillment takes time.\n\nKey Points:\n1. God's promises are based on His character\n2. Faith acts on promises before seeing fulfillment\n3. God's timing is always perfect\n\nApplication:\n- Study and memorize God's promises in Scripture\n- Take steps of obedience based on God's word\n- Wait patiently for God's perfect timing\n\nPrayer: Lord, help us to trust Your promises completely and walk in obedience to Your calling."
    },
    {
      title: "Worship in Spirit and Truth",
      speaker: "Ptr. Elizabeth C. Leon",
      date: "December 22, 2024",
      duration: "35 min",
      series: "The Heart of Worship",
      description: "What Jesus taught about authentic worship.",
      notes: "Jesus revealed that true worship is not about location or ritual, but about the condition of our hearts. Worship in spirit and truth means worshiping with sincerity and according to God's revelation.\n\nKey Points:\n1. True worship comes from a regenerated heart\n2. Worship must be based on biblical truth\n3. Authentic worship transforms our lives\n\nApplication:\n- Examine your heart's motivation in worship\n- Study Scripture to understand who God is\n- Let worship overflow into daily life\n\nPrayer: Father, help us to worship You with pure hearts and according to Your truth revealed in Your Word."
    }
  ]

  const categories = [
    { id: 'all', name: 'All Sermons' },
    { id: 'current', name: 'Current Series' },
    { id: 'sunday', name: 'Sunday Sermons' }
  ]

  const filteredSermons = recentSermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.series.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (selectedCategory === 'all') return matchesSearch
    if (selectedCategory === 'current') return matchesSearch && sermon.series === 'Walking in Faith'
    if (selectedCategory === 'sunday') return matchesSearch
    return matchesSearch
  })

  const openNotes = (notes) => {
    setSelectedNotes(notes)
  }

  const closeNotes = () => {
    setSelectedNotes(null)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sermons & Messages
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Grow in your faith through biblical teaching and practical application
          </p>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-red-600 text-white">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-red-300 rounded-full animate-pulse mr-2"></div>
                    <span className="text-red-100 font-semibold">LIVE NOW</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Sunday Worship Service</h3>
                  <p className="text-red-100">Join us live for worship and preaching</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-white text-blue-600 hover:bg-red-50"
                    onClick={() => window.open('https://www.facebook.com/61552938899679', '_blank')}>
                    <Play className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                  <Button className="bg-white text-red-600 hover:bg-red-50"
                    onClick={() => window.open('https://www.youtube.com', '_blank')}>
                    <Play className="mr-2 h-4 w-4" />
                    Youtube
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Series - Only 2 Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Series
            </h2>
            <p className="text-xl text-gray-600">
              Join us as we explore God's Word together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sermonSeries.slice(0, 2).map((series, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{series.title}</CardTitle>
                    {series.status === 'current' && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        Current
                      </span>
                    )}
                  </div>
                  <CardDescription>{series.description}</CardDescription>
                  <p className="text-sm text-blue-600 font-semibold">by {series.speaker}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">{series.sermons} messages</span>
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => openNotes(series.notes)}>
                    <Eye className="mr-2 h-4 w-4" />
                    Read Notes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Messages
            </h2>
            <p className="text-xl text-gray-600">
              Catch up on recent sermons and teachings
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search sermons, speakers, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Sermon List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredSermons.map((sermon, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{sermon.title}</CardTitle>
                      <CardDescription className="text-blue-600 font-semibold">
                        {sermon.series}
                      </CardDescription>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {sermon.date}
                      </p>
                      <p className="flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {sermon.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">by {sermon.speaker}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{sermon.description}</p>
                  
                  <div className="flex justify-center">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => openNotes(sermon.notes)}>
                      <Eye className="mr-2 h-4 w-4" />
                      Read Notes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="px-8">
              Load More Sermons
            </Button>
          </div>
        </div>
      </section>

      {/* Notes Modal - Notebook Style - Mobile Responsive */}
      {selectedNotes && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-95 flex items-start justify-center p-2 sm:p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl min-h-[95vh] sm:min-h-0 sm:max-h-[90vh] overflow-hidden border-2 border-gray-200 my-2 sm:my-auto">
            {/* Notebook Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sm:p-6 flex justify-between items-center border-b-4 border-blue-800 sticky top-0 z-10">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />
                <h3 className="text-lg sm:text-2xl font-bold">Sermon Notes</h3>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={closeNotes}
                className="text-white hover:bg-blue-500 rounded-full p-1 sm:p-2">
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </div>
            
            {/* Notebook Content */}
            <div className="bg-gradient-to-b from-blue-50 to-white p-4 sm:p-8 overflow-y-auto flex-1">
              {/* Notebook Lines Effect - Responsive */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-red-300 ml-6 sm:ml-12"></div>
                <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-200 ml-8 sm:ml-16"></div>
                
                {/* Content */}
                <div className="pl-12 sm:pl-20 pr-2 sm:pr-8">
                  <div className="prose max-w-none">
                    {selectedNotes.split('\n').map((paragraph, index) => (
                      <div key={index} className="relative">
                        {/* Notebook line */}
                        <div className="absolute left-0 right-0 h-px bg-blue-100 opacity-30" style={{top: '1.2rem'}}></div>
                        <p className="mb-4 sm:mb-6 text-gray-800 leading-relaxed text-sm sm:text-lg font-medium relative z-10 bg-white bg-opacity-80 pr-2 sm:pr-4">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Notebook Footer */}
            <div className="bg-gray-50 px-4 sm:px-8 py-3 sm:py-4 border-t border-gray-200 sticky bottom-0">
              <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
                <span>Christ to the Philippines - Catub Chapter</span>
                <span>Ptr. Elizabeth C. Leon</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Podcast Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Listen on the Go
          </h3>
          <p className="text-gray-600 mb-8">
            Subscribe to our Facebook page and Youtube channel to never miss a message
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open('https://www.facebook.com/61552938899679', '_blank')}>
              Facebook
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => window.open('https://www.youtube.com', '_blank')}>
              YouTube
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sermons


