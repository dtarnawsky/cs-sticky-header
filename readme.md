# Sticky header sample
This sample implements a "sticky" header in [sticky.component.ts](src/app/sticky/sticky.component.ts).

https://user-images.githubusercontent.com/84595830/225166544-3b37e7d3-cf82-4ac0-9d2b-efdaef955419.mp4

It is used in [home.page.html](src/app/home/home.page.html):
```html
<ion-content [fullscreen]="true" [scrollEvents]="true" (ionScroll)="handleScroll($any($event))">
  <div class="header">My Header</div>
  <app-sticky [backgroundColor]="'purple'" [scrollTop]="scrollTop" [headerHeight]="100">
...
</app-sticky>
...  
</ion-content>
```

Notice that we enable `scrollEvents` and use the `ionScroll` event to pass the `scrollTop` property to the sticky component whenever the user scrolls.

We also set `backgroundColor` of `app-sticky` to the same background color we are using with the class `header`.
