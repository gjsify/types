
import Nautilus from './nautilus-4.0.d.ts';

declare global {
    export interface GjsGiImports {
        Nautilus: typeof Nautilus;
    }
}

export default GjsGiImports;


