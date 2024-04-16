
import UDisks20 from '@girs/udisks-2.0';


declare global {
    export interface GjsGiImports {
        UDisks: typeof UDisks20;
    }
}

export default GjsGiImports;


