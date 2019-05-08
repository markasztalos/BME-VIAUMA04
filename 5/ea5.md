class: center, middle

# Dependency Injection
## Tervezési minta

---

# Függőség fogalma


.left-column[
```ts
class A {
    b : B;
    constructor() {
        this.b = new B();
    }
    x() {
        this.b.y(); 
    }
}
```
]
.right-column[
```ts
class B {
    c: C;
    constructor() {
        this.c = new C();
    }
    y() {
        this.c.z();
    }
}
```

```ts
class C {
    z() { /* */ }
}
```
]

---

# Függőségek


* Mi a abaj a függőségekkel?
    * Karbantarthatóság
    * Modularitás
    * Életciklus menedzsment

* Megoldás:
    1. Absztrakció = függőségek interfész alapú használata
    2. Függőség használat és referenciaszerzés/példányosítás szétválasztása
    3. Példányosítás (életciklus menedzsment) kiszervezése
    4. Referenciaszerzés automatizálása (DI konténer = IoC konténer)

---

# DI 1

```ts
interface IA {
    x() : void;
}
class A implements IA { /*... */ }

interface IB {
    y() : void;
}
class B implements IB { /*... */ }

interface IC {
    z() : void;
}
class C implements IC { /*... */ }
```
---
# DI 2
```ts
class A implements IA {
    constructor(private b : IB) { }
    x() { this.b.y(); }
}
class B implements IB {
    constructor(private c : IC) { }
    y() { this.c.z(); }
}
class C implements IC {
    constructor() { }
    z() { }
}
```

---
# DI 3
```ts
class Container {
    private a : IA;
    private b : IB;
    private c : IC;

    constructor() {
        this.c = new C();
        this.b = new B(this.c);
        this.a = new A(this.a);
    }

    getA() { return this.a; }
    getB() { return this.b; }
    getC() { return this.c; }
}
```

Életciklus menedzsment?

---
# DI 4
```ts
//Bootstrapper
let container = new Container();
```

```ts
// a felhasználása
let a = container.getA();
a.x();
```

---
# Okos DI konkténer

```ts
class Container {
    register(type) { /* */ }
    getInstanceOf(type) { /* return new instance of type */ };
}
// használat
let container = new Container();
container.register(A);
container.register(B);
container.register(C);
let a = container.getInstanceOf(A);
```

* Függőségkezelésben résztvevő típusok beregisztrálása
* Új példányok lekérése
* Automatikus függőségfelismerés (pl. konstuktorban)
* Életciklus menedzsment

&rarr; DI keretrendszerek

---

# [Angular DI](https://angular.io/guide/dependency-injection)

* *service*: függőségkezelésben résztvevő típus  (`@Injectable()`)
* *provider*: szolgáltatásokat nyújtó modulok 
* *injector*: angular saját DI konténere 



