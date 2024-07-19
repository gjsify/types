import Parquet10 from '@girs/parquet-1.0';

declare global {
    export interface GjsGiImports {
        Parquet: typeof Parquet10;
    }
}

export default GjsGiImports;
