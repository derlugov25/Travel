import { GlobeDemo } from "@/components/globe-demo"

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
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Notified
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Stay connected with Expi</p>
          </div>
          
          <div className="flex justify-center">
            <div className="text-center p-12 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 max-w-md w-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Email</h3>
              <p className="text-gray-600 text-lg">hello@expi.travel</p>
              <p className="text-gray-500 text-sm mt-2">info@expi.travel</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}