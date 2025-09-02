import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, CreditCard, Smartphone, Building, MessageCircle } from 'lucide-react'

// Step 1: Import your image here (adjust the path to your actual location)
import qrImage from '@/assets/images/QRcode.png'  // <-- change path if needed

const Giving = () => {
  const [showQR, setShowQR] = useState(false)

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Give Online</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Support God's work through CTTP Catub Church with your generous giving
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ways to Give
            </h2>
            <p className="text-xl text-gray-600">
              Choose the giving method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>GCash</CardTitle>
                <CardDescription>Give using your mobile wallet</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 mb-4"
                  onClick={() => setShowQR(true)}
                >
                  GCash QR code
                </Button>
                <p className="text-sm text-gray-600">Quick mobile payments</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Talk to Our Pastor</CardTitle>
                <CardDescription>Give directly through facebook chat</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
  onClick={() => window.open('https://www.facebook.com/share/1Kx4m73wiA/', '_blank')}
  className="w-full bg-blue-600 hover:bg-blue-700 mb-4"
>
  Chat Now
</Button>

                <p className="text-sm text-gray-600">Chat with our host pastor about giving</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Bank Transfer</CardTitle>
                <CardDescription>Secure and convenient online giving</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
  <span className="italic">Coming Soon..</span>
</Button>

                <p className="text-sm text-gray-600">One-time or recurring donations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm p-6">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-auto p-8 flex flex-col items-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Scan to Give via GCash</h2>
            <img
              src={qrImage}
              alt="GCash QR Code"
              className="w-72 h-72 mb-6 rounded-lg border-4 border-green-500 shadow-lg"
            />
            <p className="text-gray-700 text-base mb-8 text-center max-w-xs">
              Open your GCash app and scan this QR code to send your offering securely and quickly.
            </p>
            <Button
              onClick={() => setShowQR(false)}
              className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition duration-300"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Giving
