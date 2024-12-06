import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <main className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">CPS530: Lab 10 By Arooran Sivakarunai</h1>
        <p className="text-gray-700 mb-6">
          This webpage should teach you how to setup a Nextjs App and host the site using Github Pages.
        </p>
        <p className="text-gray-700 mt-6">
          Once deployed, your app will be accessible through a GitHub Pages URL!
        </p>
        <div className="mt-8 flex justify-between">
          <Link href="/step1">
            <p className="text-blue-600 underline">Step 1</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
