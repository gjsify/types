import Poppler018 from '@girs/poppler-0.18';

declare global {
    export interface GjsGiImports {
        Poppler: typeof Poppler018;
    }
}

export default GjsGiImports;
