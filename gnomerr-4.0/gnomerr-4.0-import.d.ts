import GnomeRR40 from '@girs/gnomerr-4.0';

declare global {
    export interface GjsGiImports {
        GnomeRR: typeof GnomeRR40;
    }
}

export default GjsGiImports;
