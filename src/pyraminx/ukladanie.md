***
{
    "title": "Pyraminx - kurs układania"    
}
***
[up]:    %site.assets%/images/pyraminx/U.jpg "Pyraminx - notacja U"
[front]: %site.assets%/images/pyraminx/F.jpg "Pyraminx - notacja F"
[right]: %site.assets%/images/pyraminx/R.jpg "Pyraminx - notacja R"
[left]:  %site.assets%/images/pyraminx/L.jpg "Pyraminx - notacja L"

# Kurs układania kostki Pyraminx (Piramidki)

Układanie pyraminx'a może z początku wydawać się trudne. Dlatego zalecam chwilę pobawić się tą kostką aby w miarę zrozumieć, które elementy kostki, kiedy i jak się przemieszczają.

Na początek warto przedstawić notację z jaką zetkniemy się podczas tego kursu:


| Ilustacja           | Oznaczenie w notacji |
| ------------------- | -------------------- |
| ![Notacja U][up]    | U - góra (UP)        |
| ![Notacja F][front] | F - przód (FRONT)    |
| ![Notacja R][right] | R - prawo (RIGHT)    |
| ![Notacja L][left]  | L - lewo (LEFT)      |

Układanie można podzielić na trzy etapy z czego jeden (wierzchołki) możemy wykonać w dowolnym momencie:

 - [Krawędzie pierwszej warstwy](#krawedzie) - tutaj nie uczymy się żadnych algorytmów, jest to to samo co w zwykłej kostce 3x3x3
 - [Permutacja](#permutacja) - w tym etapie mamy do czynienia z aż pięcioma algorytmami. Ta kosmiczna ilosc pozwoli nam ułożyć ta kosteczkę w około 8 sekund :)
 - Wierzchołki - ten etap może być wykonany w dowolnym momencie układania. Polega na odpowiednim przekręceniu wierzchołków (tip'ów) piramidki.


## Krawędzie pierwszej warstwy {#krawedzie}

Jest to najprostszy etap w układaniu. Do wstawienia w odpowiednie miejsca mamy trzy z sześciu krawędzi.

Musimy pamiętać aby znajdowały się w jednej warstwie (pojecie jednej wartwy w piramidce jest taki samo jak w kostce 3x3x3. Oznacza ułożenie jednego całego koloru oraz "obramowania" wokół niego). Na rysunku poniżej zaznaczone są na biało wszystkie krawędzie. Jeżeli umiesz ułożyć zwykłą kostke 3x3x3 to ten etap nie sprawi Ci żadnego problemu i po paru chwilach będziesz mógł przejść dalej.

<p markdown=1 class="centered">
![Krawędzie w piramidce](%site.assets%/images/pyraminx/kraw.gif)
</p>

## Permutacja {#permutacja}

Ostatni etap w układaniu piramidki. Niezbyt trudny, można poświęcić dłuższą chwilę i samemu wykombinmować aby uzyskać większą satysfakcję :).

Całkowita liczba przypadków ogranicza się do zaledwie pięciu (trzy unikalne i dwa lustrzane).

| Ilustracja                                            | Algorytm            |
| ----------------------------------------------------- | ------------------- |
| ![Algorytm 1](%site.assets%/images/pyraminx/pll1.gif) | R L' R' L U' L U L' |
| ![Algorytm 2](%site.assets%/images/pyraminx/pll2.gif) | R U' R' U' R U' R'  |
| ![Algorytm 3](%site.assets%/images/pyraminx/pll3.gif) | R U R' U R U R'     |
| ![Algorytm 4](%site.assets%/images/pyraminx/pll4.gif) | R U L U' L' R'      |
| ![Algorytm 5](%site.assets%/images/pyraminx/pll5.gif) | L' U' R' U R L      |