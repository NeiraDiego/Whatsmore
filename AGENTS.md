# InCA-WhatIsMore (Psicoinformática Proyecto 1)

Experimento de discriminación de cantidades (qué dado tiene más puntos). SvelteKit + Svelte 5.

## Comandos
- Dev: `npm run dev`
- Build: `npm run build`
- Typecheck: `npm run check` (debe dar 0 errores antes de terminar una tarea)

## Nombre de la aplicación
- Título de pestaña y cabecera (`PlaygroundLayout.svelte`), h1 de home y `About` de info: **"WhatIsMore-Dice+numbers"** (reemplaza el "InCA-WhatIsMore-PICourse-Vx" original).
- `src/routes/+page.svelte` solo monta `<PlaygroundLayout><App /></PlaygroundLayout>` (se eliminó el "Welcome to SvelteKit").

## Estructura relevante
- `src/routes/+page.svelte`: monta `App` dentro de `PlaygroundLayout`.
- `src/lib/playground/App.svelte`: enrutado por `page` (home/game/config/info/experiment); estado compartido `params` y `log` (`$bindable`).
- `src/lib/playground/home.svelte`: dados clicables + ejemplo `Incorrect_Dice` + 3 botones ("Comenzar explicación" / "Comenzar experimento" / "Experimento sin explicación"); pie con `last edited by DiegoNeira` (https://github.com/NeiraDiego/).
- `src/lib/playground/game.svelte`: juego genérico (clic en dados del home), soporta modos `dice` / `Correct_Dice` / `Incorrect_Dice`.
- `src/lib/playground/experiment.svelte`: orquestador del experimento completo (series × variantes × ensayos); fases `identify` (Learner/Instructor) → `idle` (explicación) → `modeSwitch` ("nuevo modo", 2 s) → `trials` → `done`. En modo `"explanation"` (preview) se OMITE `identify`.
- `src/lib/playground/explanation.svelte`: pantallas de explicación (5). El arreglo `screens` tiene entradas con `title` y `body` (párrafos) y, si tienen `left`/`right`, la pantalla es INTERACTIVA (hay que elegir el dado con más puntos por clic o flechas ←/→; el incorrecto muestra "debes seleccionar el que tiene MAS puntos"; el correcto avanza). Las de solo texto usan botones. Pantallas: (1) `dice` 1 y 3; (2) `dice` 3 y 6 (teclado); (3) `Correct_Dice` 2 y 5; (4) `Incorrect_Dice` 3→"6" y 5→"1" (el body dice "Porque otras veces los números no coinciden..." — se eliminó la línea en mayúsculas); (5) texto final con anonimato y resumen DINÁMICO desde `params` (`numberOfSeries` × `repetitionsPerVersion`: "N series de reps×3 dados (reps sin número y reps×2 con números)"). El correcto se calcula con `correctSide` = lado con `max(value)`. Recibe `params` de lectura desde `experiment.svelte`; `summary` es `$derived` (evita warning `state_referenced_locally`).
- `src/lib/playground/dice.svelte`: dado con puntos, sin números (n de 1 a 6 en uso).
- `src/lib/playground/correct_dice.svelte`: cada punto muestra el número real de puntos (prop `n`).
- `src/lib/playground/incorrect_dice.svelte`: cada punto muestra un número engañoso (prop `num`).
- `src/lib/playground/quantity.svelte`: wrapper que elige el componente según `mode`; reenvía `num` sin calcular nada.
- `src/lib/playground/config.svelte`: configuración (sección "Logs" + "Game features" con subsecciones "Juegos individuales" y "Experimentos").
- `src/lib/playground/log.js`: utilidades de fecha/formato. NO duplicar `enterInLocalLog`/`enterInCSVLog`: `game.svelte` y `experiment.svelte` los implementan localmente.
- Defaults de `params` (en `App.svelte`): `learner: "Unnamed"`, `teacher: "Diego Neira"`, `gameLength: 5` (repeticiones de un juego individual).

## Convenciones y reglas del experimento
- Todo el proyecto está en runes mode (forzado en `vite.config.ts`). Usar `$props()`, `$state()`, `$derived()`, `$bindable()` y `onclick` (nunca `export let` ni `on:click`).
- Tipos JSDoc obligatorios: parámetros de funciones (`/** @type {...} */` o `/** @param {...} */`), estados (`$state(/** @type {number[]} */ ([]))`), timeouts (`/** @type {ReturnType<typeof setTimeout>} */`) y arrays literales de variantes (`/** @type {const} */`). Sin esto `svelte-check` da "implicitly has any type" / "not indexable".
- Arrays de objetos HETEROGÉNEOS (como `screens` en `explanation.svelte`): declarar un `/** @typedef {…} */` con props opcionales (`left?`/`right?`) y tipar el arreglo como `/** @type {Screen[]} */`; usar `let screen = $derived(screens[i])` para que el narrowing funcione en el template.
- `state_referenced_locally`: al leer `params`/props dentro de un `const`/`let` de inicialización (p. ej. un arreglo literal) svelte emite warning "only captures the initial value". Mover ese cálculo a un `$derived`.
- `bg_opacity` en `quantity.svelte` está TIPADO como número → pasar `{0.9}`, no `".9"` (un string da "Type 'string' is not assignable to type 'number'").
- Props sin default se tratan como REQUERIDAS: `num` en `quantity.svelte` usa `num = undefined` para ser opcional (el template pasa `<Quantity num={...}>`).
- `onclick` NUNCA entre comillas: `onclick={() => go("home")}`. Evitar `() => page='home'` inline (falla el parser); usar un helper como en `w3menu.svelte`.
- `params`/`log`/`page` son props con `$bindable()` (reciben `bind:` desde `App.svelte`). Tiparlas como `/** @type {any} */ ({})` para acceder a sus propiedades sin errores de `svelte-check`.
- Fases de experimento por `params.experimentMode`:
  - `"explanation"`: solo explicación (preview), al terminar vuelve a home.
  - `"experiment"`: explicación + secuencia.
  - `"direct"`: secuencia sin explicación.
- La fase `identify` (excepto preview) pide "Learner's name" y "Instructor's name" (bind a `params.learner`/`params.teacher`) y al pulsar "Comenzar" sigue a `idle` (si hay explicación) o a `startExperiment()`.
- Secuencia: `params.numberOfSeries` (default 7) × variantes `[dice, Correct_Dice, Incorrect_Dice]` × `params.repetitionsPerVersion` (default 20).
- Al cambiar de variante (`experiment.svelte`, función `next()`): fase `modeSwitch` muestra "nuevo modo" y ESPERA a que el usuario haga clic o presione ←/→ (`continueAfterSwitch()`) para continuar; también ocurre al volver a `dice` entre series.
- Durante los ensayos solo se muestra abajo: `Progreso: {ensayo}/{reps×3} de {serie}/{totalSeries}` (se eliminaron puntajes `(+x,-y)` y el nombre de la variante).
- Regla de acierto: gana el dado con MÁS puntos.
- Etiquetas de `Incorrect_Dice` (rangos inclusivos): el dado MAYOR muestra `randInt(0, menor)`; el dado MENOR muestra `randInt(mayor, 9)`. Quien las calcula es quien genera la pareja, no `quantity.svelte`.
- Colores fijos actuales: cara blanca (`params.bg="white"`), puntos negros (`params.fg="black"`), `params.bg_opacity=".9"`.
- Teclado: flecha izquierda → dado izquierdo; flecha derecha → dado derecho.
- Log: registrar variante, valores reales, etiquetas mostradas, selección, acierto y tiempo de respuesta en `log.text_diary` y `log.csv_diary` (actualizar los Blob `log.text`/`log.csv`).

## Formato CSV (uniforme entre entrada directa y experimento)
- Header compartido (en `App.svelte` y `resetLogs()` de `config.svelte`):
  `Test no, Test Name, Learner, Trainer, C_0, C_1, Value selected, Correction, Date, Answering Time (ms), Series, Variant, Trial, Labels`
- NO hay columnas `C_2..C_4` (solo 2 dados), ni "Other Parameters", ni `shown_numbers` (se eliminó: es igual a Labels).
- Fila del experimento (`experiment.svelte`): `Test no, variante, learner, teacher, value izq, value der, elegido, acierto, fecha, tiempo, serie+1, variante+1, ensayo+1, Labels [numIzq, numDer]`.
- Fila de entrada directa (`game.svelte`): mismo encabezado, pero se registran `mode`, valores C_0/C_1, selección, acierto, fecha, tiempo y Labels (`Labels [labelIzq, labelDer]`); las columnas `Series, Variant, Trial` quedan VACÍAS (`", , "`). No se registran colores/opacidad/Value Set.