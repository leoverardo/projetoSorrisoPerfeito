document.addEventListener('DOMContentLoaded', function () {

    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = `
        <div class="modal-content">
            <h1>Solicitar Orçamento</h1>
            <form id="form-orcamento" action="https://formsubmit.co/leonardomoura080904@gmail.com" method="POST" class="modal-form">
                <input type="text" name="name" placeholder="Seu Nome" required>
                <input type="email" name="email" placeholder="Seu E-mail" required>
                <input type="number" name="phone" placeholder="Seu Telefone" required>
                <label for="procedimento">Selecione o Procedimento Dentista</label>
                <select name="procedimento" id="procedimento">
                    <option value="" selected>Selecione um Procedimento</option>
                    <option value="Clareamento Dental">Clareamento Dental</option>
                    <option value="Implante Dentário">Implante Dentário</option>
                    <option value="Ortodontia">Ortodontia</option>
                    <option value="Restauração Dentária">Restauração Dentária</option>
                    <option value="Limpeza Dental">Limpeza Dental</option>
                    <option value="Canal Dentário">Canal Dentário</option>
                    <option value="Extração Dentária">Extração Dentária</option>
                </select>
                <br>
                <button type="submit">Enviar</button>
            </form>
            <button id="closeModal">Fechar</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Validação do formulário
    const form = modal.querySelector('#form-orcamento');
    form.addEventListener('submit', function(event) {
        const nome = this.name.value.trim();
        const email = this.email.value.trim();
        const telefone = this.phone.value.trim();
        const procedimento = this.procedimento.value;

        if (nome === '') {
            alert('Por favor, preencha seu nome.');
            this.name.focus();
            event.preventDefault();
            return;
        }

        if (email === '' || !validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            this.email.focus();
            event.preventDefault();
            return;
        }

        if (telefone === '' || isNaN(telefone)) {
            alert('Por favor, insira um telefone válido.');
            this.phone.focus();
            event.preventDefault();
            return;
        }

        if (procedimento === '') {
            alert('Por favor, selecione um procedimento.');
            this.procedimento.focus();
            event.preventDefault();
            return;
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }

    // Botão fechar modal
    const closeModal = modal.querySelector('#closeModal');
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // Abrir modal ao clicar em cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            modal.classList.add('active');
        });
    });

    // IntersectionObserver para animações
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
