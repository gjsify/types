import type Parquet230 from '@girs/parquet-23.0';

declare global {
    export interface GjsGiImports {
        Parquet: typeof Parquet230;
    }
}

export default GjsGiImports;
