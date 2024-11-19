export default function Creations() {
  const creations = [
    {
      title: 'Deep earth',
      desktopImg: '../src/assets/image-deep-earth.jpg',
      mobileImg: '../src/assets/mobile-image-deep-earth.jpg',
    },
    {
      title: 'Night arcade',
      desktopImg: '../src/assets/image-deep-earth.jpg',
      mobileImg: '../src/assets/mobile-image-deep-earth.jpg',
    },
    {
      title: 'Soccer team VR',
      desktopImg: '../src/assets/image-deep-earth.jpg',
      mobileImg: '../src/assets/mobile-image-deep-earth.jpg',
    },
    {
      title: 'The grid',
      desktopImg: '../src/assets/image-deep-earth.jpg',
      mobileImg: '../src/assets/mobile-image-deep-earth.jpg',
    },
    {
      title: 'From up above VR',
      desktopImg: '../src/assets/image-deep-earth.jpg',
      mobileImg: '../src/assets/mobile-image-deep-earth.jpg',
    },
    {
      title: 'The curiosity',
      desktopImg: '../src/assets/image-deep-earth.jpg',
      mobileImg: '../src/assets/mobile-image-deep-earth.jpg',
    },
    {
      title: 'Make it fisheye',
      desktopImg: '../src/assets/image-deep-earth.jpg',
      mobileImg: '../src/assets/mobile-image-deep-earth.jpg',
    },
    {
      title: 'Make tailwind great',
      desktopImg: '../src/assets/image-deep-earth.jpg',
      mobileImg: '../src/assets/mobile-image-deep-earth.jpg',
    },
  ];
  return (
    <section id="creations">
      <div className="container max-w-screen-lg mx-auto text-gray-400 px-4 md:px-0 py-14">
        <div className="flex justify-center md:justify-between mb-20">
          <h3 className="uppercase py-5 text-5xl text-center text-gray-600 md:text-left max-w-lg">
            Our creations
          </h3>
          <button className="btn uppercase hidden md:block">See all</button>
        </div>

        <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-4 gap-8">
          {creations.map((creation, index) => (
            <div key={index} className="relative group item">
              <img
                src={creation.desktopImg}
                alt={creation.title}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src={creation.mobileImg}
                alt={creation.title}
                className="md:hidden w-full duration-200 block group-hover:scale-110"
              />
              <div className="item-gradient"></div>
              <h4 className="uppercase text-white text-2xl absolute bottom-10 pl-5">
                {creation.title}
              </h4>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  );
}
