
import Liferea from './liferea-3.0.js';

declare global {
    export interface GjsGiImports {
        Liferea: typeof Liferea;
    }
}

export default GjsGiImports;


