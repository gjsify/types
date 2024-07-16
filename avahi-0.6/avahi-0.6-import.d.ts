
import Avahi from './avahi-0.6.d.ts';

declare global {
    export interface GjsGiImports {
        Avahi: typeof Avahi;
    }
}

export default GjsGiImports;


