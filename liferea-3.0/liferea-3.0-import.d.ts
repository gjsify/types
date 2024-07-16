
import Liferea from './liferea-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Liferea: typeof Liferea;
    }
}

export default GjsGiImports;


