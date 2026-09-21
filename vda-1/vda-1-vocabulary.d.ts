/**
 * The GIR-derived widget VOCABULARY for Vda-1.
 *
 * GENERATED — do not edit. Provenance: Vda-1
 *
 * 108 instantiable GTypes (of which 0 concrete widgets), 214 declarations, 3 enum nick unions, 0 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type GCalc from '@girs/gcalc-2';
import type GObject from '@girs/gobject-2.0';
import type Vda from './vda-1.js';
import type { GeeAbstractBidirListConstructOnly, GeeAbstractBidirListProps, GeeAbstractCollectionConstructOnly, GeeAbstractCollectionProps, GeeAbstractListConstructOnly, GeeAbstractListProps, GeeAbstractMapConstructOnly, GeeAbstractMapProps, GeeArrayListConstructOnly, GeeArrayListProps, GeeBidirListConstructOnly, GeeBidirListProps, GeeCollectionConstructOnly, GeeCollectionProps, GeeHashMapConstructOnly, GeeHashMapProps, GeeIterableConstructOnly, GeeIterableProps, GeeListConstructOnly, GeeListProps, GeeMapConstructOnly, GeeMapProps, GeeTraversableConstructOnly, GeeTraversableProps } from '@girs/gee-0.8/vocabulary';
import type { GListModelConstructOnly, GListModelProps } from '@girs/gio-2.0/vocabulary';
import type { GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type VdaConnectionStatusNick = 'invalid' | 'in-progress' | 'canceled' | 'made' | 'disconnected' | 'timeout' | 'connected';
export type VdaMoveDirectionNick = 'forward' | 'backward' | 'relative';
export type VdaSqlExpressionOperatorTypeNick = 'none' | 'and' | 'or' | 'eq' | 'is' | 'like' | 'between' | 'not-between' | 'between-symmetric' | 'not-between-symmetric' | 'is-distinct-from' | 'is-not-distinct-from' | 'gt' | 'lt' | 'geq' | 'leq' | 'diff' | 'regexp' | 'regexp-ci' | 'not-regexp' | 'not-regexp-ci' | 'similar-to' | 'is-null' | 'is-not-null' | 'is-true' | 'is-not-true' | 'is-false' | 'is-not-false' | 'is-unknown' | 'is-not-unknown' | 'not' | 'in' | 'not-in' | 'concatenate' | 'plus' | 'minus' | 'star' | 'div' | 'rem' | 'bitand' | 'bitor' | 'bitnot' | 'ilike';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface VdaAffectedRowsProps extends GObjectProps, VdaResultProps, VdaSqlAffectedRowsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaAffectedRowsConstructOnly = GObjectConstructOnly | VdaResultConstructOnly | VdaSqlAffectedRowsConstructOnly;

export interface VdaCommandDeleteProps extends GObjectProps, VdaSqlCommandProps, VdaSqlCommandTableRelatedProps, VdaSqlCommandConditionalProps, VdaStringifiableProps, VdaSqlCommandParametrizedProps, VdaSqlCommandDeleteProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaCommandDeleteConstructOnly = GObjectConstructOnly | VdaSqlCommandConstructOnly | VdaSqlCommandTableRelatedConstructOnly | VdaSqlCommandConditionalConstructOnly | VdaStringifiableConstructOnly | VdaSqlCommandParametrizedConstructOnly | VdaSqlCommandDeleteConstructOnly;

export interface VdaCommandInsertProps extends VdaCommandModificationProps, VdaStringifiableProps, VdaSqlCommandInsertProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaCommandInsertConstructOnly = VdaCommandModificationConstructOnly | VdaStringifiableConstructOnly | VdaSqlCommandInsertConstructOnly;

export interface VdaCommandModificationProps extends GObjectProps, VdaSqlCommandProps, VdaSqlCommandTableRelatedProps, VdaSqlCommandModificationProps, VdaSqlCommandParametrizedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaCommandModificationConstructOnly = GObjectConstructOnly | VdaSqlCommandConstructOnly | VdaSqlCommandTableRelatedConstructOnly | VdaSqlCommandModificationConstructOnly | VdaSqlCommandParametrizedConstructOnly;

export interface VdaCommandSelectProps extends GObjectProps, VdaSqlCommandProps, VdaSqlCommandConditionalProps, VdaStringifiableProps, VdaSqlCommandParametrizedProps, VdaSqlCommandSelectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaCommandSelectConstructOnly = GObjectConstructOnly | VdaSqlCommandConstructOnly | VdaSqlCommandConditionalConstructOnly | VdaStringifiableConstructOnly | VdaSqlCommandParametrizedConstructOnly | VdaSqlCommandSelectConstructOnly;

export interface VdaCommandUpdateProps extends VdaCommandModificationProps, VdaSqlCommandConditionalProps, VdaStringifiableProps, VdaSqlCommandUpdateProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaCommandUpdateConstructOnly = VdaCommandModificationConstructOnly | VdaSqlCommandConditionalConstructOnly | VdaStringifiableConstructOnly | VdaSqlCommandUpdateConstructOnly;

export interface VdaConnectionParameterProps extends GObjectProps {
    name?: string;
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaConnectionParameterConstructOnly = GObjectConstructOnly;

export interface VdaConnectionParameterDbNameProps extends VdaConnectionParameterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaConnectionParameterDbNameConstructOnly = VdaConnectionParameterConstructOnly;

export interface VdaConnectionParameterHostProps extends VdaConnectionParameterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaConnectionParameterHostConstructOnly = VdaConnectionParameterConstructOnly;

export interface VdaConnectionParameterPasswordProps extends VdaConnectionParameterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaConnectionParameterPasswordConstructOnly = VdaConnectionParameterConstructOnly;

export interface VdaConnectionParameterPortProps extends VdaConnectionParameterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaConnectionParameterPortConstructOnly = VdaConnectionParameterConstructOnly;

export interface VdaConnectionParameterUserNameProps extends VdaConnectionParameterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaConnectionParameterUserNameConstructOnly = VdaConnectionParameterConstructOnly;

export interface VdaConnectionParametersProps extends GeeHashMapProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaConnectionParametersConstructOnly = GeeHashMapConstructOnly;

export interface VdaExpressionProps extends GeeArrayListProps, GListModelProps, VdaSqlExpressionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionConstructOnly = GeeArrayListConstructOnly | GListModelConstructOnly | VdaSqlExpressionConstructOnly;

export interface VdaExpressionFieldProps extends VdaExpressionProps, VdaSqlExpressionFieldProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionFieldConstructOnly = VdaExpressionConstructOnly | VdaSqlExpressionFieldConstructOnly;

export interface VdaExpressionOperatorProps extends VdaExpressionProps, VdaSqlExpressionOperatorProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorConstructOnly = VdaExpressionConstructOnly | VdaSqlExpressionOperatorConstructOnly;

export interface VdaExpressionOperatorAndProps extends VdaExpressionOperatorMultitermProps, VdaSqlExpressionOperatorAndProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorAndConstructOnly = VdaExpressionOperatorMultitermConstructOnly | VdaSqlExpressionOperatorAndConstructOnly;

export interface VdaExpressionOperatorBetweenProps extends VdaExpressionOperatorThreetermProps, VdaSqlExpressionOperatorBetweenProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorBetweenConstructOnly = VdaExpressionOperatorThreetermConstructOnly | VdaSqlExpressionOperatorBetweenConstructOnly;

export interface VdaExpressionOperatorBetweenAndProps extends VdaExpressionOperatorBetweenProps, VdaSqlExpressionOperatorBetweenAndProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorBetweenAndConstructOnly = VdaExpressionOperatorBetweenConstructOnly | VdaSqlExpressionOperatorBetweenAndConstructOnly;

export interface VdaExpressionOperatorBetweenSymmetricProps extends VdaExpressionOperatorBetweenProps, VdaSqlExpressionOperatorBetweenSymmetricProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorBetweenSymmetricConstructOnly = VdaExpressionOperatorBetweenConstructOnly | VdaSqlExpressionOperatorBetweenSymmetricConstructOnly;

export interface VdaExpressionOperatorBetweenSymmetricAndProps extends VdaExpressionOperatorBetweenSymmetricProps, VdaSqlExpressionOperatorBetweenSymmetricAndProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorBetweenSymmetricAndConstructOnly = VdaExpressionOperatorBetweenSymmetricConstructOnly | VdaSqlExpressionOperatorBetweenSymmetricAndConstructOnly;

export interface VdaExpressionOperatorBinaryUnarytermProps extends VdaExpressionOperatorProps, VdaSqlExpressionOperatorBinaryUnarytermProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorBinaryUnarytermConstructOnly = VdaExpressionOperatorConstructOnly | VdaSqlExpressionOperatorBinaryUnarytermConstructOnly;

export interface VdaExpressionOperatorBinarytermProps extends VdaExpressionOperatorProps, VdaSqlExpressionOperatorBinarytermProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorBinarytermConstructOnly = VdaExpressionOperatorConstructOnly | VdaSqlExpressionOperatorBinarytermConstructOnly;

export interface VdaExpressionOperatorConcatenateProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorConcatenateProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorConcatenateConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorConcatenateConstructOnly;

export interface VdaExpressionOperatorDiffProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorDiffProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorDiffConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorDiffConstructOnly;

export interface VdaExpressionOperatorDivProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorDivProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorDivConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorDivConstructOnly;

export interface VdaExpressionOperatorEqProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorEqProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorEqConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorEqConstructOnly;

export interface VdaExpressionOperatorFinalUnarytermProps extends VdaExpressionOperatorProps, VdaSqlExpressionOperatorFinalUnarytermProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorFinalUnarytermConstructOnly = VdaExpressionOperatorConstructOnly | VdaSqlExpressionOperatorFinalUnarytermConstructOnly;

export interface VdaExpressionOperatorGeqProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorGeqProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorGeqConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorGeqConstructOnly;

export interface VdaExpressionOperatorGroupProps extends VdaExpressionOperatorProps, VdaSqlExpressionOperatorGroupProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorGroupConstructOnly = VdaExpressionOperatorConstructOnly | VdaSqlExpressionOperatorGroupConstructOnly;

export interface VdaExpressionOperatorGtProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorGtProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorGtConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorGtConstructOnly;

export interface VdaExpressionOperatorIlikeProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorIlikeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIlikeConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorIlikeConstructOnly;

export interface VdaExpressionOperatorInProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorInProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorInConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorInConstructOnly;

export interface VdaExpressionOperatorInitialUnarytermProps extends VdaExpressionOperatorProps, VdaSqlExpressionOperatorInitialUnarytermProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorInitialUnarytermConstructOnly = VdaExpressionOperatorConstructOnly | VdaSqlExpressionOperatorInitialUnarytermConstructOnly;

export interface VdaExpressionOperatorIsProps extends VdaExpressionOperatorFinalUnarytermProps, VdaSqlExpressionOperatorIsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsConstructOnly = VdaExpressionOperatorFinalUnarytermConstructOnly | VdaSqlExpressionOperatorIsConstructOnly;

export interface VdaExpressionOperatorIsDistinctProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorIsDistinctProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsDistinctConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorIsDistinctConstructOnly;

export interface VdaExpressionOperatorIsDistinctFromProps extends VdaExpressionOperatorIsDistinctProps, VdaSqlExpressionOperatorIsDistinctFromProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsDistinctFromConstructOnly = VdaExpressionOperatorIsDistinctConstructOnly | VdaSqlExpressionOperatorIsDistinctFromConstructOnly;

export interface VdaExpressionOperatorIsFalseProps extends VdaExpressionOperatorIsProps, VdaSqlExpressionOperatorIsFalseProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsFalseConstructOnly = VdaExpressionOperatorIsConstructOnly | VdaSqlExpressionOperatorIsFalseConstructOnly;

export interface VdaExpressionOperatorIsNotProps extends VdaExpressionOperatorIsProps, VdaSqlExpressionOperatorIsNotProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsNotConstructOnly = VdaExpressionOperatorIsConstructOnly | VdaSqlExpressionOperatorIsNotConstructOnly;

export interface VdaExpressionOperatorIsNotDistinctProps extends VdaExpressionOperatorIsDistinctProps, VdaSqlExpressionOperatorIsNotDistinctProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsNotDistinctConstructOnly = VdaExpressionOperatorIsDistinctConstructOnly | VdaSqlExpressionOperatorIsNotDistinctConstructOnly;

export interface VdaExpressionOperatorIsNotDistinctFromProps extends VdaExpressionOperatorIsNotDistinctProps, VdaSqlExpressionOperatorIsNotDistinctFromProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsNotDistinctFromConstructOnly = VdaExpressionOperatorIsNotDistinctConstructOnly | VdaSqlExpressionOperatorIsNotDistinctFromConstructOnly;

export interface VdaExpressionOperatorIsNotFalseProps extends VdaExpressionOperatorIsNotProps, VdaSqlExpressionOperatorIsNotFalseProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsNotFalseConstructOnly = VdaExpressionOperatorIsNotConstructOnly | VdaSqlExpressionOperatorIsNotFalseConstructOnly;

export interface VdaExpressionOperatorIsNotNullProps extends VdaExpressionOperatorIsNotProps, VdaSqlExpressionOperatorIsNotNullProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsNotNullConstructOnly = VdaExpressionOperatorIsNotConstructOnly | VdaSqlExpressionOperatorIsNotNullConstructOnly;

export interface VdaExpressionOperatorIsNotTrueProps extends VdaExpressionOperatorIsNotProps, VdaSqlExpressionOperatorIsNotTrueProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsNotTrueConstructOnly = VdaExpressionOperatorIsNotConstructOnly | VdaSqlExpressionOperatorIsNotTrueConstructOnly;

export interface VdaExpressionOperatorIsNotUnknownProps extends VdaExpressionOperatorIsNotProps, VdaSqlExpressionOperatorIsNotUnknownProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsNotUnknownConstructOnly = VdaExpressionOperatorIsNotConstructOnly | VdaSqlExpressionOperatorIsNotUnknownConstructOnly;

export interface VdaExpressionOperatorIsNullProps extends VdaExpressionOperatorIsProps, VdaSqlExpressionOperatorIsNullProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsNullConstructOnly = VdaExpressionOperatorIsConstructOnly | VdaSqlExpressionOperatorIsNullConstructOnly;

export interface VdaExpressionOperatorIsTrueProps extends VdaExpressionOperatorIsProps, VdaSqlExpressionOperatorIsTrueProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsTrueConstructOnly = VdaExpressionOperatorIsConstructOnly | VdaSqlExpressionOperatorIsTrueConstructOnly;

export interface VdaExpressionOperatorIsUnknownProps extends VdaExpressionOperatorIsProps, VdaSqlExpressionOperatorIsUnknownProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorIsUnknownConstructOnly = VdaExpressionOperatorIsConstructOnly | VdaSqlExpressionOperatorIsUnknownConstructOnly;

export interface VdaExpressionOperatorLeqProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorLeqProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorLeqConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorLeqConstructOnly;

export interface VdaExpressionOperatorLikeProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorLikeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorLikeConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorLikeConstructOnly;

export interface VdaExpressionOperatorLtProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorLtProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorLtConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorLtConstructOnly;

export interface VdaExpressionOperatorMinusProps extends VdaExpressionOperatorBinaryUnarytermProps, VdaSqlExpressionOperatorMinusProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorMinusConstructOnly = VdaExpressionOperatorBinaryUnarytermConstructOnly | VdaSqlExpressionOperatorMinusConstructOnly;

export interface VdaExpressionOperatorMultitermProps extends VdaExpressionOperatorProps, VdaSqlExpressionOperatorMultitermProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorMultitermConstructOnly = VdaExpressionOperatorConstructOnly | VdaSqlExpressionOperatorMultitermConstructOnly;

export interface VdaExpressionOperatorNotProps extends VdaExpressionOperatorInitialUnarytermProps, VdaSqlExpressionOperatorNotProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorNotConstructOnly = VdaExpressionOperatorInitialUnarytermConstructOnly | VdaSqlExpressionOperatorNotConstructOnly;

export interface VdaExpressionOperatorNotBetweenProps extends VdaExpressionOperatorBetweenProps, VdaSqlExpressionOperatorNotBetweenProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorNotBetweenConstructOnly = VdaExpressionOperatorBetweenConstructOnly | VdaSqlExpressionOperatorNotBetweenConstructOnly;

export interface VdaExpressionOperatorNotBetweenAndProps extends VdaExpressionOperatorNotBetweenProps, VdaSqlExpressionOperatorNotBetweenAndProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorNotBetweenAndConstructOnly = VdaExpressionOperatorNotBetweenConstructOnly | VdaSqlExpressionOperatorNotBetweenAndConstructOnly;

export interface VdaExpressionOperatorNotBetweenSymmetricProps extends VdaExpressionOperatorBetweenSymmetricProps, VdaSqlExpressionOperatorNotBetweenSymmetricProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorNotBetweenSymmetricConstructOnly = VdaExpressionOperatorBetweenSymmetricConstructOnly | VdaSqlExpressionOperatorNotBetweenSymmetricConstructOnly;

export interface VdaExpressionOperatorNotBetweenSymmetricAndProps extends VdaExpressionOperatorNotBetweenSymmetricProps, VdaSqlExpressionOperatorNotBetweenSymmetricAndProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorNotBetweenSymmetricAndConstructOnly = VdaExpressionOperatorNotBetweenSymmetricConstructOnly | VdaSqlExpressionOperatorNotBetweenSymmetricAndConstructOnly;

export interface VdaExpressionOperatorNotEqProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorNotEqProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorNotEqConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorNotEqConstructOnly;

export interface VdaExpressionOperatorNotIlikeProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorNotIlikeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorNotIlikeConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorNotIlikeConstructOnly;

export interface VdaExpressionOperatorNotInProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorNotInProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorNotInConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorNotInConstructOnly;

export interface VdaExpressionOperatorNotLikeProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorNotLikeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorNotLikeConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorNotLikeConstructOnly;

export interface VdaExpressionOperatorOrProps extends VdaExpressionOperatorMultitermProps, VdaSqlExpressionOperatorOrProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorOrConstructOnly = VdaExpressionOperatorMultitermConstructOnly | VdaSqlExpressionOperatorOrConstructOnly;

export interface VdaExpressionOperatorPlusProps extends VdaExpressionOperatorBinaryUnarytermProps, VdaSqlExpressionOperatorPlusProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorPlusConstructOnly = VdaExpressionOperatorBinaryUnarytermConstructOnly | VdaSqlExpressionOperatorPlusConstructOnly;

export interface VdaExpressionOperatorRegexpProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorRegexpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorRegexpConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorRegexpConstructOnly;

export interface VdaExpressionOperatorSimilarToProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorSimilarToProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorSimilarToConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorSimilarToConstructOnly;

export interface VdaExpressionOperatorStarProps extends VdaExpressionOperatorBinarytermProps, VdaSqlExpressionOperatorStarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorStarConstructOnly = VdaExpressionOperatorBinarytermConstructOnly | VdaSqlExpressionOperatorStarConstructOnly;

export interface VdaExpressionOperatorThreetermProps extends VdaExpressionOperatorProps, VdaSqlExpressionOperatorThreetermProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionOperatorThreetermConstructOnly = VdaExpressionOperatorConstructOnly | VdaSqlExpressionOperatorThreetermConstructOnly;

export interface VdaExpressionValueProps extends VdaExpressionProps, VdaSqlExpressionValueProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionValueConstructOnly = VdaExpressionConstructOnly | VdaSqlExpressionValueConstructOnly;

export interface VdaExpressionValueParameterProps extends VdaExpressionValueProps, VdaSqlExpressionValueParameterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaExpressionValueParameterConstructOnly = VdaExpressionValueConstructOnly | VdaSqlExpressionValueParameterConstructOnly;

export interface VdaHashListProps extends GeeArrayListProps, GListModelProps, VdaHashModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaHashListConstructOnly = GeeArrayListConstructOnly | GListModelConstructOnly | VdaHashModelConstructOnly;

export interface VdaHashModelProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaHashModelConstructOnly = GObjectConstructOnly;

export interface VdaInvalidPreparedQueryProps extends VdaInvalidQueryProps, VdaPreparedQueryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaInvalidPreparedQueryConstructOnly = VdaInvalidQueryConstructOnly | VdaPreparedQueryConstructOnly;

export interface VdaInvalidQueryProps extends GObjectProps, VdaQueryProps {
    message?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaInvalidQueryConstructOnly = GObjectConstructOnly | VdaQueryConstructOnly;

export interface VdaInvalidResultProps extends GObjectProps, VdaResultProps {
    message?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaInvalidResultConstructOnly = GObjectConstructOnly | VdaResultConstructOnly;

export interface VdaParametersProps extends GeeHashMapProps, VdaSqlParametersProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaParametersConstructOnly = GeeHashMapConstructOnly | VdaSqlParametersConstructOnly;

export interface VdaParserProps extends GObjectProps, VdaSqlParserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaParserConstructOnly = GObjectConstructOnly | VdaSqlParserConstructOnly;

export interface VdaPreparedQueryProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaPreparedQueryConstructOnly = GObjectConstructOnly;

export interface VdaQueryProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaQueryConstructOnly = GObjectConstructOnly;

export interface VdaResultProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaResultConstructOnly = GObjectConstructOnly;

export interface VdaSqlAffectedRowsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlAffectedRowsConstructOnly = GObjectConstructOnly;

export interface VdaSqlCommandProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlCommandConstructOnly = GObjectConstructOnly;

export interface VdaSqlCommandConditionalProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlCommandConditionalConstructOnly = GObjectConstructOnly;

export interface VdaSqlCommandDeleteProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlCommandDeleteConstructOnly = GObjectConstructOnly;

export interface VdaSqlCommandInsertProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlCommandInsertConstructOnly = GObjectConstructOnly;

export interface VdaSqlCommandModificationProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlCommandModificationConstructOnly = GObjectConstructOnly;

export interface VdaSqlCommandParametrizedProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlCommandParametrizedConstructOnly = GObjectConstructOnly;

export interface VdaSqlCommandSelectProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlCommandSelectConstructOnly = GObjectConstructOnly;

export interface VdaSqlCommandTableRelatedProps extends GObjectProps {
    allias?: string;
    table?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlCommandTableRelatedConstructOnly = GObjectConstructOnly;

export interface VdaSqlCommandUpdateProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlCommandUpdateConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionFieldProps extends GObjectProps {
    allias?: string;
    name?: string;
    'table-ref'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionFieldConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorAndProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorAndConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorBetweenProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorBetweenConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorBetweenAndProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorBetweenAndConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorBetweenSymmetricProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorBetweenSymmetricConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorBetweenSymmetricAndProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorBetweenSymmetricAndConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorBinaryUnarytermProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorBinaryUnarytermConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorBinarytermProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorBinarytermConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorConcatenateProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorConcatenateConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorDiffProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorDiffConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorDivProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorDivConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorEqProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorEqConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorFinalUnarytermProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorFinalUnarytermConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorGeqProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorGeqConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorGroupProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorGroupConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorGtProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorGtConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIlikeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIlikeConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorInProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorInConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorInitialUnarytermProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorInitialUnarytermConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsDistinctProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsDistinctConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsDistinctFromProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsDistinctFromConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsFalseProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsFalseConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsNotProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsNotConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsNotDistinctProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsNotDistinctConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsNotDistinctFromProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsNotDistinctFromConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsNotFalseProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsNotFalseConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsNotNullProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsNotNullConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsNotTrueProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsNotTrueConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsNotUnknownProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsNotUnknownConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsNullProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsNullConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsTrueProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsTrueConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorIsUnknownProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorIsUnknownConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorLeqProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorLeqConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorLikeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorLikeConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorLtProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorLtConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorMinusProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorMinusConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorMultitermProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorMultitermConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorNotProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorNotConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorNotBetweenProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorNotBetweenConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorNotBetweenAndProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorNotBetweenAndConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorNotBetweenSymmetricProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorNotBetweenSymmetricConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorNotBetweenSymmetricAndProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorNotBetweenSymmetricAndConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorNotEqProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorNotEqConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorNotIlikeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorNotIlikeConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorNotInProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorNotInConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorNotLikeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorNotLikeConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorOrProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorOrConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorPlusProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorPlusConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorRegexpProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorRegexpConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorSimilarToProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorSimilarToConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorStarProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorStarConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionOperatorThreetermProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionOperatorThreetermConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionValueProps extends GObjectProps {
    connection?: Vda.Connection;
    value?: Vda.SqlValue;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionValueConstructOnly = GObjectConstructOnly;

export interface VdaSqlExpressionValueParameterProps extends GObjectProps {
    gtype?: GObject.GType;
    name?: string;
    parameters?: Vda.SqlParameters;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlExpressionValueParameterConstructOnly = GObjectConstructOnly;

export interface VdaSqlParametersProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlParametersConstructOnly = GObjectConstructOnly;

export interface VdaSqlParserProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlParserConstructOnly = GObjectConstructOnly;

export interface VdaSqlTableReferenceProps extends GObjectProps {
    allias?: string;
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlTableReferenceConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueBinaryProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueBinaryConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueBitProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueBitConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueBoolProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueBoolConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueByteProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueByteConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueDateProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueDateConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueDoubleProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueDoubleConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueFloatProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueFloatConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueInt2Props extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueInt2ConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueInt4Props extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueInt4ConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueInt8Props extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueInt8ConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueIntegerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueIntegerConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueJsonProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueJsonConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueMathExpProps extends GObjectProps {
    math?: GCalc.MathEquationManager;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueMathExpConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueMoneyProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueMoneyConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueNameProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueNameConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueNullProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueNullConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueNumericProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueNumericConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueOidProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueOidConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueStringProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueStringConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueTextProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueTextConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueTimeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueTimeConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueTimeNtzProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueTimeNtzConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueTimestampProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueTimestampConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueTimestampNtzProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueTimestampNtzConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueUnsignedByteProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueUnsignedByteConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueUnsignedInt2Props extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueUnsignedInt2ConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueUnsignedInt4Props extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueUnsignedInt4ConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueUnsignedInt8Props extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueUnsignedInt8ConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueUnsignedIntegerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueUnsignedIntegerConstructOnly = GObjectConstructOnly;

export interface VdaSqlValueXmlProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaSqlValueXmlConstructOnly = GObjectConstructOnly;

export interface VdaStringifiableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaStringifiableConstructOnly = GObjectConstructOnly;

export interface VdaTableReferenceProps extends GObjectProps, VdaSqlTableReferenceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaTableReferenceConstructOnly = GObjectConstructOnly | VdaSqlTableReferenceConstructOnly;

export interface VdaValueProps extends GObjectProps, VdaStringifiableProps, VdaSqlValueProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueConstructOnly = GObjectConstructOnly | VdaStringifiableConstructOnly | VdaSqlValueConstructOnly;

export interface VdaValueBinaryProps extends VdaValueProps, VdaSqlValueBinaryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueBinaryConstructOnly = VdaValueConstructOnly | VdaSqlValueBinaryConstructOnly;

export interface VdaValueBitProps extends VdaValueBoolProps, VdaSqlValueBitProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueBitConstructOnly = VdaValueBoolConstructOnly | VdaSqlValueBitConstructOnly;

export interface VdaValueBoolProps extends VdaValueProps, VdaSqlValueBoolProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueBoolConstructOnly = VdaValueConstructOnly | VdaSqlValueBoolConstructOnly;

export interface VdaValueByteProps extends VdaValueIntegerProps, VdaSqlValueByteProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueByteConstructOnly = VdaValueIntegerConstructOnly | VdaSqlValueByteConstructOnly;

export interface VdaValueDateProps extends VdaValueProps, VdaSqlValueDateProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueDateConstructOnly = VdaValueConstructOnly | VdaSqlValueDateConstructOnly;

export interface VdaValueDoubleProps extends VdaValueNumericProps, VdaSqlValueDoubleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueDoubleConstructOnly = VdaValueNumericConstructOnly | VdaSqlValueDoubleConstructOnly;

export interface VdaValueFloatProps extends VdaValueNumericProps, VdaSqlValueFloatProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueFloatConstructOnly = VdaValueNumericConstructOnly | VdaSqlValueFloatConstructOnly;

export interface VdaValueInt2Props extends VdaValueIntegerProps, VdaSqlValueInt2Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueInt2ConstructOnly = VdaValueIntegerConstructOnly | VdaSqlValueInt2ConstructOnly;

export interface VdaValueInt4Props extends VdaValueIntegerProps, VdaSqlValueInt4Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueInt4ConstructOnly = VdaValueIntegerConstructOnly | VdaSqlValueInt4ConstructOnly;

export interface VdaValueInt8Props extends VdaValueIntegerProps, VdaSqlValueInt8Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueInt8ConstructOnly = VdaValueIntegerConstructOnly | VdaSqlValueInt8ConstructOnly;

export interface VdaValueIntegerProps extends VdaValueProps, VdaSqlValueProps, VdaSqlValueIntegerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueIntegerConstructOnly = VdaValueConstructOnly | VdaSqlValueConstructOnly | VdaSqlValueIntegerConstructOnly;

export interface VdaValueJsonProps extends VdaValueStringProps, VdaSqlValueJsonProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueJsonConstructOnly = VdaValueStringConstructOnly | VdaSqlValueJsonConstructOnly;

export interface VdaValueMathExpProps extends GObjectProps, VdaStringifiableProps, VdaSqlValueProps, VdaSqlValueMathExpProps {
    parameters?: Vda.SqlParameters;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueMathExpConstructOnly = GObjectConstructOnly | VdaStringifiableConstructOnly | VdaSqlValueConstructOnly | VdaSqlValueMathExpConstructOnly;

export interface VdaValueMoneyProps extends VdaValueNumericProps, VdaSqlValueMoneyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueMoneyConstructOnly = VdaValueNumericConstructOnly | VdaSqlValueMoneyConstructOnly;

export interface VdaValueNameProps extends VdaValueStringProps, VdaSqlValueNameProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueNameConstructOnly = VdaValueStringConstructOnly | VdaSqlValueNameConstructOnly;

export interface VdaValueNullProps extends VdaValueProps, VdaSqlValueNullProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueNullConstructOnly = VdaValueConstructOnly | VdaSqlValueNullConstructOnly;

export interface VdaValueNumericProps extends VdaValueProps, VdaSqlValueNumericProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueNumericConstructOnly = VdaValueConstructOnly | VdaSqlValueNumericConstructOnly;

export interface VdaValueOidProps extends VdaValueIntegerProps, VdaSqlValueOidProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueOidConstructOnly = VdaValueIntegerConstructOnly | VdaSqlValueOidConstructOnly;

export interface VdaValueStringProps extends VdaValueProps, VdaSqlValueStringProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueStringConstructOnly = VdaValueConstructOnly | VdaSqlValueStringConstructOnly;

export interface VdaValueTextProps extends VdaValueStringProps, VdaSqlValueTextProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueTextConstructOnly = VdaValueStringConstructOnly | VdaSqlValueTextConstructOnly;

export interface VdaValueTimeProps extends VdaValueTimestampProps, VdaSqlValueTimeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueTimeConstructOnly = VdaValueTimestampConstructOnly | VdaSqlValueTimeConstructOnly;

export interface VdaValueTimeNtzProps extends VdaValueTimestampNtzProps, VdaSqlValueTimeNtzProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueTimeNtzConstructOnly = VdaValueTimestampNtzConstructOnly | VdaSqlValueTimeNtzConstructOnly;

export interface VdaValueTimestampProps extends VdaValueProps, VdaSqlValueTimestampProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueTimestampConstructOnly = VdaValueConstructOnly | VdaSqlValueTimestampConstructOnly;

export interface VdaValueTimestampNtzProps extends VdaValueTimestampProps, VdaSqlValueTimestampNtzProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueTimestampNtzConstructOnly = VdaValueTimestampConstructOnly | VdaSqlValueTimestampNtzConstructOnly;

export interface VdaValueUnsignedByteProps extends VdaValueUnsignedIntegerProps, VdaSqlValueUnsignedByteProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueUnsignedByteConstructOnly = VdaValueUnsignedIntegerConstructOnly | VdaSqlValueUnsignedByteConstructOnly;

export interface VdaValueUnsignedInt2Props extends VdaValueUnsignedIntegerProps, VdaSqlValueUnsignedInt2Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueUnsignedInt2ConstructOnly = VdaValueUnsignedIntegerConstructOnly | VdaSqlValueUnsignedInt2ConstructOnly;

export interface VdaValueUnsignedInt4Props extends VdaValueUnsignedIntegerProps, VdaSqlValueUnsignedInt4Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueUnsignedInt4ConstructOnly = VdaValueUnsignedIntegerConstructOnly | VdaSqlValueUnsignedInt4ConstructOnly;

export interface VdaValueUnsignedInt8Props extends VdaValueUnsignedIntegerProps, VdaSqlValueUnsignedInt8Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueUnsignedInt8ConstructOnly = VdaValueUnsignedIntegerConstructOnly | VdaSqlValueUnsignedInt8ConstructOnly;

export interface VdaValueUnsignedIntegerProps extends VdaValueProps, VdaSqlValueProps, VdaSqlValueUnsignedIntegerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueUnsignedIntegerConstructOnly = VdaValueConstructOnly | VdaSqlValueConstructOnly | VdaSqlValueUnsignedIntegerConstructOnly;

export interface VdaValueXmlProps extends VdaValueStringProps, VdaSqlValueXmlProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VdaValueXmlConstructOnly = VdaValueStringConstructOnly | VdaSqlValueXmlConstructOnly;

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {

}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's own type.
 *
 * `PROP_ENUMS` one case wider, and separate on purpose: that table promises the GType it names
 * has NUMBERS, and this one promises only that the GType is the property's. A host inferring a
 * type from a property — the middle of an uncast lookup chain, an uncast closure's return type —
 * reads this one; a host resolving a nick to a number reads that one.
 *
 * Absent means no GType can be stated, not that the property is scalar: `gchararray` is carried
 * like any other, so absence is readable as "unknown".
 */
export const PROP_TYPES: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
