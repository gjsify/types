
import GPasteGtk4 from '@girs/gpastegtk-4';

declare global {
    export interface GjsGiImports {
        GPasteGtk: typeof GPasteGtk4;
    }
}

export default GjsGiImports;


