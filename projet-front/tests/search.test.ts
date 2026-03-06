import { test, expect } from "@playwright/test";
import it from "@playwright/test";
import { filterProducts } from "../src/utils/test/search";

test.describe("filterProducts", () =>
{
    // Données de test
    const products: [] = [
        // { id: 1, name: "Pomme" },
        // { id: 2, name: "Banane" },
        // { id: 3, name: "Orange" },
        // { id: 4, name: "pomme verte" },
    ];

    it("devrait retourner les produits correspondant à une recherche simple", () =>
    {
        const result = filterProducts(products, "Pomme");
        expect(result).toEqual([
            { id: 1, name: "Pomme" },
            { id: 4, name: "pomme verte" },
        ]);
    });

    it("devrait être insensible à la casse", () =>
    {
        const result = filterProducts(products, "pOmMe");
        expect(result).toEqual([
            { id: 1, name: "Pomme" },
            { id: 4, name: "pomme verte" },
        ]);
    });

    it("devrait retourner un tableau vide si aucun produit ne correspond", () =>
    {
        const result = filterProducts(products, "Fraise");
        expect(result).toEqual([]);
    });

    it("devrait retourner tous les produits si la recherche est vide", () =>
    {
        const result = filterProducts(products, "");
        expect(result).toEqual(products);
    });
});
