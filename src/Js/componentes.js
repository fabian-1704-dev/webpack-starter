import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('creando una etiqueta H1 en el html');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre} como estas?`;

    document.body.append(h1);
}