/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cally-11-ambient.d.ts';
import './cally-11-import.d.ts';
/**
 * Cally-11
 */

import type CoglPango from '@girs/coglpango-11';
import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Cogl from '@girs/cogl-11';
import type Graphene from '@girs/graphene-1.0';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-11';
import type Json from '@girs/json-1.0';
import type Atk from '@girs/atk-1.0';

export namespace Cally {
    /**
     * Initializes the accessibility support.
     * @returns %TRUE if accessibility support has been correctly initialized.
     */
    function accessibility_init(): boolean;
    /**
     * Returns if the accessibility support using cally is enabled.
     * @returns %TRUE if accessibility support has been correctly initialized.
     */
    function get_cally_initialized(): boolean;
    function snoop_key_event(key: Clutter.KeyEvent): boolean;
    interface ActionCallback {
        (cally_actor: Actor): void;
    }
    interface ActionFunc {
        (cally_actor: Actor): void;
    }
    module Actor {
        // Constructor properties interface
    }

    /**
     * Implementation of the ATK interfaces for [class`Clutter`.Actor]
     *
     * #CallyActor implements the required ATK interfaces of [class`Clutter`.Actor]
     * exposing the common elements on each actor (position, extents, etc).
     */
    class Actor extends Atk.GObjectAccessible {
        // Constructors of Cally-11.Actor

        static ['new'](actor: Clutter.Actor): Actor;

        // Owm methods of Cally-11.Actor

        /**
         * Adds a new action to be accessed with the #AtkAction interface.
         * @param action_name the action name
         * @param action_description the action description
         * @param action_keybinding the action keybinding
         * @param callback the callback of the action
         * @returns added action id, or -1 if failure
         */
        add_action(
            action_name: string,
            action_description: string,
            action_keybinding: string,
            callback: ActionCallback,
        ): number;
        /**
         * Removes a action, using the `action_id` returned by [method`Actor`.add_action]
         * @param action_id the action id
         * @returns %TRUE if the operation was successful, %FALSE otherwise
         */
        remove_action(action_id: number): boolean;
        /**
         * Removes an action, using the `action_name` used when the action was added
         * with [method`Actor`.add_action]
         * @param action_name the name of the action to remove
         * @returns %TRUE if the operation was successful, %FALSE otherwise
         */
        remove_action_by_name(action_name: string): boolean;
    }

    module Clone {
        // Constructor properties interface
    }

    /**
     * Implementation of the ATK interfaces for a #ClutterClone
     *
     * #CallyClone implements the required ATK interfaces of [class`Clutter`.Clone]
     *
     * In particular it sets a proper role for the clone, as just a image,
     * as it is the sanest and simplest approach.
     */
    class Clone extends Actor {
        // Constructors of Cally-11.Clone

        static ['new'](actor: Clutter.Actor): Clone;
    }

    module Root {
        // Constructor properties interface
    }

    /**
     * Root object for the Cally toolkit
     *
     * #CallyRoot is the root object of the accessibility tree-like
     * hierarchy, exposing the application level.
     *
     * Somewhat equivalent to #GailTopLevel. We consider that this class
     * expose the a11y information of the [class`Clutter`.StageManager], as the
     * children of this object are the different [class`Clutter`.Stage] managed (so
     * the [class`GObject`.Object] used in the atk_object_initialize() is the
     * [class`Clutter`.StageManager]).
     */
    class Root extends Atk.GObjectAccessible {
        // Constructors of Cally-11.Root

        static ['new'](): Root;
    }

    module Stage {
        // Constructor properties interface
    }

    /**
     * Implementation of the ATK interfaces for a #ClutterStage
     *
     * #CallyStage implements the required ATK interfaces for [class`Clutter`.Stage]
     *
     * Some implementation details: at this moment #CallyStage is used as
     * the most similar Window object in this toolkit (ie: emitting window
     * related signals), although the real purpose of [class`Clutter`.Stage] is
     * being a canvas. Anyway, this is required for applications using
     * just clutter, or directly [class`Clutter`.Stage]
     */
    class Stage extends Actor {
        // Constructors of Cally-11.Stage

        static ['new'](actor: Clutter.Actor): Stage;
    }

    module Text {
        // Constructor properties interface
    }

    /**
     * Implementation of the ATK interfaces for a [class`Clutter`.Text]
     *
     * #CallyText implements the required ATK interfaces of
     * [class`Clutter`.Text], #AtkText and #AtkEditableText
     */
    class Text extends Actor {
        // Constructors of Cally-11.Text

        static ['new'](actor: Clutter.Actor): Text;
    }

    module Util {
        // Constructor properties interface
    }

    /**
     * #AtkUtil implementation
     *
     * #CallyUtil implements #AtkUtil abstract methods. Although it
     * includes the name "Util" it is in fact one of the most important
     * interfaces to be implemented in any ATK toolkit implementation.
     *
     * For instance, it defines atk_get_root(), the method that returns
     * the root object in the hierarchy. Without it, you don't have
     * available any accessible object.
     */
    class Util extends Atk.Util {}

    /**
     * The <structname>CallyActorClass</structname> structure contains
     * only private data
     */
    class ActorClass {}

    class ActorPrivate {}

    /**
     * The <structname>CallyCloneClass</structname> structure contains only
     * private data
     */
    class CloneClass {}

    class ClonePrivate {}

    /**
     * The <structname>CallyRootClass</structname> structure contains only
     * private data
     */
    class RootClass {}

    class RootPrivate {}

    /**
     * The <structname>CallyStageClass</structname> structure contains only
     * private data
     */
    class StageClass {}

    class StagePrivate {}

    /**
     * The <structname>CallyTextClass</structname> structure contains only
     * private data
     */
    class TextClass {}

    class TextPrivate {}

    /**
     * The <structname>CallyUtilClass</structname> structure contains only
     * private data
     */
    class UtilClass {}

    class UtilPrivate {}

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

export default Cally;
// END
