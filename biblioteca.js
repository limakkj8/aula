const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, categoria, estoque) {
        const livro = {
            nome: nome,
            autor: autor,
            categoria: categoria,
            estoque: estoque,
            disponivel: estoque > 0,
            alugado: false,
            vezesAlugado: 0
        };

        this.livros.push(livro);

        console.log("Livro adicionado:", livro.nome);
    },

    mostrarLivros() {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];
            console.log(
                `${p.nome} - ${p.autor} | Estoque: ${p.estoque} | Alugado: ${p.alugado}`
            );
        }
    },

    alugar(nome) {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];

            if (p.nome === nome) {
                if (p.estoque > 0) {
                    p.estoque--;
                    p.alugado = true;
                    p.vezesAlugado++;

                    if (p.estoque === 0) {
                        p.disponivel = false;
                    }

                    console.log("Livro " + nome + " alugado com sucesso!");
                } else {
                    console.log("O livro " + nome + " está sem estoque!");
                }

                return;
            }
        }

        console.log("O livro " + nome + " não existe.");
    },

    devolver(nome) {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];

            if (p.nome === nome) {
                p.estoque++;
                p.disponivel = true;
                p.alugado = false;

                console.log("Livro " + nome + " devolvido com sucesso!");
                return;
            }
        }

        console.log("O livro " + nome + " não existe.");
    }
};

// Teste
biblioteca.adicionarLivros(
    "pinoquio",
    "Carlo Collodi",
    "Literatura Infantil e Infanto-Juvenil",
    210
);

biblioteca.mostrarLivros();

biblioteca.alugar("pinoquio");

biblioteca.mostrarLivros();

biblioteca.devolver("pinoquio");

biblioteca.mostrarLivros();