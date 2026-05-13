# Guia do Usuário — Papiro

Fluxos por módulo e experiência pretendida. Visão geral, princípios e primeiro acesso: [README — Sobre o produto](./README.md#sobre-o-produto). Arquitetura e stack: [DOCUMENTACAO.md](./DOCUMENTACAO.md).

## Navegação global

O menu lateral concentra os módulos principais:

- Dashboard
- Anotações
- Estudo
- Ministério
- Financeiro
- Metas
- Receitas
- Preparação
- Guias de preparação
- Cofre
- Quiz
- Poesia
- Perfil e ficha ICE
- QR Code
- Configurações

A navegação deve manter ações rápidas para voltar ao Dashboard, abrir a ficha ICE quando disponível e acessar o QR Code do perfil.

## Dashboard

O Dashboard é a central de comando do Papiro. Ele deve reunir indicadores leves e acionáveis, sem duplicar telas completas de cada módulo.

Indicadores úteis:

- Anotações ativas.
- Receitas disponíveis.
- Resultado financeiro do mês.
- Metas abertas e concluídas.
- Sessões de estudo concluídas.
- Progresso do ministério no relatório mais recente.
- Índice de prontidão, calculado a partir de hábitos, conhecimento, recursos e finanças.

Ações rápidas recomendadas:

- Abrir ficha médica ICE.
- Abrir QR Code do perfil.
- Ir para estudo, preparação, anotações ou ministério.
- Exibir alerta DPA quando a ficha médica indicar recusa de transfusão.

## Anotações

Anotações são o espaço de captura e organização de conhecimento. O editor usa conteúdo rich text seguro, com HTML sanitizado antes de renderizar fora do editor.

Funcionalidades:

- Criar, editar, arquivar, fixar e apagar anotações.
- Organizar por pastas.
- Filtrar por título, etiqueta e modelo.
- Usar etiquetas para conectar notas a temas recorrentes.
- Inserir imagens inline somente nos formatos autorizados pelo contrato do app.
- Usar modo apresentação para leitura em tela cheia, com foco e rolagem controlada.

Modelos úteis:

- Livre.
- Vida e Ministério.
- Discurso público.
- Designação.
- Visita de pastoreio.
- Assembleia.
- Visita de circuito.
- Reflexão pessoal.

O botão “Ir para a Reunião” pode sugerir o modelo adequado conforme o dia da semana.

## Estudo

O módulo de Estudo é um timer de foco para estudo bíblico e meditação.

Fluxo recomendado:

1. Escolher assunto de estudo.
2. Confirmar preparação espiritual antes do foco.
3. Iniciar ciclo de foco.
4. Fazer pausa curta ou longa conforme a sequência.
5. Registrar uma nota de meditação ao fim do foco.
6. Salvar a “pérola” também como anotação quando houver conteúdo relevante.

Configurações úteis:

- Foco de 5 a 90 minutos.
- Pausa curta de 1 a 30 minutos.
- Pausa longa de 5 a 60 minutos.
- Histórico de sessões.
- Conquistas por consistência e volume de estudo.

## Ministério

O módulo de Ministério ajuda a preparar e acompanhar o relatório mensal.

Dados do relatório:

- Mês e ano.
- Ano de serviço.
- Horas.
- Estudos bíblicos.
- Participação.
- Tipo de publicador.
- Meta de horas.
- Notas de publicações.
- Nome e telefone do dirigente.

Melhorias planejadas:

- Atalhos para adicionar ou remover 15 minutos e 1 hora.
- Cálculo do ano de serviço, de setembro a agosto.
- Meta padrão por tipo de publicador.
- Texto pronto para compartilhamento.
- Link de WhatsApp quando houver telefone cadastrado.
- Sugestões de revisita para estudos sem contato recente.

## Financeiro

O módulo Financeiro registra receitas, despesas e categorias. Ele não substitui um banco, mas dá uma visão local e privada dos recursos.

Funcionalidades:

- Cadastrar receitas e despesas.
- Classificar por categoria.
- Controlar vencimento e pagamento.
- Definir limite mensal por categoria.
- Ver saldo, receitas e despesas.
- Visualizar gráficos por categoria e mês.
- Ocultar valores no resumo quando a privacidade visual for importante.

Indicadores úteis:

- Despesas por categoria.
- Barras mensais de receita e despesa.
- Alertas quando uma categoria ultrapassa o limite.
- Dias estimados de sobrevivência financeira com base no saldo e média de despesas.

## Metas

Metas seguem a ideia de objetivos mensuráveis. Cada meta registra título, categoria, ativo associado, prazo e progresso.

Categorias úteis:

- Financeiro: saldo, gastos e categorias específicas.
- Ministério: horas, estudos e revisitas.
- Estudo: minutos de foco e sessões concluídas.
- Quiz: perguntas respondidas.
- Poesia: poesias lidas.
- Preparação: kits e estoque.
- Manual: progresso informado pelo usuário.

Quando uma meta depender de outro módulo, o progresso pode ser atualizado automaticamente por consultas SQLite. Estado persistente relevante deve morar no banco local, para entrar em backup e indicadores.

## Preparação

Preparação reúne recursos para emergências, organização doméstica e prontidão.

Subáreas:

- Kits de checklist.
- Estoque de alimentos.
- Calculadora de calorias e água.
- Guias offline.
- Cofre de documentos.
- Ficha médica ICE.
- Conteúdo de OPSEC, sinais, Morse e referências rápidas como guias.

Índice de prontidão:

- Checklists: 40%.
- Alimentos: 30%.
- Documentos: 20%.
- Saúde: 10%.

O índice deve ser uma orientação prática, não uma promessa de segurança.

## Cofre de documentos

O cofre deve armazenar documentos sensíveis de forma criptografada.

Fluxo planejado:

1. Escolher arquivo ou registrar conteúdo.
2. Informar título e tipo.
3. Criptografar com Web Crypto antes de salvar.
4. Guardar apenas o blob criptografado no SQLite.
5. Exigir senha/PIN de sessão para descriptografar.

O cofre não deve ser sincronizado automaticamente. Documentos pessoais permanecem locais.

## Perfil, ICE e DPA

O Perfil concentra contato, ficha médica e dados úteis para ministério.

Dados de contato:

- Nome.
- Telefone.
- E-mail.
- Link.
- Comentário para o cartão digital.

Dados de apoio:

- Nome e telefone do secretário.
- Contato de emergência.
- Nome e telefone da COLIH.

Ficha ICE:

- Tipo sanguíneo.
- Alergias.
- Medicamentos em uso.
- Observações médicas.
- Recusa de transfusão.
- Frações aceitas.
- Referência ao scan DPA, quando houver.

Quando a recusa de transfusão estiver ativa, o app deve destacar “NÃO APLIQUE SANGUE” nos pontos de emergência com alto contraste e acessibilidade.

## QR Code

O módulo de QR Code gera códigos offline.

Modos úteis:

- Entrada manual de qualquer texto.
- vCard a partir do perfil.
- Link WhatsApp a partir do telefone.

O vCard pode incluir nome, telefone, e-mail, site/link, WhatsApp e comentário. O QR pode ser baixado como SVG ou PNG.

## Quiz

O Quiz transforma perguntas bíblicas em estudo interativo.

Funcionalidades desejadas:

- Modo Estudo, sem timer.
- Modo Desafio, com timer por dificuldade.
- Perguntas de múltipla escolha.
- Referência exibida após a resposta.
- XP por dificuldade.
- Multiplicador por sequência.
- Dica com custo de XP.
- Conquistas e mensagens motivacionais.

Progresso, favoritos e histórico devem ser persistidos no SQLite quando se tornarem parte estável do produto.

## Jogo da memória

O Jogo da Memória é uma atividade leve dentro do módulo de jogo.

Funcionalidades:

- Dificuldades com número diferente de pares.
- Registro de movimentos.
- Cronômetro.
- Recordes por dificuldade em SQLite.

## Poesia

Poesia é um espaço de leitura imersiva e pausa reflexiva.

Funcionalidades:

- Lista de poesias.
- Leitura em tela confortável.
- Navegação anterior/próxima quando os campos do acervo estiverem preenchidos.
- Progresso de leitura.
- Conteúdo disponível offline após estar na base local.

Progresso de leitura que alimentar Dashboard ou backup deve ser persistido em SQLite quando aprovado no contrato de dados.

## Receitas

Receitas funcionam como livro culinário offline.

Funcionalidades:

- Listar, criar, editar e apagar receitas.
- Filtrar por categoria.
- Buscar por título.
- Registrar ingredientes e instruções.
- Diferenciar receitas locais de receitas com `id_remoto` quando a sincronização futura estiver ativa.

Receitas remotas podem servir como base de consulta ou como origem para cópia local editável.

## Admin e curadoria

Admin não é uma funcionalidade do usuário comum. É uma ferramenta privada do marin para curadoria de conteúdo.

Objetivos:

- Criar e revisar perguntas.
- Manter poesias.
- Manter conquistas e mensagens.
- Manter guias.
- Manter receitas públicas.
- Manter kits públicos.
- Exportar JSONs que alimentarão o repositório GitHub de conteúdo.

O usuário comum apenas consome esses dados no app local quando a sincronização for implementada.

## Sincronização futura

A sincronização será uma etapa futura.

Direção planejada:

- Baixar conteúdos públicos de um repositório estático.
- Usar manifesto com versões por módulo.
- Fazer upsert idempotente.
- Usar `id_remoto` como identidade remota.
- Nunca usar `e_nuvem`.
- Não enviar dados privados do usuário.

Conteúdos candidatos:

- Perguntas.
- Poesias.
- Conquistas.
- Mensagens motivacionais.
- Receitas públicas.
- Kits.
- Guias.

## Backup, restauração e pânico total

Backup deve permitir portabilidade sem expor dados.

Formato planejado:

- Arquivo `.papiro`.
- Pacote JSON versionado.
- Linhas SQLite serializadas por tabela.
- BLOBs codificados de forma segura.
- Criptografia AES-GCM com chave derivada por PBKDF2.
- Salt e IV aleatórios por backup.

Restauração:

- Validar versão e formato.
- Validar tabelas contra o contrato atual.
- Recriar dados em transação.
- Informar erros de senha, formato ou integridade de forma clara.

Pânico total:

- Exigir confirmação digitada `APAGAR`.
- Remover dados locais do SQLite e preferências locais.
- Não oferecer desfazer.
- Recomendar backup antes da ação.

## Configurações

Configurações concentram preferências do app.

Itens atuais e planejados:

- Tema e aparência.
- Idioma.
- Tamanho de fonte.
- Preferências de privacidade visual.
- PIN/senha quando o cofre e backup criptografado estiverem implementados.
- Informações sobre versão, PWA e armazenamento local.

## Limites importantes

- Ocultar UI não é criptografia.
- PIN de interface não protege dados em repouso.
- Recursos de navegador variam entre sistemas e versões.
- TTS, fullscreen e instalação PWA dependem do suporte do browser.
- Conteúdo remoto público não deve carregar dados privados do usuário.

