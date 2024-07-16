
import UDisks from './udisks-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        UDisks: typeof UDisks;
    }
}

export default GjsGiImports;


