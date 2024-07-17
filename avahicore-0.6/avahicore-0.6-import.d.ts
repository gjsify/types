
import AvahiCore from './avahicore-0.6.js';

declare global {
    export interface GjsGiImports {
        AvahiCore: typeof AvahiCore;
    }
}

export default GjsGiImports;


