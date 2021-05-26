import domnodeOptionsInterface from '../types/domnode.options.interface'


export const validateDomnodeOptions = (options:domnodeOptionsInterface)=>{
    let howManyHaveValue:number = 0
    if(options.url) howManyHaveValue++;
    if(options.route) howManyHaveValue++;
    if(options.html) howManyHaveValue++;
    if(howManyHaveValue === 0) throw 'DomNode need the options parameters to work. It must to be an object with one of this three properties: url, html or route.'
    if(howManyHaveValue > 1) throw `DomNode's options parameters just accept one of this three properties: url, html or route.`  
}


