<?php
// Połączenie z bazą danych
$servername = "localhost";  // lub "127.0.0.1"
$username = "root";         // Domyślny użytkownik w XAMPP
$password = "";             // Domyślne hasło w XAMPP to puste
$dbname = "komentarze";     // Nazwa bazy danych

// Tworzenie połączenia
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzanie połączenia
if ($conn->connect_error) {
    die("Połączenie nie powiodło się: " . $conn->connect_error);
}

// Sprawdzenie, czy formularz został wysłany
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobieranie danych z formularza
    $imie = $_POST['imie'];
    $email = $_POST['email'];
    $website = $_POST['url'];
    $komentarz = $_POST['komentarz'];

    // Sanityzacja danych (proste oczyszczenie z niebezpiecznych znaków)
    $imie = htmlspecialchars($imie, ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $website = htmlspecialchars($website, ENT_QUOTES, 'UTF-8');
    $komentarz = htmlspecialchars($komentarz, ENT_QUOTES, 'UTF-8');

    // Przygotowanie zapytania SQL do wstawienia komentarza
    $sql = "INSERT INTO comments (imie, email, website, komentarz) 
            VALUES ('$imie', '$email', '$website', '$komentarz')";

    // Wykonanie zapytania
    if ($conn->query($sql) === TRUE) {
        // Jeśli komentarz został dodany
        // Przekierowanie na stronę index.htm
        header("Location: index.htm");
exit();  // Upewnij się, że wyjście kończy skrypt po przekierowaniu
    } else {
        // Jeśli wystąpił błąd przy dodawaniu komentarza
        echo "Błąd: " . $sql . "<br>" . $conn->error;
    }
}

// Zamykanie połączenia z bazą danych
$conn->close();
?>