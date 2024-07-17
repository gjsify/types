
import GnomeRR from './gnomerr-4.0.js';

declare global {
    export interface GjsGiImports {
        GnomeRR: typeof GnomeRR;
    }
}

export default GjsGiImports;


