
import AccountsService10 from '@girs/node-accountsservice-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'AccountsService', ver?: '1.0'): typeof AccountsService10;
    }
}

export default NodeGtkGi;

