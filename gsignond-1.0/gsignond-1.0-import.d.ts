
import GSignond from './gsignond-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GSignond: typeof GSignond;
    }
}

export default GjsGiImports;


