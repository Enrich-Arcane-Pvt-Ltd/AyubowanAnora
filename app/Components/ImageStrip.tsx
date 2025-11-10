import Image from "next/image";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
];

export default function ImageStrip() {
  return (
    <div className="flex justify-center items-center gap-4 p-10 bg-gradient-to-br from-purple-600 to-blue-500 min-h-screen">
      {images.map((src, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300 shadow-lg"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={200}
            height={300}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
