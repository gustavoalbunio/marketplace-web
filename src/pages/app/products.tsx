import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Tag, TagProps } from "@/components/Tag";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const status = [
  {
    label: "Anunciado",
    value: "announced",
  },
  {
    label: "Vendido",
    value: "sold",
  },
  {
    label: "Cancelado",
    value: "canceled",
  },
];

const products = [
  {
    id: "4e1fdf8d-c07c-40a9-b1e4-cb7e421a8974",
    title: "Ergonomic Wooden Chair",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    priceInCents: 22733,
    status: "cancelled",
    owner: {
      id: "9c1f709a-1364-4cd2-a961-ef40a8ad1f72",
      name: "Seller",
      phone: "781-572-1175 x98315",
      email: "seller@mba.com",
      avatar: null,
    },
    category: {
      id: "73d51b58-eeef-4f34-b088-f26ee1400538",
      title: "Decoração",
      slug: "decoracao",
    },
    attachments: [
      {
        id: "255c331f-c365-4433-9ebd-3221b4074f13",
        url: "http://localhost:3333/attachments/255c331f-c365-4433-9ebd-3221b4074f13.png",
      },
    ],
  },
  {
    id: "1304aa4c-aed9-4649-b22f-d99cd22d926d",
    title: "Licensed Soft Ball",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    priceInCents: 48881,
    status: "cancelled",
    owner: {
      id: "9c1f709a-1364-4cd2-a961-ef40a8ad1f72",
      name: "Seller",
      phone: "781-572-1175 x98315",
      email: "seller@mba.com",
      avatar: null,
    },
    category: {
      id: "ae85b33f-e6d4-43b3-863c-e2a90935ba0f",
      title: "Moda",
      slug: "moda",
    },
    attachments: [
      {
        id: "8cd0001e-e559-4d02-ab5a-666b5ce58068",
        url: "http://localhost:3333/attachments/8cd0001e-e559-4d02-ab5a-666b5ce58068.png",
      },
    ],
  },
  {
    id: "a5fcca4f-0fc8-40b6-9903-bb04f9323064",
    title: "Gorgeous Concrete Shirt",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    priceInCents: 9932,
    status: "sold",
    owner: {
      id: "9c1f709a-1364-4cd2-a961-ef40a8ad1f72",
      name: "Seller",
      phone: "781-572-1175 x98315",
      email: "seller@mba.com",
      avatar: null,
    },
    category: {
      id: "be69d4df-2848-445e-bd5e-5df112c7694f",
      title: "Eletrodomésticos",
      slug: "eletrodomesticos",
    },
    attachments: [
      {
        id: "503932f4-f52d-4a1b-9c29-854665f4e23e",
        url: "http://localhost:3333/attachments/503932f4-f52d-4a1b-9c29-854665f4e23e.png",
      },
    ],
  },
  {
    id: "e6fcc2e5-ccbd-4c9d-9ad8-9d4677b9c605",
    title: "Handcrafted Granite Salad",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    priceInCents: 87136,
    status: "cancelled",
    owner: {
      id: "9c1f709a-1364-4cd2-a961-ef40a8ad1f72",
      name: "Seller",
      phone: "781-572-1175 x98315",
      email: "seller@mba.com",
      avatar: null,
    },
    category: {
      id: "7f3df936-2fe2-4776-8a9c-75a480f23347",
      title: "Livros",
      slug: "livros",
    },
    attachments: [
      {
        id: "d14186d8-873c-459e-8662-32829cf7b290",
        url: "http://localhost:3333/attachments/d14186d8-873c-459e-8662-32829cf7b290.png",
      },
    ],
  },
  {
    id: "49f56176-ce5b-4308-a925-4f613032f4de",
    title: "Electronic Rubber Mouse",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    priceInCents: 62518,
    status: "cancelled",
    owner: {
      id: "9c1f709a-1364-4cd2-a961-ef40a8ad1f72",
      name: "Seller",
      phone: "781-572-1175 x98315",
      email: "seller@mba.com",
      avatar: null,
    },
    category: {
      id: "f3eb4fd2-bbb8-4431-a71e-31342d88b2dc",
      title: "Alimentos",
      slug: "alimentos",
    },
    attachments: [
      {
        id: "6e014745-4424-4a1b-a39c-f2f379316099",
        url: "http://localhost:3333/attachments/6e014745-4424-4a1b-a39c-f2f379316099.png",
      },
    ],
  },
  {
    id: "037d0cba-aaa2-4719-ae13-fa8e2cc08d41",
    title: "Rustic Wooden Salad",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    priceInCents: 50212,
    status: "sold",
    owner: {
      id: "9c1f709a-1364-4cd2-a961-ef40a8ad1f72",
      name: "Seller",
      phone: "781-572-1175 x98315",
      email: "seller@mba.com",
      avatar: null,
    },
    category: {
      id: "7d8126be-1a4b-43df-8a8c-57f243d6225e",
      title: "Móveis",
      slug: "moveis",
    },
    attachments: [
      {
        id: "289d19bf-5523-464e-b8ab-e3d1dc1d8f98",
        url: "http://localhost:3333/attachments/289d19bf-5523-464e-b8ab-e3d1dc1d8f98.png",
      },
    ],
  },
];

type StatusTypes = Exclude<TagProps["value"], "other">;

const statusDictionary: Record<StatusTypes, string> = {
  available: "Anunciado",
  cancelled: "Desativado",
  sold: "Vendido",
};

export function Products() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet title="Product" />
      <div>
        <h1 className="font-bold text-2xl text-gray-500 mt-16">
          Seus produtos
        </h1>
        <div className="font-sm text-gray-300 mt-2 mb-10">
          Acesse e gerencie a sua lista de produtos à venda
        </div>

        <section className="flex gap-6">
          <div className="flex flex-col gap-4 max-w-[330px] w-full bg-white rounded-3xl p-6 h-full">
            <h4>Filtrar</h4>

            <Input label="Pesquisar" />
            <Select label="Status" placeholder="Status" options={status} />

            <Button className="bg-orange-base hover:bg-orange-dark">
              Aplicar filtro
            </Button>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            {products.map(
              ({
                id,
                title,
                description,
                priceInCents,
                status,
                category,
                attachments,
              }) => {
                const tags: TagProps[] = [
                  {
                    label: statusDictionary[status as StatusTypes],
                    value: status as TagProps["value"],
                  },
                  {
                    label: category.title,
                    value: "other",
                  },
                ];

                return (
                  <div
                    key={id}
                    onClick={() => navigate(`/product/edit/${id}`)}
                    className="bg-white rounded-2xl p-1 relative max-h-[250px] cursor-pointer"
                  >
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      {tags.map(({ label, value }) => (
                        <Tag label={label} value={value} />
                      ))}
                    </div>

                    <img
                      className="max-h-[144px] w-full object-cover rounded-2xl"
                      src={attachments[0].url}
                    />

                    <div className="p-3">
                      <header className="flex items-center justify-between font-semibold text-gray-500">
                        {title}
                        <div>
                          <span className="text-xs">R$</span>{" "}
                          {new Intl.NumberFormat("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }).format(priceInCents / 100)}
                        </div>
                      </header>
                      <p className="text-sm line-clamp-2 pt-2">{description}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>
      </div>
    </>
  );
}
