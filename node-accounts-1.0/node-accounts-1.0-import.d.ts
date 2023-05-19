
import Accounts10 from '@girs/accounts-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Accounts', ver?: '1.0'): typeof Accounts10;
    }
}

export default NodeGtkGi;

