import domnodeOptions from '../types/domnode.options'

export const validateDomnodeOptions = (options:domnodeOptions):'url'|'html'|'route'=>{
    let howManyHaveValue:number = 0
    let whichHaveValue:'url'|'route'|'html'
    if(options.url) {
        howManyHaveValue++
        whichHaveValue = 'url'
    } 
    if(options.route){
        howManyHaveValue++;
        whichHaveValue = 'route'
    } 
    if(options.html){
        howManyHaveValue++;
        whichHaveValue = 'html'
    }
    if(howManyHaveValue === 0) throw 'DomNode need the options parameters to work. It must to be an object with one of this three properties: url, html or route.'
    if(howManyHaveValue > 1) throw `DomNode's options parameters just accept one of this three properties: url, html or route.`
    return whichHaveValue
}

export const validateGetHtmlParameters = (inputType: 'url' | 'route'|'' = '', value:string = '')=>{
    if(!inputType || (inputType !== 'url' && inputType !== 'route' )) throw 'especifie which method getHtml will use: url or route'
    if(!value) throw 'especifie the route or url'
}



