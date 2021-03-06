
# LENGUAJES DE PROGRAMACIÓN PARA LA ADMINISTRACIÓN

## Trabajo práctico Mini Damas

Enlace juego: [Mini Damas](https://jonamartino.github.io/TP1/index.html)                                                                                          
Enlace repositorio: [github/jonamartino](https://github.com/jonamartino/TP1)                                                        
Contacto: [gmail/jonamartino](mailto:jonamartino@gmail.com)

## Detalles
 Para probar la funcionalidad de las consultas PHP, debido a que se utiliza la funcion Fetch, se tuvo que instalar localmente la APP XAMPP
 de otra manera no se logró que la respuesta del servidor sea 200.                                                                     
 Segun [About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
 "GitHub Pages does not support server-side languages such as PHP, Ruby, or Python."
## Consignas

**TP1: Trabajo Práctico 1**

```
Replicar utilizando HTML y CSS la siguiente web https://www.minidamas.com respetando la estructura y estilos correspondientes. 

1.	Crear una cuenta en Github (utilizar su nombre y apellido como username, por ejemplo "esteban.frare"). 
2.	Instalar Visual Code (opcional) y Git en su computadora. 
3.	Crear un repositorio en Github y clonarlo en su computadora. 
4.	Desarrollar con HTML y CSS la página de ejemplo, crear un archivo "index.html" y otro "styles.css". 
5.	Guardar el progreso en commits. 
6.	Hacer push al repositorio remoto el/los commits realizados. 
7.	Responder actividad con la url del repositorio.

```
**TP2: Primeras Reglas del Juego**

```
Continuar el proyecto desarrollado en el Trabajo Practico N1, agregándole las primeras reglas del juego de Damas. 
El objetivo de esta semana es poder seleccionar fichas por turno, es decir que se debe detectar el jugador actual, y 
solo se pueden seleccionar casilleros correspondientes al color de ficha de dicho jugador. 
No es necesario crear reglas de movimiento de fichas diagonales, solo turnos.

El código HTML, CSS y JavaScript desarrollado debe ser subido a Github con sus commits correspondientes.
El repositorio debe ser el mismo que se utilizó para la Clase 09, actualizando el Readme y los cambios deben ser visibles utilizando Github Pages.

Esta semana se evaluará:
•	Correcta funcionalidad de JavaScript.
•	Correcto manejo de Eventos del navegador.
•	Responsividad del contenido, visible correctamente en celulares, tablets y monitores.
•	Cumplimiento de la consigna y los contenidos.
•	Contenido completo y prolijo del Readme.
•	Prolijidad del Código realizado, tanto HTML, CSS como JS. Prestar atención a la indentacion, puntuación, etc.
•	Correcto y frecuente uso de commits de Git.
•	Correcta visualización del sitio en Github Pages.
•	Colaboración con los compañeros de clase para mejorar los conocimientos y avanzar como grupo.


```
**TP3: Jugando a las Damas**

```
Continuar el proyecto desarrollado en la Clase 11, agregándole jugabilidad a las Damas. El objetivo de esta semana es poder comer fichas del oponente, 
es decir que se debe detectar el jugador actual, la ficha seleccionada y los casilleros disponibles para mover dicha ficha o comer una ficha contigua. 
Cuanto el jugador termina su movimiento, se debe pasar el turno al siguiente jugador. No es necesario crear la habilidad de comer más de una ficha a la vez, 
ni detectar si se ha ganado la partida.

El Código HTML, CSS y JavaScript desarrollado debe ser subido a Github con sus commits correspondientes.
El repositorio debe ser el mismo que se utilizó para la Clase 10, actualizando el Readme y los cambios deben ser visibles utilizando Github Pages.

Esta semana se evaluará:
•	Correcta funcionalidad de JavaScript.
•	Correcto manejo de Eventos del navegador.
•	Responsividad del contenido, visible correctamente en celulares, tablets y monitores.
•	Cumplimiento de la consigna y los contenidos.
•	Contenido completo y prolijo del Readme.
•	Prolijidad del código realizado, tanto HTML, CSS como JS. Prestar atención a la indentacion, puntuación, etc.
•	Correcto y frecuente uso de commits de Git.
•	Correcta visualización del sitio en Github Pages.
•	Colaboración con los compañeros de clase para mejorar los conocimientos y avanzar como grupo.
```

**TP4: Formulario de Contacto**

```
Continuar el proyecto desarrollado en el TP3, agregando un formulario de contacto que debe contener los campos: 
- Nombre Completo
- Email
- Comentario

Agregar un botón al final del formulario que diga “enviar” y que al presionar se realice una consulta HTTP utilizando una API pública 
enviando los datos cargados en los campos del formulario (usar método Fetch de JS para la consulta/request). La url o API para hacer la consulta puede ser cualquiera, 
y no es necesario que devuelva una respuesta correcta.

El formulario de contacto debe visualizarse correctamente en cualquier dispositivo (diseño responsivo), y se recomienda hacerlo en una nueva página HTML, manteniendo la estética
del juego de Damas.
```

## Lista de commits

```
Author: jonamartino jonamartino@gmail.com 
Date:   Wed Jun 23 20:40:25 2021 -0300
index y js modificados para hacer el tablero dinámico 
```
```
Author: jonamartino jonamartino@gmail.com
Date:   Tue Jul 6 03:37:00 2021 -0300
Funcionalidad de selección de fichas y movimiento en las celdas permitidas... falta regla para comer fichas
```
```
Author: jonamartino jonamartino@gmail.com
Date:   Wed Jul 7 16:08:42 2021 -0300
agregadas condiciones para comer ficha, falta sdeseleccion y turno
```
```
Author: jonamartino jonamartino@gmail.com
Date:   Mon Jul 12 01:37:36 2021 -0300
Agregadas la funcionalidades de deseleccion, turnos, y mensaje de quien tiene que mover la ficha
```
```
Author: jonamartino <jonamartino@gmail.com>
Date:   Mon Jul 19 02:38:02 2021 -0300
error form.html v1
```
```
Author: jonamartino <jonamartino@gmail.com>
Date:   Mon Jul 19 02:34:27 2021 -0300
prueba error en contacto
```
```
Author: jonamartino <jonamartino@gmail.com>
Date:   Mon Jul 19 02:26:38 2021 -0300
Merge branch 'main' of https://github.com/jonamartino/TP1
```
```
Author: jonamartino <jonamartino@gmail.com>
Date:   Mon Jul 19 02:26:09 2021 -0300
Agregada pagina de formulario + conexion con archivo php para realizar las consultas
```

## A mejorar
-	Mensaje de quien tiene el turno
-	Puntaje por equipos
-	Efectos visuales que muestren movimientos permitidos
-	Diseño de la pagina
-	Mostrar fichas eliminadas a los costados
-	Mostrar algún efecto al hacer un movimiento erróneo


## Integrantes 
[Jonathan Martino](https://github.com/jonamartino/TP1)
