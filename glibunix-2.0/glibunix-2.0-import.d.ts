
import GLibUnix from './glibunix-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        GLibUnix: typeof GLibUnix;
    }
}

export default GjsGiImports;


