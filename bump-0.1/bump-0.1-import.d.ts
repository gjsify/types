
import Bump from './bump-0.1.js';

declare global {
    export interface GjsGiImports {
        Bump: typeof Bump;
    }
}

export default GjsGiImports;


