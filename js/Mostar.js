// Define la función mostrarDatos que se encargará de recolectar datos del formulario y mostrarlos
function mostrarDatos() {
    
    // Imprime un mensaje en la consola para indicar que la función ha sido llamada
    console.log('Función correctamente funcinando =)☻');
    
    // Obtiene el valor del campo de entrada con el id nombre y lo guarda en la variable nombre
    const nombre = document.getElementById('nombre').value;
    
    // Obtiene el valor del campo de entrada con el id 'apellidos' y lo guarda en la variable 'apellidos'
    const apellidos = document.getElementById('apellidos').value;
    
    // Obtiene el valor del campo de entrada con el id 'direccion' y lo guarda en la variable 'direccion'
    const direccion = document.getElementById('direccion').value;
    
    // Obtiene el valor del campo de entrada con el id 'correo' y lo guarda en la variable 'correo'
    const correo = document.getElementById('correo').value;
    
    // Obtiene el valor del campo de entrada con el id 'dni' y lo guarda en la variable 'dni'
    const dni = document.getElementById('dni').value;
    
    // Obtiene el valor del botón de radio seleccionado con el nombre 'genero'
    // Si no hay ningún botón seleccionado, asigna 'No Seleccionado' a la variable 'genero'
    const genero = document.querySelector('input[name="genero"]:checked') ? 
                   document.querySelector('input[name="genero"]:checked').value : 
                   'No Seleccionado';
    
    // Obtiene el valor del campo de entrada con el id 'fecha-nacimiento' y lo guarda en la variable 'fechaNacimiento'
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    
    // Obtiene el valor del campo de entrada con el id 'telefono' y lo guarda en la variable 'telefono'
    const telefono = document.getElementById('telefono').value;
    
    // Obtiene el valor del campo de entrada con el id 'edad' y lo guarda en la variable 'edad'
    const edad = document.getElementById('edad').value;
    
    // Obtiene el valor del campo de entrada con el id 'lugar' y lo guarda en la variable 'lugar'
    const lugar = document.getElementById('lugar').value;
    
    // Crea una cadena de texto en formato HTML con los datos recogidos
    // Los datos se presentan en párrafos con etiquetas <strong> para los nombres de las secciones
    const resultados = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellidos:</strong> ${apellidos}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>DNI:</strong> ${dni}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Fecha de Nacimiento:</strong> ${fechaNacimiento}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Lugar:</strong> ${lugar}</p>
    `;
    
    // Establece el contenido HTML del elemento con el id 'resultados' al valor de la cadena de texto creada
    document.getElementById('resultados').innerHTML = resultados; //insertar los datos
}
