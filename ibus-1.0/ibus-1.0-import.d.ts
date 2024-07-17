
import IBus from './ibus-1.0.js';

declare global {
    export interface GjsGiImports {
        IBus: typeof IBus;
    }
}

export default GjsGiImports;


