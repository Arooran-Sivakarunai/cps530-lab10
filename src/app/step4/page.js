import TutorialStep from '../../components/TutorialStep';

export default function Step1() {
  return (
    <TutorialStep
      stepNumber={4}
      title="Set Up Your Next.js App"
      content={
        <>
          Now, you should have your own Next App! I would recommend developing this on a local machine, and then pushing the final product to the repo.
        </>
      }
      imageSrc="/final.png"
      nextStepLink="/"
    />
  );
}
