import { boot } from 'quasar/wrappers'
import JsonApiViewer from 'quasar-ui-json-api-viewer/src/components/JsonApiViewer'
import MarkdownPage from '../components/MarkdownPage.vue'
import MarkdownLink from '../components/MarkdownLink.vue'
import ExampleViewer, { setDefaults } from 'quasar-ui-example-viewer/src'
import pkg from '@quasar/quasar-ui-qactivity/package.json'
const { version } = pkg


setDefaults({
  locationUrl: 'https://github.com/quasarframework/quasar-ui-qactivity/tree/main/docs/src/examples',
  jsPaths: [`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qactivity@${ version }/dist/index.umd.min.js`],
  cssPaths: [
    `https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qactivity@${ version }/dist/index.min.css`,
    'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css'
  ],
  noEdit: true
})

export default boot(({ app }) => {

  app.use(ExampleViewer)
  app.component('JsonApiViewer', JsonApiViewer)
  app.component('MarkdownPage', MarkdownPage)
  app.component('MarkdownLink', MarkdownLink)

  if (process.env.DEV) {
    const QActivity = require('@quasar/quasar-ui-qactivity')
    app.use(QActivity)
  }

})
