
import Sushi from './sushi-1.0.js';

declare global {
    export interface GjsGiImports {
        Sushi: typeof Sushi;
    }
}

export default GjsGiImports;


