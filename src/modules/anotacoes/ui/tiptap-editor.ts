import { Editor } from '@tiptap/core';
import { Image } from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';

import { sanitizarHtmlConteudoUtilizador } from '../../../infra/sanitize.js';

export interface FabricaTipTapEditorResultado {
  destruir: () => void;
  obterHtmlSanitizado: () => string;
  definirConteudoHtml: (fragmentoHtml: string) => void;
  focarEditor: () => void;
  editor: Editor;
}

/**
 * TipTap Vanilla alinhado ao plano Papiro: StarterKit sem links externos, imagem só Base64 autorizado (+ sanitização na borda).
 */
export function fabricarTipTapEditor(
  elementoMontagem: HTMLElement,
  fragmentoInicialHtml: string,
): FabricaTipTapEditorResultado {
  const inicial = sanitizarHtmlConteudoUtilizador(
    fragmentoInicialHtml.trim() === '' ? '<p></p>' : fragmentoInicialHtml,
  );

  const editor = new Editor({
    element: elementoMontagem,
    injectCSS: true,
    editable: true,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        link: false,
      }),
      Image.configure({
        allowBase64: true,
        resize: false,
      }),
    ],
    content: inicial,
  });

  return {
    editor,
    destruir(): void {
      editor.destroy();
      elementoMontagem.replaceChildren();
    },
    obterHtmlSanitizado(): string {
      return sanitizarHtmlConteudoUtilizador(editor.getHTML());
    },
    definirConteudoHtml(fragmentoHtml: string): void {
      const limpo = sanitizarHtmlConteudoUtilizador(
        fragmentoHtml.trim() === '' ? '<p></p>' : fragmentoHtml,
      );
      editor.chain().focus().setContent(limpo, { emitUpdate: false }).run();
    },
    focarEditor(): void {
      editor.chain().focus('end').run();
    },
  };
}
