
import Parquet from './parquet-1.0.js';

declare global {
    export interface GjsGiImports {
        Parquet: typeof Parquet;
    }
}

export default GjsGiImports;


