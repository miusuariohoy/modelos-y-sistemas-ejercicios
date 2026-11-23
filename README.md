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

- No hay pistas ni soluciones desplegables en ninguna actividad.
- La portada (`index.html`) tiene **ejercitación autocorregible** con
  **4 ejercicios de DER, 4 de MER, 4 de BD y 8 de consultas** (`WHERE`,
  `ORDER BY`, `>`, `<`, `LIMIT`, `LIKE`, `COUNT` y `DISTINCT`), más un
  cuestionario de opción múltiple. Las consultas 3 a 5 también piden crear antes
  la tabla `productos` con `CREATE TABLE`. Cada enunciado explica qué se pide y
  por qué.
- En DER, la paleta inserta los **símbolos** en el cursor (rectángulo, rombo,
  óvalos, cardinalidades). En MER, el menú inserta entidades, atributos, PK, FK
  y líneas con cardinalidad `1 a N` / `N a 1` entre las entidades. La
  convención es **DER = símbolos; MER = tipos de atributo y FK**.
- Después de la ejercitación hay dos **evaluaciones sin corrección visible**:
  `modelos-sistemas-general` (2 DER + 2 MER + 2 BD + 6 opción múltiple) y
  `modelos-sistemas-bd` (4 actividades: crear una tabla, crear dos tablas
  relacionadas, insertar en una tabla y consultas + 6 opción múltiple). Piden
  nombre, apellido y curso, calculan la nota
  internamente y la envían cifrada al repo `inform` mediante `scripts/entrega.js`.
- La guía de Teoría amplía el MER con tablas de tipos de atributo, la
  conversión DER → MER y la dirección de las relaciones (`1:N`, `1:1`, `N:M`).
- El corrector revisa la **estructura** de la respuesta (palabras clave,
  tablas, columnas, cláusulas). **No ejecuta SQL** ni se conecta a una base.
- Cada envío queda bloqueado en el navegador con una clave `localStorage`
  propia (`<id>-enviada-v1`). Para volver a enviar, hay que limpiar esa clave.

## Uso

No requiere servidor: abrir `index.html` en cualquier navegador.

Para publicarlo con GitHub Pages: *Settings → Pages → branch `main`,
carpeta raíz*.

Sitio publicado (portada principal):
<https://miusuariohoy.github.io/modelos-y-sistemas-ejercicios/>

La guía de Teoría quedó integrada en este repo y se abre en
<https://miusuariohoy.github.io/modelos-y-sistemas-ejercicios/unamasdesistemas/>.
