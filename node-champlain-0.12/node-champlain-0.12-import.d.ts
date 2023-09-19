
import Champlain012 from '@girs/node-champlain-0.12';

declare global {
    interface NodeGtkGi {
        require(ns: 'Champlain', ver?: '0.12'): typeof Champlain012;
    }
}

export default NodeGtkGi;

