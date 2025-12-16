class HeaderComponent {
  constructor(page) {
    this.page = page;

    this.botaoBuscar = page.getByRole('button', { name: 'search' });
    this.inputBusca = page.getByRole('textbox', { name: 'Do que você precisa?' });
    this.listaItens = page.locator('li.ui-menu-item a');
  }

  async buscarProduto(nomeProduto) {
    await this.botaoBuscar.click();
    await this.inputBusca.fill(nomeProduto);
    await this.listaItens.first().waitFor({ state: 'visible' });
    const nomeSugestao = await this.listaItens.first().innerText();
    await this.selecionarPrimeiroItemLista();
    return nomeSugestao;
  }
  
  async selecionarPrimeiroItemLista() {
    await this.listaItens.first().waitFor({ state: 'visible' });
    await this.listaItens.first().click();
  }
  
}

module.exports = { HeaderComponent };
