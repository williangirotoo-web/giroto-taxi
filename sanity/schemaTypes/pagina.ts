import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pagina',
  title: 'Páginas de Táxi',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título Principal',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'URL da Página',
      type: 'slug',
      options: { source: 'titulo' },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'metaTitulo',
      title: 'Meta Título (SEO)',
      type: 'string',
    }),
    defineField({
      name: 'metaDescricao',
      title: 'Meta Descrição (SEO)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'titulos',
      title: 'Títulos da Página (H2)',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(12)
    }),
    defineField({
      name: 'descricoes',
      title: 'Descrições (parágrafos longos)',
      type: 'array',
      of: [{ type: 'text' }],
      validation: Rule => Rule.max(12)
    }),
    defineField({
      name: 'faqs',
      title: 'Perguntas Frequentes',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'pergunta', title: 'Pergunta', type: 'string' },
          { name: 'resposta', title: 'Resposta', type: 'text' },
        ]
      }],
    }),
    defineField({
      name: 'linksRelacionados',
      title: 'Páginas Relacionadas (slugs)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'palavraChave',
      title: 'Palavra-chave Principal',
      type: 'string',
    }),
  ]
})
