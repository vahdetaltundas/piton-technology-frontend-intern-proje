import backgroundImage from "../../public/herosection.png";
const Header = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "100vw 100vh",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container h-screen flex flex-col items-center justify-center">
          <h1 className="text-center text-[7rem] font-bold">
          Let’s create something great together.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
