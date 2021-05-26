import domnodeOptionsInterface from './types/domnode.options.interface'
import { validateDomnodeOptions } from './validators' 

const DomNode = (options:domnodeOptionsInterface = {})=>{
    validateDomnodeOptions(options)
    console.log('todo bien')
}

export default DomNode

