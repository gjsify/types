
import GPasteGtk from './gpastegtk-4.js';

declare global {
    export interface GjsGiImports {
        GPasteGtk: typeof GPasteGtk;
    }
}

export default GjsGiImports;


