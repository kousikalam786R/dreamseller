import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | DreamSeller',
  description: 'Privacy Policy for DreamSeller - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                DreamSeller ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-200 mb-3">2.1 Personal Information</h3>
              <p className="leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Contact us through our website forms</li>
                <li>Request a consultation or quote</li>
                <li>Subscribe to our newsletter</li>
                <li>Use our products or services</li>
              </ul>
              <p className="leading-relaxed mb-4">
                This information may include: name, email address, phone number, company name, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">2.2 Automatically Collected Information</h3>
              <p className="leading-relaxed">
                When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Improve and personalize your experience on our website</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="leading-relaxed mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 glass-effect rounded-lg">
                <p className="text-gray-300">
                  <strong>Email:</strong> contact@dreamseller.com<br />
                  <strong>Website:</strong> www.dreamseller.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContactButton />
    </>
  )
}

