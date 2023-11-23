function aggiungiOggetto(lista, oggetto) {
  lista.push(oggetto);

  return lista;
}

function riordinaLista(lista) {
  lista.sort();
  return lista;
}

function rimuoviOggetto(lista, oggetto) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] == oggetto) {
      lista.splice(i, 1);
    }
  }

  return lista;
}

function modificaOggetto(lista, oggetto, nuovoOggetto) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] == oggetto) {
      lista[i] = nuovoOggetto;
    }
  }
  return lista
}

function resetLista(lista) {
  lista.length = 0;
  return lista;
}

alert(
  "Benvenuto nella creazione del tuo pc\nPremi ok qui sotto per continuare"
);
let operazioneScelte;
let lista = [];

while (operazioneScelte != 7) {
  operazioneScelte = parseInt(
    prompt(
      "Scegli l'operazione che vuoi effettuare. \n 1. Aggiungi un componente \n 2. Rimuovi un componente \n 3. Cambia un componente con un altro. \n 4. Riordina lista. \n 5. Elimina la lista creata. \n 6. Visualizza i componenti scelti. \n 7. Esci. "
    )
  );
  switch (operazioneScelte) {
    case 1:
      let componenteDaAggiungere = prompt(
        "Inserisci il componente che vuoi aggiungere."
      );
      lista = aggiungiOggetto(lista, componenteDaAggiungere);
      alert("Il componente è stato aggiunto alla lista");
      alert("La tua lista comprende questi componenti: " + lista);
      break;
    case 2:
      let componenteDaRimuovere = prompt(
        "Inserisci il componente che vuoi rimuovere."
      );
      lista = rimuoviOggetto(lista, componenteDaRimuovere);
      alert("Il componenete è stato rimosso dalla lista");
      alert("La tua lista comprende questi componenti: " + lista);
      break;
    case 3:
      let componeneteDacambiare = prompt(
        "Inserisci il componente che vuoi sostituire."
      );
      let componeneteNuovo = prompt("Inserisci il nuovo componente");
      lista = modificaOggetto(lista, componeneteDacambiare, componeneteNuovo);
      alert("Il componente è stato sostituito");
      alert("La tua lista comprende questi componenti: " + lista);
      break;
    case 4:
      lista = riordinaLista(lista);
      alert("La lista è stata riordinata");
      alert("La tua lista comprende questi componenti: " + lista);
      break;
  }
}
