const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#232732] border-t-[#C2F800]" />

        <p className="mt-5 text-sm font-semibold text-[#9CA3AF]">
          Loading workouts…
        </p>
      </div>
    </main>
  );
};

export default Loading;