
import Graphene10 from '@girs/node-graphene-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Graphene', ver?: '1.0'): typeof Graphene10;
    }
}

export default NodeGtkGi;

