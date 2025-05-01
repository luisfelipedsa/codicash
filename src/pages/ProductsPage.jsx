import React from "react";
import Header from "../components/Header";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Módulo de Vendas" />
      <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <h1 className="text-center text-3xl font-bold">
          Formulário de cadastro de vendas
        </h1>
        <div>
          <form
            action=""
            className="mt-8 space-y-6 grid grid-cols-2 gap-10 max-sm:grid-cols-1 sm:gap-10 "
            method="POST"
          >
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Tipo de curso</label>
              <input
                type="text"
                className="border rounded-2xl p-2"
                placeholder="Test"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Nome do Cliente</label>
              <input
                type="text"
                className="border rounded-2xl p-2"
                placeholder="Test"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Email</label>
              <input
                type="email"
                className="border rounded-2xl p-2"
                placeholder="Test"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Telefone</label>
              <input
                type="telephone"
                className="border rounded-2xl p-2"
                placeholder="Test"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Valor Bruto</label>
              <input
                type="number"
                className="border rounded-2xl p-2"
                placeholder="Test"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Descontos</label>
              <input
                type="number"
                className="border rounded-2xl p-2"
                placeholder="Test"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Impostos</label>
              <input
                type="number"
                className="border rounded-2xl p-2"
                placeholder="Test"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Comissão</label>
              <input
                type="number"
                className="border rounded-2xl p-2"
                placeholder="Test"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Taxas de cartão</label>
              <input
                type="number"
                className="border rounded-2xl p-2"
                placeholder="Test"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Valor Final</label>
              <input
                type="number"
                className="border rounded-2xl p-2"
                placeholder="Test"
              />
            </div>
            <button className="bg-blue-600 rounded-2xl font-bold p-3 w-40 cursor-pointer transition-colors duration-300 ease-in hover:bg-blue-500">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
