import Gepub07 from '@girs/gepub-0.7';

declare global {
    export interface GjsGiImports {
        Gepub: typeof Gepub07;
    }
}

export default GjsGiImports;
