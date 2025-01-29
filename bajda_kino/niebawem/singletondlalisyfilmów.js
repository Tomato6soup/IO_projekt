class FilmList {
    constructor() {
        if (!FilmList.instance) {
            this.films = [];
            FilmList.instance = this;
        }
        return FilmList.instance;
    }

    dodajFilm(film) {
        this.films.push(film);
        this.render();
    }

    usunFilm(tytul) {
        this.films = this.films.filter(film => film.tytul !== tytul);
        this.render();
    }

    getFilmy() {
        return this.films;
    }

    render() {
        const filmContainer = document.getElementById("lista-filmow");
        if (!filmContainer) return;
        
        filmContainer.innerHTML = "";
        this.films.forEach(film => {
            const filmElement = document.createElement("p");
            filmElement.innerHTML = `<strong>${film.data}</strong>: ${film.tytul}`;
            filmContainer.appendChild(filmElement);
        });
    }
}

// Singleton - zawsze zwraca te sama instancje
const listaFilmow = new FilmList();
Object.freeze(listaFilmow); // Zapobiega zmianie instancji

// Testowanie
listaFilmow.dodajFilm({ data: "15 stycznia", tytul: "ROBBY WILLIAMS: BETTER MAN" });
listaFilmow.dodajFilm({ data: "16 stycznia", tytul: "PRZYGODY PADDINGTONA W PERU" });
