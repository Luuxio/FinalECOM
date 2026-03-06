import { test, expect } from "@playwright/test";
import it from "@playwright/test";
import { calculateCartTotal } from "../src/utils/test/cart"; // Ajuste le chemin selon ton projet

//
test.describe("calculateCartTotal", () =>
{
    it("devrait retourner 0 pour un panier vide", () =>
    {
        const result = calculateCartTotal([]);
        expect(result).toBe(0);
    });

    it("devrait calculer le total pour un seul article", () =>
    {
        const items = [{ price: 10, quantity: 2 }];
        const result = calculateCartTotal(items);
        expect(result).toBe(20);
    });

    it("devrait calculer le total pour plusieurs articles", () =>
    {
        const items = [
            { price: 5, quantity: 3 },
            { price: 10, quantity: 2 },
            { price: 2, quantity: 5 },
        ];
        const result = calculateCartTotal(items);
        expect(result).toBe(5*3 + 10*2 + 2*5); // 15 + 20 + 10 = 45
    });

    it("devrait retourner 0 si la quantité est 0", () =>
    {
        const items = [{ price: 100, quantity: 0 }];
        const result = calculateCartTotal(items);
        expect(result).toBe(0);
    });

    // Optionnel : si tu veux tester les quantités négatives
    it("devrait gérer les quantités négatives (si autorisé)", () =>
    {
        const items = [{ price: 10, quantity: -1 }];
        const result = calculateCartTotal(items);
        expect(result).toBe(-10);
    });
});
