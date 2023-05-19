
import Gsf1 from '@girs/gsf-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gsf', ver?: '1'): typeof Gsf1;
    }
}

export default NodeGtkGi;

