
import GModule from './gmodule-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        GModule: typeof GModule;
    }
}

export default GjsGiImports;


