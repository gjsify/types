
import GLibUnix from './glibunix-2.0.js';

declare global {
    export interface GjsGiImports {
        GLibUnix: typeof GLibUnix;
    }
}

export default GjsGiImports;


