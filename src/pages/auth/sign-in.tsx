import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <>
      <Helmet title="SignIn" />
      <div className="h-full flex flex-col justify-between">
        <div>
          <h1 className="text-2xl">Acesse sua conta</h1>
          <span className="text-gray-300 text-sm mt-2">
            Informe seu e-mail e senha para entrar
          </span>

          <form className="mt-12 flex flex-col gap-5 px-1">
            <Input
              type="email"
              id="email"
              label="E-mail"
              placeholder="Seu e-mail cadastrado"
            />
            <Input
              type="password"
              id="password"
              label="Senha"
              placeholder="Sua senha de acesso"
            />
            <Button className="h-12 flex justify-between items-center bg-orange-base hover:bg-orange-dark mt-7">
              Acessar
              <ArrowRight size={24} />
            </Button>
          </form>
        </div>

        <div>
          <span className="text-gray-300">Ainda não tem uma conta?</span>
          <Link to="/sign-up">
            <Button
              variant="outline"
              className="h-12 mt-5 w-full flex justify-between items-center border-orange-base text-orange-base bg-white hover:bg-white hover:border-orange-dark "
            >
              Cadastrar
              <ArrowRight size={24} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
