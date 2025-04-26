import React from 'react';


export default function TermsOfService() {
    return (
        <div className="container mx-auto p-8 mt-20">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold">Terms of Service</h1>
                <p className="text-lg text-gray-600">Last Updated: March 30, 2025</p>
            </header>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-base text-gray-700">
                    These Terms of Service govern your use of our website and services. By accessing or using our platform, you agree to comply with and be bound by these terms.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
                <p className="text-base text-gray-700">
                    You must be at least 18 years old to use our services. By using our platform, you represent and warrant that you meet this age requirement.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">3. User Account</h2>
                <p className="text-base text-gray-700">
                    To use certain features, you may need to create an account. You agree to provide accurate and up-to-date information during the registration process and keep your account credentials confidential.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy</h2>
                <p className="text-base text-gray-700">
                    Our privacy practices are explained in our Privacy Policy, which you should review. By agreeing to these terms, you also agree to the terms of our Privacy Policy.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">5. Prohibited Activities</h2>
                <p className="text-base text-gray-700">
                    You may not engage in activities that violate local, state, or national laws, including but not limited to fraudulent activities, distributing harmful software, or any activity that disrupts the platform’s services.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
                <p className="text-base text-gray-700">
                    We reserve the right to suspend or terminate your access to the platform at any time, for any reason, without notice, if you violate any terms outlined in this agreement.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p className="text-base text-gray-700">
                    In no event shall we be liable for any indirect, special, incidental, or consequential damages arising out of or in connection with your use of the platform.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
                <p className="text-base text-gray-700">
                    These terms will be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
                <p className="text-base text-gray-700">
                    We may update or revise these Terms of Service from time to time. Any changes will be posted on this page, and the updated date will be reflected at the top of the document.
                </p>
            </section>

            <footer className="text-center mt-12">
                <p className="text-base text-gray-600">
                    If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.
                </p>
            </footer>
        </div>
    );
};
