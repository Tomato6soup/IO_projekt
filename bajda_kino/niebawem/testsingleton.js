const FilmList = require("../FilmList"); // Zalozmy, ze plik z kodem nazywa sie FilmList.js

describe("Singleton FilmList", () => {
    test("Powinna istniec tylko jedna instancja FilmList", () => {
        const instance1 = new FilmList();
        const instance2 = new FilmList();
        expect(instance1).toBe(instance2); // Obie instancje powinny byc tym samym obiektem
    });

    test("Dodawanie filmu do listy", () => {
        const listaFilmow = new FilmList();
        listaFilmow.dodajFilm({ data: "15 stycznia", tytul: "ROBBY WILLIAMS: BETTER MAN" });

        expect(listaFilmow.getFilmy().length).toBe(1);
        expect(listaFilmow.getFilmy()[0].tytul).toBe("ROBBY WILLIAMS: BETTER MAN");
    });

    test("Usuwanie filmu z listy", () => {
        const listaFilmow = new FilmList();
        listaFilmow.dodajFilm({ data: "16 stycznia", tytul: "PRZYGODY PADDINGTONA W PERU" });
        listaFilmow.usunFilm("PRZYGODY PADDINGTONA W PERU");

        expect(listaFilmow.getFilmy().length).toBe(0);
    });

    test("Lista filmow nie powinna miec duplikatow instancji", () => {
        const listaFilmow1 = new FilmList();
        listaFilmow1.dodajFilm({ data: "20 stycznia", tytul: "WEREWOLF" });

        const listaFilmow2 = new FilmList();
        expect(listaFilmow2.getFilmy().length).toBe(1);
        expect(listaFilmow2.getFilmy()[0].tytul).toBe("WEREWOLF");
    });
});
