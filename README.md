# Projeto Studio Leonísia Izidio

Este é o frontend do projeto, desenvolvido com **Angular** e utilizando bibliotecas modernas para a interface do usuário, como Angular Material, Bootstrap e gráficos com Chart.js e ECharts.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- [Angular CLI](https://angular.io/cli) (opcional, mas recomendado)

## Dependências

O projeto utiliza as seguintes dependências principais:

- **Framework:** Angular 18
- **UI:** Angular Material, Bootstrap
- **Gráficos:** Chart.js, ECharts, ng2-charts
- **Outras:** FontAwesome, Moment.js, JSON Server (mock de API)

## Instalação

Siga as etapas abaixo para configurar o ambiente de desenvolvimento:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/felipemadu13/leonisiaApp
   cd leonisiaApp
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

4. **(Opcional) Inicie o JSON Server para a API simulada:**
   ```bash
   npm run json-server
   ```
   - O arquivo de mock está localizado em `db/db.json`.

O servidor estará disponível em [http://localhost:4200](http://localhost:4200).

## Scripts Disponíveis

No `package.json`, os seguintes scripts estão configurados:

- **`npm start`:** Inicia o servidor de desenvolvimento Angular.
- **`npm run build`:** Compila o projeto para produção.
- **`npm run json-server`:** Inicia o servidor mock usando JSON Server.

## Estrutura do Projeto

- **`src/`:** Código-fonte principal.
  - **`app/`:** Componentes Angular.
  - **`assets/`:** Recursos estáticos (imagens, fontes).
  - **`styles.css`:** Estilos globais.
- **`public/`:** Arquivos públicos, como o `favicon.ico`.
- **`db/db.json`:** Mock de API para desenvolvimento.

## Produção

Para gerar uma build de produção, execute:
```bash
npm run build
```
Os arquivos gerados estarão na pasta `dist/`.

## Ferramentas Adicionais

- **Testes:** Configuração com Karma e Jasmine.
  ```bash
  npm test
  ```
- **Lint:** Para verificar o código.
  ```bash
  ng lint
  ```

## Contribuindo

1. Crie uma branch para suas alterações:
   ```bash
   git checkout -b minha-feature
   ```
2. Faça o commit das alterações:
   ```bash
   git commit -m "Descrição das alterações"
   ```
3. Envie as alterações:
   ```bash
   git push origin minha-feature
