// Prototyp obiektu strony kina
class CinemaPage {
    constructor(title, description, features, location) {
        this.title = title;
        this.description = description;
        this.features = features;
        this.location = location;
    }
    
    // Metoda klonująca obiekt
    clone() {
        return new CinemaPage(
            this.title,
            this.description,
            [...this.features], // Kopia tablicy
            { ...this.location } // Kopia obiektu
        );
    }
}

// Tworzenie oryginalnego obiektu strony
const originalPage = new CinemaPage(
    "O kinie Bajda",
    "Kino Bajda to kameralne, nowoczesne kino z niepowtarzalnym klimatem...",
    ["bardzo duży ekran", "REAL3D", "DOLBY DIGITAL", "klimatyzacja"],
    { city: "Bielsko-Biała", address: "ul. Kinowa 1" }
);

// Klonowanie strony do nowej wersji
const clonedPage = originalPage.clone();
clonedPage.title = "Nowe Kino Bajda";
clonedPage.features.push("VIP strefa");

console.log(originalPage);
console.log(clonedPage);