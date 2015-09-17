<!---
title: "Square-1 - kurs układania"    
-->
# Kurs układania kostki Square-1

Square-1 jest dość interesującym rodzajem kostki. Wielu niedoświadczonym osobom już samo pomieszanie sprawia problemy. Aby tego uniknąć musimy zrozumieć jak przemieszczają się poszczególne klocki oraz kiedy i jakie ruchy możemy wykonać.

## Wprowadzenie i notacja

Przed rozpoczęciem układania ważne jest również zrozumienie zapisu notacji jaki będziemy stosować.

W Square-1 operujemy dwoma warstwami. Górną i dolną, a więc zapis (x,y) oznacza pewien ruch warstwą górną (x) oraz dolną (y). Po każdym z takich nawiasów następuje obrót prawą ścianką o 180 stopni (ruch ten zapisany jest w postaci /). Teraz wystarczy zapamiętać pewien schemat postępowania. Mianowicie, pod x kryje nam się obrót górną warstwą o x\*30 stopni (30 stopni - mały klocek - krawędź, 60 stopni - duży klocek - narożnik), a pod y kryje nam się obrót dolną ścianką o y\*30 stopni. Jeżeli miara kąta jest dodatnia obracamy zgodnie z ruchem wskazówek zegara, natomiast jeżeli miara ta jest ujemna obracamy w przeciwnym ruchu do wskazówek zegara.

Układanie Square-1 można podzielić na 2 głowne etapy:

 - [Przywrócenie kształtu sześcianu](#przywrocenie-ksztaltu) - nazwa mówi za siebie, musimy przywrócić początkowy kształt(sześcian)
 - Permutacja i orientacja, która z kolei dzieli się na:
  * [Wstawianie narożników](#wstawianie-naroznikow) - wstawiamy narożniki do odpowiednich warstw
  * [Wstawianie krawędzi](#wstawianie-krawedzi) - j/w ale krawędzie
  * [Permutacja narożników](#permutacja-naroznikow) - zamieniamy narożniki miejscami
  * [Permutacja krawędzi](#permutacja-krawedzi) - j/w ale krawędzie
  * [Poprawa środkowej warstwy](#poprawa-srodkowej-warstwy) - ustawiamy odpowiednio środkową warstwę (jeżeli konieczne)

## Przywrócenie kształtu {#przywrocenie-ksztaltu}

Pierwszym etapem podczas układania square-1 jest przywrócenie go pierwotnego kształtu - sześcianu. Poniżej zaprezentowana jest uproszczona wersja tego etapu.

Najprościej będzie zrobić to dwu-etapowo:

 1. Sprowadzenie sześciu narozników do jednej warstwy (powstanie wtedy coś na kształt gwiazdki)
 2. Przywrócenie kształtu sześcianu.

Gdy już mamy "gwiazdkę" odszukujemy kształt drugiej warstwy na rysunkach poniżej, ustawiamy go na górnej warstwie i wykonujemy algorytm.

| Ilustracja                                          | Algorytm                                         |
|-----------------------------------------------------|--------------------------------------------------|
| ![Przypadek 1](%site.assets%/images/square/1_1.png) | / (-2,-4) / (-1,-2) / (-3,-3) /                  |
| ![Przypadek 2](%site.assets%/images/square/1_2.png) | / (2,-2) / (-3,-4) / (4,-3) / (-5,-4) / (6,-3) / |
| ![Przypadek 3](%site.assets%/images/square/1_3.png) | / (-4,-2) / (-1,4) / (-3,0) /                    |
| ![Przypadek 4](%site.assets%/images/square/1_4.png) | / (-4,0) / (5,4) / (2,-3) / (-5,-4) / (6,-3) /   |
| ![Przypadek 5](%site.assets%/images/square/1_5.png) | / (2,2) / (0,-1) / (3,3) /                       |

## Wstawianie narożników (orientacja) {#wstawianie-naroznikow}

Po przywróceniu square'a do porządanego kształtu czas na wstawienie narożników w odpowiednie miejsca.

Poniżej znajdują się możliwe sytuacje i algorytmy do nich. Po lewej to górna ścianka a po prawej dolna.

| Ilustracja (góra/dół)                               | Algorytm                       |
|-----------------------------------------------------|--------------------------------|
| ![Przypadek 1](%site.assets%/images/square/2_1.png) | (1,0) / (-1,0)                 |
| ![Przypadek 2](%site.assets%/images/square/2_2.png) | (1,0) / (3,3) / (-1,0)         |
| ![Przypadek 3](%site.assets%/images/square/2_3.png) | (1,0) / (0,3) / (0,3) / (-1,0) |
| ![Przypadek 4](%site.assets%/images/square/2_4.png) | (1,0) / (3,0) / (-1,0)         |

## Wstawianie krawędzi (orientacja) {#wstawianie-krawedzi}

Celem tego etapu jest zakończenie układania koloru zarówno na dolnej jak i na górnej ściance.
Poniżej znajdują się sytuacje i algorytmy, za pomocą których osiągniemy nasz cel (po lewej to górna a po prawej dolna ścianka).

| Ilustracja (góra/dół)                               | Algorytm                                           |
|-----------------------------------------------------|----------------------------------------------------|
| ![Przypadek 1](%site.assets%/images/square/3_1.png) | (0,-1) / (-3,0) / (4,1) / (-4,-1) / (3,0) / (0,-1) |
| ![Przypadek 2](%site.assets%/images/square/3_2.png) | (1,0) / (-3,0) / (-1,-1) / (4,1) / (-1,0)          |
| ![Przypadek 3](%site.assets%/images/square/3_3.png) | (0,-1) / (3,0) / (-3,0) / (1,-2) / (0,3) / (-1,0)  |
| ![Przypadek 4](%site.assets%/images/square/3_4.png) | (0,-1) / (1,1) / (-1,0)                            |
| ![Przypadek 4](%site.assets%/images/square/3_5.png) | (0,-1) / (1,4) / (-1,-4) / (-3,0) / (4,1) / (-1,0) |
| ![Przypadek 4](%site.assets%/images/square/3_6.png) | (0,-1) / (1,1) / (3,3) / (-1,-1) / (0,1)           |

## Permutacja narożników {#permutacja-naroznikow}

Po uzyskaniu koloru na górnej i dolnej ściance musimy pozamieniać miejscami narożniki.

Poniżej znajdują się sytuacje i algorytmy do nich. 

| Ilustracja (góra/dół)                               | Algorytm                                     |
|-----------------------------------------------------|----------------------------------------------|
| ![Przypadek 1](%site.assets%/images/square/4_1.png) | / (3,-3) / (3,0) / (-3,0) / (0,3) / (-3,0) / |
| ![Przypadek 2](%site.assets%/images/square/4_2.png) | / (3,3) / (3,0) / (3,3) / (3,0) / (3,3) /    |
| ![Przypadek 3](%site.assets%/images/square/4_3.png) | / (-3,0) / (3,3) / (0,-3) /                  |
| ![Przypadek 4](%site.assets%/images/square/4_4.png) | / (3,-3) / (3,-3) /                          |
| ![Przypadek 4](%site.assets%/images/square/4_5.png) | / (3,0) / (-3,0) / (3,0) / (-3,0) /          |


## Permutacja krawędzi {#permutacja-krawedzi}

Powoli zbliżamy się do końca. Przedostatnim krokiem będzie spermutowanie krawędzi.

Poniżej znajdują się sytuacje i algorytmy do nich.

| Ilustracja (góra/dół)                                | Algorytm                                                                                                      |
|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| ![Przypadek 1](%site.assets%/images/square/5_1.png)  | / (-3,0) / (0,3) / (0,-3) / (0,3) / (2,0) / (0,2) / (-2,0) / (4,0) / (0,-2) / (0,2) / (-1,4) / (0,-3) / (0,3) |
| ![Przypadek 2](%site.assets%/images/square/5_2.png)  | / (3,3) / (-1,0) / (2,-4) / (4,-2) / (0,-2) / (-4,2) / (1,-5) / (3,0) / (3,3) / (3,0)                         |
| ![Przypadek 3](%site.assets%/images/square/5_3.png)  | / (3,0) / (1,0) / (0,-3) / (-1,0) / (-3,0) / (1,0) / (0,3) / (-1,0)                                           |
| ![Przypadek 4](%site.assets%/images/square/5_4.png)  | (1,0) / (0,-3) / (-1,0) / (3,0) / (1,0) / (0,3) / (-1,0) / (-3,0) /                                           |
| ![Przypadek 4](%site.assets%/images/square/5_5.png)  | / (3,3) / (0,3) / (1,1) / (-1,4) / (-3,3) /                                                                   |
| ![Przypadek 4](%site.assets%/images/square/5_6.png)  | / (3,-3) / (3,-3) / (0,1) / (-3,3) / (-3,3) / (-1,0)                                                          |
| ![Przypadek 4](%site.assets%/images/square/5_7.png)  | / (-3,-3) / (0,1) / (-2,2) / (0,2) / (-4,-4) / (-1,0) / (-3,-3) / (0,2) / (-2,-2) / (-1,0)                    |
| ![Przypadek 4](%site.assets%/images/square/5_8.png)  | (1,0) / (2,2) / (0,-2) / (3,3) / (1,0) / (4,4) / (0,-2) / (2,2) / (0,-1) / (3,3) /                            |
| ![Przypadek 4](%site.assets%/images/square/5_9.png)  | (0,-1) / (1,-2) / (-4,0) / (0,3) / (1,0) / (3,-2) / (-4,0) / (-4,0) / (-2,2) / (-1,0) / (0,3) / (-3,0)        |
| ![Przypadek 4](%site.assets%/images/square/5_10.png) | (1,0) / (0,3) / (-1,-1) / (1,-2) / (-1,0)                                                                     |
| ![Przypadek 4](%site.assets%/images/square/5_11.png) | (1,0) / (0,-1) / (0,-3) / (5,0) / (-5,0) / (0,3) / (0,1) / (5,0)                                              |
| ![Przypadek 4](%site.assets%/images/square/5_12.png) | (1,0) / (5,-1) / (-5,1) / (5,0)                                                                               |

## Poprawienie środkowej warstwy {#poprawa-srodkowej-warstwy}

Może się zdarzyć tak, że trzeba będzie poprawić środkową warstę po zakończonym układaniu.

Poniżej znajdują się przypadki i algorytmy.

| Ilustracja                                          | Algorytm                 |
|-----------------------------------------------------|--------------------------|
| ![Przypadek 1](%site.assets%/images/square/6_1.png) | (1,0) / (6,6) / (-1,0)   |
| ![Przypadek 2](%site.assets%/images/square/6_2.png) | / (6,0) / (6,0) / (6,0)  |
| ![Przypadek 3](%site.assets%/images/square/6_3.png) | / (6,0) / (0,6) / (-1,5) |
