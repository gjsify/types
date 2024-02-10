/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cally-1.0-ambient.d.ts';
import './cally-1.0-import.d.ts';
/**
 * Cally-1.0
 */

import type Clutter from '@girs/clutter-1.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-1.0';
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
     * The &lt;structname&gt;CallyActor&lt;/structname&gt; structure contains only private
     * data and should be accessed using the provided API
     */
    class Actor extends Atk.GObjectAccessible {
        // Constructors of Cally-1.0.Actor

        static ['new'](actor: Clutter.Actor): Actor;

        // Owm methods of Cally-1.0.Actor

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
         * Removes a action, using the `action_id` returned by cally_actor_add_action()
         * @param action_id the action id
         * @returns %TRUE if the operation was succesful, %FALSE otherwise
         */
        remove_action(action_id: number): boolean;
        /**
         * Removes an action, using the `action_name` used when the action was added
         * with cally_actor_add_action()
         * @param action_name the name of the action to remove
         * @returns %TRUE if the operation was succesful, %FALSE otherwise
         */
        remove_action_by_name(action_name: string): boolean;
    }

    module Clone {
        // Constructor properties interface
    }

    /**
     * The &lt;structname&gt;CallyClone&lt;/structname&gt; structure contains only private
     * data and should be accessed using the provided API
     */
    class Clone extends Actor {
        // Constructors of Cally-1.0.Clone

        static ['new'](actor: Clutter.Actor): Clone;
    }

    module Group {
        // Constructor properties interface
    }

    /**
     * The &lt;structname&gt;CallyGroup&lt;/structname&gt; structure contains only
     * private data and should be accessed using the provided API
     */
    class Group extends Actor {
        // Constructors of Cally-1.0.Group

        static ['new'](actor: Clutter.Actor): Group;
    }

    module Rectangle {
        // Constructor properties interface
    }

    /**
     * The &lt;structname&gt;CallyRectangle&lt;/structname&gt; structure contains only private
     * data and should be accessed using the provided API
     */
    class Rectangle extends Actor {
        // Constructors of Cally-1.0.Rectangle

        static ['new'](actor: Clutter.Actor): Rectangle;
    }

    module Root {
        // Constructor properties interface
    }

    /**
     * The &lt;structname&gt;CallyRoot&lt;/structname&gt; structure contains only private
     * data and should be accessed using the provided API
     */
    class Root extends Atk.GObjectAccessible {
        // Constructors of Cally-1.0.Root

        static ['new'](): Root;
    }

    module Stage {
        // Constructor properties interface
    }

    /**
     * The &lt;structname&gt;CallyStage&lt;/structname&gt; structure contains only
     * private data and should be accessed using the provided API
     */
    class Stage extends Group {
        // Constructors of Cally-1.0.Stage

        static ['new'](actor: Clutter.Actor): Stage;
    }

    module Text {
        // Constructor properties interface
    }

    /**
     * The &lt;structname&gt;CallyText&lt;/structname&gt; structure contains only private
     * data and should be accessed using the provided API
     */
    class Text extends Actor {
        // Constructors of Cally-1.0.Text

        static ['new'](actor: Clutter.Actor): Text;
    }

    module Texture {
        // Constructor properties interface
    }

    /**
     * The &lt;structname&gt;CallyTexture&lt;/structname&gt; structure contains only
     * private data and should be accessed using the provided API
     */
    class Texture extends Actor {
        // Constructors of Cally-1.0.Texture

        static ['new'](actor: Clutter.Actor): Texture;
    }

    module Util {
        // Constructor properties interface
    }

    /**
     * The &lt;structname&gt;CallyUtil&lt;/structname&gt; structure contains only
     * private data and should be accessed using the provided API
     */
    class Util extends Atk.Util {}

    /**
     * The &lt;structname&gt;CallyActorClass&lt;/structname&gt; structure contains
     * only private data
     */
    class ActorClass {}

    class ActorPrivate {}

    /**
     * The &lt;structname&gt;CallyCloneClass&lt;/structname&gt; structure contains only
     * private data
     */
    class CloneClass {}

    class ClonePrivate {}

    /**
     * The &lt;structname&gt;CallyGroupClass&lt;/structname&gt; structure contains only
     * private data
     */
    class GroupClass {}

    class GroupPrivate {}

    /**
     * The &lt;structname&gt;CallyRectangleClass&lt;/structname&gt; structure contains
     * only private data
     */
    class RectangleClass {}

    class RectanglePrivate {}

    /**
     * The &lt;structname&gt;CallyRootClass&lt;/structname&gt; structure contains only
     * private data
     */
    class RootClass {}

    class RootPrivate {}

    /**
     * The &lt;structname&gt;CallyStageClass&lt;/structname&gt; structure contains only
     * private data
     */
    class StageClass {}

    class StagePrivate {}

    /**
     * The &lt;structname&gt;CallyTextClass&lt;/structname&gt; structure contains only
     * private data
     */
    class TextClass {}

    class TextPrivate {}

    /**
     * The &lt;structname&gt;CallyTextureClass&lt;/structname&gt; structure contains
     * only private data
     */
    class TextureClass {}

    class TexturePrivate {}

    /**
     * The &lt;structname&gt;CallyUtilClass&lt;/structname&gt; structure contains only
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
