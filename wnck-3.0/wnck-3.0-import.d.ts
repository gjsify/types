
import Wnck from './wnck-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Wnck: typeof Wnck;
    }
}

export default GjsGiImports;


