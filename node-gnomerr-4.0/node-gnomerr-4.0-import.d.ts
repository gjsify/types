
import GnomeRR40 from '@girs/gnomerr-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GnomeRR', ver?: '4.0'): typeof GnomeRR40;
    }
}

export default NodeGtkGi;

