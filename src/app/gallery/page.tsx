import Image from "next/image";

export default function GalleryPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6">Gallery</h1>
            <p className="text-lg mb-8">Explore our campus, events, and activities through our image gallery.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* These are placeholder divs. In a real application, these would be actual images */}
                {Array.from({ length: 12 }).map((_, index) => (
                    <div
                        key={index}
                        className="relative aspect-square w-full h-full overflow-hidden"
                    >
                        <Image src={`/gallery/${index + 1}.jpeg`} alt="Gallery" fill className="object-cover hover:scale-105 transition-all duration-300" />
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Video Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* These are placeholder divs. In a real application, these would be actual video players */}
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 aspect-video flex items-center justify-center rounded-md overflow-hidden"
                        >
                            <span className="text-gray-500">Video {index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 