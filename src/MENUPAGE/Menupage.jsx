export default function MenuPage() {
  return (
    <div className="w-full h-screen bg-black text-white flex">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-between p-10 w-1/2">
        {/* Logo */}
        <div
          className="cursor-pointer text-xl font-bold tracking-wide"
          onClick={() => (window.location.href = "/")}
        >
          <span className="mr-2">∞</span> ARM STUDIOS
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-6 text-4xl font-light tracking-wide">
          <a href="/" className="hover:text-gray-400 transition">HOME</a>
          <a href="/works" className="hover:text-gray-400 transition">WORKS</a>
          <a href="/about" className="hover:text-gray-400 transition">ABOUT</a>
          <a href="/contact" className="hover:text-gray-400 transition">CONTACT</a>
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-between p-10 w-1/2 text-sm tracking-wide">
        {/* Socials */}
        <div className="flex flex-col gap-2 self-end text-right">
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
          <a href="#" className="hover:text-gray-400">Facebook</a>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2 self-end text-right">
          <p>Hyderabad</p>
          <p>Bangalore</p>
          <p>Chennai</p>
        </div>

        {/* Email */}
        <div className="self-end text-right">
          <p className="hover:text-gray-400 cursor-pointer">
            info@armstudios.design
          </p>
        </div>
      </div>
    </div>
  );
}
