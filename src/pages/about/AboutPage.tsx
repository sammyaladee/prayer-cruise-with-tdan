export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            About <span className="text-blue-600">Prayer Cruise</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Raising intentional young minds through prayer, fasting & God's Word.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Prayer Cruise is a dynamic fellowship dedicated to empowering young believers through intentional prayer, 
              disciplined fasting, and deep engagement with God's Word. We believe in cultivating a generation that is 
              spiritually grounded, purpose-driven, and passionate about their relationship with God.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every Friday at 8PM, we gather together to seek God's face, intercede for our generation, and grow in 
              spiritual maturity. Our fellowship is a safe space where young people can connect with God and one another 
              in meaningful ways.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">God's Word</h3>
              <p className="text-gray-600">
                We are rooted in the truth and authority of Scripture, allowing it to guide our lives and decisions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prayer & Fasting</h3>
              <p className="text-gray-600">
                We cultivate a lifestyle of consistent prayer and fasting, drawing closer to God and His purposes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in the power of fellowship and growing together as a spiritual family in Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-orange-500 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Rev. Oyetoki Oluwatobi Daniel</h3>
                  <p className="text-blue-100 mt-2">Lead Pastor</p>
                </div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Leadership</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Under the guidance of Rev. Oyetoki Oluwatobi Daniel, Prayer Cruise has become a beacon of hope 
                  and spiritual growth for young believers seeking to deepen their relationship with God.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With a heart for the next generation and a passion for prayer, our leadership team is committed 
                  to creating an environment where young minds can flourish spiritually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Us Every Friday</h2>
            <p className="text-lg mb-6 text-blue-50">
              Be part of a vibrant community of young believers passionate about prayer and God's presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Connect With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}