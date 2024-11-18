export default function Hero() {
  return (
    <section id="leader" className="mt-10">
    <div className="relative container max-w-screen-lg mx-auto md:flex md:flex-row flex-col text-gray-400 px-4 md:px-0 py-14">
      <img src="../src/assets/image-interactive.jpg" alt=""/>
      <div className="top-48  bg-white md:-right-9 md:mt-14 md:py-10 md:pl-20  md:absolute max-w-lg">
        <h3 className="uppercase py-5 text-5xl text-center text-gray-600 md:text-left max-w-lg">The leader in interactive VR</h3>
        <p className="md:text-left max-w-md">Founded in 2011, Loopstudios has been producing world-className virtual reality projects for some of the best
          companies around the globe. Our award-winning creations have transformed businesses through digital experiences
          that bind to their brand.</p>
      </div>
    </div>
    </section>
  );
}