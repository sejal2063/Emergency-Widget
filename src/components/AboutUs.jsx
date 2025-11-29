
export const AboutUs = () => {
  return (
    <div className="about-container ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 
      <section>
        <h1 className="text-3xl font-bold mb-4">About Emergency Widget</h1>
        <img 
        src="images/logo.jpg" 
        alt="Emergency Widget Logo" 
        className="emergency-logo" 
      />
        <p className="mb-4">
          The <strong>Emergency Numbers Quick-Dial Widget</strong> is a lightweight, mobile-first web app designed to give users fast access to important local emergency contact numbers in the Pune / PCMC area.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Why We Built It</h2>
        <p className="mb-4">
          In critical situations, every second counts. We realized that many people don’t memorize or keep a handy list of local helpline numbers — and during emergencies, finding the right number quickly can be difficult. This widget solves that problem by providing a simple, reliable, and always-accessible reference for essential services like fire, ambulance, and local helplines.
        </p>
        <h2 className="text-2xl font-semibold mb-2">What It Does</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Displays a curated list of vital emergency contact numbers.</li>
          <li>Enables <em>click-to-call</em> functionality for quick dialing on mobile.</li>
          <li>Allows you to copy numbers to your clipboard with one tap.</li>
          <li>Lets you mark certain numbers as “favorites” for fast access.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
        <p className="mb-4">
          The contact data is stored in a simple JSON file, which the app reads and displays. We use modern web technologies — React for the UI, Tailwind CSS for styling, and browser APIs like <code>navigator.clipboard</code> and <code>tel:</code> links — to make everything fast, responsive, and easy to use. Favorites are saved in your browser’s local storage, so you can keep your most used contacts handy.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Who It's For</h2>
        <p className="mb-4">
          This app is built for everyone — especially residents of Pimpri-Chinchwad and Pune — who want quick access to life-saving contact information.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="mb-4">
          We envision a safer community where critical help is always just a touch away. Over time, we hope to expand this tool to include more regional contacts and services, collaborate with civic organizations, and improve public awareness about emergency preparedness.
        </p>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;