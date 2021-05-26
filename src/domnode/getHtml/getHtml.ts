import fs = require('fs')


import { validateGetHtmlParameters } from "../validators/validators"

const getHtmlWithRoute = (route:string):string=>{
    try {
        if(route.slice(route.length-5, route.length) !== '.html') route += '.html'
        const html = fs.readFileSync(route).toString()
        return html
    } catch (error) {
        console.error(error)
    }
}

const getHtmlWithUrl = (url:string):string=>{
    
    return url
}


const getHtml = (inputType: 'url' | 'route'|'' = '', value:string = ''):string=>{
    validateGetHtmlParameters(inputType, value)
    if(inputType === 'url') return getHtmlWithUrl(value)
    if(inputType === 'route') return getHtmlWithRoute(value)
}

export default getHtml