// The widget vocabulary of GXml-0.18 as runtime data.
//
// GENERATED — do not edit. Provenance: GXml-0.18 — dropped empty base(s): Gee.MapIterator Gee.Iterator Gee.BidirIterator Gee.ListIterator Gee.BidirListIterator — inlined base(s) their owner's vocabulary does not emit: Gee.MapEntry — prop(s) no TypeScript value satisfies: Gee.MapEntry.value
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GXml',
    version: '0.18',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Gee.MapIterator', 'Gee.Iterator', 'Gee.BidirIterator', 'Gee.ListIterator', 'Gee.BidirListIterator'],
    inlinedBases: ['Gee.MapEntry'],
    unsettableProps: ['Gee.MapEntry.value'],
    unresolvedProps: [],
    identifierPrefixes: [],
    requiredVocabularies: ['@girs/gee-0.8/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GXmlAttribute: ['namespace'],
    GXmlCharacter: ['str'],
    GXmlCollection: ['element', 'items-type'],
    GXmlComment: ['str'],
    GXmlCssSelectorData: ['data', 'selector-type', 'value'],
    GXmlDocument: ['backup', 'file', 'indent', 'ns-top', 'prefix-default-ns'],
    GXmlDomAttr: ['value'],
    GXmlDomCharacterData: ['data'],
    GXmlDomCustomEventInit: ['detail'],
    GXmlDomElement: ['class-name', 'id'],
    GXmlDomEventInit: ['bubbles', 'cancelable'],
    GXmlDomMutationObserverInit: ['attribute-filter', 'attribute-old-value', 'attributes', 'character-data', 'character-data-old-value', 'child-list', 'subtree'],
    GXmlDomNode: ['node-value', 'owner-document', 'text-content'],
    GXmlDomSettableTokenList: ['value'],
    GXmlDomTimeStamp: ['time'],
    GXmlElement: ['content'],
    GXmlGNode: ['value'],
    GXmlGomBaseProperty: ['value'],
    GXmlGomDateTime: ['format'],
    GXmlGomDouble: ['decimals'],
    GXmlGomElement: ['parse-children', 'unparsed'],
    GXmlGomEnum: ['enum-type'],
    GXmlGomProperty: ['value'],
    GXmlGomXsdArrayString: ['simple-type', 'source'],
    GXmlGomXsdBaseAttribute: ['anotation'],
    GXmlGomXsdBaseContent: ['anotation'],
    GXmlGomXsdBaseType: ['anotation'],
    GXmlGomXsdComplexType: ['abstract', 'block', 'content-type', 'default-attributes-apply', 'final', 'mixed', 'name'],
    GXmlGomXsdElement: ['abstract', 'anotation', 'block', 'complex-type', 'default', 'final', 'fixed', 'form', 'max-occurs', 'min-occurs', 'name', 'nillable', 'object-type', 'ref', 'simple-type', 'substitution-group', 'target-namespace'],
    GXmlGomXsdExtension: ['base'],
    GXmlGomXsdSchema: ['complex-type-definitions', 'element-definitions', 'simple-type-definitions'],
    GXmlGomXsdSimpleType: ['annotation', 'final', 'list', 'name', 'restriction', 'union'],
    GXmlGomXsdTypeDefinition: ['annotation'],
    GXmlGomXsdTypeRestriction: ['base', 'enumerations', 'simple-type', 'white-spaces'],
    GXmlGomXsdTypeRestrictionDef: ['annotation'],
    GXmlGomXsdTypeRestrictionEnumeration: ['value'],
    GXmlGomXsdTypeRestrictionWhiteSpace: ['fixed', 'value'],
    GXmlMap: ['attribute-key'],
    GXmlNode: ['value'],
    GXmlPairedMap: ['attribute-primary-key', 'attribute-secondary-key'],
    GXmlParser: ['backup', 'indent'],
    GXmlProcessingInstruction: ['data'],
    GXmlSerializable: ['serialized-xml-node-value'],
    GXmlSerializableArrayList: ['ignored-serializable-properties'],
    GXmlSerializableDualKeyMap: ['ignored-serializable-properties'],
    GXmlSerializableHashMap: ['ignored-serializable-properties'],
    GXmlSerializableTreeMap: ['ignored-serializable-properties'],
    GXmlTNode: ['value'],
    GXmlText: ['str'],
    GXmlThreeMap: ['attribute-primary-key', 'attribute-secondary-key', 'attribute-third-key'],
    GeeMapEntry: ['k-destroy-func', 'k-dup-func', 'k-type', 'v-destroy-func', 'v-dup-func', 'v-type', 'value'],
};

export const OWN_SIGNALS = {
    GXmlSerializable: ['deserialize-unknown-property', 'deserialize-unknown-property-type', 'serialize-unknown-property', 'serialize-unknown-property-type'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GXmlCssSelectorData: ['GXmlCssSelectorData', 'GObject'],
    GXmlCssSelectorParser: ['GXmlCssSelectorParser', 'GObject'],
    GXmlDomCustomEventInit: ['GXmlDomCustomEventInit', 'GXmlDomEventInit', 'GObject'],
    GXmlDomElementList: ['GXmlDomElementList', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomHTMLCollection', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlDomErrorName: ['GXmlDomErrorName', 'GObject'],
    GXmlDomEventInit: ['GXmlDomEventInit', 'GObject'],
    GXmlDomMutationObserverInit: ['GXmlDomMutationObserverInit', 'GObject'],
    GXmlDomNodeFilter: ['GXmlDomNodeFilter', 'GObject'],
    GXmlDomTimeStamp: ['GXmlDomTimeStamp', 'GObject'],
    GXmlElementList: ['GXmlElementList', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomHTMLCollection', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlGAttribute: ['GXmlGAttribute', 'GXmlGNode', 'GObject', 'GXmlAttribute', 'GXmlDomAttr', 'GXmlDomEventTarget', 'GXmlDomNode', 'GXmlNode'],
    GXmlGCDATA: ['GXmlGCDATA', 'GXmlGNode', 'GObject', 'GXmlCDATA', 'GXmlDomEventTarget', 'GXmlDomNode', 'GXmlNode'],
    GXmlGCharacterData: ['GXmlGCharacterData', 'GXmlGNonDocumentChildNode', 'GXmlGChildNode', 'GXmlGNode', 'GObject', 'GXmlCharacter', 'GXmlDomCharacterData', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode', 'GXmlNode'],
    GXmlGChildNode: ['GXmlGChildNode', 'GXmlGNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode', 'GXmlNode'],
    GXmlGComment: ['GXmlGComment', 'GXmlGCharacterData', 'GXmlGNonDocumentChildNode', 'GXmlGChildNode', 'GXmlGNode', 'GObject', 'GXmlComment', 'GXmlDomComment', 'GXmlCharacter', 'GXmlDomCharacterData', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode', 'GXmlNode'],
    GXmlGDocument: ['GXmlGDocument', 'GXmlGNode', 'GObject', 'GXmlDocument', 'GXmlDomParentNode', 'GXmlDomNonElementParentNode', 'GXmlDomDocument', 'GXmlDomXMLDocument', 'GXmlXPathContext', 'GXmlDomEventTarget', 'GXmlDomNode', 'GXmlNode'],
    GXmlGDocumentFragment: ['GXmlGDocumentFragment', 'GXmlGDocument', 'GXmlGNode', 'GObject', 'GXmlDomDocumentFragment', 'GXmlDocument', 'GXmlDomParentNode', 'GXmlDomNonElementParentNode', 'GXmlDomDocument', 'GXmlDomXMLDocument', 'GXmlXPathContext', 'GXmlDomEventTarget', 'GXmlDomNode', 'GXmlNode'],
    GXmlGDocumentType: ['GXmlGDocumentType', 'GXmlGChildNode', 'GXmlGNode', 'GObject', 'GXmlDomNode', 'GXmlDomChildNode', 'GXmlDomDocumentType', 'GXmlDomEventTarget', 'GXmlNode'],
    GXmlGDomCustomEvent: ['GXmlGDomCustomEvent', 'GXmlGDomEvent', 'GObject', 'GXmlDomEvent'],
    GXmlGDomEvent: ['GXmlGDomEvent', 'GObject', 'GXmlDomEvent'],
    GXmlGDomHTMLCollection: ['GXmlGDomHTMLCollection', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomHTMLCollection', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlGDomNodeIterator: ['GXmlGDomNodeIterator', 'GObject', 'GXmlDomNodeIterator'],
    GXmlGDomRange: ['GXmlGDomRange', 'GObject', 'GXmlDomRange'],
    GXmlGDomSettableTokenList: ['GXmlGDomSettableTokenList', 'GXmlGDomTokenList', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomSettableTokenList', 'GXmlDomTokenList', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlGDomTokenList: ['GXmlGDomTokenList', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomTokenList', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlGDomTreeWalker: ['GXmlGDomTreeWalker', 'GObject', 'GXmlDomTreeWalker'],
    GXmlGElement: ['GXmlGElement', 'GXmlGNonDocumentChildNode', 'GXmlGChildNode', 'GXmlGNode', 'GObject', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlElement', 'GXmlXPathContext', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode', 'GXmlNode'],
    GXmlGHashMapAttr: ['GXmlGHashMapAttr', 'GeeAbstractMap', 'GObject', 'GXmlDomNamedNodeMap', 'GeeTraversable', 'GeeIterable', 'GeeMap'],
    GXmlGHashMapAttrEntry: ['GXmlGHashMapAttrEntry', 'GeeMapEntry', 'GObject'],
    GXmlGHashMapAttrIterator: ['GXmlGHashMapAttrIterator', 'GObject'],
    GXmlGHtmlDocument: ['GXmlGHtmlDocument', 'GXmlGDocument', 'GXmlGNode', 'GObject', 'GXmlDomHtmlDocument', 'GXmlDocument', 'GXmlDomParentNode', 'GXmlDomNonElementParentNode', 'GXmlDomDocument', 'GXmlDomXMLDocument', 'GXmlXPathContext', 'GXmlDomEventTarget', 'GXmlDomNode', 'GXmlNode'],
    GXmlGImplementation: ['GXmlGImplementation', 'GObject', 'GXmlDomImplementation'],
    GXmlGListChildren: ['GXmlGListChildren', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomNodeList', 'GXmlDomHTMLCollection', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlGListChildrenIterator: ['GXmlGListChildrenIterator', 'GObject', 'GeeTraversable'],
    GXmlGListNamespaces: ['GXmlGListNamespaces', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlGListNamespacesIterator: ['GXmlGListNamespacesIterator', 'GObject', 'GeeTraversable'],
    GXmlGNamespace: ['GXmlGNamespace', 'GObject', 'GXmlNamespace'],
    GXmlGNonDocumentChildNode: ['GXmlGNonDocumentChildNode', 'GXmlGChildNode', 'GXmlGNode', 'GObject', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode', 'GXmlNode'],
    GXmlGProcessingInstruction: ['GXmlGProcessingInstruction', 'GXmlGCharacterData', 'GXmlGNonDocumentChildNode', 'GXmlGChildNode', 'GXmlGNode', 'GObject', 'GXmlProcessingInstruction', 'GXmlDomProcessingInstruction', 'GXmlCharacter', 'GXmlDomCharacterData', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode', 'GXmlNode'],
    GXmlGText: ['GXmlGText', 'GXmlGCharacterData', 'GXmlGNonDocumentChildNode', 'GXmlGChildNode', 'GXmlGNode', 'GObject', 'GXmlText', 'GXmlDomText', 'GXmlCharacter', 'GXmlDomCharacterData', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode', 'GXmlNode'],
    GXmlGXPathObject: ['GXmlGXPathObject', 'GObject', 'GXmlXPathObject'],
    GXmlGomArrayList: ['GXmlGomArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlGomArrayString: ['GXmlGomArrayString', 'GXmlGomBaseProperty', 'GObject', 'GXmlGomProperty'],
    GXmlGomAttr: ['GXmlGomAttr', 'GXmlGomNode', 'GObject', 'GXmlDomAttr', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomBoolean: ['GXmlGomBoolean', 'GXmlGomBaseProperty', 'GObject', 'GXmlGomProperty'],
    GXmlGomCharacterData: ['GXmlGomCharacterData', 'GXmlGomNode', 'GObject', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomCharacterData', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomComment: ['GXmlGomComment', 'GXmlGomCharacterData', 'GXmlGomNode', 'GObject', 'GXmlDomComment', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomCharacterData', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomDate: ['GXmlGomDate', 'GXmlGomBaseProperty', 'GObject', 'GXmlGomProperty'],
    GXmlGomDateTime: ['GXmlGomDateTime', 'GXmlGomBaseProperty', 'GObject', 'GXmlGomProperty'],
    GXmlGomDocument: ['GXmlGomDocument', 'GXmlGomNode', 'GObject', 'GXmlDomParentNode', 'GXmlDomNonElementParentNode', 'GXmlDomDocument', 'GXmlDomXMLDocument', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomDocumentFragment: ['GXmlGomDocumentFragment', 'GXmlGomNode', 'GObject', 'GXmlDomParentNode', 'GXmlDomNonElementParentNode', 'GXmlDomDocumentFragment', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomDocumentType: ['GXmlGomDocumentType', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomDocumentType', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomDouble: ['GXmlGomDouble', 'GXmlGomBaseProperty', 'GObject', 'GXmlGomProperty'],
    GXmlGomElement: ['GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomElementAttributes: ['GXmlGomElementAttributes', 'GeeHashMap', 'GeeAbstractMap', 'GObject', 'GXmlDomNamedNodeMap', 'GeeTraversable', 'GeeIterable', 'GeeMap'],
    GXmlGomEnum: ['GXmlGomEnum', 'GXmlGomBaseProperty', 'GObject', 'GXmlGomProperty'],
    GXmlGomFloat: ['GXmlGomFloat', 'GXmlGomDouble', 'GXmlGomBaseProperty', 'GObject', 'GXmlGomProperty'],
    GXmlGomHashMap: ['GXmlGomHashMap', 'GXmlBaseCollection', 'GObject', 'GXmlMap', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlGomHashPairedMap: ['GXmlGomHashPairedMap', 'GXmlBaseCollection', 'GObject', 'GXmlPairedMap', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlGomHashThreeMap: ['GXmlGomHashThreeMap', 'GXmlBaseCollection', 'GObject', 'GXmlThreeMap', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlGomImplementation: ['GXmlGomImplementation', 'GObject', 'GXmlDomImplementation'],
    GXmlGomInt: ['GXmlGomInt', 'GXmlGomBaseProperty', 'GObject', 'GXmlGomProperty'],
    GXmlGomNode: ['GXmlGomNode', 'GObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomNodeList: ['GXmlGomNodeList', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomNodeList', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlGomProcessingInstruction: ['GXmlGomProcessingInstruction', 'GXmlGomCharacterData', 'GXmlGomNode', 'GObject', 'GXmlDomProcessingInstruction', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomCharacterData', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomString: ['GXmlGomString', 'GXmlGomBaseProperty', 'GObject', 'GXmlGomProperty'],
    GXmlGomText: ['GXmlGomText', 'GXmlGomCharacterData', 'GXmlGomNode', 'GObject', 'GXmlDomText', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomCharacterData', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdAnnotation: ['GXmlGomXsdAnnotation', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdArrayString: ['GXmlGomXsdArrayString', 'GXmlGomArrayString', 'GXmlGomBaseProperty', 'GObject', 'GXmlGomProperty'],
    GXmlGomXsdAttribute: ['GXmlGomXsdAttribute', 'GXmlGomXsdBaseAttribute', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdAttributeGroup: ['GXmlGomXsdAttributeGroup', 'GXmlGomXsdBaseAttribute', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdBaseAttribute: ['GXmlGomXsdBaseAttribute', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdBaseContent: ['GXmlGomXsdBaseContent', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdBaseType: ['GXmlGomXsdBaseType', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdComplexContent: ['GXmlGomXsdComplexContent', 'GXmlGomXsdBaseContent', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdComplexType: ['GXmlGomXsdComplexType', 'GXmlGomXsdBaseType', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdElement: ['GXmlGomXsdElement', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdExtension: ['GXmlGomXsdExtension', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdList: ['GXmlGomXsdList', 'GXmlGomArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlGomXsdListComplexTypes: ['GXmlGomXsdListComplexTypes', 'GXmlGomXsdList', 'GXmlGomArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlGomXsdListElements: ['GXmlGomXsdListElements', 'GXmlGomXsdList', 'GXmlGomArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlGomXsdListSimpleTypes: ['GXmlGomXsdListSimpleTypes', 'GXmlGomXsdList', 'GXmlGomArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlGomXsdListTypeRestrictionEnumerations: ['GXmlGomXsdListTypeRestrictionEnumerations', 'GXmlGomXsdList', 'GXmlGomArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlGomXsdListTypeRestrictionWhiteSpaces: ['GXmlGomXsdListTypeRestrictionWhiteSpaces', 'GXmlGomXsdList', 'GXmlGomArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlGomXsdOpenContent: ['GXmlGomXsdOpenContent', 'GXmlGomXsdBaseContent', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdSchema: ['GXmlGomXsdSchema', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdSimpleContent: ['GXmlGomXsdSimpleContent', 'GXmlGomXsdBaseContent', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdSimpleType: ['GXmlGomXsdSimpleType', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeDefinition: ['GXmlGomXsdTypeDefinition', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeList: ['GXmlGomXsdTypeList', 'GXmlGomXsdTypeDefinition', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestriction: ['GXmlGomXsdTypeRestriction', 'GXmlGomXsdTypeDefinition', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionAssertion: ['GXmlGomXsdTypeRestrictionAssertion', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionDef: ['GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionEnumeration: ['GXmlGomXsdTypeRestrictionEnumeration', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionExplicitTimezone: ['GXmlGomXsdTypeRestrictionExplicitTimezone', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionFractionDigits: ['GXmlGomXsdTypeRestrictionFractionDigits', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionLength: ['GXmlGomXsdTypeRestrictionLength', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionMaxExclusive: ['GXmlGomXsdTypeRestrictionMaxExclusive', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionMaxInclusive: ['GXmlGomXsdTypeRestrictionMaxInclusive', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionMaxLength: ['GXmlGomXsdTypeRestrictionMaxLength', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionMinExclusive: ['GXmlGomXsdTypeRestrictionMinExclusive', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionMinInclusive: ['GXmlGomXsdTypeRestrictionMinInclusive', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionMinLength: ['GXmlGomXsdTypeRestrictionMinLength', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionPattern: ['GXmlGomXsdTypeRestrictionPattern', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionTotalDigits: ['GXmlGomXsdTypeRestrictionTotalDigits', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionWhiteSpace: ['GXmlGomXsdTypeRestrictionWhiteSpace', 'GXmlGomXsdTypeRestrictionDef', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlGomXsdTypeRestrictionWhiteSpaceFixed: ['GXmlGomXsdTypeRestrictionWhiteSpaceFixed', 'GXmlGomBoolean', 'GXmlGomBaseProperty', 'GObject', 'GXmlGomProperty'],
    GXmlGomXsdTypeUnion: ['GXmlGomXsdTypeUnion', 'GXmlGomXsdTypeDefinition', 'GXmlGomElement', 'GXmlGomNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlGomObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlNodeList: ['GXmlNodeList', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlSerializableArrayList: ['GXmlSerializableArrayList', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlSerializable', 'GXmlSerializableCollection', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlSerializableBool: ['GXmlSerializableBool', 'GObject', 'GXmlSerializableProperty'],
    GXmlSerializableDouble: ['GXmlSerializableDouble', 'GObject', 'GXmlSerializableProperty'],
    GXmlSerializableDualKeyMap: ['GXmlSerializableDualKeyMap', 'GObject', 'GeeTraversable', 'GXmlSerializable', 'GXmlSerializableCollection'],
    GXmlSerializableEnum: ['GXmlSerializableEnum', 'GObject', 'GXmlSerializableProperty'],
    GXmlSerializableFloat: ['GXmlSerializableFloat', 'GXmlSerializableDouble', 'GObject', 'GXmlSerializableProperty'],
    GXmlSerializableHashMap: ['GXmlSerializableHashMap', 'GeeHashMap', 'GeeAbstractMap', 'GObject', 'GXmlSerializable', 'GXmlSerializableCollection', 'GeeTraversable', 'GeeIterable', 'GeeMap'],
    GXmlSerializableInt: ['GXmlSerializableInt', 'GXmlSerializableDouble', 'GObject', 'GXmlSerializableProperty'],
    GXmlSerializableTreeMap: ['GXmlSerializableTreeMap', 'GeeTreeMap', 'GeeAbstractBidirSortedMap', 'GeeAbstractSortedMap', 'GeeAbstractMap', 'GObject', 'GXmlSerializable', 'GXmlSerializableCollection', 'GeeBidirSortedMap', 'GeeSortedMap', 'GeeTraversable', 'GeeIterable', 'GeeMap'],
    GXmlSerializableValueList: ['GXmlSerializableValueList', 'GObject', 'GXmlSerializableProperty'],
    GXmlTAttribute: ['GXmlTAttribute', 'GXmlTNode', 'GObject', 'GXmlAttribute', 'GXmlNode'],
    GXmlTCDATA: ['GXmlTCDATA', 'GXmlTNode', 'GObject', 'GXmlCDATA', 'GXmlNode'],
    GXmlTComment: ['GXmlTComment', 'GXmlTNode', 'GObject', 'GXmlComment', 'GXmlNode'],
    GXmlTDocument: ['GXmlTDocument', 'GXmlTNode', 'GObject', 'GXmlDocument', 'GXmlNode'],
    GXmlTElement: ['GXmlTElement', 'GXmlTNode', 'GObject', 'GXmlElement', 'GXmlNode'],
    GXmlTNamespace: ['GXmlTNamespace', 'GXmlTNode', 'GObject', 'GXmlNamespace', 'GXmlNode'],
    GXmlTNodeTChildrenList: ['GXmlTNodeTChildrenList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlTProcessingInstruction: ['GXmlTProcessingInstruction', 'GXmlTNode', 'GObject', 'GXmlProcessingInstruction', 'GXmlNode'],
    GXmlTText: ['GXmlTText', 'GXmlTNode', 'GObject', 'GXmlText', 'GXmlNode'],
    GXmlXParser: ['GXmlXParser', 'GObject', 'GXmlParser'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GXmlCssSelectorType: ['class', 'id', 'all', 'element', 'attribute', 'attribute-equal', 'attribute-contains', 'attribute-substring', 'attribute-start-with', 'attribute-start-with-hyphen', 'attribute-end-with', 'pseudo', 'and', 'inside', 'parent', 'after', 'before'],
    GXmlDomEventPhase: ['none', 'capturing-phase', 'at-target', 'bubbling-phase'],
    GXmlDomNodeNodeType: ['invalid', 'element-node', 'attribute-node', 'text-node', 'cdata-section-node', 'entity-reference-node', 'entity-node', 'processing-instruction-node', 'comment-node', 'document-node', 'document-type-node', 'document-fragment-node', 'notation-node'],
    GXmlDomRangeBoundaryPoints: ['start-to-start', 'start-to-end', 'end-to-end', 'end-to-start'],
    GXmlNodeType: ['invalid', 'element', 'attribute', 'text', 'cdata-section', 'entity-reference', 'entity', 'processing-instruction', 'comment', 'document', 'document-type', 'document-fragment', 'notation'],
    GXmlTDocumentReadType: ['next', 'continue', 'stop'],
    GXmlXPathObjectType: ['undefined', 'nodeset', 'boolean', 'number', 'string', 'point', 'range', 'locationset', 'users', 'xslt-tree'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'GXmlCssSelectorType.after': 15,
    'GXmlCssSelectorType.all': 2,
    'GXmlCssSelectorType.and': 12,
    'GXmlCssSelectorType.attribute': 4,
    'GXmlCssSelectorType.attribute-contains': 6,
    'GXmlCssSelectorType.attribute-end-with': 10,
    'GXmlCssSelectorType.attribute-equal': 5,
    'GXmlCssSelectorType.attribute-start-with': 8,
    'GXmlCssSelectorType.attribute-start-with-hyphen': 9,
    'GXmlCssSelectorType.attribute-substring': 7,
    'GXmlCssSelectorType.before': 16,
    'GXmlCssSelectorType.class': 0,
    'GXmlCssSelectorType.element': 3,
    'GXmlCssSelectorType.id': 1,
    'GXmlCssSelectorType.inside': 13,
    'GXmlCssSelectorType.parent': 14,
    'GXmlCssSelectorType.pseudo': 11,
    'GXmlDomEventPhase.at-target': 1,
    'GXmlDomEventPhase.bubbling-phase': 2,
    'GXmlDomEventPhase.capturing-phase': 0,
    'GXmlDomEventPhase.none': 0,
    'GXmlDomNodeNodeType.attribute-node': 0,
    'GXmlDomNodeNodeType.cdata-section-node': 2,
    'GXmlDomNodeNodeType.comment-node': 6,
    'GXmlDomNodeNodeType.document-fragment-node': 9,
    'GXmlDomNodeNodeType.document-node': 7,
    'GXmlDomNodeNodeType.document-type-node': 8,
    'GXmlDomNodeNodeType.element-node': 1,
    'GXmlDomNodeNodeType.entity-node': 4,
    'GXmlDomNodeNodeType.entity-reference-node': 3,
    'GXmlDomNodeNodeType.invalid': 0,
    'GXmlDomNodeNodeType.notation-node': 10,
    'GXmlDomNodeNodeType.processing-instruction-node': 5,
    'GXmlDomNodeNodeType.text-node': 1,
    'GXmlDomRangeBoundaryPoints.end-to-end': 1,
    'GXmlDomRangeBoundaryPoints.end-to-start': 2,
    'GXmlDomRangeBoundaryPoints.start-to-end': 0,
    'GXmlDomRangeBoundaryPoints.start-to-start': 0,
    'GXmlNodeType.attribute': 0,
    'GXmlNodeType.cdata-section': 2,
    'GXmlNodeType.comment': 6,
    'GXmlNodeType.document': 7,
    'GXmlNodeType.document-fragment': 9,
    'GXmlNodeType.document-type': 8,
    'GXmlNodeType.element': 1,
    'GXmlNodeType.entity': 4,
    'GXmlNodeType.entity-reference': 3,
    'GXmlNodeType.invalid': 0,
    'GXmlNodeType.notation': 10,
    'GXmlNodeType.processing-instruction': 5,
    'GXmlNodeType.text': 1,
    'GXmlTDocumentReadType.continue': 1,
    'GXmlTDocumentReadType.next': 0,
    'GXmlTDocumentReadType.stop': 2,
    'GXmlXPathObjectType.boolean': 2,
    'GXmlXPathObjectType.locationset': 7,
    'GXmlXPathObjectType.nodeset': 1,
    'GXmlXPathObjectType.number': 3,
    'GXmlXPathObjectType.point': 5,
    'GXmlXPathObjectType.range': 6,
    'GXmlXPathObjectType.string': 4,
    'GXmlXPathObjectType.undefined': 0,
    'GXmlXPathObjectType.users': 8,
    'GXmlXPathObjectType.xslt-tree': 9,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'GXmlDomEventFlags.canceled-flag': 4,
    'GXmlDomEventFlags.dispatch-flag': 16,
    'GXmlDomEventFlags.initialized-flag': 8,
    'GXmlDomEventFlags.stop-immediate-propagation-flag': 2,
    'GXmlDomEventFlags.stop-propagation-flag': 1,
    'GXmlDomNodeDocumentPosition.contained-by': 32,
    'GXmlDomNodeDocumentPosition.contains': 16,
    'GXmlDomNodeDocumentPosition.disconnected': 2,
    'GXmlDomNodeDocumentPosition.following': 8,
    'GXmlDomNodeDocumentPosition.implementation-specific': 64,
    'GXmlDomNodeDocumentPosition.none': 1,
    'GXmlDomNodeDocumentPosition.preceding': 4,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'GXmlCssSelectorData.selector-type': 'GXmlCssSelectorType',
};

// `<declaration GType>.<property>` -> the GType of that property's own type.
//
// `PROP_ENUMS` one case wider, and a SEPARATE table on purpose. That one is a join with a
// contract — the GType it names has numbers, in this vocabulary or the owner's — and folding a
// plain type table in would mix "resolvable to numbers" with "not" and hand the distinction to
// the consumer. `ARIA_VALUE_ENUMS` beside `ARIA_VALUE_TYPES` is the same split.
//
// A row is ABSENT where no GType can be stated: a fundamental spelling outside the generator's
// closed map, a registered type with no `glib:type-name`, or a property with no `<type>`
// child. Absence therefore reads as "unknown" and never as "scalar".
export const PROP_TYPES = {
    'GXmlAttribute.namespace': 'GXmlNamespace',
    'GXmlCharacter.str': 'gchararray',
    'GXmlCollection.element': 'GXmlDomElement',
    'GXmlCollection.items-type': 'GType',
    'GXmlComment.str': 'gchararray',
    'GXmlCssSelectorData.data': 'gchararray',
    'GXmlCssSelectorData.selector-type': 'GXmlCssSelectorType',
    'GXmlCssSelectorData.value': 'gchararray',
    'GXmlDocument.backup': 'gboolean',
    'GXmlDocument.file': 'GFile',
    'GXmlDocument.indent': 'gboolean',
    'GXmlDocument.ns-top': 'gboolean',
    'GXmlDocument.prefix-default-ns': 'gboolean',
    'GXmlDomAttr.value': 'gchararray',
    'GXmlDomCharacterData.data': 'gchararray',
    'GXmlDomElement.class-name': 'gchararray',
    'GXmlDomElement.id': 'gchararray',
    'GXmlDomEventInit.bubbles': 'gboolean',
    'GXmlDomEventInit.cancelable': 'gboolean',
    'GXmlDomMutationObserverInit.attribute-filter': 'GeeList',
    'GXmlDomMutationObserverInit.attribute-old-value': 'gboolean',
    'GXmlDomMutationObserverInit.attributes': 'gboolean',
    'GXmlDomMutationObserverInit.character-data': 'gboolean',
    'GXmlDomMutationObserverInit.character-data-old-value': 'gboolean',
    'GXmlDomMutationObserverInit.child-list': 'gboolean',
    'GXmlDomMutationObserverInit.subtree': 'gboolean',
    'GXmlDomNode.node-value': 'gchararray',
    'GXmlDomNode.owner-document': 'GXmlDomDocument',
    'GXmlDomNode.text-content': 'gchararray',
    'GXmlDomSettableTokenList.value': 'gchararray',
    'GXmlElement.content': 'gchararray',
    'GXmlGNode.value': 'gchararray',
    'GXmlGomBaseProperty.value': 'gchararray',
    'GXmlGomDateTime.format': 'gchararray',
    'GXmlGomDouble.decimals': 'guint',
    'GXmlGomElement.parse-children': 'gboolean',
    'GXmlGomElement.unparsed': 'gchararray',
    'GXmlGomEnum.enum-type': 'GType',
    'GXmlGomProperty.value': 'gchararray',
    'GXmlGomXsdArrayString.simple-type': 'gchararray',
    'GXmlGomXsdArrayString.source': 'GFile',
    'GXmlGomXsdBaseAttribute.anotation': 'GXmlGomXsdAnnotation',
    'GXmlGomXsdBaseContent.anotation': 'GXmlGomXsdAnnotation',
    'GXmlGomXsdBaseType.anotation': 'GXmlGomXsdAnnotation',
    'GXmlGomXsdComplexType.abstract': 'gboolean',
    'GXmlGomXsdComplexType.block': 'gchararray',
    'GXmlGomXsdComplexType.content-type': 'GXmlGomXsdBaseContent',
    'GXmlGomXsdComplexType.default-attributes-apply': 'gboolean',
    'GXmlGomXsdComplexType.final': 'gchararray',
    'GXmlGomXsdComplexType.mixed': 'gboolean',
    'GXmlGomXsdComplexType.name': 'gchararray',
    'GXmlGomXsdElement.abstract': 'gboolean',
    'GXmlGomXsdElement.anotation': 'GXmlGomXsdAnnotation',
    'GXmlGomXsdElement.block': 'gchararray',
    'GXmlGomXsdElement.complex-type': 'GXmlGomXsdComplexType',
    'GXmlGomXsdElement.default': 'gchararray',
    'GXmlGomXsdElement.final': 'gchararray',
    'GXmlGomXsdElement.fixed': 'gchararray',
    'GXmlGomXsdElement.form': 'gchararray',
    'GXmlGomXsdElement.max-occurs': 'gchararray',
    'GXmlGomXsdElement.min-occurs': 'gchararray',
    'GXmlGomXsdElement.name': 'gchararray',
    'GXmlGomXsdElement.nillable': 'gboolean',
    'GXmlGomXsdElement.object-type': 'gchararray',
    'GXmlGomXsdElement.ref': 'gchararray',
    'GXmlGomXsdElement.simple-type': 'GXmlGomXsdSimpleType',
    'GXmlGomXsdElement.substitution-group': 'GXmlDomTokenList',
    'GXmlGomXsdElement.target-namespace': 'gchararray',
    'GXmlGomXsdExtension.base': 'gchararray',
    'GXmlGomXsdSchema.complex-type-definitions': 'GXmlGomXsdListComplexTypes',
    'GXmlGomXsdSchema.element-definitions': 'GXmlGomXsdListElements',
    'GXmlGomXsdSchema.simple-type-definitions': 'GXmlGomXsdListSimpleTypes',
    'GXmlGomXsdSimpleType.annotation': 'GXmlGomXsdAnnotation',
    'GXmlGomXsdSimpleType.final': 'gchararray',
    'GXmlGomXsdSimpleType.list': 'GXmlGomXsdTypeList',
    'GXmlGomXsdSimpleType.name': 'gchararray',
    'GXmlGomXsdSimpleType.restriction': 'GXmlGomXsdTypeRestriction',
    'GXmlGomXsdSimpleType.union': 'GXmlGomXsdTypeUnion',
    'GXmlGomXsdTypeDefinition.annotation': 'GXmlGomXsdAnnotation',
    'GXmlGomXsdTypeRestriction.base': 'gchararray',
    'GXmlGomXsdTypeRestriction.enumerations': 'GXmlGomXsdListTypeRestrictionEnumerations',
    'GXmlGomXsdTypeRestriction.simple-type': 'GXmlGomXsdSimpleType',
    'GXmlGomXsdTypeRestriction.white-spaces': 'GXmlGomXsdListTypeRestrictionWhiteSpaces',
    'GXmlGomXsdTypeRestrictionDef.annotation': 'GXmlGomXsdAnnotation',
    'GXmlGomXsdTypeRestrictionEnumeration.value': 'gchararray',
    'GXmlGomXsdTypeRestrictionWhiteSpace.fixed': 'GXmlGomXsdTypeRestrictionWhiteSpaceFixed',
    'GXmlGomXsdTypeRestrictionWhiteSpace.value': 'gchararray',
    'GXmlMap.attribute-key': 'gchararray',
    'GXmlNode.value': 'gchararray',
    'GXmlPairedMap.attribute-primary-key': 'gchararray',
    'GXmlPairedMap.attribute-secondary-key': 'gchararray',
    'GXmlParser.backup': 'gboolean',
    'GXmlParser.indent': 'gboolean',
    'GXmlProcessingInstruction.data': 'gchararray',
    'GXmlSerializable.serialized-xml-node-value': 'gchararray',
    'GXmlTNode.value': 'gchararray',
    'GXmlText.str': 'gchararray',
    'GXmlThreeMap.attribute-primary-key': 'gchararray',
    'GXmlThreeMap.attribute-secondary-key': 'gchararray',
    'GXmlThreeMap.attribute-third-key': 'gchararray',
    'GeeMapEntry.k-type': 'GType',
    'GeeMapEntry.v-type': 'GType',
    'GeeMapEntry.value': 'gpointer',
};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
