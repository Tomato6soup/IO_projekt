/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Wczytaj HTML do testow
const html = fs.readFileSync(path.resolve(__dirname, '../index.htm'), 'utf8');

describe("Testy obrazkow na stronie", () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html;
    });

    // Test czy na stronie znajduja sie obrazki
    test("Obrazki powinny istniec na stronie", () => {
        const images = document.querySelectorAll("img");
        expect(images.length).toBeGreaterThan(0);
    });

    // Test czy wszystkie obrazki maja atrybut alt
    test("Kazdy obrazek powinien miec atrybut alt", () => {
        const images = document.querySelectorAll("img");
        images.forEach(img => {
            expect(img.hasAttribute("alt")).toBeTruthy();
        });
    });

    // Test czy szerokosc obrazkow jest poprawna
    test("Obrazki powinny miec szerokosc co najmniej 200px", () => {
        const images = document.querySelectorAll("img");
        images.forEach(img => {
            expect(img.width).toBeGreaterThanOrEqual(200);
        });
    });

    // Test czy obrazki nie maja pustego atrybutu src
    test("Obrazki powinny miec niepusty atrybut src", () => {
        const images = document.querySelectorAll("img");
        images.forEach(img => {
            expect(img.getAttribute("src")).not.toBe("");
        });
    });
});
