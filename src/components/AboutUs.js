import Image from "next/image";
import React from "react";
import MidImage from "../../public/midimage.png";

const AboutUs = () => {
  return (
    <div>
      <div className="md:container mx-auto my-24">
        <h2 className="text-5xl mb-10 font-bold">Who we are</h2>
        <p className="text-3xl mb-20">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
        <Image
          src={MidImage.src}
          width={100}
          height={100}
          layout="responsive"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default AboutUs;
