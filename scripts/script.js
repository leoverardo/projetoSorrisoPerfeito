document.addEventListener('DOMContentLoaded', function () {

        const modal = document.createElement('div');
        modal.classList.add('modal');

       modal.innerHTML = `
        <div class="modal-content">
            <h1>Solicitar Orçamento</h1>
            <form action="https://formsubmit.co/leonardomoura080904@gmail.com" method="POST" class="modal-form">
                <input type="text" name="name" placeholder="Seu Nome" required>
                <input type="email" name="email" placeholder="Seu E-mail" required>
                <button type="submit">Enviar</button>
            </form>
            <button id="closeModal">Fechar</button>
        </div>
        `;

        document.body.appendChild(modal);

        const closeModal = modal.querySelector('#closeModal');
        closeModal.addEventListener('click', function() {
            modal.classList.remove('active');
        });

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                modal.classList.add('active');
            });
        });

        const visualiza = new IntersectionObserver((entrada, visualiza) => {
            entrada.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    visualiza.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        const elements = document.querySelectorAll('.banner, .card, .titulo_servicos, .titulo_contato, .footer-col, .footer-bottom');
        elements.forEach(el => visualiza.observe(el));
    });