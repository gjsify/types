/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './mash-0.2-ambient.d.ts';
import './mash-0.2-import.d.ts';
/**
 * Mash-0.2
 */

import type freetype2 from '@girs/freetype2-2.0';
import type fontconfig from '@girs/fontconfig-2.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type PangoFT2 from '@girs/pangoft2-1.0';
import type PangoFc from '@girs/pangofc-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type Gio from '@girs/gio-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Json from '@girs/json-1.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type Cogl from '@girs/cogl-1.0';
import type Clutter from '@girs/clutter-1.0';
import type Atk from '@girs/atk-1.0';

export namespace Mash {
    /**
     * Error enumeration for #MashData
     */
    enum DataError {
        UNKNOWN_FORMAT,
        UNKNOWN,
        MISSING_PROPERTY,
        INVALID,
        UNSUPPORTED,
    }
    /**
     * Flags used for modifying the data as it is loaded. These can be
     * passed to mash_data_load().
     *
     * If any of the negate flags are set then they cause the vertex and
     * normal coordinates for the specified axis to be negated. This could
     * be useful when loading a model from a tool which uses a different
     * coordinate system than the one used in your application. For
     * example, in Blender if the view is rotated such that the x-axis is
     * pointing to the right, and the z-axis is pointing out of the screen
     * then y-axis would be pointing directly up. However in Clutter the
     * default transformation is set up such that the y-axis would be
     * pointing down. Therefore if a model is loaded from Blender it would
     * appear upside-down. Also all of the front faces would be in
     * clockwise order. If backface culling is then enabled then the wrong
     * faces would be culled with the default Cogl settings.
     *
     * To avoid these issues when exporting from Blender it is common to
     * pass the %MASH_DATA_NEGATE_Y flag.
     */
    enum DataFlags {
        NONE,
        NEGATE_X,
        NEGATE_Y,
        NEGATE_Z,
    }
    module Data {
        // Constructor properties interface
    }

    /**
     * The #MashData structure contains only private data.
     */
    class Data extends GObject.Object {
        // Constructors of Mash-0.2.Data

        static ['new'](): Data;

        // Owm methods of Mash-0.2.Data

        static error_quark(): GLib.Quark;

        // Owm methods of Mash-0.2.Data

        /**
         * Gets the bounding cuboid of the vertices in `self`. The cuboid is
         * represented by two vertices representing the minimum and maximum
         * extents. The x, y and z components of `min_vertex` will contain the
         * minimum x, y and z values of all the vertices and `max_vertex` will
         * contain the maximum. The extents of the model are cached so it is
         * cheap to call this function.
         * @param min_vertex A location to return the minimum vertex
         * @param max_vertex A location to return the maximum vertex
         */
        get_extents(min_vertex: Clutter.Vertex, max_vertex: Clutter.Vertex): void;
        /**
         * Loads the data from the file called `filename` into `self`. The
         * model can then be rendered using mash_data_render(). If
         * there is an error loading the file it will return %FALSE and `error`
         * will be set to a GError instance.
         * @param flags Flags used to specify load-time modifications to the data
         * @param filename The name of a file to load
         * @returns %TRUE if the load succeeded or %FALSE otherwise.
         */
        load(flags: DataFlags, filename: string): boolean;
        /**
         * Renders the data contained in the model to the Clutter
         * scene. The current Cogl source material will be used to affect the
         * appearance of the model. This function is not usually called
         * directly but instead the #MashData instance is added to a
         * #MashModel and this function will be automatically called by
         * the paint method of the model.
         */
        render(): void;
    }

    module DataLoader {
        // Constructor properties interface
    }

    /**
     * The #MashDataLoader structure contains only private data.
     */
    abstract class DataLoader extends GObject.Object {
        // Owm methods of Mash-0.2.DataLoader

        get_data(loader_data: DataLoaderData): void;
        /**
         * Obtains the loaded data after calling mash_data_loader_load().
         * This function is not usually called by applications.
         * @param flags
         * @param filename
         */
        load(flags: DataFlags, filename: string): boolean;
    }

    module DirectionalLight {
        // Constructor properties interface
    }

    /**
     * The #MashDirectionalLight structure contains only private data.
     */
    class DirectionalLight extends Light {
        // Constructors of Mash-0.2.DirectionalLight

        static ['new'](): DirectionalLight;
    }

    module Light {
        // Constructor properties interface
    }

    /**
     * The #MashLight structure contains only private data.
     */
    abstract class Light extends Clutter.Actor {
        // Own properties of Mash-0.2.Light

        ambient: Clutter.Color;
        diffuse: Clutter.Color;
        specular: Clutter.Color;

        // Owm methods of Mash-0.2.Light

        /**
         * This is a convenience intended to be used within
         * mash_light_generate_shader() to generate shader snippets with
         * actor-specific variable names. It should not generally need to be
         * called by an application unless it is implementing its own lighting
         * algorithms.
         *
         * The code in `snippet` is appended to `shader_source` but all
         * occurences of the ‘$’ symbol are replaced with a string that is
         * unique to `light` object. This is useful when multiple lights of the
         * same type are added to a single light box. For example, if a light
         * needs to have a position uniform it could make a call like the
         * following:
         *
         *
         * ```
         *   mash_light_append_shader (light, uniform_source,
         *                             "uniform vec3 position$;\n");
         * ```
         *
         *
         * The ‘position’ will get translated to something like
         * ‘positiong00000002’.
         * @param shader_source The string to append to
         * @param snippet A snippet of GLSL
         */
        append_shader(shader_source: GLib.String, snippet: string): void;
        /**
         * This function is used to generate the shader code required to
         * implement a paraticular. It would not usually need to be called
         * from an application. Instead it is called automatically by
         * #MashLightSet.
         *
         * This function can be overriden in subclasses of #MashLight to
         * implement custom lighting algorithms. The function will be called
         * before the first actor that is using the light set is painted
         * whenever it deems that the shader needs to be regenerated. It
         * currently will do this whenever a light is added or removed from
         * the box. The implementation should append any GLSL code to
         * `uniform_source` and `main_source` needed to implement the algorithm.
         *
         * The implementation should use mash_light_append_shader() to append
         * code to either of the shader strings so that it can declare
         * variables that are unique to the individual actor.
         *
         * The code in `uniform_source` is inserted at the global level of a
         * vertex shader. It is expected that the light will add uniform
         * declarations here. For example, if the light depends on the light's
         * position it could define a uniform for the position like so:
         *
         *
         * ```
         *   mash_light_append_shader (light, uniform_source,
         *                             "uniform vec3 position$;\n");
         * ```
         *
         *
         * The code in `main_source` is inserted with the main function of a
         * vertex shader. The snippet added by a light is expected to modify
         * the cogl_color_out attribute according to its algorithm. The snippet
         * can also use the following variables which will be initialized
         * before the snippet is run:
         *
         * normal: This will be a vec3 which is initialized to the transformed
         * and normalized vertex normal.
         *
         * eye_coord: This will be a vec3 containing the vertex coordinates in
         * eye-space.
         *
         * ambient_light: A vec3 uniform containing the ambient light color.
         *
         * diffuse_light: A vec3 uniform containing the diffuse light color.
         *
         * specular_light: A vec3 uniform containing the specular light color.
         *
         * mash_material.ambient: A vec4 containing the current material's
         *   ambient color.
         *
         * mash_material.diffuse: A vec4 containing the current material's
         *   diffuse color.
         *
         * mash_material.specular: A vec4 containing the current material's
         *   specular color.
         *
         * mash_material.emission: A vec4 containing the current material's
         *   emission color.
         *
         * mash_material.shininess: A float containing the current material's
         *   shininess value.
         *
         * mash_normal_matrix: A version of the modelview matrix used to
         * transform normals.
         *
         * In addition to these variables the shader can use all of the
         * built-in Cogl uniforms. Please see a future version of the Cogl
         * documentation for a description of these.
         *
         * The implementation should always chain up to the #MashLight
         * implementation so that it can declare the built-in uniforms.
         * @param uniform_source A location to append uniforms declarations to
         * @param main_source A location to append lighting algorithm snippets to
         */
        generate_shader(uniform_source: GLib.String, main_source: GLib.String): void;
        /**
         * Retrieves the ‘ambient’ color emitted by the light.
         * @param ambient A return location for the color
         */
        get_ambient(ambient: Clutter.Color): void;
        /**
         * Retrieves the ‘diffuse’ color emitted by the light.
         * @param diffuse A return location for the color
         */
        get_diffuse(diffuse: Clutter.Color): void;
        /**
         * Gets the modelview matrix for the light including all of the
         * transformations for its parent actors. This should be used for
         * updating uniforms that depend on the actor's transformation or
         * position.
         * @param matrix The return location for the matrix
         */
        get_modelview_matrix(matrix: Cogl.Matrix): void;
        /**
         * Retrieves the ‘specular’ color emitted by the light.
         * @param specular A return location for the color
         */
        get_specular(specular: Clutter.Color): void;
        /**
         * This is a convenience intended to be used within
         * mash_light_update_uniforms() to help query uniform locations. It
         * should not generally need to be called by an application unless it
         * is implementing its own lighting algorithms.
         *
         * This is a wrapper around cogl_program_get_uniform_location() which
         * appends an actor specific string to the uniform name. This is
         * useful when uniforms have been declared like ‘position$’ within
         * mash_light_append_shader().
         * @param program The program passed in from mash_light_update_uniforms().
         * @param uniform_name The name of a uniform
         */
        get_uniform_location(program: Cogl.Handle, uniform_name: string): number;
        /**
         * Sets the ‘ambient’ color emitted by the light. If the light reaches
         * a vertex at all then the ambient color affects the vertex
         * regardless of its orientation or distance from the light. In
         * real-world lighting, even if an object isn't in a direct line of
         * sight to a light it can still be partially lit due to the fact that
         * light can bounce off other objects to reach it. The Mash lighting
         * model doesn't simulate this bouncing so the ambient color is often
         * used to give an approximation of the effect.
         * @param ambient The new color value
         */
        set_ambient(ambient: Clutter.Color): void;
        /**
         * Sets the ‘diffuse’ color emitted by the light. The diffuse color is
         * only visible on an object if is facing the light. The orientation
         * of the object is determined per-vertex using the vertex's
         * normal. The diffuse color will be darkened depending on how
         * directly the object faces the light.
         * @param diffuse The new color value
         */
        set_diffuse(diffuse: Clutter.Color): void;
        /**
         * This is a convenience intended to be used within
         * mash_light_update_uniforms() to help set uniforms. It
         * should not generally need to be called by an application unless it
         * is implementing its own lighting algorithms.
         *
         * This is intended to help when setting a direction
         * uniform. `direction_in` should be an untransformed array of 3 floats
         * representing a vector. The vector will be transformed into eye
         * space according to the inverse transposed matrix of `light` so that
         * it won't change direction for non-uniform scaling transformations.
         * @param program
         * @param uniform_location The location of the uniform
         * @param direction_in The untransformed direction uniform
         */
        set_direction_uniform(program: Cogl.Handle, uniform_location: number, direction_in: number): void;
        /**
         * Sets the ‘specular’ color emitted by the light. The specular color
         * is used to add highlights to an object wherever the angle to the
         * light is close to the angle that the object is being viewed
         * from. For example, if you were modelling a snooker ball with a
         * bright light above it, this property will allow you add a bright
         * part where the light can directly reflect off the ball into the
         * eye. It is common to set this to a bright white value.
         * @param specular The new color value
         */
        set_specular(specular: Clutter.Color): void;
        /**
         * This function is used by #MashLightSet to implement the lights. It
         * should not need to be called by an application directly.
         *
         * This function is virtual and can be overriden by subclasses to
         * implement custom lighting algorithms. The function is called during
         * the paint sequence of #MashLightSet on every light before any other
         * actors are painted. This gives the light implementation a chance to
         * update any uniforms it may have declared in the override of
         * mash_light_generate_shader().
         *
         * The program is always made current with cogl_program_use() before
         * this method is called so it is safe to directly call
         * cogl_program_uniform_1f() and friends to update the uniforms. The
         * `program` handle is passed in so that the program can also be
         * queried to the locations of named
         * uniforms. mash_light_get_uniform_location() can be used to make
         * this easier when a uniform is named uniquely using the ‘$’ symbol
         * in mash_light_append_shader().
         * @param program A #CoglProgram containing the uniforms
         */
        update_uniforms(program: Cogl.Handle): void;
    }

    module LightSet {
        // Constructor properties interface
    }

    /**
     * The #MashLightSet structure contains only private data.
     */
    class LightSet extends GObject.Object {
        // Constructors of Mash-0.2.LightSet

        static ['new'](): LightSet;

        // Owm methods of Mash-0.2.LightSet

        /**
         * This adds a light to the set. Lights need to be added to the light
         * set as well as to a container somewhere in the Clutter actor
         * hierarchy in order to be useful.
         * @param light A #MashLight
         */
        add_light(light: Light): void;
        /**
         * Removes a light from the set.
         * @param light A #MashLight
         */
        remove_light(light: Light): void;
    }

    module Model {
        // Constructor properties interface
    }

    /**
     * The #MashModel structure contains only private data.
     */
    class Model extends Clutter.Actor {
        // Own properties of Mash-0.2.Model

        data: Data;
        fit_to_allocation: boolean;
        fitToAllocation: boolean;
        light_set: LightSet;
        lightSet: LightSet;

        // Constructors of Mash-0.2.Model

        static ['new'](): Model;

        static new_from_file(flags: DataFlags, filename: string): Model;

        // Owm methods of Mash-0.2.Model

        get_fit_to_allocation(): boolean;
        /**
         * Replaces the data used by the actor with `data`. A reference is
         * taken on `data` so if you no longer need it you should unref it with
         * g_object_unref().
         * @param data The new #MashData
         */
        set_data(data: Data): void;
        /**
         * This sets whether the actor should scale the model to fit the
         * actor's allocation. If it's %TRUE then all of the axes of the model
         * will be scaled by the same amount to fill the allocation as much as
         * possible without distorting the aspect ratio. The model is also
         * translated so that it is at the center of the allocation and
         * centered at 0 along the z axis. The size along the z axis is not
         * considered when calculating a scale so if the model is largest
         * along that axis then the actor may appear too large. The
         * transformations are applied in addition to the actor's
         * transformations so it is still possible scale the actor further
         * using the scale-x and scale-y properties. The preferred size of the
         * actor will be the width and height of the model. If
         * width-for-height or height-for-width allocation is being used then
         * #MashModel will return whatever width or height will exactly
         * preserve the aspect ratio.
         *
         * If the value is %FALSE then the actor is not transformed so the
         * origin of the model will be the top left corner of the actor. The
         * preferred size of the actor will be maximum extents of the model
         * although the allocation is not considered during paint so if the
         * model extends past the allocated size then it will draw outside the
         * allocation.
         *
         * The default value is %TRUE.
         * @param fit_to_allocation New value
         */
        set_fit_to_allocation(fit_to_allocation: boolean): void;
        /**
         * This sets the #MashLightSet that will be used to render the
         * model. Alternatively %NULL can be passed to disable lighting for
         * this model. The light set represents a collection of #MashLight<!--
         * -->s that will affect the appearance of the model.
         * @param light_set A new #MashLightSet
         */
        set_light_set(light_set: LightSet): void;
        /**
         * Replaces the material that will be used to render the model with
         * the given one. By default a #MashModel will use a solid white
         * material. However the color of the material is still blended with
         * the vertex colors so the white material will cause the vertex
         * colors to be used directly. If you want the model to be textured
         * you will need to create a material that has a texture layer and set
         * it with this function.
         *
         * If a #MashLightSet is used with the model then the material given
         * here will be modified to use the program generated by that light
         * set. If multiple models are expected to use the same material with
         * different light sets, it would be better to use a different copy of
         * the same material for each set of models so that they don't
         * repeatedly change the program on the material during paint.
         * @param material A handle to a Cogl material
         */
        set_material(material: Cogl.Handle): void;
    }

    module PlyLoader {
        // Constructor properties interface
    }

    class PlyLoader extends Data {}

    module PointLight {
        // Constructor properties interface
    }

    /**
     * The #MashLightClass structure contains only private data.
     */
    class PointLight extends Light {
        // Own properties of Mash-0.2.PointLight

        constant_attenuation: number;
        constantAttenuation: number;
        linear_attenuation: number;
        linearAttenuation: number;
        quadratic_attenuation: number;
        quadraticAttenuation: number;

        // Constructors of Mash-0.2.PointLight

        static ['new'](): PointLight;

        // Owm methods of Mash-0.2.PointLight

        get_constant_attenuation(): number;
        get_linear_attenuation(): number;
        get_quadratic_attenuation(): number;
        /**
         * Sets the constant attenuation value on a light. The light intensity
         * is divided by this value. Setting a higher value will cause the
         * light to appear dimmer.
         * @param attenuation The new value
         */
        set_constant_attenuation(attenuation: number): void;
        /**
         * Sets the linear attenuation value on a light. The light intensity
         * is divided by this value multiplied by the distance to the
         * light. Setting a higher value will cause the intensity to dim faster
         * as the vertex moves away from the light.
         * @param attenuation The new value
         */
        set_linear_attenuation(attenuation: number): void;
        /**
         * Sets the quadratic attenuation value on a light. The light
         * intensity is divided by this value multiplied by the square of the
         * distance to the light. Setting a higher value will cause the
         * intensity to dim sharply as the vertex moves away from the light.
         * @param attenuation The new value
         */
        set_quadratic_attenuation(attenuation: number): void;
    }

    module SpotLight {
        // Constructor properties interface
    }

    /**
     * The #MashSpotLight structure contains only private data.
     */
    class SpotLight extends PointLight {
        // Own properties of Mash-0.2.SpotLight

        spot_cutoff: number;
        spotCutoff: number;
        spot_exponent: number;
        spotExponent: number;

        // Constructors of Mash-0.2.SpotLight

        static ['new'](): SpotLight;

        // Owm methods of Mash-0.2.SpotLight

        get_spot_cutoff(): number;
        get_spot_exponent(): number;
        /**
         * Sets the spot cut off value on a light. This is an angle in degrees
         * which defines the shape of the cone of light emitted from the
         * light. It should be within the range 0° to 90°
         * @param cutoff The new value
         */
        set_spot_cutoff(cutoff: number): void;
        /**
         * Sets the spot exponent value on a light. The light intensity is
         * multiplied by the angle between the light direction and the vector
         * to the vertex raised to the power of the exponent. A higher
         * exponent value makes the cone of the light appear smaller.
         * @param exponent The new value
         */
        set_spot_exponent(exponent: number): void;
    }

    /**
     * The #MashDataClass structure contains only private data.
     */
    class DataClass {}

    class DataLoaderClass {}

    /**
     * The #MashDataLoaderData structure contains the loaded data.
     */
    class DataLoaderData {
        // Own fields of Mash-0.2.DataLoaderData

        vertices_vbo: Cogl.Handle;
        indices: Cogl.Handle;
        min_index: number;
        max_index: number;
        n_triangles: number;
        min_vertex: Clutter.Vertex;
        max_vertex: Clutter.Vertex;

        // Constructors of Mash-0.2.DataLoaderData

        constructor(
            properties?: Partial<{
                vertices_vbo: Cogl.Handle;
                indices: Cogl.Handle;
                min_index: number;
                max_index: number;
                n_triangles: number;
                min_vertex: Clutter.Vertex;
                max_vertex: Clutter.Vertex;
            }>,
        );
    }

    class DataLoaderPrivate {}

    class DataPrivate {}

    class DirectionalLightClass {}

    class DirectionalLightPrivate {}

    class LightClass {}

    class LightPrivate {}

    /**
     * The #MashLightSetClass structure contains only private data.
     */
    class LightSetClass {}

    class LightSetPrivate {}

    /**
     * The #MashModelClass structure contains only private data.
     */
    class ModelClass {}

    class ModelPrivate {}

    class PlyLoaderClass {}

    class PlyLoaderPrivate {}

    /**
     * The #MashPointLightClass structure contains only private data.
     */
    class PointLightClass {}

    class PointLightPrivate {}

    /**
     * The #MashSpotLightClass structure contains only private data.
     */
    class SpotLightClass {}

    class SpotLightPrivate {}

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

export default Mash;
// END
