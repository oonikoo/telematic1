<b>1. ¿CUAL ES LA PROBLEMÁTICA QUE QUIERE RESOLVER?</b>

No existe un sistema seguro para guardar y exponer los datos generados por sensores (temperatura, latitud, longitud), es necesario distinguir roles, los sensores son los únicos que pueden agregar datos a la base de datos y los usuarios son aquellos que pueden visualizarlos, por lo cual es necesario crear una aplicación web que resuelva el problema y las necesidades.

<b>2. ¿CUALES SON LOS REQUISITOS FUNCIONALES DE LA APP?</b>

El sistema permitirá al usuario visualizar la información de los sensores si este se encuentra logueado en el sistema.
Los sensores podrán logueados podrán ingresar datos a la base de datos de sensores.
El sistema debe permitir ver a qué usuario está ligada la información.
El sistema solo debe permitir el acceso a usuarios autorizados
El sistema NO permitirá que el usuario básico pueda ingresar datos a la base de datos de sensores.
El sistema NO permitirá que el sensor pueda visualizar la información de los sensores.

<b>3. ¿CUALES SON LOS REQUISITOS NO FUNCIONALES DE LA APP?</b>

El sistema es intuitivo, por lo que no llevará a usuario más de 15 min para conocer su funcionamiento.
La información en la base de datos sólo puede ser modificada por creador y dueño de la misma.
Se utilizaron patrones de diseño a la hora de la implementación del sistema.
El tiempo de respuesta al cliente es menor a 2s
La interfaz gráfica es minimalista y bien formada.

<b>4. ¿QUÉ TECNOLOGÍA DE DESARROLLO UTILIZÓ?</b>

<b>4.1 EN EL BACKEND? </b>

<li>Nestjs: Se usó como framework para construir la aplicación, este framework permite crear aplicaciones eficientes, fiables y escalables por medio del lenguaje Typescript.</li>
<li>Typeorm: Es una ORM (Object-relational mapping, Mapeo objeto-relacional), que brindó una facilidad a la hora de manipular los datos dentro y fuera de la base de datos, además que permite el uso de Typescript y Javascript.</li>
<li>Typescript: Lenguaje de programación que a diferencia de Javascript es estricto con el tipado de datos, al final es compilado y convertido a código Javascript.</li>
<li>MongoDb: Base de datos no relacional que encajaba mejor a la propuesta del uso de sensores debido a la posible demanda de datos a ingresar.</li>
<li>Npm: Instalador de paquetes fácil de utilizar.</li>

<b>4.2 EN EL FRONTEND?</b>

<li>React: Permite crear interfaces de usuarios amigables y minimalistas, a la vez es sencillo el mantenimiento y manejo de datos para exponer al cliente.</li>
<li>Webpack: Permite desplegar la aplicación.</li>

<b>5.¿CUALES SON Y CUAL ES LA ESPECIFICACIÓN DE LOS SERVICIOS API REST DEL BACKEND?</b>

<b>Authentication.</b>
@POST api/auth/login: Permite el logueo de usuario registrados en la base de datos.
@POST api/auth/singup: Permite el registro de nuevos usuarios a la base de datos.

<b>Sensor.</b>
@GET api/sensor/: Permite a los usuarios básicos obtener la información respecto a los sensores.
@POST api/sensor/: Permite a un sensor agregar información a la base de datos.
 
<b>6. ¿CÓMO REALIZÓ LA AUTENTICACIÓN DE LOS SERVICIOS API REST?</b>

Nestjs proporciona librerías que facilitan el uso de jwt (Json Web Tokens), para el login se utilizó passport-jwt que brinda estándares de seguridad compatibles con typescript y javascript.  
La contraseñas almacenadas usan una encriptación pbkdf2 y un salt de hasta 32 bits.

<b>7. ¿CUALES SON LAS PRINCIPALES DIFICULTADES QUE TUVO AL DESARROLLAR EL PROYECTO?</b>

<b>7.1. POR DESCONOCIMIENTO DE LA TECNOLOGÍA?</b>

El poco conocimiento acerca de front-end (React) no facilitó el ritmo de trabajo anteriormente empleado en el backend, acerca de React solo conocía conceptos básicos y su razón de ser, pero nunca había realizado un proyecto en este framework web, igualmente con librerías como Babel que proporcionan muchas funcionalidades desconocidas.

<b>7.2. ¿QUÉ CONCEPTOS O FUNDAMENTOS NO SABE PARA PODER DESARROLLAR ESTE PROYECTO?</b>

Los tutoriales, guías y post en línea facilitaron el entendimiento de los conceptos no conocidos. https://jasonwatmore.com/post/2019/04/06/react-jwt-authentication-tutorial-example este ejemplo fue gran ayuda para la resolución del problema.

<b>7.3. ¿QUÉ HABILIDADES DE DESARROLLO LE FALTAN PARA PODER TERMINAR EL PROYECTO?</b>

Conocer más acerca de las librerías para el front end en react (Babel, formik) y una situación similar ocurre con CSS.

<b>7.4. ¿QUÉ OTRAS COSAS LE FALTÓ PARA PODER DESARROLLAR EL PROYECTO 1?</b>

El día 24 de enero me operaron de la muñeca del brazo izquierdo, por tal motivo me tomó mucho más tiempo de lo normal codificar.

<b>8. ¿CUALES FUERON LOS PRINCIPALES APRENDIZAJES DEL PROYECTO 1?</b>
<li>-La implementación desde cero de un backend realizado en Nestjs</li>
<li>-Entendimiento de TypeOrm para una aplicación en typescript con Nestjs</li>
<li>-El uso de decoradores como @UserGuards</li>
<li>-Creación de un front end desde cero con React</li>
<li>-Conexión del front end con el backend y el uso de servicios prestados por el backend en el front end.</li>
