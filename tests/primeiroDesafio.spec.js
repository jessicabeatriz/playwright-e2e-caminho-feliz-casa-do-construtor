const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { HeaderComponent } = require('../pages/components/HeaderComponent');
const { SearchResultsPage } = require('../pages/SearchResultsPage');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage');

test.describe('Desafio O "Caminho Feliz" (End-to-End) - Casa do Construtor', () => {

  test('Selecionar loja por CIDADE e buscar equipamento', async ({ page }) => {
    const home = new HomePage(page);
    const header = new HeaderComponent(page);
    const resultados = new SearchResultsPage(page);
    const detalhes = new ProductDetailsPage(page);

    await home.acessar();
    await home.selecionarLojaPorCidade('Adamantina');

    const nomeProduto = await header.buscarProduto('Betoneira');

    await page.waitForTimeout(2000);

    expect(await resultados.obterTituloPagina()).toBe(nomeProduto);
    
    const nomeProdutoLista = await resultados.obterNomePrimeiroProduto();
    await resultados.clicarPrimeiroProduto();

    const nomeProdutoDetalhe = await detalhes.obterNomeProduto();
    expect(nomeProdutoDetalhe).toContain(nomeProdutoLista);

    await page.waitForTimeout(2000);

    await page.screenshot({
      path: 'screenshots/fluxo-cidade.png',
      fullPage: true
    });
  });

  test('Selecionar loja por CEP e buscar equipamento', async ({ page }) => {
    const home = new HomePage(page);
    const header = new HeaderComponent(page);
    const resultados = new SearchResultsPage(page);
    const detalhes = new ProductDetailsPage(page);

    await home.acessar();
    await home.selecionarLojaPorCep('13504-363');
    
    const nomeProduto = await header.buscarProduto('Betoneira');
    await page.waitForTimeout(2000);
    expect(await resultados.obterTituloPagina()).toBe(nomeProduto);
    
    const nomeProdutoLista = await resultados.obterNomePrimeiroProduto();
    await resultados.clicarPrimeiroProduto();

    const nomeProdutoDetalhe = await detalhes.obterNomeProduto();
    expect(nomeProdutoDetalhe).toContain(nomeProdutoLista);

    await page.waitForTimeout(2000);
    
    await page.screenshot({
      path: 'screenshots/fluxo-cep.png',
      fullPage: true
    });
  });

});
