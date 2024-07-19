import Mx20 from '@girs/mx-2.0';

declare global {
    export interface GjsGiImports {
        Mx: typeof Mx20;
    }
}

export default GjsGiImports;
