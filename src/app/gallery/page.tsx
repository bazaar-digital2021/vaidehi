import Image from "next/image";

export default function GalleryPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6">Gallery</h1>
            <p className="text-lg mb-8">Explore our campus, events, and activities through our image gallery.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* These are placeholder divs. In a real application, these would be actual images */}
                {Array.from({ length: 28 }).map((_, index) => (
                    <div
                        key={index}
                        className="relative aspect-square w-full h-full overflow-hidden"
                    >
                        <Image src={`/gallery/${index + 1}.jpeg`} alt="Gallery" fill className="object-cover hover:scale-105 transition-all duration-300" />
                    </div>
                ))}
            </div>


        </div>
    )
} 