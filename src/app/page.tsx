import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { GlobeDemo } from "@/components/globe-demo"
import { Mail } from "lucide-react"

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

      {/* Footer Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            {/* Left Column - About Expi */}
            <div className="space-y-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About Expi</h3>
              <p className="text-gray-600 leading-relaxed">
                Your gateway to AI-powered travel experiences: personalized recommendations, 
                smart itinerary planning, and seamless booking—transforming how you discover 
                and explore the world.
              </p>
            </div>

            {/* Right Column - Contact */}
            <div className="space-y-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <a 
                      href="mailto:hello@expi.travel" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      hello@expi.travel
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <a 
                      href="mailto:info@expi.travel" 
                      className="text-blue-700 transition-colors"
                    >
                      info@expi.travel
                    </a>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-gray-600 text-sm">
                    Ready to explore the world?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2025 Expi — AI-Powered Travel Platform. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
