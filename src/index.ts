import DomNode from './domnode'
import path = require('path')

const document = DomNode.createNewDocumentHtml({route: path.join(__dirname, './html/index')})

console.log(document)