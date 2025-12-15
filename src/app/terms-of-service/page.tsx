import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | DreamSeller',
  description: 'Terms of Service for DreamSeller - Read our terms and conditions for using our website and services.',
}

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing or using the DreamSeller website and services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <p className="leading-relaxed">
                DreamSeller provides web development, mobile app development, AI solutions, and related technology services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Use License</h2>
              <p className="leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on DreamSeller's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Service Agreements</h2>
              <p className="leading-relaxed">
                When you engage DreamSeller for development services, the specific terms, scope, deliverables, and pricing will be outlined in a separate service agreement or statement of work. These Terms govern your use of our website and general services unless otherwise specified in a signed agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                All content, features, and functionality of our website, including but not limited to text, graphics, logos, and software, are the exclusive property of DreamSeller and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="leading-relaxed">
                Unless otherwise specified in a service agreement, custom software developed for clients remains the property of the client upon full payment. DreamSeller retains rights to any pre-existing code, frameworks, or proprietary tools used in development.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. User Accounts and Information</h2>
              <p className="leading-relaxed">
                You are responsible for maintaining the confidentiality of any account information and passwords. You agree to provide accurate, current, and complete information when using our services and to update such information to keep it accurate, current, and complete.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Prohibited Uses</h2>
              <p className="leading-relaxed mb-4">You may not use our services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any malicious code, viruses, or harmful material</li>
                <li>To impersonate or attempt to impersonate DreamSeller or any employee or affiliate</li>
                <li>In any manner that could damage, disable, overburden, or impair our website</li>
                <li>To engage in any automated use of the system, such as scraping or data mining without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Payment Terms</h2>
              <p className="leading-relaxed">
                Payment terms for services will be specified in individual service agreements. Unless otherwise agreed, invoices are due within the timeframe specified. Late payments may result in suspension of services and may incur additional fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Warranty Disclaimer</h2>
              <p className="leading-relaxed">
                The materials and services on DreamSeller's website are provided on an "as is" basis. DreamSeller makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
              <p className="leading-relaxed">
                In no event shall DreamSeller or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials or services, even if DreamSeller has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to defend, indemnify, and hold harmless DreamSeller and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
              <p className="leading-relaxed">
                DreamSeller reserves the right to revise these Terms at any time without notice. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
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

