import Jcat10 from '@girs/jcat-1.0';

declare global {
    export interface GjsGiImports {
        Jcat: typeof Jcat10;
    }
}

export default GjsGiImports;
