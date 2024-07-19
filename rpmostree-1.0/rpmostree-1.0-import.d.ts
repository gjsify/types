import RpmOstree10 from '@girs/rpmostree-1.0';

declare global {
    export interface GjsGiImports {
        RpmOstree: typeof RpmOstree10;
    }
}

export default GjsGiImports;
