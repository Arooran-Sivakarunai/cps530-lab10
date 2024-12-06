import TutorialStep from '../../components/TutorialStep';

export default function Step1() {
  return (
    <TutorialStep
      stepNumber={2}
      title="Set Up Your Next.js App"
      content={
        <>
          Once you have created your next app, go to your next.config file, and add the given line of code to the table. Also rember to use relative paths during development, as this will affect when we host this on Github Pages.
          <p>
            This code can be found <a href="https://nextjs.org/docs/pages/building-your-application/deploying/static-exports" className="text-blue-600 underline">on this doc page!</a>
          </p>
        </>
      }
      imageSrc="/config.png"
      nextStepLink="/step3"
    />
  );
}
