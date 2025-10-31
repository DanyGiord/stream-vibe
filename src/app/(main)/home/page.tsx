import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#141414]">
       {/* Container with background image and absolute positioning for the H1 */}
      <div className="w-full h-[93vh] relative">
        {/* Large screen image */}
        <div className="hidden sm:block w-full h-full relative bg-black">
          <Image
            src="/images/Container.png"
            alt="Container Image"
            fill
            priority
            className="object-cover z-0"
          />
        </div>

        {/* Mobile screen image */}
        <div className="sm:hidden w-full h-full relative bg-black">
          <Image
            src="/images/Container_phone.png"
            alt="Container Mobile Image"
            fill
            priority
            className="object-cover z-0"
          />
        </div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
            The Best Streaming Experience
          </h1>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex items-center justify-center bg-[#141414] px-4 py-10 sm:py-20">
        <main className="z-1 flex w-full max-w-7xl flex-col items-center px-4 text-center">
          <p className="text-[#999999] text-base sm:text-lg lg:text-xl">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
         <a href="#features" className="mt-6 inline-block bg-[#E50914] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#F40612] transition">
            Start Watching Now
          </a>
        </main>
      </div>
      
      {/* Features Section */}
      <div className="h-screen">
        <h2 className="text-2xl font-bold text-center pt-10">Features</h2>
      </div>
    </div>
  );
}
