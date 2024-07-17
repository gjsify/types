
import GstInterfaces from './gstinterfaces-0.10.js';

declare global {
    export interface GjsGiImports {
        GstInterfaces: typeof GstInterfaces;
    }
}

export default GjsGiImports;


