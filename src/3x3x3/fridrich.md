***
{
    "title": "Kostka 3x3x3 - układanie metodą Fridrich"
}
***
# Kurs układania kostki 3x3x3 metodą Fridrich

Metoda Fridrich jest najpopularniejszym sposobem układania standardowej kostki 3x3x3. Jest ona rozwinięciem metody LBL poprzez połączenie kilku etapów w jeden. Pozwala znacznie zredukować osiągany czas ale powoduje, że musimy zapoznać się z 78. algorytmami (OLL - 57, PLL - 21).

## Wprowadzenie

Tak prezentuje się podział etapów układania:

 - Krzyż (tzw. cross) - ułożenie krawędzi pierwszej warstwy tak aby były zgodne ze środkami ścianek bocznych. Ten etap powinien być zaplanowany w tzw. preinspection time (na zawodach jest to 12 sek.) i powinien być wykonywany w maksymalnie 7-8 ruchów
 - F2L (first two layers) - wstawianie rogów i odpowiadających im krawędzi jednocześnie do odpowiedniego "slotu".
 - OLL - orientowanie rogów i krawędzi ostatniej warstwy tak aby otrzymać cały kolor. Tutaj już niestety zaczynają się schody. Na pierwszy rzut oka, gdy zwykły śmiertelnik widzi 57 algorytmów do nauczenia to niemalże mdleje. Specjalnie dla takich osób powstało uproszczenie, które ma na celu rozbicie OLL na 2 etapy przez co ilość algorytmów spada do 10! Odrazu lepiej? Jednak z tą zmianą wiążą się także słabsze czasy.
 - PLL - permutacja rogów i krawędzi ostatniej warstwy czyli inaczej zamiana miejscami odpowiednich klocków aby otrzymać gotową kostkę! 21 algów można uprościć do 2 (choć jeżeli już upraszczać to najlepiej do około 6-7) ale z dosyć sporą stratą czasową.

Uproszczenie:

 - EO - orientacja krawędzi. Najpierw orientujemy krawędzie. Możliwych przypadków jest 3.
 - CO - orientacja rogów. W nagrodę otrzymujemy cały kolor! Algorytmów mamy 7.
 - PLL - uproszczona wersja pll'a. Do wyboru 2 lub 7 algorytmów.

## Krzyż (cross) {#cross}

Może się wydawać, że ułożenie krzyża jest banalnie proste ale nie do końca. Samo fakt ułożenia 4 krawędzi jest trywialny o tyle zaplanowanie a następnie faktyczne ułożenie w jak najmniejszej ilości ruchów i czasie już takie proste nie jest. Jedynym sposobem jest po prostu trening. Warto pamiętać, że większość przypadków można rozwiąząć w około 6 ruchach.

## Dwie pierwsze warstwy (F2L - First Two Layers) {#f2l}

F2L jest to etap polegający na jednoczesnym wstawianiu odpowiedniego narożnika i krawędzi w przeznaczone im miejsce. Dzieki temu otrzymujemy od razu gotowe dwie warstwy.

Mimo dużej ilości przypadków, opanowanie tego etapu w stopniu zadowalającym nie jest trudne. Większość przypadków nie jest trudna w rozwiązaniu i daltego można zastosować dwie metody nauki:

 - wymyślenie własnych algorytmów (intuicyjnie)
 - skorzystanie z gotowych algorytmów znajdujących się poniżej


### Para rozłączona w górnej warstwie
### Para złączona w górnej warstwie
### Krawędź na miejscu
### Narożnik na miejscu
### Para na miejscu
