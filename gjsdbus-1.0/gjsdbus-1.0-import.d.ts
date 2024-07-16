
import GjsDBus from './gjsdbus-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GjsDBus: typeof GjsDBus;
    }
}

export default GjsGiImports;


