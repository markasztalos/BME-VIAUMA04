# JavaScript

*Vázlat, további átnézést igényel.*

A JavaScript a web programozási nyelve, nevén és szintaktikai hasonlóságán kívül semmi köze a Java programozási nyelvhez. Eredeti funkciójat, hogy egyszerű szkriptekkel minél "élőbbé" tegye a statikus weboldalakat, azonban a folyamatos fejlesztés eredményeképpen ma egy önálló, általános, a böngészőktől független programozási nyelvként tekinthető. 

## Motorok

A JavaScript nyelvű programokat ún. JavaScript motorok (*engine*) futtatják, azaz sorról sorra értelmezik és végrehajtják. A legelterjedtebb motor a V8 motor, amely a Chrome böngészőben és a böngészőtől független NodeJS környezetben is megtalálható. 

A JavaScript funkciói alapvetően függenek a futtatókörnyezttől. Böngészőben például lehetőség van a HTML DOM-hoz való hozzáférésre és annak módosítására. Asztali környezetben ilyen hozzáférés értelmszerűen nincs, hiszen nincs HTML oldal, viszont cserébe hozzáférhetünk a fájlrendszerhez. 

## Hello World!

Amennyiben egyszerű JavaScript programot szeretnénk írni, két lehetőségünk van: 
1. Írunk egy egyszerű HTML oldalt, amiben elhelyezünk egy `script` taget. Amikor megnyitjuk az oldalt egy bögészőben, akkor a script tag tartalma lefut. 
    ```html
    <!DOCTYPE HTML>
    <html>
        <body>
            <p>Before the script...</p>
            <script>
                console.log('Hello World!');
            </script>
            <p>...After the script.</p>
        </body>
    </html>
    ```
    A `console.log` függvényhívás paramétereként átadott szöveg a böngésző JavaScript konzoljára kerül kiírásra. 
2.  Létrehozunk egy .js kiterjesztésű fájlt, amit a NodeJS programmal futtatni tudunk. 
```js
//hello.js
console.log('Hello World!');
```
```cmd
>> node hello.js
```

A JavaScript nyelv utastításait ;-vel zárjuk. 

Hiba esetén a további utasítások végrehajtása nem történik meg. Böngészőben a hibáról üzenet csak a konzolon jelenik meg. 

## Változók
Változó létrehozására a `let` kulcszót használjuk, típust nem kell megadni. Értéket az `=` operátorral adunk, ez történhet egyből a változó létrehozásakor is.
```js
let x;
x = `Hello Világ!`;
let y = 6;
```
Változót definiálhatunk még a `const`, illetve `var` kulcsszavakkal is. `const` konstanst hoz létre, amelynek nem lehet később az értékét megváltoztatani. A `var` szinte gobális változókat hoz létre, míg a `let` és a `const` hagyományos módon, csak az adott blokkon belül lesz értelmezve. Általában kerüljük a `var` használatát. 

A változóknak nincs rögzített típusuk. Egy változó típusa az aktuális értékének a típusa, ezért akár különböző típusú értékeket is beállíthatunk. 
```js
let x;
x = 5;
x = 6;
x = 'alma';
x = 8.5;
```

## Adattípusok

Egyszerű (*primitív*) adattípusok:
 * `number`: minden szám (egész és tört), pl `5`, `6.23`. Vannak speciális értékek is a típuson belül: `infinity` (végtelen), `NaN` (not a number), amely például nem definiált matematika műveletek eredményeképpen állhat elő. 
 * `string`: szimpla, vagy dupla aposztrófok közé, vagy \` jelek írhatók. Az utóbbi esetben a stringen belül `${kifejezés}` kifejezések kiértékelődnek és behelyettesítődnek a stringbe, pl.:
    ```js
    let a = 'alma';
    let k = "körte";
    let x = `${a}, ${k}`; //alma, körte
    ```
* `boolean` típus: két lehetséges értek `true` és `false`.
* `null`: ez valójában nem egy típus, hanem egy speciális érték, aminek nincs típuse. Jelentése: nem létező referencia. 
* `undefined`: hasonlóan a `null`hoz, ez is csak egy érték, jelentése: nincs érték hozzárendelve. Amennyiben egy változót létrehoztunk, de nem rendeltünk hozzá értéket, akkor az kezdetben `undefined` lesz. 

Az objektumok (`object`) több primitív adat összefogását teszik lehetővé, ld. később. 

Egy érték típusúnak lekérdezéséhez használható a `typedef` operátror (vagy`typedef(...)` függvény), amely visszaadja stringként a típus nevét. 

## Szokásos nyelvi elemek
A nyelvben a következő szokásos nyelvi elemek megtalálhatók:
* `if`
* `while`
* `for` (pl. `for (let i = 0; i<10; i++) { ... }`)
* `switch`

## Típuskonverizó és logikai értékek

Az egyes típusok közötti átalakítások (konverzió, "cast"-olás) többnyire automatikusan történik. Amennyiben fontos, hogy mi magunk átalakítsuk a megfelelő típusra az értéket, használjuk a nagybetűs konverziós függvényeket: ``Number(...), Boolean(...)` stb. 

Amennyiben logikai operátorokkal összehasonlítunk két típust, akkor azokat először számmá konvertáljuk. Az üres string például 0-vá lesz alakítva, minden más string 1-é. Hasonlóan a `false` 0-vá, a `true` 1-é. 

Ha valahol logikai értékekre van szükség, ott is automatikus az átalakítás. Egy szám akkor lesz `false`, ha értéke 0. Egy string akkor lesz `false`, ha az az üres string. Egy objektum csak akkor lesz `false`, ha értéke `undefined`, vagy `null˙. 

Fontos különbgség más programozási nyelvekhez képest, hogy a `==`, illetve `!=` operátorok érték szerint hasonlítanak, azaz automatikusan elvégzik a konverziót. Ha valós referencia szerint akarunk összehasonlítani, akkor az `===`, illetve `!==` operátorokat kell használni. 



Példák:
```js
let a = 3;
if (a) { 
    //Ez lesz végrehajtva
}
let b = "alma";
if (b) {
    //Ez lesz végrehajtva
}
let c = "";
let d = 0;
if (c || d) {
     
} else {
    //Ez lesz végrehajtva
}
if ("" == 0) {
    //Ez lesz végrehajtva
}
let e = "";
let f = new Object();
let g = e || f; // f lesz az értéke
let h = e && f; // false lesz az értéke
let i = !!e; //false lesz az értéke
```

## Függvények

Bár a JavaScript nem sziorúan funkcionális nyelv, a függvények mégis különleges fontossággal bírnak. 

```js
function add(a, b) {
    return a+b;
}
```
Függvényeket a `function` kulcsszó vezeti be. Akárhány paraméterük lehet, a paramétereknek nincs típus definíciójuk és nincs is típusellenőrzés. A függvény törzse tetszőleges utasításokból állhat, de figyelni kell a változók láthatóságára. Nem kötelező a `return` utasítás használata. Amennyiben egy függvény nem tér vissza semmivel, akkor `undefined` lesz a visszatérési értéke. Különböző végrehajtási ágakon más-más típusokkal is visszatérhez a függvény. 

A fenti leírást *függvény deklarációnak* nevezzük. 

A függvényt a nevével és a paraméterek átadásával lehet meghívni. JavaScriptben nincsen overloading, azaz nem lehet egy függvényt többféle paraméterezéssel definiálni. Mivel a paraméterek típusát nem ellenőrizzük, ezért a számukat sem, ezért az alábbi függvényhívások mind helyesek:
```js
add(1,2);
add(1,2,3); // a értéke 1, b értéke 2 lesz, a 3-at nem tudjuk mihez kötni
add(1); // a értéke 1, b értéke `undefined` lesz
```

A függvény paramétereinek lehet alapértelmezett értéke (*default value*):
```js
function inc(x = 5) {
    return x+1;
}
inc(6); //--> 7
inc(); //--> 6
```

A függvények valójában olyan objektumok, amelyek meg is tudunk hívni, ha utánuk zárójelet teszünk. Mivel egy függvény tehát valójában egy érték, át tudjuk adni vátozónak, vagy függvény paraméterének. Ez lehetővé teszi a függvények definiálásának egy másik módját is, amikor egy változóként adjuk meg ezeket. Ez utóbbi leírást *függvény kifejezés*nek nevzzük.

```js
function f() {
    //...
}
let g = f;
g();

let h = function() { // függvény kifejezés
    //...
}
h();

let j = function(i) {
    i();
}
j(h);
```



Függvény kifejezések írásának egy rövidebb módja, az ún. lambda kifejezések használata. Ekkor a function kulcszót elhagyjuk, helyette a paraméterek után `=>` jelet írunk:

```js
let add = (a,b) => a+b;
//azonos a következővel:
/*
let add = function(a,b) {
    return a+b;
}
*/
let f = () => "alma";
//azonos a következővel:
/*
let f = function () {
    return "alma";
}
*/
let g = (a,b,c) => {
    // több utasítást tartalmazó függvénytörzs
}
let h = a => a+1; //egyetlen paraméter esetén elhagyható a zárójel
```

## Segédfüggvények 
Néhány hasznos segédfüggvény:
* `console.log(...)`: kiírja a konzolra a paraméterül kapott értéket
* `alert(...)` megjelenít egy üzenetdobozt a paraméterül megkapott stringgel. Csak böngészőben érhető el. 
* `promt(...)`: megjelenít egy szövegbekérő mezőt. Csak böngészőben érhető el.
* `confirm(...)`: megjelenít egy szövegdobozt jóváhagyás gombbal. Csak böngészőben érhető el.

## Objektumok

Egy objektum (`object` típus) kulcs érték párokat tartalmazó adat. A kulcsok lesznek az objektum property-jei. Az érték tetszőleges adattípus, akár más objektum is lehet. 

Új objektumot a `new Object()`, vagy `{}` kifejezésekkel hozhatunk létre. 

Az egyes kulcs érték párokat eléréséhez indexelést használunk, amelynek egy rövidebb és egy hosszabb formája van. 
* Hosszabb forma: `objektum['property neve']` - ekkor valóban tetszőleges kulcsot használhatunk.
* Amennyiben a property neve érvényes változónév, akkor hasznáhatjuk az `objektum.property` elérést is. 

Két érdekes következménye van annak, hogy egy objektum valójában kulcs-érték párok tárolója:
* Ha le akarunk kérni egy property-t, ami még nem létezik, akkor nem kapunk hibát, hanem egyszerűen `undefined` lesz a visszatérési érték. 
* Ha írni szeretnénk egy property-t, ami még nincs benne az objektumba, akkor nem kapunk hibát, hanem az egyszerűen belekerül. 

```js
let a = new Object();
let b = {};

b.alma = "alma";
let c = b.alma; // "alma"
let d = b["alma"]; // "alma"
let e = b["körte"]; //undefined
b.name = "dió";
let f = b.name; //dió
```

Objektumok létrehozásánál is adhatunk kezdőértékeket az egyes property-knek:
```js
let a = {
    name: "alma",
    value: "körte"
    "dió": 5
};
```

Amennyiben szeretnénk tudni, hogy egy objektumnak milyen propertyjei vannak, akkor használjuk az `in` operátort:
* `for` ciklussal végigiterálhatunk az összes property-n: `for (let property in obj) { /* property egy string*/ }`
* `property in obj` kifejezéssel eldönthetjük, hogy az adott property benne van-e az objektumban.

```js
let a = {
    name: "alma",
    value: "körte"
    "dió": 5
};
for (let prop in a) {
    // "name", "value", "dió"
}
if ("name" in a) {
    //igaz
}
```

Egyszerű objektumokra a következő függvényeket is használhatjuk:

* `Object.keys(obj)` – Visszadja a kulcsokat
* `Object.values(obj)` – Visszaadja az érékeket
* `Object.entries(obj)` – Visszaadja a kulcs-érték párokat.

### Metódusok

Természetsen az objektumok rendelkezhetnek metódusokkal:
```js
let a = {
    name: "alma",
    f: function() {
        console.log("hello");
    },
    g() {
        // rövidített metódus leírás function nélkül
    }
};
a.g = function() {
    console.log("hello2");
}
```

A metódusokon belül a `this` kulcsszóval hivatkoazhatunk az aktuális objektumra. 
```js
let user = {
    name: "Mari",
    greet() {
        console.log(this.name);
    }
}
```
Azonban JavaScriptben a `this` nem egy foglalt szó és nem is kötött az értéke. Ezért sajnos a használata nem mindig biztonságos. 
```js
function greet() {
    console.log(this.name);
}
let user1 = {
    name: "Mari", 
};
let user2 = {
    name: "Róza"
}
user1.greet = greet; 
user1.greet(); //this user1-re mutat
user2.greet = greet; 
user2.greet(); //this user2-re mutat
greet(); // a this undefined lesz
```
Nézzünk egy másik problémás esetet:
```js
let user = {
	name: "Mari",
	greet() {
		console.log(this.name);
	}
};

user.greet();
let greet = user.greet;
greet(); // undefined
```
A második `greet` hívás eredménye `undefined` lesz. Ugyanis minden `o.m()` formájú metóduhívásnál a `this` értéke a pont előtti objektum lesz, azonban itt nincs ilyen elérhető információ. 

Lambda kifejezések esetében a `this` értékét nem írjuk felül, azaz azok az aktuális kontextusból szedik az értékét: 
```js
let user = {
  name: "Mari",
  greet() {
    let arrow = () => console.log(this.name);
    arrow(); // "Mari"
	function normal() {
		console.log(this.name);
	}
	normal(); // undefined
  }
};

user.greet();
```

### Konstruktor függvények
A `{}` kfejezés lehetővé tette, hogy egyszerűen létrehozzunk egy-egy konkrét objektumot. Hagyományos objektum-orientált nyelvekhez hasonlóan JavaScriptben is definiálhatók konstruktor függvények:
```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");
```
Amikor a `new` kulcsszóval hívunk meg egy függvényt, akkor:
* Létrehoznk egy új objektumot
* A `this`-t hozzákötjük ehhez az új objektumhoz, majd végrehajtjuk a függvény törzsét
* Végül a `this` értékét visszaadjuk

Vigyázat, ha egy konstruktor függvényen belül visszaadunk egy objektumot, az felülírja a visszatérési értéket. 

## Primitív adattítpusok vs. objektumok
A string típusnak van `length` property-je, illetve `substr` függvénye. Ezek a tulajdonságok lehetővé teszik a hatékony stringkezelést. Ugyanígy vannak más egyszerű típusoknak is tulajdonságai. Azonban azt tanultuk, hogy a primitív típusok nem objektumok. Valójában amikor leírjuk például azt, hogy `"alma".length`, akkor létrejön a primitív érték körül egy ideiglenes csomagoló objektum (*wrapper object*), amely biztosítja a megfelelő metódusokat és property-ket. Azonban ez csak ideiglegenes, így hiába is akarjuk módosítani, az eredménye nem lesz tartós. 
```js
let a = "alma";
a.name = 5; // működik, nem kapunk hibát
console.log(a.name); // undefined
```

## Hibakezelés
JavaScriptben a hibákat az Error objektumok jelzik, ezek felelnek meg a kivételeknek. 

```js
try {
    let x;
    console.log(x.y); //az undefined-nak nem lehet hozzáférni a proeprty-jeihez
} catch (err) {

} 
// hiba dobása
throw new Error();
```
## Tömbök
Az objektumban lehetőség van tetszőleges kulcs-érték párok tárolására. Azonban gyakran fontos a kulcsok sorrendje is. Ekkor használjuk a tömböket, amelyek speciális objektumok. A tömböket egyszerű számokkal is indexelhetjük, nem kötekező azonos típusú adaokat tárolniuk, és `[]` jelekkel röviden leírhatók. 
```js
let a = ['alma', "körte"];
let a2 = new Array();
a.push("dió"); // új elem hozzáadása
let x = a[0]; //alma
let y = a.length; //3
a[2] = "mogyoró"; //a: ["alma", "körte", "mogyoró"]
let z = a.pop(); // "mogyoró", a: ["alma", "körte"]

// végigiterálás az elemeken
for (let item of a) {
    //"alma", "körte"
}
```
Nagyon sok, nagyon hasznos és hatékony [metódusa](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) an az `Array` típusnak, például: `push, pop, shift, unshift, splice, slice, concat, forEach, indexOf, filter, map, sort, reverse`.

## JSON

Megismertük már a `{ ... }` leírást objektumok létrehozására. Amennyiben a property-k neveit mindig idézőjelek közé írjuk, akkor az így kapott formátum egy általános adatleíró formátum, aminek neve JSON (JavaScript Object Notation). A JSON egyre elterjedtebb és egyszerűsége, jó olvashatósága, tömörsége miatt gyakran használjuk XML helyett HTTP kérésések adatainak továbbítására. 

A JavaScript nyelvben két fontos függvénnyel tudjuk a JSON formátumú string-eket feldolgozni: 
* `JSON.stringify(obj)`: tetszőleges objektumot JSON formátumú stringgé sorosít
* `JSON.parse(obj)`: tetszőleges JSON formátumú stringet beolvas és felépíti belőle a megfelelő objektumot

## Még több függvény

### Closure és beágyazott függvény

Régebbi JavaScript könyvtárakban gyakran haszált megoldások a *closure*ök, illetve a beágyazott függvények (*nested functions*), mert az eredeti JavaScriptben nem létezett olyan kódblock, amely önmagában pontosan meghatározta volna a benne lévő változók láthatóságát. 

Láttuk már eddig is, hogy a változók több scope-ból is jöhetnek, tekintsünk a következő példát:

```js
let a = "alma";
function f() {
	console.log(a);
}
a = "körte";
f(); // --> körte

function g() {
	let x = "alma";
	
	return function () {
		console.log(x);
	}
}

let x = "körte";
let h = g();
h(); // --> alma
```

Valójában minden egyes függvényhívásnál egy speciális kontextus (*lexical environment*) jön létre, amely eltárolja a referenciákat az elérhető változókra. 
Gyakran előforul, hogy egy függvényt és a hozzá tartozó változókat összefogjuk, például a következő módon:


```js
function createCounter() {
	let count = 0;
	return function() {
		return count++;
	}
}

let counter = createCounter();
counter();
counter();
console.log(counter()); // 2
```

A fenti példa egy beágyazott függvényt tartalmaz. Azért beágyazott, mert egy másik függvényen belül lesz létrehozva, a hozzá tartozó kontextust meghatározó objektummal együtt. 
A `createCounter` függvény belső változói (`count`) nem lesznek előrhetők kívülről. 
 
Amennyiben a fentire csak azért lenne szükség, hogy tényleges lokális változókat hozzunk létre, akkor használhatjuk a *closure*-t. Ez egy függvénydefiníció, amelyet egyből meg is hívunk (*IIFE (Immediately invoked function expression)*), így a benne lévő utasítások lefutnak egy lokális scope-ban. Megjegyezzük, hogy ilyen jellegű megoldásra ma már nincs szükség, mert a modern JavaScript helyesen kezeli a blokkokat és a lokális változókat. 

```js
(funtion() {
    let message = "Hello";
    alert(message);
})();
```

### Függvények, mint objektumok

Nem meglepő módon a függvények is objektumok. Ezért a függvényeknek is lehetnek további kulcs-érték párja. Sőt vannak beépített property-k is:
* `name`: az aktuális függvény neve
* `length`: a függvény paramétereinek a száma

```js
function f(a,b) {
    return a+b;
}
console.log(f.name);    // "f"
console.log(f.length); //2

f.alma = "alma";
console.log(f.alma); // "alma"
```

## Globális objektumok 

Amennyiben böngészőben futtatunk egy JavaScript kódot, akkor mindig elérhető két globális objektum: 
* [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document): ennek a segítségével hozzáférhetünk a DOMhoz és módosíthatjuk.
* [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window): ennek a segítségével hozzáférhetünk a böngésző ablakhoz. 

Amennyiben `var` kulcsszóval létrehozunk egy változót, az valójában a globális `window`nak lesz egy property-je. (Természetesen csak böngészőben.) Ezért is jobb kerülni ezt a kulcsszót. 

## `this`

Már láttuk, hogy a `this` kulcsszó mindig az aktuális objektumra mutat, de azt is láttuk, hogy könnyen elveszik, vagy rossz érték lesz beállítva. Szerencsére vannak segédfüggvények, amelyekkel egyszerűen kezelhetők ezek a hibák:
* `f.call(thisArg, arg1, arg2, ...)`: ha egy `f` függvényen meghívjuk ezt a metódust, akkor az első paraméterül átadott objektum lesz a `this` és ebben a kontextusban kerül meghívásra az eredeti függvény a további paraméterekkel.
* `f.bind(thisArg)`: ennek a hívásnak a visszatérési értéke egy függvény, amelyben már be van állítva a `this` értéke az átadott paraméterre. 

Fontos annak az átismétlése, hogy a lambda kifejezések öröklik a this contextust, míg a hagyományos függvény kifejezések új kontextust próbálnak létrehozni. 
JavaScriptben a `setTimeout` függvény két paramétert vár: egy függvényt és egy számot. A számban megadott ezredmásodperccel később történik meg a függvény futtatása. A lenti példában a lambda és a hagyományos függvények `this` kontextusa közötti különbség látható. 
```ts
let user = {
	name : "alma",
	greet() {
		setTimeout(function() {
			console.log(this.name); //undefined
		}, 1000);
		setTimeout(() => {
			console.log(this.name); //alma
		}, 2000);
	}
};
user.greet();
```

## Getterek és setterek

A modern JavaScriptben lehetőség van getter és setter függvény definiálására. Ezek a háttérben függvényekként működnek, de úgy érhetők el, mint egyszerű propertyk. A property olvasásakor a getter fut le és adja vissza az értéket, írásakor pedig a setter. 

```js
let user = {
	_name : "",
	get name() { return this._name; },
	set name(value) { 
		this._name = value;
		console.log(value);
	}
};
user.name = "alma"; // console --> "alma"
console.log(user.name); // console --> "alma"
```
## Prototípusok

A JavaScript nyelv objektum-orientált, de gyengén típusos nyelv. Továbbá nincsenek hagyományos értelemben vett osztályok, helyette az ún. prototípus alapú öröklés került megvalsításra. Ez azt jelenti, hogy az egyes objektumoknak lehet prototípusa. A prototípus egy másik `objektum`, vagy null, ha nem létezik. Ha egy objektum egy property-jét olvasni akakrjuk, de az nem létezik, akkor megnézzük, hogy az benne van-e a prototípusban és ha igen, akkor azt adjuk vissza. Írni nem tudjuk a prototípus property-jét. Egy példa erre a `toString` metódus, amellyel minden objektum rendelkezik, még az is, amelyet a `{}` kifejezéssel hoztunk létre. Ugyanis minden objektum alapértelmezett prototípusa egy olyan objektum, amely ezzel és még néhány egyéb metódussal is rendelkezik. 

Hagyományosan a protípust a `__proto__` property-n keresztül tudjuk elérni (lekérdezni és módosítani.) Fontos tudni, hogy ez valójában egy getter/setter property.  A prototípus szintén lekérdezhető és módosítható a következő metódusokkal: `Object.getPropertyOf(obj), Object.setPropertyOf(obj)`. (Valójában a prototípus a `[[Prototype]]` nevű property-n keresztül lenne elérhető, de ehhez nincs közvetlen hozzáférésünk.)

```js
let o = {};
console.log(o.toString()); // --> "[object Object]"
console.log('toString' in o.__proto__); // --> true
o.__proto__ = null;
console.log(o.toString()); // --> TypeError: o.toString is not a function
```

A prototípus tehát egyfajta öröklést tesz lehetővé, de néhány szabályt be kell tartani:
* Nincs körbeverés (nem lehet ciklus a prototípus öröklésben).
* A protoípusok csak objektumok, vagy `null` lehet, primitív típus nem. 

A `this`értékét a prototípus nem befolyásolja, azaz ha egy objektumon keresztül egy prototípus property-jét érjük el, attól még a a `this` az aktuális leszármazott gyerekre mutat. 

```js
let user = {
	greet() {
		console.log(this.name);
	}
};

let admin = {
	name : "admin"
};

admin.__proto__ = user;
admin.greet(); // "admin"
```

Speciálisan működnek a konstruktorfüggvények. Ezeknek ugyanis van egy alapértelmezett `prototype` propertyje. Amikor létrehozunk egy új objektumot, akkor annak a prototípusa ez az objektum lesz. Ez lehetővé teszi, hogy a prototípust akár futási időben újabb property-kkel egészítsük ki, amelyek ezután minden öröklött helyen elérhetővé válnak.

```js
function User(name) {
	this.name = name;
}
let user = new User();
User.prototype.greet = function () { console.log("hello"); }
user.greet();
```
 
Ugyanígy elérhető az `Object.prototype`, illetve az egyes típusok csomagoló objektumaihoz tartozó prototípusok: `Boolean.prototype, Number.prototype, String.prototype`. Ezért lehet metódusokat és más property-ket lekérdezni primitív típusokon is. 

A fentiek alapján természetesen lehetőség van újabb property-kkel kiegészíteni akár az alapértelmezett prototípus objektumokat is. Ez azonban nem jó megközelítés, mert ha több különböző könyvtárat használunk és mindegyik beletesz újabb metódusokat például a `String` prototípusába, akkor a különböző funkciók összeakadhatnak. 

Egy kivétel van, amikor elfogadott a beépített prototípus objektumok kiterjesztése: a *polyfill*. A JavaScript nyelv fejlődésével újabb és újabb funkciók kerültek bele. Azonban a régebbi JavaScript motorok (pl. régebbi böngészők) nem támogatják mindig ezeket az új funkciókat. Ez sok esetben megodlható ún. polyfill könyvtárak segítségével, amelyek egyszerűn a régi környezetben a prototípusokat egészítik ki. Például az egyes JavaScript verziók újabb és újabb metódusokkal egészítették az `Array` objektumot. Ahhoz, hogy a kódunk hordozható legyen és régebbi motorokon is működjön egy megfelelő polyfill könyvtárat kell importálnunk. 

## Osztályok

Már látttuk, hogy konstruktor függvényekkel elérhető a hagyományos osztályokhoz hasonló funkcionalitás. 
```js
function User(name) {
    this.name = name;
    this.greet = function() {
        console.log(this.name);
    }
}
```
Sőt, akár a *factory* mintát is egyszerűen tudjuk alkalmazni: 
```js
function User(name) {
    return {
        name: name,
        greet() {
            console.log(this.name);
        }
    };
}
```
A létrehozott objektumokat mezőkkel és metódusokkal is ki tudjuk egészíteni.

JavaScriptben alapértelmezetten nincsenek osztályok, hiszen a prototípusok segítségével megoldható az öröklés, azonban az egyszerűség kedvéért bevezették ezek használatát, mint szintaktikai édesítőszert. Tudni kell azonbban, hogy az osztály nem csak egy nyelvi konstrukció, a háttérben ugyanolyan függvényekre fordul, mint amiket fent láttunk.

```js
class User {
    name = "";
    greet() { //metódus
        console.log(this.name);
    }
}
```
A fenti kód teljesen ekvivalens az alábbival: 
```js
function User () {
    this.name = "";
}
User.prototype.greet = function() {
    console.log(this.name);
}
```
Az osztályok rendelkezhetnek konstruktorral is: 
```js
class User {
    constructor(name) {
        this.name = name;
    }
}
```
A `private, public, protected` módosítószavakat tudjuk használni az egyes mezők és metódusok láthatóságának befolyásolására. 

Amennyiben a konstruktor paraméterével megegyező property-t akarunk létrehozni és abba bemásolni a paraméter értékét, akkor az egyszerűen így is leírható: 
```js
constuctor(public name ) { }
```

Az osztályok egymásből öröklődhetnek, erre az `extends` kulcsszót használjuk:
```js
class A { }
class B extends A { }
```

További hasznos megoldások:
 * A `class` kulcsszó valójában csak egy szintaktikai édesítőszer, ezért az osztálydefiníciók valójában egyszerű kifejezések. Így osztálykifejezést is lehet írni:
     ```js
    function BFactory() {
        return class {
            //...
        }
    }
    class A extends BFactory() { }
     ```
 * Lehetőség van az ősosztály közvetlen elérésére a `super` property-n keresztül. Ez akkor lehet fontos, ha egy osztályban felüldefininálunk egy szülő osztálybeli metódust, de az eredetit is meg akarjuk hívni. 
 * Lehet statikus függvényeket és property-ket létrehozni a `static` kulcsszóval. 
 * Az `instanceof` operátorral eldönthető, hogy egy objektum egy adott osztály példánya. 

 ## Egyszerű modulkezelés
 Az alábbiakban csak a modulkezelés alapjait mutatjuk be. Amennyiben a kódunk nagy lesz, akkor azt érdemes modulokra, önálló fájlokra bontani. A fájlokban definiált nevek lokálisak, kivéve ha az `export` kulcsszót eléjük tesszük. Egy fájlból be tudjuk importálni egy másik fájl tartalmát az `import` utasítással. Az első importnál lefut a másik fájlban definiált kód és élérhetővé válnak az abban exportált nevek. Az `import` segítéségével lehetséges akár csak néhány speciális nevet importálni. 

 ```js
 //file1.js
 console.log("file1 loaded");
 export f() {

 }

 //file2.js
 import "file2.js"; //lefut a console.log a másik fájlban
 // vagy import {f} from "fajl2.js";
 ```
