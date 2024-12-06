import Link from 'next/link';

export default function TutorialStep({ stepNumber, title, content, imageSrc, nextStepLink }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-white shadow-md sticky top-0 z-10 w-full">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-800">CPS530: Lab 10 By Arooran Sivakarunai</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex flex-col items-center">
        <article className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900">{stepNumber}. {title}</h2>

          {imageSrc && (
            <figure className="my-4 flex justify-start">
              <img
                src={imageSrc}
                alt={title}
                className="rounded-lg shadow-md max-w-full h-auto w-96" // Smaller width (w-96) for SPA feel
              />
            </figure>
          )}

          <section className="mt-6 text-gray-800 leading-relaxed">
            {content}
          </section>

          {nextStepLink && (
            <div className="mt-8 flex justify-end">
              <Link href={nextStepLink}>
                <p className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-300">
                  Next Step →
                </p>
              </Link>
            </div>
          )}
        </article>
      </main>
    </div>
  );
}
