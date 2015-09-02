***
{
    "title": "Kostka 3x3x3 - układanie metodą Fridrich"
}
***
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
 - [PLL](#2look-pll "PLL") - uproszczona wersja pll'a. Do wyboru 2 lub 7 algorytmów.

## Kolejność nauki

Nauka algorytymów w odpowiedniej kolejności pozwoli cieszyć się z układania kostki a zarazem systematycznie osiągać lepsze czasy. Sugerowana przeze mnie kolejność jest następująca:

 - Krzyż
 - F2L (intuicyjnie)
 - Uproszczony OLL (EO, CO)
 - Uproszczony PLL
 - Pełny PLL
 - Pełny OLL
 - F2L (algorytmy)

Zalezam naukę pełnego PLL zanim zaczniemy zakuwać cały OLL. Algorytmy do uproszczonego OLLa (EO i CO) są stosunkowo szybkie i

## Krzyż (cross) {#cross}

Może się wydawać, że ułożenie krzyża jest banalnie proste ale nie do końca. Samo fakt ułożenia 4 krawędzi jest trywialny o tyle zaplanowanie a następnie faktyczne ułożenie w jak najmniejszej ilości ruchów i czasie już takie proste nie jest. Jedynym sposobem jest po prostu trening. Warto pamiętać, że większość przypadków można rozwiąząć w około 6 ruchach.

## Dwie pierwsze warstwy (F2L - First Two Layers) {#f2l}

F2L jest to etap polegający na jednoczesnym wstawianiu odpowiedniego narożnika i krawędzi w przeznaczone im miejsce. Dzieki temu otrzymujemy od razu gotowe dwie warstwy.

Mimo dużej ilości przypadków, opanowanie tego etapu w stopniu zadowalającym nie jest trudne. Większość przypadków nie jest trudna w rozwiązaniu i daltego można zastosować dwie metody nauki:

 - wymyślenie własnych algorytmów (intuicyjnie)
 - skorzystanie z gotowych algorytmów

## Uproszczony OLL

### EO {#eo}
Pierwsza cześć z uproszczonego OLLa polega na ułożeniu krawędzi górnej warstwy. Krawędzie utworzą krzyż podobny do tego jak w pierwszym etapie układania na dolnej ściance.

| Ilustracja                                       | Algorytm                |
| -------------------------------------------------|-------------------------|
| ![Algorytm](%site.assets%/images/3x3x3/eo/1.png) | F(RUR'U')F'             |
| ![Algorytm](%site.assets%/images/3x3x3/eo/2.png) | F(URU'R')F'             |
| ![Algorytm](%site.assets%/images/3x3x3/eo/3.png) | (RU2)(R2FRF')U2(R'FRF') |

### CO {#co}
W drugiej część ułożymy narożniki tak aby na górnej ściance otrzymać kolor.

| Ilustracja                                          | Algorytm                                                                                                                                       |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_1.png) | (y2)z'(U'RUR'U'RU)L'(U'R'URU'R'U)<br />(R2D')(RU2R'D)(RU2R)<br />(y2)(R2D)(R'U2)(RD')(R'U2R')                                                  |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_2.png) | R'U'RU'R'URU'R'U2R<br />(y')RU2R'U'RUR'U'RU'R'<br />(y)F(RUR'U')(RUR'U')(RUR'U')F'                                                             |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_3.png) | RU2R2U'R2U'R2U2R<br />(R'U)(LU')(RU')(L'U'LU'L')                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_4.png) | r'U'RULU'R'U<br />FRF'rUR'U'r'                                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_5.png) | RUR'URU2R'<br />yL'U2LUL'UL                                                                                                                    |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_6.png) | L'U'LU'L'U2L<br />(y')RU2R'U'RU'R'                                                                                                             |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_7.png) | x'D(RUR'D')(RU'R')<br />(y2)l'URD'R'U'lB<br />(y2)xUR'U'LURU'r'<br />(y')F'rUR'U'r'FR<br />(y)R'F'L'FRF'LF<br />(y)R'U'(RUR'F')(RUR'U')(R'FR2) |

## Pełny OLL {#full-oll}
Po tym etapie otrzymamy kolor na górnej ściance kostki. Mamy tutaj 57 algorytmów do nauki. Bez obaw, nie musisz od razu opanowywać wszystkich. Najlepiej zacząć od tych z uproszczenia a następnie na spokojnie dokładać kolejne.

| Ilustracja                                           | Algorytm(y)                                                                                                                                    |
|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_1.png)  | x'(rR'U')y'(R'U)(RURUR'd')(r'R)<br />MURUR'U'M2URU'r'<br />r'(RU)(RUR'U'r2)(R2'U)(RU')r'                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_2.png)  | (RU2)(R2FRF')U2(R'FRF')<br />(RU)B'(lUl'R'U')(R'FRF')<br />RU2R2y'x'(RUR')xyU2R'y(L'FL')                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_3.png)  | x(R'URU')B2(R'URU2)y(R2U)<br />(y)F(RUR'U')S(RUR'U')f'                                                                                         |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_4.png)  | (Rr'U'rU2r'U')(RU'R2)L                                                                                                                         |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_5.png)  | (L'lUl'U2lU)(L'UL2)R'                                                                                                                          |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_6.png)  | (R'FRF')U'(rR')y'(R'UlUs)<br />y2RUR'UR'FRF'U2R'FRF'                                                                                           |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_7.png)  | (RU2)B'(R'U'RU)y(R2U2R'F')                                                                                                                     |
| ![Algorytm](%site.assets%/images/3x3x3/oll/1_8.png)  | F(RUR'U)y'(R'U2)(R'FRF')                                                                                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_1.png)  | (R'U2)(R2U)(R'URU2)x'(U'R'U)                                                                                                                   |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_2.png)  | x(r'RUR'U'r)(R'URU')<br />(RUR'U')(MURU')r'<br />M'U'MUM'U'MU'M'U2M                                                                            |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_3.png)  | F(RUR'U'R)y'(R'FRB'R'F')                                                                                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_4.png)  | (R'U'RU'R'd)(R'UlU)                                                                                                                            |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_5.png)  | F(URU'R'URU'R')F'<br />(y2)f(RUR'U')(RUR'U')f'                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_6.png)  | x'(RU'R'F'RUR')xy(R'UR)<br />y2FURU2R'U'RUR'F'                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_7.png)  | x'(L'ULFL'U'L)xy'(LU'L')<br />y2F'U'L'U2LUL'U'LF                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_8.png)  | (r'U'r)(R'U'RU)(r'Ur)                                                                                                                          |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_9.png)  | (lUl')(LUL'U')(lUl')                                                                                                                           |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_10.png) | F(RUR'U')F'                                                                                                                                    |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_11.png) | RUR'U'R'FRF'<br />RUR'F2LFL'U'F                                                                                                                |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_12.png) | (R'U'RU)x'D(RU'R'Us)<br />(y2)RUR2U'R'FRURU'F'                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_13.png) | (R'FRUR'd')L'dR<br />R'FRUR'U'F'UR                                                                                                             |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_14.png) | (LF'L'U'Ld)Rd'L'<br />LF'L'U'LUFU'L'                                                                                                           |
| ![Algorytm](%site.assets%/images/3x3x3/oll/2_15.png) | (RU)x'(RU'R'U)x(U'R')<br />R'U'R'FRF'UR                                                                                                        |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_1.png)  | R'(LF'L')(RU2R')(LF'L')R<br />(y')M'UMU2M'UM<br />(y)rUR'U'r'RURU'R'                                                                           |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_2.png)  | lUL'ULU'L'ULU2l'                                                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_3.png)  | r'U'RU'R'URU'R'U2r                                                                                                                             |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_4.png)  | x'(L'UL')(U'L2)b'F'(L'ULU')                                                                                                                    |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_5.png)  | x'U'(RU2)(l'U2)(R'U2lU')                                                                                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_6.png)  | F(RUR'U'RUR'U')F'                                                                                                                              |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_7.png)  | F'(L'U'LUL'U'LU)F                                                                                                                              |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_8.png)  | (r'U')(RU'R'U2r)                                                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_9.png)  | (lU)(L'ULU2l')                                                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_10.png) | F(RUR'U')F'yF(RUR'U')F'                                                                                                                        |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_11.png) | F'(L'U'LU)Fy'F'(L'U'LU)F                                                                                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_12.png) | (RUR')yx(R'UlU'l'U'R)                                                                                                                          |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_13.png) | (L'U'L)y'x(LU'r'UrUL')                                                                                                                         |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_14.png) | (L'U'L)y'x(LU'r'UrUL')<br />UFR'F'RURU'R'<br />yFRU'R'U'RUR'F<br />yR'FRF'U'F'UF                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_15.png) | (RU2)(R2FRF'RU2R')                                                                                                                             |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_16.png) | (r'U2)(RUR'Ur)                                                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_17.png) | (lU2)(L'U'LU'l')                                                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_18.png) | (FR')(FR2U'R'U'RUR'F2)                                                                                                                         |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_19.png) | (F'L)(F'L2ULUL'U'LF2)                                                                                                                          |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_20.png) | (R'U)(RU2R'd')(L'ULdR)                                                                                                                         |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_21.png) | (LU')(L'U2Ld)(RU'R'd'L')                                                                                                                       |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_22.png) | (Rd)(LU'r'U')<br />(y)FURU'R'F'                                                                                                                |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_23.png) | (L'd')(R'UlU)<br />(y')F'U'L'ULF                                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_24.png) | (Rd)(L'd')(R'UlUl')                                                                                                                            |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_25.png) | (L'd')(Rd)(LU'r'U'r)                                                                                                                           |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_26.png) | (y2)L'U'LU'L'ULU'LF'L'F<br />(R'U'RU'R'UR)Ux'(RU'R'U)                                                                                          |
| ![Algorytm](%site.assets%/images/3x3x3/oll/3_27.png) | (y2)RUR'URU'R'U'R'FRF'<br />(LUL'ULU'L')U'x'(L'ULU')                                                                                           |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_1.png)  | (y2)z'(U'RUR'U'RU)L'(U'R'URU'R'U)<br />(R2D')(RU2R'D)(RU2R)<br />(y2)(R2D)(R'U2)(RD')(R'U2R')                                                  |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_2.png)  | R'U'RU'R'URU'R'U2R<br />(y')RU2R'U'RUR'U'RU'R'<br />(y)F(RUR'U')(RUR'U')(RUR'U')F'                                                             |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_3.png)  | RU2R2U'R2U'R2U2R<br />(R'U)(LU')(RU')(L'U'LU'L')                                                                                               |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_4.png)  | r'U'RULU'R'U<br />FRF'rUR'U'r'                                                                                                                 |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_5.png)  | RUR'URU2R'<br />yL'U2LUL'UL                                                                                                                    |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_6.png)  | L'U'LU'L'U2L<br />(y')RU2R'U'RU'R'                                                                                                             |
| ![Algorytm](%site.assets%/images/3x3x3/oll/4_7.png)  | x'D(RUR'D')(RU'R')<br />(y2)l'URD'R'U'lB<br />(y2)xUR'U'LURU'r'<br />(y')F'rUR'U'r'FR<br />(y)R'F'L'FRF'LF<br />(y)R'U'(RUR'F')(RUR'U')(R'FR2) |

## Pełny PLL {#full-pll}
Ostatni etap na drodze do ułożonej kostki. Dokonujemy permutacji (przemieszczenia) elementów ostatniej warstwy aby ostateczenie ułożyć kostkę. Mamy 21 algorytmów. Warto zacząć od wersji uproszczonej i tak jak w poprzednim etapie - dokładać kolejne. Warto poznać wszystkie 21 algorytmów PLL zanim zaczniemy naukę wszystkich algorytmów OLL.

| Ilustracja                                           | Oznaczenie | Algorytm(y)                                                                                                                                                            |
|------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Algorytm U](%site.assets%/images/3x3x3/pll/1.png)  | U          | (R'UR'U')(R'U'R'U)(RUR2)<br />y2M'U2MU'M'U2MU'M'U2M<br />y2L'UL'U'L'U'L'ULUL2                                                                                          |
| ![Algorytm U](%site.assets%/images/3x3x3/pll/2.png)  | U          | (LU'LU)(LULU')(L'U'L2)<br />y2M'U2MUM'U2MUM'U2M<br />y2RU'RURURU'R'U'R2<br />y2M2UMU2M'UM2                                                                             |
| ![Algorytm H](%site.assets%/images/3x3x3/pll/3.png)  | H          | M2UM2U2M2UM2<br />R2U2R2U2R2UR2U2R2U2R2U'<br />M2UM2UM2UM2UM2UM2U'<br />x2M2dM2d2M2dM2                                                                                 |
| ![Algorytm Z](%site.assets%/images/3x3x3/pll/4.png)  | Z          | x'(RU'R'U)(DR'D)U'(R'UR)(D2F)<br />M2DyM2D'y'SM2S'<br />UR'(U'RU'R)(URU'R')(URUR2)(U'R'U)<br />U2M2UM2UM'U2M2U2M'<br />RUR'UR'U'R'URU'R'U'R2URU2                       |
| ![Algorytm A](%site.assets%/images/3x3x3/pll/5.png)  | A          | R'FR'B2RF'R'B2R2<br />xR'UR'D2RU'R'D2R2                                                                                                                                |
| ![Algorytm A](%site.assets%/images/3x3x3/pll/6.png)  | A          | LF'LB2L'FLB2L2<br />yxR2D2RUR'D2RU'R                                                                                                                                   |
| ![Algorytm E](%site.assets%/images/3x3x3/pll/7.png)  | E          | x(UR'U'L)(URU'r2U'RU)(LU')(R'U)<br />(z)U2(R2F)(RUR'U'RUR'U'RUR'U')F'(R2U2)<br />xUR'U'LURU'L'URU'LUR'U'L'<br />Fl'U'LURU'r'FRF'rUR'U'r'<br />FR'F'rURU'r'FRF'rUR'U'r' |
| ![Algorytm J](%site.assets%/images/3x3x3/pll/8.png)  | J          | B2R'U'RB2L'DL'D'L2<br />y2R'U2RUR'U2LU'RUL'<br />UR'UL'U2RU'R'U2RL<br />UR'UL'U2RU'R'U2RLU2                                                                            |
| ![Algorytm J](%site.assets%/images/3x3x3/pll/9.png)  | J          | B2LUL'B2RD'RDR2<br />U'LU'RU2L'ULU2R'L'                                                                                                                                |
| ![Algorytm R](%site.assets%/images/3x3x3/pll/10.png) | R          | (R'U2)(RU2)(R'FRUR'U'R'F'R2)                                                                                                                                           |
| ![Algorytm R](%site.assets%/images/3x3x3/pll/11.png) | R          | (LU2)(L'U2)(LF'L'U'LULFL2)                                                                                                                                             |
| ![Algorytm G](%site.assets%/images/3x3x3/pll/12.png) | G          | (RUR')y'(R2u'RU')(R'UR'uR2)                                                                                                                                            |
| ![Algorytm G](%site.assets%/images/3x3x3/pll/13.png) | G          | (L'U'L)y(L2uL'U)(LU'Lu'L2)                                                                                                                                             |
| ![Algorytm G](%site.assets%/images/3x3x3/pll/14.png) | G          | (R2u)(R'UR'U'Ru'R2)y(L'UL)                                                                                                                                             |
| ![Algorytm G](%site.assets%/images/3x3x3/pll/15.png) | G          | (L2u')(LU'LUL'uL2)y'(RU'R')                                                                                                                                            |
| ![Algorytm N](%site.assets%/images/3x3x3/pll/16.png) | N          | (LU')(RU2)(L'UL)(R'U'R)U2L'UR'                                                                                                                                         |
| ![Algorytm N](%site.assets%/images/3x3x3/pll/17.png) | N          | (R'U)(L'U2)(RU'R')(LUL')U2RU'L                                                                                                                                         |
| ![Algorytm T](%site.assets%/images/3x3x3/pll/18.png) | T          | (RUR'U'R'FR2U'R'U')(RUR'F')                                                                                                                                            |
| ![Algorytm Y](%site.assets%/images/3x3x3/pll/19.png) | Y          | (R2U'R2U'R2U)y'(RUR')B2(RU'R')<br />FRU'R'U'RUR'F'RUR'U'R'FRF'                                                                                                         |
| ![Algorytm F](%site.assets%/images/3x3x3/pll/20.png) | F          | (R'URU'R2)y'(R'U'RU)yx(RUR'U'Rl)<br />R'URU'R2F'U'FURxUR'U'R2                                                                                                          |
| ![Algorytm V](%site.assets%/images/3x3x3/pll/21.png) | V          | L'URU'LUL'UR'U'LU2RU2R'<br />y'R'UR'U'yR'F'R2U'R'UR'FRF                                                                                                                |
