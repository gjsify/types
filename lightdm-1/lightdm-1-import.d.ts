
import LightDM from './lightdm-1.js';

declare global {
    export interface GjsGiImports {
        LightDM: typeof LightDM;
    }
}

export default GjsGiImports;


