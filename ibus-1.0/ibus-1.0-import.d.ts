
import IBus from './ibus-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        IBus: typeof IBus;
    }
}

export default GjsGiImports;


