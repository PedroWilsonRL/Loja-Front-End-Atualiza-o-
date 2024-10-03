function alternarImagens() {
    const imagem = document.getElementById('dynamicImage');
    const imagens = ['imagens/galeria oferta 1.jpg', 'imagens/galeria oferta 2.jpg', 
        'imagens/galeria oferta 3.jpg']; 
    let indiceAtual = 0; 

    setInterval(() => {
        indiceAtual = (indiceAtual + 1) % imagens.length; 
        imagem.src = imagens[indiceAtual]; 
    }, 3000); 
}

window.onload = alternarImagens;

