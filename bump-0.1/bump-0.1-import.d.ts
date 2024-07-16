
import Bump from './bump-0.1.d.ts';

declare global {
    export interface GjsGiImports {
        Bump: typeof Bump;
    }
}

export default GjsGiImports;


