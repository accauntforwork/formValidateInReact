import React from "react";
import Header from "./components/Header/index.jsx";
import CompanyForm from "./components/Form/index.jsx";

function App() {
  return (
    <div className="w-[1440px] flex flex-col items-center bg-slate-200">
      <Header />
      <main className="w-[778px] mb-10 rounded-xl flex justify-center p-10 bg-white">
        <section className="company-info">
          <h2 className="text-2xl font-bold my-4">Kompaniya ma'lumotlari</h2>
          <p className="text-slate-400">
            Kompaniya haqidagi ma'lumotlarni kiriting
          </p>
          <CompanyForm />
        </section>
      </main>
    </div>
  );
}

export default App;
