import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Giroto Táxi CMS',
  projectId: '6wak8duk',
  dataset: 'production',
  plugins: [
    structureTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
