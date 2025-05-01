/* eslint-disable no-unused-vars */
import { useState } from "react";

const mockVendas = [
  {
    id: 1,
    tipoCurso: "React",
    cliente: "João Silva",
    data: "2025-04-15",
    valorFinal: 1200,
  },
  {
    id: 2,
    tipoCurso: "Node.js",
    cliente: "Maria Souza",
    data: "2025-03-10",
    valorFinal: 980,
  },
  {
    id: 3,
    tipoCurso: "React",
    cliente: "Carlos Lima",
    data: "2025-04-20",
    valorFinal: 1350,
  },
];

const SalesList = () => {
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  const filtrarVendas = () => {
    return mockVendas.filter((venda) => {
      const dataVenda = new Date(venda.data);
      const inicio = dataInicio ? new Date(dataInicio) : null;
      const fim = dataFim ? new Date(dataFim) : null;

      return (
        (!tipoFiltro || venda.tipoCurso === tipoFiltro) &&
        (!inicio || dataVenda >= inicio) &&
        (!fim || dataVenda <= fim)
      );
    });
  };
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Lista de Vendas</h2>

      {/* Filtros */}
      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
        <div className="flex flex-col space-y-2">
          <label className="font-bold">Tipo de curso</label>
          <select
            className="border rounded-2xl p-2"
            value={tipoFiltro}
            onChange={(e) => setTipoFiltro(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-bold">Data Início</label>
          <input
            type="date"
            className="border rounded-2xl p-2"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-bold">Data Fim</label>
          <input
            type="date"
            className="border rounded-2xl p-2"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
          />
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-2xl mt-4">
          <thead className="bg-blue-500 text-left">
            <tr>
              <th className="p-3">Cliente</th>
              <th className="p-3">Curso</th>
              <th className="p-3">Data</th>
              <th className="p-3">Valor Final</th>
            </tr>
          </thead>
          <tbody>
            {filtrarVendas().map((venda) => (
              <tr key={venda.id} className="border-t border-gray-300">
                <td className="p-3">{venda.cliente}</td>
                <td className="p-3">{venda.tipoCurso}</td>
                <td className="p-3">{venda.data}</td>
                <td className="p-3">R$ {venda.valorFinal.toFixed(2)}</td>
              </tr>
            ))}
            {filtrarVendas().length === 0 && (
              <tr>
                <td className="p-3" colSpan={4}>
                  Nenhuma venda encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesList;
