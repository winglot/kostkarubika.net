<!---
title: "Kostka 2x2x2 - układanie metodą Fridrich"
javascripts: [prettytable.js]
-->
# Kurs układania kostki 2x2x2 metodą Fridrich

Metoda Fridrich w kostce 2x2x2 różni sie od tej z 3x3x3 mniejszą ilością algorytmów oraz ilością kroków - ponieważ pomijamy wszystko co związane z krawędziami (kostka 2x2x2 ich nie posiada).

## Wprowadzenie

Etapy układania:

 - Narożniki pierwszej warstwy - etap ten jest wykonywany intuicyjnie, nie wymaga do nauki żadnych algorytmów.
 - [OLL](#oll "OLL") - to samo co w kostce 3x3x3, naszym zadaniem jest ułożyć kolor na górnej ściance. Mamy tylko 7 alogrytmów do nauki co w porównaniu do 57 z kostki 3x3x3 jest praktycznie niczym.
 - [PLL](#pll "PLL") - również to samo co w kostce 3x3x3, tutaj musimy zamienić zawsze tylko 2 narożniki, albo leżące obok siebie albo po skosie.


## OLL - orientacja ostatniej warstwy {#oll}

Poniżej znajduje się zestaw algorytmów pozwalających zorientować (ułożyć kolor) ostatnią warstwę w kostce 2x2x2. Cześć przypadków posiada kilka algorytmów - od Ciebie zależy który wybierzesz.

| Ilustracja                                                   | Algorytm                                                           |
| ------------------------------------------------------------ | --------- -------------------------------------------------------- |
| ![Algorytm 1](%site.assets%/images/2x2x2/fridrich/oll/1.png) | `(FRUR'U'F')`                                                      |
| ![Algorytm 2](%site.assets%/images/2x2x2/fridrich/oll/2.png) | `(R'U') (RU) (LU') (R'U)`                                          |
| ![Algorytm 3](%site.assets%/images/2x2x2/fridrich/oll/3.png) | `x' D(RUR'D') (RU'R')`<br>`(y2)R'FRB'R'F'RB`<br>`(y2)FR'F'RURU'R'` |
| ![Algorytm 4](%site.assets%/images/2x2x2/fridrich/oll/4.png) | `L'U'LU'L'U2L`                                                     |
| ![Algorytm 5](%site.assets%/images/2x2x2/fridrich/oll/5.png) | `RUR'URU2R'`                                                       |
| ![Algorytm 6](%site.assets%/images/2x2x2/fridrich/oll/6.png) | `R'U'RU'R'URU'R'U2R`<br>(y)`R2U2RU2R2`                                |
| ![Algorytm 7](%site.assets%/images/2x2x2/fridrich/oll/7.png) | `RU2R2U'R2U'R2U2R`                                                 |

## PLL - permutacja ostatniej warstwy {#pll}

Zestaw algorytmów pozwalających spermutować ostatnią warstwę kostki 2x2x2 i tym samym zakończyć jej układanie. Cześć przypadków posiada kilka algorytmów - od Ciebie zależy który wybierzesz.

| Ilustracja                                                   | Algorytm                                        |
| ------------------------------------------------------------ | ----------------------------------------------- |
| ![Algorytm 1](%site.assets%/images/2x2x2/fridrich/pll/1.png) | `(R'F)(R'F2RU'R'F2R2)`                          |
| ![Algorytm 2](%site.assets%/images/2x2x2/fridrich/pll/2.png) | `F2(U'RU'R'U)F2(URUR')`<br>`RU'R'U'F2U'RUR'DR2` |
