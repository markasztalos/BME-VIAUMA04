class: center, middle

# Haladó Angular

---

# Komponensek

Komponens osztályok:
 * tagváltozók
 * metódusok

HTML sablon (*template*):
 * *inline* vagy külön *.html* fájlban

---
class: center, middle

# HTML sablonok

---
# Adatmegjelenítés

`{{ kifejezés }}` 

```ts
export class Component {
    title: string;
    value: number;
    complex: {
        value: number
    };
}
```

```html
<h1>{{title}}<h1>
<span data="{{value + 1}}"></span>
<span>complex?.value</span> <!-- safe navigation operator -->
{{1 + 1 + 2}}
```

---
# `<selector></selector>` 

Hivatkozás más komponensre: 


```html
<libra-book></libra-book>
```


---
# Feltételes megjelenítés

```html
<div *ngIf="value">
    Helló Világ!
</div>
<ng-container *ngIf="value === 5">
    <div>Helló Világ!</div>
</ng-container>
```


---
# Iteráció 

```ts
export class Component {
    items : {name: string, value: number}[];
}
```

```html
<ul *ngFor="let item of items">
    <li>{{item.name}} ({{item.value}})</li>
<ul>
```

---
# Felhasználói események

```ts
class Component {
    counter : number = 0;
    onClickMe() {
        this.counter++;
    }
}
```

```html
<button (click)="onClickMe()">Click me!</button>
{{counter}}
```

---

class: center, middle

**Amikor a komponens állapota (bármely property-je) módosul, a HTML-t újra legeneráljuk.**

---
# Felhasználói események 2

```ts
class Component {
    counter : number = 0;
    onClickMe(ev : MouseEvent) {
        console.log(ev.target);
        this.counter++;
    }
}
```

```html
<button (click)="onClickMe($event)">Click me!</button>
{{counter}}
```

* `$event`: Angular bepített neve az esemény paraméterére (mindig csak 1 van)
* MouseEvent: [https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)


---
# Felhasználói események 3

Okos szűrések: pl. `keyup.enter`

```ts
class Component {
    onEnter(boxValue) {
        this.value = boxValue;
    }
    value: string;
}
```

```html
<input #box (keyup.enter)="onEnter(box.value)">
<p>{{value}}</p>
```

![](keyup3-anim.gif)

---

# Felhasználói események 4

```html
<input #box (keyup.enter)="onEnter(box.value)">
<p>{{value}}</p>
```

* `#box`: egy adott komponens azonosítója (csak a template-en belül)
* A paragrafus tartalma frissül, amikor entert nyomunk a szövegdobozban

---
# Felhasználói események 5

```html
(click)="myFunction()"      
(dblclick)="myFunction()"   
(submit)="myFunction()"
(blur)="myFunction()"  
(focus)="myFunction()" 
(scroll)="myFunction()"
(cut)="myFunction()"
(copy)="myFunction()"
(paste)="myFunction()"
(keyup)="myFunction()"
(keypress)="myFunction()"
(keydown)="myFunction()"
(mouseup)="myFunction()"
(mousedown)="myFunction()"
(mouseenter)="myFunction()"
(drag)="myFunction()"
(drop)="myFunction()"
(dragover)="myFunction()"
```

# Property binding

```ts
class Component {
    isButtonDisabled: boolean = false;
    toggle() {
        this.isButtonDisabled = !this.isButtonDisabled;
    }
}
```

```html
<button (click)="toggle()" [disabled]="isButtonDisabled">Click me</button>
```

* `disabled`: HTML DOM attribútum, amit elrejt a `[disabled]` property
* Értéke az `isButtonDisabled` értéke (`false`, vagy `true`)

---
# Property binding
```ts
@Component({
    selector: 'book',
    //...
})
class BookComponent {
    @Input() title : string;
    @Input() isbn: string;
    @Input() author: {
        firstName: string;
        lastName: string;
    }
}
```

```html
<span style="font-style: italic">{{title}}</span> ({{isbn}})
<span style="font-size: smaller">
    {{author?.firstName}}, {{author?.lastName}}
</span>
```

---
# Property binding 2
```ts
class Component {
    book : {
        title: string;
        isbn: string;
        author: {
            firstName: string;
            lastName: string;
        }
    }
}
```

```html
<book [title]="book.title" isbn="{{book.isbn}}" [author]="book.author"><book>
```
---

# Property binding 3

`[]` (box-binding):
 * Egyirányú adatkötés: az idézőjelben megadott kifejezés kiértékelődik, az eredménye átadódik
 * nem kovertálódik stringgé
 * `title` és `isbn` megadása ekvivalens, mert az érték, amit átadunk string


Nagyon sok beépített adatkötési direktíva van:
* `(esemény)` 
* `[class.valami]="bool kifejezés"`
* `[style]="stílus objektum"`
* `[style.font-weight]="font weight értéke"`
* ...


---
# Output property

```ts
@Component({
    selector: 'counter'
    //...
})
class CounterComponent {
    @Output()
    counterChange: EventEmitter<number> = new EventEmitter();

    counter : number;

    onClicked() {
        this.counter++;
        this.counterChange.emit(this.counter);
    }
}
```

```html
<button (click)="onClicked()"></button
```

---
# Output property 2

```ts
class Component {
    counterValue: number;
    onCounterChanged(newValue) {
        this.counterValue = newValue;
    }
}
```

```html
<counter (counterChange)="onCounterChanged($event)"></counter>
{{counterValue}}
```

vagy: 

```html
<counter (counterChange)="counterValue = $event"></counter>
{{counterValue}}
```



---
# Input és Output


```ts
@Component({
    selector: 'counter'
    //...
})
class CounterComponent {
    @Output()
    counterChange: EventEmitter<number> = new EventEmitter();
    @Input()
    counter : number;

    onClicked() {
        this.counter++;
        this.counterChange.emit(this.counter);
    }
}
```

```html
<button (click)="onClicked()"></button
```

---
# Input és Output 2

```ts
class Component {
    counterValue: number = 5; //kezdő érték
    onCounterChanged(newValue) {
        this.counterValue = newValue;
    }
}
```

```html
<counter [(counter)]="counterValue"></counter>
{{counterValue}}
```

* Elnevezés fontos: `@Output`: `@Input` + **Change** postfix
* `[(counter)]="counterValue"` a változó értéke az emittált érték lesz

Ekvivalens ezzel: 

```html
<counter [counter]="counterValue" (counterChange)="counterValue = $event"></counter>
```

---
# `ngModel`

Adatkötés `<input>` elemhez: 

```ts
class Component {
    userName: string;
}
```

```html
<input [value]="userName"
       (input)="userName=$event.target.value"> 
```

Alternatíva: 
```html
<input [(ngModel)]="userName">
```

* `FormsModule`-t importálni kell hozzá

---
# Direktíva

Háromféle direktíva van angularban: 
* Komponens: `<selector></selector>`
* Struktúrális direktíva: `*ngIf`, `*ngFor`
* Attribútum direktíva: elemekre utólagosan ráaggattott attribútumok
    * Például: tegyük fel, hogy szeretnénk több elemnek is megváltoztatni a hátterét

```html
<p appHighlight>Highlight me!</p>
<button appHighlight>Highlight me!</button>
```

---
# Direktíva 2

```ts
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}
```

* A direktívát ugyanúgy regisztrálni kell egy modulban, mint egy komponenst

---
# Direktíva 3

Ennél többet is tudnak a direktívák: 
* Komponenseket is ki lehet egészíteni velük
* Lehetnek paramétereik, pl:

```ts

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input('appHighlight') color : string;
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = this.color;
    }
}
```

```html
<p [appHighlight]="'yellow'">Highlight me!</p>
<button [appHighlight]="'green'">Highlight me!</button>
```





