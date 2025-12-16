class ProductDetailsPage {
  constructor(page) {
    this.page = page;

    this.tituloProduto = page.locator(
      '.product-cart-main-infos-texts-title .field--name-title'
    );
  }

  async obterNomeProduto() {
    await this.tituloProduto.waitFor({ state: 'visible' });
    return await this.tituloProduto.innerText();
  }
}

module.exports = { ProductDetailsPage };
