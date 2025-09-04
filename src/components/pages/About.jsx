import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet'

import { 
  
  Cross, 
  Heart, 
  Users, 
  BookOpen,
  Star,
  Mail,
  Phone,
  Target,
  Eye,
  CheckCircle,
  UserCheck,
  Globe,
  Building
} from 'lucide-react'

// Import images
import heroImg from '../../assets/images/hero.jpg'
import congregationImg from '../../assets/images/churchf.jpg'
import pastoraImg from '../../assets/images/pastora.jpg'
import { Link } from 'react-router-dom'



const About = () => {
  const coreBeliefs = [
    {
      title: "The Bible",
      description: "We believe in the Bible as the Word of God, verbally inspired by the Holy Spirit, completely without error as originally written, and supremely authoritative for faith and conduct. (Matt. 24:35; Ps. 119:89; II Pet. 1:9-12; 2 Tim 3:15-17)"
    },
    {
      title: "The Trinity",
      description: "We believe in the one true God, eternally existent in three distinct persons – Father, Son and Holy Spirit. (Deut. 6:4; Lk. 3:22; Matt. 28:19; 2 Cor. 13:14; Jn. 1:1,14)"
    },
    {
      title: "Jesus Christ",
      description: "We believe in the deity of our Lord Jesus Christ, who was born of a virgin, lived a sinless life, did many miracles, died on the cross as sacrifice for sin, resurrected bodily, ascended to heaven, and will return to earth in power and glory. (John 1:1,14,18; John 3:16; Luke 1:30-35; Phil. 2:5-8; Col. 2:3,9; Mark 10:45; Acts 2:22-24; John 1:29; Rom. 3:25-26; Heb. 10:5-14; 1 Pet. 2:24, 1 Pet. 3:18; John 20:20; Phil. 3:20-21; Heb. 1:3; Rom. 8:34; 1 John 2:1; Acts 1:11; Heb. 9:28; 1 Thes. 4:13-18; 2 Thes. 2:7; Matt. 24:44; Rev. 19:11-21)"
    },
    {
      title: "Salvation",
      description: " We believe that man was created in the image and likeness of God but fell voluntarily to sin and his only hope of redemption is through repentance from sin and faith in the finished work of Christ on the cross, which provided salvation from sin and healing for the body in answer to believing prayer. (Gen. 1:26-31; Gen. 3:1-7; Acts 2:38; 3:19; Acts 20:21; Rom. 10:9-10; I Jn. 5:13; Isa. 53:4-5; James 5:14-16)"
    },
    {
      title: "Baptism & Communion",
      description: "We believe that every true believer of Jesus Christ should be baptized by immersion in water in obedience to His commandment; that he should be partaker of the Holy Communion which is the Lord's Supper, a memorial of Christ's suffering and death and a prophecy of His Second Coming. (Matt. 28:19; Acts 10:47; Rom. 6:4; I Cor. 11:23-26)"
    },
    {
      title: "The Holy Spirit",
      description: "We believe in the baptism of the Holy Spirit and in His many other works in the life of believers, particularly in empowering them for a life of holiness and service. (Acts 1:4-5,8; Rom 8:1-17; I Pet 1:2; 2 Thess. 2:13; Gal. 5:22-23; I Cor. 12:1-11) (As amended on May 23, 2019)"
    },
    {
      title: "The Church",
      description: "We believe in the church of the Lord Jesus Christ, which is made up of true born again believers, who have been baptized by immersion, regularly partaking of the Lord's Supper, are championing the Great Commission, which involves the evangelization of the lost and the discipleship of believers, and who submit to the governing authorities of the church and to church discipline. (Eph. 1:22-23; I Cor. 12:12-14,27; Mk. 16:15-20; Matt. 28:18-20; Eph. 4:11-13; Heb. 13:17-19; I Thess. 5:12; Matt. 18:15-17)"
    },
    {
      title: "Stewardship",
      description: "We believe that the work of the Lord in and through the church is best sustained and expanded through the faithful giving of tithes and offerings of its members. (Mal 3:8-10; Prov 3:9-10; 1Cor. 9:7-14; 2Cor 9:15)"
    },
    {
      title: "Marriage",
      description: "We believe that marriage is an exclusive union between two consenting adults, one man and one woman, and that, outside of it, any sexual act is considered sinful, including but not limited to fornication, adultery, and same-sex sexual acts, which call for church discipline, the ultimate extent of which is expulsion from the church. (Gen. 2:24; Matt. 19:4-6; Heb. 13:4; Lev. 18:22; I Cor. 6:9) (As amended on May 23, 2019)"
    },
    {
      title: "Second Coming",
      description: "We believe in the Second Coming of Christ, the bodily resurrection of both believers and the lost, in the final judgment and in the final dwelling place for believers, the New Heaven and New Earth. (Matt. 24:30-31; I Thess. 4:13-18; Matt. 25:46; Mk. 9:38-48; Rev. 20:11-15; 21:8; Isa. 66:22; II Pet. 3:13; Rev. 21:1) (As amended on May 23, 2019)"
    }
  ]

  const coreValues = [
    {
      title: "Discipline",
      description: "Discipline mixed with love makes functional, well-balanced disciples. CTTP leaders and disciplers will not induce fear, humiliation, shame or emotional coercion but should aim at full restoration for an erring member.",
      icon: UserCheck
    },
    {
      title: "Integrity",
      description: "Integrity is the fullness of self and requires a spiritual and transformative journey. It requires an inner sense of 'wholeness' and consistency of character.",
      icon: CheckCircle
    },
    {
      title: "Submission",
      description: "All authorities come from God, thus rebelling against them is rebelling against God. In CTTP, we honor and respect God's appointed authorities.",
      icon: Users
    },
    {
      title: "Commitment",
      description: "The cost of totally committing to God is high because He demands 100%, not half-hearted commitment; that is loving Him with all our heart, mind, soul and strength.",
      icon: Heart
    },
    {
      title: "Initiative",
      description: "As a church, CTTP's prayer is to transform the Philippines into a truly progressive Christian nation in Asia through active participation in community development.",
      icon: Target
    },
    {
      title: "Partnerships",
      description: "CTTP encourages partnership among churches within the organization in pursuit of a shared vision and mission with loving and helping relationships.",
      icon: Globe
    },
    {
      title: "Loyalty",
      description: "In CTTP context, loyalty to the organization means faithfulness and devotion to the Ministry's cause, doctrines, principles and leadership.",
      icon: Star
    },
    {
      title: "Excellence",
      description: "We serve a mighty excellent God so He expects quality and excellence from what we do - from cleanliness and orderliness of our sanctuary to our praise and worship.",
      icon: Building
    },
    {
      title: "Stewardship",
      description: "Whether we have much or little, we are accountable to God for everything - our treasure, talents and time. Stewardship is using all that we have for the glory of the Giver.",
      icon: BookOpen
    }
  ]

  const missionPoints = [
    {
      title: "Experience Christ",
      icon: Heart
    },
    {
      title: "Engage People",
      icon: Users
    },
    {
      title: "Explore Nation",
      icon: Globe
    },
    {
      title: "Expand Churches",
      icon: Building
    }
  ]

  const leadership = [
    {
      name: "Ptr. Elizabeth C. Leon",
      position: "Host Pastor",
      description: "Ptr. Elizabeth leads our congregation with dedication and passion for spreading the Gospel. She oversees the ministry and spiritual growth of our church family.",
      email: "Liza123leon@gmail.com",
      phone: "(+63) 9369090646",
      image: "/api/placeholder/300/300" // Placeholder for now
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <Helmet>
        <title>Christ to the Philippines - Catub Chapter/About</title>
    
        <meta name="keywords" content="Catub chapter, cttp, catub, cttp catub, catub church, cttp catub chapter, christ to the philippines, catub, christ to the philippines - catub chapter, catub church, CTTP CATUB, Cttp, cttp catub church, church, Philippines, worship, ministry, events, youth, children, outreach" />
        <meta name="author" content="Christ to the Philippines - Catub Chapter" />
      
        
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="relative py-15 bg-gradient-to-r from-blue-900 to-blue-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="relative z-10 max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Christ to the Philippines - Catub Chapter
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover our story, beliefs, and the people who make our church family special
          </p>
        </div>
      </section>

      {/* Our Story - Card Layout */}
      <section id="history" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
          </div>
          
          <Card className="overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={congregationImg} 
                  alt="Church congregation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Christ to the Philippines - Catub Chapter was established as part of the 
                    broader Christ to the Philippines ministry, dedicated to spreading the 
                    Gospel throughout the Philippines. Our Catub Chapter serves the local 
                    community with a heart for evangelism and discipleship.
                  </p>
                  <p className="text-sm md:text-base">
                    We are committed to the Great Commission, reaching out to our neighbors 
                    with the love of Christ while building a strong foundation of biblical 
                    teaching and Christian fellowship. Our ministry focuses on both local 
                    outreach and supporting the broader mission work across the Philippines.
                  </p>
                  <p className="text-sm md:text-base">
                    Today, we continue to grow as a community of believers united in our 
                    mission to bring Christ to the Philippines, one life at a time. Our 
                    church family is dedicated to worship, discipleship, and service to 
                    both our local community and the nation.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Mission & Vision - Professional UI */}
      <section id="mission" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="text-center shadow-lg">
              <CardHeader className="pb-4">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {missionPoints.map((point, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 text-center">
                      <point.icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-blue-800 text-sm md:text-base">{point.title}</h4>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardHeader className="pb-4">
                <Eye className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A growing, multiplying and disciple-making church reaching out to the Philippines and to the nations for God's glory.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team - With Pastor Image */}
      <section id="leadership" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated leaders who guide and serve our church family
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={pastoraImg} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                      <p className="text-xl text-blue-600 font-semibold mb-4">{leader.position}</p>
                      <p className="text-gray-700 leading-relaxed mb-6">{leader.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <span className="text-sm">{leader.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <span className="text-sm">{leader.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Smaller Font Size */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our ministry and community life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <value.icon className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-lg text-blue-600">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith - Smaller Font Size */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Statement of Faith
            </h2>
            <p className="text-xl text-gray-600">
              Our core beliefs are rooted in biblical truth 
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreBeliefs.map((belief, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-lg">{belief.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed">{belief.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Denominational Affiliation */}
      <section id="affiliation" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Organizational Connection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-3xl mx-auto">
                <p className="text-s text-gray-700 leading-relaxed">
                  CTTP Catub Chapter is a local church under the Ilocano District of Christ to the Philippines (CTTP). As part of this Christ-centered and gospel-driven organization, we are committed to proclaiming the Good News, making disciples, and building up the Body of Christ both locally and nationally.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Learn More?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We'd love to answer your questions and help you get connected with our church family.
          </p>
            <Link to="/contact">
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            Contact Us Today
          </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About


