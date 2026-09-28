import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="font-oswald text-7xl font-bold text-[#C2F800]">
          404
        </p>

        <h1 className="mt-4 font-oswald text-3xl font-bold uppercase text-white">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm text-[#8A92A0]">
          The page you are looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-[#C2F800] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d0ff33]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;