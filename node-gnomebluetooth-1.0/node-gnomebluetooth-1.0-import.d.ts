
import GnomeBluetooth10 from '@girs/gnomebluetooth-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GnomeBluetooth', ver?: '1.0'): typeof GnomeBluetooth10;
    }
}

export default NodeGtkGi;

