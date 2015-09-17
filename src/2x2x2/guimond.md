<!---
title: "Kostka 2x2x2 - układanie metodą Guimond"    
-->

[case1]: %site.assets%/images/2x2x2/guimond/4.png ("Przypadek pierwszy")
[case2]: %site.assets%/images/2x2x2/guimond/5.png ("Przypadek drugi")

# Kurs układania kostki 2x2x2 metodą Guimond

## Wprowadzenie

Metoda ta została opracowana przez Gaetan'a Guimond'a. Jest to jedna z ciekawszych a zarazem najszybszych metod układania kostki 2x2x2.

Kolejne kroki układania:

 - [Trzy narożniki](#trzy-narozniki "Trzy narożniki") - układamy 3/4 jednej ścianki traktując kolory tak jak napisane powyżej.
 - [Układamy drugą ściankę](#dwie-scianki "Dwie ścianki") - nadal traktując np. biały/żółty jako jeden.
 - [Zamiana narożników](#zamiana-naroznikow "Zamiana narożników") - sprowadzamy odpowidnie kolory do swoich ścianek.
 - [Permutacja](#permutacja "Permutacja") - permutujemy obydwie warstwy - to samo co w Ortedze.

## Trzy narożniki {#trzy-narozniki}

Pierwszym etapem podczas układania jest sprowadzenie trzech narożników w przeciwnych kolorach do jednej ścianki. W 90% procentach przypadków ten etap jest już wykonany a jeżeli nie to nie powinien zająć więcej niż 1-2 ruchy.

Aby przejść do następnego etapu musimy tutaj rozróżnić dwa przypadki. Kolor fioletowy widoczny na ilustracjach to dowolna para kolorów ze ścianek leżących naprzeciwko siebie (w większości przypadków będzie to: biały/żółty, zielony/niebieski, czerwony/pomarańczowy):

<p markdown=1 class="centered">
    [![Przypadek 1][case1]](#dwie-scianki-case1)
    [![Przypadek 2][case2]](#dwie-scianki-case2)
</p>

Przykładowe wyglądy kostek:

![Przykład 1](%site.assets%/images/2x2x2/guimond/1.png "Przykład pierwszy")
![Przykład 2](%site.assets%/images/2x2x2/guimond/2.png "Przykład drugi")
![Przykład 3](%site.assets%/images/2x2x2/guimond/3.png "Przykład trzeci")

## Dwie ścianki {#dwie-scianki}

Drugim etapem podczas układania będzie ułożenie dwóch ścianek (tak jakby). Do wyboru mamy dwa początkowe przypadki.

### Gdy otrzymamy przypadek 1 {#dwie-scianki-case1}
<p markdown=1 class="centered">
![Przypadek 1][case1]
</p>

Wykonujemy ruch x2 (obracamy kostką - obecna górna ścianka - nasz przypadek 1 - ma się znaleźć na dolnej ściance). Teraz nie kręcąc dolną ścianką, rozpoznajemy górną ściankę i obracamy (używając ruchów U, U', U2) aby otrzymać któryś z przypadków poniżej. Jak poprzenio, kolor fioletowy to dowolna kombinacja przeciwległych kolorów na kostce (przeważnie są to biały/żółty, niebieski/zielony, pomarańczowy/czerwony):

| Ilustracja                                                               | Algorytm        |
| ------------------------------------------------------------------------ | --------------- |
| ![Przypadek 1](%site.assets%/images/2x2x2/guimond/4_1.png "Przypadek 1") | (y2) R U' R'    |
| ![Przypadek 2](%site.assets%/images/2x2x2/guimond/4_2.png "Przypadek 2") | (y') R' F' R    |
| ![Przypadek 3](%site.assets%/images/2x2x2/guimond/4_3.png "Przypadek 3") | (yF' L2 F       |
| ![Przypadek 4](%site.assets%/images/2x2x2/guimond/4_4.png "Przypadek 4") | L2' U L'        |
| ![Przypadek 5](%site.assets%/images/2x2x2/guimond/4_5.png "Przypadek 5") | (x2) R U' B L'  |
| ![Przypadek 6](%site.assets%/images/2x2x2/guimond/4_6.png "Przypadek 6") | R2 F2 U F       |
| ![Przypadek 7](%site.assets%/images/2x2x2/guimond/4_7.png "Przypadek 7") | F' R U' F2 U'   |
| ![Przypadek 8](%site.assets%/images/2x2x2/guimond/4_8.png "Przypadek 8") | R F2 U' R2 F U' |

### Gdy otrzymamy przypadek 2 {#dwie-scianki-case2}
<p markdown=1 class="centered">
![Przypadek 2][case2]
</p>

Wykonujemy ruch x2 (obracamy kostką - obecna górna ścianka - nasz przypadek 2 - ma się znaleźć na dolnej ściance). Teraz nie kręcąc dolną ścianką, rozpoznajemy górną ściankę i obracamy (używając ruchów U, U', U2) aby otrzymać któryś z przypadków poniżej. Jak poprzenio, kolor fioletowy to dowolna kombinacja przeciwnych kolorów (biały/żółty, niebieski/zielony, pomarańczowy/czerwony):

| Ilustracja                                                               | Algorytm         |
| ------------------------------------------------------------------------ | ---------------- |
| ![Przypadek 1](%site.assets%/images/2x2x2/guimond/5_1.png "Przypadek 1") | (y) R' U R       |
| ![Przypadek 2](%site.assets%/images/2x2x2/guimond/5_2.png "Przypadek 2") | L U L'           |
| ![Przypadek 3](%site.assets%/images/2x2x2/guimond/5_3.png "Przypadek 3") | (y2) R U2 R'     |
| ![Przypadek 4](%site.assets%/images/2x2x2/guimond/5_4.png "Przypadek 4") | (y) L2 D' R      |
| ![Przypadek 5](%site.assets%/images/2x2x2/guimond/5_5.png "Przypadek 5") | R U' B L'        |
| ![Przypadek 6](%site.assets%/images/2x2x2/guimond/5_6.png "Przypadek 6") | F2 R2 U' R'      |
| ![Przypadek 7](%site.assets%/images/2x2x2/guimond/5_7.png "Przypadek 7") | R' F U' F2 U     |
| ![Przypadek 8](%site.assets%/images/2x2x2/guimond/5_8.png "Przypadek 8") | x U R' U' R U2 R |

## Zamiana narożników {#zamiana-naroznikow}

Wynikiem poprzednich etapów jest to, że na dwóch ściankach mamy dowolnie rozmieszczone narożniki o kolorach z naprzeciwległych ścianek kostki. 

Naszym zadaniem w tym etapie jest taka zamiana miejscami narożników aby dwie ścianki leżące naprzeciwko siebie miały ułożony kolor.

Jest to bardzo proste do wykonania bez użycia/nauki algorytmów ale na wszelki wypadek podaję je ponieżej.

| Ilustracja (góra - dół)                                   | Algorytm   |
| --------------------------------------------------------- | ---------- |
| ![Algorytm 1](%site.assets%/images/2x2x2/guimond/6_1.png) | R2U2F2     |
| ![Algorytm 1](%site.assets%/images/2x2x2/guimond/6_2.png) | R2U'R2     |
| ![Algorytm 1](%site.assets%/images/2x2x2/guimond/6_3.png) | R2U'R2U'R2 |

## Permutacja warstw {#permutacja}

Ostatnim etapem jest permutacja obu warstw (jeżeli znasz już metodę Ortega to z pewnością zauważysz, że są to te same algorytmy).


| Ilustracja (góra - dół)                                    | Ilustracja  - ogólny podgląd kostki                         | Algorytm                                           |
| ---------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| ![Algorytm 1](%site.assets%/images/2x2x2/ortega/pll/1.png) | ![Algorytm 1](%site.assets%/images/2x2x2/ortega/pll/1a.png) | (R'F)(R'F2RU'R'F2R2)                               |
| ![Algorytm 2](%site.assets%/images/2x2x2/ortega/pll/2.png) | ![Algorytm 2](%site.assets%/images/2x2x2/ortega/pll/2a.png) | RU'R'U'F2U'RUR'DR2                                 |
| ![Algorytm 3](%site.assets%/images/2x2x2/ortega/pll/3.png) | ![Algorytm 3](%site.assets%/images/2x2x2/ortega/pll/3a.png) | LD'LF2L'DL'                                        |
| ![Algorytm 4](%site.assets%/images/2x2x2/ortega/pll/4.png) | ![Algorytm 4](%site.assets%/images/2x2x2/ortega/pll/4a.png) | RU'RF2R'UR'                                        |
| ![Algorytm 5](%site.assets%/images/2x2x2/ortega/pll/5.png) | ![Algorytm 5](%site.assets%/images/2x2x2/ortega/pll/5a.png) | R2F2R2                                             |
| ![Algorytm 6](%site.assets%/images/2x2x2/ortega/pll/6.png) | ![Algorytm 6](%site.assets%/images/2x2x2/ortega/pll/6a.png) | R2UR2'(U2y')R2UR2' - lub zamiast (U2y') można (UD) |
