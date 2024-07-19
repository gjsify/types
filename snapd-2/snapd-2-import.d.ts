import Snapd2 from '@girs/snapd-2';

declare global {
    export interface GjsGiImports {
        Snapd: typeof Snapd2;
    }
}

export default GjsGiImports;
