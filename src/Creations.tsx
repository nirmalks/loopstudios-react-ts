export default function Creations() {
  return (
    <section id="creations">
    <div className="container max-w-screen-lg mx-auto text-gray-400 px-4 md:px-0 py-14">
      <div className="flex justify-center md:justify-between mb-20">
        <h3 className="uppercase py-5 text-5xl text-center text-gray-600 md:text-left max-w-lg">Our creations</h3>
        <button className="btn uppercase hidden md:block">See all</button>
      </div>

      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-4 gap-8">
        <div className="relative group item">
          <img src="../src/assets/image-deep-earth.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110"/>
          <img src="../src/assets/mobile-image-deep-earth.jpg" alt="" className="md:hidden w-full duration-200 block group-hover:scale-110"/>
          <div className="item-gradient"></div>
          <h4 className="uppercase text-white text-2xl absolute bottom-10 pl-5">Deep earth</h4>
        </div>
        <div className="relative group item">
          <img src="../src/assets/image-deep-earth.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110"/>
          <img src="../src/assets/mobile-image-deep-earth.jpg" alt="" className="md:hidden w-full duration-200 block group-hover:scale-110"/>
          <div className="item-gradient"></div>
          <h4 className="uppercase text-white text-2xl absolute bottom-10 pl-5">Night arcade</h4>
        </div>
        <div className="relative group item">
          <img src="../src/assets/image-deep-earth.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110"/>
          <img src="../src/assets/mobile-image-deep-earth.jpg" alt="" className="md:hidden w-full duration-200 block group-hover:scale-110"/>
          <div className="item-gradient"></div>
          <h4 className="uppercase text-white text-2xl absolute bottom-10 pl-5">Soccer team VR</h4>
        </div>
        <div className="relative group item">
          <img src="../src/assets/image-deep-earth.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110"/>
          <img src="../src/assets/mobile-image-deep-earth.jpg" alt="" className="md:hidden w-full duration-200 block group-hover:scale-110"/>
          <div className="item-gradient"></div>
          <h4 className="uppercase text-white text-2xl absolute bottom-10 pl-5">The grid</h4>
        </div>
        <div className="relative group item">
          <img src="../src/assets/image-deep-earth.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110"/>
          <img src="../src/assets/mobile-image-deep-earth.jpg" alt="" className="md:hidden w-full duration-200 block group-hover:scale-110"/>
          <div className="item-gradient"></div>
          <h4 className="uppercase text-white text-2xl absolute bottom-10 pl-5">From up above vr</h4>
        </div>
        <div className="relative group item">
          <img src="../src/assets/image-deep-earth.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110"/>
          <img src="../src/assets/mobile-image-deep-earth.jpg" alt="" className="md:hidden w-full duration-200 block group-hover:scale-110"/>
          <div className="item-gradient"></div>
          <h4 className="uppercase text-white text-2xl absolute bottom-10 pl-5">The curiosity</h4>
        </div>
        <div className="relative group item">
          <img src="../src/assets/image-deep-earth.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110"/>
          <img src="../src/assets/mobile-image-deep-earth.jpg" alt="" className="md:hidden w-full duration-200 block group-hover:scale-110"/>
          <div className="item-gradient"></div>
          <h4 className="uppercase text-white text-2xl absolute bottom-10 pl-5">make it wisheye</h4>
        </div>
        <div className="relative group item">
          <img src="../src/assets/image-deep-earth.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110"/>
          <img src="../src/assets/mobile-image-deep-earth.jpg" alt="" className="md:hidden w-full duration-200 block group-hover:scale-110"/>
          <div className="item-gradient"></div>
          <h4 className="uppercase text-white text-2xl absolute bottom-10 pl-5">make tailwind great</h4>
        </div>
      </div>
      <div className="flex justify-center mt-10 md:hidden">
        <button className="btn w-full md:hidden">See All</button>
      </div>
    </div>
  </section>
  )
}