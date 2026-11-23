# MER · DER · Base de Datos — Curso interactivo

Curso en HTML + CSS + JS, sin dependencias ni instalación, para aprender el
camino completo: **Modelo Entidad-Relación → Diagrama relacional → Base de
datos MySQL**.

## Estructura

| Página | Contenido |
|--------|-----------|
| `index.html` | Portada principal y accesos a los tres temas y a la guía integrada |
| `mer.html` | MER: simbología completa, cardinalidades y ejemplos |
| `der.html` | DER: tablas con PK / FK / AUTO_INCREMENT y paso del MER al DER |
| `mysql.html` | Crear la base, insertar datos, consultar, relaciones y consultas de varias tablas |
| `unamasdesistemas/` | Guía de Teoría integrada en este repo: símbolos del DER, cardinalidades y atributos de la relación, ejemplo de la tienda, MER con PK/FK, MySQL, simuladores, actividades, autoevaluación y PDF de intensificación |
| `guia_anterior.html` | Versión anterior de la guía de una sola página (se conserva por historial) |

`estilos.css` y `app.js` son compartidos por las cuatro páginas del curso.

## Ejercicios

- Cada tema trae teoría y ejercitación en pestañas separadas.
- MER y DER tienen **tres ejercicios por tema** (fácil, medio y difícil), con
  corrección automática y pistas, sin soluciones desplegables.
- La guía de Teoría incluye **ejemplos de SQL** y dos simuladores:
  cardinalidades/FK y boleta con JOIN. Las actividades no muestran soluciones.
- En MER y DER hay una **paleta de símbolos** sobre cada campo: inserta la
  figura o la marca en el cursor, así no hace falta escribirla.
- La corrección es automática y se hace en la misma página: no hay descargas
  ni subidas de archivos.
- El corrector revisa la **estructura** de la respuesta (palabras clave,
  tablas, columnas, cláusulas). **No ejecuta SQL** ni se conecta a una base.
- Cada tema tiene además un cuestionario de opción múltiple.
- El progreso se guarda en el navegador (`localStorage`) y se puede reiniciar
  desde el botón **Reiniciar progreso**.

## Uso

No requiere servidor: abrir `index.html` en cualquier navegador.

Para publicarlo con GitHub Pages: *Settings → Pages → branch `main`,
carpeta raíz*.

Sitio publicado (portada principal):
<https://miusuariohoy.github.io/modelos-y-sistemas-ejercicios/>

La guía de Teoría quedó integrada en este repo y se abre en
<https://miusuariohoy.github.io/modelos-y-sistemas-ejercicios/unamasdesistemas/>.
