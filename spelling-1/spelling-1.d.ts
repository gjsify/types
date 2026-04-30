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
import type GtkSource from '@girs/gtksource-5';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace Spelling {
    /**
     * Spelling-1
     */

    /**
     * Call this function before using any other libspelling functions in your
     * applications. It will initialize everything needed to operate the library.
     */
    function init(): void;
    namespace Checker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::language': (pspec: GObject.ParamSpec) => void;
            'notify::provider': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            language: string | null;
            provider: Provider;
        }
    }

    /**
     * {@link Spelling.Checker} is the core class of libspelling. It provides high-level
     * APIs for spellchecking.
     * @gir-type Class
     */
    class Checker extends GObject.Object {
        static $gtype: GObject.GType<Checker>;

        // Properties

        /**
         * The "language" to use when checking words with the configured
         * {@link Spelling.Provider}. For example, `en_US`.
         * @default null
         */
        get language(): string | null;
        set language(val: string | null);
        /**
         * The "provider" property contains the provider that is providing
         * information to the spell checker.
         *
         * Currently, only Enchant is supported, and requires using the
         * `SpellingEnchantProvider`. Setting this to `null` will get
         * the default provider.
         * @construct-only
         */
        get provider(): Provider;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Checker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Checker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](provider: Provider | null, language: string | null): Checker;

        // Signals

        /** @signal */
        connect<K extends keyof Checker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Checker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Checker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Checker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Checker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Checker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets a default {@link Spelling.Checker} using the default provider and language.
         */
        static get_default(): Checker;

        // Methods

        /**
         * Adds `word` to the active dictionary.
         * @param word a word to be added
         */
        add_word(word: string): void;
        /**
         * Checks if the active dictionary contains `word`.
         * @param word a word to be checked
         * @param word_len length of the word, in bytes
         * @returns `true` if the dictionary contains the word
         */
        check_word(word: string, word_len: bigint | number): boolean;
        /**
         * Gets the extra word characters of the active dictionary.
         * @returns extra word characters
         */
        get_extra_word_chars(): string;
        /**
         * Gets the language being used by the spell checker.
         * @returns a string describing the current language.
         */
        get_language(): string | null;
        /**
         * Gets the spell provider used by the spell checker.
         *
         * Currently, only Enchant-2 is supported.
         * @returns a {@link Spelling.Provider}
         */
        get_provider(): Provider;
        /**
         * Requests the active dictionary to ignore `word`.
         * @param word a word to be ignored
         */
        ignore_word(word: string): void;
        /**
         * Retrieves a list of possible corrections for `word`.
         * @param word a word to be checked
         * @returns A list of possible corrections, or `null`.
         */
        list_corrections(word: string): string[] | null;
        /**
         * Sets the language code to use when communicating with the provider,
         * such as `en_US`.
         * @param language the language to use
         */
        set_language(language: string): void;
    }

    namespace Dictionary {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::code': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            code: string | null;
        }
    }

    /**
     * Abstract base class for spellchecking dictionaries.
     * @gir-type Class
     */
    abstract class Dictionary extends GObject.Object {
        static $gtype: GObject.GType<Dictionary>;

        // Properties

        /**
         * The language code, for example `en_US`.
         * @construct-only
         * @default null
         */
        get code(): string | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dictionary.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Dictionary.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Dictionary.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dictionary.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Dictionary.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dictionary.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Dictionary.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Dictionary.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds `word` to the dictionary.
         * @param word a word to be added
         */
        add_word(word: string): void;
        /**
         * Checks if the dictionary contains `word`.
         * @param word a word to be checked
         * @param word_len length of the word, in bytes
         * @returns `true` if the dictionary contains the word
         */
        contains_word(word: string, word_len: bigint | number): boolean;
        /**
         * Gets the language code of the dictionary, or `null` if undefined.
         * @returns the language code of the dictionary
         */
        get_code(): string | null;
        /**
         * Gets the extra word characters of the dictionary.
         * @returns extra word characters
         */
        get_extra_word_chars(): string;
        /**
         * Requests the dictionary to ignore `word`.
         * @param word a word to be ignored
         */
        ignore_word(word: string): void;
        /**
         * Retrieves a list of possible corrections for `word`.
         * @param word a word to be checked
         * @param word_len the length of `word`, or -1 if `word` is zero-terminated
         * @returns A list of possible corrections, or `null`.
         */
        list_corrections(word: string, word_len: bigint | number): string[] | null;
    }

    namespace Language {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::code': (pspec: GObject.ParamSpec) => void;
            'notify::group': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            code: string | null;
            group: string | null;
            name: string | null;
        }
    }

    /**
     * Represents a spellchecking language.
     * @gir-type Class
     */
    class Language extends GObject.Object {
        static $gtype: GObject.GType<Language>;

        // Properties

        /**
         * The language code.
         * @construct-only
         * @default null
         */
        get code(): string | null;
        /**
         * A group for sorting, usually the country name.
         * @construct-only
         * @default null
         */
        get group(): string | null;
        /**
         * The name of the language.
         * @construct-only
         * @default null
         */
        get name(): string | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Language.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Language.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Language.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Language.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Language.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Language.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the code of the language, or `null` if undefined.
         * @returns the code of the language
         */
        get_code(): string | null;
        /**
         * Gets the group of the language, or `null` if undefined.
         * @returns the group of the language
         */
        get_group(): string | null;
        /**
         * Gets the name of the language, or `null` if undefined.
         * @returns the name of the language
         */
        get_name(): string | null;
    }

    namespace Provider {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display_name: string | null;
            displayName: string | null;
        }
    }

    /**
     * Abstract base class for spellchecking providers.
     * @gir-type Class
     */
    abstract class Provider extends GObject.Object {
        static $gtype: GObject.GType<Provider>;

        // Properties

        /**
         * The display name.
         * @construct-only
         * @default null
         */
        get display_name(): string | null;
        /**
         * The display name.
         * @construct-only
         * @default null
         */
        get displayName(): string | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Provider.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Provider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Provider.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Provider.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Provider.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Provider.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Provider.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Provider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the default spell provider.
         */
        static get_default(): Provider;

        // Methods

        /**
         * Gets the default language code for the detected system locales, or `null`
         * if the provider doesn't support any of them.
         * @returns the default language code
         */
        get_default_code(): string | null;
        /**
         * Gets the display name of the provider, or `null` if undefined.
         * @returns the display name of the provider
         */
        get_display_name(): string | null;
        /**
         * Gets a {@link Gio.ListModel} of languages supported by the provider.
         * @returns a {@link Gio.ListModel} of {@link Spelling.Language}
         */
        list_languages(): Gio.ListModel;
        /**
         * Gets a {@link Spelling.Dictionary} for the requested language, or `null`
         * if the language is not supported.
         * @param language the language to load such as `en_US`.
         * @returns a {@link Spelling.Dictionary} or `null`
         */
        load_dictionary(language: string): Dictionary | null;
        /**
         * Checks of `language` is supported by the provider.
         * @param language the language such as `en_US`.
         * @returns `true` if `language` is supported, otherwise `false`
         */
        supports_language(language: string): boolean;
    }

    namespace TextBufferAdapter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::checker': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::language': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.ActionGroup.ConstructorProps {
            buffer: GtkSource.Buffer | null;
            checker: Checker | null;
            enabled: boolean;
            language: string | null;
        }
    }

    /**
     * {@link Spelling.TextBufferAdapter} implements helpers to easily add spellchecking
     * capabilities to a {@link GtkSource.Buffer}.
     * @gir-type Class
     */
    class TextBufferAdapter extends GObject.Object implements Gio.ActionGroup {
        static $gtype: GObject.GType<TextBufferAdapter>;

        // Properties

        /**
         * The {@link GtkSource.Buffer}.
         * @construct-only
         */
        get buffer(): GtkSource.Buffer | null;
        /**
         * The {@link Spelling.Checker}.
         */
        get checker(): Checker | null;
        set checker(val: Checker | null);
        /**
         * Whether spellcheck is enabled.
         * @default true
         */
        get enabled(): boolean;
        set enabled(val: boolean);
        /**
         * The language code, such as `en_US`.
         * @default null
         */
        get language(): string | null;
        set language(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TextBufferAdapter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TextBufferAdapter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: GtkSource.Buffer, checker: Checker): TextBufferAdapter;

        // Signals

        /** @signal */
        connect<K extends keyof TextBufferAdapter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextBufferAdapter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TextBufferAdapter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextBufferAdapter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TextBufferAdapter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TextBufferAdapter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the underlying buffer for the adapter.
         * @returns a {@link GtkSource.Buffer}
         */
        get_buffer(): GtkSource.Buffer | null;
        /**
         * Gets the checker used by the adapter.
         * @returns a {@link Spelling.Checker} or `null`
         */
        get_checker(): Checker | null;
        /**
         * Gets if the spellcheck is enabled.
         * @returns `true` if enabled
         */
        get_enabled(): boolean;
        /**
         * Gets the checker language.
         * @returns a language code
         */
        get_language(): string | null;
        /**
         * Gets the menu model containing corrections
         * @returns a {@link Gio.MenuModel}
         */
        get_menu_model(): Gio.MenuModel;
        /**
         * Gets the tag used for potentially misspelled words.
         * @returns a {@link Gtk.TextTag} or `null`
         */
        get_tag(): Gtk.TextTag | null;
        /**
         * Invalidate the spelling engine, to force parsing again.
         *
         * Invalidation is automatically done on {@link GtkSource.Buffer.loading}
         * change.
         */
        invalidate_all(): void;
        /**
         * Set the {@link Spelling.Checker} used for spellchecking.
         * @param checker a {@link Spelling.Checker}
         */
        set_checker(checker: Checker): void;
        /**
         * If `true` spellcheck is enabled.
         * @param enabled whether the spellcheck is enabled
         */
        set_enabled(enabled: boolean): void;
        /**
         * Sets the language code to use by the checker, such as `en_US`.
         * @param language the language to use
         */
        set_language(language: string): void;
        /**
         * Looks at the current cursor position and updates the list of
         * corrections based on the current word.
         *
         * Use this to force an update immediately rather than after the
         * automatic timeout caused by cursor movements.
         */
        update_corrections(): void;
        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_added(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         */
        action_enabled_changed(action_name: string, enabled: boolean): void;
        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_removed(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         */
        action_state_changed(action_name: string, state: GLib.Variant): void;
        /**
         * Activate the named action within `action_group`.
         *
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         *
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         *
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         *
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         *
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         *
         * g_debug ("Application has been terminated. Exiting.");
         *
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         */
        activate_action(action_name: string, parameter: GLib.Variant | null): void;
        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         *
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         *
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         *
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         */
        change_action_state(action_name: string, value: GLib.Variant): void;
        /**
         * Checks if the named action within `action_group` is currently enabled.
         *
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @returns whether the action is currently enabled
         */
        get_action_enabled(action_name: string): boolean;
        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         *
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         *
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         *
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @returns the parameter type
         */
        get_action_parameter_type(action_name: string): GLib.VariantType | null;
        /**
         * Queries the current state of the named action within `action_group`.
         *
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the current state of the action
         */
        get_action_state(action_name: string): GLib.Variant | null;
        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         *
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         *
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         *
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the state range hint
         */
        get_action_state_hint(action_name: string): GLib.Variant | null;
        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         *
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         *
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         *
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @returns the state type, if the action is stateful
         */
        get_action_state_type(action_name: string): GLib.VariantType | null;
        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @returns whether the named action exists
         */
        has_action(action_name: string): boolean;
        /**
         * Lists the actions contained within `action_group`.
         *
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @returns a `NULL`-terminated array   of the names of the actions in the group
         */
        list_actions(): string[];
        /**
         * Queries all aspects of the named action within an `action_group`.
         *
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         *
         * This provides two main benefits.
         *
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         *
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         *
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @returns `TRUE` if the action exists, else `FALSE`
         */
        query_action(
            action_name: string,
        ): [
            boolean,
            boolean,
            GLib.VariantType | null,
            GLib.VariantType | null,
            GLib.Variant | null,
            GLib.Variant | null,
        ];
        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_added(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         * @virtual
         */
        vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_removed(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         * @virtual
         */
        vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
        /**
         * Activate the named action within `action_group`.
         *
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         *
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         *
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         *
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         *
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         *
         * g_debug ("Application has been terminated. Exiting.");
         *
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         * @virtual
         */
        vfunc_activate_action(action_name: string, parameter: GLib.Variant | null): void;
        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         *
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         *
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         *
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         * @virtual
         */
        vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
        /**
         * Checks if the named action within `action_group` is currently enabled.
         *
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_enabled(action_name: string): boolean;
        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         *
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         *
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         *
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
        /**
         * Queries the current state of the named action within `action_group`.
         *
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state(action_name: string): GLib.Variant | null;
        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         *
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         *
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         *
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         *
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         *
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         *
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @virtual
         */
        vfunc_has_action(action_name: string): boolean;
        /**
         * Lists the actions contained within `action_group`.
         *
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @virtual
         */
        vfunc_list_actions(): string[];
        /**
         * Queries all aspects of the named action within an `action_group`.
         *
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         *
         * This provides two main benefits.
         *
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         *
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         *
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_query_action(
            action_name: string,
        ): [
            boolean,
            boolean,
            GLib.VariantType | null,
            GLib.VariantType | null,
            GLib.Variant | null,
            GLib.Variant | null,
        ];
    }

    /**
     * @gir-type Alias
     */
    type CheckerClass = typeof Checker;
    /**
     * @gir-type Alias
     */
    type DictionaryClass = typeof Dictionary;
    /**
     * @gir-type Alias
     */
    type LanguageClass = typeof Language;
    /**
     * @gir-type Alias
     */
    type ProviderClass = typeof Provider;
    /**
     * @gir-type Alias
     */
    type TextBufferAdapterClass = typeof TextBufferAdapter;
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

export default Spelling;

// END
