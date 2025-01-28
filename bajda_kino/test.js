/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Wczytaj HTML i CSS do testów
const html = fs.readFileSync(path.resolve(__dirname, '../index.htm'), 'utf8');

describe("Testy UI strony Kino Bajda", () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html;
    });

    test("Obrazki w sliderze mają poprawną szerokość", () => {
        const images = document.querySelectorAll(".fp-thumbnail img");
        images.forEach(img => {
            expect(img.width).toBeGreaterThanOrEqual(900);
            expect(img.height).toBeGreaterThanOrEqual(300);
        });
    });

    test("Menu nawigacyjne ma poprawne klasy", () => {
        const menu = document.querySelector(".menu-primary");
        expect(menu).not.toBeNull();
        expect(menu.classList.contains("menus")).toBeTruthy();
    });

    test("Slider posiada przynajmniej 3 elementy", () => {
        const slides = document.querySelectorAll(".fp-slides-items");
        expect(slides.length).toBeGreaterThanOrEqual(3);
    });

    test("Banery w sidebarze mają poprawne marginesy", () => {
        const banners = document.querySelectorAll(".banners-125 img");
        banners.forEach(banner => {
            expect(banner.style.margin).toMatch(/^\d+px$/);
        });
    });
});