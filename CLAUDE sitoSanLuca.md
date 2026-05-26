# CLAUDE.md — Sito Web Campo Sportivo

## Obiettivo

Realizzare un sito web **statico di presentazione** per un campo sportivo.
Il sito è composto da **4 pagine separate**, è **mobile-first**, ha un design curato e moderno.
Nessun backend, nessun database, nessun sistema di autenticazione.

---

## Stack Tecnico

- **Linguaggi:** HTML5, CSS3, JavaScript vanilla
- **CSS Framework:** Tailwind CSS (via CDN)
- **Font:** Google Fonts — `Poppins` per titoli, `Inter` per corpo testo
- **Icone:** Font Awesome 6 (via CDN)
- **Mappe:** Google Maps embed (iframe statico)
- **Nessun framework JS** (no React, Vue, Angular, ecc.)

---

## Design & Palette Colori

### Palette

| Nome        | Hex       | Utilizzo                              |
|-------------|-----------|---------------------------------------|
| Verde campo | `#15803d` | Colore primario, CTA, accenti          |
| Verde scuro | `#14532d` | Hover, footer, header                 |
| Bianco      | `#ffffff` | Sfondi sezioni chiare, testo su scuro |
| Grigio 50   | `#f8fafc` | Sfondi alternati sezioni              |
| Grigio 800  | `#1e293b` | Testo principale                      |
| Giallo lime | `#a3e635` | Badge, highlight, dettagli grafici    |

### Stile Visivo

- **Mobile-first**: layout progettato prima per 375px, poi scalato a tablet (768px) e desktop (1280px)
- **Border radius:** `rounded-2xl` per card, `rounded-full` per badge e bottoni pill
- **Ombre:** `shadow-lg` per card, `shadow-sm` per elementi UI minori
- **Transizioni:** `transition-all duration-300` su hover di link, bottoni e card
- **Immagini:** sempre con `object-cover` e aspect ratio definito
- **Spaziature generose** per respiro visivo, specie su mobile

---

## Struttura delle Pagine

```
/
├── index.html          → Home
├── servizi.html        → Servizi
├── fotogallery.html    → Foto Gallery
├── contatti.html       → Contatti
├── css/
│   └── style.css       → Stili custom aggiuntivi
├── js/
│   └── main.js         → Hamburger menu, scroll behavior, lightbox
├── img/
│   └── ...             → Immagini (placeholder durante sviluppo)
└── CLAUDE.md
```

---

## Componenti Globali (presenti in tutte le pagine)

### Header

- **Sticky** in cima alla pagina (rimane visibile durante lo scroll)
- Logo / nome campo a sinistra (testo o immagine)
- **Menu hamburger** su mobile (icona ☰ che apre un menu a tendina verticale)
- Su desktop: link orizzontali a destra — `Home`, `Servizi`, `Foto Gallery`, `Contatti`
- Link attivo evidenziato con colore primario o sottolineatura
- Sfondo: `verde scuro (#14532d)`, testo: `bianco`
- Il menu mobile si chiude cliccando fuori o su un link

### Footer

- Sfondo `verde scuro (#14532d)`, testo bianco
- Colonna sinistra: logo + breve tagline
- Colonna centro: link rapidi alle 4 pagine
- Colonna destra: icone social (Instagram, Facebook, WhatsApp)
- Riga finale: copyright `© [Anno] Nome Campo. Tutti i diritti riservati.`
- Su mobile: layout a colonna singola, centrato

---

## Pagina 1 — `index.html` (Home)

### Sezione: Hero
- Immagine fullscreen del campo come sfondo (`object-cover`, overlay scuro semitrasparente)
- Titolo grande in bianco (es. "Benvenuti al Campo Sportivo X")
- Sottotitolo breve (es. "Il campo nel cuore della città")
- Pulsante CTA verde → link a `contatti.html`
- Placeholder immagine: `https://placehold.co/1440x800?text=Campo+Sportivo`

### Sezione: Chi Siamo
- Sfondo bianco
- Titolo sezione + testo di presentazione (2-3 paragrafi)
- Immagine affiancata al testo (su desktop: 50/50; su mobile: immagine sopra, testo sotto)

### Sezione: Anteprima Servizi
- Sfondo grigio chiaro (`#f8fafc`)
- Titolo: "I Nostri Servizi"
- Griglia di 3 card (icona + titolo + breve descrizione)
- Bottone "Scopri tutti i servizi" → link a `servizi.html`

### Sezione: Dove Siamo *(riutilizzata anche in contatti.html)*
- Vedi specifiche nel blocco **"Sezione Dove Siamo"** più sotto

---

## Pagina 2 — `servizi.html`

### Sezione: Hero pagina
- Banner con titolo "I Nostri Servizi" su sfondo verde con pattern o immagine
- Sottotitolo descrittivo

### Sezione: Lista Servizi
- Griglia responsive di card dettagliate (2 colonne su tablet, 1 su mobile, 3 su desktop)
- Ogni card contiene: icona Font Awesome, titolo, descrizione estesa, eventuale badge (es. "Disponibile di notte")
- Esempi di servizi da includere:
  - Campo in erba sintetica
  - Spogliatoi con docce
  - Parcheggio gratuito
  - Illuminazione notturna
  - Area spettatori / tribuna
  - Bar / area ristoro
  - Noleggio attrezzatura

### Sezione: Orari e Tariffe
- Sfondo grigio chiaro
- Tabella responsive con orari di apertura per fascia (Lun-Ven mattina, Lun-Ven sera, Weekend)
- Tariffe indicative per ora
- Nota: *"Per prenotazioni chiamare o scrivere ai contatti"*

---

## Pagina 3 — `fotogallery.html`

### Sezione: Hero pagina
- Banner con titolo "Foto Gallery"

### Sezione: Galleria
- Griglia responsive:
  - Mobile: 1 colonna
  - Tablet: 2 colonne
  - Desktop: 3 colonne
- Immagini con `aspect-ratio: 4/3`, `object-cover`, angoli arrotondati
- Al click sull'immagine: **lightbox semplice** (overlay scuro, immagine ingrandita, frecce prev/next, tasto chiudi)
- Placeholder: `https://placehold.co/800x600?text=Foto+Campo` (almeno 9 placeholder)

---

## Pagina 4 — `contatti.html`

### Sezione: Hero pagina
- Banner con titolo "Contatti"

### Sezione: Contatti Diretti
- Layout a 2 colonne su desktop, 1 su mobile
- **Colonna sinistra:** informazioni di contatto
  - 📞 Telefono cliccabile (`tel:+39...`)
  - 📧 Email cliccabile (`mailto:...`)
  - 📱 Link WhatsApp (`https://wa.me/39...`)
  - 🕐 Orari di apertura sintetici
  - Icone social con link

- **Colonna destra:** form di contatto
  - Campi: Nome, Email, Messaggio (textarea)
  - Pulsante "Invia" verde
  - Il form usa `action="mailto:info@campodiesempio.it"` e `method="POST"`
  - Validazione base HTML5 (`required`, `type="email"`)

### Sezione: Dove Siamo *(riutilizzata anche in index.html)*
- Vedi specifiche nel blocco **"Sezione Dove Siamo"** più sotto

---

## Sezione "Dove Siamo" — Specifiche (usata in index.html e contatti.html)

Questa sezione ha lo **stesso identico layout HTML** in entrambe le pagine dove appare.

- **Titolo sezione:** "Dove Siamo"
- **Layout:** 2 colonne su desktop (info sinistra, mappa destra), 1 colonna su mobile (info sopra, mappa sotto)
- **Colonna informazioni:**
  - Indirizzo completo con icona 📍 (via, numero civico, CAP, città)
  - Link "Apri in Google Maps" → `target="_blank"`
  - Brevi indicazioni su come raggiungerci (es. "A 5 minuti dalla stazione", "Parcheggio gratuito sul posto")
- **Colonna mappa:**
  - `<iframe>` embed Google Maps statico
  - `width="100%"`, `height="350"`, bordi arrotondati (`border-radius: 1rem`)
  - Placeholder durante sviluppo: coordinate di Milano (da sostituire con indirizzo reale)
- **Sfondo sezione:** grigio chiaro `#f8fafc`

---

## Requisiti Tecnici

- **Responsive breakpoints:** 375px (mobile), 768px (tablet), 1280px (desktop)
- **Performance:** nessuna dipendenza pesante, immagini con `loading="lazy"`
- **SEO base:** ogni pagina ha `<title>` univoco, `<meta name="description">`, `<meta property="og:*">`
- **Accessibilità:** `alt` su tutte le immagini, contrasto colori adeguato (WCAG AA), navigazione da tastiera
- **Smooth scroll:** `scroll-behavior: smooth` via CSS

---

## Out of Scope ❌

Le seguenti funzionalità **non devono essere implementate** in nessun caso:

- ❌ Sistema di prenotazione online o calendario disponibilità
- ❌ Pagamenti online (Stripe, PayPal o simili)
- ❌ Area riservata, login o registrazione utenti
- ❌ CMS o pannello di amministrazione
- ❌ Blog, news o sezione articoli
- ❌ Librerie JS aggiuntive oltre a vanilla JS (no GSAP, no jQuery, no Three.js)
- ❌ Funzionalità di ricerca nel sito
- ❌ Chat live o chatbot
- ❌ Newsletter o integrazione con MailChimp / simili
- ❌ Multilingua / i18n
- ❌ Dark mode
- ❌ Pagine aggiuntive oltre alle 4 specificate

---

## Note Operative per Claude Code

1. **Inizia da `index.html`**, poi in ordine: `servizi.html`, `fotogallery.html`, `contatti.html`
2. Crea subito `css/style.css` e `js/main.js` e collegali in tutte le pagine dall'inizio
3. **Header e Footer** devono essere identici in tutte e 4 le pagine
4. La sezione **"Dove Siamo"** deve avere lo stesso blocco HTML in `index.html` e `contatti.html`
5. Usa `https://placehold.co/` per tutti i placeholder immagine durante lo sviluppo
6. Il lightbox della gallery deve essere **vanilla JS puro**, senza librerie esterne
7. Verifica ogni pagina su viewport **375px** prima di passare alla successiva
