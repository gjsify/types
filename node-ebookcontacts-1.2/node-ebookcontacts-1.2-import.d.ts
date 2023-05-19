
import EBookContacts12 from '@girs/ebookcontacts-1.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'EBookContacts', ver?: '1.2'): typeof EBookContacts12;
    }
}

export default NodeGtkGi;

