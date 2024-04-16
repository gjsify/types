
import GMime30 from '@girs/gmime-3.0';


declare global {
    export interface GjsGiImports {
        GMime: typeof GMime30;
    }
}

export default GjsGiImports;


