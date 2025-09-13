import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { GlobeDemo } from "@/components/globe-demo"
import { Mail, Clock, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 relative min-h-screen flex items-center justify-center">
        <GlobeDemo />
      </div>

      {/* Launching Soon Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Launching Soon</h2>
          <p className="text-xl text-gray-600 mb-8">Get ready for the future of AI-powered travel experiences</p>
          <InteractiveHoverButton text="Try Beta" className="w-48 h-14 text-xl" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Stay connected with Expi</p>
          </div>
          
          <div className="flex justify-center">
            <div className="text-center p-12 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-md w-full">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-8">
                <Mail className="w-8 h-8 text-gray-600" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Email</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">hello@expi.travel</p>
                  <p className="text-sm text-gray-500">General inquiries</p>
                </div>
                
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">info@expi.travel</p>
                  <p className="text-sm text-gray-500">Business information</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <p className="text-sm">We'll get back to you within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
