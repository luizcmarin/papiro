import type { LocaleId } from '../../shared/ui/locale.js';

const PT = {
  tituloLista: 'Receitas',
  novaReceita: 'Nova receita',
  tituloPaginaDoc: 'Receita',
  termoBusca: 'Buscar',
  listaVazia: 'Nenhuma receita guardada.',
  editar: 'Abrir',
  apagar: 'Apagar',
  salvar: 'Guardar',
  voltar: 'Voltar à lista',
  tituloLabel: 'Título',
  categoriaLabel: 'Categoria',
  ingredientesLabel: 'Ingredientes',
  instrucoesLabel: 'Instruções',
  publicarLabel: 'Publicar (sincronização futura)',
  confirmarApagar: 'Apagar esta receita?',
  naoEncontrada: 'Receita não encontrada.',
  erroLista: 'Erro ao carregar receitas.',
  cancelarDialogo: 'Cancelar',
  semTitulo: '(sem título)',
  categoriaFallback: 'Geral',
} as const;

const EN = {
  tituloLista: 'Recipes',
  novaReceita: 'New recipe',
  tituloPaginaDoc: 'Recipe',
  termoBusca: 'Search',
  listaVazia: 'No saved recipes.',
  editar: 'Open',
  apagar: 'Delete',
  salvar: 'Save',
  voltar: 'Back to list',
  tituloLabel: 'Title',
  categoriaLabel: 'Category',
  ingredientesLabel: 'Ingredients',
  instrucoesLabel: 'Instructions',
  publicarLabel: 'Publish (future sync)',
  confirmarApagar: 'Delete this recipe?',
  naoEncontrada: 'Recipe not found.',
  erroLista: 'Could not load recipes.',
  cancelarDialogo: 'Cancel',
  semTitulo: '(untitled)',
  categoriaFallback: 'General',
} as const;

export type TextosReceitas = typeof PT;

export function obterTextosReceitas(locale: LocaleId): TextosReceitas {
  return (locale === 'en' ? EN : PT) as TextosReceitas;
}
