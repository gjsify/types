
import Dbusmenu04 from '@girs/dbusmenu-0.4';

declare global {
    interface NodeGtkGi {
        require(ns: 'Dbusmenu', ver?: '0.4'): typeof Dbusmenu04;
    }
}

export default NodeGtkGi;

