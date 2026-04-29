export const metadata = {
  title: 'SMS Terms & Conditions',
  description:
    'SMS Terms and Conditions for Infinity Solutions of Roxbury LLC. Learn about our text messaging program, opt-out instructions, and data practices.',
}

export default function SmsTermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">SMS Terms &amp; Conditions</h1>
          <p className="text-gray-300 text-sm">Last updated: April 2025 &nbsp;·&nbsp; Effective immediately</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 fill-white">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 text-sm leading-relaxed">

            {/* Intro */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <p>
                This SMS Terms &amp; Conditions page governs all text message (SMS/MMS) communications
                sent by <strong>Infinity Solutions of Roxbury LLC</strong> ("the Company," "we," "us,"
                or "our") to individuals who have opted in to receive text messages from us. By
                providing your mobile number and consenting to receive text messages, you agree to
                the terms described below. Please read them carefully.
              </p>
              <p className="mt-3">
                These SMS Terms are separate from, and in addition to, our general{' '}
                <a href="/terminos" className="text-gold-600 font-semibold hover:underline">
                  Terms &amp; Conditions
                </a>{' '}
                and{' '}
                <a href="/privacidad" className="text-gold-600 font-semibold hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* 1 - Program Description */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                1. Program Description
              </h2>
              <p className="mb-3">
                <strong>Infinity Solutions of Roxbury LLC</strong> operates an SMS messaging program
                to communicate with current and prospective clients regarding our professional
                services. By opting in, you may receive text messages related to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Appointment confirmations, reminders, and scheduling updates</li>
                <li>Status updates on your tax preparation, ITIN application, or LLC formation</li>
                <li>Requests for missing documents or follow-up information related to your case</li>
                <li>Notifications about deadlines (IRS filing deadlines, payroll dates, etc.)</li>
                <li>Responses to inquiries submitted through our website contact form or by phone</li>
                <li>General service updates, promotional offers, and information about our services
                    (including tax preparation, bookkeeping, payroll, credit repair, and ITIN services)</li>
                <li>Important alerts regarding changes to tax laws or compliance requirements
                    that may affect your account</li>
              </ul>
              <p className="mt-4 text-gray-600">
                This program is operated by Infinity Solutions of Roxbury LLC, located at{' '}
                1 West Cottage Street, Roxbury, MA 02119. For support, contact us at{' '}
                <a href="tel:6176698210" className="text-gold-600 font-semibold">617-669-8210</a> or{' '}
                <a href="mailto:info@infinityssinc.com" className="text-gold-600 font-semibold">
                  info@infinityssinc.com
                </a>.
              </p>
            </section>

            {/* 2 - How to Opt In */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                2. How to Opt In
              </h2>
              <p className="mb-3">
                You may opt in to receive SMS messages from us through any of the following methods:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Completing and submitting the contact form on our website and checking the SMS consent box</li>
                <li>Providing your mobile number verbally or in writing during an in-person or phone consultation and expressly agreeing to receive texts</li>
                <li>Texting a designated keyword to our business number <strong>617-669-8210</strong></li>
              </ul>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800 text-xs font-semibold uppercase tracking-wide mb-1">Important</p>
                <p className="text-amber-800 text-sm">
                  <strong>Consent to receive SMS messages is never required as a condition of purchasing
                  any product or service from Infinity Solutions of Roxbury LLC.</strong> You may use
                  all of our services without opting in to text message communications.
                </p>
              </div>
            </section>

            {/* 3 - Message Frequency */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                3. Message Frequency
              </h2>
              <p>
                Message frequency varies depending on your account activity, the services you have
                requested, and the time of year (for example, message frequency may increase during
                tax season). You may receive up to <strong>8 messages per month</strong>, though the
                actual number may be more or less depending on your specific circumstances and active
                service engagements. We will only send messages that are relevant to your account
                or service.
              </p>
            </section>

            {/* 4 - Message & Data Rates */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                4. Message &amp; Data Rates
              </h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="font-bold text-navy-900 text-base mb-2">
                  Message and data rates may apply.
                </p>
                <p>
                  Standard SMS and data rates charged by your mobile carrier will apply to all
                  messages sent and received. Infinity Solutions of Roxbury LLC does not charge any
                  additional fees for participating in this SMS program. Please contact your mobile
                  carrier for details about your plan's SMS and data rates.
                </p>
              </div>
            </section>

            {/* 5 - Opt-Out */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                5. How to Opt Out (STOP)
              </h2>
              <p className="mb-3">
                You may opt out of receiving SMS messages from us at any time. To unsubscribe:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
                <p className="font-bold text-red-800 text-base mb-1">Text STOP to opt out</p>
                <p className="text-red-700 text-sm">
                  Reply <strong>STOP</strong> to any message you receive from us. You will receive
                  one final confirmation message acknowledging your opt-out, and no further messages
                  will be sent to your number. No action is required after that.
                </p>
              </div>
              <p className="mb-3">You may also opt out by:</p>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Calling us at <a href="tel:6176698210" className="text-gold-600 font-semibold">617-669-8210</a> and requesting removal from our SMS list</li>
                <li>Emailing us at <a href="mailto:info@infinityssinc.com" className="text-gold-600 font-semibold">info@infinityssinc.com</a> with "SMS Opt-Out" in the subject line</li>
              </ul>
              <p className="mt-3 text-gray-500 text-xs">
                Note: Opting out of SMS communications does not affect your ability to receive services
                from us, nor does it unsubscribe you from email communications (if applicable).
              </p>
            </section>

            {/* 6 - Help */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                6. How to Get Help (HELP)
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
                <p className="font-bold text-green-800 text-base mb-1">Text HELP for assistance</p>
                <p className="text-green-700 text-sm">
                  Reply <strong>HELP</strong> to any of our messages to receive contact information
                  and program details. You will receive a response with our phone number, email, and
                  a link to these Terms &amp; Conditions.
                </p>
              </div>
              <p>
                For any questions or concerns about this SMS program, you may also contact us directly:
              </p>
              <ul className="list-disc list-inside space-y-1.5 mt-3 ml-2">
                <li>Phone: <a href="tel:6176698210" className="text-gold-600 font-semibold">617-669-8210</a></li>
                <li>Email: <a href="mailto:info@infinityssinc.com" className="text-gold-600 font-semibold">info@infinityssinc.com</a></li>
                <li>Address: 1 West Cottage Street, Roxbury, MA 02119</li>
              </ul>
            </section>

            {/* 7 - Consent */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                7. Consent &amp; Eligibility
              </h2>
              <ul className="list-disc list-inside space-y-2.5 ml-2">
                <li>
                  By opting in, you confirm that you are the owner or authorized user of the
                  mobile number provided and that you are at least 18 years of age.
                </li>
                <li>
                  <strong>Consent to receive SMS/MMS messages is not required as a condition
                  of purchasing any service from Infinity Solutions of Roxbury LLC.</strong>
                </li>
                <li>
                  You confirm that you have read and agree to these SMS Terms &amp; Conditions
                  and our{' '}
                  <a href="/privacidad" className="text-gold-600 font-semibold hover:underline">Privacy Policy</a>.
                </li>
                <li>
                  If you provide a mobile number that is not your own, you represent and warrant
                  that you have the authority of the number's owner to provide consent on their behalf.
                </li>
              </ul>
            </section>

            {/* 8 - Privacy */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                8. Privacy &amp; Data Use
              </h2>
              <div className="bg-navy-50 border border-navy-100 rounded-xl p-5 mb-4">
                <p className="font-bold text-navy-900 mb-2">
                  We do not sell, rent, or share your mobile number or any personal information
                  collected through this SMS program with third parties for their marketing purposes.
                </p>
              </div>
              <p className="mb-3">Your mobile number and related information will be used solely to:</p>
              <ul className="list-disc list-inside space-y-1.5 ml-2 mb-4">
                <li>Send you the SMS messages described in this program</li>
                <li>Manage your opt-in and opt-out preferences</li>
                <li>Comply with applicable legal obligations</li>
                <li>Improve our messaging program and service quality</li>
              </ul>
              <p>
                Your information may be shared with our SMS platform provider(s) and technology
                partners solely for the purpose of delivering messages and managing this program.
                These providers are contractually bound to protect your information and are
                prohibited from using it for any other purpose.
              </p>
              <p className="mt-3">
                For full details on how we handle your personal data, please review our{' '}
                <a href="/privacidad" className="text-gold-600 font-semibold hover:underline">
                  Privacy Policy
                </a>.
              </p>
            </section>

            {/* 9 - Supported Carriers */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                9. Supported Carriers
              </h2>
              <p className="mb-3">
                This SMS program is supported by most major US wireless carriers, including but
                not limited to:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['AT&T','Verizon','T-Mobile','Sprint','US Cellular','Cricket Wireless'].map((carrier) => (
                  <div key={carrier} className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5 text-center text-sm font-medium text-navy-900">
                    {carrier}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-500 text-xs">
                Carriers are not liable for delayed or undelivered messages. Message delivery
                is subject to effective transmission from your mobile carrier.
              </p>
            </section>

            {/* 10 - Changes */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                10. Changes to These Terms
              </h2>
              <p>
                Infinity Solutions of Roxbury LLC reserves the right to modify these SMS Terms &amp;
                Conditions at any time. Any changes will be posted on this page with an updated
                effective date. Your continued participation in our SMS program after changes are
                posted constitutes your acceptance of the revised terms. We encourage you to review
                this page periodically. If a change is material, we will make reasonable efforts
                to notify you via SMS or other means prior to the change taking effect.
              </p>
            </section>

            {/* 11 - Disclaimer */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                11. Limitation of Liability
              </h2>
              <p>
                Infinity Solutions of Roxbury LLC is not responsible for any delays, failures, or
                errors in the delivery of SMS messages caused by your mobile carrier, network
                conditions, or other factors outside our control. To the maximum extent permitted
                by applicable law, we are not liable for any damages arising from your participation
                in or inability to participate in this SMS program.
              </p>
            </section>

            {/* Contact box */}
            <div className="bg-navy-900 rounded-xl p-7 text-white">
              <h2 className="text-lg font-bold mb-1">Questions About This SMS Program?</h2>
              <p className="text-gray-400 text-sm mb-5">
                Contact us directly — we're happy to help.
              </p>
              <div className="space-y-1.5 text-sm text-gray-300">
                <p><strong className="text-white">Infinity Solutions of Roxbury LLC</strong></p>
                <p>1 West Cottage Street, Roxbury, MA 02119</p>
                <p>
                  <a href="tel:6176698210" className="text-gold-400 hover:underline">617-669-8210</a>
                </p>
                <p>
                  <a href="mailto:info@infinityssinc.com" className="text-gold-400 hover:underline">
                    info@infinityssinc.com
                  </a>
                </p>
              </div>
              <div className="mt-5 pt-5 border-t border-navy-700 grid grid-cols-2 gap-3 text-xs text-center">
                <div className="bg-navy-800 rounded-lg p-3">
                  <p className="text-gold-400 font-bold text-base mb-0.5">STOP</p>
                  <p className="text-gray-400">to unsubscribe</p>
                </div>
                <div className="bg-navy-800 rounded-lg p-3">
                  <p className="text-gold-400 font-bold text-base mb-0.5">HELP</p>
                  <p className="text-gray-400">for support</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
