import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Tag } from "@/components/Tag";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/ui/button";
import { Ban, Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export function ProductsEdit() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet title="Product" />
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-2xl text-gray-500 mt-16">
              Editar produto
            </h1>
            <div className="font-sm text-gray-300 mt-2 mb-10">
              Gerencie as informações do produto cadastrado
            </div>
          </div>
          <div className="self-end mb-10 flex items-center gap-4">
            <Button variant="ghost" className="flex items-center gap-2 px-0">
              <Check size={20} /> Marcar como vendido
            </Button>
            <Button variant="ghost" className="flex items-center gap-2 px-0">
              <Ban size={20} /> Desativar anúncio
            </Button>
          </div>
        </div>

        <section className="flex gap-6">
          <img
            src="http://localhost:3333/attachments/255c331f-c365-4433-9ebd-3221b4074f13.png"
            className="rounded-3xl max-w-[415px] h-full"
          />

          <div className="bg-white rounded-3xl w-full p-6">
            <h4 className="flex items-center justify-between text-gray-300 font-bold mb-6">
              Dados do produto
              <span>
                <Tag label="Anunciado" value="available" />
              </span>
            </h4>

            <form className="grid grid-cols-3 gap-5">
              <Input
                type="text"
                id="title"
                label="Título"
                placeholder="Sofá"
                containerClassName="col-span-2"
              />
              <Input
                type="number"
                id="price"
                label="Valor"
                placeholder="R$ 1200,00"
              />
              <Textarea
                id="description"
                label="Descrição"
                placeholder="Digite uma breve descrição do seu produto."
                containerClassName="col-span-3"
              />
              <Select
                label="Categoria"
                placeholder="Selecione"
                options={[]}
                containerClassName="col-span-3"
              />

              <div className="flex items-center col-span-3 gap-3">
                <Button
                  variant="outline"
                  className="h-12 w-full text-center"
                  onClick={() => navigate("/products")}
                >
                  Cancelar
                </Button>
                <Button className="h-12 w-full text-center ">
                  Salvar e atualizar
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
