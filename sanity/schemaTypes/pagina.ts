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
      title: '6 Títulos da Página',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(6)
    }),
    defineField({
      name: 'descricoes',
      title: '6 Descrições (200-400 letras)',
      type: 'array',
      of: [{ type: 'text' }],
      validation: Rule => Rule.max(6)
    }),
    defineField({
      name: 'palavraChave',
      title: 'Palavra-chave Principal',
      type: 'string',
    }),
  ]
})
