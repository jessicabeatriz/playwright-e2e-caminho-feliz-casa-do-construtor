const { expect } = require('@playwright/test');

class SearchResultsPage {
  constructor(page) {
    this.page = page;

    this.tituloPagina = page.locator('h1.title');
    this.listaProdutos = page.locator('.product-cart-wrapper');
    this.primeiroProduto = this.listaProdutos.first();
    this.tituloPrimeiroProduto = this.primeiroProduto.locator('h2');
    this.linkPrimeiroProduto = this.primeiroProduto.locator('a[title="Ver equipamento"]').first();
  }

  async obterTituloPagina() {
    return await this.tituloPagina.innerText();
  }
  
  async obterNomePrimeiroProduto() {
    await this.tituloPrimeiroProduto.waitFor({ state: 'visible' });
    const nomeProduto = await this.tituloPrimeiroProduto.innerText();
    return nomeProduto.replace('Aluguel de', '').trim();
  }

  async clicarPrimeiroProduto() {
    await this.linkPrimeiroProduto.waitFor({ state: 'visible' });
    await this.linkPrimeiroProduto.click();
  }
}

module.exports = { SearchResultsPage };
