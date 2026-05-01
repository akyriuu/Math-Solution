# Math Solution

A small browser-based math practice tool. The idea is simple: you get a random arithmetic question, type the answer, and move on. No score screen, no levels, just repetition.

It covers addition, subtraction and multiplication with numbers from 1 to 12. If you get something wrong, the input clears so you can try again. If you get it right, the next question loads automatically.

<img width="496" height="288" alt="ezgif-82052a13c32b245a" src="https://github.com/user-attachments/assets/cbd1efca-284c-4967-8f35-2894eb7e8c47" />


Built with TypeScript and plain HTML. Tailwind is used for styling via CDN, so no build step is needed for that.

## How to run locally

Just open `index.html` in a browser. If you make changes to the TypeScript files, run:

```
npx tsc
```

That compiles everything into `src/dist/`, which is what the HTML files load.

---

# Math Solution (Português)

Uma ferramenta simples de prática de matemática que roda no navegador. A ideia é direta: aparece uma conta aleatória, você digita a resposta e passa pra próxima. Sem tela de pontuação, sem fases, só repetição mesmo.

Cobre adição, subtração e multiplicação com números de 1 a 12. Se errar, o campo treme e limpa pra você tentar de novo. Se acertar, a próxima pergunta carrega automaticamente.

Feito com TypeScript e HTML puro. O Tailwind é carregado via CDN, então não precisa de nenhum processo de build pra estilização.

## Como rodar localmente

Só abrir o `index.html` no navegador. Se fizer alterações nos arquivos TypeScript, rode:

```
npx tsc
```

Isso compila tudo pra `src/dist/`, que é o que os arquivos HTML carregam.
