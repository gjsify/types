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
import type Gst from '@girs/gst-1.0';
import type Clapper from '@girs/clapper-0.0';
import type GstTag from '@girs/gsttag-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type GstPbutils from '@girs/gstpbutils-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstAudio from '@girs/gstaudio-1.0';

export namespace ClapperGtk {
    /**
     * ClapperGtk-0.0
     */

    /**
     * ClapperGtk major version component
     */
    const MAJOR_VERSION: number;
    /**
     * ClapperGtk micro version component
     */
    const MICRO_VERSION: number;
    /**
     * ClapperGtk minor version component
     */
    const MINOR_VERSION: number;
    /**
     * ClapperGtk version, encoded as a string
     */
    const VERSION_S: string;
    /**
     * ClapperGtk runtime major version component
     *
     * This returns the ClapperGtk library version your code is
     * running against unlike {@link ClapperGtk.MAJOR_VERSION}
     * which represents compile time version.
     * @returns the major version number of the ClapperGtk library
     * @since 0.10
     */
    function get_major_version(): number;
    /**
     * ClapperGtk runtime micro version component
     *
     * This returns the ClapperGtk library version your code is
     * running against unlike {@link ClapperGtk.MICRO_VERSION}
     * which represents compile time version.
     * @returns the micro version number of the ClapperGtk library
     * @since 0.10
     */
    function get_micro_version(): number;
    /**
     * ClapperGtk runtime minor version component
     *
     * This returns the ClapperGtk library version your code is
     * running against unlike {@link ClapperGtk.MINOR_VERSION}
     * which represents compile time version.
     * @returns the minor version number of the ClapperGtk library
     * @since 0.10
     */
    function get_minor_version(): number;
    /**
     * Get {@link Clapper.Player} used by {@link ClapperGtk.Av} ancestor of `widget`.
     *
     * This utility is a convenience wrapper for calling {@link Gtk.Widget.get_ancestor}
     * of type `CLAPPER_GTK_TYPE_AV` and {@link ClapperGtk.Av.get_player} with
     * additional `null` checking and type casting.
     *
     * This is meant to be used mainly for custom widget development as an easy access to the
     * underlying parent {@link Clapper.Player} object. If you want to get the player from
     * {@link ClapperGtk.Av} widget itself, use {@link ClapperGtk.Av.get_player} instead.
     *
     * Rememeber that this function will return `null` when widget does not have
     * a {@link ClapperGtk.Av} ancestor in widget hierarchy (widget is not yet placed).
     * @param widget a {@link Gtk.Widget}
     * @returns a {@link Clapper.Player} from ancestor of a `widget`.
     */
    function get_player_from_ancestor(widget: Gtk.Widget): Clapper.Player | null;
    function get_resource(): Gio.Resource;
    /**
     * ClapperGtk runtime version as string
     *
     * This returns the ClapperGtk library version your code is
     * running against unlike {@link ClapperGtk.VERSION_S}
     * which represents compile time version.
     * @returns the version of the ClapperGtk library as string
     * @since 0.10
     */
    function get_version_s(): string;
    /**
     * @gir-type Flags
     */
    export namespace VideoActionMask {
        export const $gtype: GObject.GType<VideoActionMask>;
    }

    /**
     * @gir-type Flags
     */
    enum VideoActionMask {
        /**
         * No action
         */
        NONE,
        /**
         * Reveal fading overlays
         */
        REVEAL_OVERLAYS,
        /**
         * Toggle playback (triggered by single click/tap)
         */
        TOGGLE_PLAY,
        /**
         * Toggle fullscreen (triggered by double click/tap)
         */
        TOGGLE_FULLSCREEN,
        /**
         * Seek request (triggered by double tap on screen side)
         */
        SEEK_REQUEST,
        /**
         * All of the above
         */
        ANY,
    }

    namespace Audio {
        // Signal signatures
        interface SignalSignatures extends Av.SignalSignatures {
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::auto-inhibit': (pspec: GObject.ParamSpec) => void;
            'notify::inhibited': (pspec: GObject.ParamSpec) => void;
            'notify::player': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Av.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            child: Gtk.Widget | null;
        }
    }

    /**
     * A GTK widget for audio playback with Clapper API.
     *
     * {@link ClapperGtk.Audio} is a widget meant for integrating audio playback
     * within GTK application. It exposes {@link Clapper.Player} through its
     * base class {@link ClapperGtk.Av.player} property.
     *
     * Other widgets (buttons, seek bar, etc.) provided by `ClapperGtk` library, once placed
     * anywhere inside audio container (including nesting within another widget like {@link Gtk.Box})
     * will automatically control {@link ClapperGtk.Audio} they are within. This allows to freely create
     * custom UI best suited for specific application.
     *
     * # Basic usage
     *
     * A typical use case is to embed audio widget as part of your app where audio playback
     * is needed (can be even the very first child of the window). Get the {@link Clapper.Player}
     * belonging to the AV widget and start adding new {@link Clapper.MediaItem} items to the
     * {@link Clapper.Queue} for playback. For more information please refer to the Clapper
     * playback library documentation.
     *
     * # Actions
     *
     * You can use built-in actions of parent {@link ClapperGtk.Av}.
     * See its documentation for the list of available ones.
     *
     * # ClapperGtkAudio as GtkBuildable
     *
     * {@link ClapperGtk.Audio} implementation of the {@link Gtk.Buildable} interface supports
     * placing a single widget (which might then hold multiple widgets) as `<child>` element.
     *
     * ```xml
     * <object class="ClapperGtkAudio" id="audio">
     *   <child>
     *     <object class="GtkBox">
     *       <property name="orientation">horizontal</property>
     *       <child>
     *         <object class="ClapperGtkPreviousItemButton">
     *       </child>
     *       <child>
     *         <object class="ClapperGtkTogglePlayButton">
     *       </child>
     *       <child>
     *         <object class="ClapperGtkNextItemButton">
     *       </child>
     *     </object>
     *   </child>
     * </object>
     * ```
     * @gir-type Class
     * @since 0.10
     */
    class Audio extends Av implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Audio>;

        // Properties

        /**
         * The child widget of {@link ClapperGtk.Audio}.
         */
        get child(): Gtk.Widget | null;
        set child(val: Gtk.Widget | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Audio.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Audio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Audio;

        // Signals

        /** @signal */
        connect<K extends keyof Audio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Audio.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Audio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Audio.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Audio.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Audio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get a child {@link Gtk.Widget} of `audio`.
         * @returns {@link Gtk.Widget} set as child.
         */
        get_child(): Gtk.Widget | null;
        /**
         * Set a child {@link Gtk.Widget} of `audio`.
         * @param child a {@link Gtk.Widget}
         */
        set_child(child: Gtk.Widget | null): void;
    }

    namespace Av {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::auto-inhibit': (pspec: GObject.ParamSpec) => void;
            'notify::inhibited': (pspec: GObject.ParamSpec) => void;
            'notify::player': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            auto_inhibit: boolean;
            autoInhibit: boolean;
            inhibited: boolean;
            player: Clapper.Player;
        }
    }

    /**
     * A base class for GTK audio and video widgets.
     *
     * See its descendants: {@link ClapperGtk.Audio} and {@link ClapperGtk.Video}.
     *
     * # Actions
     *
     * {@link ClapperGtk.Av} defines a set of built-in actions:
     *
     * ```yaml
     * - "av.toggle-play": toggle play/pause
     * - "av.play": start/resume playback
     * - "av.pause": pause playback
     * - "av.stop": stop playback
     * - "av.seek": seek to position (variant "d")
     * - "av.seek-custom": seek to position using seek method (variant "(di)")
     * - "av.toggle-mute": toggle mute state
     * - "av.set-mute": set mute state (variant "b")
     * - "av.volume-up": increase volume by 2%
     * - "av.volume-down": decrease volume by 2%
     * - "av.set-volume": set volume to specified value (variant "d")
     * - "av.speed-up": increase speed (from 0.05x - 2x range to nearest quarter)
     * - "av.speed-down": decrease speed (from 0.05x - 2x range to nearest quarter)
     * - "av.set-speed": set speed to specified value (variant "d")
     * - "av.previous-item": select previous item in queue
     * - "av.next-item": select next item in queue
     * - "av.select-item": select item at specified index in queue (variant "u")
     * ```
     * @gir-type Class
     * @since 0.10
     */
    class Av extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Av>;

        // Properties

        /**
         * Try to automatically inhibit session when media is playing.
         * @default false
         */
        get auto_inhibit(): boolean;
        set auto_inhibit(val: boolean);
        /**
         * Try to automatically inhibit session when media is playing.
         * @default false
         */
        get autoInhibit(): boolean;
        set autoInhibit(val: boolean);
        /**
         * Get whether session is currently inhibited by playback.
         * @read-only
         * @default false
         */
        get inhibited(): boolean;
        /**
         * A {@link Clapper.Player} used by widget.
         * @read-only
         */
        get player(): Clapper.Player;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Av.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Av.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Av.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Av.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Av.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Av.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Av.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Av.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get whether automatic session inhibit is enabled.
         * @returns `true` if enabled, `false` otherwise.
         */
        get_auto_inhibit(): boolean;
        /**
         * Get whether session is currently inhibited by
         * {@link ClapperGtk.Av.auto_inhibit}.
         * @returns `true` if inhibited, `false` otherwise.
         */
        get_inhibited(): boolean;
        /**
         * Get {@link Clapper.Player} used by this {@link ClapperGtk.Av} instance.
         * @returns a {@link Clapper.Player} used by widget.
         */
        get_player(): Clapper.Player;
        /**
         * Set whether widget should try to automatically inhibit session
         * from idling (and possibly screen going black) when media is playing.
         * @param inhibit whether to enable automatic session inhibit
         */
        set_auto_inhibit(inhibit: boolean): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
         * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible identifier for the accessible object.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         *
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible identifier for the accessible object.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         *
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }

    namespace Billboard {
        // Signal signatures
        interface SignalSignatures extends Container.SignalSignatures {
            'notify::adaptive-height': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-width': (pspec: GObject.ParamSpec) => void;
            'notify::height-target': (pspec: GObject.ParamSpec) => void;
            'notify::width-target': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Container.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * A layer where various messages can be displayed.
     *
     * {@link ClapperGtk.Billboard} widget is meant to be overlaid on top of
     * {@link ClapperGtk.Video} as a normal (non-fading) overlay.
     *
     * It is used to display various messages/announcements and later
     * takes care of fading them on its own.
     *
     * If automatic volume/speed change notifications when their values do
     * change are desired, functions for announcing them can be run in callbacks
     * to corresponding property notify signals on the {@link Clapper.Player}.
     * @gir-type Class
     */
    class Billboard extends Container implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Billboard>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Billboard.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Billboard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Billboard;

        // Signals

        /** @signal */
        connect<K extends keyof Billboard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Billboard.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Billboard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Billboard.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Billboard.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Billboard.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Temporarily displays current speed value on the
         * side of `billboard`.
         *
         * Use this if you want to present current speed value to the user.
         */
        announce_speed(): void;
        /**
         * Temporarily displays current volume level on the
         * side of `billboard`.
         *
         * Use this if you want to present current volume level to the user.
         */
        announce_volume(): void;
        /**
         * Pins a permanent message on the `billboard`.
         *
         * The message will stay on the `billboard` until a
         * {@link ClapperGtk.Billboard.unpin_pinned_message} is called.
         * @param icon_name an icon name
         * @param message a message text
         */
        pin_message(icon_name: string, message: string): void;
        /**
         * Posts a temporary message on the `billboard`.
         *
         * Duration how long a message will stay is automatically
         * calculated based on amount of text.
         * @param icon_name an icon name
         * @param message a message text
         */
        post_message(icon_name: string, message: string): void;
        /**
         * Unpins previously pinned message on the `billboard`.
         *
         * If no message was pinned this function will do nothing,
         * so it is safe to call when unsure.
         */
        unpin_pinned_message(): void;
    }

    namespace Container {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * A helper signal for implementing mobile/narrow adaptive
             * behavior on descendants.
             * @signal
             * @run-last
             */
            adapt: (arg0: boolean) => void;
            'notify::adaptive-height': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-width': (pspec: GObject.ParamSpec) => void;
            'notify::height-target': (pspec: GObject.ParamSpec) => void;
            'notify::width-target': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            adaptive_height: number;
            adaptiveHeight: number;
            adaptive_width: number;
            adaptiveWidth: number;
            height_target: number;
            heightTarget: number;
            width_target: number;
            widthTarget: number;
        }
    }

    /**
     * A simple container widget that holds just one child.
     *
     * It is designed to work well with OSD overlay, adding some useful functionalities
     * to it, such as width and height that widget should target. This helps with
     * implementing simple adaptive widgets by observing its own width and signalling
     * when adaptive threshold is reached.
     *
     * You can use this when you need to create a widget that is adaptive or should have
     * a limited maximal width/height.
     *
     * If you need to have more then single widget as child, place a widget that
     * can hold multiple children such as {@link Gtk.Box} as a single conatiner child
     * and then your widgets into that child.
     * @gir-type Class
     */
    class Container extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Container>;

        // Properties

        /**
         * Adaptive height threshold that triggers `ClapperGtk.Container::adapt` signal.
         * @default -1
         */
        get adaptive_height(): number;
        set adaptive_height(val: number);
        /**
         * Adaptive height threshold that triggers `ClapperGtk.Container::adapt` signal.
         * @default -1
         */
        get adaptiveHeight(): number;
        set adaptiveHeight(val: number);
        /**
         * Adaptive width threshold that triggers `ClapperGtk.Container::adapt` signal.
         * @default -1
         */
        get adaptive_width(): number;
        set adaptive_width(val: number);
        /**
         * Adaptive width threshold that triggers `ClapperGtk.Container::adapt` signal.
         * @default -1
         */
        get adaptiveWidth(): number;
        set adaptiveWidth(val: number);
        /**
         * Height that container should target.
         * @default -1
         */
        get height_target(): number;
        set height_target(val: number);
        /**
         * Height that container should target.
         * @default -1
         */
        get heightTarget(): number;
        set heightTarget(val: number);
        /**
         * Width that container should target.
         * @default -1
         */
        get width_target(): number;
        set width_target(val: number);
        /**
         * Width that container should target.
         * @default -1
         */
        get widthTarget(): number;
        set widthTarget(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Container.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Container.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Container;

        // Signals

        /** @signal */
        connect<K extends keyof Container.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Container.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Container.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Container.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Container.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Container.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get a `container` adaptive height threshold.
         * @returns adaptive height set by user or -1 when none.
         */
        get_adaptive_height(): number;
        /**
         * Get a `container` adaptive width threshold.
         * @returns adaptive width set by user or -1 when none.
         */
        get_adaptive_width(): number;
        /**
         * Get a child {@link Gtk.Widget} of `container`.
         * @returns {@link Gtk.Widget} set as child.
         */
        get_child(): Gtk.Widget | null;
        /**
         * Get a `container` height target.
         * @returns height target set by user or -1 when none.
         */
        get_height_target(): number;
        /**
         * Get a `container` width target.
         * @returns width target set by user or -1 when none.
         */
        get_width_target(): number;
        /**
         * Set an adaptive height threshold. When widget is resized to value or lower,
         * an `ClapperGtk.Container::adapt` signal will be emitted with `true` to
         * notify implementation about mobile adaptation request, otherwise `false` when
         * both threshold values are exceeded.
         * @param height a threshold on which adapt signal should be triggered or -1 to disable.
         */
        set_adaptive_height(height: number): void;
        /**
         * Set an adaptive width threshold. When widget is resized to value or lower,
         * an `ClapperGtk.Container::adapt` signal will be emitted with `true` to
         * notify implementation about mobile adaptation request, otherwise `false` when
         * both threshold values are exceeded.
         * @param width a threshold on which adapt signal should be triggered or -1 to disable.
         */
        set_adaptive_width(width: number): void;
        /**
         * Set a child {@link Gtk.Widget} of `container`.
         * @param child a {@link Gtk.Widget}
         */
        set_child(child: Gtk.Widget): void;
        /**
         * Same as `clapper_gtk_container_set_width_target()` but for widget height.
         * @param height height to target or -1 to restore default behavior
         */
        set_height_target(height: number): void;
        /**
         * Set a width that `container` should target. When set container
         * will not stretch beyond set `width` while still expanding into
         * possible boundaries trying to reach its target.
         * @param width width to target -1 to restore default behavior
         */
        set_width_target(width: number): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
         * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible identifier for the accessible object.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         *
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible identifier for the accessible object.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         *
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }

    namespace ExtraMenuButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * A signal that user wants to open subtitles file.
             *
             * Implementation should add a way for user to select subtitles to open
             * such as by e.g. using {@link Gtk.FileDialog} and then add them to the
             * `item` using {@link Clapper.MediaItem.set_suburi} method.
             *
             * This signal will pass the {@link Clapper.MediaItem} that was current when
             * user clicked the open button and subtitles should be added to this `item`.
             * This avoids situations where another item starts playing before user selects
             * subtitles file to be opened. When using asynchronous operations to open file,
             * implementation should {@link GObject.Object.ref} the item to ensure that it
             * stays valid until finish.
             *
             * Note that this signal will not be emitted if open button is not visible by
             * setting {@link ClapperGtk.ExtraMenuButton.set_can_open_subtitles} to `true`,
             * so you do not have to implement handler for it otherwise.
             * @signal
             * @run-last
             */
            'open-subtitles': (arg0: Clapper.MediaItem) => void;
            'notify::can-open-subtitles': (pspec: GObject.ParamSpec) => void;
            'notify::speed-visible': (pspec: GObject.ParamSpec) => void;
            'notify::volume-visible': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            can_open_subtitles: boolean;
            canOpenSubtitles: boolean;
            speed_visible: boolean;
            speedVisible: boolean;
            volume_visible: boolean;
            volumeVisible: boolean;
        }
    }

    /**
     * A menu button with extra options.
     * @gir-type Class
     */
    class ExtraMenuButton extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<ExtraMenuButton>;

        // Properties

        /**
         * Visibility of open subtitles option inside popover.
         * @default false
         */
        get can_open_subtitles(): boolean;
        set can_open_subtitles(val: boolean);
        /**
         * Visibility of open subtitles option inside popover.
         * @default false
         */
        get canOpenSubtitles(): boolean;
        set canOpenSubtitles(val: boolean);
        /**
         * Visibility of speed control inside popover.
         * @default true
         */
        get speed_visible(): boolean;
        set speed_visible(val: boolean);
        /**
         * Visibility of speed control inside popover.
         * @default true
         */
        get speedVisible(): boolean;
        set speedVisible(val: boolean);
        /**
         * Visibility of volume control inside popover.
         * @default true
         */
        get volume_visible(): boolean;
        set volume_visible(val: boolean);
        /**
         * Visibility of volume control inside popover.
         * @default true
         */
        get volumeVisible(): boolean;
        set volumeVisible(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ExtraMenuButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ExtraMenuButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ExtraMenuButton;

        // Signals

        /** @signal */
        connect<K extends keyof ExtraMenuButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ExtraMenuButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ExtraMenuButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ExtraMenuButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ExtraMenuButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ExtraMenuButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get whether an option to open external subtitle stream inside popover is visible.
         * @returns `true` if open subtitles is visible, `false` otherwise.
         */
        get_can_open_subtitles(): boolean;
        /**
         * Get whether speed control inside popover is visible.
         * @returns `true` if speed control is visible, `false` otherwise.
         */
        get_speed_visible(): boolean;
        /**
         * Get whether volume control inside popover is visible.
         * @returns TRUE if volume control is visible, `false` otherwise.
         */
        get_volume_visible(): boolean;
        /**
         * Set whether an option to open external subtitle stream should be allowed.
         *
         * Note that this {@link Gtk.Widget} can only add subtitles to currently playing
         * {@link Clapper.MediaItem}. When no media is selected, option to open subtitles
         * will not be shown regardless how this option is set.
         * @param allowed whether opening subtitles should be allowed
         */
        set_can_open_subtitles(allowed: boolean): void;
        /**
         * Set whether speed control inside popover should be visible.
         * @param visible whether visible
         */
        set_speed_visible(visible: boolean): void;
        /**
         * Set whether volume control inside popover should be visible.
         * @param visible whether visible
         */
        set_volume_visible(visible: boolean): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
         * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible identifier for the accessible object.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         *
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible identifier for the accessible object.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         *
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }

    namespace LeadContainer {
        // Signal signatures
        interface SignalSignatures extends Container.SignalSignatures {
            'notify::blocked-actions': (pspec: GObject.ParamSpec) => void;
            'notify::leading': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-height': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-width': (pspec: GObject.ParamSpec) => void;
            'notify::height-target': (pspec: GObject.ParamSpec) => void;
            'notify::width-target': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Container.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            blocked_actions: VideoActionMask;
            blockedActions: VideoActionMask;
            leading: boolean;
        }
    }

    /**
     * A {@link ClapperGtk.Container} that can take priority in user interactions with the {@link ClapperGtk.Video}.
     *
     * {@link ClapperGtk.LeadContainer} is a special type of {@link ClapperGtk.Container} that can
     * lead in interaction events. When "leading", it is assumed that user interactions
     * over it which would normally trigger actions can be blocked/ignored when set in mask
     * of actions that this widget should block.
     *
     * This kind of container is useful when creating some statically visible overlays
     * covering top of {@link ClapperGtk.Video} that you want to take priority instead of
     * triggering default actions such as toggle play on click or revealing fading overlays.
     *
     * For more info how container widget works see {@link ClapperGtk.Container} documentation.
     * @gir-type Class
     */
    class LeadContainer extends Container implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<LeadContainer>;

        // Properties

        /**
         * Mask of actions that container blocks from being triggered on video.
         * @default ClapperGtk.VideoActionMask.NONE
         */
        get blocked_actions(): VideoActionMask;
        set blocked_actions(val: VideoActionMask);
        /**
         * Mask of actions that container blocks from being triggered on video.
         * @default ClapperGtk.VideoActionMask.NONE
         */
        get blockedActions(): VideoActionMask;
        set blockedActions(val: VideoActionMask);
        /**
         * Width that container should target.
         * @default true
         */
        get leading(): boolean;
        set leading(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LeadContainer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LeadContainer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LeadContainer;

        // Signals

        /** @signal */
        connect<K extends keyof LeadContainer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LeadContainer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LeadContainer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LeadContainer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LeadContainer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LeadContainer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get `actions` that were set for this `lead_container` to block.
         * @returns a mask of actions that container blocks from being triggered on video.
         */
        get_blocked_actions(): VideoActionMask;
        /**
         * Get a whenever `lead_container` has leadership set.
         * @returns `true` if container is leading, `false` otherwise.
         */
        get_leading(): boolean;
        /**
         * Set `actions` that {@link ClapperGtk.Video} should skip when {@link Gdk.Event} which
         * would normally trigger them happens inside `lead_container`.
         * @param actions a {@link ClapperGtk.VideoActionMask} of actions to block
         */
        set_blocked_actions(actions: VideoActionMask): void;
        /**
         * Set if `lead_container` leadership should be enabled.
         *
         * When enabled, interactions with `lead_container` will not trigger
         * their default behavior, instead container and its contents will take priority.
         * @param leading enable leadership
         */
        set_leading(leading: boolean): void;
    }

    namespace NextItemButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            'notify::can-shrink': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Button.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * A {@link Gtk.Button} for selecting next queue item.
     * @gir-type Class
     */
    class NextItemButton
        extends Gtk.Button
        implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<NextItemButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NextItemButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NextItemButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NextItemButton;

        // Signals

        /** @signal */
        connect<K extends keyof NextItemButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NextItemButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NextItemButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NextItemButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NextItemButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NextItemButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The name of the action with which this widget should be associated.
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);
        /**
         * The name of the action with which this widget should be associated.
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);
        /**
         * The target value of the actionable widget's action.
         * @category Inherited from Gtk.Actionable
         */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /**
         * The target value of the actionable widget's action.
         * @category Inherited from Gtk.Actionable
         */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * Gets the action name for `actionable`.
         * @returns the action name
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         */
        set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         */
        set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * {@link Gio.Action.parse_detailed_name}.
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         * @virtual
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         * @virtual
         */
        vfunc_set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         * @virtual
         */
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
    }

    namespace PreviousItemButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            'notify::can-shrink': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Button.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * A {@link Gtk.Button} for selecting previous queue item.
     * @gir-type Class
     */
    class PreviousItemButton
        extends Gtk.Button
        implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<PreviousItemButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreviousItemButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreviousItemButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PreviousItemButton;

        // Signals

        /** @signal */
        connect<K extends keyof PreviousItemButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreviousItemButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PreviousItemButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreviousItemButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PreviousItemButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreviousItemButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The name of the action with which this widget should be associated.
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);
        /**
         * The name of the action with which this widget should be associated.
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);
        /**
         * The target value of the actionable widget's action.
         * @category Inherited from Gtk.Actionable
         */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /**
         * The target value of the actionable widget's action.
         * @category Inherited from Gtk.Actionable
         */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * Gets the action name for `actionable`.
         * @returns the action name
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         */
        set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         */
        set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * {@link Gio.Action.parse_detailed_name}.
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         * @virtual
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         * @virtual
         */
        vfunc_set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         * @virtual
         */
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
    }

    namespace SeekBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::reveal-labels': (pspec: GObject.ParamSpec) => void;
            'notify::seek-method': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            reveal_labels: boolean;
            revealLabels: boolean;
            seek_method: Clapper.PlayerSeekMethod;
            seekMethod: Clapper.PlayerSeekMethod;
        }
    }

    /**
     * A bar for seeking and displaying playback position.
     * @gir-type Class
     */
    class SeekBar extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<SeekBar>;

        // Properties

        /**
         * Reveal state of the position and duration labels.
         * @default true
         */
        get reveal_labels(): boolean;
        set reveal_labels(val: boolean);
        /**
         * Reveal state of the position and duration labels.
         * @default true
         */
        get revealLabels(): boolean;
        set revealLabels(val: boolean);
        /**
         * Method used for seeking.
         * @default Clapper.PlayerSeekMethod.NORMAL
         */
        get seek_method(): Clapper.PlayerSeekMethod;
        set seek_method(val: Clapper.PlayerSeekMethod);
        /**
         * Method used for seeking.
         * @default Clapper.PlayerSeekMethod.NORMAL
         */
        get seekMethod(): Clapper.PlayerSeekMethod;
        set seekMethod(val: Clapper.PlayerSeekMethod);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SeekBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SeekBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SeekBar;

        // Signals

        /** @signal */
        connect<K extends keyof SeekBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SeekBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SeekBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SeekBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SeekBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SeekBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get whether the position and duration labels are going to be revealed.
         * @returns TRUE if the labels are going to be revealed, `false` otherwise.
         */
        get_reveal_labels(): boolean;
        /**
         * Get {@link Clapper.PlayerSeekMethod} used when seeking with seek bar.
         * @returns {@link Clapper.PlayerSeekMethod} used for seeking.
         */
        get_seek_method(): Clapper.PlayerSeekMethod;
        /**
         * Set whether the position and duration labels should be revealed.
         * @param reveal whether to reveal labels
         */
        set_reveal_labels(reveal: boolean): void;
        /**
         * Set {@link Clapper.PlayerSeekMethod} to use when seeking with seek bar.
         * @param method a {@link Clapper.PlayerSeekMethod}
         */
        set_seek_method(method: Clapper.PlayerSeekMethod): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
         * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible identifier for the accessible object.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         *
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible identifier for the accessible object.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         *
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }

    namespace SimpleControls {
        // Signal signatures
        interface SignalSignatures extends Container.SignalSignatures {
            'notify::extra-menu-button': (pspec: GObject.ParamSpec) => void;
            'notify::fullscreenable': (pspec: GObject.ParamSpec) => void;
            'notify::seek-method': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-height': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-width': (pspec: GObject.ParamSpec) => void;
            'notify::height-target': (pspec: GObject.ParamSpec) => void;
            'notify::width-target': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Container.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            extra_menu_button: ExtraMenuButton;
            extraMenuButton: ExtraMenuButton;
            fullscreenable: boolean;
            seek_method: Clapper.PlayerSeekMethod;
            seekMethod: Clapper.PlayerSeekMethod;
        }
    }

    /**
     * A minimalistic playback controls panel widget.
     *
     * {@link ClapperGtk.SimpleControls} is a simple, ready to be used playback controls widget.
     * It is meant to be placed as an overlay (either fading or not) of {@link ClapperGtk.Video}
     * as-is, providing minimal yet universal playback controls for your app.
     *
     * If you need a further customized controls, please use individual widgets this
     * widget consists of to build your own controls implementation instead.
     * @gir-type Class
     */
    class SimpleControls extends Container implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<SimpleControls>;

        // Properties

        /**
         * Access to extra menu button within controls.
         * @read-only
         */
        get extra_menu_button(): ExtraMenuButton;
        /**
         * Access to extra menu button within controls.
         * @read-only
         */
        get extraMenuButton(): ExtraMenuButton;
        /**
         * Whether toggle fullscreen button should be visible.
         * @default true
         */
        get fullscreenable(): boolean;
        set fullscreenable(val: boolean);
        /**
         * Method used for seeking.
         * @default Clapper.PlayerSeekMethod.NORMAL
         */
        get seek_method(): Clapper.PlayerSeekMethod;
        set seek_method(val: Clapper.PlayerSeekMethod);
        /**
         * Method used for seeking.
         * @default Clapper.PlayerSeekMethod.NORMAL
         */
        get seekMethod(): Clapper.PlayerSeekMethod;
        set seekMethod(val: Clapper.PlayerSeekMethod);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimpleControls.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SimpleControls.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SimpleControls;

        // Signals

        /** @signal */
        connect<K extends keyof SimpleControls.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleControls.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SimpleControls.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleControls.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SimpleControls.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SimpleControls.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get {@link ClapperGtk.ExtraMenuButton} that resides within `controls`.
         * @returns {@link ClapperGtk.ExtraMenuButton} within simple controls panel.
         */
        get_extra_menu_button(): ExtraMenuButton;
        /**
         * Get whether {@link ClapperGtk.ToggleFullscreenButton} button in the `controls`
         * is set to be visible.
         * @returns `true` when fullscreenable, `false` otherwise.
         */
        get_fullscreenable(): boolean;
        /**
         * Get {@link Clapper.PlayerSeekMethod} used when seeking with progress bar.
         * @returns {@link Clapper.PlayerSeekMethod} used for seeking.
         */
        get_seek_method(): Clapper.PlayerSeekMethod;
        /**
         * Set whether {@link ClapperGtk.ToggleFullscreenButton} button in the `controls`
         * should be visible.
         *
         * You might want to consider setting this to `false`, if your application
         * does not implement `ClapperGtk.Video::toggle-fullscreen` signal.
         * @param fullscreenable whether show button for toggling fullscreen state
         */
        set_fullscreenable(fullscreenable: boolean): void;
        /**
         * Set {@link Clapper.PlayerSeekMethod} to use when seeking with progress bar.
         * @param method a {@link Clapper.PlayerSeekMethod}
         */
        set_seek_method(method: Clapper.PlayerSeekMethod): void;
    }

    namespace TitleHeader {
        // Signal signatures
        interface SignalSignatures extends LeadContainer.SignalSignatures {
            'notify::current-title': (pspec: GObject.ParamSpec) => void;
            'notify::fallback-to-uri': (pspec: GObject.ParamSpec) => void;
            'notify::blocked-actions': (pspec: GObject.ParamSpec) => void;
            'notify::leading': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-height': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-width': (pspec: GObject.ParamSpec) => void;
            'notify::height-target': (pspec: GObject.ParamSpec) => void;
            'notify::width-target': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                LeadContainer.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            current_title: string;
            currentTitle: string;
            fallback_to_uri: boolean;
            fallbackToUri: boolean;
        }
    }

    /**
     * A header panel widget that displays current media title.
     *
     * {@link ClapperGtk.TitleHeader} is a simple, ready to be used header widget that
     * displays current media title. It can be placed as-is as a {@link ClapperGtk.Video}
     * overlay (either fading or not).
     *
     * If you need a further customized header, you can use {@link ClapperGtk.TitleLabel}
     * which is used by this widget to build your own implementation instead.
     * @gir-type Class
     */
    class TitleHeader extends LeadContainer implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<TitleHeader>;

        // Properties

        /**
         * Currently displayed title.
         * @read-only
         * @default null
         */
        get current_title(): string;
        /**
         * Currently displayed title.
         * @read-only
         * @default null
         */
        get currentTitle(): string;
        /**
         * When title cannot be determined, show URI instead.
         * @default false
         */
        get fallback_to_uri(): boolean;
        set fallback_to_uri(val: boolean);
        /**
         * When title cannot be determined, show URI instead.
         * @default false
         */
        get fallbackToUri(): boolean;
        set fallbackToUri(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TitleHeader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TitleHeader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TitleHeader;

        // Signals

        /** @signal */
        connect<K extends keyof TitleHeader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TitleHeader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TitleHeader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TitleHeader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TitleHeader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TitleHeader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get currently displayed title by `header`.
         * @returns text of title label.
         */
        get_current_title(): string;
        /**
         * Get whether a {@link Clapper.MediaItem.uri} property is going
         * be displayed as a header text when no other title could be determined.
         * @returns `true` when item URI will be used as fallback, `false` otherwise.
         */
        get_fallback_to_uri(): boolean;
        /**
         * Set whether a {@link Clapper.MediaItem.uri} property should
         * be displayed as a header text when no other title could be determined.
         * @param enabled whether enabled
         */
        set_fallback_to_uri(enabled: boolean): void;
    }

    namespace TitleLabel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::current-title': (pspec: GObject.ParamSpec) => void;
            'notify::fallback-to-uri': (pspec: GObject.ParamSpec) => void;
            'notify::media-item': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            current_title: string;
            currentTitle: string;
            fallback_to_uri: boolean;
            fallbackToUri: boolean;
            media_item: Clapper.MediaItem | null;
            mediaItem: Clapper.MediaItem | null;
        }
    }

    /**
     * A label showing an up to date title of media item.
     *
     * By default {@link ClapperGtk.TitleLabel} will automatically show title
     * of {@link Clapper.Queue.current_item} when placed within
     * {@link ClapperGtk.Video} widget hierarchy.
     *
     * Setting {@link ClapperGtk.TitleLabel.media_item} property will
     * make it show title of that particular {@link Clapper.MediaItem}
     * instead. Providing an item to read title from also allows using
     * this {@link Gtk.Widget} outside of {@link ClapperGtk.Video}.
     * @gir-type Class
     */
    class TitleLabel extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<TitleLabel>;

        // Properties

        /**
         * Currently displayed title.
         * @read-only
         * @default null
         */
        get current_title(): string;
        /**
         * Currently displayed title.
         * @read-only
         * @default null
         */
        get currentTitle(): string;
        /**
         * When title cannot be determined, show URI instead.
         * @default false
         */
        get fallback_to_uri(): boolean;
        set fallback_to_uri(val: boolean);
        /**
         * When title cannot be determined, show URI instead.
         * @default false
         */
        get fallbackToUri(): boolean;
        set fallbackToUri(val: boolean);
        /**
         * Currently set media item to display title of.
         */
        get media_item(): Clapper.MediaItem | null;
        set media_item(val: Clapper.MediaItem | null);
        /**
         * Currently set media item to display title of.
         */
        get mediaItem(): Clapper.MediaItem | null;
        set mediaItem(val: Clapper.MediaItem | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TitleLabel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TitleLabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TitleLabel;

        // Signals

        /** @signal */
        connect<K extends keyof TitleLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TitleLabel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TitleLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TitleLabel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TitleLabel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TitleLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get currently displayed title by `label`.
         * @returns text of title label.
         */
        get_current_title(): string;
        /**
         * Get whether a {@link Clapper.MediaItem.uri} property is going
         * be displayed as a label text when no other title could be determined.
         * @returns `true` when item URI will be used as fallback, `false` otherwise.
         */
        get_fallback_to_uri(): boolean;
        /**
         * Get currently set media item to display title of.
         * @returns currently set media item.
         */
        get_media_item(): Clapper.MediaItem | null;
        /**
         * Set whether a {@link Clapper.MediaItem.uri} property should
         * be displayed as a label text when no other title could be determined.
         * @param enabled whether enabled
         */
        set_fallback_to_uri(enabled: boolean): void;
        /**
         * Set a media item to display title of as label. When set to `null`,
         * `label` will use default behavior (showing title of current queue item).
         * @param item a {@link Clapper.MediaItem}
         */
        set_media_item(item: Clapper.MediaItem | null): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
         * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible identifier for the accessible object.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         *
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible identifier for the accessible object.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         *
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }

    namespace ToggleFullscreenButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            'notify::can-shrink': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Button.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * A {@link Gtk.Button} for toggling fullscreen state.
     * @gir-type Class
     */
    class ToggleFullscreenButton
        extends Gtk.Button
        implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<ToggleFullscreenButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ToggleFullscreenButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ToggleFullscreenButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ToggleFullscreenButton;

        // Signals

        /** @signal */
        connect<K extends keyof ToggleFullscreenButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ToggleFullscreenButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ToggleFullscreenButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ToggleFullscreenButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ToggleFullscreenButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ToggleFullscreenButton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The name of the action with which this widget should be associated.
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);
        /**
         * The name of the action with which this widget should be associated.
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);
        /**
         * The target value of the actionable widget's action.
         * @category Inherited from Gtk.Actionable
         */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /**
         * The target value of the actionable widget's action.
         * @category Inherited from Gtk.Actionable
         */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * Gets the action name for `actionable`.
         * @returns the action name
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         */
        set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         */
        set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * {@link Gio.Action.parse_detailed_name}.
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         * @virtual
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         * @virtual
         */
        vfunc_set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         * @virtual
         */
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
    }

    namespace TogglePlayButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            'notify::can-shrink': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Button.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * A {@link Gtk.Button} for toggling play/pause of playback.
     * @gir-type Class
     */
    class TogglePlayButton
        extends Gtk.Button
        implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<TogglePlayButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TogglePlayButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TogglePlayButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TogglePlayButton;

        // Signals

        /** @signal */
        connect<K extends keyof TogglePlayButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TogglePlayButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TogglePlayButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TogglePlayButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TogglePlayButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TogglePlayButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The name of the action with which this widget should be associated.
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);
        /**
         * The name of the action with which this widget should be associated.
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);
        /**
         * The target value of the actionable widget's action.
         * @category Inherited from Gtk.Actionable
         */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /**
         * The target value of the actionable widget's action.
         * @category Inherited from Gtk.Actionable
         */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * Gets the action name for `actionable`.
         * @returns the action name
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         */
        set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         */
        set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * {@link Gio.Action.parse_detailed_name}.
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         * @virtual
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         * @virtual
         */
        vfunc_set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         * @virtual
         */
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
    }

    namespace Video {
        // Signal signatures
        interface SignalSignatures extends Av.SignalSignatures {
            /**
             * A helper signal for implementing common seeking by double tap
             * on screen side for touchscreen devices.
             *
             * Note that `forward` already takes into account RTL direction,
             * so implementation does not have to check.
             * @signal
             * @run-last
             */
            'seek-request': (arg0: boolean) => void;
            /**
             * A signal that user requested a change in fullscreen state of the video.
             *
             * Note that when going fullscreen from this signal, user will expect
             * for only video to be fullscreened and not the whole app window.
             * It is up to implementation to decide how to handle that.
             * @signal
             * @run-last
             */
            'toggle-fullscreen': () => void;
            'notify::fade-delay': (pspec: GObject.ParamSpec) => void;
            'notify::touch-fade-delay': (pspec: GObject.ParamSpec) => void;
            'notify::auto-inhibit': (pspec: GObject.ParamSpec) => void;
            'notify::inhibited': (pspec: GObject.ParamSpec) => void;
            'notify::player': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Av.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            fade_delay: number;
            fadeDelay: number;
            touch_fade_delay: number;
            touchFadeDelay: number;
        }
    }

    /**
     * A ready to be used GTK video widget implementing Clapper API.
     *
     * {@link ClapperGtk.Video} is the main widget exposed by `ClapperGtk` API. It both displays
     * videos played by {@link Clapper.Player} (exposed as {@link ClapperGtk.Av.player} property)
     * and manages revealing and fading of any additional widgets overlaid on top of it.
     *
     * Other widgets provided by `ClapperGtk` library, once placed anywhere on video
     * (including nesting within another widget like {@link Gtk.Box}) will automatically
     * control {@link ClapperGtk.Video} they were overlaid on top of. This allows to freely create
     * custom playback control panels best suited for specific application. Additionally,
     * pre-made widgets such as {@link ClapperGtk.SimpleControls} are also available.
     *
     * # Basic usage
     *
     * A typical use case is to embed video widget as part of your app where video playback
     * is needed. Get the {@link Clapper.Player} belonging to the AV widget and start adding
     * new {@link Clapper.MediaItem} items to the {@link Clapper.Queue} for playback.
     * For more information please refer to the Clapper playback library documentation.
     *
     * {@link ClapperGtk.Video} can automatically take care of revealing and later fading overlaid
     * content when interacting with the video. To do this, simply add your widgets with
     * {@link ClapperGtk.Video.add_fading_overlay}. If you want to display some static content
     * on top of video (or take care of visibility within overlaid widget itself) you can add
     * it to the video as a normal overlay with {@link ClapperGtk.Video.add_overlay}.
     *
     * # Actions
     *
     * You can use built-in actions of parent {@link ClapperGtk.Av}.
     * See its documentation, for the list of available ones.
     *
     * # ClapperGtkVideo as GtkBuildable
     *
     * {@link ClapperGtk.Video} implementation of the {@link Gtk.Buildable} interface supports
     * placing children as either normal overlay by specifying `overlay` or a fading
     * one by specifying `fading-overlay` as the `type` attribute of a `<child>` element.
     * Position of overlaid content is determined by `valign/halign` properties.
     *
     * ```xml
     * <object class="ClapperGtkVideo" id="video">
     *   <child type="fading-overlay">
     *     <object class="ClapperGtkTitleHeader">
     *       <property name="valign">start</property>
     *     </object>
     *   </child>
     *   <child type="fading-overlay">
     *     <object class="ClapperGtkSimpleControls">
     *       <property name="valign">end</property>
     *     </object>
     *   </child>
     * </object>
     * ```
     * @gir-type Class
     */
    class Video extends Av implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Video>;

        // Properties

        /**
         * A delay in milliseconds before trying to fade all fading overlays.
         * @default 3000
         */
        get fade_delay(): number;
        set fade_delay(val: number);
        /**
         * A delay in milliseconds before trying to fade all fading overlays.
         * @default 3000
         */
        get fadeDelay(): number;
        set fadeDelay(val: number);
        /**
         * A delay in milliseconds before trying to fade all fading overlays
         * after revealed using touchscreen.
         * @default 5000
         */
        get touch_fade_delay(): number;
        set touch_fade_delay(val: number);
        /**
         * A delay in milliseconds before trying to fade all fading overlays
         * after revealed using touchscreen.
         * @default 5000
         */
        get touchFadeDelay(): number;
        set touchFadeDelay(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Video.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Video.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Video;

        // Signals

        /** @signal */
        connect<K extends keyof Video.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Video.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Video.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Video.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Video.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Video.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Similiar as `clapper_gtk_video_add_overlay()` but will also automatically
         * add fading functionality to overlaid {@link Gtk.Widget} for convenience. This will
         * make widget reveal itself when interacting with `video` and fade otherwise.
         * Useful when placing widgets such as playback controls panels.
         * @param widget a {@link Gtk.Widget}
         */
        add_fading_overlay(widget: Gtk.Widget): void;
        /**
         * Add another {@link Gtk.Widget} to be overlaid on top of video.
         *
         * The position at which `widget` is placed is determined from
         * {@link Gtk.Widget.halign} and {@link Gtk.Widget.valign} properties.
         *
         * This function will overlay `widget` as-is meaning that widget is responsible
         * for managing its own visablity if needed. If you want to add a {@link Gtk.Widget}
         * that will reveal and fade itself automatically when interacting with `video`
         * (e.g. controls panel) you can use `clapper_gtk_video_add_fading_overlay()`
         * function for convenience.
         * @param widget a {@link Gtk.Widget}
         */
        add_overlay(widget: Gtk.Widget): void;
        /**
         * Get time in milliseconds after which fading overlays should fade.
         * @returns currently set fade delay.
         */
        get_fade_delay(): number;
        /**
         * Get time in milliseconds after which fading overlays should fade
         * when revealed using touch device.
         * @returns currently set touch fade delay.
         */
        get_touch_fade_delay(): number;
        /**
         * Set time in milliseconds after which fading overlays should fade.
         * @param delay a fade delay
         */
        set_fade_delay(delay: number): void;
        /**
         * Set time in milliseconds after which fading overlays should fade
         * when using touchscreen.
         *
         * It is often useful to set this higher then normal fade delay property,
         * as in case of touch events user do not have a moving pointer that would
         * extend fade timeout, so he can have more time to decide what to press next.
         * @param delay a touch fade delay
         */
        set_touch_fade_delay(delay: number): void;
    }

    /**
     * @gir-type Alias
     */
    type AudioClass = typeof Audio;
    /**
     * @gir-type Alias
     */
    type AvClass = typeof Av;
    /**
     * @gir-type Alias
     */
    type BillboardClass = typeof Billboard;
    /**
     * @gir-type Alias
     */
    type ContainerClass = typeof Container;
    /**
     * @gir-type Alias
     */
    type ExtraMenuButtonClass = typeof ExtraMenuButton;
    /**
     * @gir-type Alias
     */
    type LeadContainerClass = typeof LeadContainer;
    /**
     * @gir-type Alias
     */
    type NextItemButtonClass = typeof NextItemButton;
    /**
     * @gir-type Alias
     */
    type PreviousItemButtonClass = typeof PreviousItemButton;
    /**
     * @gir-type Alias
     */
    type SeekBarClass = typeof SeekBar;
    /**
     * @gir-type Alias
     */
    type SimpleControlsClass = typeof SimpleControls;
    /**
     * @gir-type Alias
     */
    type TitleHeaderClass = typeof TitleHeader;
    /**
     * @gir-type Alias
     */
    type TitleLabelClass = typeof TitleLabel;
    /**
     * @gir-type Alias
     */
    type ToggleFullscreenButtonClass = typeof ToggleFullscreenButton;
    /**
     * @gir-type Alias
     */
    type TogglePlayButtonClass = typeof TogglePlayButton;
    /**
     * @gir-type Alias
     */
    type VideoClass = typeof Video;
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

export default ClapperGtk;

// END
