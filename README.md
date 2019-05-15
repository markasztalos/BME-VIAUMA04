# BME-VIAUMA04
## Multiplatform szoftverfejlesztés

Ebben a repository-ban a BME Multiplatform szoftverfejlesztés c. tárgyának a segédanyagai találhatók. 

Megjegyzések:
 * Figyelem, az alábbi anyagok csak vázlatok, még többszöri átolvasást és átdolgozást igényelnek!
 * A jegyzetek és diák [markdown](https://en.wikipedia.org/wiki/Markdown) formátumban készültek. Ez egy nagyon egyszerű szintaktika, amit könnyen lehet HTML-re fordítani. Ezt automatikusan megteszi a github, amikor egy fájlt (például ezt a `README.md`-t) nézegetünk. 
 * A diákat is markdown formátumban írtam meg, így is lehet ezeket olvasni. Amennyiben az órán használt diavetítés formában szeretnénk nézegeti ezeket, töltsük le a repository tartalmaát és az md fájlok mellett látható `.html` fájlokat futtassuk. 

A web alapú multiplatform fejlesztéshez tartozó előadásanyagok és segdéletek:
1. [Bevezetés a web alapú technológiákba](1/ea1.md). Fontosabb témakörök és fogalmak:
    * HTML, XML
    * CSS
    * JavaScript, JSON, AJAX
    * HTTP
1. [JavaScript alapok](2/ea2.md):
    * JavaScript motorok
    * Modulkezelés
    * Változók
    * Adattípusok
    * Függvények, konstruktorfüggvények
1. [Haladó JavaScript és TypeScript](3/ea3.md)
    * Függvények és a `this` kulcsszó, lamdba kifejezések
    * Prototípus alapú működés, a `class` kulcsszó
    * NodeJS és ExpressJS keretrendszerek.  
        Express JS mintapélda a `3/code/express-js` könytárban található. Futtatásához [`nodejs`-t kell telepíteni](https://nodejs.org/en/), majd:
            
        ```console
        $ npm install
        $ node index.js
        ```
    *  [TypeScript](https://www.typescriptlang.org/):
        * Típusannotációk, 
        * Interfészek, típusok
        * fordítási folyamat
        * generikus típusok
        * típusok kombinálása
        * modulok, névterek, projektkezelés (`tsconfig.json`)
        * TypeScript projekt + Expres JS + web api példa: `3/code/express-ts` könyvtár:
        
            ```console
            $ npm install
            $ tsc
            $ node build/app.js
            ```
    * `libra-server` példa: `3/code/libra-server` könyvtár: 
        * Architektúra: controllerek, rétegek 
        * REST API
        * Routing
1. [Angular bevezető](4/ea4.md)
    * Alapvető angular alkalmazás felépítése 
        * Modulok
        * Komponensek
        * Szolgáltatások
    * `@angular/cli` (`ng`)
    * HTML sablonok
    * Routing
    * Dependency injection
    * `HttpClient`
1. [Dependency injection](5/ea5.md)
1. [Haladó Angular](6/ea6.md):
    * Angular HTML sablonok: 
        * adatkötés (1 és 2 irányú) (`()`, `[]`, `[()]`)
        * eseménykezelés
        * @Input binding
        * @Output binding
        * ngModel
    * Direktívák
1. [Kitekintés](7/ea7.md)
    * Adattárolási lehetőséget böngészőben
    * Desktop környzetek fejlesztése JavaScript nyelvhez (Electron)


Vizsga témakörei: 
 * HTML: 
    * szintaxis, összevetése az XML-lel, minimális HTML fájl felépítése, fontosabb tagek (`html, head, body, div, span, a, img`)
    * űrlapok: `form, input, button` és működésük
    * **HTML elemek megjelenítése a böngészőben: box modell**
    * CSS: 
        * alapvető szintaktika, CSS osztályok, CSS szelektrorok
        * HTML elemek `class` és `style` attribútumai
 * **HTTP: a HTTP kommunikáció működése, feladata**
 * JavaScript:
    * alapvető szintaktika és nyelvi elemek: változók, típusok (`number, string, boolean, object`), tömbök, automatikus konverzió boolean értékre, pl. `if (kifejezés)`
    * **függvények: konstruktor függvények, a `this` speciális kezelése, lambda kifejezések**
    * objektumok, mint kulcs érték párosok
    * **Prototípus alapú öröklés (`__proto__` property, konstruktor függvények `prototype` property-je)**
    * **osztályok: összehasonlítás a konsturktor függvényekkel**
    * JavaScript motorok: böngészők, `NodeJS` (`npm`, üres projekt inicializálása (`npm init`), `package.json` szerepe)
    * **AJAX fogalma, aszinkronitás jelentése**
  * Web API fejlesztése JavaScript nyelven: `Express JS` (mire való ez a keretrendszer, milyen alkalmazást tudunk vele fejleszteni?)
  * TypeScript
    * A nyelv szerepe, programok fordítása, viszonya a JavaScripttel
    * Típusok
        * `number, boolean, string, [], {}`
        * speciális típusok: `any, null, undefined`
        * `interface`, `class`, `type`, union (`|`) és intersect (`&`) típusok, *literal* típus
        * **generikus típusok (osztályok és interfészek), a generikus paraméter fogalma, szerepe**
    * modulkezelés (`export, import`), névterek
    * együttműködés típusannotáció nélkül fejlesztett JavaScript könyvtárakkal: declaration files (`.d.ts`), `@types` `npm` csomagok
    * **dekorátorok fogalma**, megvalósításuk osztályokon, függvényeken, dekorátor factory-k segítségével
    * TypeScript projekt kezelés: `tsconfig.json` szerepe
 * Angular:
    * **SPA (Single Page Application) fogalma. Mire jó az Angular? Hogyan történik egy angular alkalmazás futtatása a böngészőben? **
    * Alapfogalmak: modul, komponens, szolgáltatás (*service*)
    * **Szogáltatások: Hogyan férünk hozzájuk? Ki példányosítja ezeket? Miért jó, hogy az angular keretrendszer kezeli az életciklusukat? Hogyan történik egy szolgáltatás regisztrálása?**(`@Injectable` dekorátor és regisztrálás a modulban)?
    * Komponensek:
        * Alapvető felépítés: osztály `@Component` dekorátorral és HTML sablon
        * `@Component()` alapvető paramétereinek a jelentése: `selector, templateUrl`
        * **HTML sablonok működése: `{{}}, <selector></selector>, *ngIf, *ngFor`, egyirányú adatkötés (`[]`), felhasználói események kezelése (`()`)**
        * **`@Input()` és `@Output()` dekorátorok, események publikálása (`EventEmitter` típus), kétirányú adatkötés (`[()]`)**
        * **Komponens életciklusa: mikor és miért generáljuk újra a HTML tartalmat? **
    * Direktíva fogalma
    * **Routing fogalma Angularban: böngészőben megadott *path* alapján eldöntjük, hogy melyik **komponenst töltsük be. 
 * **Függőséginjektálás fogalma **(*Depedency Injection - DI*)
 * **Adattárolási lehetőséget böngészőben** (sütik, `localStorage`, `sessionStorage`)
 * Desktop környzetek fejlesztése JavaScript nyelvhez (**`Electron`**)
    
    
        