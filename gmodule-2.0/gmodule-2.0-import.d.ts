
import GModule from './gmodule-2.0.js';

declare global {
    export interface GjsGiImports {
        GModule: typeof GModule;
    }
}

export default GjsGiImports;


