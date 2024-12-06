import TutorialStep from '../../components/TutorialStep';

export default function Step1() {
  return (
    <TutorialStep
      stepNumber={1}
      title="Set Up Your Next.js App"
      content={
        <>
          <p>Start by creating a Next.js app using the following command:</p>
          <pre className="bg-gray-200 p-4 rounded-md shadow-inner text-sm">
            npx create-next-app
          </pre>
          <p>If you wish, you can use the say creation options used as above, or select your own</p>
        </>
      }
      imageSrc="/setup.png"
      nextStepLink="/step2"
    />
  );
}
