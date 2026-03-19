/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstAnalytics {
    /**
     * GstAnalytics-1.0
     */

    /**
     * Passes to functions asking for a relation span when the span is
     * infinite.
     * @since 1.24
     */
    const INF_RELATION_SPAN: number;
    /**
     * A wildcard matching any type of analysis
     * @since 1.24
     */
    const MTD_TYPE_ANY: number;
    /**
     * Attach a analysis-results-meta-relation  meta ({@link GstAnalytics.RelationMeta})to `buffer`.
     *
     * A {@link GstAnalytics.RelationMeta} is a metadata describing relation between other
     * analysis meta. It's more efficient to use `gst_buffer_add_analytics_relation_meta_full`
     * and providing the maximum number of analysis meta that will attached to a buffer.
     * @param buffer a {@link Gst.Buffer}
     * @returns Newly attached {@link GstAnalytics.RelationMeta}
     * @since 1.24
     */
    function buffer_add_analytics_relation_meta(buffer: Gst.Buffer): RelationMeta | null;
    /**
     * Attache a analysis-results relation-meta ({@link GstAnalytics.RelationMeta}) to `buffer`.
     *
     * A {@link GstAnalytics.RelationMeta} is a metadata describing relation between other
     * analysis meta.
     * @param buffer a {@link Gst.Buffer}
     * @param init_params Initialization parameters
     * @returns Newly attached {@link GstAnalytics.RelationMeta}
     * @since 1.24
     */
    function buffer_add_analytics_relation_meta_full(
        buffer: Gst.Buffer,
        init_params: RelationMetaInitParams,
    ): RelationMeta | null;
    /**
     * Retrives the meta or `null` if it doesn't exist
     * @param buffer a {@link Gst.Buffer}
     * @returns The {@link GstAnalytics.RelationMeta} if there is one
     * @since 1.24
     */
    function buffer_get_analytics_relation_meta(buffer: Gst.Buffer): RelationMeta | null;
    /**
     * Get an id identifying {@link GstAnalytics.Mtd} type.
     * @returns opaque id of {@link GstAnalytics.Mtd} type
     * @since 1.24
     */
    function cls_mtd_get_mtd_type(): MtdType;
    /**
     * Gets the string version of the name of this type of analytics data
     * @param type The type of analytics data
     * @returns the name
     * @since 1.24
     */
    function mtd_type_get_name(type: MtdType): string;
    /**
     * Get an id that represent object-detection metadata type
     * @returns Opaque id of the {@link GstAnalytics.Mtd} type
     * @since 1.24
     */
    function od_mtd_get_mtd_type(): MtdType;
    /**
     * Get number of relatable meta attached to instance
     * @param instance Instance of {@link GstAnalytics.RelationMeta}
     * @returns Number of analysis-meta attached to this  instance.
     * @since 1.24
     */
    function relation_get_length(instance: RelationMeta): number;
    /**
     * @returns GType of GstAnalyticsRelationMeta
     * @since 1.24
     */
    function relation_meta_api_get_type(): GObject.GType;
    /**
     * @returns id representing the type of GstAnalyticsRelatableMtd Get the opaque id identifying the relatable type
     * @since 1.24
     */
    function tracking_mtd_get_mtd_type(): MtdType;
    /**
     * @gir-type Flags
     * @since 1.24
     */
    enum RelTypes {
        /**
         * No relation
         */
        NONE,
        /**
         * First analysis-meta is part of second analysis-meta
         */
        IS_PART_OF,
        /**
         * First analysis-meta contain second analysis-meta.
         */
        CONTAIN,
        RELATE_TO,
        /**
         * reserved
         */
        LAST,
        /**
         * Only use for criteria.
         */
        ANY,
    }

    /**
     * Handle containing data required to use gst_analytics_cls_mtd APIs. This type
     * is generally expected to be allocated on the stack.
     * @gir-type Struct
     * @since 1.24
     */
    class ClsMtd {
        static $gtype: GObject.GType<ClsMtd>;

        // Fields

        id: number;

        // Static methods

        /**
         * Get an id identifying {@link GstAnalytics.Mtd} type.
         */
        static get_mtd_type(): MtdType;

        // Methods

        /**
         * @param quark Quark of the class Get index of class represented by `quark`
         * @returns index of the class associated with `quarks` ( and label) or     a negative value on failure.
         */
        get_index_by_quark(quark: GLib.Quark): number;
        /**
         * @returns Number of classes in this classification instance
         */
        get_length(): number;
        /**
         * Get confidence level for class at `index`
         * @param index Object class index
         * @returns confidence level for `index`, <0.0 if the call failed.
         */
        get_level(index: number): number;
        /**
         * @param index index of the class Get quark of the class at `index`
         * @returns Quark of this class (label) associated with `index`
         */
        get_quark(index: number): GLib.Quark;
    }

    /**
     * Handle containing data required to use gst_analytics_mtd API. This type
     * is generally expected to be allocated on the stack.
     * @gir-type Struct
     * @since 1.24
     */
    class Mtd {
        static $gtype: GObject.GType<Mtd>;

        // Fields

        id: number;

        // Static methods

        /**
         * Gets the string version of the name of this type of analytics data
         * @param type The type of analytics data
         */
        static type_get_name(type: MtdType): string;

        // Methods

        /**
         * Get instance id
         * @returns Id of `instance`
         */
        get_id(): number;
        /**
         * @returns opaque id of the type
         */
        get_mtd_type(): MtdType;
        /**
         * Get instance size
         * @returns Size (in bytes) of this instance or 0 on failure.
         */
        get_size(): number;
    }

    /**
     * This structure must be provided when registering a new type of Mtd. It must
     * have a static lifetime (never be freed).
     * @gir-type Struct
     * @since 1.24
     */
    class MtdImpl {
        static $gtype: GObject.GType<MtdImpl>;

        // Fields

        name: string;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
            }>,
        );
    }

    /**
     * Handle containing data required to use gst_analytics_od_mtd APIs. This type
     * is generally expected to be allocated on the stack.
     * @gir-type Struct
     * @since 1.24
     */
    class ODMtd {
        static $gtype: GObject.GType<ODMtd>;

        // Fields

        id: number;

        // Static methods

        /**
         * Get an id that represent object-detection metadata type
         */
        static get_mtd_type(): MtdType;

        // Methods

        /**
         * Retrieve location confidence level.
         * @returns TRUE on success, otherwise FALSE.
         */
        get_confidence_lvl(): [boolean, number];
        /**
         * Retrieve location and location confidence level.
         * @returns TRUE on success, otherwise FALSE.
         */
        get_location(): [boolean, number, number, number, number, number];
        /**
         * Quark of the class of object associated with this location.
         * @returns Quark different from on success and 0 on failure.
         */
        get_obj_type(): GLib.Quark;
    }

    /**
     * An opaque {@link Gst.Meta} that can be used to hold various types of results
     * from analysis processes.
     *
     * The content should be accessed through the API.
     * @gir-type Struct
     * @since 1.24
     */
    abstract class RelationMeta {
        static $gtype: GObject.GType<RelationMeta>;

        // Methods

        /**
         * Add analytic classification metadata to `instance`.
         * @param confidence_levels confidence levels
         * @param class_quarks labels of this    classification. Order define index, quark, labels relation. This array    need to exist as long has this classification meta exist.
         * @returns Added successfully
         */
        add_cls_mtd(confidence_levels: number[], class_quarks: GLib.Quark[]): [boolean, ClsMtd];
        /**
         * @param type Quark of the object type
         * @param x x component of bounding box upper-left corner
         * @param y y component of bounding box upper-left corner
         * @param w bounding box width
         * @param h bounding box height
         * @param loc_conf_lvl confidence level on the object location
         * @returns Added successfully
         */
        add_od_mtd(
            type: GLib.Quark,
            x: number,
            y: number,
            w: number,
            h: number,
            loc_conf_lvl: number,
        ): [boolean, ODMtd | null];
        /**
         * Add analytic classification metadata to `instance`.
         * @param confidence_level confidence levels
         * @param class_quark labels of this    classification. Order define index, quark, labels relation. This array    need to exist as long has this classification meta exist.
         * @returns Added successfully
         */
        add_one_cls_mtd(confidence_level: number, class_quark: GLib.Quark): [boolean, ClsMtd];
        /**
         * @param tracking_id Tracking id
         * @param tracking_first_seen Timestamp of first time the object was observed.
         * @returns Added successfully
         */
        add_tracking_mtd(tracking_id: number, tracking_first_seen: Gst.ClockTime): [boolean, TrackingMtd];
        /**
         * Verify existence of relation(s) between `an_meta_first_d` and
         * `an_meta_second_id` according to relation condition `cond_types`. It optionally
         * also return a shortest path of relations ( compliant with `cond_types`)
         * between `an_meta_first_id` and `an_meta_second_id`.
         * @param an_meta_first_id First analysis-meta
         * @param an_meta_second_id Second analysis-meta
         * @param max_relation_span Maximum number of relation between `an_meta_first_id` and    `an_meta_second_id`.    A value of 1 mean only only consider direct relation.
         * @param cond_types condition on relation types.
         * @returns TRUE if a relation between exit between `an_meta_first_id` and  `an_meta_second_id`, otherwise FALSE.
         */
        exist(
            an_meta_first_id: number,
            an_meta_second_id: number,
            max_relation_span: number,
            cond_types: RelTypes | null,
        ): [boolean, number[] | null];
        /**
         * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
         * otherwise this method return FALSE and `rlt` is invalid.
         * @param an_meta_id Id of {@link GstAnalytics.ClsMtd} instance to retrieve
         * @returns TRUE if successful.
         */
        get_cls_mtd(an_meta_id: number): [boolean, ClsMtd];
        /**
         * @param an_meta_id Id of GstAnalyticsMtd involved in relation to query
         * @param relation_type Type of relation to filter on.
         * @param type Type of GstAnalyticsMtd to filter on
         * @param state Opaque data to store state of the query.    If `state` point to NULL, the first analytics-metadata directly related    to `an_meta_id` will be set in `rlt_mtd`. Doesn't need to be free.
         * @param rlt_mtd Handle updated to directly related relatable meta.
         * @returns TRUE if `rlt_mtd` was updated, other wise FALSE
         */
        get_direct_related(
            an_meta_id: number,
            relation_type: RelTypes | null,
            type: MtdType,
            state: any,
            rlt_mtd: Mtd,
        ): [boolean, any];
        /**
         * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
         * otherwise this method return FALSE and `rlt` is invalid.
         * @param an_meta_id Id of GstAnalyticsMtd instance to retrieve
         * @param type Filter on a specific type of analysis, use  `GST_ANALYTICS_MTD_TYPE_ANY` to match any type
         * @returns TRUE if successful.
         */
        get_mtd(an_meta_id: number, type: MtdType): [boolean, Mtd];
        /**
         * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
         * otherwise this method return FALSE and `rlt` is invalid.
         * @param an_meta_id Id of {@link GstAnalytics.ODMtd} instance to retrieve
         * @returns TRUE if successful.
         */
        get_od_mtd(an_meta_id: number): [boolean, ODMtd];
        /**
         * Get relations between first and second analysis-meta.
         * Ids (`an_meta_first_id` and `an_meta_second_id`) must be from a call to
         * `gst_analytics_mtd_get_id` (handle).
         * @param an_meta_first_id Id of first analysis-meta
         * @param an_meta_second_id Id of second  analysis-meta
         * @returns relation description between first and second analysis-meta.
         */
        get_relation(an_meta_first_id: number, an_meta_second_id: number): RelTypes;
        /**
         * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
         * otherwise this method return FALSE and `rlt` is invalid.
         * @param an_meta_id Id of GstAnalyticsMtd instance to retrieve
         * @returns TRUE if successful.
         */
        get_tracking_mtd(an_meta_id: number): [boolean, TrackingMtd];
        /**
         * @param state Opaque data to store iteration state, initialize to NULL, no need to    free it.
         * @param type Type of GstAnalyticsMtd to iterate on or use  `GST_ANALYTICS_MTD_TYPE_ANY` for any.
         * @param rlt_mtd Handle updated to iterated GstAnalyticsRelatableMtd.
         * @returns FALSE if end was reached and iteration is completed.
         */
        iterate(state: any | null, type: MtdType, rlt_mtd: Mtd): boolean;
        /**
         * Sets the relation ({@link GstAnalytics.RelTypes}) between `an_meta_first` and
         *    `an_meta_second`.
         * Ids must have been obtained a call to
         *    `gst_analytics_mtd_get_id`(handle).
         * @param type a {@link GstAnalytics.RelTypes} defining relation between two analysis-meta
         * @param an_meta_first_id first meta id
         * @param an_meta_second_id second meta id
         * @returns TRUE on success and FALSE on failure.
         */
        set_relation(type: RelTypes | null, an_meta_first_id: number, an_meta_second_id: number): boolean;
    }

    /**
     * GstAnalyticsRelationMeta initialization parameters.
     * @gir-type Struct
     * @since 1.24
     */
    class RelationMetaInitParams {
        static $gtype: GObject.GType<RelationMetaInitParams>;

        // Fields

        initial_relation_order: number;
        initial_buf_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                initial_relation_order: number;
                initial_buf_size: number;
            }>,
        );
    }

    /**
     * Store information on results of object tracking
     * @gir-type Struct
     * @since 1.24
     */
    class TrackingMtd {
        static $gtype: GObject.GType<TrackingMtd>;

        // Fields

        id: number;

        // Static methods

        static get_mtd_type(): MtdType;

        // Methods

        /**
         * Retrieve tracking information.
         * @returns Successfully retrieved info.
         */
        get_info(): [boolean, number, Gst.ClockTime, Gst.ClockTime, boolean];
        /**
         * @returns Update successful
         */
        set_lost(): boolean;
        /**
         * @param last_seen Timestamp of last time this object was tracked
         */
        update_last_seen(last_seen: Gst.ClockTime): boolean;
    }

    /**
     * Type of analytics meta data
     * @gir-type Alias
     */
    type MtdType = never;
    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default GstAnalytics;

// END
