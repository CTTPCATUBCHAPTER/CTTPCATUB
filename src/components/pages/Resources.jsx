import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet'
import { BookOpen, Download, HelpCircle, Rss } from 'lucide-react'

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Resources | Christ to the Philippines - Catub Chapter</title>
        <meta
          name="description"
          content="Access devotionals, Bible study guides, FAQs, and church materials to help you grow in your faith journey with Christ to the Philippines - Catub Chapter."
        />
        <meta
          name="keywords"
          content="Resources, Devotionals, Bible Study, FAQs, Faith Growth, Christ to the Philippines, Catub Chapter"
        />
        <meta name="author" content="Christ to the Philippines - Catub Chapter" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Resources | Christ to the Philippines - Catub Chapter" />
        <meta
          property="og:description"
          content="Explore devotionals, Bible study guides, FAQs, and church resources to help strengthen your faith."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cttpcatubchapter.com/resources" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://cttpcatubchapter.com/resources" />

        {/* Structured Data: WebPage + ItemList */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Resources",
              "url": "https://cttpcatubchapter.com/resources",
              "description": "Access devotionals, Bible study guides, FAQs, and church materials to help you grow in your faith journey.",
              "publisher": {
                "@type": "Organization",
                "name": "Christ to the Philippines - Catub Chapter",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://cttpcatubchapter.com/logo.png"
                }
              },
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "CreativeWork",
                    "position": 1,
                    "name": "Blog & Devotionals",
                    "description": "Weekly devotionals and blog posts from our pastoral team.",
                    "url": "https://cttpcatubchapter.com/resources/blog-devotionals"
                  },
                  {
                    "@type": "CreativeWork",
                    "position": 2,
                    "name": "Bible Study Resources",
                    "description": "Download study guides, reading plans, and more to deepen your faith.",
                    "url": "https://cttpcatubchapter.com/resources/bible-study"
                  },
                  {
                    "@type": "CreativeWork",
                    "position": 3,
                    "name": "FAQs",
                    "description": "Answers to common questions about our church and beliefs.",
                    "url": "https://cttpcatubchapter.com/resources/faqs"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-blue-200" aria-hidden="true" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Tools and materials to help you grow in your faith journey
            </p>
          </div>
        </section>

        {/* Resource Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Rss className="h-12 w-12 text-blue-600 mb-4" aria-hidden="true" />
                <CardTitle as="h2">Blog & Devotionals</CardTitle>
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
                <Download className="h-12 w-12 text-green-600 mb-4" aria-hidden="true" />
                <CardTitle as="h2">Bible Study Resources</CardTitle>
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
                <HelpCircle className="h-12 w-12 text-purple-600 mb-4" aria-hidden="true" />
                <CardTitle as="h2">FAQs</CardTitle>
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
        </section>
      </main>
    </div>
  )
}

export default Resources
