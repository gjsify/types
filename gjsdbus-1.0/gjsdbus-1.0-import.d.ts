
import GjsDBus from './gjsdbus-1.0.js';

declare global {
    export interface GjsGiImports {
        GjsDBus: typeof GjsDBus;
    }
}

export default GjsGiImports;


