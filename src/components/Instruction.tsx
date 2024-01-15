import featureImage from "../assets/feature.jpg";

function Instruction() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-center mx-4 mb-2 lg:mx-auto lg:mb-0">
        <div className="flex flex-col justify-around lg:w-1/3 mb-4">
          <div className="bg-green-100 p-8 mb-2 lg:mb-0">
          <h2 className="text-2xl font-semibold underline pb-2">How does it work?</h2>
        <ul className="list-disc">
          <li>Enter or Paste the url in the input box above.</li>
          <li>Click on the <strong>Shorten URL </strong>button </li>
          <li>Copy the the generated url</li>
          <li>Enjoy and follow me on instangram 😉</li>
        </ul>
          </div>

          <div className="bg-green-100 p-8">
          <h2 className="text-2xl font-semibold underline pb-2">Help me to improve?</h2>
          <p>
          I'm excited to invite you to contribute to the growth of my URL shortener website. Your expertise and creativity can enhance user experience, improve functionality, and strengthen the overall reliability of the platform. Together, we can make this platform even more user-friendly and impactful. Join the journey and contribute your coding prowess to shape the future of our URL shortener.
          </p>
          </div>

        </div>
          <img className="mx-auto lg:mx-0 w-3/4 lg:w-1/3" src={featureImage} />
      </section>
  )
}

export default Instruction