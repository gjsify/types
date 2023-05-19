
import Gladeui20 from '@girs/gladeui-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gladeui', ver?: '2.0'): typeof Gladeui20;
    }
}

export default NodeGtkGi;

