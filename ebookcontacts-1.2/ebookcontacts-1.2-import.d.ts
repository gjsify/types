
import EBookContacts from './ebookcontacts-1.2.js';

declare global {
    export interface GjsGiImports {
        EBookContacts: typeof EBookContacts;
    }
}

export default GjsGiImports;


