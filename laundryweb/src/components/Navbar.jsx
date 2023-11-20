/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/home" },
    { name: "Blog", link: "/blog" },
    { name: "Layanan", link: "/layanan" },
    { name: "About Us", link: "/aboutus" },
  ];

  return (
    <div className="w-full top-3 left-0" style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)" }}>
      <div
        className="md:flex justify-between py-4 md:px-10 px-7"
        style={{ backgroundColor: "rgb(50, 112, 148)" }}
      >
        {/* Tambahkan gambar di samping tulisan "ease laundry" */}
        <div className="flex items-center cursor-pointer font-[poppins] text-white">
          <img src={logo} alt="Logo" className="h-16 mr-2" />
          <div className="font-medium ml-3 text-2xl">ease laundry</div>
        </div>
        <div className="flex items-center">
          {/* tempat editing tulisan di navbar */}
          <ul
            className="flex space-x-4 text-white ml-9 md:ml-0 md:space-x-9 text-sm md:text-md hidden md:flex"
            style={{ fontSize: "16pt", fontWeight: "normal" }}
          >
            {Links.map((link) => (
              <li key={link.name} className="text-x1 flex gap-x-4">
                <a
                  href={link.link}
                  className="duration-500"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "cyan";
                  }} // atur warna saat hover
                  onMouseLeave={(e) => {
                    e.target.style.color = "white";
                  }} // kembalikan ke warna putih saat tidak dihover
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <span className="text-3xl text-white ml-6 md:ml-20 mr-6 md:mr-10 cursor-pointer">
            <ion-icon name="notifications-outline"></ion-icon>
          </span>
          <button className="text-cyan-700 font-[poppins] py-2.5 px-6 rounded-[20px] ml-2 md:ml-4 bg-cyan-100 hover:bg-cyan-300 transition duration-500">
            masuk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
