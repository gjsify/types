
import Wnck from './wnck-3.0.js';

declare global {
    export interface GjsGiImports {
        Wnck: typeof Wnck;
    }
}

export default GjsGiImports;


