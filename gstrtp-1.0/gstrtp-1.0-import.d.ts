
import GstRtp from './gstrtp-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GstRtp: typeof GstRtp;
    }
}

export default GjsGiImports;


