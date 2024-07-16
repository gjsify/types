
import Graphene from './graphene-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Graphene: typeof Graphene;
    }
}

export default GjsGiImports;


