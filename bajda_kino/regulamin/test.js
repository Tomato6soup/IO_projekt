/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Wczytaj HTML do testów
const html = fs.readFileSync(path.resolve(__dirname, '../regulamin.html'), 'utf8');

describe("Testy UI i formularza komentarzy na stronie Regulamin", () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html;
    });

    // Test czy strona zawiera formularz komentarzy
    test("Formularz komentarzy powinien istnieć", () => {
        const form = document.querySelector("#commentform");
        expect(form).not.toBeNull();
    });

    // Test czy pola formularza są poprawnie oznaczone jako wymagane
    test("Pola formularza komentarzy powinny mieć atrybut required", () => {
        const nameField = document.querySelector("#imie");
        const emailField = document.querySelector("#email");
        const commentField = document.querySelector("#komentarz");

        expect(nameField).toHaveAttribute("aria-required", "true");
        expect(emailField).toHaveAttribute("aria-required", "true");
        expect(commentField).toHaveAttribute("aria-required", "true");
    });

    // Test poprawności szerokości obrazków w sidebarze
    test("Obrazki w sidebarze mają poprawną szerokość", () => {
        const images = document.querySelectorAll("#sidebar-primary img");
        images.forEach(img => {
            expect(img.width).toBeGreaterThanOrEqual(200);
        });
    });

    // Test poprawności menu nawigacyjnego
    test("Menu nawigacyjne posiada odpowiednią klasę", () => {
        const menu = document.querySelector(".menu-primary");
        expect(menu).not.toBeNull();
        expect(menu.classList.contains("menus")).toBeTruthy();
    });

    // Test czy formularz faktycznie wysyła dane (symulacja)
    test("Formularz komentarzy wysyła dane", () => {
        const form = document.querySelector("#commentform");
        const submitButton = document.querySelector("#submit");

        // Symulacja wypełnienia formularza
        document.querySelector("#imie").value = "Testowy Użytkownik";
        document.querySelector("#email").value = "test@example.com";
        document.querySelector("#komentarz").value = "To jest testowy komentarz.";

        const fakeEvent = { preventDefault: jest.fn() };

        form.dispatchEvent(new Event("submit", fakeEvent));

        expect(fakeEvent.preventDefault).toHaveBeenCalled();
    });

    // Test czy lista komentarzy zawiera co najmniej jeden wpis
    test("Lista komentarzy nie jest pusta", () => {
        const commentsList = document.querySelector(".commentlist");
        const comments = commentsList.querySelectorAll("li.comment");
        expect(comments.length).toBeGreaterThan(0);
    });
});