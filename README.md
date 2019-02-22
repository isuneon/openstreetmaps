# Pasos para clonar repositorio
  - Desde la terminal ingresar a la ubicación en la cual queremos clonar el proyecto
    ```sh
    cd C:\Users\XXXX\Documents\miproyecto
    ````
  - Clonar repositorio
       ```sh
       git clone https://billyrogers@bitbucket.org/billyrogers/openstreetmaps.git
       ````
  - Ejecutar el comando para instalar todos los paquetes y dependencias
    ```sh
    $ npm install
    ```
# Pasos para generar apk
- Remover la plataforma para asegurarnos que tenga los ultimos cambios (se debe realizar
    cada vez que se vaya a compilar una versión nueva)
    ```sh
    ionic cordova platform rm {android / ios}
    ionic cordova platform rm android
    ```
- Agregar la plataforma 
    ```sh
    ionic cordova platform add {android / ios}
    ionic cordova platform add android
    ```
- Crear APK  
    ```sh
    ionic cordova build {android / ios}
    ionic cordova build android
    ```
