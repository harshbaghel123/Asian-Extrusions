import React from 'react';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Navbar from '../components/Navbar';
import MobileBottomNav from '../components/MobileBottomNav';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-[#05468D] py-16 px-4 mt-28">
        <div className="text-center">
          <h1 className="text-white text-5xl font-normal">
            Privacy Policy
          </h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8 bg-white">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-sm text-[#05468D] mb-6">
            Last updated: July 05, 2023
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-[#05468D]">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
              information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <p className="text-lg leading-relaxed text-[#05468D]">
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
              and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Interpretation and Definitions */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#05468D] leading-tight">
              Interpretation and Definitions
            </h2>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-[#05468D]">Interpretation</h3>
              <p className="text-lg leading-relaxed text-[#05468D]">
                The words of which the initial letter is capitalized have meanings defined under the following conditions.
                The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-[#05468D]">Definitions</h3>
              <p className="text-lg text-[#05468D]">For the purposes of this Privacy Policy:</p>

              <div className="space-y-3 text-lg text-[#05468D]">
                <p>Account means a unique account created for You to access our Service or parts of our Service.</p>

                <p>Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>

                <p>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Asian Extrusions PVT. LTD., Plot No. 87-A, 2nd KIADB Industrial Area, Malur, Kolar, Karnataka, 563130.</p>

                <p>Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>

                <p>Country refers to: Karnataka, India</p>

                <p>Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>

                <p>Personal Data is any information that relates to an identified or identifiable individual.</p>

                <p>Service refers to the Website.</p>

                <p>Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>

                <p>Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>

                <p>Website refers to Asian Extrusions, accessible from <a href="https://www.asianextrusions.com/" className="text-blue-600 underline" target="_blank" rel="noreferrer noopener">https://www.asianextrusions.com/</a></p>

                <p>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
              </div>
            </div>
          </section>

          {/* Collecting and Using Your Personal Data */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#05468D] leading-tight">
              Collecting and Using Your Personal Data
            </h2>

            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-[#05468D]">Types of Data Collected</h3>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-[#05468D]">Personal Data:</h4>
                <p className="text-lg text-[#05468D]">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information
                  that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>

                <ul className="list-disc list-inside text-lg text-[#05468D] space-y-2 ml-4">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Usage Data is collected automatically when using the Service.</li>
                </ul>

                <p className="text-lg text-[#05468D]">
                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address),
                  browser type, browser version, the pages of our Service that You visit, the time and date of Your visit,
                  the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>

                <p className="text-lg text-[#05468D]">
                  When You access the Service by or through a mobile device, We may collect certain information automatically,
                  including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address
                  of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device
                  identifiers and other diagnostic data.
                </p>

                <p className="text-lg text-[#05468D]">
                  We may also collect information that Your browser sends whenever You visit our Service or when You access
                  the Service by or through a mobile device.
                </p>
              </div>
            </div>

            {/* Tracking Technologies and Cookies */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#05468D]">Tracking Technologies and Cookies</h4>
              <p className="text-lg text-[#05468D]">
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.
                Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze
                Our Service. The technologies We use may include:
              </p>

              <div className="space-y-4 ml-4">
                <div>
                  <h5 className="text-lg font-medium text-[#05468D]">Cookies or Browser Cookies:</h5>
                  <p className="text-base text-[#05468D] ml-6">
                    A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to
                    indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some
                    parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-medium text-[#05468D]">Web Beacons:</h5>
                  <p className="text-base text-[#05468D] ml-6">
                    Certain sections of our Service and our emails may contain small electronic files known as web beacons
                    (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example,
                    to count users who have visited those pages or opened an email and for other related website statistics
                    (for example, recording the popularity of a certain section and verifying system and server integrity).
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-medium text-[#05468D]">
                  We use both Session and Persistent Cookies for the purposes set out below:
                </h5>

                <ul className="list-disc list-inside text-lg text-[#05468D] space-y-2 ml-4">
                  <li>Necessary / Essential Cookies</li>
                  <li>Type: Session Cookies</li>
                  <li>Administered by: Asian Extrusions Pvt Ltd</li>
                </ul>

                <p className="text-lg text-[#05468D]">
                  Purpose: These Cookies are essential to provide You with services available through the Website and to enable
                  You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts.
                  Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies
                  to provide You with those services.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-[#05468D]">Cookies Policy / Notice Acceptance Cookies</h4>

                <div className="ml-4 space-y-3">
                  <h5 className="text-lg font-medium text-[#05468D]">Persistent Cookies</h5>
                  <p className="text-base text-[#05468D] ml-6">Administered by: Asian Extrusions Pvt Ltd</p>
                  <p className="text-base text-[#05468D] ml-6">
                    Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                  </p>
                </div>

                <div className="ml-4 space-y-3">
                  <h5 className="text-lg font-medium text-[#05468D]">Functionality Cookies</h5>
                  <p className="text-base text-[#05468D] ml-6">Administered by: Asian Extrusions Pvt Ltd</p>
                  <p className="text-base text-[#05468D] ml-6">
                    Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering
                    your login details or language preference. The purpose of these Cookies is to provide You with a more personal
                    experience and to avoid You having to re-enter your preferences every time You use the Website.
                  </p>
                </div>

                <p className="text-base text-[#05468D]">
                  For more information about the cookies we use and your choices regarding cookies, please visit our Cookies
                  Policy or the Cookies section of our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Use of Your Personal Data */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-[#05468D]">Use of Your Personal Data</h3>
              <p className="text-lg text-[#05468D]">The Company may use Personal Data for the following purposes:</p>

              <p className="text-lg text-[#05468D]">
                To provide and maintain our Service, including to monitor the usage of our Service.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-[#05468D]">To manage Your Account:</h4>
                  <p className="text-lg text-[#05468D]">
                    to manage Your registration as a user of the Service. The Personal Data You provide can give You access to
                    different functionalities of the Service that are available to You as a registered user.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-[#05468D]">For the performance of a contract:</h4>
                  <p className="text-lg text-[#05468D]">
                    the development, compliance and undertaking of the purchase contract for the products, items or services
                    You have purchased or of any other contract with Us through the Service.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-[#05468D]">To contact You:</h4>
                  <p className="text-lg text-[#05468D]">
                    To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as
                    a mobile application's push notifications regarding updates or informative communications related to the
                    functionalities, products or contracted services, including the security updates, when necessary or reasonable
                    for their implementation.
                  </p>
                </div>

                <p className="text-lg text-[#05468D]">
                  To provide You with news, special offers and general information about other goods, services and events which
                  we offer that are similar to those that you have already purchased or enquired about unless You have opted not
                  to receive such information.
                </p>

                <div>
                  <h4 className="text-lg font-medium text-[#05468D]">To manage Your requests:</h4>
                  <p className="text-lg text-[#05468D]">To attend and manage Your requests to Us.</p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-[#05468D]">For business transfers:</h4>
                  <p className="text-lg text-[#05468D]">
                    We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization,
                    dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part
                    of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users
                    is among the assets transferred.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-[#05468D]">For other purposes:</h4>
                  <p className="text-lg text-[#05468D]">
                    We may use Your information for other purposes, such as data analysis, identifying usage trends, determining
                    the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services,
                    marketing and your experience.
                  </p>
                </div>
              </div>

              <p className="text-lg text-[#05468D]">We may share Your personal information in the following situations:</p>

              <ul className="list-disc list-inside text-lg text-[#05468D] space-y-2 ml-4">
                <li>
                  With Service Providers: We may share Your personal information with Service Providers to monitor and analyze
                  the use of our Service, to contact You.
                </li>
                <li>
                  For business transfers: We may share or transfer Your personal information in connection with, or during
                  negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our
                  business to another company.
                </li>
                <li>
                  With Affiliates: We may share Your information with Our affiliates, in which case we will require those
                  affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries,
                  joint venture partners or other companies that We control or that are under common control with Us.
                </li>
                <li>
                  With business partners: We may share Your information with Our business partners to offer You certain products,
                  services or promotions.
                </li>
                <li>
                  With other users: when You share personal information or otherwise interact in the public areas with other users,
                  such information may be viewed by all users and may be publicly distributed outside.
                </li>
                <li>With Your consent: We may disclose Your personal information for any other purpose with Your consent.</li>
              </ul>
            </div>
          </section>

          {/* Retention of Your Personal Data */}
          <section className="space-y-4">
            <h3 className="text-xl font-medium text-[#05468D]">Retention of Your Personal Data</h3>

            <p className="text-base text-[#05468D]">
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this
              Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal
              obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes,
              and enforce our legal agreements and policies.
            </p>

            <p className="text-base text-[#05468D]">
              The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a
              shorter period of time, except when this data is used to strengthen the security or to improve the functionality
              of Our Service, or We are legally obligated to retain this data for longer time periods.
            </p>
          </section>

          {/* Transfer of Your Personal Data */}
          <section className="space-y-4">
            <h3 className="text-3xl font-medium text-[#05468D]">Transfer of Your Personal Data</h3>

            <p className="text-base text-[#05468D]">
              Your information, including Personal Data, is processed at the Company's operating offices and in any other places
              where the parties involved in the processing are located. It means that this information may be transferred to —
              and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction
              where the data protection laws may differ than those from Your jurisdiction.
            </p>

            <p className="text-base text-[#05468D]">
              Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
            </p>

            <p className="text-base text-[#05468D]">
              The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance
              with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless
              there are adequate controls in place including the security of Your data and other personal information.
            </p>
          </section>

          {/* Delete Your Personal Data */}
          <section className="space-y-4">
            <h3 className="text-3xl font-medium text-[#05468D]">Delete Your Personal Data</h3>

            <p className="text-base text-[#05468D]">
              You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
            </p>

            <p className="text-base text-[#05468D]">
              Our Service may give You the ability to delete certain information about You from within the Service.
            </p>

            <p className="text-base text-[#05468D]">
              You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and
              visiting the account settings section that allows you to manage Your personal information. You may also contact Us to
              request access to, correct, or delete any personal information that You have provided to Us.
            </p>

            <p className="text-base text-[#05468D]">
              Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
            </p>
          </section>

          {/* Disclosure of Your Personal Data */}
          <section className="space-y-4">
            <h3 className="text-3xl font-medium text-[#05468D]">Disclosure of Your Personal Data</h3>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#05468D]">Business Transactions</h4>
              <p className="text-base text-[#05468D]">
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will
                provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#05468D]">Law enforcement</h4>
              <p className="text-base text-[#05468D]">
                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law
                or in response to valid requests by public authorities (e.g. a court or a government agency).
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#05468D]">Other legal requirements</h4>
              <p className="text-base text-[#05468D]">
                The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
              </p>

              <ul className="list-disc list-inside text-base text-[#05468D] space-y-1 ml-4">
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users of the Service or the public</li>
                <li>Protect against legal liability</li>
              </ul>
            </div>
          </section>

          {/* Security of Your Personal Data */}
          <section className="space-y-4">
            <h3 className="text-3xl font-medium text-[#05468D]">Security of Your Personal Data</h3>

            <p className="text-base text-[#05468D]">
              The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet,
              or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your
              Personal Data, We cannot guarantee its absolute security.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#05468D]">Children's Privacy</h2>

            <p className="text-base text-[#05468D]">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
              information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has
              provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone
              under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
            </p>

            <p className="text-base text-[#05468D]">
              If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from
              a parent, We may require Your parent's consent before We collect and use that information.
            </p>
          </section>

          {/* Links to Other Websites */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#05468D]">Links to Other Websites</h2>

            <p className="text-base text-[#05468D]">
              Our Service may contain links to other websites that are not operated by Us. If You click on a third party link,
              You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
            </p>

            <p className="text-base text-[#05468D]">
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third party
              sites or services.
            </p>
          </section>

          {/* Changes to this Privacy Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#05468D]">Changes to this Privacy Policy</h2>

            <p className="text-base text-[#05468D]">
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy
              Policy on this page.
            </p>

            <p className="text-base text-[#05468D]">
              We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and
              update the "Last updated" date at the top of this Privacy Policy.
            </p>

            <p className="text-base text-[#05468D]">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
              effective when they are posted on this page.
            </p>
          </section>

          {/* Contact Us */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#05468D]">Contact Us</h2>

            <p className="text-base text-[#05468D]">If you have any questions about this Privacy Policy, You can contact us:</p>

            <div className="space-y-2 text-base text-[#05468D]">
              <p>
                By email: <a href="mailto:pankaj@asianextrusions.com" className="text-blue-600 underline">pankaj@asianextrusions.com</a> / <a href="mailto:nayeem@asianextrusions.com" className="text-blue-600 underline">nayeem@asianextrusions.com</a>
              </p>

              <p>
                By phone number: <a href="tel:+919448291588" className="text-blue-600 underline">+91 9448291588</a> / <a href="tel:+919448291585" className="text-blue-600 underline">+91 9448291585</a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
      <ScrollToTopButton />
    </>
  );
}