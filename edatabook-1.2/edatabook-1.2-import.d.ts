
import EDataBook from './edatabook-1.2.js';

declare global {
    export interface GjsGiImports {
        EDataBook: typeof EDataBook;
    }
}

export default GjsGiImports;


