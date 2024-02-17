import React, { useRef, useState } from "react";
import { validateForm } from "../../utils/index.jsx";

function Form() {
  const companyNameRef = useRef("");
  const emailRef = useRef("");
  const countryRef = useRef("");
  const phoneRef = useRef("");

  const [errors, setErrors] = useState({
    companyName: "",
    email: "",
    country: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateForm({
        companyNameRef,
        emailRef,
        countryRef,
        phoneRef,
        setErrors,
      })
    ) {
      console.log("Forma muvoffaqiyatli jo'natildi");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex items-center gap-6 mt-10">
        <img src="./src/assets/circle.svg" alt="" />
        <a className=" text-lg font-semibold text-blue-700" href="">
          Yuklash
        </a>
      </div>
      <label htmlFor="companyName">
        Kompaniya nomi <i className="text-red-400">*</i>
      </label>
      <input
        className="w-[702px] h-[56px]"
        type="text"
        id="companyName"
        name="companyName"
        placeholder="Kompaniya nomi"
        ref={companyNameRef}
      />
      <p className="text-red-500">{errors.companyName}</p>

      <label htmlFor="email">
        Email <i className="text-red-400">*</i>
      </label>
      <input
        className="w-[702px] h-[56px]"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        ref={emailRef}
      />
      <p className="text-red-500">{errors.email}</p>

      <label htmlFor="phone">
        Telefon raqami <i className="text-red-400">*</i>
      </label>
      <input
        className="w-[702px] h-[56px]"
        type="tel"
        id="phone"
        name="phone"
        placeholder="UZ +998"
        ref={phoneRef}
      />
      <p className="text-red-500">{errors.phone}</p>
      <label htmlFor="links">
        Linklar <i className="text-red-400">*</i>
      </label>
      <div className="flex gap-2">
        <a href="">
          <img src=".\src\assets\Input.svg" alt="" />
        </a>
        <a href="">
          <img src=".\src\assets\Input-1.svg" alt="" />
        </a>
        <a href="">
          <img src=".\src\assets\Input-2.svg" alt="" />
        </a>
        <a href="">
          <img src=".\src\assets\Input-3.svg" alt="" />
        </a>
        <a href="">
          <img src=".\src\assets\Input-4.svg" alt="" />
        </a>
      </div>

      <div className="flex justify-between">
        <div>
          <label htmlFor="region">
            Davlat <i className="text-red-400">*</i>
          </label>
          <select
            className="bordr w-[341px] h-[56px]"
            id="region"
            name="region"
          >
            <option value="uz">O'zbekiston</option>
            <option value="ru">Rossiya</option>
            <option value="en">Angliya</option>
          </select>
        </div>
        <div>
          <label htmlFor="city">
            Shahar <i className="text-red-400">*</i>
          </label>
          <select className="bordr w-[341px] h-[56px]" id="city" name="city">
            <option value="Tashkent">Toshkent</option>
            <option value="Farg'ona">Farg'ona</option>
            <option value="Buxoro">Andijon</option>
          </select>
        </div>
      </div>

      <label htmlFor="district">
        Yashash joyi <i className="text-red-400">*</i>
      </label>
      <input
        type="text"
        id="district"
        name="district"
        placeholder="Yashash joyi"
      />

      <label htmlFor="employees">
        Hodimlar soni <i className="text-red-400">*</i>
      </label>
      <input
        type="number"
        id="employees"
        name="employees"
        placeholder="Hodimlar soni"
      />

      <label htmlFor="comment_industry">
        Izoh <i className="text-red-400">*</i>
      </label>
      <input
        type="text"
        id="comment_industry"
        name="comment_industry"
        placeholder="Kompaniya haqida izoh qoldiring"
      />

      <div className="flex justify-between">
        <button
          className="rounded-lg text-[16px] py-4 px-8  text-[#6e6d77] bg-[#F8F8F8]"
          type="button"
        >
          Ortga
        </button>
        <button
          className="rounded-lg text-[16px] py-4 px-8 text-white bg-[#5361E4]"
          type="submit"
        >
          Keyingi
        </button>
      </div>
    </form>
  );
}

export default Form;
