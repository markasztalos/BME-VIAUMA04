# BME-VIAUMA04
## Multiplatform szoftverfejlesztés

Ebben a repository-ban a BME Multiplatform szoftverfejlesztés c. tárgyának a segédanyagai találhatók. 

<p style="color:red;font-weight:bold">
Figyelem, az alábbi anyagok csak vázlatok, még többszöri átolvasást és átdolgozást igényelnek!
</p>

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
        
        






