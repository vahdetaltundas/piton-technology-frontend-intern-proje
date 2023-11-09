import React from "react";
import SideImage from "../../public/sideimage.png";
import Image from "next/image";
const ContactFrom = () => {
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      websiteUrl:String(event.target.websiteUrl.value),
      message: String(event.target.message.value),
    };
    localStorage.setItem("contactForm", JSON.stringify([data]));
  }
  return (
    <div>
      <div className="md:container mx-auto my-24">
        <div className="grid grid-cols-2 gap-4 mb-40">
          <div>
            <Image
              alt="Picture of the author"
              src={SideImage.src}
              width={622}
              height={891}
              style={{
                maxWidth: "100%",
              }}
            />
          </div>
          <div
            style={{
              letterSpacing: "4px",
            }}
          >
            <h2 className="text-right text-5xl font-bold mb-5">We'd love to hear</h2>
            <h2 className="text-right text-5xl font-bold mb-14">from you</h2>

            <form onSubmit={handleSubmit}>
              <div className="w-full flex flex-col gap-y-10 my-4">
                <input
                  type="text"
                  minLength={3}
                  maxLength={150}
                  required
                  className=" p-4 py-6 bg-gray-50 border border-gray-100"
                  autoComplete="off"
                  id="name"
                  placeholder="Name*"
                />

                <input
                  type="email"
                  minLength={5}
                  maxLength={150}
                  required
                  className=" p-4 py-6 bg-gray-50 border border-gray-100"
                  autoComplete="off"
                  id="email"
                  placeholder="Email*"
                />
                <input
                  type="text"
                  minLength={5}
                  maxLength={150}
                  required
                  className=" p-4 py-6 bg-gray-50 border border-gray-100"
                  autoComplete="off"
                  id="websiteUrl"
                  placeholder="Website URL*"
                />

                <div>
                  <textarea
                    rows={4}
                    required
                    minLength={10}
                    maxLength={500}
                    name="message"
                    className="w-full p-4 py-6 bg-gray-50 border border-gray-100 "
                    placeholder="Project Details*"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-6 w-40 bg-secondary text-2xl disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4 w-full"
                >
                  Send Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
