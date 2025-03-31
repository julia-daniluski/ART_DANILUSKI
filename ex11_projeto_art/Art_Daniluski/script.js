// Alterar cor do cabeçalho ao rolar a página
window.addEventListener('scroll', function() {
    let header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333'; // Alterando para cor escura
        header.style.color = '#fff';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.color = '#000';
    }
});

// Exibir mais detalhes ao clicar no botão "Detalhes"
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o link de navegar
        let description = this.previousElementSibling; // A descrição do item
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block'; // Exibir descrição
            this.textContent = 'Menos detalhes'; // Alterar texto do botão
        } else {
            description.style.display = 'none'; // Esconder descrição
            this.textContent = 'Detalhes'; // Reverter texto do botão
        }
    });
});

// Exemplo de manipulação de imagens para mudar o fundo das imagens pequenas
document.querySelectorAll('.small-image-container').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
