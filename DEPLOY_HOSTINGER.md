# 🚀 Guia de Deploy da Lume Shop na Hostinger

Este projeto está pronto e 100% configurado para rodar na **Hostinger** (Hospedagem Compartilhada, Cloud, VPS ou WordPress).

---

## 📦 Opção 1: Hospedagem Padrão / hPanel (Método Recomendado e Mais Rápido)

Como a **Lume Shop** é uma aplicação web rápida e moderna (React + Vite), todo o site já é compilado em arquivos estáticos otimizados na pasta `dist/`.

### Passo a Passo:
1. No seu terminal local ou ambiente, gere a versão final de produção (já testada com sucesso):
   ```bash
   npm run build
   ```
2. Acesse a pasta gerada **`dist/`**.
3. Selecione todos os arquivos e pastas que estão dentro de `dist/`:
   - `index.html`
   - `.htaccess` (arquivo de configuração para não dar erro 404 ao atualizar rotas)
   - Pasta `assets/`
   - Pasta `products/`
4. Compacte esses arquivos em um arquivo **`site.zip`**.
5. Acesse o **hPanel da Hostinger** (painel de controle da sua hospedagem).
6. Vá em **Sites** > Selecione seu domínio > **Gerenciador de Arquivos**.
7. Abra a pasta **`public_html`**.
8. Clique em **Fazer Upload** (ícone de seta para cima) e envie o `site.zip`.
9. Clique com o botão direito no `site.zip` e escolha **Extrair** (diretamente dentro de `public_html`).
10. Pronto! Acesse seu domínio e o site já estará no ar.

> 💡 **Nota sobre o `.htaccess`:** Já deixamos incluído um arquivo `.htaccess` pré-configurado dentro de `public/` (e copiado para `dist/`). Ele força HTTPS, ativa compressão GZIP e garante que links como `/sobre`, `/ajuda`, `/trocas-e-devolucoes` funcionem perfeitamente sem dar erro 404!

---

## ⚙️ Opção 2: Deploy Contínuo via GitHub na Hostinger

Se você utiliza repositório no GitHub:

1. Suba o código do projeto para o seu repositório no GitHub.
2. No hPanel da Hostinger, vá em **Avançado** > **Git**.
3. Conecte o repositório e o branch `main`.
4. Defina o diretório de destino como `public_html`.
5. Se for VPS ou hospedar Node.js:
   ```bash
   npm install
   npm run build
   ```

---

## 💳 Configuração do Gateway de Pagamento Externo

Para alterar o link do gateway de checkout externo para onde o cliente é redirecionado ao clicar em **"Finalizar Compra"**:

- Abra o arquivo: `src/config/gateway.ts`
- Modifique a constante `DEFAULT_CHECKOUT_GATEWAY_URL` com o link da sua plataforma de pagamento (ex: Appmax, Yampi, CartPanda, Kiwify, Mercado Pago, etc.):
  ```typescript
  export const DEFAULT_CHECKOUT_GATEWAY_URL = 'https://sua-url-do-checkout.com';
  ```
- Ou defina no arquivo `.env`:
  ```env
  VITE_CHECKOUT_GATEWAY_URL="https://sua-url-do-checkout.com"
  ```
- Rode `npm run build` novamente para atualizar.

---

## 🛠️ Comandos Úteis do `package.json`

| Comando | Descrição |
|---|---|
| `npm install` | Instala todas as dependências do projeto |
| `npm run dev` | Inicia o servidor local de desenvolvimento na porta 3000 |
| `npm run build` | Compila o projeto para produção dentro da pasta `dist/` |
| `npm run preview` | Testa a versão compilada de produção localmente |
| `npm run lint` | Executa a verificação de integridade e tipos TypeScript |
