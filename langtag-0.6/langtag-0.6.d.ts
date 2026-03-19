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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace LangTag {
    /**
     * LangTag-0.6
     */

    /**
     * Error code used in this library.
     * @gir-type Enum
     */
    enum ErrorType {}

    /**
     * This is used as a binary count sequence with `lt_tag_get_string_with_filter()`
     * to allow only given tags to be the outcome.
     * @gir-type Enum
     */
    enum TagFilter {}

    const DIR_SEPARATOR: number;
    const DIR_SEPARATOR_S: string;
    /**
     * Static variable for the module version. this is used to ensure if the built
     * module is compatible with the runtime library.
     */
    const EXT_MODULE_VERSION: number;
    const PATH_MAX: number;
    const SEARCHPATH_SEPARATOR: number;
    const SEARCHPATH_SEPARATOR_S: string;
    function db_finalize(): void;
    function db_get_datadir(): string;
    function db_get_extlang(): ExtlangDb;
    function db_get_grandfathered(): GrandfatheredDb;
    function db_get_lang(): LangDb;
    function db_get_redundant(): RedundantDb;
    function db_get_region(): RegionDb;
    function db_get_relation(): RelationDb;
    function db_get_script(): ScriptDb;
    function db_get_variant(): VariantDb;
    function db_initialize(): void;
    /**
     * @param path
     */
    function db_set_datadir(path: string): void;
    /**
     * @param val
     */
    function db_set_val(val: DbVal): void;
    /**
     * Load all of the modules on the system, including the internal accessor.
     * This has to be invoked before processing something with `lt_extension_t`.
     * or `lt_db_initialize()` does.
     */
    function ext_modules_load(): void;
    /**
     * Unload all of the modules already loaded.
     */
    function ext_modules_unload(): void;
    /**
     * Initialize the iterator with `tmpl` object. this function has to be called
     * before performing any opperation with the iterator and `lt_iter_finish()`
     * when the iterator isn't needed anymore.
     *
     * ```
     * lt_lang_db *lang = `lt_lang_db_new()`;
     * LtPointer *key, *val;
     * LtIter *iter;
     *
     * iter = LT_ITER_INIT (lang);
     * while (lt_iter_next(iter, &key, &val)) {
     *   /&ast; do something with key and value &ast;/
     * }
     * lt_iter_finish(iter);
     * ```
     *
     * @param tmpl a #LtItermpl_t
     * @returns the initialized iterator object.
     */
    function iter_init(tmpl: IterTmpl): Iter;
    /**
     * Frees all of the memory used by a {@link LangTag.List}.
     * @param data a {@link LangTag.List}.
     */
    function list_free(data: Pointer): void;
    /**
     * Convert current locale to the language tag.
     * @param error a {@link LangTag.Error}.
     * @returns a {@link LangTag.Tag}, `null` if fails.
     */
    function tag_convert_from_locale(error?: Error | null): Tag;
    /**
     * Convert `locale` to the language tag.
     * @param locale a locale string
     * @param error a {@link LangTag.Error} or `null`.
     * @returns a {@link LangTag.Tag}, `null` if fails.
     */
    function tag_convert_from_locale_string(locale: string, error?: Error | null): Tag;
    /**
     * @gir-type Callback
     */
    interface CompareFunc {
        (v1: Pointer, v2: Pointer): number;
    }
    /**
     * @gir-type Callback
     */
    interface CopyFunc {
        (data: Pointer): Pointer;
    }
    /**
     * @gir-type Callback
     */
    interface DestroyFunc {
        (data: Pointer): void;
    }
    /**
     * @gir-type Callback
     */
    interface ExtModuleDataNewFunc {
        (): ExtModuleData;
    }
    /**
     * @gir-type Callback
     */
    interface ExtModuleGetFuncsFunc {
        (): ExtModuleFuncs;
    }
    /**
     * @gir-type Callback
     */
    interface ExtModuleGetTagFunc {
        (data: ExtModuleData): string;
    }
    /**
     * @gir-type Callback
     */
    interface ExtModuleParseFunc {
        (data: ExtModuleData, subtag: string, error?: Error | null): Bool;
    }
    /**
     * @gir-type Callback
     */
    interface ExtModulePrecheckFunc {
        (data: ExtModuleData, tag: Tag, error?: Error | null): Bool;
    }
    /**
     * @gir-type Callback
     */
    interface ExtModuleSingletonFunc {
        (): number;
    }
    /**
     * @gir-type Callback
     */
    interface ExtModuleValidateFunc {
        (data: ExtModuleData): Bool;
    }
    /**
     * @gir-type Callback
     */
    interface ExtModuleVersionFunc {
        (): number;
    }
    /**
     * The database set of structure to peek instances of them. this is useful
     * for the debugging purpose only.
     * @gir-type Struct
     */
    class DbVal {
        static $gtype: GObject.GType<DbVal>;
    }

    /**
     * All the fields in the <structname>LtError</structname>
     * structure are private to the {@link LangTag.Error} implementation.
     * @gir-type Struct
     */
    class Error {
        static $gtype: GObject.GType<Error>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Error;

        // Methods

        /**
         * Clean up all of the errors in `error`.
         */
        clear(): void;
        /**
         * Checks if `error` contains `type` of errors. if #LT_ERR_ANY is set to `type`,
         * all the types of the errors are targeted. otherwise the result is filtered
         * out by `type`.
         * @param type a #LtErrorype_t
         * @returns `true` if any, otherwise `false`
         */
        is_set(type: ErrorType | null): Bool;
        /**
         * Output the error messages in `error` according to `type`.
         * @param type a #LtErrorype_t
         */
        print(type: ErrorType | null): void;
        /**
         * Inscreases the reference count of `error`.
         * @returns the same `error` object.
         */
        ref(): Error;
        /**
         * Decreases the reference count of `error`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtExtModule</structname>
     * structure are private to the {@link LangTag.ExtModule} implementation.
     * @gir-type Struct
     */
    abstract class ExtModule {
        static $gtype: GObject.GType<ExtModule>;

        // Methods

        /**
         * Increases the reference count of `module`.
         * @returns the same `module` object.
         */
        ref(): ExtModule;
        /**
         * Decreases the reference count of `module`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtExtModuleData</structname>
     * structure are private to the {@link LangTag.ExtModuleData} implementation.
     * @gir-type Struct
     */
    class ExtModuleData {
        static $gtype: GObject.GType<ExtModuleData>;

        // Fields

        dummy: Pointer[];

        // Constructors

        constructor(
            properties?: Partial<{
                dummy: Pointer[];
            }>,
        );

        static ['new'](size: number, finalizer: DestroyFunc): ExtModuleData;

        // Methods

        /**
         * Increases the reference count of `data`.
         * @returns the same `data` object.
         */
        ref(): ExtModuleData;
        /**
         * Decreases the reference count of `data`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * The <structname>LtExtModuleFuncs</structname> struct is a callback
     * collection to provide an accessor between `lt_extension_t`
     * and {@link LangTag.ExtModule} and extend features.
     * @gir-type Struct
     */
    class ExtModuleFuncs {
        static $gtype: GObject.GType<ExtModuleFuncs>;

        // Fields

        get_singleton: ExtModuleSingletonFunc;
        create_data: ExtModuleDataNewFunc;
        precheck_tag: ExtModulePrecheckFunc;
        parse_tag: ExtModuleParseFunc;
        get_tag: ExtModuleGetTagFunc;
        validate_tag: ExtModuleValidateFunc;
    }

    /**
     * All the fields in the <structname>LtExtension</structname>
     * structure are private to the {@link LangTag.Extension} implementation.
     * @gir-type Struct
     */
    abstract class Extension {
        static $gtype: GObject.GType<Extension>;

        // Methods

        /**
         * Compare if `v1` and `v2` is the same object or not.
         * @param v2 a {@link LangTag.Extension}.
         * @returns `true` if it's the same, otherwise `false`.
         */
        compare(v2: Extension): Bool;
        /**
         * Dumps the container information to the standard output.
         */
        dump(): void;
        /**
         * Generate a canonicalized tag.
         * @returns a string. this must be freed.
         */
        get_canonicalized_tag(): string;
        /**
         * Obtain the tag string.
         * @returns the tag string.
         */
        get_tag(): string;
        /**
         * Increases the reference count of `extension`.
         * @returns the same `extension` object.
         */
        ref(): Extension;
        truncate(): Bool;
        /**
         * Decreases the reference count of `extension`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtExtlang</structname>
     * structure are private to the {@link LangTag.Extlang} implementation.
     * @gir-type Struct
     */
    abstract class Extlang {
        static $gtype: GObject.GType<Extlang>;

        // Methods

        /**
         * Compares if `v1` and `v2` is the same object or not.
         * @param v2 a {@link LangTag.Extlang}.
         * @returns `true` if it's the same, otherwise `false`.
         */
        compare(v2: Extlang): Bool;
        /**
         * Dumps the container information to the standard output.
         */
        dump(): void;
        /**
         * Obtains the macrolanguage being assigned for the subtag.
         * This is available only when the subtag is registered as the macrolanguage
         * in ISO 639-3.
         * @returns a macrolanguage string or `null`.
         */
        get_macro_language(): string;
        /**
         * Obtains the description of the subtag.
         * @returns a description string.
         */
        get_name(): string;
        /**
         * Obtains the preferred-value. this is available only when the subtag is
         * marked as deprecated.
         * @returns a preferred-value for the subtag or `null`.
         */
        get_preferred_tag(): string;
        /**
         * Obtains the prefix being assigned to the subtag.
         * This is available only when the subtag has a particular seqnence of
         * subgtags that form a meaningful tag with the subtag.
         * @returns a prefix string or `null`.
         */
        get_prefix(): string;
        /**
         * Obtains the subtag that is registered as ISO 639 code.
         * @returns a subtag name.
         */
        get_tag(): string;
        /**
         * Increases the reference count of `extlang`.
         * @returns the same `extlang` object.
         */
        ref(): Extlang;
        /**
         * Decreases the reference count of `extlang`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtExtlangDb</structname>
     * structure are private to the {@link LangTag.ExtlangDb} implementation.
     * @gir-type Struct
     */
    class ExtlangDb {
        static $gtype: GObject.GType<ExtlangDb>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): ExtlangDb;

        // Methods

        /**
         * Lookup `LtExtlang` if `subtag` is valid and registered into the database.
         * @param subtag a subtag name to lookup.
         * @returns a {@link LangTag.Extlang} that meets with `subtag`.                           otherwise `null`.
         */
        lookup(subtag: string): Extlang;
        /**
         * Increases the reference count of `extlangdb`.
         * @returns the same `extlangdb` object.
         */
        ref(): ExtlangDb;
        /**
         * Decreases the reference count of `extlangdb`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtGrandfathered</structname>
     * structure are private to the {@link LangTag.Grandfathered} implementation.
     * @gir-type Struct
     */
    abstract class Grandfathered {
        static $gtype: GObject.GType<Grandfathered>;

        // Methods

        /**
         * Compare if `v1` and `v2` is the same object or not.
         * @param v2 a {@link LangTag.Grandfathered}.
         * @returns `true` if it's the same. otherwise `false`.
         */
        compare(v2: Grandfathered): Bool;
        /**
         * Dumps the container information to the standard output.
         */
        dump(): void;
        /**
         * Obtains the better tag for use. this is a convenient function to get
         * the preferred-value if available.
         * @returns a tag string.
         */
        get_better_tag(): string;
        /**
         * Obtains the description of the tag.
         * @returns a description string.
         */
        get_name(): string;
        /**
         * Obtains the preferred-value. this is available only when the tag is
         * marked as deprecated.
         * @returns a preferred-value for the tag or `null`.
         */
        get_preferred_tag(): string;
        /**
         * Obtains the tag name.
         * @returns a tag string.
         */
        get_tag(): string;
        /**
         * Increases the reference count of `grandfathered`.
         * @returns the same `grandfathered` object.
         */
        ref(): Grandfathered;
        /**
         * Decreases the reference count of `grandfathered`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtGrandfatheredDb</structname>
     * structure are private to the {@link LangTag.GrandfatheredDb} implementation.
     * @gir-type Struct
     */
    class GrandfatheredDb {
        static $gtype: GObject.GType<GrandfatheredDb>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): GrandfatheredDb;

        // Methods

        /**
         * Lookup `LtGrandfathered` if `tag` is valid and registered into the database.
         * @param tag a tag name to lookup.
         * @returns a {@link LangTag.Grandfathered} that meets with `tag`.                           otherwise `null`.
         */
        lookup(tag: string): Grandfathered;
        /**
         * Increases the reference count of `grandfathereddb`.
         * @returns the same `grandfathereddb` object.
         */
        ref(): GrandfatheredDb;
        /**
         * Decreases the reference count of `grandfathereddb`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtIter</structname>
     * structure are private to the {@link LangTag.Iter} implementation.
     * @gir-type Struct
     */
    abstract class Iter {
        static $gtype: GObject.GType<Iter>;

        // Static methods

        /**
         * Initialize the iterator with `tmpl` object. this function has to be called
         * before performing any opperation with the iterator and `lt_iter_finish()`
         * when the iterator isn't needed anymore.
         *
         * ```
         * lt_lang_db *lang = `lt_lang_db_new()`;
         * LtPointer *key, *val;
         * LtIter *iter;
         *
         * iter = LT_ITER_INIT (lang);
         * while (lt_iter_next(iter, &key, &val)) {
         *   /&ast; do something with key and value &ast;/
         * }
         * lt_iter_finish(iter);
         * ```
         *
         * @param tmpl a #LtItermpl_t
         */
        static init(tmpl: IterTmpl): Iter;

        // Methods

        /**
         * Finalize the iterator and free its memory.
         */
        finish(): void;
        /**
         * Advances `iter` and retrieves the key and/or value that are now
         * pointed to as a result of this advancement. If `false` is returned,
         * `key` and `value` are not set, and the iterator becomes invalid.
         * @param key a location to store the key, or `null`
         * @param val a location to store the value, or `null`
         * @returns `false` if the end of the object that the iterator is adapted          has been reached.
         */
        next(key?: Pointer | null, val?: Pointer | null): Bool;
        /**
         * Increases the reference count of `iter`.
         * @returns the same `iter` object.
         */
        ref(): Iter;
        /**
         * Decreases the reference count of `iter`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtIterTmpl</structname>
     * structure are private to the {@link LangTag.IterTmpl} implementation.
     * @gir-type Struct
     */
    abstract class IterTmpl {
        static $gtype: GObject.GType<IterTmpl>;
    }

    /**
     * All the fields in the <structname>LtLang</structname>
     * structure are private to the {@link LangTag.Lang} implementation.
     * @gir-type Struct
     */
    abstract class Lang {
        static $gtype: GObject.GType<Lang>;

        // Methods

        /**
         * Compare if `v1` and `v2` is the same object or not.
         * @param v2 a {@link LangTag.Lang}.
         * @returns `true` if it's the same, otherwise `false`.
         */
        compare(v2: Lang): Bool;
        /**
         * Dumps the container information to the standard output.
         */
        dump(): void;
        /**
         * Obtains the better tag for use. this is a convenient function to get
         * the preferred-value if available.
         * @returns a tag string.
         */
        get_better_tag(): string;
        /**
         * Obtains the macrolanguage being assigned for the subtag.
         * This is available only when the subtag is registered as the macrolanguage
         * in ISO 639-3.
         * @returns a macrolanguage string or `null`.
         */
        get_macro_language(): string;
        /**
         * Obtains the description of the subtag.
         * @returns a description string.
         */
        get_name(): string;
        /**
         * Obtains the preferred-value. this is available only when the tag is
         * marked as deprecated.
         * @returns a preferred-value for the tag or `null`.
         */
        get_preferred_tag(): string;
        /**
         * Obtains the scope value indicating the type of language code according
         * to ISO 639.
         * @returns a scope string or `null`.
         */
        get_scope(): string;
        /**
         * Obtains the suppress-script value. which shouldn't be used to form
         * language tags with the associated primary or extended language subtag.
         * @returns a suppress-script string or `null`.
         */
        get_suppress_script(): string;
        /**
         * Obtains the tag name.
         * @returns a tag string.
         */
        get_tag(): string;
        /**
         * Increases the reference count of `lang`.
         * @returns the same `lang` object.
         */
        ref(): Lang;
        /**
         * Decreases the reference count of `lang`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtLangDb</structname>
     * structure are private to the {@link LangTag.LangDb} implementation.
     * @gir-type Struct
     */
    class LangDb {
        static $gtype: GObject.GType<LangDb>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): LangDb;

        // Methods

        /**
         * Lookup `LtLang` if `subtag` is valid and registered into the database.
         * @param subtag a subtag name to lookup.
         * @returns a {@link LangTag.Lang} that meets with `subtag`.                           otherwise `null`.
         */
        lookup(subtag: string): Lang;
        /**
         * Increases the reference count of `langdb`.
         * @returns the same `langdb` object.
         */
        ref(): LangDb;
        /**
         * Decreases the reference count of `langdb`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtList</structname>
     * structure are private to the {@link LangTag.List} implementation.
     * @gir-type Struct
     */
    class List {
        static $gtype: GObject.GType<List>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): List;

        // Static methods

        /**
         * Frees all of the memory used by a {@link LangTag.List}.
         * @param data a {@link LangTag.List}.
         */
        static free(data: Pointer): void;

        // Methods

        /**
         * Adds a new element on to the end of the list.
         * @param data the data for the new element
         * @param func the call back function to destroy `data` or `null`
         * @returns the new start of the {@link LangTag.List}.
         */
        append(data: Pointer, func: DestroyFunc): List;
        /**
         * Removes an element from a {@link LangTag.List}.
         * If two elements contain the same data, only the first is removed.
         * If none of the elements contain the data, the {@link LangTag.List} is unchanged.
         * @param data the data of the element to remove.
         * @returns the new start of the {@link LangTag.List}.
         */
        ['delete'](data: Pointer): List;
        /**
         * Removes the node `link_` from the `list` and frees it.
         * @param link_ node to delete from `list`
         * @returns the new head of `list`
         */
        delete_link(link_: List): List;
        /**
         * Finds the element in a {@link LangTag.List} which
         * contains the given data.
         * @param data the element data to find
         * @returns the found {@link LangTag.List} element, or `null` if it's not found
         */
        find(data: Pointer): List;
        /**
         * Finds an element in a {@link LangTag.List}, using a supplied function to
         * find the desired element. It iterates over the list, calling
         * the given function which should return 0 when the desired
         * element is found. The function takes two const {@link LangTag.Pointer}
         * arguments, the {@link LangTag.List} element's data as the first argument
         * and the given data.
         * @param data the data passed to the function
         * @param func the function to call for each element.        It should return 0 when the desired element is found
         * @returns the found {@link LangTag.List} element, or `null` if it's not found
         */
        find_custom(data: Pointer, func: CompareFunc): List;
        /**
         * Gets the first element in a {@link LangTag.List}.
         * @returns the first element in the {@link LangTag.List}          or `null` if the {@link LangTag.List} has no elements.
         */
        first(): List;
        /**
         * Gets the last element in a {@link LangTag.List}.
         * @returns the last element in the {@link LangTag.List}          or `null` if the {@link LangTag.List} has no elements.
         */
        last(): List;
        /**
         * Gets the number of elements in a {@link LangTag.List}.
         * @returns the number of elements in the {@link LangTag.List}.
         */
        length(): number;
        /**
         * Gets the next element in a {@link LangTag.List}.
         * @returns the next element, or `null` if there are no more elements.
         */
        next(): List;
        /**
         * Sets the data in the first element to `data` and drop the element.
         * @param data a pointer to set the data in the first element
         * @returns the new head of `list`.
         */
        pop(data: Pointer): List;
        /**
         * Adds a new element on to the start of the list.
         * @param data the data for the new element
         * @param func the call back function to destroy `data` or `null`
         * @returns the new start of the {@link LangTag.List}.
         */
        prepend(data: Pointer, func: DestroyFunc): List;
        /**
         * Gets the previous element in a {@link LangTag.List}.
         * @returns the previous element, or `null` if there are no previous elements.
         */
        previous(): List;
        /**
         * Increases the reference count of `list`.
         * @returns the same `list` object.
         */
        ref(): List;
        /**
         * Removes an element from a {@link LangTag.List}.
         * If two elements contain the same data, only the first is removed.
         * If none of the elements contain the data, the {@link LangTag.List} is unchanged.
         * This works similar to `lt_list_delete()` though, the difference is
         * this won't calls the finalizer to destroy the data in the element.
         * @param data the data of the element to remove.
         * @returns the new start of the {@link LangTag.List}.
         */
        remove(data: Pointer): List;
        /**
         * Sorts a {@link LangTag.List} using the given comparison function.
         * @param func the comparison function used to sort the {@link LangTag.List}.        This function is passed the data from 2 elements of the {@link LangTag.List}        and should return 0 if they are equal, a negative value if the        first element comes before the second, or a positive value if        the first element comes after the second.
         * @returns the start of the sorted {@link LangTag.List}
         */
        sort(func: CompareFunc): List;
        /**
         * Decreases the reference count of `list`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
        /**
         * Gets a value in a {@link LangTag.List}.
         * @returns a pointer to be set to the {@link LangTag.List}.
         */
        value(): Pointer;
    }

    /**
     * All the fields in the <structname>LtRedundant</structname>
     * structure are private to the {@link LangTag.Redundant} implementation.
     * @gir-type Struct
     */
    abstract class Redundant {
        static $gtype: GObject.GType<Redundant>;

        // Methods

        /**
         * Compare if `v1` and `v2` is the same object or not.
         * @param v2 a {@link LangTag.Redundant}.
         * @returns `true` if it's the same. otherwise `false`.
         */
        compare(v2: Redundant): Bool;
        /**
         * Dumps the container information to the standard output.
         */
        dump(): void;
        /**
         * Obtains the better tag for use. this is a convenient function to get
         * the preferred-value if available.
         * @returns a tag string.
         */
        get_better_tag(): string;
        /**
         * Obtains the description of the tag.
         * @returns a description string.
         */
        get_name(): string;
        /**
         * Obtains the preferred-value. this is available only when the tag is
         * marked as deprecated.
         * @returns a preferred-value for the tag or `null`.
         */
        get_preferred_tag(): string;
        /**
         * Obtains the tag name.
         * @returns a tag string.
         */
        get_tag(): string;
        /**
         * Increases the reference count of `redundant`.
         * @returns the same `redundant` object.
         */
        ref(): Redundant;
        /**
         * Decreases the reference count of `redundant`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtRedundantDb</structname>
     * structure are private to the {@link LangTag.RedundantDb} implementation.
     * @gir-type Struct
     */
    class RedundantDb {
        static $gtype: GObject.GType<RedundantDb>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): RedundantDb;

        // Methods

        /**
         * Lookup `LtRedundant` if `tag` is valid and registered into the database.
         * @param tag a tag name to lookup.
         * @returns a {@link LangTag.Redundant} that meets with `tag`.                           otherwise `null`.
         */
        lookup(tag: string): Redundant;
        /**
         * Increases the reference count of `redundantdb`.
         * @returns the same `redundantdb` object.
         */
        ref(): RedundantDb;
        /**
         * Decreases the reference count of `redundantdb`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtRegion</structname>
     * structure are private to the {@link LangTag.Region} implementation.
     * @gir-type Struct
     */
    abstract class Region {
        static $gtype: GObject.GType<Region>;

        // Methods

        /**
         * Compare if `v1` and `v2` is the same object or not.
         * @param v2 a {@link LangTag.Region}.
         * @returns `true` if it's the same, otherwise `false`.
         */
        compare(v2: Region): Bool;
        /**
         * Dumps the container information to the standard output.
         */
        dump(): void;
        /**
         * Obtains the better tag for use. this is a convenient function to get
         * the preferred-value if available.
         * @returns a tag string.
         */
        get_better_tag(): string;
        /**
         * Obtains the description of the subtag.
         * @returns a description string.
         */
        get_name(): string;
        /**
         * Obtains the preferred-value. this is available only when the tag is
         * marked as deprecated.
         * @returns a preferred-value for the tag or `null`.
         */
        get_preferred_tag(): string;
        /**
         * Obtains the tag name.
         * @returns a tag string.
         */
        get_tag(): string;
        /**
         * Increases the reference count of `region`.
         * @returns the same `region` object.
         */
        ref(): Region;
        /**
         * Decreases the reference count of `region`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtRegionDb</structname>
     * structure are private to the {@link LangTag.RegionDb} implementation.
     * @gir-type Struct
     */
    class RegionDb {
        static $gtype: GObject.GType<RegionDb>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): RegionDb;

        // Methods

        /**
         * Lookup `LtRegion` if `language_or_code` is valid and registered into
         * the database.
         * @param language_or_code a region code to lookup.
         * @returns a {@link LangTag.Region} that meets with `language_or_code`.                           otherwise `null`.
         */
        lookup(language_or_code: string): Region;
        /**
         * Increases the reference count of `regiondb`.
         * @returns the same `regiondb` object.
         */
        ref(): RegionDb;
        /**
         * Decreases the reference count of `regiondb`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtRelationDb</structname>
     * structure are private to the {@link LangTag.RelationDb} implementation.
     * @gir-type Struct
     */
    class RelationDb {
        static $gtype: GObject.GType<RelationDb>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): RelationDb;

        // Methods

        /**
         * Look up the languages corresponding to the script `script`.
         * @param script a {@link LangTag.Script}.
         * @returns a {@link LangTag.List} containing {@link LangTag.Lang} object.
         */
        lookup_lang_from_script(script: Script): List;
        /**
         * Look up the scripts corresponding to the language `lang`.
         * @param lang a {@link LangTag.Lang}.
         * @returns a {@link LangTag.List} containing {@link LangTag.Script} objects.
         */
        lookup_script_from_lang(lang: Lang): List;
        /**
         * Increases the reference count of `relationdb`.
         * @returns the same `relationddb` object.
         */
        ref(): RelationDb;
        /**
         * Decreases the reference count of `relationdb`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtScript</structname>
     * structure are private to the {@link LangTag.Script} implementation.
     * @gir-type Struct
     */
    abstract class Script {
        static $gtype: GObject.GType<Script>;

        // Methods

        /**
         * Compare if `v1` and `v2` is the same object or not.
         * @param v2 a {@link LangTag.Script}.
         * @returns `true` if it's the same, otherwise `false`.
         */
        compare(v2: Script): Bool;
        /**
         * Convert the script subtag to the locale variant modifier.
         * @returns a modifier string or `null`.
         */
        convert_to_modifier(): string;
        /**
         * Dumps the container information to the standard output.
         */
        dump(): void;
        /**
         * Obtains the description of the subtag.
         * @returns a description string.
         */
        get_name(): string;
        /**
         * Obtains the tag name.
         * @returns a tag string.
         */
        get_tag(): string;
        /**
         * Increases the reference count of `script`.
         * @returns the same `script` object.
         */
        ref(): Script;
        /**
         * Decreases the reference count of `script`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtScriptDb</structname>
     * structure are private to the {@link LangTag.ScriptDb} implementation.
     * @gir-type Struct
     */
    class ScriptDb {
        static $gtype: GObject.GType<ScriptDb>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): ScriptDb;

        // Methods

        /**
         * Lookup `LtScript` if `subtag` is valid and registered into the database.
         * @param subtag a subtag name to lookup.
         * @returns a {@link LangTag.Script} that meets with `subtag`.                           otherwise `null`.
         */
        lookup(subtag: string): Script;
        /**
         * Increases the reference count of `scriptdb`.
         * @returns the same `scriptdb` object.
         */
        ref(): ScriptDb;
        /**
         * Decreases the reference count of `scriptdb`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtString</structname>
     * structure are private to the {@link LangTag.String} implementation.
     * @gir-type Struct
     */
    class String {
        static $gtype: GObject.GType<String>;

        // Constructors

        constructor(string: string);

        static ['new'](string: string): String;

        // Methods

        /**
         * Adds a string onto the end of a {@link LangTag.String}, expanding
         * it if necessary.
         * @param str the string to append onto the end of `string`
         * @returns the same `string` object
         */
        append(str: string): String;
        /**
         * Adds a byte onto the end of a {@link LangTag.String}, expanding
         * it if necessary.
         * @param c the byte to append onto the end of `string`
         * @returns the same `string` object.
         */
        append_c(c: number): String;
        /**
         * Obtain a byte in a {@link LangTag.String} at `pos`. If `pos` is a negative,
         * the position is calculated from current size. i.e. if the buffer
         * contains "abc", and `pos` is -1, this will returns 'c' then.
         * @param pos position in `string` where to obtain the byte
         * @returns the byte in `string` at `pos`
         */
        at(pos: number): number;
        /**
         * Clean up the buffer in `string`.
         */
        clear(): void;
        /**
         * Frees the memory allocated for the {@link LangTag.String}.
         * If `free_segment` is `true` it also frees the character data.  If
         * it's `false`, the caller gains ownership of the buffer and must
         * free it after use with `free()`.
         * @param free_segment if `true`, the actual character data is freed as well
         * @returns the character data of `string`          (i.e. `null` if `free_segment` is `true`)
         */
        free(free_segment: Bool): string;
        /**
         * Returns the number of characters in buffer for `string`.
         * @returns the number of characters
         */
        length(): number;
        /**
         * Increases the reference count of `string`.
         * @returns the same `string` object.
         */
        ref(): String;
        /**
         * Replaces a character in `string` at `pos`.
         * @param pos position in `string` where replacement should happen
         * @param c the byte to replace
         * @returns the same `string` object
         */
        replace_c(pos: number, c: number): String;
        /**
         * @param len
         */
        truncate(len: number): String;
        /**
         * Decreases the reference count of `string`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
        /**
         * Returns the buffer in `string`.
         * @returns a string which `string` has.
         */
        value(): string;
    }

    /**
     * All the fields in the <structname>LtTag</structname>
     * structure are private to the {@link LangTag.Tag} implementation.
     * @gir-type Struct
     */
    class Tag {
        static $gtype: GObject.GType<Tag>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Tag;

        // Static methods

        /**
         * Convert current locale to the language tag.
         * @param error a {@link LangTag.Error}.
         */
        static convert_from_locale(error?: Error | null): Tag;
        /**
         * Convert `locale` to the language tag.
         * @param locale a locale string
         * @param error a {@link LangTag.Error} or `null`.
         */
        static convert_from_locale_string(locale: string, error?: Error | null): Tag;

        // Methods

        /**
         * Canonicalize the language tag according to various information of subtags.
         * @param error a {@link LangTag.Error} or `null`.
         * @returns a language tag string.
         */
        canonicalize(error?: Error | null): string;
        /**
         * Canonicalize the language tag in the extlang form
         * according to various information of subtags.
         * @param error a {@link LangTag.Error} or `null`.
         * @returns a language tag string.
         */
        canonicalize_in_extlang_form(error?: Error | null): string;
        /**
         * (Re-)Initialize all of the subtag information stored in `tag`.
         */
        clear(): void;
        /**
         * Compare if `v1` and `v2` is the same object or not.
         * @param v2 a {@link LangTag.Tag}.
         * @returns `true` if it's the same, otherwise `false`.
         */
        compare(v2: Tag): Bool;
        /**
         * Convert the language tag to the locale.
         * @param error a {@link LangTag.Error} or `null`.
         * @returns a locale string or `null` if fails
         */
        convert_to_locale(error?: Error | null): string;
        /**
         * Create a copy instance of `tag`.
         * @returns a new instance of {@link LangTag.Tag} or `null` if fails.
         */
        copy(): Tag;
        /**
         * Dumps the container information to the standard output.
         */
        dump(): void;
        /**
         * Obtain a {@link LangTag.Extension} instance in `tag`.
         * @returns a {@link LangTag.Extension}.
         */
        get_extension(): Extension;
        /**
         * Obtain a {@link LangTag.Extlang} instance in `tag`.
         * @returns a {@link LangTag.Extlang}.
         */
        get_extlang(): Extlang;
        /**
         * Obtain a {@link LangTag.Grandfathered} instance in `tag`.
         * @returns a {@link LangTag.Grandfathered}.
         */
        get_grandfathered(): Grandfathered;
        /**
         * Obtain a {@link LangTag.Lang} instance in `tag`.
         * @returns a {@link LangTag.Lang}.
         */
        get_language(): Lang;
        /**
         * Obtain a {@link LangTag.String} instance in `tag`.
         * @returns a {@link LangTag.String}.
         */
        get_privateuse(): String;
        /**
         * Obtain a {@link LangTag.Region} instance in `tag`.
         * @returns a {@link LangTag.Region}.
         */
        get_region(): Region;
        /**
         * Obtain a {@link LangTag.Script} instance in `tag`.
         * @returns a {@link LangTag.Script}.
         */
        get_script(): Script;
        /**
         * Obtains a language tag in string.
         * @returns a language tag string.
         */
        get_string(): string;
        /**
         * Obtains a language tag in string against `filter`.
         * @param filter a binary count sequence of `lt_tag_filter_t`.
         * @returns a language tag string.
         */
        get_string_with_filter(filter: number): string;
        /**
         * Obtain a list of {@link LangTag.Variant} instance in `tag`.
         * @returns a {@link LangTag.List} containing {@link LangTag.Variant}.
         */
        get_variants(): List;
        /**
         * Lookup the language tag that `tag` meets with `pattern`.
         * Any of subtags in `pattern` is allowed to use the wildcard according to
         * the syntax in RFC 4647.
         * @param pattern a language range string.
         * @param error a {@link LangTag.Error} or `null`.
         * @returns a language tag string if any matches, otherwise `null`.
         */
        lookup(pattern: string, error?: Error | null): string;
        /**
         * Try matching of `v1` and `v2`. any of subtags in `v2` is allowed to use
         * the wildcard according to the syntax in RFC 4647.
         * @param v2 a language range string.
         * @param error a {@link LangTag.Error} or `null`.
         * @returns `true` if it matches, otherwise `false`.
         */
        match(v2: string, error?: Error | null): Bool;
        /**
         * Parse `tag_string` and create appropriate instances for subtags.
         * @param tag_string language tag to be parsed.
         * @param error a {@link LangTag.Error} or `null`.
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        parse(tag_string: string, error?: Error | null): Bool;
        /**
         * Continue to parse a language tag with `tag_string`. please use `lt_tag_parse()`
         * at first.
         * @param tag_string a language tag to be parsed much more.
         * @param error a {@link LangTag.Error} or `null`.
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        parse_with_extra_token(tag_string: string, error?: Error | null): Bool;
        /**
         * Increases the reference count of `tag`.
         * @returns the same `tag` object.
         */
        ref(): Tag;
        /**
         * @param error
         */
        transform(error: Error): string;
        /**
         * @param error
         */
        truncate(error: Error): Bool;
        /**
         * Decreases the reference count of `tag`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtVariant</structname>
     * structure are private to the {@link LangTag.Variant} implementation.
     * @gir-type Struct
     */
    abstract class Variant {
        static $gtype: GObject.GType<Variant>;

        // Methods

        /**
         * Compare if `v1` and `v2` is the same object or not.
         * @param v2 a {@link LangTag.Variant}.
         * @returns `true` if it's the same, otherwise `false`.
         */
        compare(v2: Variant): Bool;
        /**
         * Dumps the container information to the standard output.
         */
        dump(): void;
        /**
         * Obtains the better tag for use. this is a convenient function to get
         * the preferred-value if available.
         * @returns a tag string.
         */
        get_better_tag(): string;
        /**
         * Obtains the description of the subtag.
         * @returns a description string.
         */
        get_name(): string;
        /**
         * Obtains the preferred-value. this is available only when the tag is
         * marked as deprecated.
         * @returns a preferred-value for the tag or `null`.
         */
        get_preferred_tag(): string;
        /**
         * Obtains the prefix being assigned to the subtag.
         * This is available only when the subtag has any suitable sequence of
         * subtags for forming (with other subtags, as appropriate) a language
         * tag when using the variant.
         * @returns a {@link LangTag.List} contains prefix strings or `null`.
         */
        get_prefix(): List;
        /**
         * Obtains the tag name.
         * @returns a tag string.
         */
        get_tag(): string;
        /**
         * Increases the reference count of `variant`.
         * @returns the same `variant` object.
         */
        ref(): Variant;
        /**
         * Decreases the reference count of `variant`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>LtVariantDb</structname>
     * structure are private to the {@link LangTag.VariantDb} implementation.
     * @gir-type Struct
     */
    class VariantDb {
        static $gtype: GObject.GType<VariantDb>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): VariantDb;

        // Methods

        /**
         * Lookup `LtVariant` if `subtag` is valid and registered into the database.
         * @param subtag a subtag name to lookup.
         * @returns a {@link LangTag.Variant} that meets with `subtag`.                           otherwise `null`.
         */
        lookup(subtag: string): Variant;
        /**
         * Increases the reference count of `variantdb`.
         * @returns the same `variantdb` object.
         */
        ref(): VariantDb;
        /**
         * Decreases the reference count of `variantdb`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * The type of boolean value.
     * @gir-type Alias
     */
    type Bool = number;
    /**
     * The type of object pointer.
     * @gir-type Alias
     */
    type Pointer = any;
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

export default LangTag;

// END
