import Link from 'next/link';

export default function TutorialStep({ stepNumber, title, description, nextStepLink }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Step {stepNumber}: {title}</h1>
        <p className="text-lg mb-6">{description}</p>
        {nextStepLink && (
          <div className="flex justify-end">
            <Link href={nextStepLink}>
              <a className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Next Step →
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
