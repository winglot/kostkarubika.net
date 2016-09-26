<!---
title: "Kostka 3x3x3 - układanie metodą Fridrich"
javascripts: [prettytable.js]
-->
# Kurs układania kostki 3x3x3 metodą Fridrich

Metoda Fridrich jest najpopularniejszym sposobem układania standardowej kostki 3x3x3. Jest ona rozwinięciem metody LBL poprzez połączenie kilku etapów w jeden. Pozwala znacznie zredukować osiągany czas ale powoduje, że musimy zapoznać się z 78. algorytmami (OLL - 57, PLL - 21).

## Wprowadzenie

Tak prezentuje się podział etapów układania:

 - [Krzyż (tzw. cross)](#cross "Krzyż") - ułożenie krawędzi pierwszej warstwy tak aby były zgodne ze środkami ścianek bocznych.
 - [F2L (first two layers)](#f2l "F2L") - wstawianie rogów i odpowiadających im krawędzi jednocześnie do odpowiedniego "slotu".
 - [OLL](#full-oll "OLL") - orientowanie rogów i krawędzi ostatniej warstwy tak aby otrzymać cały kolor. Tutaj już niestety zaczynają się schody. Na pierwszy rzut oka, gdy zwykły śmiertelnik widzi 57 algorytmów do nauczenia to niemalże mdleje. Specjalnie dla takich osób powstało uproszczenie, które ma na celu rozbicie OLL na 2 etapy przez co ilość algorytmów spada do 10! Odrazu lepiej? Jednak z tą zmianą wiążą się także słabsze czasy.
 - [PLL](#full-pll "PLL") - permutacja rogów i krawędzi ostatniej warstwy czyli inaczej zamiana miejscami odpowiednich klocków aby otrzymać gotową kostkę! 21 algów można uprościć do 2 (choć jeżeli już upraszczać to najlepiej do około 6-7) ale z dosyć sporą stratą czasową.

Uproszczenie:

 - [EO](#eo "EO") - orientacja krawędzi. Najpierw orientujemy krawędzie. Możliwych przypadków jest 3.
 - [CO](#co "CO") - orientacja rogów. W nagrodę otrzymujemy cały kolor! Algorytmów mamy 7.
 - [PLL](#2look-pll "PLL") - uproszczona wersja pll'a. Tylko 2 algorytmy ale niestety wymagające powtórzenia.

## Kolejność nauki

Nauka algorytymów w odpowiedniej kolejności pozwoli cieszyć się z układania kostki a zarazem systematycznie osiągać lepsze czasy. Sugerowana przeze mnie kolejność jest następująca:

 - [Krzyż](#cross)
 - [F2L (intuicyjnie)](#f2l)
 - [Uproszczony OLL](#2look-oll) ([EO](#eo), [CO](#co))
 - [Uproszczony PLL](#2look-pll)
 - [Pełny PLL](#full-pll)
 - [Pełny OLL](#full-oll)
 - [F2L (algorytmy)](#f2l)

Zalecam naukę pełnego PLLa przed nauką pełnego OLLa. Algorytmy do uproszczonego OLLa (EO i CO) są stosunkowo szybkie przez co nauka pozostałych na początku nie da dużego obniżenia czasów układania.

## Krzyż (cross) {#cross}

Może się wydawać, że ułożenie krzyża jest banalnie proste ale nie do końca. Samo fakt ułożenia 4 krawędzi jest trywialny o tyle zaplanowanie a następnie faktyczne ułożenie w jak najmniejszej ilości ruchów i czasie już takie proste nie jest. Jedynym sposobem jest po prostu trening. Warto pamiętać, że większość przypadków można rozwiąząć w około 6 ruchach.

## Dwie pierwsze warstwy (F2L - First Two Layers) {#f2l}

F2L jest to etap polegający na jednoczesnym wstawianiu odpowiedniego narożnika i krawędzi w przeznaczone im miejsce. Dzieki temu otrzymujemy od razu gotowe dwie warstwy.

Mimo dużej ilości przypadków, opanowanie tego etapu w stopniu zadowalającym nie jest trudne. Większość jest stosunkowo łatwa w rozwiązaniu i dlatego można zastosować jedną z dwóch metod nauki:

 - wymyślenie własnych algorytmów (intuicyjnie)
 - skorzystanie z gotowych algorytmów

Na początek polecam próbę samodzielnego układania bez korzystania z gotowych algorytmów. Na pewno nic na tym nie stracicie a można zyskać dużą przyjemność i satysfakcję z ułożonej kostki.

## Uproszczony OLL {#2look-oll}

### EO {#eo}
Pierwsza cześć z uproszczonego OLLa polega na ułożeniu krawędzi górnej warstwy. Krawędzie utworzą krzyż podobny do tego jak w pierwszym etapie układania na dolnej ściance.

| Ilustracja                                       | Algorytm                            |
| -------------------------------------------------|-------------------------------------|
| ![Algorytm](%site.assets%/images/3x3x3/eo/1.png) | `F (R U R' U') F'`                  |
| ![Algorytm](%site.assets%/images/3x3x3/eo/2.png) | `F (U R U' R') F'`                  |
| ![Algorytm](%site.assets%/images/3x3x3/eo/3.png) | `(R U2) (R2 F R F') U2 (R' F R F')` |

### CO {#co}
W drugiej część ułożymy narożniki tak aby na górnej ściance otrzymać kolor.

| Ilustracja                                          | Algorytm                                                                                                                                                           |
|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_1.png) | `(y2) z' (U' R U R' U' R U) L' (U' R' U R U' R' U)`<br>`(R2 D') (R U2 R' D) (R U2 R)`<br>`(y2) (R2 D) (R' U2) (R D') (R' U2 R')`                                   |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_2.png) | `R' U' R U' R' U R U' R' U2 R`<br>`(y') R U2 R' U' R U R' U' R U' R'`<br>`(y) F (R U R' U') (R U R' U') (R U R' U') F'`                                            |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_3.png) | `R U2 R2 U' R2 U' R2 U2 R`<br>`(R' U) (L U') (R U') (L' U' L U' L')`                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_4.png) | `r' U' R U L U' R' U`<br>`F R F' r U R' U' r'`                                                                                                                     |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_5.png) | `R U R' U R U2 R'`<br>`y L' U2 L U L' U L`                                                                                                                         |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_6.png) | `L' U' L U' L' U2 L`<br>`(y') R U2 R' U' R U' R'`                                                                                                                  |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_7.png) | `(x') D (R U R' D') (R U' R')`<br>`(y2) x U R' U' L U R U' r'`<br>`(y') F' r U R' U' r' F R`<br>`R' F' L' F R F' L F`<br>`R' U' (R U R' F') (R U R' U') (R' F R2)` |

## Uproszczony PLL {#2look-pll}

Uproszczenie PLL to nic innego jak po prostu wyłuskanie spośród 21 algorytmów tych, które pozwolą nam wykonać wszystkie przypadki.
Najbardziej skrajne uproszczenie składa się z 2 (+2 lutrzane odbicia) algorytmów. Mamy bardzo dużą stratę czasową ponieważ w niektórych
sytuacjach musimy powtarzać jeden algorytm nawet do trzech razy!

| Ilustracja                                           | Oznaczenie | Algorytm(y)                                                                                                                               |
|------------------------------------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| ![Algorytm U](%site.assets%/images/3x3x3/pll/1.png)  | U          | `(R' U R' U') (R' U' R' U) (R U R2)`<br>`(y2) M' U2 M U' M' U2 M U' M' U2 M`<br>`(y2) L' U L' U' L' U' L' U L U L2`                       |
| ![Algorytm U](%site.assets%/images/3x3x3/pll/2.png)  | U          | `(L U' L U) (L U L U') (L' U' L2)`<br>`(y2) M' U2 M U M' U2 M U M' U2 M`<br>`(y2) R U' R U R U R U' R' U' R2`<br>`(y2) M2 U M U2 M' U M2` |
| ![Algorytm A](%site.assets%/images/3x3x3/pll/5.png)  | A          | `R' F R' B2 R F' R' B2 R2`<br>`(x) R' U R' D2 R U' R' D2 R2`                                                                              |
| ![Algorytm A](%site.assets%/images/3x3x3/pll/6.png)  | A          | `L F' L B2 L' F L B2 L2`<br>`(y x) R2 D2 R U R' D2 R U' R`                                                                                |

## Pełny OLL {#full-oll}
Po tym etapie otrzymamy kolor na górnej ściance kostki. Mamy tutaj 57 algorytmów do nauki. Bez obaw, nie musisz od razu opanowywać wszystkich. Najlepiej zacząć od tych z uproszczenia a następnie na spokojnie dokładać kolejne.

| Ilustracja                                           | Algorytm(y)                                                                                                                                    |
|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_1.png)  | `x' (r R' U') y' (R' U) (R U R U R' d') (r' R)`<br>`M U R U R' U' M2 U R U' r'`<br>`r' (R U) (R U R' U' r2) (R2' U) (R U') r'`                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_2.png)  | `(R U2) (R2 F R F') U2(R' F R F')`<br>`(R U) B' (l U l' R' U') (R' F R F')`<br>`R U2 R2 y' x' (R U R') x y U2 R' y (L' F L')`                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_3.png)  | `x (R' U R U') B2(R' U R U2) y (R2 U)`<br>`(y) F (R U R' U') S (R U R' U') f'`                                                                                         |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_4.png)  | `(R r' U' r U2 r' U') (R U' R2) L`                                                                                                                         |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_5.png)  | `(L' l U l' U2 l U) (L' U L2) R'`                                                                                                                          |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_6.png)  | `(R' F R F') U' (r R') y' (R' U l Us)`<br>`y2 R U R' U R' F R F' U2 R' F R F'`                                                                                           |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_7.png)  | `(R U2) B' (R' U' R U) y (R2 U2 R' F')`                                                                                                                     |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_8.png)  | `F (R U R' U) y' (R' U2) (R' F R F')`                                                                                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_1.png)  | `(R' U2) (R2 U) (R' U R U2) x' (U' R' U)`                                                                                                                   |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_2.png)  | `x (r' R U R' U' r) (R' U R U')`<br>`(R U R' U') (M U R U') r'`<br>`M' U' M U M' U' M U' M' U2 M`                                                                            |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_3.png)  | `F (R U R' U' R) y' (R' F R B' R' F')`                                                                                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_4.png)  | `(R' U' R U' R' d) (R' U l U)`                                                                                                                            |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_5.png)  | `F (U R U' R' U R U' R') F'`<br>`(y2) f (R U R' U') (R U R' U') f'`                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_6.png)  | `x' (R U' R' F' R U R') x y (R' U R)`<br>`y2 F U R U2 R' U' R U R' F'`                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_7.png)  | `x' (L' U L F L' U' L) x y' (L U' L')`<br>`y2 F' U' L' U2 L U L' U' L F`                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_8.png)  | `(r' U' r) (R' U' R U) (r' U r)`                                                                                                                          |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_9.png)  | `(l U l') (L U L' U') (l U l')`                                                                                                                           |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_10.png) | `F (R U R' U') F'`                                                                                                                                    |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_11.png) | `R U R' U' R' F R F'`<br>`R U R' F2 L F L' U' F`                                                                                                                |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_12.png) | `(R' U' R U) x' D (R U' R' Us)`<br>`(y2) R U R2 U' R' F R U R U' F'`                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_13.png) | `(R' F R U R' d') L' d R`<br>`R' F R U R' U' F' U R`                                                                                                             |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_14.png) | `(L F' L' U' L d) R d' L'`<br>`L F' L' U' L U F U' L'`                                                                                                           |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_15.png) | `(R U) x' (R U' R' U) x (U' R')`<br>`R' U' R' F R F' U R`                                                                                                        |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_1.png)  | `R' (L F' L') (R U2 R') (L F' L') R`<br>`(y') M' U M U2 M' U M`<br>`(y) r U R' U' r' R U R U' R'`                                                                           |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_2.png)  | `l U L' U L U' L' U L U2 l'`                                                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_3.png)  | `r' U' R U' R' U R U' R' U2 r`                                                                                                                             |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_4.png)  | `x' (L' U L') (U' L2) b' F' (L' U L U')`                                                                                                                    |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_5.png)  | `x' U' (R U2) (l' U2) (R' U2 l U')`                                                                                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_6.png)  | `F (R U R' U' R U R' U') F'`                                                                                                                              |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_7.png)  | `F' (L' U' L U L' U' L U) F`                                                                                                                              |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_8.png)  | `(r' U') (R U' R' U2 r)`                                                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_9.png)  | `(l U) (L' U L U2 l')`                                                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_10.png) | `F (R U R' U') F' y F (R U R' U') F'`                                                                                                                        |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_11.png) | `F' (L' U' L U) F y' F' (L' U' L U) F`                                                                                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_12.png) | `(R U R') y x (R' U l U' l' U' R)`                                                                                                                          |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_13.png) | `(L' U' L) y' x (L U' r' U r U L')`                                                                                                                         |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_14.png) | `(L' U' L) y' x (L U' r' U r U L')`<br>`U F R' F' R U R U' R'`<br>`y F R U' R' U' R U R' F`<br>`y R' F R F' U' F' U F`                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_15.png) | `(R U2) (R2 F R F' R U2 R')`                                                                                                                             |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_16.png) | `(r' U2) (R U R' U r)`                                                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_17.png) | `(l U2) (L' U' L U' l')`                                                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_18.png) | `(F R') (F R2 U' R' U' R U R' F2)`                                                                                                                         |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_19.png) | `(F' L) (F' L2 U L U L' U' L F2)`                                                                                                                          |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_20.png) | `(R' U) (R U2 R' d') (L' U L d R)`                                                                                                                         |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_21.png) | `(L U') (L' U2 L d) (R U' R' d' L')`                                                                                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_22.png) | `(R d) (L U' r' U')`<br>`(y) F U R U' R' F'`                                                                                                                |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_23.png) | `(L' d') (R' U l U)`<br>`(y') F' U' L' U L F`                                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_24.png) | `(R d) (L' d') (R' U l U l')`                                                                                                                            |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_25.png) | `(L' d') (R d) (L U' r' U' r)`                                                                                                                           |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_26.png) | `(y2) L' U' L U' L' U L U' L F' L' F`<br>`(R' U' R U' R' U R) U x' (R U' R' U)`                                                                                          |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_27.png) | `(y2) R U R' U R U' R' U' R' F R F'`<br>`(L U L' U L U' L') U' x' (L' U L U')`                                                                                           |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_1.png)  | `(y2) z' (U' R U R' U' R U) L' (U' R' U R U' R' U)`<br>`(R2 D') (R U2 R' D) (R U2 R)`<br>`(y2) (R2 D) (R' U2) (R D') (R' U2 R')`                                                  |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_2.png)  | `R' U' R U' R' U R U' R' U2 R`<br>`(y') R U2 R' U' R U R' U' R U' R'`<br>`(y) F (R U R' U') (R U R' U') (R U R' U') F'`                                                             |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_3.png)  | `R U2 R2 U' R2 U' R2 U2 R`<br>`(R' U) (L U') (R U') (L' U' L U' L')`                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_4.png)  | `r' U' R U L U' R' U`<br>`F R F' r U R' U' r'`                                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_5.png)  | `R U R' U R U2 R'`<br>`y L' U2 L U L' U L`                                                                                                                    |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_6.png)  | `L' U' L U' L' U2 L`<br>`(y') R U2 R' U' R U' R'`                                                                                                             |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_7.png)  | `(x') D (R U R' D') (R U' R')`<br>`(y2) x U R' U' L U R U' r'`<br>`(y') F' r U R' U' r' F R`<br>`R' F' L' F R F' L F`<br>`R' U' (R U R' F') (R U R' U') (R' F R2)` |

## Pełny PLL {#full-pll}
Ostatni etap na drodze do ułożonej kostki. Dokonujemy permutacji (przemieszczenia) elementów ostatniej warstwy aby ostateczenie ułożyć kostkę. Mamy 21 algorytmów. Warto zacząć od wersji uproszczonej i tak jak w poprzednim etapie - dokładać kolejne. Warto poznać wszystkie 21 algorytmów PLL zanim zaczniemy naukę wszystkich algorytmów OLL.

| Ilustracja                                           | Oznaczenie | Algorytm(y)                                                                                                                                                                                                                                           |
|------------------------------------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Algorytm U](%site.assets%/images/3x3x3/pll/1.png)  | U          | `(R' U R' U') (R' U' R' U) (R U R2)`<br>`(y2) M' U2 M U' M' U2 M U' M' U2 M`<br>`(y2) L' U L' U' L' U' L' U L U L2`                                                                                                                                   |
| ![Algorytm U](%site.assets%/images/3x3x3/pll/2.png)  | U          | `(L U' L U) (L U L U') (L' U' L2)`<br>`(y2) M' U2 M U M' U2 M U M' U2 M`<br>`(y2) R U' R U R U R U' R' U' R2`<br>`(y2) M2 U M U2 M' U M2`                                                                                                             |
| ![Algorytm H](%site.assets%/images/3x3x3/pll/3.png)  | H          | `M2 U M2 U2 M2 U M2`<br>`R2 U2 R2 U2 R2 U R2 U2 R2 U2 R2 U'`<br>`x2 M2 d M2 d2 M2 d M2`                                                                                                                                                               |
| ![Algorytm Z](%site.assets%/images/3x3x3/pll/4.png)  | Z          | `x' (R U' R' U) (D R' D) U' (R' U R) (D2 F)`<br>`M2 D y M2 D' y' S M2 S'`<br>`U R' (U' R U' R) (U R U' R') (U R U R2) (U' R' U)`<br>`U2 M2 U M2 U M' U2 M2 U2 M'`<br>`R U R' U R' U' R' U R U' R' U' R2 U R U2`                                       |
| ![Algorytm A](%site.assets%/images/3x3x3/pll/5.png)  | A          | `R' F R' B2 R F' R' B2 R2`<br>`x R' U R' D2 R U' R' D2 R2`                                                                                                                                                                                            |
| ![Algorytm A](%site.assets%/images/3x3x3/pll/6.png)  | A          | `L F' L B2 L' F L B2 L2`<br>`y x R2 D2 R U R' D2 R U' R`                                                                                                                                                                                              |
| ![Algorytm E](%site.assets%/images/3x3x3/pll/7.png)  | E          | `x (U R' U' L) (U R U' r2 U' R U) (L U') (R' U)`<br>`(z) U2(R2 F) (R U R' U' R U R' U' R U R' U') F' (R2 U2)`<br>`x U R' U' L U R U' L' U R U' L U R' U' L'`<br>`Fl' U' L U R U' r' F R F' r U R' U' r'`<br>`F R' F' r U R U' r' F R F' r U R' U' r'` |
| ![Algorytm J](%site.assets%/images/3x3x3/pll/8.png)  | J          | `B2 R' U' R B2 L' D L' D' L2`<br>`y2 R' U2 R U R' U2 L U' R U L'`<br>`U R' U L' U2 R U' R' U2 R L`<br>`U R' U L' U2 R U' R' U2 R L U2`                                                                                                                |
| ![Algorytm J](%site.assets%/images/3x3x3/pll/9.png)  | J          | `B2 L U L' B2 R D' R D R2`<br>`U' L U' R U2 L' U L U2 R' L'`                                                                                                                                                                                          |
| ![Algorytm R](%site.assets%/images/3x3x3/pll/10.png) | R          | `(R' U2) (R U2) (R' F R U R' U' R' F' R2)`                                                                                                                                                                                                            |
| ![Algorytm R](%site.assets%/images/3x3x3/pll/11.png) | R          | `(L U2) (L' U2) (L F' L' U' L U L F L2)`                                                                                                                                                                                                              |
| ![Algorytm G](%site.assets%/images/3x3x3/pll/12.png) | G          | `(R U R') y' (R2 u' R U') (R' U R' u R2)`                                                                                                                                                                                                             |
| ![Algorytm G](%site.assets%/images/3x3x3/pll/13.png) | G          | `(L' U' L) y (L2 u L' U) (L U' Lu' L2)`                                                                                                                                                                                                               |
| ![Algorytm G](%site.assets%/images/3x3x3/pll/14.png) | G          | `(R2 u) (R' U R' U' Ru' R2) y (L' U L)`                                                                                                                                                                                                               |
| ![Algorytm G](%site.assets%/images/3x3x3/pll/15.png) | G          | `(L2 u') (L U' L U L' u L2) y' (R U' R')`                                                                                                                                                                                                             |
| ![Algorytm N](%site.assets%/images/3x3x3/pll/16.png) | N          | `(L U') (R U2) (L' U L) (R' U' R) U2 L' U R'`                                                                                                                                                                                                         |
| ![Algorytm N](%site.assets%/images/3x3x3/pll/17.png) | N          | `(R' U) (L' U2) (R U' R') (L U L') U2 R U' L`                                                                                                                                                                                                         |
| ![Algorytm T](%site.assets%/images/3x3x3/pll/18.png) | T          | `(R U R' U' R' F R2 U' R' U') (R U R' F')`                                                                                                                                                                                                            |
| ![Algorytm Y](%site.assets%/images/3x3x3/pll/19.png) | Y          | `(R2 U' R2 U' R2 U) y' (R U R') B2(R U' R')`<br>`F R U' R' U' R U R' F' R U R' U' R' F R F'`                                                                                                                                                          |
| ![Algorytm F](%site.assets%/images/3x3x3/pll/20.png) | F          | `(R' U R U' R2) y' (R' U' R U) y x (R U R' U' Rl)`<br>`R' U R U' R2 F' U' F U R x U R' U' R2`                                                                                                                                                         |
| ![Algorytm V](%site.assets%/images/3x3x3/pll/21.png) | V          | `L' U R U' L U L' U R' U' L U2 R U2 R'`<br>`y' R' U R' U' y R' F' R2 U' R' U R' F R F`                                                                                                                                                                |
