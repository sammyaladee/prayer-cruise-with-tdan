import { useState } from "react";

export default function PrayerSupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    prayerRequest: "",
    category: "General"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxs3N_x-o0X_LnkmpUD52WQfnu87TFgXhSabZX5VowysVgiJjvypuDei3VemnUoevRf/exec';
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });

      // With no-cors mode, we can't read the response, so we assume success
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        prayerRequest: "",
        category: "General"
      });
    } catch (error) {
      console.error('Error submitting prayer request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Prayer <span className="text-blue-600">Support</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            We are here to pray with you and for you. Share your prayer requests with us.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Prayer Request Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Prayer Request</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-green-900">Request Submitted!</h3>
                      <p className="text-sm text-green-700 mt-1">
                        Thank you for sharing your prayer request. Our prayer team will lift you up in prayer.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-red-900">Submission Failed</h3>
                      <p className="text-sm text-red-700 mt-1">
                        There was an error submitting your request. Please try again or contact us directly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prayer Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  >
                    <option value="General">General</option>
                    <option value="Health">Health & Healing</option>
                    <option value="Family">Family & Relationships</option>
                    <option value="Financial">Financial Breakthrough</option>
                    <option value="Spiritual">Spiritual Growth</option>
                    <option value="Career">Career & Education</option>
                    <option value="Thanksgiving">Thanksgiving</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Prayer Request <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="prayerRequest"
                    value={formData.prayerRequest}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Share your prayer request here..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Prayer Request'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your prayer request will be handled with confidentiality and care.
                </p>
              </div>
            </div>

            {/* Information Section */}
            <div className="space-y-8">
              {/* Prayer Promise */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Prayer Commitment</h3>
                    <p className="text-gray-600">
                      We believe in the power of prayer and are committed to interceding for every request submitted. 
                      Your prayer request will be prayed over by our dedicated prayer team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scripture Card */}
              <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl shadow-lg p-8 text-white">
                <div className="mb-4">
                  <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg mb-4 leading-relaxed">
                  "Again, truly I tell you that if two of you on earth agree about anything they ask for, 
                  it will be done for them by my Father in heaven."
                </p>
                <p className="text-blue-100 font-semibold">Matthew 18:19</p>
              </div>

              {/* Prayer Times */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Join Us in Prayer</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                      <span className="font-semibold text-gray-900">Every Friday</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>8:00 PM WAT / 7:00 PM BST</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Join us live every Friday for Prayer Cruise where we pray together as a community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}