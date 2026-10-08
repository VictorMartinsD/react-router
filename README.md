# React Router

Projeto de estudos sobre roteamento e navegação em aplicações React utilizando o React Router.

> **Em construção**
>
> Este repositório ainda está sendo desenvolvido durante o acompanhamento das aulas. A implementação atual é inicial e não representa a versão final do projeto.

## Sobre o projeto

O objetivo deste projeto é praticar, de forma progressiva, os principais recursos do React Router. Cada aula adicionará novos conceitos à aplicação, permitindo acompanhar a evolução da estrutura, das rotas e da navegação.

Neste momento, o projeto contém apenas a estrutura inicial da aplicação React. As funcionalidades apresentadas no roadmap abaixo serão implementadas ao longo do desenvolvimento.

## Roadmap das aulas

### Primeiros passos

Módulo introdutório com 5 aulas, com duração total aproximada de 10 minutos e 20 segundos.

### Rotas e navegação

Módulo com 12 aulas, com duração total aproximada de 45 minutos e 4 segundos. Os conteúdos previstos são:

1. Criando a Primeira Rota
2. Rota de Produtos
3. Navegando Para Produtos
4. Voltando
5. Página 404
6. `useSearchParams`
7. `useNavigate`
8. Rota com Parâmetro
9. `useParams`
10. Retornando para Página Anterior
11. Layout Routes
12. Encerramento

Esse roadmap representa o conteúdo planejado para o projeto. As aulas ainda serão desenvolvidas e o código poderá mudar conforme novos conceitos forem adicionados.

## Tecnologias

- React
- TypeScript
- Vite
- React Router
- ESLint
- Prettier

## Como executar

### Requisitos

- Node.js 24 ou superior
- npm

### Instalação

Instale as dependências do projeto:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse a URL informada pelo Vite no terminal.

## Scripts disponíveis

| Comando            | Descrição                                     |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Inicia o servidor de desenvolvimento com HMR. |
| `npm run build`    | Verifica os tipos e gera a build de produção. |
| `npm run preview`  | Executa uma prévia da build de produção.      |
| `npm run lint`     | Analisa os arquivos JavaScript e TypeScript.  |
| `npm run check`    | Executa o lint e verifica a formatação.       |
| `npm run format`   | Formata os arquivos do projeto.               |
| `npm run lint:fix` | Aplica as correções automáticas do ESLint.    |

## Estrutura inicial

```text
src/
├── App.tsx         # Componente principal da aplicação
├── app.module.css  # Estilos do componente principal
├── global.css      # Estilos globais
└── main.tsx        # Ponto de entrada da aplicação
```

Essa estrutura será ampliada conforme as rotas, páginas e componentes das aulas forem implementados.

## Status do desenvolvimento

- [x] Estrutura inicial do projeto React com Vite e TypeScript
- [x] Primeiros passos
- [ ] Rotas e navegação
- [ ] Rotas de produtos
- [ ] Parâmetros e query strings
- [ ] Navegação programática
- [ ] Página 404
- [ ] Layout Routes
- [ ] Encerramento e revisão do projeto

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

Desenvolvido por [Victor Martins](https://github.com/VictorMartinsD).
