import Image from "next/image";

import LogoMax from "../../public/LOGO1-MAX.svg";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

export default function Home() {
  return (
    <>
      <header className="w-full flex justify-center bg-transparent">
        <div className="container flex justify-between items-center px-2 py-4">
          <Image
            className="w-24 h-14"
            src={LogoMax}
            priority
            alt="Logo MaxDesigns"
          />
          <ul className="flex gap-8 text-white">
            <li className="hover:text-red-200 transition-all">
              <a target="_blank" href="https://maxdesigns.com.br/projetos/">
                Projetos
              </a>
            </li>
            <li className="hover:text-red-200 transition-all">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5548988046418&text=Ol%C3%A1,%20quero%20um%20or%C3%A7amento%20gratuito."
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main className="w-full -mt-24 pt-40 pb-20 flex justify-center bg-bg-hero bg-cover bg-no-repeat m-auto lg:h-screen">
        <section className="container flex justify-center ">
          <div className="flex w-full flex-col justify-center items-center gap-10 lg:flex-row lg:">
            <div className="p-8 w-80 lg:min-h-96 h-auto bg-zinc-200 rounded-md space-y-4 backdrop-blur-sm ">
              <h2 className="text-2xl">Cadastro</h2>
              <RegisterForm />
            </div>

            <div className="p-8 w-80 lg:min-h-96 h-auto bg-zinc-200 rounded-md space-y-4">
              <h2 className="text-2xl">Login</h2>
              <LoginForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
