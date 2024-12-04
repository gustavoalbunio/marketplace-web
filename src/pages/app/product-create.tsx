import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Tag } from "@/components/Tag";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/Button";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ImageUp } from "lucide-react";

export function ProductsCreate() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet title="Product" />
      <div>
        <h1 className="font-bold text-2xl text-gray-500 mt-16">Novo produto</h1>
        <div className="font-sm text-gray-300 mt-2 mb-10">
          Cadastre um produto para venda no marketplace
        </div>

        <section className="flex gap-6">
          <div className="rounded-3xl h-[340px] max-w-[415px] w-full bg-shape text-orange-base flex items-center justify-center">
            <ImageUp size={40} />
            Selecione a imagem do produto
          </div>

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
                  className="w-full text-center"
                  onClick={() => navigate("/products")}
                >
                  Cancelar
                </Button>
                <Button className="w-full text-center">Cadastrar</Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
