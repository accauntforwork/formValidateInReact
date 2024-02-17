import React from "react";

function Header() {
  return (
    <header>
      <nav className="w-[1440px] flex justify-between gap-24 items-center mb-16 px-48 py-5 bg-blue-700 font-semibold text-lg">
        <img id="logo" src="./src/assets/logo.svg" alt="" />
        <ul className="flex gap-12 text-white">
          <li>
            <a href="#">Vakansiyalar</a>
          </li>
          <li>
            <a href="#">Kandidatorlar</a>
          </li>
          <li>
            <a href="#">Kompaniyalar</a>
          </li>
          <li>
            <a href="#">Xizmatlar</a>
          </li>
          <li>
            <a href="#">Ta'lim</a>
          </li>
        </ul>
        <ul className="flex items-center gap-8">
          <li>
            <select className="rounded-lg" name="lang" id="lang">
              <option value="uzb">O'zb</option>
              <option value="rus">Rus</option>
              <option value="eng">Eng</option>
            </select>
          </li>
          <li>
            <button className="btn px-3 py-2 rounded-lg bg-white text-blue-700">
              Boshlash
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
