import { test, expect } from "@playwright/test";
import it from "@playwright/test";
import { fetchProducts } from "../src/utils/test/product.service"; // Ajuste le chemin selon ton projet

//
test.describe("fetchProducts", () =>
{

    it("devrait calculer le total pour un seul article", () =>
    {
        const result = fetchProducts();
        expect(result).toBe(20);
    });

    it("devrait calculer le total pour plusieurs articles", () =>
    {
        const result = fetchProducts();
        expect(result).toBeGreaterThan(1);
    });

    it("devrait retourner 0 si la quantité est 0", () =>
    {
        const result = fetchProducts();
        expect(result).toBe(0);
    });

    it("devrait gérer les quantités négatives (si autorisé)", () =>
    {
        const result = fetchProducts();
        expect(result).toBeLessThan(1);
    });
});
