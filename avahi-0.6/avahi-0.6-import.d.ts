
import Avahi from './avahi-0.6.js';

declare global {
    export interface GjsGiImports {
        Avahi: typeof Avahi;
    }
}

export default GjsGiImports;


