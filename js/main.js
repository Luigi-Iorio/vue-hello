// Salvare in una variabile createApp
const { createApp } = Vue;

// inizializzazione istanza
createApp({
  // definiamo le variabili all'interno di data
  data() {
    return {
      messaggio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      immagine: "https://picsum.photos/id/237/200/300",
      testoAlt: "Testo alternativo",
    };
  },
}).mount("#app");
