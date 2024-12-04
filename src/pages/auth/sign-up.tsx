import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { ArrowRight, ImageUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <>
      <Helmet title="SignIn" />
      <div className="h-full flex flex-col justify-between overflow-auto">
        <div>
          <h1 className="text-2xl">Crie sua conta</h1>
          <span className="text-gray-300 text-sm mt-2">
            Informe os seus dados pessoais e de acesso
          </span>

          <form className="flex flex-col gap-12 px-1">
            <div className="mt-12 flex flex-col gap-5">
              <h2 className="text-lg font-medium text-gray-500">Perfil</h2>
              <div className="bg-shape p-11 rounded-xl max-w-[120px]">
                <ImageUp size={32} className="text-orange-base" />
              </div>

              <Input
                type="text"
                id="name"
                label="Nome"
                placeholder="Seu nome completo"
              />
              <Input
                type="text"
                id="phoneNumber"
                label="Telefone"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-medium text-gray-500">Acesso</h2>
              <Input
                type="email"
                id="email"
                label="E-mail"
                placeholder="Seu e-mail de acesso"
              />
              <Input
                type="password"
                id="password"
                label="Senha"
                placeholder="Senha de acesso"
              />
              <Input
                type="password"
                id="passwordConfirmation"
                label="Confirmar senha"
                placeholder="Confirme a senha"
              />
              <Button className="h-12 flex justify-between items-center bg-orange-base hover:bg-orange-dark mt-7">
                Cadastrar
                <ArrowRight size={24} />
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-20">
          <span className="text-gray-300">Já tem uma conta?</span>
          <Link to="/sign-in">
            <Button
              variant="outline"
              className="h-12 mt-5 w-full flex justify-between items-center border-orange-base text-orange-base bg-white hover:bg-white hover:border-orange-dark "
            >
              Acessar
              <ArrowRight size={24} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
