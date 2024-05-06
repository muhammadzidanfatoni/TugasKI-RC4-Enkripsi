import Image from "next/image";

const HeroSectionLP = () => {
  return (
    <div className="relative lg:mt-0 mt-[125px] w-full h-[620px] px-4 sm:px-10 flex flex-col gap-2 drop-shadow-lg py-20 justify-center bg-hero">
      <div className=" w-full px-4 sm:px-10 xl:container space-y-8">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold max-w-[765px]">
          Algoritma RC4
        </h1>
        <h3 className="text-white text-base md:text-lg lg:text-2xl font-bold">
          Keamanan Informasi
        </h3>
        <p className="text-white text-sm lg:text-lg max-w-[680px] text-justify sm:text-left">
        The ever-growing digital era poses challenges to data privacy security, the importance of mutual awareness in protecting our privacy. Let&apos;s protect our data now!
        </p>
        <div>
          <a
            href="/#algoritma"
            title="cekbrand"
            className="bg-blue-400 px-10 py-4 rounded-xl mt-4 text-center"
          >
            Enter this Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionLP;
