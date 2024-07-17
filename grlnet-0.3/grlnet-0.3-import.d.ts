
import GrlNet from './grlnet-0.3.js';

declare global {
    export interface GjsGiImports {
        GrlNet: typeof GrlNet;
    }
}

export default GjsGiImports;


