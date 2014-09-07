***
{
    "title": "Kostka 2x2x2 - układanie metodą Ortega"
}
***
# Kurs układania kostki 2x2x2 metodą Ortega

## Wprowadzenie

Metoda Ortega jest ulepszeniem metody Fridrich. Cały plan polega na tym aby ułożyć tylko kolor na dwóch przeciległych ściankach a następnie jednym algorytmem ułożyć kostkę. W porównaniu z metodą Fridrich (dla kostki 2x2x2) jest tu tylko 4 algorytmy więcej (2 + 2 lustrzane) do nauki.

Etapy układania:

 - Pierwszy kolor - układamy kolor na jednej ze ścianek - nie powinno zająć więcej niż 5 ruchów,
 - [Drugi kolor](#orientacja "Drugi kolor - orientacja") - układamy kolor na przecinej ściance niż pierwszy - stosujemy zwykłe algorytmy na OLL z metody Fridrich,
 - [Permutacja](#permutacja "Permutacja") - permutujemy obie warstwy jednocześnie - wbrew pozorom tylko 6 algorytmów.

## Drugi kolor na przeciwległej ściance {#orientacja}

Drugim etapem w Ortedze jest ułożenie koloru na ściance przeciwległej do tej, od której zaczęliśmy układanie.
Zastosowane tu algorytmy są identyczne jak dla OLL w metodzie Fridrich (kostka 2x2x2).


| Ilustracja                                                   | Algorytm                                                         |
| ------------------------------------------------------------ | ---------------------------------------------------------------- |
| ![Algorytm 1](%site.assets%/images/2x2x2/fridrich/oll/1.png) | (FRUR'U'F')                                                      |
| ![Algorytm 2](%site.assets%/images/2x2x2/fridrich/oll/2.png) | (R'U') (RU) (LU') (R'U)                                          |
| ![Algorytm 3](%site.assets%/images/2x2x2/fridrich/oll/3.png) | x' D(RUR'D') (RU'R')<br />(y2)R'FRB'R'F'RB<br />(y2)FR'F'RURU'R' |
| ![Algorytm 4](%site.assets%/images/2x2x2/fridrich/oll/4.png) | L'U'LU'L'U2L                                                     |
| ![Algorytm 5](%site.assets%/images/2x2x2/fridrich/oll/5.png) | RUR'URU2R'                                                       |
| ![Algorytm 6](%site.assets%/images/2x2x2/fridrich/oll/6.png) | R'U'RU'R'URU'R'U2R<br />R2U2RU2R2                                |
| ![Algorytm 7](%site.assets%/images/2x2x2/fridrich/oll/7.png) | RU2R2U'R2U'R2U2R                                                 |

## Permutacja warstw {#permutacja}

Ostatnim etapem w układaniu metodą Ortega jest spermutowanie obydwóch warstw.


| Ilustracja (góra - dół)                                    | Ilustracja  - ogólny podgląd kostki                         | Algorytm                                           |
| ---------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| ![Algorytm 1](%site.assets%/images/2x2x2/ortega/pll/1.png) | ![Algorytm 1](%site.assets%/images/2x2x2/ortega/pll/1a.png) | (R'F)(R'F2RU'R'F2R2)                               |
| ![Algorytm 2](%site.assets%/images/2x2x2/ortega/pll/2.png) | ![Algorytm 2](%site.assets%/images/2x2x2/ortega/pll/2a.png) | RU'R'U'F2U'RUR'DR2                                 |
| ![Algorytm 3](%site.assets%/images/2x2x2/ortega/pll/3.png) | ![Algorytm 3](%site.assets%/images/2x2x2/ortega/pll/3a.png) | LD'LF2L'DL'                                        |
| ![Algorytm 4](%site.assets%/images/2x2x2/ortega/pll/4.png) | ![Algorytm 4](%site.assets%/images/2x2x2/ortega/pll/4a.png) | RU'RF2R'UR'                                        |
| ![Algorytm 5](%site.assets%/images/2x2x2/ortega/pll/5.png) | ![Algorytm 5](%site.assets%/images/2x2x2/ortega/pll/5a.png) | R2F2R2                                             |
| ![Algorytm 6](%site.assets%/images/2x2x2/ortega/pll/6.png) | ![Algorytm 6](%site.assets%/images/2x2x2/ortega/pll/6a.png) | R2UR2'(U2y')R2UR2' - lub zamiast (U2y') można (UD) |