const { expect } = require('@playwright/test');
const { HeaderComponent } = require('./components/HeaderComponent');

class HomePage {
  constructor(page) {
    this.page = page;
    this.header = new HeaderComponent(page);
    this.botaoSelecionarLoja = page.getByRole('button', { name: 'Selecionar loja' });
    this.botaoAlterarLoja = page.getByRole('button', { name: 'Alterar loja' });
    this.inputCep = page.getByRole('textbox', { name: 'CEP' });
    this.inputCidade = page.getByRole('textbox', { name: 'Pesquise a loja pela cidade' });
  }

   async acessar() {
    await this.page.goto('https://casadoconstrutor.com.br/pt-br', {
      waitUntil: 'load'
    });
  }

  async garantirModalAberto() {
    await this.page.waitForLoadState('domcontentloaded');

    const modalAberto = this.page.locator('.modal.full-size.is-open');
    if (!modalAberto) {
      await this.botaoSelecionarLoja.click();
      await expect(this.modalTitulo).toBeVisible();
    }
  }

  async validarLojaSelecionada() {
    await expect(this.botaoAlterarLoja).toBeVisible();
  }

  async selecionarLojaPorCidade(cidade) {
    await this.garantirModalAberto();
    await this.inputCidade.fill(cidade);
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.validarLojaSelecionada();
  }

  async selecionarLojaPorCep(cep) {
    await this.garantirModalAberto();
    await this.inputCep.fill(cep);
    await this.validarLojaSelecionada();
  }
}

module.exports = { HomePage };
