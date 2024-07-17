
import Template from './template-1.0.js';

declare global {
    export interface GjsGiImports {
        Template: typeof Template;
    }
}

export default GjsGiImports;


