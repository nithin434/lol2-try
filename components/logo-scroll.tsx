import Image from "next/image"

const logos = [
  "/logo1.png",
  "/logo2.png", 
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
  "/logo10.png"
]

export function LogoScroll() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who trust our AI-powered platform to accelerate their careers
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling logos container */}
          <div className="flex items-center justify-center space-x-16 animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
