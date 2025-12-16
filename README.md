# 🧪 Automação E2E – Casa do Construtor  
**Playwright + JavaScript | Page Object Model (POM)**

Este projeto consiste na automação End-to-End (E2E) do fluxo de aluguel de equipamentos no site da **Casa do Construtor**, simulando a jornada de um usuário real ("Caminho Feliz"), utilizando **Playwright com JavaScript**, aplicando boas práticas de **Page Object Model (POM)**.

O objetivo é validar a seleção de localidade, busca de produtos e consistência das informações apresentadas.

🔗 Site testado: https://casadoconstrutor.com.br/pt-br

## 🚀 Tecnologias Utilizadas

* **[Playwright](https://playwright.dev/):** Framework de automação de testes.
* **JavaScript:** Linguagem de programação.
* **Node.js:** Ambiente de execução.

> ⚠️ **Nota de Compatibilidade:**
> Atualmente, a execução dos testes está validada e estável para os motores **Chromium** (Google Chrome, Edge) e **Firefox**.
> A compatibilidade com **WebKit** (Safari) ainda não foi implementada.
---

## 📌 Escopo do Desafio
Você deve criar um projeto de automação que navegue pelo site da Casa do
Construtor (https://casadoconstrutor.com.br/pt-br), simulando o interesse de um cliente em
alugar um equipamento.
Fluxo a ser automatizado:
1. Configuração de Localização: Acessar a home page e interagir com o seletor de
localidade (Estado/Cidade) para definir uma loja (ex: SP / Rio Claro ou outra de sua
escolha). Este passo é essencial para visualização de preços e produtos.
2. Busca: Pesquisar por um equipamento comum, por exemplo: "Betoneira" ou
"Andaime".
3. Seleção: Na lista de resultados, clicar no primeiro produto disponível.
4. Validação Cruzada: Validar se o Nome do Produto exibido na página de detalhes é
idêntico ao nome que foi clicado na lista de resultados.
5. Evidência: O teste deve gerar um screenshot ou log de sucesso ao final do fluxo.

---

## 🧱 Arquitetura

O projeto segue o padrão **Page Object Model (POM)**:

- **Pages** → Representam páginas completas  
- **Components** → Componentes reutilizáveis (ex: Header)  
- **Specs** → Casos de teste  

---

## ▶️ Como Executar o Projeto
 
1️⃣ **Clone o repositório:**
```
git clone https://github.com/jessicabeatriz/nome-do-repositorio.git
cd playwright-e2e-caminho-feliz-casa-do-construtor
```
2️⃣ **Instale as dependências:**
```
npm install
```

3️⃣ **Instale os navegadores do Playwright:**
```
npx playwright install
```

4️⃣ **Execute os testes:**

  Executar todos os testes:
  ```npx playwright test```

  Executar com interface gráfica:
  ```npx playwright test --ui```

  Executar em um navegador específico:
  ```npx playwright test --project=chromium```
  ou
  ```npx playwright test --project=firefox```

📸 Evidências

<img width="1864" height="759" alt="image" src="https://github.com/user-attachments/assets/c9c97455-fd37-4bdd-b39f-6d8ee2097f58" />

Os testes geram screenshots automáticos ao final do fluxo, armazenados na pasta:

/screenshots

---

## 👩‍💻 Autora

Jéssica Beatriz da Silva

QA | Desenvolvedora Web
