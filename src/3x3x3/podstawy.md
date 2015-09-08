***
{
  "title": "Podstawowe pojęcia i notacja (R, L, U itp.)"
}
***
# Podstawowe pojęcia i notacja (R, L, U itp.)

## Podstawowe pojęcia

Przy przeglądaniu materiałów dostępnych na stronie spotkasz się z wieloma pojęciami, które jeżeli nie miałeś wcześniej styczności z kostką mogą wydać się niezrozumiała. Postaram się rzucić na nie trochę światła.

Dwa najczęściej występujące pojęcia to **narożnik** oraz **krawędź** kostki (czasem nazywane róg i kant). Czym są? Myślę, że obrazek najlepiej to wytłumaczy.

<p markdown="1" class="centered">
![Narożniki](%site.assets%/images/3x3x3/basics/corners.png)
![Krawędzie](%site.assets%/images/3x3x3/basics/edges.png)
</p>

Kolejnym często wykorzystywanym pojęciem są warstwy. Tradycyjną Kostkę Rubika (kostkę 3x3x3) możemy podzielić na trzy warstwy.

<p markdown="1" class="centered">
![Górna warstwa](%site.assets%/images/3x3x3/basics/layer-top.png)
![Środkowa warstwa](%site.assets%/images/3x3x3/basics/layer-middle.png)
![Dolna warstwa](%site.assets%/images/3x3x3/basics/layer-bottom.png)
</p>

Legenda:

 1. Górna warstwa
 2. Środkowa warstwa
 3. Dolna warstwa

Można się spotkać także z pojęciem warstwy pierwszej/drugiej/trzeciej. Oczywiście odnosi się to do kolejności ich układania.

## Notacja (R, L, U, F itp.)

Na początek warto przedstawić podstawowe oznaczenia jakie stosuje się przy notacji.
Są to litery alfabetu: `R`, `L`, `U`, `D`, `F`, `B`, `M`, `E`, `S`, znak `'` (prim) oraz cyfra `2`.

Pierwsze sześć z nich oznacza ruchy zewnętrznymi ściankami kostki:

 - `R` - oznacza ruch prawą ścianką kostki o 90 stopni zgodnie z ruchem wskazówek zegara
 - `L` - oznacza ruch lewą ścianką kostki o 90 stopni zgodnie z ruchem wskazówek zegara
 - `U` - oznacza ruch górną ścianką kostki o 90 stopni zgodnie z ruchem wskazówek zegara
 - `D` - oznacza ruch dolną ścianką kostki o 90 stopni zgodnie z ruchem wskazówek zegara
 - `F` - oznacza ruch przednią ścianką kostki o 90 stopni zgodnie z ruchem wskazówek zegara
 - `B` - oznacza ruch tylną ścianką kostki o 90 stopni zgodnie z ruchem wskazówek zegara

Gdy dołożymy znak `'`, czyli `R'`, `L'`, `U'`, `D'`, `F'`, `B'` oznacza to obrót odpowiednią ścianką o 90 stopni **_przeciwnie do ruchu wskazówek zegara_**.

Dołożenie cyfry `2`, np. `R2`, `B2`, oznacza wykonanie obrotu daną ścianką dwa razy (czyli o 180 stopni).

Nie występują kombinacje posiadające zarówno znak `'` jak i cyfrę `2` np. `R2'`, `U'2` gdyż wykonanie obrotu ścianką o 180 stopni zgodnie czy przeciwnie do ruchu wskazówek zegara da taki sam efekt końcowy.

Przykład wykonania ruchu `R` - obrotu prawej ścianki o 90 stopni zgodnie z ruchem wskazówek zegara:

<p markdown="1" class="centered">
![Przed ruchem R](%site.assets%/images/3x3x3/basics/ok.png) ----> ![Po ruchu R](%site.assets%/images/3x3x3/basics/R.png)
</p>


Kolejnymi oznaczeniami w notacji są ścianki środkowe. Możemy rozróżnić trzy: M, E, S.

Spotyka się także algorytmy wykorzystujące małe litery `l`, `r`, `b`, `u`, `f`, `d`. Oznaczają one ruch daną ścianką oraz przylegającą do niej ścianką środkową w tym samym kierunku.

Przykład wykonania ruchu `r` - obrotu prawej ścianki oraz przylegającej ścianki środkowej o 90 stopni zgodnie z ruchem wskazówek zegara:

<p markdown="1" class="centered">
![Przed ruchem r](%site.assets%/images/3x3x3/basics/ok.png) ----> ![Po ruchu r](%site.assets%/images/3x3x3/basics/r-m.png)
</p>