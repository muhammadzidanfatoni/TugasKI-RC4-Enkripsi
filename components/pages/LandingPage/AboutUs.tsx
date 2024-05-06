import Image from "next/image";
const AboutUs = () => {
  return (
    <section id="about">
      <div className="relative flex px-4 sm:px-10 xl:container flex-col-reverse lg:flex-row-reverse justify-center items-center gap-12 pt-6 pb-24">
        <div className="flex flex-col gap-6 sm:gap-4 bg-white z-[1] px-2 sm:px-0">
          <h1 className="text-blue-400 text-4xl md:text-6xl xl:text-7xl font-bold">
            About My Self
          </h1>
          <div className="flex flex-col gap-4 ">
            <p className="max-w-[500px] text-sm xl:text-base text-justify">
              I am a passionate individual with a keen eye for photography and
              a love for web programming. My journey in the world of imagery
              began at a young age, capturing moments and emotions through my
              lens.
            </p>
            <p className="max-w-[500px] text-sm xl:text-base text-justify">
              Alongside my artistic endeavors, I have delved into the realm of
              web development, crafting digital experiences that resonate with
              users. Combining my technical skills with my creative flair, I
              strive to build visually stunning and functional websites.
            </p>
            <p className="max-w-[500px] text-sm xl:text-base text-justify">
              Through my work, I aim to evoke emotions, spark inspiration, and
              create meaningful connections. Whether behind the camera or
              behind the code, I am dedicated to bringing visions to life and
              making an impact in the digital landscape.
            </p>
          </div>
        </div>

        <div className="relative border-4 border-blue-400 aspect-square sm:max-w-full w-[400px] h-[500px] bg-white z-[1]">
          <div>
            <div className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 z-0">
              <div className="relative aspect-square sm:max-w-full w-[400px] h-[500px]">
                <Image src="/images/profile.jpg" alt="bg-vector" fill={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
