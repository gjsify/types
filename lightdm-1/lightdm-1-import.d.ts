
import LightDM1 from '@girs/lightdm-1';

declare global {
    export interface GjsGiImports {
        LightDM: typeof LightDM1;
    }
}

export default GjsGiImports;


