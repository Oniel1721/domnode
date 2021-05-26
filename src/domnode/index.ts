import DocumentHtml from './documentHtml/documentHtml'
import getHtml from './getHtml/getHtml'
import domnodeOptions from './types/domnode.options'
import { validateDomnodeOptions } from './validators/validators' 


class DomNode{
    constructor(){}
    static createNewDocumentHtml(options:domnodeOptions = {}):DocumentHtml{
        const inputType = validateDomnodeOptions(options)
        let html:string = ''
        if(inputType !== 'html') html = getHtml(inputType, options[inputType])
        else html = options.html
        return new DocumentHtml(html)
    }
}



export default DomNode

