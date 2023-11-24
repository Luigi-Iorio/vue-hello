# Hello Vue

L'obbiettivo di questo esercizio è quello di iniziare a utilizzare ed imparare il framework Vue.js.

In questo esercizio utilizzando i data verrà stampato a schermo un messaggio all'interno di un h1 e un'immagine.

## Risoluzione in linguaggio naturale

1. Definire gli html dove verrà utilizzato Vue:

```html
<div id="app">
  <h1>{{ messaggio }}</h1>
  <img :src="immagine" :alt="testoAlt" />
</div>
```

2. Salvare in una variabile la funzione createApp

```js
const { createApp } = Vue;
```

3. Inizializzare un'istanza invocando la funzione createApp con all'interno i dati: messaggio, immagine e testo alternativo

```js
createApp({
  data() {
    return {
      messaggio: "",
      immagine: "",
      testoAlt: "",
    };
  },
});
```

4. Connettere l'istanza al tag html con il metodo .mount()

```js
createApp({
  data() {
    return {
      messaggio: "",
      immagine: "",
    };
  },
}).mount("#app");
```
