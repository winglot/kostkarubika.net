<!---
title: "Kostka 4x4x4 - kurs układania"    
javascripts: [prettytable.js]
-->
# Kurs układania kostki 4x4x4

Aby układanie kostki 4x4x4 zakończyło się sukcesem niezbędna będzie umiejętność ułożenia kostki 3x3x3.

## Wprowadzenie {#wprowadzenie}

Proces układania możemy podzielić na trzy etapy:

 - [Układanie środkow](#srodki) - układamy sześć środków pamiętając, że są **!ruchome!** czyli musimy znać układ kolorów na naszej kostce zanim ją pomieszamy,
 - [Parowanie krawędzi](#parowanie) - łączymy w dwójki krawędzie o jednakowych kolorach co pozwoli nam później traktować całą kostkę 4x4x4 jak zwykłą 3x3x3,
 - Układanie jak zwykłą 3x3x3 - sparowane krawędzie traktujemy jako jedną całość, czyli całą kostke jako 3x3x3. Możemy układać dowolną znaną nam metodą z kostki 3x3x3. Przed rozpoczęciem układania ostatniej warstwy (OLL i PLL w Metodzie Fridrich) warto zwrócić uwagę czy nie występuje błąd parzystości (algorytmy z tego etapu burzą ostanią warstwę),
 - [Błąd parzystości (parity error)](#parity) - etap ten nie zawsze pojawi się podczas układania - a jeżeli już to zrobi to jest najprzykrzejszą cześcią ponieważ przydługaśne algorytmy potrafią popsuć ułożenie, które wydawało się, że będzie świetne.

## Układanie środków {#srodki}

Cały przebig układania kostki 4x4x4 zaczynamy od własciwego ułożenia wszystkich środków, pamiętając przy tym cały czas, że mamy tu doczynienia z ruchomymi srodkami, a co za tym idzie musimy znać prawidłowy układ kolorów naszej kochy, jeśli środki ułożymy nieprawidłowo to już cała reszta także się nie będzie zgadzać.

Przykładowe sytuacje wraz z algorytmami:

| Ilustracja                                        | Alogrytm                          |
| ------------------------------------------------- | --------------------------------- |
| ![Środki 1](%site.assets%/images/4x4x4/srod1.png) | `(Dd) R2 (Dd)'`                   |
| ![Środki 2](%site.assets%/images/4x4x4/srod2.png) | `(Uu)' R' (Uu)`                   |
| ![Środki 3](%site.assets%/images/4x4x4/srod3.png) | `(Ll)' U' F (Ll) R (Dd) R' (Dd)'` |
| ![Środki 4](%site.assets%/images/4x4x4/srod4.png) | `(Ll)' U' (Ll) (Uu)' R (Uu)`      |
| ![Środki 5](%site.assets%/images/4x4x4/srod5.png) | `(Uu)' R (Uu) (Dd) R (Dd)'`       |

## Parowanie krawędzi {#parowanie}

Na tym etapie musimy poparowć wszystkie krawędzie w tych samych kolorach aby można je było traktować w następnym kroku jako jedną całość, to pozwala nam później zrobić z niej zwykłą kostkę 3x3x3.

Mamy w sumie 12 par krawędzi. 10 z nich parujemy tym samym sposobem, czyli układamy je w pionie i po skosie względem siebie oraz wykonujemy jeden z dwóch poniższych ruchów w zależnosci od tego gdzie znajduje się jakaś nie ułożona jeszcze para (zaznaczona na żółto) a to po to by żadnej wczesniej ułożonej nie rozwalić.

| Ilustracja                                                   | Alogrytm             |
| ------------------------------------------------------------ | -------------------- |
| ![Parowanie 1](%site.assets%/images/4x4x4/parowanie4.png)    | `(Rr) U L' U' (Rr)'` |
| ![Parowanie 2](%site.assets%/images/4x4x4/parowanie4sym.png) | `(Ll)' U' R U (Ll)`  |
| ![Parowanie 3](%site.assets%/images/4x4x4/parowanie5.png)    | `(Rr) U' R U (Rr)'`  |

Kolejnym krokiem jest połączenie ostatnich dwóch par, o ile oczywiście przypadkiem niestało sie to wcześniej (zdarza się to dosyć często). Aby to zrobic należy dwie ostatnie pary ułożyć w poziomie i tak aby klocki tych samych kolorów były dokładnie na przeciwko siebie.

Jeżeli są po skosie wykonujemy najpierw kilka ruchów aby je obrócić:

| Ilustracja                                                   | Alogrytm       |
| ------------------------------------------------------------ | -------------- |
| ![Ostania para 1](%site.assets%/images/4x4x4/parowanie6.png) | `L' F U' L F`  |


Aż w końcu możemy przejść do ich połączenia:
| Ilustracja                                                   | Alogrytm           |
| ------------------------------------------------------------ | ------------------ |
| ![Ostania para 2](%site.assets%/images/4x4x4/parowanie7.png) | `(Dd)' R F' U R' F (Dd)` |

## Błąd parzystości (parity error) {#parity}

W tym etapie nie ma żadnej filozofii. Musimy nauczyć się dwóch algorytmów dla trzech przypadków.

OLL parity:

| Ilustracja                                            | Alogrytm                                                         |
| ----------------------------------------------------- | ---------------------------------------------------------------- |
| ![OLL parity](%site.assets%/images/4x4x4/parity1.png) | `(Rr)2 B2 U2 (Ll) U2 (Rr)' U2 (Rr) U2 F2 (Rr) F2 (Ll)' B2 (Rr)2` |

PLL parity:

| Ilustracja                                              | Alogrytm               |
| --------------------------------------------------------| ---------------------- |
| ![PLL parity 1](%site.assets%/images/4x4x4/parity2.png) | `r2 U2 r2 (Uu)2 r2 u2` |

Ostatni przypadek jest dość specyficzny - zostanie rozwiązany w dwóch etapach. W pierwszy wykonuje się na nim taki sam algorytm jak w przypadku PLL parity, a w drugim algorytm z Metody Fridrich - PLL - permutacja N (lub w dowolny znany Tobie sposób):

| Ilustracja                                              | Alogrytm               |
| --------------------------------------------------------| ---------------------- |
| ![PLL parity 1](%site.assets%/images/4x4x4/parity3.png) | `r2 U2 r2 (Uu)2 r2 u2` |
