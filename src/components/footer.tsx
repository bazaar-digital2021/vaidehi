// components/Footer.jsx
import Link from 'next/link';
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

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
                                    #82, EPIP Area, Nallurahalli, Whitefield, Bangalore – 560 066, Karnataka
                                </p>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                </div>
                                <Link href="#" className="ml-2 hover:underline">
                                    Get Directions
                                </Link>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <p className="ml-2">+91-80-49069000</p>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <p className="ml-2">+91-80-49061143</p>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a href="mailto:info@vins.ac.in" className="ml-2 hover:underline">
                                    info@vins.ac.in
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
                                <Link href="/contact" className="hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Vaidehi Group of Institutions */}
                    <div className="md:w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Vaidehi Group of Institutions</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/medical" className="hover:underline">
                                    Vaidehi Institute of Medical Sciences & Research Centre
                                </Link>
                            </li>
                            <li>
                                <Link href="/dental" className="hover:underline">
                                    Vaidehi Institute of Dental Sciences & Research Centre
                                </Link>
                            </li>
                            <li>
                                <Link href="/nursing" className="hover:underline">
                                    Vaidehi Institute of Nursing Sciences & Research Centre
                                </Link>
                            </li>
                            <li>
                                <Link href="/pharmacy" className="hover:underline">
                                    Vaidehi Institute of Pharmacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/school" className="hover:underline">
                                    Vaidehi School of Excellence
                                </Link>
                            </li>
                            <li>
                                <Link href="/physiotherapy" className="hover:underline">
                                    Vaidehi Institute of Physiotherapy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="md:w-1/4 lg:w-1/6">
                        <h2 className="text-xl font-semibold mb-4">SOCIAL MEDIA</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook className="text-secondary text-2xl hover:opacity-80" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <FaYoutube className="text-secondary text-2xl hover:opacity-80" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter className="text-secondary text-2xl hover:opacity-80" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-blue-500 mt-8 pt-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <a href="https://vins.ac.in/#" className="text-white hover:underline mb-2 md:mb-0">
                        https://vins.ac.in/#
                    </a>
                    <p className="text-sm text-center md:text-right">
                        © {new Date().getFullYear()} Vaidehi Institute of Nursing Sciences & Research Centre. All Rights Reserved. Website developed by Dalvkot Utility Enterprises Pvt Ltd
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;