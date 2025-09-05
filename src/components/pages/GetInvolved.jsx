import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet'
import { Users, Heart, HandHeart, BookOpen } from 'lucide-react'

const GetInvolved = () => {
  const ministries = [
    {
      title: "Men Ministry",
      description: "Building strong faith and fellowship through meaningful activities, brotherhood, and service.",
      icon: Users,
      opportunities: ["House to House Bible Studies", "Building Church Projects", "Mission", "And other exciting opportuinies"]
    },
    {
      title: "Women Ministry",
      description: "Encouraging women to strengthen their relationship with God through Bible study, worship, and meaningful fellowship.",
      icon: Users,
      opportunities: ["House to House Bible Studies", "Devotions", "Intimate Fellowship", "And other exciting opportuinies"]
    },
    {
      title: "Youth Ministry",
      description: "Empowering teenagers to grow in faith and build lasting friendships.",
      icon: Heart,
      opportunities: ["Youth Leader", "Discipleship", "Team Building", "And other exciting opportuinies"]
    },
    {
      title: "Worship Team",
      description: "Use your musical talents to lead the congregation in worship.",
      icon: BookOpen,
      opportunities: ["Song Lead", "Drummer", "Guitarist", "Bassist", "Be Part of the Music Team"]
    },
    {
      title: "Children Ministry",
      description: "Guiding children in faith with engaging activities and Bible stories that inspire growth and love.",
      icon: Users,
      opportunities: ["DVBS Teacher", "Discipleship", "Fulfillment Joy ", "Exciting Games and Lovely Kids" ]
    },
    {
      title: "Outreach Ministry",
      description: "Opportuinity to reach local churches and experience mission.",
      icon: HandHeart,
      opportunities: ["Fellowship with local churches", "Travel", "Missions Support", "Church Planting"]
    }
    
    
  ]

  return (
    <div className="min-h-screen">
<Helmet>
        <title>Get Involved | Christ to the Philippines - Catub Chapter</title>
        <meta
          name="description"
          content="Find your place in our church family and make a difference. Explore ministry opportunities to serve God and others."
        />
        <meta
          name="keywords"
          content="Get Involved, Ministries, Service, Faith, Christ to the Philippines, Catub Chapter"
        />
        <meta name="author" content="Christ to the Philippines - Catub Chapter" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Get Involved | Christ to the Philippines - Catub Chapter"
        />
        <meta
          property="og:description"
          content="Find your place in our church family and make a difference. Explore ministry opportunities to serve God and others."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cttpcatubchapter.com/get-involved" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://cttpcatubchapter.com/get-involved" />
      </Helmet>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HandHeart className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Find your place in our church family and make a difference in the lives of others
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ministry Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Use your gifts and talents to serve God and others
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-blue-600 mb-4" />
                    <CardTitle>{ministry.title}</CardTitle>
                    <CardDescription>{ministry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900">Opportunities:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {ministry.opportunities.map((opportunity, idx) => (
                          <li key={idx}>{opportunity}</li>
                        ))}
                      </ul>
                    </div>
                    <Button
  className="w-full bg-blue-600 hover:bg-blue-700"
  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScEx2MBnWaYYLm1cGlqW-2b06A4G05Otrqb-QQQPMzTGBLibw/viewform?usp=dialog', '_blank')}
>
  Sign Up
</Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetInvolved

