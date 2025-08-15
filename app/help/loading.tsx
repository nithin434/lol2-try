export default function HelpLoading() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header skeleton */}
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-800 rounded-lg mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-800 rounded-lg max-w-2xl mx-auto animate-pulse"></div>
          </div>

          {/* Search bar skeleton */}
          <div className="mb-12">
            <div className="h-12 bg-gray-800 rounded-lg animate-pulse"></div>
          </div>

          {/* FAQ categories skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="h-6 bg-gray-800 rounded mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-800 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* FAQ items skeleton */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                <div className="h-6 bg-gray-800 rounded mb-3 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-800 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-800 rounded w-4/6 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
