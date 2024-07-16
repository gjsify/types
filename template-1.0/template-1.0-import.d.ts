
import Template from './template-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Template: typeof Template;
    }
}

export default GjsGiImports;


