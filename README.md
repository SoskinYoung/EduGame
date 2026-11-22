# EduGame
# PyQuest – Nauč se základy Pythonu hrou

Interaktivní vzdělávací webová hra v čistém **HTML, CSS a JavaScriptu**, která pomáhá začátečníkům pochopit základy programování v jazyce Python a propojuje rychlé procvičování s výukovými materiály na **W3Schools**.

## Odkazy na odevzdání
* **Repozitář na GitHubu:** 
* **Live hra (GitHub Pages):** 

---

## Vzdělávací záměr
Mnoho začátečníků při čtení tutoriálů (např. na W3Schools) látku rychle „odkliká“ nebo přečte pasivně, ale při čtení reálného kódu pak snadno přehlédnou detaily – například přetypování datových typů, pořadí vyhodnocování podmínek (`if / elif / else`), horní mez ve funkci `range()`, rozdíl mezi `=` a `==` nebo chybějící dvojtečku.

Cílem hry **PyQuest** je učit aktivním rozhodováním a okamžitým vysvětlením každé chyby. Hráč nejen vidí, zda odpověděl správně, ale u každého úkolu dostane krátké zdůvodnění proč výsledek vypadá právě takto.

---

## Zábavnost a herní mechaniky
* **Herní smyčka a napětí:** Hráč má k dispozici **3 životy** a sbírá body (+100 bodů za každou správnou odpověď). Chyba znamená ztrátu života, takže každé rozhodnutí má váhu.
* **Rozmanité typy úkolů:** Střídají se úlohy na předpověď výstupu programu, práci se seznamy, logické operátory i hledání syntaktických chyb.
* **Okamžitá zpětná vazba:** Po zvolení odpovědi se zobrazí vysvětlení daného principu a zvýrazní se správná volba.
* **Motivace postupem (Ranky):** Podle dosaženého skóre získá hráč hodnocení (*Python Nováček*, *Junior Coder*, *Python Master*) a může hru kdykoliv rozehrát znovu a zlepšit svůj výsledek.

---

## Měřitelnost dosaženého pokroku poznání
Pokrok hráče se neměří pouze celkovým skóre, ale i po jednotlivých tematických okruzích:
1. **Sledování úspěšnosti podle témat:** Hra průběžně zaznamenává počet správných odpovědí a celkový počet úkolů v každém tématu (např. *Proměnné a datové typy*, *Podmínky*, *Cykly*, *Hledání chyb*, *Seznamy*, *Operátory*).
2. **Procentuální přehled a ukazatel pokroku:** Na závěrečné obrazovce se u každého tématu zobrazí poměr správných odpovědí, procentuální úspěšnost a grafický ukazatel (`progress bar`).
3. **Cílené doučení na W3Schools:** Ke každému tématu je připojen přímý odkaz na příslušnou kapitolu na W3Schools, aby si hráč mohl okamžitě procvičit oblasti, kde měl nižší úspěšnost.
4. **Opakovatelné ověření znalostí:** Při nové hře se statistiky vynulují, takže si hráč může ověřit, zda se mu po doučení zlepšila úspěšnost u dříve problematických témat.

---

## Použité technologie
* **HTML5** – struktura obrazovek (úvod, hra, výsledky) a zobrazení bloků kódu (`<pre><code>`)
* **CSS3** – responzivní rozvržení, tmavý motiv editoru, stavy odpovědí a ukazatele průběhu
* **JavaScript (Vanilla JS)** – herní logika, správa životů a skóre, vyhodnocování témat a generování výsledků

---

## Jak hru spustit lokálně
1. Stáhni nebo naklonuj repozitář do složky v počítači.
2. Otevři soubor `index.html` v libovolném moderním webovém prohlížeči (není potřeba žádný server ani instalace balíčků).
