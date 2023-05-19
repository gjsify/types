
import Pnl10 from '@girs/pnl-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Pnl', ver?: '1.0'): typeof Pnl10;
    }
}

export default NodeGtkGi;

