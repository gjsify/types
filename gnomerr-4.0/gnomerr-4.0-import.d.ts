
import GnomeRR from './gnomerr-4.0.d.ts';

declare global {
    export interface GjsGiImports {
        GnomeRR: typeof GnomeRR;
    }
}

export default GjsGiImports;


