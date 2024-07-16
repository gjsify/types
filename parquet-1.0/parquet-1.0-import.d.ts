
import Parquet from './parquet-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Parquet: typeof Parquet;
    }
}

export default GjsGiImports;


