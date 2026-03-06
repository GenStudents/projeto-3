// Interface básica do produto
export interface Produto {
  id: number
  nome: string
  preco: number
  calorias?: number
  proteina?: number
  gordura?: number
  acucar?: number
}

/**
 * Calcula um score de saúde para o produto
 */
export function calcularScoreSaude(produto: Produto): number {

  let score = 100

  if (produto.calorias)
    score -= produto.calorias * 0.1

  if (produto.gordura)
    score -= produto.gordura * 2

  if (produto.acucar)
    score -= produto.acucar * 1.5

  if (produto.proteina)
    score += produto.proteina * 1.2

  return score
}

/**
 * Retorna os produtos mais saudáveis do cardápio
 */
export function recomendarProdutosSaudaveis(produtos: Produto[]): Produto[] {

  return produtos
    .map(produto => ({
      ...produto,
      score: calcularScoreSaude(produto)
    }))
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, 3)

}

/**
 * Verifica se um produto pode ser considerado saudável
 */
export function produtoSaudavel(produto: Produto): boolean {

  return (
    (produto.calorias ?? 0) <= 400 &&
    (produto.gordura ?? 0) <= 15 &&
    (produto.acucar ?? 0) <= 20
  )

}