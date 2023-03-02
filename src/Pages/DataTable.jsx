import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function Data() {
  const products = [
    {
      product: "Bamboo Watch",
      lastYearSale: 51,
      thisYearSale: 40,
      lastYearProfit: 54406,
      thisYearProfit: 43342,
    },
    {
      product: "Black Watch",
      lastYearSale: 83,
      thisYearSale: 9,
      lastYearProfit: 423132,
      thisYearProfit: 312122,
    },
    {
      product: "Blue Band",
      lastYearSale: 38,
      thisYearSale: 5,
      lastYearProfit: 12321,
      thisYearProfit: 8500,
    },
    {
      product: "Blue T-Shirt",
      lastYearSale: 49,
      thisYearSale: 22,
      lastYearProfit: 745232,
      thisYearProfit: 65323,
    },
    {
      product: "Brown Purse",
      lastYearSale: 17,
      thisYearSale: 79,
      lastYearProfit: 643242,
      thisYearProfit: 500332,
    },
    {
      product: "Chakra Bracelet",
      lastYearSale: 52,
      thisYearSale: 65,
      lastYearProfit: 421132,
      thisYearProfit: 150005,
    },
    {
      product: "Galaxy Earrings",
      lastYearSale: 82,
      thisYearSale: 12,
      lastYearProfit: 131211,
      thisYearProfit: 100214,
    },
    {
      product: "Game Controller",
      lastYearSale: 44,
      thisYearSale: 45,
      lastYearProfit: 66442,
      thisYearProfit: 53322,
    },
    {
      product: "Gaming Set",
      lastYearSale: 90,
      thisYearSale: 56,
      lastYearProfit: 765442,
      thisYearProfit: 296232,
    },
    {
      product: "Gold Phone Case",
      lastYearSale: 75,
      thisYearSale: 54,
      lastYearProfit: 21212,
      thisYearProfit: 12533,
    },
  ];
  return (
    <div className="DataTable">
      <DataTable value={products}>
        <Column field="product" header="Product" filter></Column>
        <Column field="lastYearSale" header="lastYearSale"></Column>
        <Column field="thisYearSale" header="thisYearSale"></Column>
        <Column field="thisYearSale" header="thisYearSale"></Column>
        <Column field="thisYearProfit" header="thisYearProfit"></Column>
      </DataTable>
    </div>
  );
}

export default Data;
