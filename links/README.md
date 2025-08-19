# Links

Uma aplicação móvel construída com Expo e React Native, utilizando o Expo Router para navegação. Este projeto fornece uma base para criar uma aplicação multiplataforma que funciona em Android, iOS e na web.

## Índice

- [Instalação](#instalação)
- [Scripts](#scripts)
- [Estrutura do Projeto](#estrutura-do-projeto)


## Instalação

Para começar com o projeto, siga estas etapas:

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/eliseu-daniel/ReactNativeEstudos.git
   cd links
   ```

2. **Instalar dependências**:
   Certifique-se de ter o [Node.js](https://nodejs.org/) e o [Expo CLI](https://docs.expo.dev/get-started/installation/) instalados. Em seguida, execute:
   ```bash
   npm install
   ```

3. **Configurar o ambiente**:
   Certifique-se de ter a configuração necessária do Expo. Você pode precisar instalar o aplicativo Expo Go no seu dispositivo móvel para desenvolvimento.

## Scripts

Os seguintes scripts estão disponíveis no `package.json`:

- **`npm start`**: Inicia o servidor de desenvolvimento do Expo.
- **`npm run android`**: Inicia a aplicação em um emulador ou dispositivo Android conectado.
- **`npm run ios`**: Inicia a aplicação em um simulador ou dispositivo iOS conectado.
- **`npm run web`**: Executa a aplicação em um navegador web.
- **`npm test`**: Executa o Jest no modo de observação para testes.

Exemplo de uso:
```bash
npm start
```

## Estrutura do Projeto

- **Ponto de Entrada Principal**: O ponto de entrada da aplicação é `expo-router/entry`, que configura o Expo Router para navegação.
- **Dependências**: Gerenciadas via `npm` e listadas no `package.json`.
- **Versão**: A versão atual do projeto é `1.0.0`.