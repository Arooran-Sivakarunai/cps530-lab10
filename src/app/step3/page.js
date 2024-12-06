import TutorialStep from '../../components/TutorialStep';

export default function Step1() {
  return (
    <TutorialStep
      stepNumber={3}
      title="Set Up Your Next.js App"
      content={
        <>
          <p>Publish your new website to a Public Github repositiory. Afterwards, head to the pages tab, and select Github Actions. If done correctly, you should see an option to publish using a next.js action. Push the given YAML file to the repo, and wait for the build to finish</p>
        </>
      }
      imageSrc="/build.png"
      nextStepLink="/step4"
    />
  );
}
