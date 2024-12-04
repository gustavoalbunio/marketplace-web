import { LineChart } from "@/components/Charts/LineChart";
import { Store, Tag, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div>
        <h1 className="font-bold text-2xl text-gray-500 mt-16">
          Últimos 30 dias
        </h1>
        <div className="font-sm text-gray-300 mt-2 mb-10">
          Confira as estatísticas da sua loja no último mês
        </div>

        <section className="flex gap-6">
          <div className="flex flex-col gap-4 max-w-[240px] w-full">
            <div className="bg-white rounded-3xl p-3 flex items-center gap-4">
              <div className="text-blue-dark bg-blue-light px-5 py-6 rounded-xl">
                <Tag size={40} />
              </div>
              <div>
                <h1 className="text-gray-400 font-bold text-2xl">24</h1>
                <div className="text-gray-300 text-xs">
                  Produtos <br /> vendidos
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-3 flex items-center gap-4">
              <div className="text-blue-dark bg-blue-light px-5 py-6 rounded-xl">
                <Store size={40} />
              </div>
              <div>
                <h1 className="text-gray-400 font-bold text-2xl">56</h1>
                <div className="text-gray-300 text-xs">
                  Produtos <br /> anunciados
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-3 flex items-center gap-4">
              <div className="text-blue-dark bg-blue-light px-5 py-6 rounded-xl">
                <Users size={40} />
              </div>
              <div>
                <h1 className="text-gray-400 font-bold text-2xl">1.238</h1>
                <div className="text-gray-300 text-xs">
                  Pessoas <br /> visitantes
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 flex-1 max-h-[368px]">
            <LineChart />
          </div>
        </section>
      </div>
    </>
  );
}
