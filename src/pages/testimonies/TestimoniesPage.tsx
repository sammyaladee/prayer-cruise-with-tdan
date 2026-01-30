import { useState } from "react";

export default function TestimoniesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    testimony: "",
    category: "General"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const EMAIL_ENDPOINT = 'https://formsubmit.co/prayercruisetv@gmail.com';

      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('testimony', formData.testimony);
      formDataToSend.append('timestamp', new Date().toLocaleString());
      formDataToSend.append('_subject', `New Testimony: ${formData.category}`);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');

      await fetch(EMAIL_ENDPOINT, {
        method: 'POST',
        body: formDataToSend
      });

      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        testimony: "",
        category: "General"
      });
    } catch (error) {
      console.error('Error submitting testimony:', error);
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
            Share Your <span className="text-blue-600">Testimony</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Tell us how God has been faithful in your life. Your story can inspire and encourage others.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimony Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Testimony</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-green-900">Testimony Submitted!</h3>
                      <p className="text-sm text-green-700 mt-1">
                        Thank you for sharing your testimony. It will be reviewed and may be featured to inspire others!
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
                        There was an error submitting your testimony. Please try again or contact us directly.
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
                    placeholder="Full Name or Anonymous"
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
                    placeholder="Email is for forwarding to our own email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Testimony Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  >
                    <option value="General">General Testimony</option>
                    <option value="Healing">Divine Healing</option>
                    <option value="Provision">Financial Provision</option>
                    <option value="Deliverance">Deliverance</option>
                    <option value="Salvation">Salvation</option>
                    <option value="Breakthrough">Breakthrough</option>
                    <option value="Restoration">Restoration</option>
                    <option value="Miracle">Miracle</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Testimony <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="testimony"
                    value={formData.testimony}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Share your testimony here... Tell us what God has done in your life."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Testimony'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your testimony may be shared publicly to encourage others. We reserve the right to edit for clarity and length.
                </p>
              </div>
            </div>

            {/* Information Section */}
            <div className="space-y-8">
              {/* Why Share */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why Share Your Testimony?</h3>
                    <p className="text-gray-600">
                      Your testimony is a powerful tool for building faith in others. When you share how God has 
                      worked in your life, you give others hope and inspire them to trust God in their own situations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scripture Card 1 */}
              <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl shadow-lg p-8 text-white">
                <div className="mb-4">
                  <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg mb-4 leading-relaxed">
                  "And they overcame him by the blood of the Lamb and by the word of their testimony, 
                  and they did not love their lives to the death."
                </p>
                <p className="text-blue-100 font-semibold">Revelation 12:11 NKJV</p>
              </div>

              {/* Scripture Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-100">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg mb-4 leading-relaxed text-gray-700">
                  "Come and hear, all you who fear God, and I will tell what he has done for my soul."
                </p>
                <p className="text-blue-600 font-semibold">Psalm 66:16 ESV</p>
              </div>

              {/* Featured Testimonies Info */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Featured Testimonies</h3>
                <p className="text-orange-50 mb-4">
                  Selected testimonies may be featured during our Friday night Prayer Cruise sessions or shared 
                  on our social media platforms to inspire our community.
                </p>
                <div className="flex items-center gap-2 text-orange-100 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>We may edit testimonies for length and clarity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </main>
  );
}