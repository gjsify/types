
import SecretUnstable0 from '@girs/secretunstable-0';

declare global {
    interface NodeGtkGi {
        require(ns: 'SecretUnstable', ver?: '0'): typeof SecretUnstable0;
    }
}

export default NodeGtkGi;

