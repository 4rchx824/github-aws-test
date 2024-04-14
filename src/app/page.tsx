import { api } from "@/trpc/server";
import { BackgroundGradientAnimation } from "@/app/_components/ui/background-gradient-animation";

export default async function Home() {
  const hello = await api.post.hello({ text: "Hello, " });

  return (
    <BackgroundGradientAnimation>
      <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl">
        <p className="bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-transparent drop-shadow-2xl">
          {hello.greeting}
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
