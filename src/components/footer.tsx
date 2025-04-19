// components/Footer.jsx
import Link from 'next/link';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Quick Contacts */}
                    <div className="md:w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Quick Contacts</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <p className="ml-2">
                                    Singiyahi , Pupri, Sitamarhi, India, Bihar, – 843320, BIHAR
                                </p>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                </div>
                                <Link href="https://g.co/kgs/AAXXfJE" target='_blank' className="ml-2 hover:underline">
                                    Get Directions
                                </Link>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex-shrink-0">
                                    COLLEGE ADMISSION NO
                                </div>
                                <p className="ml-2">
                                    <Link href="tel:+917050256577" className="hover:underline">+91-70502 56577</Link>
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex-shrink-0">
                                    DR SUBHASH SINGH
                                </div>
                                <p className="ml-2">
                                    <Link href="tel:+917050256578" className="hover:underline">+91-70502 56578</Link>
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex-shrink-0">
                                    SECRETARY
                                </div>
                                <p className="ml-2">
                                    <Link href="tel:+917050256579" className="hover:underline">+91-70502 56579</Link>
                                </p>
                            </div>



                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a href="mailto:Puprivaidehiinstitute@gmail.com" className="ml-2 hover:underline">
                                    Puprivaidehiinstitute@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/departments" className="hover:underline">
                                    Departments
                                </Link>
                            </li>
                            <li>
                                <Link href="/result" className="hover:underline">
                                    Result
                                </Link>
                            </li>
                            <li>
                                <Link href="/placement" className="hover:underline">
                                    Placement
                                </Link>
                            </li>
                            <li>
                                <Link href="/apply" className="hover:underline">
                                    Apply Now
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Vaidehi Group of Institutions */}
                    <div className="md:w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Our Location</h2>
                        <div className="w-full h-48 md:h-56 rounded-lg overflow-hidden">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4420.964764815635!2d85.72416156943356!3d26.464233862508753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec51005d5f0fe9%3A0x8cf16216d92d4017!2sVAIDEHI%20INSTITUTE%20OF%20NURSING%20%26%20HIGHER%20EDUCATION!5e0!3m2!1sen!2sin!4v1744108562315!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <p className="mt-2 text-sm">VAIDEHI INSTITUTE OF NURSING & HIGHER EDUCATION, Bihar</p>
                    </div>

                    {/* Social Media */}
                    <div className="md:w-1/4 lg:w-1/6">
                        <h2 className="text-xl font-semibold mb-4">SOCIAL MEDIA</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/16PZVYYWU6/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook className="text-secondary text-2xl hover:opacity-80" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <FaYoutube className="text-secondary text-2xl hover:opacity-80" />
                            </a>
                            <a href="https://www.instagram.com/vaidehiinstitute?igsh=MXB4ZGhkcXV4N25vNA==" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaInstagram className="text-secondary text-2xl hover:opacity-80" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-blue-500 mt-8 pt-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <a href="https://www.bazaardigital.in/" className="text-white hover:underline mb-2 md:mb-0 order-2">
                        Design & Developed by <span className='text-white  text-lg'>Bazaar Digital </span>
                    </a>
                    <p className="text-sm text-center md:text-right order-1">
                        © {new Date().getFullYear()} Vaidehi Institute of Nursing & Higher Education. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;