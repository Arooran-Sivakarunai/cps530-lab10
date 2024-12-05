import TutorialStep from '../components/TutorialStep';

export default function Step1() {
  return (
    <TutorialStep
      stepNumber={1}
      title="Set Up Your Next.js App"
      description="Learn how to create a new Next.js app using the `create-next-app` command."
      nextStepLink="/step2"
    />
  );
}
