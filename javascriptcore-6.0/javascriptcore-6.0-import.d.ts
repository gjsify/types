
import JavaScriptCore from './javascriptcore-6.0.d.ts';

declare global {
    export interface GjsGiImports {
        JavaScriptCore: typeof JavaScriptCore;
    }
}

export default GjsGiImports;


