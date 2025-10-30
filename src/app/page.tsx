import Image from "next/image";
// import Background from "../../public/images/Container.png";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image
        src="/images/Container.png"
        alt="Container Image"
        fill
        priority
        className="object-cover z-0"
      />
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="z-1 flex w-full max-w-3xl flex-col items-center px-4 text-center">
        <h1 className="text-4xl font-bold dark:text-zinc-100 mt-20 text-white">
          The Best Streaming Experience
        </h1>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
      </main>
    </div>
    </div>
  );
}
