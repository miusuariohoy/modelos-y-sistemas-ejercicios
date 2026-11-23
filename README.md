# MER · DER · Base de Datos — Curso interactivo

Curso en HTML + CSS + JS, sin dependencias ni instalación, para aprender el
camino completo: **Diagrama DER (símbolos) → MER (tablas con tipos de atributo
y FK) → Base de datos MySQL**.

## Estructura

| Página | Contenido |
|--------|-----------|
| `index.html` | Portada principal y accesos a los tres temas y a la guía integrada |
| `der.html` | DER: símbolos, simbología completa, cardinalidades y ejemplos |
| `mer.html` | MER: tablas con tipos de atributo, PK / FK / AUTO_INCREMENT y paso del DER al MER |
| `mysql.html` | Crear la base, insertar datos, consultar, relaciones y consultas de varias tablas |
| `unamasdesistemas/` | Guía de Teoría integrada en este repo: símbolos del DER, cardinalidades y atributos de la relación, ejemplo de la tienda, MER con PK/FK, MySQL, simuladores, actividades, autoevaluación y PDF de intensificación |
| `guia_anterior.html` | Versión anterior de la guía de una sola página (se conserva por historial) |

`estilos.css` y `app.js` son compartidos por las cuatro páginas del curso.

## Ejercicios

- Cada tema trae teoría y ejercitación en pestañas separadas. Las pistas y
  soluciones desplegables fueron eliminadas de todas las actividades.
- MER y DER tienen **tres ejercicios por tema** (fácil, medio y difícil), con
  corrección automática y pistas, sin soluciones desplegables.
- La guía de Teoría incluye **ejemplos de SQL** y dos simuladores:
  cardinalidades/FK y boleta con JOIN. Las actividades no muestran soluciones.
- En DER hay una **paleta de símbolos** sobre cada campo: inserta la figura en
  el cursor. En MER, la paleta inserta **PK, FK y tipos de dato**.
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
