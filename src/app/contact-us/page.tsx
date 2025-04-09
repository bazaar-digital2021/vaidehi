import Link from "next/link";

export default function ContactUsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p className="mb-4">
                        We're here to help and answer any questions you might have. We look forward to hearing from you.
                    </p>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium">Address</h3>
                            <p>Singiyahi , Pupri, Sitamarhi, India, Bihar, – 843320, BIHAR</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Phone</h3>
                            <p className="ml-2">
                                <Link href="tel:+917050256577" className="hover:underline">+91-70502 56577</Link>
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium">Email</h3>
                            <a href="mailto:Puprivaidehiinstitute@gmail.com" className="ml-2 hover:underline">
                                Puprivaidehiinstitute@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 border rounded-md"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border rounded-md"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-3 py-2 border rounded-md"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
} 