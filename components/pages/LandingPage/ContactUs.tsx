import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Button from "@/components/core/Button";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section id="contact">
      <div className="relative h-auto w-full flex flex-col lg:flex-row px-4 sm:px-10 xl:container justify-center items-center gap-12 mt-6">

        <div className="relative border-4 border-blue-400 w-[250px] h-[230px] sm:w-[395px] sm:h-[377px] xl:w-[595px] xl:h-[477px] mt-16 ">
          <div>
            <div className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 z-0">
              <div className="relative aspect-square  w-[250px] h-[230px] sm:w-[395px] sm:h-[377px] xl:w-[595px] xl:h-[477px]">
                <Image src="/images/contact.jpg" alt="bg-vector" fill={true} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 space-y-1">
          <h1 className="text-blue-400 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">Contact Us</h1>
          <div className="flex items-center">
            <FaPhone className="text-blue-400 mr-2" />
            <p>082218818549</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-blue-400 mr-2" />
            <p>227006012@student.unsil.ac.id</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-400 mr-2" />
            <p>Toko Karasa Jaga, Linggalaksana, kec. cikatomas, Kab. Tasikmalaya</p>
          </div>
          <div className='text-white'>
            <Button title="What&apos;s App Here!!"/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
