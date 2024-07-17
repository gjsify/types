
import FolksDummy from './folksdummy-0.7.js';

declare global {
    export interface GjsGiImports {
        FolksDummy: typeof FolksDummy;
    }
}

export default GjsGiImports;


