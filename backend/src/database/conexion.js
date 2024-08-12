// Importa la función 'createPool' del módulo 'mysql2/promise' para crear una conexión a la base de datos
import { createPool } from "mysql2/promise";

// Crea una instancia de conexión a la base de datos usando 'createPool'
// Se configura la conexión con los parámetros necesarios para conectarse a la base de datos
const pool = createPool({
    host: 'bsoxrkbrnlrig4swmtfa-mysql.services.clever-cloud.com', // Host donde se encuentra la base de datos
    user: 'uq0c7xliuvpfn5hq',      // Usuario de la base de datos
    password: 'xmmajR2fYYR6Ucp2pm4D',      // Contraseña del usuario (vacía en este caso)
    port: 3306,        // Puerto de conexión (3306 es el puerto por defecto de MySQL)
    database: 'bsoxrkbrnlrig4swmtfa' // Nombre de la base de datos a la que se quiere conectar
})

// Exporta la instancia de conexión para que pueda ser utilizada en otras partes de la aplicación
export default pool
