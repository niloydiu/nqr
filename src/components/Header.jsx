import logo from "../assets/favicon.png";

function Header() {
  return (
    <div className="w-full  mx-auto py-1 mt-2 px-[5vw]">
      <div className=" w-full flex justify-between items-center">
        <a
          href="https://niloykm.vercel.app/"
          target="_blank"
          className=" cursor-pointer"
        >
          <img src={logo} alt="" className=" h-6 w-auto cursor-pointer" />
        </a>
        <h1 className=" font-semibold text-black ml-8">Text to qr code</h1>
        <h1 className="hidden sm:block font-extrabold text-3xl text-black">
          <a href="https://niloykm.vercel.app/" target="_blank">
            NQR
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Header;
