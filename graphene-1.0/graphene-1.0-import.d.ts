import Graphene10 from '@girs/graphene-1.0';

declare global {
    export interface GjsGiImports {
        Graphene: typeof Graphene10;
    }
}

export default GjsGiImports;
