import EBackend12 from '@girs/ebackend-1.2';

declare global {
    export interface GjsGiImports {
        EBackend: typeof EBackend12;
    }
}

export default GjsGiImports;
