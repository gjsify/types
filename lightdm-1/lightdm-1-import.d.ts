
import LightDM from './lightdm-1.d.ts';

declare global {
    export interface GjsGiImports {
        LightDM: typeof LightDM;
    }
}

export default GjsGiImports;


