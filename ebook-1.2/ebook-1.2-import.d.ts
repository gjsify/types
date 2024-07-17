
import EBook from './ebook-1.2.js';

declare global {
    export interface GjsGiImports {
        EBook: typeof EBook;
    }
}

export default GjsGiImports;


