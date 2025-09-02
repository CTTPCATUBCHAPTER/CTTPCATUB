import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Download, HelpCircle, Rss } from 'lucide-react'

const Resources = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Tools and materials to help you grow in your faith journey
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Rss className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Blog & Devotionals</CardTitle>
                <CardDescription>Daily inspiration and teaching</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Read weekly devotionals and blog posts from our pastoral team to encourage your daily walk with God.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <span className="italic">Available Soon..</span>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Download className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Bible Study Resources</CardTitle>
                <CardDescription>Study guides and materials</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Download study guides, reading plans, and other resources to deepen your understanding of God's Word.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <span className="italic">Available Soon..</span>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <HelpCircle className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>FAQs</CardTitle>
                <CardDescription>Common questions answered</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Find answers to frequently asked questions about our church, beliefs, and how to get involved.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <span className="italic">Available Soon..</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources

