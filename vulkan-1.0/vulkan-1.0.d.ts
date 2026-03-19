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

export namespace Vulkan {
    /**
     * Vulkan-1.0
     */

    /**
     * @gir-type Struct
     */
    class Bool32 {
        static $gtype: GObject.GType<Bool32>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceAddress {
        static $gtype: GObject.GType<DeviceAddress>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceSize {
        static $gtype: GObject.GType<DeviceSize>;
    }

    /**
     * @gir-type Struct
     */
    class Flags {
        static $gtype: GObject.GType<Flags>;
    }

    /**
     * @gir-type Struct
     */
    class SampleMask {
        static $gtype: GObject.GType<SampleMask>;
    }

    /**
     * @gir-type Struct
     */
    class Buffer {
        static $gtype: GObject.GType<Buffer>;
    }

    /**
     * @gir-type Struct
     */
    class Image {
        static $gtype: GObject.GType<Image>;
    }

    /**
     * @gir-type Struct
     */
    class Instance {
        static $gtype: GObject.GType<Instance>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevice {
        static $gtype: GObject.GType<PhysicalDevice>;
    }

    /**
     * @gir-type Struct
     */
    class Device {
        static $gtype: GObject.GType<Device>;
    }

    /**
     * @gir-type Struct
     */
    class Queue {
        static $gtype: GObject.GType<Queue>;
    }

    /**
     * @gir-type Struct
     */
    class Semaphore {
        static $gtype: GObject.GType<Semaphore>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBuffer {
        static $gtype: GObject.GType<CommandBuffer>;
    }

    /**
     * @gir-type Struct
     */
    class Fence {
        static $gtype: GObject.GType<Fence>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceMemory {
        static $gtype: GObject.GType<DeviceMemory>;
    }

    /**
     * @gir-type Struct
     */
    class Event {
        static $gtype: GObject.GType<Event>;
    }

    /**
     * @gir-type Struct
     */
    class QueryPool {
        static $gtype: GObject.GType<QueryPool>;
    }

    /**
     * @gir-type Struct
     */
    class BufferView {
        static $gtype: GObject.GType<BufferView>;
    }

    /**
     * @gir-type Struct
     */
    class ImageView {
        static $gtype: GObject.GType<ImageView>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderModule {
        static $gtype: GObject.GType<ShaderModule>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCache {
        static $gtype: GObject.GType<PipelineCache>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineLayout {
        static $gtype: GObject.GType<PipelineLayout>;
    }

    /**
     * @gir-type Struct
     */
    class Pipeline {
        static $gtype: GObject.GType<Pipeline>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPass {
        static $gtype: GObject.GType<RenderPass>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetLayout {
        static $gtype: GObject.GType<DescriptorSetLayout>;
    }

    /**
     * @gir-type Struct
     */
    class Sampler {
        static $gtype: GObject.GType<Sampler>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSet {
        static $gtype: GObject.GType<DescriptorSet>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorPool {
        static $gtype: GObject.GType<DescriptorPool>;
    }

    /**
     * @gir-type Struct
     */
    class Framebuffer {
        static $gtype: GObject.GType<Framebuffer>;
    }

    /**
     * @gir-type Struct
     */
    class CommandPool {
        static $gtype: GObject.GType<CommandPool>;
    }

    /**
     * @gir-type Struct
     */
    class Result {
        static $gtype: GObject.GType<Result>;
    }

    /**
     * @gir-type Struct
     */
    class StructureType {
        static $gtype: GObject.GType<StructureType>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCacheHeaderVersion {
        static $gtype: GObject.GType<PipelineCacheHeaderVersion>;
    }

    /**
     * @gir-type Struct
     */
    class ImageLayout {
        static $gtype: GObject.GType<ImageLayout>;
    }

    /**
     * @gir-type Struct
     */
    class ObjectType {
        static $gtype: GObject.GType<ObjectType>;
    }

    /**
     * @gir-type Struct
     */
    class VendorId {
        static $gtype: GObject.GType<VendorId>;
    }

    /**
     * @gir-type Struct
     */
    class SystemAllocationScope {
        static $gtype: GObject.GType<SystemAllocationScope>;
    }

    /**
     * @gir-type Struct
     */
    class InternalAllocationType {
        static $gtype: GObject.GType<InternalAllocationType>;
    }

    /**
     * @gir-type Struct
     */
    class Format {
        static $gtype: GObject.GType<Format>;
    }

    /**
     * @gir-type Struct
     */
    class ImageTiling {
        static $gtype: GObject.GType<ImageTiling>;
    }

    /**
     * @gir-type Struct
     */
    class ImageType {
        static $gtype: GObject.GType<ImageType>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceType {
        static $gtype: GObject.GType<PhysicalDeviceType>;
    }

    /**
     * @gir-type Struct
     */
    class QueryType {
        static $gtype: GObject.GType<QueryType>;
    }

    /**
     * @gir-type Struct
     */
    class SharingMode {
        static $gtype: GObject.GType<SharingMode>;
    }

    /**
     * @gir-type Struct
     */
    class ComponentSwizzle {
        static $gtype: GObject.GType<ComponentSwizzle>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewType {
        static $gtype: GObject.GType<ImageViewType>;
    }

    /**
     * @gir-type Struct
     */
    class BlendFactor {
        static $gtype: GObject.GType<BlendFactor>;
    }

    /**
     * @gir-type Struct
     */
    class BlendOp {
        static $gtype: GObject.GType<BlendOp>;
    }

    /**
     * @gir-type Struct
     */
    class CompareOp {
        static $gtype: GObject.GType<CompareOp>;
    }

    /**
     * @gir-type Struct
     */
    class DynamicState {
        static $gtype: GObject.GType<DynamicState>;
    }

    /**
     * @gir-type Struct
     */
    class FrontFace {
        static $gtype: GObject.GType<FrontFace>;
    }

    /**
     * @gir-type Struct
     */
    class VertexInputRate {
        static $gtype: GObject.GType<VertexInputRate>;
    }

    /**
     * @gir-type Struct
     */
    class PrimitiveTopology {
        static $gtype: GObject.GType<PrimitiveTopology>;
    }

    /**
     * @gir-type Struct
     */
    class PolygonMode {
        static $gtype: GObject.GType<PolygonMode>;
    }

    /**
     * @gir-type Struct
     */
    class StencilOp {
        static $gtype: GObject.GType<StencilOp>;
    }

    /**
     * @gir-type Struct
     */
    class LogicOp {
        static $gtype: GObject.GType<LogicOp>;
    }

    /**
     * @gir-type Struct
     */
    class BorderColor {
        static $gtype: GObject.GType<BorderColor>;
    }

    /**
     * @gir-type Struct
     */
    class Filter {
        static $gtype: GObject.GType<Filter>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerAddressMode {
        static $gtype: GObject.GType<SamplerAddressMode>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerMipmapMode {
        static $gtype: GObject.GType<SamplerMipmapMode>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorType {
        static $gtype: GObject.GType<DescriptorType>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentLoadOp {
        static $gtype: GObject.GType<AttachmentLoadOp>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentStoreOp {
        static $gtype: GObject.GType<AttachmentStoreOp>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineBindPoint {
        static $gtype: GObject.GType<PipelineBindPoint>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferLevel {
        static $gtype: GObject.GType<CommandBufferLevel>;
    }

    /**
     * @gir-type Struct
     */
    class IndexType {
        static $gtype: GObject.GType<IndexType>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassContents {
        static $gtype: GObject.GType<SubpassContents>;
    }

    /**
     * @gir-type Struct
     */
    class AccessFlagBits {
        static $gtype: GObject.GType<AccessFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class AccessFlags {
        static $gtype: GObject.GType<AccessFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ImageAspectFlagBits {
        static $gtype: GObject.GType<ImageAspectFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ImageAspectFlags {
        static $gtype: GObject.GType<ImageAspectFlags>;
    }

    /**
     * @gir-type Struct
     */
    class FormatFeatureFlagBits {
        static $gtype: GObject.GType<FormatFeatureFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class FormatFeatureFlags {
        static $gtype: GObject.GType<FormatFeatureFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCreateFlagBits {
        static $gtype: GObject.GType<ImageCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCreateFlags {
        static $gtype: GObject.GType<ImageCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class SampleCountFlagBits {
        static $gtype: GObject.GType<SampleCountFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class SampleCountFlags {
        static $gtype: GObject.GType<SampleCountFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ImageUsageFlagBits {
        static $gtype: GObject.GType<ImageUsageFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ImageUsageFlags {
        static $gtype: GObject.GType<ImageUsageFlags>;
    }

    /**
     * @gir-type Struct
     */
    class InstanceCreateFlagBits {
        static $gtype: GObject.GType<InstanceCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class InstanceCreateFlags {
        static $gtype: GObject.GType<InstanceCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryHeapFlagBits {
        static $gtype: GObject.GType<MemoryHeapFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryHeapFlags {
        static $gtype: GObject.GType<MemoryHeapFlags>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryPropertyFlagBits {
        static $gtype: GObject.GType<MemoryPropertyFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryPropertyFlags {
        static $gtype: GObject.GType<MemoryPropertyFlags>;
    }

    /**
     * @gir-type Struct
     */
    class QueueFlagBits {
        static $gtype: GObject.GType<QueueFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class QueueFlags {
        static $gtype: GObject.GType<QueueFlags>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceCreateFlags {
        static $gtype: GObject.GType<DeviceCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceQueueCreateFlagBits {
        static $gtype: GObject.GType<DeviceQueueCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceQueueCreateFlags {
        static $gtype: GObject.GType<DeviceQueueCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineStageFlagBits {
        static $gtype: GObject.GType<PipelineStageFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineStageFlags {
        static $gtype: GObject.GType<PipelineStageFlags>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryMapFlagBits {
        static $gtype: GObject.GType<MemoryMapFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryMapFlags {
        static $gtype: GObject.GType<MemoryMapFlags>;
    }

    /**
     * @gir-type Struct
     */
    class SparseMemoryBindFlagBits {
        static $gtype: GObject.GType<SparseMemoryBindFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class SparseMemoryBindFlags {
        static $gtype: GObject.GType<SparseMemoryBindFlags>;
    }

    /**
     * @gir-type Struct
     */
    class SparseImageFormatFlagBits {
        static $gtype: GObject.GType<SparseImageFormatFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class SparseImageFormatFlags {
        static $gtype: GObject.GType<SparseImageFormatFlags>;
    }

    /**
     * @gir-type Struct
     */
    class FenceCreateFlagBits {
        static $gtype: GObject.GType<FenceCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class FenceCreateFlags {
        static $gtype: GObject.GType<FenceCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreCreateFlags {
        static $gtype: GObject.GType<SemaphoreCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class EventCreateFlagBits {
        static $gtype: GObject.GType<EventCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class EventCreateFlags {
        static $gtype: GObject.GType<EventCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class QueryPipelineStatisticFlagBits {
        static $gtype: GObject.GType<QueryPipelineStatisticFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class QueryPipelineStatisticFlags {
        static $gtype: GObject.GType<QueryPipelineStatisticFlags>;
    }

    /**
     * @gir-type Struct
     */
    class QueryPoolCreateFlags {
        static $gtype: GObject.GType<QueryPoolCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class QueryResultFlagBits {
        static $gtype: GObject.GType<QueryResultFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class QueryResultFlags {
        static $gtype: GObject.GType<QueryResultFlags>;
    }

    /**
     * @gir-type Struct
     */
    class BufferCreateFlagBits {
        static $gtype: GObject.GType<BufferCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class BufferCreateFlags {
        static $gtype: GObject.GType<BufferCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class BufferUsageFlagBits {
        static $gtype: GObject.GType<BufferUsageFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class BufferUsageFlags {
        static $gtype: GObject.GType<BufferUsageFlags>;
    }

    /**
     * @gir-type Struct
     */
    class BufferViewCreateFlags {
        static $gtype: GObject.GType<BufferViewCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewCreateFlagBits {
        static $gtype: GObject.GType<ImageViewCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewCreateFlags {
        static $gtype: GObject.GType<ImageViewCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderModuleCreateFlags {
        static $gtype: GObject.GType<ShaderModuleCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCacheCreateFlagBits {
        static $gtype: GObject.GType<PipelineCacheCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCacheCreateFlags {
        static $gtype: GObject.GType<PipelineCacheCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ColorComponentFlagBits {
        static $gtype: GObject.GType<ColorComponentFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ColorComponentFlags {
        static $gtype: GObject.GType<ColorComponentFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreateFlagBits {
        static $gtype: GObject.GType<PipelineCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreateFlags {
        static $gtype: GObject.GType<PipelineCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineShaderStageCreateFlagBits {
        static $gtype: GObject.GType<PipelineShaderStageCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineShaderStageCreateFlags {
        static $gtype: GObject.GType<PipelineShaderStageCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderStageFlagBits {
        static $gtype: GObject.GType<ShaderStageFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class CullModeFlagBits {
        static $gtype: GObject.GType<CullModeFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class CullModeFlags {
        static $gtype: GObject.GType<CullModeFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineVertexInputStateCreateFlags {
        static $gtype: GObject.GType<PipelineVertexInputStateCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineInputAssemblyStateCreateFlags {
        static $gtype: GObject.GType<PipelineInputAssemblyStateCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineTessellationStateCreateFlags {
        static $gtype: GObject.GType<PipelineTessellationStateCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineViewportStateCreateFlags {
        static $gtype: GObject.GType<PipelineViewportStateCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRasterizationStateCreateFlags {
        static $gtype: GObject.GType<PipelineRasterizationStateCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineMultisampleStateCreateFlags {
        static $gtype: GObject.GType<PipelineMultisampleStateCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineDepthStencilStateCreateFlagBits {
        static $gtype: GObject.GType<PipelineDepthStencilStateCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineDepthStencilStateCreateFlags {
        static $gtype: GObject.GType<PipelineDepthStencilStateCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineColorBlendStateCreateFlagBits {
        static $gtype: GObject.GType<PipelineColorBlendStateCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineColorBlendStateCreateFlags {
        static $gtype: GObject.GType<PipelineColorBlendStateCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineDynamicStateCreateFlags {
        static $gtype: GObject.GType<PipelineDynamicStateCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineLayoutCreateFlagBits {
        static $gtype: GObject.GType<PipelineLayoutCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineLayoutCreateFlags {
        static $gtype: GObject.GType<PipelineLayoutCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderStageFlags {
        static $gtype: GObject.GType<ShaderStageFlags>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerCreateFlagBits {
        static $gtype: GObject.GType<SamplerCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerCreateFlags {
        static $gtype: GObject.GType<SamplerCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorPoolCreateFlagBits {
        static $gtype: GObject.GType<DescriptorPoolCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorPoolCreateFlags {
        static $gtype: GObject.GType<DescriptorPoolCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorPoolResetFlags {
        static $gtype: GObject.GType<DescriptorPoolResetFlags>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetLayoutCreateFlagBits {
        static $gtype: GObject.GType<DescriptorSetLayoutCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetLayoutCreateFlags {
        static $gtype: GObject.GType<DescriptorSetLayoutCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentDescriptionFlagBits {
        static $gtype: GObject.GType<AttachmentDescriptionFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentDescriptionFlags {
        static $gtype: GObject.GType<AttachmentDescriptionFlags>;
    }

    /**
     * @gir-type Struct
     */
    class DependencyFlagBits {
        static $gtype: GObject.GType<DependencyFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class DependencyFlags {
        static $gtype: GObject.GType<DependencyFlags>;
    }

    /**
     * @gir-type Struct
     */
    class FramebufferCreateFlagBits {
        static $gtype: GObject.GType<FramebufferCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class FramebufferCreateFlags {
        static $gtype: GObject.GType<FramebufferCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassCreateFlagBits {
        static $gtype: GObject.GType<RenderPassCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassCreateFlags {
        static $gtype: GObject.GType<RenderPassCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassDescriptionFlagBits {
        static $gtype: GObject.GType<SubpassDescriptionFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassDescriptionFlags {
        static $gtype: GObject.GType<SubpassDescriptionFlags>;
    }

    /**
     * @gir-type Struct
     */
    class CommandPoolCreateFlagBits {
        static $gtype: GObject.GType<CommandPoolCreateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class CommandPoolCreateFlags {
        static $gtype: GObject.GType<CommandPoolCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class CommandPoolResetFlagBits {
        static $gtype: GObject.GType<CommandPoolResetFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class CommandPoolResetFlags {
        static $gtype: GObject.GType<CommandPoolResetFlags>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferUsageFlagBits {
        static $gtype: GObject.GType<CommandBufferUsageFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferUsageFlags {
        static $gtype: GObject.GType<CommandBufferUsageFlags>;
    }

    /**
     * @gir-type Struct
     */
    class QueryControlFlagBits {
        static $gtype: GObject.GType<QueryControlFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class QueryControlFlags {
        static $gtype: GObject.GType<QueryControlFlags>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferResetFlagBits {
        static $gtype: GObject.GType<CommandBufferResetFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferResetFlags {
        static $gtype: GObject.GType<CommandBufferResetFlags>;
    }

    /**
     * @gir-type Struct
     */
    class StencilFaceFlagBits {
        static $gtype: GObject.GType<StencilFaceFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class StencilFaceFlags {
        static $gtype: GObject.GType<StencilFaceFlags>;
    }

    /**
     * @gir-type Struct
     */
    class Extent2D {
        static $gtype: GObject.GType<Extent2D>;
    }

    /**
     * @gir-type Struct
     */
    class Extent3D {
        static $gtype: GObject.GType<Extent3D>;
    }

    /**
     * @gir-type Struct
     */
    class Offset2D {
        static $gtype: GObject.GType<Offset2D>;
    }

    /**
     * @gir-type Struct
     */
    class Offset3D {
        static $gtype: GObject.GType<Offset3D>;
    }

    /**
     * @gir-type Struct
     */
    class Rect2D {
        static $gtype: GObject.GType<Rect2D>;
    }

    /**
     * @gir-type Struct
     */
    class BaseInStructure {
        static $gtype: GObject.GType<BaseInStructure>;
    }

    /**
     * @gir-type Struct
     */
    class BaseOutStructure {
        static $gtype: GObject.GType<BaseOutStructure>;
    }

    /**
     * @gir-type Struct
     */
    class BufferMemoryBarrier {
        static $gtype: GObject.GType<BufferMemoryBarrier>;
    }

    /**
     * @gir-type Struct
     */
    class DispatchIndirectCommand {
        static $gtype: GObject.GType<DispatchIndirectCommand>;
    }

    /**
     * @gir-type Struct
     */
    class DrawIndexedIndirectCommand {
        static $gtype: GObject.GType<DrawIndexedIndirectCommand>;
    }

    /**
     * @gir-type Struct
     */
    class DrawIndirectCommand {
        static $gtype: GObject.GType<DrawIndirectCommand>;
    }

    /**
     * @gir-type Struct
     */
    class ImageSubresourceRange {
        static $gtype: GObject.GType<ImageSubresourceRange>;
    }

    /**
     * @gir-type Struct
     */
    class ImageMemoryBarrier {
        static $gtype: GObject.GType<ImageMemoryBarrier>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryBarrier {
        static $gtype: GObject.GType<MemoryBarrier>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCacheHeaderVersionOne {
        static $gtype: GObject.GType<PipelineCacheHeaderVersionOne>;
    }

    /**
     * @gir-type Struct
     */
    class AllocationCallbacks {
        static $gtype: GObject.GType<AllocationCallbacks>;
    }

    /**
     * @gir-type Struct
     */
    class ApplicationInfo {
        static $gtype: GObject.GType<ApplicationInfo>;
    }

    /**
     * @gir-type Struct
     */
    class FormatProperties {
        static $gtype: GObject.GType<FormatProperties>;
    }

    /**
     * @gir-type Struct
     */
    class ImageFormatProperties {
        static $gtype: GObject.GType<ImageFormatProperties>;
    }

    /**
     * @gir-type Struct
     */
    class InstanceCreateInfo {
        static $gtype: GObject.GType<InstanceCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryHeap {
        static $gtype: GObject.GType<MemoryHeap>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryType {
        static $gtype: GObject.GType<MemoryType>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFeatures {
        static $gtype: GObject.GType<PhysicalDeviceFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceLimits {
        static $gtype: GObject.GType<PhysicalDeviceLimits>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMemoryProperties {
        static $gtype: GObject.GType<PhysicalDeviceMemoryProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSparseProperties {
        static $gtype: GObject.GType<PhysicalDeviceSparseProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceProperties {
        static $gtype: GObject.GType<PhysicalDeviceProperties>;
    }

    /**
     * @gir-type Struct
     */
    class QueueFamilyProperties {
        static $gtype: GObject.GType<QueueFamilyProperties>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceQueueCreateInfo {
        static $gtype: GObject.GType<DeviceQueueCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceCreateInfo {
        static $gtype: GObject.GType<DeviceCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ExtensionProperties {
        static $gtype: GObject.GType<ExtensionProperties>;
    }

    /**
     * @gir-type Struct
     */
    class LayerProperties {
        static $gtype: GObject.GType<LayerProperties>;
    }

    /**
     * @gir-type Struct
     */
    class SubmitInfo {
        static $gtype: GObject.GType<SubmitInfo>;
    }

    /**
     * @gir-type Struct
     */
    class MappedMemoryRange {
        static $gtype: GObject.GType<MappedMemoryRange>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryAllocateInfo {
        static $gtype: GObject.GType<MemoryAllocateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryRequirements {
        static $gtype: GObject.GType<MemoryRequirements>;
    }

    /**
     * @gir-type Struct
     */
    class SparseMemoryBind {
        static $gtype: GObject.GType<SparseMemoryBind>;
    }

    /**
     * @gir-type Struct
     */
    class SparseBufferMemoryBindInfo {
        static $gtype: GObject.GType<SparseBufferMemoryBindInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SparseImageOpaqueMemoryBindInfo {
        static $gtype: GObject.GType<SparseImageOpaqueMemoryBindInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ImageSubresource {
        static $gtype: GObject.GType<ImageSubresource>;
    }

    /**
     * @gir-type Struct
     */
    class SparseImageMemoryBind {
        static $gtype: GObject.GType<SparseImageMemoryBind>;
    }

    /**
     * @gir-type Struct
     */
    class SparseImageMemoryBindInfo {
        static $gtype: GObject.GType<SparseImageMemoryBindInfo>;
    }

    /**
     * @gir-type Struct
     */
    class BindSparseInfo {
        static $gtype: GObject.GType<BindSparseInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SparseImageFormatProperties {
        static $gtype: GObject.GType<SparseImageFormatProperties>;
    }

    /**
     * @gir-type Struct
     */
    class SparseImageMemoryRequirements {
        static $gtype: GObject.GType<SparseImageMemoryRequirements>;
    }

    /**
     * @gir-type Struct
     */
    class FenceCreateInfo {
        static $gtype: GObject.GType<FenceCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreCreateInfo {
        static $gtype: GObject.GType<SemaphoreCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class EventCreateInfo {
        static $gtype: GObject.GType<EventCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class QueryPoolCreateInfo {
        static $gtype: GObject.GType<QueryPoolCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class BufferCreateInfo {
        static $gtype: GObject.GType<BufferCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class BufferViewCreateInfo {
        static $gtype: GObject.GType<BufferViewCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCreateInfo {
        static $gtype: GObject.GType<ImageCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SubresourceLayout {
        static $gtype: GObject.GType<SubresourceLayout>;
    }

    /**
     * @gir-type Struct
     */
    class ComponentMapping {
        static $gtype: GObject.GType<ComponentMapping>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewCreateInfo {
        static $gtype: GObject.GType<ImageViewCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderModuleCreateInfo {
        static $gtype: GObject.GType<ShaderModuleCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCacheCreateInfo {
        static $gtype: GObject.GType<PipelineCacheCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SpecializationMapEntry {
        static $gtype: GObject.GType<SpecializationMapEntry>;
    }

    /**
     * @gir-type Struct
     */
    class SpecializationInfo {
        static $gtype: GObject.GType<SpecializationInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineShaderStageCreateInfo {
        static $gtype: GObject.GType<PipelineShaderStageCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ComputePipelineCreateInfo {
        static $gtype: GObject.GType<ComputePipelineCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class VertexInputBindingDescription {
        static $gtype: GObject.GType<VertexInputBindingDescription>;
    }

    /**
     * @gir-type Struct
     */
    class VertexInputAttributeDescription {
        static $gtype: GObject.GType<VertexInputAttributeDescription>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineVertexInputStateCreateInfo {
        static $gtype: GObject.GType<PipelineVertexInputStateCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineInputAssemblyStateCreateInfo {
        static $gtype: GObject.GType<PipelineInputAssemblyStateCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineTessellationStateCreateInfo {
        static $gtype: GObject.GType<PipelineTessellationStateCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class Viewport {
        static $gtype: GObject.GType<Viewport>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineViewportStateCreateInfo {
        static $gtype: GObject.GType<PipelineViewportStateCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRasterizationStateCreateInfo {
        static $gtype: GObject.GType<PipelineRasterizationStateCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineMultisampleStateCreateInfo {
        static $gtype: GObject.GType<PipelineMultisampleStateCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class StencilOpState {
        static $gtype: GObject.GType<StencilOpState>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineDepthStencilStateCreateInfo {
        static $gtype: GObject.GType<PipelineDepthStencilStateCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineColorBlendAttachmentState {
        static $gtype: GObject.GType<PipelineColorBlendAttachmentState>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineColorBlendStateCreateInfo {
        static $gtype: GObject.GType<PipelineColorBlendStateCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineDynamicStateCreateInfo {
        static $gtype: GObject.GType<PipelineDynamicStateCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class GraphicsPipelineCreateInfo {
        static $gtype: GObject.GType<GraphicsPipelineCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PushConstantRange {
        static $gtype: GObject.GType<PushConstantRange>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineLayoutCreateInfo {
        static $gtype: GObject.GType<PipelineLayoutCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerCreateInfo {
        static $gtype: GObject.GType<SamplerCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class CopyDescriptorSet {
        static $gtype: GObject.GType<CopyDescriptorSet>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorBufferInfo {
        static $gtype: GObject.GType<DescriptorBufferInfo>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorImageInfo {
        static $gtype: GObject.GType<DescriptorImageInfo>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorPoolSize {
        static $gtype: GObject.GType<DescriptorPoolSize>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorPoolCreateInfo {
        static $gtype: GObject.GType<DescriptorPoolCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetAllocateInfo {
        static $gtype: GObject.GType<DescriptorSetAllocateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetLayoutBinding {
        static $gtype: GObject.GType<DescriptorSetLayoutBinding>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetLayoutCreateInfo {
        static $gtype: GObject.GType<DescriptorSetLayoutCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class WriteDescriptorSet {
        static $gtype: GObject.GType<WriteDescriptorSet>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentDescription {
        static $gtype: GObject.GType<AttachmentDescription>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentReference {
        static $gtype: GObject.GType<AttachmentReference>;
    }

    /**
     * @gir-type Struct
     */
    class FramebufferCreateInfo {
        static $gtype: GObject.GType<FramebufferCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassDescription {
        static $gtype: GObject.GType<SubpassDescription>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassDependency {
        static $gtype: GObject.GType<SubpassDependency>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassCreateInfo {
        static $gtype: GObject.GType<RenderPassCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class CommandPoolCreateInfo {
        static $gtype: GObject.GType<CommandPoolCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferAllocateInfo {
        static $gtype: GObject.GType<CommandBufferAllocateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferInheritanceInfo {
        static $gtype: GObject.GType<CommandBufferInheritanceInfo>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferBeginInfo {
        static $gtype: GObject.GType<CommandBufferBeginInfo>;
    }

    /**
     * @gir-type Struct
     */
    class BufferCopy {
        static $gtype: GObject.GType<BufferCopy>;
    }

    /**
     * @gir-type Struct
     */
    class ImageSubresourceLayers {
        static $gtype: GObject.GType<ImageSubresourceLayers>;
    }

    /**
     * @gir-type Struct
     */
    class BufferImageCopy {
        static $gtype: GObject.GType<BufferImageCopy>;
    }

    /**
     * @gir-type Struct
     */
    class ClearColorValue {
        static $gtype: GObject.GType<ClearColorValue>;
    }

    /**
     * @gir-type Struct
     */
    class ClearDepthStencilValue {
        static $gtype: GObject.GType<ClearDepthStencilValue>;
    }

    /**
     * @gir-type Struct
     */
    class ClearValue {
        static $gtype: GObject.GType<ClearValue>;
    }

    /**
     * @gir-type Struct
     */
    class ClearAttachment {
        static $gtype: GObject.GType<ClearAttachment>;
    }

    /**
     * @gir-type Struct
     */
    class ClearRect {
        static $gtype: GObject.GType<ClearRect>;
    }

    /**
     * @gir-type Struct
     */
    class ImageBlit {
        static $gtype: GObject.GType<ImageBlit>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCopy {
        static $gtype: GObject.GType<ImageCopy>;
    }

    /**
     * @gir-type Struct
     */
    class ImageResolve {
        static $gtype: GObject.GType<ImageResolve>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassBeginInfo {
        static $gtype: GObject.GType<RenderPassBeginInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrConversion {
        static $gtype: GObject.GType<SamplerYcbcrConversion>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorUpdateTemplate {
        static $gtype: GObject.GType<DescriptorUpdateTemplate>;
    }

    /**
     * @gir-type Struct
     */
    class PointClippingBehavior {
        static $gtype: GObject.GType<PointClippingBehavior>;
    }

    /**
     * @gir-type Struct
     */
    class TessellationDomainOrigin {
        static $gtype: GObject.GType<TessellationDomainOrigin>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrModelConversion {
        static $gtype: GObject.GType<SamplerYcbcrModelConversion>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrRange {
        static $gtype: GObject.GType<SamplerYcbcrRange>;
    }

    /**
     * @gir-type Struct
     */
    class ChromaLocation {
        static $gtype: GObject.GType<ChromaLocation>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorUpdateTemplateType {
        static $gtype: GObject.GType<DescriptorUpdateTemplateType>;
    }

    /**
     * @gir-type Struct
     */
    class SubgroupFeatureFlagBits {
        static $gtype: GObject.GType<SubgroupFeatureFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class SubgroupFeatureFlags {
        static $gtype: GObject.GType<SubgroupFeatureFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PeerMemoryFeatureFlagBits {
        static $gtype: GObject.GType<PeerMemoryFeatureFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class PeerMemoryFeatureFlags {
        static $gtype: GObject.GType<PeerMemoryFeatureFlags>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryAllocateFlagBits {
        static $gtype: GObject.GType<MemoryAllocateFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryAllocateFlags {
        static $gtype: GObject.GType<MemoryAllocateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class CommandPoolTrimFlags {
        static $gtype: GObject.GType<CommandPoolTrimFlags>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorUpdateTemplateCreateFlags {
        static $gtype: GObject.GType<DescriptorUpdateTemplateCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryHandleTypeFlagBits {
        static $gtype: GObject.GType<ExternalMemoryHandleTypeFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryHandleTypeFlags {
        static $gtype: GObject.GType<ExternalMemoryHandleTypeFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryFeatureFlagBits {
        static $gtype: GObject.GType<ExternalMemoryFeatureFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryFeatureFlags {
        static $gtype: GObject.GType<ExternalMemoryFeatureFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalFenceHandleTypeFlagBits {
        static $gtype: GObject.GType<ExternalFenceHandleTypeFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalFenceHandleTypeFlags {
        static $gtype: GObject.GType<ExternalFenceHandleTypeFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalFenceFeatureFlagBits {
        static $gtype: GObject.GType<ExternalFenceFeatureFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalFenceFeatureFlags {
        static $gtype: GObject.GType<ExternalFenceFeatureFlags>;
    }

    /**
     * @gir-type Struct
     */
    class FenceImportFlagBits {
        static $gtype: GObject.GType<FenceImportFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class FenceImportFlags {
        static $gtype: GObject.GType<FenceImportFlags>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreImportFlagBits {
        static $gtype: GObject.GType<SemaphoreImportFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreImportFlags {
        static $gtype: GObject.GType<SemaphoreImportFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalSemaphoreHandleTypeFlagBits {
        static $gtype: GObject.GType<ExternalSemaphoreHandleTypeFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalSemaphoreHandleTypeFlags {
        static $gtype: GObject.GType<ExternalSemaphoreHandleTypeFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalSemaphoreFeatureFlagBits {
        static $gtype: GObject.GType<ExternalSemaphoreFeatureFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalSemaphoreFeatureFlags {
        static $gtype: GObject.GType<ExternalSemaphoreFeatureFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSubgroupProperties {
        static $gtype: GObject.GType<PhysicalDeviceSubgroupProperties>;
    }

    /**
     * @gir-type Struct
     */
    class BindBufferMemoryInfo {
        static $gtype: GObject.GType<BindBufferMemoryInfo>;
    }

    /**
     * @gir-type Struct
     */
    class BindImageMemoryInfo {
        static $gtype: GObject.GType<BindImageMemoryInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevice16BitStorageFeatures {
        static $gtype: GObject.GType<PhysicalDevice16BitStorageFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryDedicatedRequirements {
        static $gtype: GObject.GType<MemoryDedicatedRequirements>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryDedicatedAllocateInfo {
        static $gtype: GObject.GType<MemoryDedicatedAllocateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryAllocateFlagsInfo {
        static $gtype: GObject.GType<MemoryAllocateFlagsInfo>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupRenderPassBeginInfo {
        static $gtype: GObject.GType<DeviceGroupRenderPassBeginInfo>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupCommandBufferBeginInfo {
        static $gtype: GObject.GType<DeviceGroupCommandBufferBeginInfo>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupSubmitInfo {
        static $gtype: GObject.GType<DeviceGroupSubmitInfo>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupBindSparseInfo {
        static $gtype: GObject.GType<DeviceGroupBindSparseInfo>;
    }

    /**
     * @gir-type Struct
     */
    class BindBufferMemoryDeviceGroupInfo {
        static $gtype: GObject.GType<BindBufferMemoryDeviceGroupInfo>;
    }

    /**
     * @gir-type Struct
     */
    class BindImageMemoryDeviceGroupInfo {
        static $gtype: GObject.GType<BindImageMemoryDeviceGroupInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceGroupProperties {
        static $gtype: GObject.GType<PhysicalDeviceGroupProperties>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupDeviceCreateInfo {
        static $gtype: GObject.GType<DeviceGroupDeviceCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class BufferMemoryRequirementsInfo2 {
        static $gtype: GObject.GType<BufferMemoryRequirementsInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class ImageMemoryRequirementsInfo2 {
        static $gtype: GObject.GType<ImageMemoryRequirementsInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class ImageSparseMemoryRequirementsInfo2 {
        static $gtype: GObject.GType<ImageSparseMemoryRequirementsInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryRequirements2 {
        static $gtype: GObject.GType<MemoryRequirements2>;
    }

    /**
     * @gir-type Struct
     */
    class SparseImageMemoryRequirements2 {
        static $gtype: GObject.GType<SparseImageMemoryRequirements2>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFeatures2 {
        static $gtype: GObject.GType<PhysicalDeviceFeatures2>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceProperties2 {
        static $gtype: GObject.GType<PhysicalDeviceProperties2>;
    }

    /**
     * @gir-type Struct
     */
    class FormatProperties2 {
        static $gtype: GObject.GType<FormatProperties2>;
    }

    /**
     * @gir-type Struct
     */
    class ImageFormatProperties2 {
        static $gtype: GObject.GType<ImageFormatProperties2>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageFormatInfo2 {
        static $gtype: GObject.GType<PhysicalDeviceImageFormatInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class QueueFamilyProperties2 {
        static $gtype: GObject.GType<QueueFamilyProperties2>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMemoryProperties2 {
        static $gtype: GObject.GType<PhysicalDeviceMemoryProperties2>;
    }

    /**
     * @gir-type Struct
     */
    class SparseImageFormatProperties2 {
        static $gtype: GObject.GType<SparseImageFormatProperties2>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSparseImageFormatInfo2 {
        static $gtype: GObject.GType<PhysicalDeviceSparseImageFormatInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePointClippingProperties {
        static $gtype: GObject.GType<PhysicalDevicePointClippingProperties>;
    }

    /**
     * @gir-type Struct
     */
    class InputAttachmentAspectReference {
        static $gtype: GObject.GType<InputAttachmentAspectReference>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassInputAttachmentAspectCreateInfo {
        static $gtype: GObject.GType<RenderPassInputAttachmentAspectCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewUsageCreateInfo {
        static $gtype: GObject.GType<ImageViewUsageCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineTessellationDomainOriginStateCreateInfo {
        static $gtype: GObject.GType<PipelineTessellationDomainOriginStateCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassMultiviewCreateInfo {
        static $gtype: GObject.GType<RenderPassMultiviewCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMultiviewFeatures {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMultiviewProperties {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVariablePointersFeatures {
        static $gtype: GObject.GType<PhysicalDeviceVariablePointersFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVariablePointerFeatures {
        static $gtype: GObject.GType<PhysicalDeviceVariablePointerFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceProtectedMemoryFeatures {
        static $gtype: GObject.GType<PhysicalDeviceProtectedMemoryFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceProtectedMemoryProperties {
        static $gtype: GObject.GType<PhysicalDeviceProtectedMemoryProperties>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceQueueInfo2 {
        static $gtype: GObject.GType<DeviceQueueInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class ProtectedSubmitInfo {
        static $gtype: GObject.GType<ProtectedSubmitInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrConversionCreateInfo {
        static $gtype: GObject.GType<SamplerYcbcrConversionCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrConversionInfo {
        static $gtype: GObject.GType<SamplerYcbcrConversionInfo>;
    }

    /**
     * @gir-type Struct
     */
    class BindImagePlaneMemoryInfo {
        static $gtype: GObject.GType<BindImagePlaneMemoryInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ImagePlaneMemoryRequirementsInfo {
        static $gtype: GObject.GType<ImagePlaneMemoryRequirementsInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSamplerYcbcrConversionFeatures {
        static $gtype: GObject.GType<PhysicalDeviceSamplerYcbcrConversionFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrConversionImageFormatProperties {
        static $gtype: GObject.GType<SamplerYcbcrConversionImageFormatProperties>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorUpdateTemplateEntry {
        static $gtype: GObject.GType<DescriptorUpdateTemplateEntry>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorUpdateTemplateCreateInfo {
        static $gtype: GObject.GType<DescriptorUpdateTemplateCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryProperties {
        static $gtype: GObject.GType<ExternalMemoryProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExternalImageFormatInfo {
        static $gtype: GObject.GType<PhysicalDeviceExternalImageFormatInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalImageFormatProperties {
        static $gtype: GObject.GType<ExternalImageFormatProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExternalBufferInfo {
        static $gtype: GObject.GType<PhysicalDeviceExternalBufferInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalBufferProperties {
        static $gtype: GObject.GType<ExternalBufferProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceIDProperties {
        static $gtype: GObject.GType<PhysicalDeviceIDProperties>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryImageCreateInfo {
        static $gtype: GObject.GType<ExternalMemoryImageCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryBufferCreateInfo {
        static $gtype: GObject.GType<ExternalMemoryBufferCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ExportMemoryAllocateInfo {
        static $gtype: GObject.GType<ExportMemoryAllocateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExternalFenceInfo {
        static $gtype: GObject.GType<PhysicalDeviceExternalFenceInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalFenceProperties {
        static $gtype: GObject.GType<ExternalFenceProperties>;
    }

    /**
     * @gir-type Struct
     */
    class ExportFenceCreateInfo {
        static $gtype: GObject.GType<ExportFenceCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ExportSemaphoreCreateInfo {
        static $gtype: GObject.GType<ExportSemaphoreCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExternalSemaphoreInfo {
        static $gtype: GObject.GType<PhysicalDeviceExternalSemaphoreInfo>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalSemaphoreProperties {
        static $gtype: GObject.GType<ExternalSemaphoreProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMaintenance3Properties {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance3Properties>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetLayoutSupport {
        static $gtype: GObject.GType<DescriptorSetLayoutSupport>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderDrawParametersFeatures {
        static $gtype: GObject.GType<PhysicalDeviceShaderDrawParametersFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderDrawParameterFeatures {
        static $gtype: GObject.GType<PhysicalDeviceShaderDrawParameterFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class DriverId {
        static $gtype: GObject.GType<DriverId>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderFloatControlsIndependence {
        static $gtype: GObject.GType<ShaderFloatControlsIndependence>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerReductionMode {
        static $gtype: GObject.GType<SamplerReductionMode>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreType {
        static $gtype: GObject.GType<SemaphoreType>;
    }

    /**
     * @gir-type Struct
     */
    class ResolveModeFlagBits {
        static $gtype: GObject.GType<ResolveModeFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ResolveModeFlags {
        static $gtype: GObject.GType<ResolveModeFlags>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorBindingFlagBits {
        static $gtype: GObject.GType<DescriptorBindingFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorBindingFlags {
        static $gtype: GObject.GType<DescriptorBindingFlags>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreWaitFlagBits {
        static $gtype: GObject.GType<SemaphoreWaitFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreWaitFlags {
        static $gtype: GObject.GType<SemaphoreWaitFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVulkan11Features {
        static $gtype: GObject.GType<PhysicalDeviceVulkan11Features>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVulkan11Properties {
        static $gtype: GObject.GType<PhysicalDeviceVulkan11Properties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVulkan12Features {
        static $gtype: GObject.GType<PhysicalDeviceVulkan12Features>;
    }

    /**
     * @gir-type Struct
     */
    class ConformanceVersion {
        static $gtype: GObject.GType<ConformanceVersion>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVulkan12Properties {
        static $gtype: GObject.GType<PhysicalDeviceVulkan12Properties>;
    }

    /**
     * @gir-type Struct
     */
    class ImageFormatListCreateInfo {
        static $gtype: GObject.GType<ImageFormatListCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentDescription2 {
        static $gtype: GObject.GType<AttachmentDescription2>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentReference2 {
        static $gtype: GObject.GType<AttachmentReference2>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassDescription2 {
        static $gtype: GObject.GType<SubpassDescription2>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassDependency2 {
        static $gtype: GObject.GType<SubpassDependency2>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassCreateInfo2 {
        static $gtype: GObject.GType<RenderPassCreateInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassBeginInfo {
        static $gtype: GObject.GType<SubpassBeginInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassEndInfo {
        static $gtype: GObject.GType<SubpassEndInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevice8BitStorageFeatures {
        static $gtype: GObject.GType<PhysicalDevice8BitStorageFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDriverProperties {
        static $gtype: GObject.GType<PhysicalDeviceDriverProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderAtomicInt64Features {
        static $gtype: GObject.GType<PhysicalDeviceShaderAtomicInt64Features>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderFloat16Int8Features {
        static $gtype: GObject.GType<PhysicalDeviceShaderFloat16Int8Features>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFloatControlsProperties {
        static $gtype: GObject.GType<PhysicalDeviceFloatControlsProperties>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetLayoutBindingFlagsCreateInfo {
        static $gtype: GObject.GType<DescriptorSetLayoutBindingFlagsCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDescriptorIndexingFeatures {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorIndexingFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDescriptorIndexingProperties {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorIndexingProperties>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetVariableDescriptorCountAllocateInfo {
        static $gtype: GObject.GType<DescriptorSetVariableDescriptorCountAllocateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetVariableDescriptorCountLayoutSupport {
        static $gtype: GObject.GType<DescriptorSetVariableDescriptorCountLayoutSupport>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassDescriptionDepthStencilResolve {
        static $gtype: GObject.GType<SubpassDescriptionDepthStencilResolve>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDepthStencilResolveProperties {
        static $gtype: GObject.GType<PhysicalDeviceDepthStencilResolveProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceScalarBlockLayoutFeatures {
        static $gtype: GObject.GType<PhysicalDeviceScalarBlockLayoutFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class ImageStencilUsageCreateInfo {
        static $gtype: GObject.GType<ImageStencilUsageCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerReductionModeCreateInfo {
        static $gtype: GObject.GType<SamplerReductionModeCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSamplerFilterMinmaxProperties {
        static $gtype: GObject.GType<PhysicalDeviceSamplerFilterMinmaxProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVulkanMemoryModelFeatures {
        static $gtype: GObject.GType<PhysicalDeviceVulkanMemoryModelFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImagelessFramebufferFeatures {
        static $gtype: GObject.GType<PhysicalDeviceImagelessFramebufferFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class FramebufferAttachmentImageInfo {
        static $gtype: GObject.GType<FramebufferAttachmentImageInfo>;
    }

    /**
     * @gir-type Struct
     */
    class FramebufferAttachmentsCreateInfo {
        static $gtype: GObject.GType<FramebufferAttachmentsCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassAttachmentBeginInfo {
        static $gtype: GObject.GType<RenderPassAttachmentBeginInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceUniformBufferStandardLayoutFeatures {
        static $gtype: GObject.GType<PhysicalDeviceUniformBufferStandardLayoutFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderSubgroupExtendedTypesFeatures {
        static $gtype: GObject.GType<PhysicalDeviceShaderSubgroupExtendedTypesFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSeparateDepthStencilLayoutsFeatures {
        static $gtype: GObject.GType<PhysicalDeviceSeparateDepthStencilLayoutsFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentReferenceStencilLayout {
        static $gtype: GObject.GType<AttachmentReferenceStencilLayout>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentDescriptionStencilLayout {
        static $gtype: GObject.GType<AttachmentDescriptionStencilLayout>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceHostQueryResetFeatures {
        static $gtype: GObject.GType<PhysicalDeviceHostQueryResetFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceTimelineSemaphoreFeatures {
        static $gtype: GObject.GType<PhysicalDeviceTimelineSemaphoreFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceTimelineSemaphoreProperties {
        static $gtype: GObject.GType<PhysicalDeviceTimelineSemaphoreProperties>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreTypeCreateInfo {
        static $gtype: GObject.GType<SemaphoreTypeCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class TimelineSemaphoreSubmitInfo {
        static $gtype: GObject.GType<TimelineSemaphoreSubmitInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreWaitInfo {
        static $gtype: GObject.GType<SemaphoreWaitInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreSignalInfo {
        static $gtype: GObject.GType<SemaphoreSignalInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceBufferDeviceAddressFeatures {
        static $gtype: GObject.GType<PhysicalDeviceBufferDeviceAddressFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class BufferDeviceAddressInfo {
        static $gtype: GObject.GType<BufferDeviceAddressInfo>;
    }

    /**
     * @gir-type Struct
     */
    class BufferOpaqueCaptureAddressCreateInfo {
        static $gtype: GObject.GType<BufferOpaqueCaptureAddressCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryOpaqueCaptureAddressAllocateInfo {
        static $gtype: GObject.GType<MemoryOpaqueCaptureAddressAllocateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceMemoryOpaqueCaptureAddressInfo {
        static $gtype: GObject.GType<DeviceMemoryOpaqueCaptureAddressInfo>;
    }

    /**
     * @gir-type Struct
     */
    class Flags64 {
        static $gtype: GObject.GType<Flags64>;
    }

    /**
     * @gir-type Struct
     */
    class PrivateDataSlot {
        static $gtype: GObject.GType<PrivateDataSlot>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreationFeedbackFlagBits {
        static $gtype: GObject.GType<PipelineCreationFeedbackFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreationFeedbackFlags {
        static $gtype: GObject.GType<PipelineCreationFeedbackFlags>;
    }

    /**
     * @gir-type Struct
     */
    class ToolPurposeFlagBits {
        static $gtype: GObject.GType<ToolPurposeFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class ToolPurposeFlags {
        static $gtype: GObject.GType<ToolPurposeFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PrivateDataSlotCreateFlags {
        static $gtype: GObject.GType<PrivateDataSlotCreateFlags>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineStageFlags2 {
        static $gtype: GObject.GType<PipelineStageFlags2>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineStageFlagBits2 {
        static $gtype: GObject.GType<PipelineStageFlagBits2>;
    }

    /**
     * @gir-type Struct
     */
    class AccessFlags2 {
        static $gtype: GObject.GType<AccessFlags2>;
    }

    /**
     * @gir-type Struct
     */
    class AccessFlagBits2 {
        static $gtype: GObject.GType<AccessFlagBits2>;
    }

    /**
     * @gir-type Struct
     */
    class SubmitFlagBits {
        static $gtype: GObject.GType<SubmitFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class SubmitFlags {
        static $gtype: GObject.GType<SubmitFlags>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingFlagBits {
        static $gtype: GObject.GType<RenderingFlagBits>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingFlags {
        static $gtype: GObject.GType<RenderingFlags>;
    }

    /**
     * @gir-type Struct
     */
    class FormatFeatureFlags2 {
        static $gtype: GObject.GType<FormatFeatureFlags2>;
    }

    /**
     * @gir-type Struct
     */
    class FormatFeatureFlagBits2 {
        static $gtype: GObject.GType<FormatFeatureFlagBits2>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVulkan13Features {
        static $gtype: GObject.GType<PhysicalDeviceVulkan13Features>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVulkan13Properties {
        static $gtype: GObject.GType<PhysicalDeviceVulkan13Properties>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreationFeedback {
        static $gtype: GObject.GType<PipelineCreationFeedback>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreationFeedbackCreateInfo {
        static $gtype: GObject.GType<PipelineCreationFeedbackCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderTerminateInvocationFeatures {
        static $gtype: GObject.GType<PhysicalDeviceShaderTerminateInvocationFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceToolProperties {
        static $gtype: GObject.GType<PhysicalDeviceToolProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderDemoteToHelperInvocationFeatures {
        static $gtype: GObject.GType<PhysicalDeviceShaderDemoteToHelperInvocationFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePrivateDataFeatures {
        static $gtype: GObject.GType<PhysicalDevicePrivateDataFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class DevicePrivateDataCreateInfo {
        static $gtype: GObject.GType<DevicePrivateDataCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PrivateDataSlotCreateInfo {
        static $gtype: GObject.GType<PrivateDataSlotCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePipelineCreationCacheControlFeatures {
        static $gtype: GObject.GType<PhysicalDevicePipelineCreationCacheControlFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryBarrier2 {
        static $gtype: GObject.GType<MemoryBarrier2>;
    }

    /**
     * @gir-type Struct
     */
    class BufferMemoryBarrier2 {
        static $gtype: GObject.GType<BufferMemoryBarrier2>;
    }

    /**
     * @gir-type Struct
     */
    class ImageMemoryBarrier2 {
        static $gtype: GObject.GType<ImageMemoryBarrier2>;
    }

    /**
     * @gir-type Struct
     */
    class DependencyInfo {
        static $gtype: GObject.GType<DependencyInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreSubmitInfo {
        static $gtype: GObject.GType<SemaphoreSubmitInfo>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferSubmitInfo {
        static $gtype: GObject.GType<CommandBufferSubmitInfo>;
    }

    /**
     * @gir-type Struct
     */
    class SubmitInfo2 {
        static $gtype: GObject.GType<SubmitInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSynchronization2Features {
        static $gtype: GObject.GType<PhysicalDeviceSynchronization2Features>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures {
        static $gtype: GObject.GType<PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageRobustnessFeatures {
        static $gtype: GObject.GType<PhysicalDeviceImageRobustnessFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class BufferCopy2 {
        static $gtype: GObject.GType<BufferCopy2>;
    }

    /**
     * @gir-type Struct
     */
    class CopyBufferInfo2 {
        static $gtype: GObject.GType<CopyBufferInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCopy2 {
        static $gtype: GObject.GType<ImageCopy2>;
    }

    /**
     * @gir-type Struct
     */
    class CopyImageInfo2 {
        static $gtype: GObject.GType<CopyImageInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class BufferImageCopy2 {
        static $gtype: GObject.GType<BufferImageCopy2>;
    }

    /**
     * @gir-type Struct
     */
    class CopyBufferToImageInfo2 {
        static $gtype: GObject.GType<CopyBufferToImageInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class CopyImageToBufferInfo2 {
        static $gtype: GObject.GType<CopyImageToBufferInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class ImageBlit2 {
        static $gtype: GObject.GType<ImageBlit2>;
    }

    /**
     * @gir-type Struct
     */
    class BlitImageInfo2 {
        static $gtype: GObject.GType<BlitImageInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class ImageResolve2 {
        static $gtype: GObject.GType<ImageResolve2>;
    }

    /**
     * @gir-type Struct
     */
    class ResolveImageInfo2 {
        static $gtype: GObject.GType<ResolveImageInfo2>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSubgroupSizeControlFeatures {
        static $gtype: GObject.GType<PhysicalDeviceSubgroupSizeControlFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSubgroupSizeControlProperties {
        static $gtype: GObject.GType<PhysicalDeviceSubgroupSizeControlProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineShaderStageRequiredSubgroupSizeCreateInfo {
        static $gtype: GObject.GType<PipelineShaderStageRequiredSubgroupSizeCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceInlineUniformBlockFeatures {
        static $gtype: GObject.GType<PhysicalDeviceInlineUniformBlockFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceInlineUniformBlockProperties {
        static $gtype: GObject.GType<PhysicalDeviceInlineUniformBlockProperties>;
    }

    /**
     * @gir-type Struct
     */
    class WriteDescriptorSetInlineUniformBlock {
        static $gtype: GObject.GType<WriteDescriptorSetInlineUniformBlock>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorPoolInlineUniformBlockCreateInfo {
        static $gtype: GObject.GType<DescriptorPoolInlineUniformBlockCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceTextureCompressionASTCHDRFeatures {
        static $gtype: GObject.GType<PhysicalDeviceTextureCompressionASTCHDRFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingAttachmentInfo {
        static $gtype: GObject.GType<RenderingAttachmentInfo>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingInfo {
        static $gtype: GObject.GType<RenderingInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRenderingCreateInfo {
        static $gtype: GObject.GType<PipelineRenderingCreateInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDynamicRenderingFeatures {
        static $gtype: GObject.GType<PhysicalDeviceDynamicRenderingFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferInheritanceRenderingInfo {
        static $gtype: GObject.GType<CommandBufferInheritanceRenderingInfo>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderIntegerDotProductFeatures {
        static $gtype: GObject.GType<PhysicalDeviceShaderIntegerDotProductFeatures>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderIntegerDotProductProperties {
        static $gtype: GObject.GType<PhysicalDeviceShaderIntegerDotProductProperties>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceTexelBufferAlignmentProperties {
        static $gtype: GObject.GType<PhysicalDeviceTexelBufferAlignmentProperties>;
    }

    /**
     * @gir-type Struct
     */
    class FormatProperties3 {
        static $gtype: GObject.GType<FormatProperties3>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMaintenance4Features {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance4Features>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMaintenance4Properties {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance4Properties>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceBufferMemoryRequirements {
        static $gtype: GObject.GType<DeviceBufferMemoryRequirements>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceImageMemoryRequirements {
        static $gtype: GObject.GType<DeviceImageMemoryRequirements>;
    }

    /**
     * @gir-type Struct
     */
    class SurfaceKHR {
        static $gtype: GObject.GType<SurfaceKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PresentModeKHR {
        static $gtype: GObject.GType<PresentModeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ColorSpaceKHR {
        static $gtype: GObject.GType<ColorSpaceKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SurfaceTransformFlagBitsKHR {
        static $gtype: GObject.GType<SurfaceTransformFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class CompositeAlphaFlagBitsKHR {
        static $gtype: GObject.GType<CompositeAlphaFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class CompositeAlphaFlagsKHR {
        static $gtype: GObject.GType<CompositeAlphaFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SurfaceTransformFlagsKHR {
        static $gtype: GObject.GType<SurfaceTransformFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SurfaceCapabilitiesKHR {
        static $gtype: GObject.GType<SurfaceCapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SurfaceFormatKHR {
        static $gtype: GObject.GType<SurfaceFormatKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SwapchainKHR {
        static $gtype: GObject.GType<SwapchainKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SwapchainCreateFlagBitsKHR {
        static $gtype: GObject.GType<SwapchainCreateFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SwapchainCreateFlagsKHR {
        static $gtype: GObject.GType<SwapchainCreateFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupPresentModeFlagBitsKHR {
        static $gtype: GObject.GType<DeviceGroupPresentModeFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupPresentModeFlagsKHR {
        static $gtype: GObject.GType<DeviceGroupPresentModeFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SwapchainCreateInfoKHR {
        static $gtype: GObject.GType<SwapchainCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PresentInfoKHR {
        static $gtype: GObject.GType<PresentInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImageSwapchainCreateInfoKHR {
        static $gtype: GObject.GType<ImageSwapchainCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BindImageMemorySwapchainInfoKHR {
        static $gtype: GObject.GType<BindImageMemorySwapchainInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AcquireNextImageInfoKHR {
        static $gtype: GObject.GType<AcquireNextImageInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupPresentCapabilitiesKHR {
        static $gtype: GObject.GType<DeviceGroupPresentCapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupPresentInfoKHR {
        static $gtype: GObject.GType<DeviceGroupPresentInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupSwapchainCreateInfoKHR {
        static $gtype: GObject.GType<DeviceGroupSwapchainCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayKHR {
        static $gtype: GObject.GType<DisplayKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayModeKHR {
        static $gtype: GObject.GType<DisplayModeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayModeCreateFlagsKHR {
        static $gtype: GObject.GType<DisplayModeCreateFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayPlaneAlphaFlagBitsKHR {
        static $gtype: GObject.GType<DisplayPlaneAlphaFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayPlaneAlphaFlagsKHR {
        static $gtype: GObject.GType<DisplayPlaneAlphaFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplaySurfaceCreateFlagsKHR {
        static $gtype: GObject.GType<DisplaySurfaceCreateFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayModeParametersKHR {
        static $gtype: GObject.GType<DisplayModeParametersKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayModeCreateInfoKHR {
        static $gtype: GObject.GType<DisplayModeCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayModePropertiesKHR {
        static $gtype: GObject.GType<DisplayModePropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayPlaneCapabilitiesKHR {
        static $gtype: GObject.GType<DisplayPlaneCapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayPlanePropertiesKHR {
        static $gtype: GObject.GType<DisplayPlanePropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayPropertiesKHR {
        static $gtype: GObject.GType<DisplayPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplaySurfaceCreateInfoKHR {
        static $gtype: GObject.GType<DisplaySurfaceCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayPresentInfoKHR {
        static $gtype: GObject.GType<DisplayPresentInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoSessionKHR {
        static $gtype: GObject.GType<VideoSessionKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoSessionParametersKHR {
        static $gtype: GObject.GType<VideoSessionParametersKHR>;
    }

    /**
     * @gir-type Struct
     */
    class QueryResultStatusKHR {
        static $gtype: GObject.GType<QueryResultStatusKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoCodecOperationFlagBitsKHR {
        static $gtype: GObject.GType<VideoCodecOperationFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoCodecOperationFlagsKHR {
        static $gtype: GObject.GType<VideoCodecOperationFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoChromaSubsamplingFlagBitsKHR {
        static $gtype: GObject.GType<VideoChromaSubsamplingFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoChromaSubsamplingFlagsKHR {
        static $gtype: GObject.GType<VideoChromaSubsamplingFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoComponentBitDepthFlagBitsKHR {
        static $gtype: GObject.GType<VideoComponentBitDepthFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoComponentBitDepthFlagsKHR {
        static $gtype: GObject.GType<VideoComponentBitDepthFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoCapabilityFlagBitsKHR {
        static $gtype: GObject.GType<VideoCapabilityFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoCapabilityFlagsKHR {
        static $gtype: GObject.GType<VideoCapabilityFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoSessionCreateFlagBitsKHR {
        static $gtype: GObject.GType<VideoSessionCreateFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoSessionCreateFlagsKHR {
        static $gtype: GObject.GType<VideoSessionCreateFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoSessionParametersCreateFlagsKHR {
        static $gtype: GObject.GType<VideoSessionParametersCreateFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoBeginCodingFlagsKHR {
        static $gtype: GObject.GType<VideoBeginCodingFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEndCodingFlagsKHR {
        static $gtype: GObject.GType<VideoEndCodingFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoCodingControlFlagBitsKHR {
        static $gtype: GObject.GType<VideoCodingControlFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoCodingControlFlagsKHR {
        static $gtype: GObject.GType<VideoCodingControlFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class QueueFamilyQueryResultStatusPropertiesKHR {
        static $gtype: GObject.GType<QueueFamilyQueryResultStatusPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class QueueFamilyVideoPropertiesKHR {
        static $gtype: GObject.GType<QueueFamilyVideoPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoProfileInfoKHR {
        static $gtype: GObject.GType<VideoProfileInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoProfileListInfoKHR {
        static $gtype: GObject.GType<VideoProfileListInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoCapabilitiesKHR {
        static $gtype: GObject.GType<VideoCapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVideoFormatInfoKHR {
        static $gtype: GObject.GType<PhysicalDeviceVideoFormatInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoFormatPropertiesKHR {
        static $gtype: GObject.GType<VideoFormatPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoPictureResourceInfoKHR {
        static $gtype: GObject.GType<VideoPictureResourceInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoReferenceSlotInfoKHR {
        static $gtype: GObject.GType<VideoReferenceSlotInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoSessionMemoryRequirementsKHR {
        static $gtype: GObject.GType<VideoSessionMemoryRequirementsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BindVideoSessionMemoryInfoKHR {
        static $gtype: GObject.GType<BindVideoSessionMemoryInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoSessionCreateInfoKHR {
        static $gtype: GObject.GType<VideoSessionCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoSessionParametersCreateInfoKHR {
        static $gtype: GObject.GType<VideoSessionParametersCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoSessionParametersUpdateInfoKHR {
        static $gtype: GObject.GType<VideoSessionParametersUpdateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoBeginCodingInfoKHR {
        static $gtype: GObject.GType<VideoBeginCodingInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEndCodingInfoKHR {
        static $gtype: GObject.GType<VideoEndCodingInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoCodingControlInfoKHR {
        static $gtype: GObject.GType<VideoCodingControlInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeCapabilityFlagBitsKHR {
        static $gtype: GObject.GType<VideoDecodeCapabilityFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeCapabilityFlagsKHR {
        static $gtype: GObject.GType<VideoDecodeCapabilityFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeUsageFlagBitsKHR {
        static $gtype: GObject.GType<VideoDecodeUsageFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeUsageFlagsKHR {
        static $gtype: GObject.GType<VideoDecodeUsageFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeFlagsKHR {
        static $gtype: GObject.GType<VideoDecodeFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeCapabilitiesKHR {
        static $gtype: GObject.GType<VideoDecodeCapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeUsageInfoKHR {
        static $gtype: GObject.GType<VideoDecodeUsageInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeInfoKHR {
        static $gtype: GObject.GType<VideoDecodeInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264CapabilityFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH264CapabilityFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264CapabilityFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH264CapabilityFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264StdFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH264StdFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264StdFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH264StdFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264RateControlFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH264RateControlFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264RateControlFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH264RateControlFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264CapabilitiesKHR {
        static $gtype: GObject.GType<VideoEncodeH264CapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264QpKHR {
        static $gtype: GObject.GType<VideoEncodeH264QpKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264QualityLevelPropertiesKHR {
        static $gtype: GObject.GType<VideoEncodeH264QualityLevelPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264SessionCreateInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264SessionCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264SessionParametersAddInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264SessionParametersAddInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264SessionParametersCreateInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264SessionParametersCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264SessionParametersGetInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264SessionParametersGetInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264SessionParametersFeedbackInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264SessionParametersFeedbackInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264NaluSliceInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264NaluSliceInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264PictureInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264PictureInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264DpbSlotInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264DpbSlotInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264ProfileInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264ProfileInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264RateControlInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264RateControlInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264FrameSizeKHR {
        static $gtype: GObject.GType<VideoEncodeH264FrameSizeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264RateControlLayerInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264RateControlLayerInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH264GopRemainingFrameInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264GopRemainingFrameInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265CapabilityFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH265CapabilityFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265CapabilityFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH265CapabilityFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265StdFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH265StdFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265StdFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH265StdFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265CtbSizeFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH265CtbSizeFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265CtbSizeFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH265CtbSizeFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265TransformBlockSizeFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH265TransformBlockSizeFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265TransformBlockSizeFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH265TransformBlockSizeFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265RateControlFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH265RateControlFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265RateControlFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH265RateControlFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265CapabilitiesKHR {
        static $gtype: GObject.GType<VideoEncodeH265CapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265SessionCreateInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265SessionCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265QpKHR {
        static $gtype: GObject.GType<VideoEncodeH265QpKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265QualityLevelPropertiesKHR {
        static $gtype: GObject.GType<VideoEncodeH265QualityLevelPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265SessionParametersAddInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265SessionParametersAddInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265SessionParametersCreateInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265SessionParametersCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265SessionParametersGetInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265SessionParametersGetInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265SessionParametersFeedbackInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265SessionParametersFeedbackInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265NaluSliceSegmentInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265NaluSliceSegmentInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265PictureInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265PictureInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265DpbSlotInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265DpbSlotInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265ProfileInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265ProfileInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265RateControlInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265RateControlInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265FrameSizeKHR {
        static $gtype: GObject.GType<VideoEncodeH265FrameSizeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265RateControlLayerInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265RateControlLayerInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeH265GopRemainingFrameInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265GopRemainingFrameInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH264PictureLayoutFlagBitsKHR {
        static $gtype: GObject.GType<VideoDecodeH264PictureLayoutFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH264PictureLayoutFlagsKHR {
        static $gtype: GObject.GType<VideoDecodeH264PictureLayoutFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH264ProfileInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH264ProfileInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH264CapabilitiesKHR {
        static $gtype: GObject.GType<VideoDecodeH264CapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH264SessionParametersAddInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH264SessionParametersAddInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH264SessionParametersCreateInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH264SessionParametersCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH264PictureInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH264PictureInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH264DpbSlotInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH264DpbSlotInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingFlagsKHR {
        static $gtype: GObject.GType<RenderingFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingFlagBitsKHR {
        static $gtype: GObject.GType<RenderingFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingInfoKHR {
        static $gtype: GObject.GType<RenderingInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingAttachmentInfoKHR {
        static $gtype: GObject.GType<RenderingAttachmentInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRenderingCreateInfoKHR {
        static $gtype: GObject.GType<PipelineRenderingCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDynamicRenderingFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceDynamicRenderingFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferInheritanceRenderingInfoKHR {
        static $gtype: GObject.GType<CommandBufferInheritanceRenderingInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingFragmentShadingRateAttachmentInfoKHR {
        static $gtype: GObject.GType<RenderingFragmentShadingRateAttachmentInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingFragmentDensityMapAttachmentInfoEXT {
        static $gtype: GObject.GType<RenderingFragmentDensityMapAttachmentInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentSampleCountInfoAMD {
        static $gtype: GObject.GType<AttachmentSampleCountInfoAMD>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentSampleCountInfoNV {
        static $gtype: GObject.GType<AttachmentSampleCountInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class MultiviewPerViewAttributesInfoNVX {
        static $gtype: GObject.GType<MultiviewPerViewAttributesInfoNVX>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassMultiviewCreateInfoKHR {
        static $gtype: GObject.GType<RenderPassMultiviewCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMultiviewFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMultiviewPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFeatures2KHR {
        static $gtype: GObject.GType<PhysicalDeviceFeatures2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceProperties2KHR {
        static $gtype: GObject.GType<PhysicalDeviceProperties2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class FormatProperties2KHR {
        static $gtype: GObject.GType<FormatProperties2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImageFormatProperties2KHR {
        static $gtype: GObject.GType<ImageFormatProperties2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageFormatInfo2KHR {
        static $gtype: GObject.GType<PhysicalDeviceImageFormatInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class QueueFamilyProperties2KHR {
        static $gtype: GObject.GType<QueueFamilyProperties2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMemoryProperties2KHR {
        static $gtype: GObject.GType<PhysicalDeviceMemoryProperties2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class SparseImageFormatProperties2KHR {
        static $gtype: GObject.GType<SparseImageFormatProperties2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSparseImageFormatInfo2KHR {
        static $gtype: GObject.GType<PhysicalDeviceSparseImageFormatInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class PeerMemoryFeatureFlagsKHR {
        static $gtype: GObject.GType<PeerMemoryFeatureFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PeerMemoryFeatureFlagBitsKHR {
        static $gtype: GObject.GType<PeerMemoryFeatureFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryAllocateFlagsKHR {
        static $gtype: GObject.GType<MemoryAllocateFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryAllocateFlagBitsKHR {
        static $gtype: GObject.GType<MemoryAllocateFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryAllocateFlagsInfoKHR {
        static $gtype: GObject.GType<MemoryAllocateFlagsInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupRenderPassBeginInfoKHR {
        static $gtype: GObject.GType<DeviceGroupRenderPassBeginInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupCommandBufferBeginInfoKHR {
        static $gtype: GObject.GType<DeviceGroupCommandBufferBeginInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupSubmitInfoKHR {
        static $gtype: GObject.GType<DeviceGroupSubmitInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupBindSparseInfoKHR {
        static $gtype: GObject.GType<DeviceGroupBindSparseInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BindBufferMemoryDeviceGroupInfoKHR {
        static $gtype: GObject.GType<BindBufferMemoryDeviceGroupInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BindImageMemoryDeviceGroupInfoKHR {
        static $gtype: GObject.GType<BindImageMemoryDeviceGroupInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class CommandPoolTrimFlagsKHR {
        static $gtype: GObject.GType<CommandPoolTrimFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceGroupPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceGroupPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGroupDeviceCreateInfoKHR {
        static $gtype: GObject.GType<DeviceGroupDeviceCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryHandleTypeFlagsKHR {
        static $gtype: GObject.GType<ExternalMemoryHandleTypeFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryHandleTypeFlagBitsKHR {
        static $gtype: GObject.GType<ExternalMemoryHandleTypeFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryFeatureFlagsKHR {
        static $gtype: GObject.GType<ExternalMemoryFeatureFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryFeatureFlagBitsKHR {
        static $gtype: GObject.GType<ExternalMemoryFeatureFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryPropertiesKHR {
        static $gtype: GObject.GType<ExternalMemoryPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExternalImageFormatInfoKHR {
        static $gtype: GObject.GType<PhysicalDeviceExternalImageFormatInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalImageFormatPropertiesKHR {
        static $gtype: GObject.GType<ExternalImageFormatPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExternalBufferInfoKHR {
        static $gtype: GObject.GType<PhysicalDeviceExternalBufferInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalBufferPropertiesKHR {
        static $gtype: GObject.GType<ExternalBufferPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceIDPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceIDPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryImageCreateInfoKHR {
        static $gtype: GObject.GType<ExternalMemoryImageCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryBufferCreateInfoKHR {
        static $gtype: GObject.GType<ExternalMemoryBufferCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExportMemoryAllocateInfoKHR {
        static $gtype: GObject.GType<ExportMemoryAllocateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImportMemoryFdInfoKHR {
        static $gtype: GObject.GType<ImportMemoryFdInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryFdPropertiesKHR {
        static $gtype: GObject.GType<MemoryFdPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryGetFdInfoKHR {
        static $gtype: GObject.GType<MemoryGetFdInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalSemaphoreHandleTypeFlagsKHR {
        static $gtype: GObject.GType<ExternalSemaphoreHandleTypeFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalSemaphoreHandleTypeFlagBitsKHR {
        static $gtype: GObject.GType<ExternalSemaphoreHandleTypeFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalSemaphoreFeatureFlagsKHR {
        static $gtype: GObject.GType<ExternalSemaphoreFeatureFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalSemaphoreFeatureFlagBitsKHR {
        static $gtype: GObject.GType<ExternalSemaphoreFeatureFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExternalSemaphoreInfoKHR {
        static $gtype: GObject.GType<PhysicalDeviceExternalSemaphoreInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalSemaphorePropertiesKHR {
        static $gtype: GObject.GType<ExternalSemaphorePropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreImportFlagsKHR {
        static $gtype: GObject.GType<SemaphoreImportFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreImportFlagBitsKHR {
        static $gtype: GObject.GType<SemaphoreImportFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExportSemaphoreCreateInfoKHR {
        static $gtype: GObject.GType<ExportSemaphoreCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImportSemaphoreFdInfoKHR {
        static $gtype: GObject.GType<ImportSemaphoreFdInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreGetFdInfoKHR {
        static $gtype: GObject.GType<SemaphoreGetFdInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePushDescriptorPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDevicePushDescriptorPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderFloat16Int8FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderFloat16Int8FeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFloat16Int8FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceFloat16Int8FeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevice16BitStorageFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDevice16BitStorageFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RectLayerKHR {
        static $gtype: GObject.GType<RectLayerKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PresentRegionKHR {
        static $gtype: GObject.GType<PresentRegionKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PresentRegionsKHR {
        static $gtype: GObject.GType<PresentRegionsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorUpdateTemplateKHR {
        static $gtype: GObject.GType<DescriptorUpdateTemplateKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorUpdateTemplateTypeKHR {
        static $gtype: GObject.GType<DescriptorUpdateTemplateTypeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorUpdateTemplateCreateFlagsKHR {
        static $gtype: GObject.GType<DescriptorUpdateTemplateCreateFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorUpdateTemplateEntryKHR {
        static $gtype: GObject.GType<DescriptorUpdateTemplateEntryKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorUpdateTemplateCreateInfoKHR {
        static $gtype: GObject.GType<DescriptorUpdateTemplateCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImagelessFramebufferFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceImagelessFramebufferFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class FramebufferAttachmentsCreateInfoKHR {
        static $gtype: GObject.GType<FramebufferAttachmentsCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class FramebufferAttachmentImageInfoKHR {
        static $gtype: GObject.GType<FramebufferAttachmentImageInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassAttachmentBeginInfoKHR {
        static $gtype: GObject.GType<RenderPassAttachmentBeginInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassCreateInfo2KHR {
        static $gtype: GObject.GType<RenderPassCreateInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentDescription2KHR {
        static $gtype: GObject.GType<AttachmentDescription2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentReference2KHR {
        static $gtype: GObject.GType<AttachmentReference2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassDescription2KHR {
        static $gtype: GObject.GType<SubpassDescription2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassDependency2KHR {
        static $gtype: GObject.GType<SubpassDependency2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassBeginInfoKHR {
        static $gtype: GObject.GType<SubpassBeginInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassEndInfoKHR {
        static $gtype: GObject.GType<SubpassEndInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SharedPresentSurfaceCapabilitiesKHR {
        static $gtype: GObject.GType<SharedPresentSurfaceCapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalFenceHandleTypeFlagsKHR {
        static $gtype: GObject.GType<ExternalFenceHandleTypeFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalFenceHandleTypeFlagBitsKHR {
        static $gtype: GObject.GType<ExternalFenceHandleTypeFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalFenceFeatureFlagsKHR {
        static $gtype: GObject.GType<ExternalFenceFeatureFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalFenceFeatureFlagBitsKHR {
        static $gtype: GObject.GType<ExternalFenceFeatureFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExternalFenceInfoKHR {
        static $gtype: GObject.GType<PhysicalDeviceExternalFenceInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalFencePropertiesKHR {
        static $gtype: GObject.GType<ExternalFencePropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class FenceImportFlagsKHR {
        static $gtype: GObject.GType<FenceImportFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class FenceImportFlagBitsKHR {
        static $gtype: GObject.GType<FenceImportFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ExportFenceCreateInfoKHR {
        static $gtype: GObject.GType<ExportFenceCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImportFenceFdInfoKHR {
        static $gtype: GObject.GType<ImportFenceFdInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class FenceGetFdInfoKHR {
        static $gtype: GObject.GType<FenceGetFdInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceCounterUnitKHR {
        static $gtype: GObject.GType<PerformanceCounterUnitKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceCounterScopeKHR {
        static $gtype: GObject.GType<PerformanceCounterScopeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceCounterStorageKHR {
        static $gtype: GObject.GType<PerformanceCounterStorageKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceCounterDescriptionFlagBitsKHR {
        static $gtype: GObject.GType<PerformanceCounterDescriptionFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceCounterDescriptionFlagsKHR {
        static $gtype: GObject.GType<PerformanceCounterDescriptionFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AcquireProfilingLockFlagBitsKHR {
        static $gtype: GObject.GType<AcquireProfilingLockFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AcquireProfilingLockFlagsKHR {
        static $gtype: GObject.GType<AcquireProfilingLockFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePerformanceQueryFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDevicePerformanceQueryFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePerformanceQueryPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDevicePerformanceQueryPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceCounterKHR {
        static $gtype: GObject.GType<PerformanceCounterKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceCounterDescriptionKHR {
        static $gtype: GObject.GType<PerformanceCounterDescriptionKHR>;
    }

    /**
     * @gir-type Struct
     */
    class QueryPoolPerformanceCreateInfoKHR {
        static $gtype: GObject.GType<QueryPoolPerformanceCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceCounterResultKHR {
        static $gtype: GObject.GType<PerformanceCounterResultKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AcquireProfilingLockInfoKHR {
        static $gtype: GObject.GType<AcquireProfilingLockInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceQuerySubmitInfoKHR {
        static $gtype: GObject.GType<PerformanceQuerySubmitInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PointClippingBehaviorKHR {
        static $gtype: GObject.GType<PointClippingBehaviorKHR>;
    }

    /**
     * @gir-type Struct
     */
    class TessellationDomainOriginKHR {
        static $gtype: GObject.GType<TessellationDomainOriginKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePointClippingPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDevicePointClippingPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassInputAttachmentAspectCreateInfoKHR {
        static $gtype: GObject.GType<RenderPassInputAttachmentAspectCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class InputAttachmentAspectReferenceKHR {
        static $gtype: GObject.GType<InputAttachmentAspectReferenceKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewUsageCreateInfoKHR {
        static $gtype: GObject.GType<ImageViewUsageCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineTessellationDomainOriginStateCreateInfoKHR {
        static $gtype: GObject.GType<PipelineTessellationDomainOriginStateCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSurfaceInfo2KHR {
        static $gtype: GObject.GType<PhysicalDeviceSurfaceInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class SurfaceCapabilities2KHR {
        static $gtype: GObject.GType<SurfaceCapabilities2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class SurfaceFormat2KHR {
        static $gtype: GObject.GType<SurfaceFormat2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVariablePointerFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVariablePointerFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVariablePointersFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVariablePointersFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayProperties2KHR {
        static $gtype: GObject.GType<DisplayProperties2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayPlaneProperties2KHR {
        static $gtype: GObject.GType<DisplayPlaneProperties2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayModeProperties2KHR {
        static $gtype: GObject.GType<DisplayModeProperties2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayPlaneInfo2KHR {
        static $gtype: GObject.GType<DisplayPlaneInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayPlaneCapabilities2KHR {
        static $gtype: GObject.GType<DisplayPlaneCapabilities2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryDedicatedRequirementsKHR {
        static $gtype: GObject.GType<MemoryDedicatedRequirementsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryDedicatedAllocateInfoKHR {
        static $gtype: GObject.GType<MemoryDedicatedAllocateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BufferMemoryRequirementsInfo2KHR {
        static $gtype: GObject.GType<BufferMemoryRequirementsInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImageMemoryRequirementsInfo2KHR {
        static $gtype: GObject.GType<ImageMemoryRequirementsInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImageSparseMemoryRequirementsInfo2KHR {
        static $gtype: GObject.GType<ImageSparseMemoryRequirementsInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryRequirements2KHR {
        static $gtype: GObject.GType<MemoryRequirements2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class SparseImageMemoryRequirements2KHR {
        static $gtype: GObject.GType<SparseImageMemoryRequirements2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImageFormatListCreateInfoKHR {
        static $gtype: GObject.GType<ImageFormatListCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrConversionKHR {
        static $gtype: GObject.GType<SamplerYcbcrConversionKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrModelConversionKHR {
        static $gtype: GObject.GType<SamplerYcbcrModelConversionKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrRangeKHR {
        static $gtype: GObject.GType<SamplerYcbcrRangeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ChromaLocationKHR {
        static $gtype: GObject.GType<ChromaLocationKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrConversionCreateInfoKHR {
        static $gtype: GObject.GType<SamplerYcbcrConversionCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrConversionInfoKHR {
        static $gtype: GObject.GType<SamplerYcbcrConversionInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BindImagePlaneMemoryInfoKHR {
        static $gtype: GObject.GType<BindImagePlaneMemoryInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImagePlaneMemoryRequirementsInfoKHR {
        static $gtype: GObject.GType<ImagePlaneMemoryRequirementsInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSamplerYcbcrConversionFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceSamplerYcbcrConversionFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrConversionImageFormatPropertiesKHR {
        static $gtype: GObject.GType<SamplerYcbcrConversionImageFormatPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BindBufferMemoryInfoKHR {
        static $gtype: GObject.GType<BindBufferMemoryInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BindImageMemoryInfoKHR {
        static $gtype: GObject.GType<BindImageMemoryInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMaintenance3PropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance3PropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetLayoutSupportKHR {
        static $gtype: GObject.GType<DescriptorSetLayoutSupportKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderSubgroupExtendedTypesFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderSubgroupExtendedTypesFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevice8BitStorageFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDevice8BitStorageFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderAtomicInt64FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderAtomicInt64FeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderClockFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderClockFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH265ProfileInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH265ProfileInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH265CapabilitiesKHR {
        static $gtype: GObject.GType<VideoDecodeH265CapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH265SessionParametersAddInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH265SessionParametersAddInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH265SessionParametersCreateInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH265SessionParametersCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH265PictureInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH265PictureInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeH265DpbSlotInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH265DpbSlotInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class QueueGlobalPriorityKHR {
        static $gtype: GObject.GType<QueueGlobalPriorityKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceQueueGlobalPriorityCreateInfoKHR {
        static $gtype: GObject.GType<DeviceQueueGlobalPriorityCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceGlobalPriorityQueryFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceGlobalPriorityQueryFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class QueueFamilyGlobalPriorityPropertiesKHR {
        static $gtype: GObject.GType<QueueFamilyGlobalPriorityPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DriverIdKHR {
        static $gtype: GObject.GType<DriverIdKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ConformanceVersionKHR {
        static $gtype: GObject.GType<ConformanceVersionKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDriverPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceDriverPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderFloatControlsIndependenceKHR {
        static $gtype: GObject.GType<ShaderFloatControlsIndependenceKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFloatControlsPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceFloatControlsPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ResolveModeFlagBitsKHR {
        static $gtype: GObject.GType<ResolveModeFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ResolveModeFlagsKHR {
        static $gtype: GObject.GType<ResolveModeFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassDescriptionDepthStencilResolveKHR {
        static $gtype: GObject.GType<SubpassDescriptionDepthStencilResolveKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDepthStencilResolvePropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceDepthStencilResolvePropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreTypeKHR {
        static $gtype: GObject.GType<SemaphoreTypeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreWaitFlagBitsKHR {
        static $gtype: GObject.GType<SemaphoreWaitFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreWaitFlagsKHR {
        static $gtype: GObject.GType<SemaphoreWaitFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceTimelineSemaphoreFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceTimelineSemaphoreFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceTimelineSemaphorePropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceTimelineSemaphorePropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreTypeCreateInfoKHR {
        static $gtype: GObject.GType<SemaphoreTypeCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class TimelineSemaphoreSubmitInfoKHR {
        static $gtype: GObject.GType<TimelineSemaphoreSubmitInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreWaitInfoKHR {
        static $gtype: GObject.GType<SemaphoreWaitInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreSignalInfoKHR {
        static $gtype: GObject.GType<SemaphoreSignalInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVulkanMemoryModelFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVulkanMemoryModelFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderTerminateInvocationFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderTerminateInvocationFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class FragmentShadingRateCombinerOpKHR {
        static $gtype: GObject.GType<FragmentShadingRateCombinerOpKHR>;
    }

    /**
     * @gir-type Struct
     */
    class FragmentShadingRateAttachmentInfoKHR {
        static $gtype: GObject.GType<FragmentShadingRateAttachmentInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineFragmentShadingRateStateCreateInfoKHR {
        static $gtype: GObject.GType<PipelineFragmentShadingRateStateCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentShadingRateFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShadingRateFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentShadingRatePropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShadingRatePropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentShadingRateKHR {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShadingRateKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDynamicRenderingLocalReadFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceDynamicRenderingLocalReadFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingAttachmentLocationInfoKHR {
        static $gtype: GObject.GType<RenderingAttachmentLocationInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingInputAttachmentIndexInfoKHR {
        static $gtype: GObject.GType<RenderingInputAttachmentIndexInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderQuadControlFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderQuadControlFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SurfaceProtectedCapabilitiesKHR {
        static $gtype: GObject.GType<SurfaceProtectedCapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentReferenceStencilLayoutKHR {
        static $gtype: GObject.GType<AttachmentReferenceStencilLayoutKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentDescriptionStencilLayoutKHR {
        static $gtype: GObject.GType<AttachmentDescriptionStencilLayoutKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePresentWaitFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDevicePresentWaitFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceUniformBufferStandardLayoutFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceUniformBufferStandardLayoutFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceBufferDeviceAddressFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceBufferDeviceAddressFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BufferDeviceAddressInfoKHR {
        static $gtype: GObject.GType<BufferDeviceAddressInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BufferOpaqueCaptureAddressCreateInfoKHR {
        static $gtype: GObject.GType<BufferOpaqueCaptureAddressCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryOpaqueCaptureAddressAllocateInfoKHR {
        static $gtype: GObject.GType<MemoryOpaqueCaptureAddressAllocateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceMemoryOpaqueCaptureAddressInfoKHR {
        static $gtype: GObject.GType<DeviceMemoryOpaqueCaptureAddressInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeferredOperationKHR {
        static $gtype: GObject.GType<DeferredOperationKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineExecutableStatisticFormatKHR {
        static $gtype: GObject.GType<PipelineExecutableStatisticFormatKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePipelineExecutablePropertiesFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDevicePipelineExecutablePropertiesFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineInfoKHR {
        static $gtype: GObject.GType<PipelineInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineExecutablePropertiesKHR {
        static $gtype: GObject.GType<PipelineExecutablePropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineExecutableInfoKHR {
        static $gtype: GObject.GType<PipelineExecutableInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineExecutableStatisticValueKHR {
        static $gtype: GObject.GType<PipelineExecutableStatisticValueKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineExecutableStatisticKHR {
        static $gtype: GObject.GType<PipelineExecutableStatisticKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineExecutableInternalRepresentationKHR {
        static $gtype: GObject.GType<PipelineExecutableInternalRepresentationKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryUnmapFlagBitsKHR {
        static $gtype: GObject.GType<MemoryUnmapFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryUnmapFlagsKHR {
        static $gtype: GObject.GType<MemoryUnmapFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryMapInfoKHR {
        static $gtype: GObject.GType<MemoryMapInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryUnmapInfoKHR {
        static $gtype: GObject.GType<MemoryUnmapInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderIntegerDotProductFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderIntegerDotProductFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderIntegerDotProductPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderIntegerDotProductPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineLibraryCreateInfoKHR {
        static $gtype: GObject.GType<PipelineLibraryCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PresentIdKHR {
        static $gtype: GObject.GType<PresentIdKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePresentIdFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDevicePresentIdFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeTuningModeKHR {
        static $gtype: GObject.GType<VideoEncodeTuningModeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeCapabilityFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeCapabilityFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeCapabilityFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeCapabilityFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeRateControlModeFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeRateControlModeFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeRateControlModeFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeRateControlModeFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeFeedbackFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeFeedbackFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeFeedbackFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeFeedbackFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeUsageFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeUsageFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeUsageFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeUsageFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeContentFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeContentFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeContentFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeContentFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeRateControlFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeRateControlFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeInfoKHR {
        static $gtype: GObject.GType<VideoEncodeInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeCapabilitiesKHR {
        static $gtype: GObject.GType<VideoEncodeCapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class QueryPoolVideoEncodeFeedbackCreateInfoKHR {
        static $gtype: GObject.GType<QueryPoolVideoEncodeFeedbackCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeUsageInfoKHR {
        static $gtype: GObject.GType<VideoEncodeUsageInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeRateControlLayerInfoKHR {
        static $gtype: GObject.GType<VideoEncodeRateControlLayerInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeRateControlInfoKHR {
        static $gtype: GObject.GType<VideoEncodeRateControlInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVideoEncodeQualityLevelInfoKHR {
        static $gtype: GObject.GType<PhysicalDeviceVideoEncodeQualityLevelInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeQualityLevelPropertiesKHR {
        static $gtype: GObject.GType<VideoEncodeQualityLevelPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeQualityLevelInfoKHR {
        static $gtype: GObject.GType<VideoEncodeQualityLevelInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeSessionParametersGetInfoKHR {
        static $gtype: GObject.GType<VideoEncodeSessionParametersGetInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoEncodeSessionParametersFeedbackInfoKHR {
        static $gtype: GObject.GType<VideoEncodeSessionParametersFeedbackInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineStageFlags2KHR {
        static $gtype: GObject.GType<PipelineStageFlags2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineStageFlagBits2KHR {
        static $gtype: GObject.GType<PipelineStageFlagBits2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccessFlags2KHR {
        static $gtype: GObject.GType<AccessFlags2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccessFlagBits2KHR {
        static $gtype: GObject.GType<AccessFlagBits2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class SubmitFlagBitsKHR {
        static $gtype: GObject.GType<SubmitFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SubmitFlagsKHR {
        static $gtype: GObject.GType<SubmitFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryBarrier2KHR {
        static $gtype: GObject.GType<MemoryBarrier2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class BufferMemoryBarrier2KHR {
        static $gtype: GObject.GType<BufferMemoryBarrier2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImageMemoryBarrier2KHR {
        static $gtype: GObject.GType<ImageMemoryBarrier2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class DependencyInfoKHR {
        static $gtype: GObject.GType<DependencyInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SubmitInfo2KHR {
        static $gtype: GObject.GType<SubmitInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class SemaphoreSubmitInfoKHR {
        static $gtype: GObject.GType<SemaphoreSubmitInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferSubmitInfoKHR {
        static $gtype: GObject.GType<CommandBufferSubmitInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSynchronization2FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceSynchronization2FeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class QueueFamilyCheckpointProperties2NV {
        static $gtype: GObject.GType<QueueFamilyCheckpointProperties2NV>;
    }

    /**
     * @gir-type Struct
     */
    class CheckpointData2NV {
        static $gtype: GObject.GType<CheckpointData2NV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentShaderBarycentricFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShaderBarycentricFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentShaderBarycentricPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShaderBarycentricPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceZeroInitializeWorkgroupMemoryFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceZeroInitializeWorkgroupMemoryFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class CopyBufferInfo2KHR {
        static $gtype: GObject.GType<CopyBufferInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class CopyImageInfo2KHR {
        static $gtype: GObject.GType<CopyImageInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class CopyBufferToImageInfo2KHR {
        static $gtype: GObject.GType<CopyBufferToImageInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class CopyImageToBufferInfo2KHR {
        static $gtype: GObject.GType<CopyImageToBufferInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class BlitImageInfo2KHR {
        static $gtype: GObject.GType<BlitImageInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class ResolveImageInfo2KHR {
        static $gtype: GObject.GType<ResolveImageInfo2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class BufferCopy2KHR {
        static $gtype: GObject.GType<BufferCopy2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCopy2KHR {
        static $gtype: GObject.GType<ImageCopy2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImageBlit2KHR {
        static $gtype: GObject.GType<ImageBlit2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class BufferImageCopy2KHR {
        static $gtype: GObject.GType<BufferImageCopy2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImageResolve2KHR {
        static $gtype: GObject.GType<ImageResolve2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class FormatFeatureFlags2KHR {
        static $gtype: GObject.GType<FormatFeatureFlags2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class FormatFeatureFlagBits2KHR {
        static $gtype: GObject.GType<FormatFeatureFlagBits2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class FormatProperties3KHR {
        static $gtype: GObject.GType<FormatProperties3KHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRayTracingMaintenance1FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingMaintenance1FeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class TraceRaysIndirectCommand2KHR {
        static $gtype: GObject.GType<TraceRaysIndirectCommand2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMaintenance4FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance4FeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMaintenance4PropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance4PropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceBufferMemoryRequirementsKHR {
        static $gtype: GObject.GType<DeviceBufferMemoryRequirementsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceImageMemoryRequirementsKHR {
        static $gtype: GObject.GType<DeviceImageMemoryRequirementsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderSubgroupRotateFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderSubgroupRotateFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderMaximalReconvergenceFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderMaximalReconvergenceFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreateFlags2KHR {
        static $gtype: GObject.GType<PipelineCreateFlags2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreateFlagBits2KHR {
        static $gtype: GObject.GType<PipelineCreateFlagBits2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class BufferUsageFlags2KHR {
        static $gtype: GObject.GType<BufferUsageFlags2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class BufferUsageFlagBits2KHR {
        static $gtype: GObject.GType<BufferUsageFlagBits2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMaintenance5FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance5FeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMaintenance5PropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance5PropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RenderingAreaInfoKHR {
        static $gtype: GObject.GType<RenderingAreaInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ImageSubresource2KHR {
        static $gtype: GObject.GType<ImageSubresource2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceImageSubresourceInfoKHR {
        static $gtype: GObject.GType<DeviceImageSubresourceInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SubresourceLayout2KHR {
        static $gtype: GObject.GType<SubresourceLayout2KHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreateFlags2CreateInfoKHR {
        static $gtype: GObject.GType<PipelineCreateFlags2CreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BufferUsageFlags2CreateInfoKHR {
        static $gtype: GObject.GType<BufferUsageFlags2CreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRayTracingPositionFetchFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingPositionFetchFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ComponentTypeKHR {
        static $gtype: GObject.GType<ComponentTypeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ScopeKHR {
        static $gtype: GObject.GType<ScopeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class CooperativeMatrixPropertiesKHR {
        static $gtype: GObject.GType<CooperativeMatrixPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCooperativeMatrixFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceCooperativeMatrixFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCooperativeMatrixPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceCooperativeMatrixPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeAV1ProfileInfoKHR {
        static $gtype: GObject.GType<VideoDecodeAV1ProfileInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeAV1CapabilitiesKHR {
        static $gtype: GObject.GType<VideoDecodeAV1CapabilitiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeAV1SessionParametersCreateInfoKHR {
        static $gtype: GObject.GType<VideoDecodeAV1SessionParametersCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeAV1PictureInfoKHR {
        static $gtype: GObject.GType<VideoDecodeAV1PictureInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoDecodeAV1DpbSlotInfoKHR {
        static $gtype: GObject.GType<VideoDecodeAV1DpbSlotInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVideoMaintenance1FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVideoMaintenance1FeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VideoInlineQueryInfoKHR {
        static $gtype: GObject.GType<VideoInlineQueryInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVertexAttributeDivisorPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVertexAttributeDivisorPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class VertexInputBindingDivisorDescriptionKHR {
        static $gtype: GObject.GType<VertexInputBindingDivisorDescriptionKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineVertexInputDivisorStateCreateInfoKHR {
        static $gtype: GObject.GType<PipelineVertexInputDivisorStateCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVertexAttributeDivisorFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVertexAttributeDivisorFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderFloatControls2FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderFloatControls2FeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceIndexTypeUint8FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceIndexTypeUint8FeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class LineRasterizationModeKHR {
        static $gtype: GObject.GType<LineRasterizationModeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceLineRasterizationFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceLineRasterizationFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceLineRasterizationPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceLineRasterizationPropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRasterizationLineStateCreateInfoKHR {
        static $gtype: GObject.GType<PipelineRasterizationLineStateCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class TimeDomainKHR {
        static $gtype: GObject.GType<TimeDomainKHR>;
    }

    /**
     * @gir-type Struct
     */
    class CalibratedTimestampInfoKHR {
        static $gtype: GObject.GType<CalibratedTimestampInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderExpectAssumeFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderExpectAssumeFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMaintenance6FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance6FeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMaintenance6PropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance6PropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BindMemoryStatusKHR {
        static $gtype: GObject.GType<BindMemoryStatusKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BindDescriptorSetsInfoKHR {
        static $gtype: GObject.GType<BindDescriptorSetsInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PushConstantsInfoKHR {
        static $gtype: GObject.GType<PushConstantsInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PushDescriptorSetInfoKHR {
        static $gtype: GObject.GType<PushDescriptorSetInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PushDescriptorSetWithTemplateInfoKHR {
        static $gtype: GObject.GType<PushDescriptorSetWithTemplateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class SetDescriptorBufferOffsetsInfoEXT {
        static $gtype: GObject.GType<SetDescriptorBufferOffsetsInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class BindDescriptorBufferEmbeddedSamplersInfoEXT {
        static $gtype: GObject.GType<BindDescriptorBufferEmbeddedSamplersInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugReportCallbackEXT {
        static $gtype: GObject.GType<DebugReportCallbackEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugReportObjectTypeEXT {
        static $gtype: GObject.GType<DebugReportObjectTypeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugReportFlagBitsEXT {
        static $gtype: GObject.GType<DebugReportFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugReportFlagsEXT {
        static $gtype: GObject.GType<DebugReportFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugReportCallbackCreateInfoEXT {
        static $gtype: GObject.GType<DebugReportCallbackCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class RasterizationOrderAMD {
        static $gtype: GObject.GType<RasterizationOrderAMD>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRasterizationStateRasterizationOrderAMD {
        static $gtype: GObject.GType<PipelineRasterizationStateRasterizationOrderAMD>;
    }

    /**
     * @gir-type Struct
     */
    class DebugMarkerObjectNameInfoEXT {
        static $gtype: GObject.GType<DebugMarkerObjectNameInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugMarkerObjectTagInfoEXT {
        static $gtype: GObject.GType<DebugMarkerObjectTagInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugMarkerMarkerInfoEXT {
        static $gtype: GObject.GType<DebugMarkerMarkerInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DedicatedAllocationImageCreateInfoNV {
        static $gtype: GObject.GType<DedicatedAllocationImageCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class DedicatedAllocationBufferCreateInfoNV {
        static $gtype: GObject.GType<DedicatedAllocationBufferCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class DedicatedAllocationMemoryAllocateInfoNV {
        static $gtype: GObject.GType<DedicatedAllocationMemoryAllocateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRasterizationStateStreamCreateFlagsEXT {
        static $gtype: GObject.GType<PipelineRasterizationStateStreamCreateFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceTransformFeedbackFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceTransformFeedbackFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceTransformFeedbackPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceTransformFeedbackPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRasterizationStateStreamCreateInfoEXT {
        static $gtype: GObject.GType<PipelineRasterizationStateStreamCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class CuModuleNVX {
        static $gtype: GObject.GType<CuModuleNVX>;
    }

    /**
     * @gir-type Struct
     */
    class CuFunctionNVX {
        static $gtype: GObject.GType<CuFunctionNVX>;
    }

    /**
     * @gir-type Struct
     */
    class CuModuleCreateInfoNVX {
        static $gtype: GObject.GType<CuModuleCreateInfoNVX>;
    }

    /**
     * @gir-type Struct
     */
    class CuFunctionCreateInfoNVX {
        static $gtype: GObject.GType<CuFunctionCreateInfoNVX>;
    }

    /**
     * @gir-type Struct
     */
    class CuLaunchInfoNVX {
        static $gtype: GObject.GType<CuLaunchInfoNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewHandleInfoNVX {
        static $gtype: GObject.GType<ImageViewHandleInfoNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewAddressPropertiesNVX {
        static $gtype: GObject.GType<ImageViewAddressPropertiesNVX>;
    }

    /**
     * @gir-type Struct
     */
    class TextureLODGatherFormatPropertiesAMD {
        static $gtype: GObject.GType<TextureLODGatherFormatPropertiesAMD>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderInfoTypeAMD {
        static $gtype: GObject.GType<ShaderInfoTypeAMD>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderResourceUsageAMD {
        static $gtype: GObject.GType<ShaderResourceUsageAMD>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderStatisticsInfoAMD {
        static $gtype: GObject.GType<ShaderStatisticsInfoAMD>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCornerSampledImageFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceCornerSampledImageFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryHandleTypeFlagBitsNV {
        static $gtype: GObject.GType<ExternalMemoryHandleTypeFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryHandleTypeFlagsNV {
        static $gtype: GObject.GType<ExternalMemoryHandleTypeFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryFeatureFlagBitsNV {
        static $gtype: GObject.GType<ExternalMemoryFeatureFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryFeatureFlagsNV {
        static $gtype: GObject.GType<ExternalMemoryFeatureFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalImageFormatPropertiesNV {
        static $gtype: GObject.GType<ExternalImageFormatPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryImageCreateInfoNV {
        static $gtype: GObject.GType<ExternalMemoryImageCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class ExportMemoryAllocateInfoNV {
        static $gtype: GObject.GType<ExportMemoryAllocateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class ValidationCheckEXT {
        static $gtype: GObject.GType<ValidationCheckEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ValidationFlagsEXT {
        static $gtype: GObject.GType<ValidationFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceTextureCompressionASTCHDRFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceTextureCompressionASTCHDRFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewASTCDecodeModeEXT {
        static $gtype: GObject.GType<ImageViewASTCDecodeModeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceASTCDecodeFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceASTCDecodeFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRobustnessBufferBehaviorEXT {
        static $gtype: GObject.GType<PipelineRobustnessBufferBehaviorEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRobustnessImageBehaviorEXT {
        static $gtype: GObject.GType<PipelineRobustnessImageBehaviorEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePipelineRobustnessFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePipelineRobustnessFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePipelineRobustnessPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDevicePipelineRobustnessPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRobustnessCreateInfoEXT {
        static $gtype: GObject.GType<PipelineRobustnessCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ConditionalRenderingFlagBitsEXT {
        static $gtype: GObject.GType<ConditionalRenderingFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ConditionalRenderingFlagsEXT {
        static $gtype: GObject.GType<ConditionalRenderingFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ConditionalRenderingBeginInfoEXT {
        static $gtype: GObject.GType<ConditionalRenderingBeginInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceConditionalRenderingFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceConditionalRenderingFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferInheritanceConditionalRenderingInfoEXT {
        static $gtype: GObject.GType<CommandBufferInheritanceConditionalRenderingInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ViewportWScalingNV {
        static $gtype: GObject.GType<ViewportWScalingNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineViewportWScalingStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineViewportWScalingStateCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class SurfaceCounterFlagBitsEXT {
        static $gtype: GObject.GType<SurfaceCounterFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SurfaceCounterFlagsEXT {
        static $gtype: GObject.GType<SurfaceCounterFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SurfaceCapabilities2EXT {
        static $gtype: GObject.GType<SurfaceCapabilities2EXT>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayPowerStateEXT {
        static $gtype: GObject.GType<DisplayPowerStateEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceEventTypeEXT {
        static $gtype: GObject.GType<DeviceEventTypeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayEventTypeEXT {
        static $gtype: GObject.GType<DisplayEventTypeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayPowerInfoEXT {
        static $gtype: GObject.GType<DisplayPowerInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceEventInfoEXT {
        static $gtype: GObject.GType<DeviceEventInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayEventInfoEXT {
        static $gtype: GObject.GType<DisplayEventInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SwapchainCounterCreateInfoEXT {
        static $gtype: GObject.GType<SwapchainCounterCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class RefreshCycleDurationGOOGLE {
        static $gtype: GObject.GType<RefreshCycleDurationGOOGLE>;
    }

    /**
     * @gir-type Struct
     */
    class PastPresentationTimingGOOGLE {
        static $gtype: GObject.GType<PastPresentationTimingGOOGLE>;
    }

    /**
     * @gir-type Struct
     */
    class PresentTimeGOOGLE {
        static $gtype: GObject.GType<PresentTimeGOOGLE>;
    }

    /**
     * @gir-type Struct
     */
    class PresentTimesInfoGOOGLE {
        static $gtype: GObject.GType<PresentTimesInfoGOOGLE>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMultiviewPerViewAttributesPropertiesNVX {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewPerViewAttributesPropertiesNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ViewportCoordinateSwizzleNV {
        static $gtype: GObject.GType<ViewportCoordinateSwizzleNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineViewportSwizzleStateCreateFlagsNV {
        static $gtype: GObject.GType<PipelineViewportSwizzleStateCreateFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class ViewportSwizzleNV {
        static $gtype: GObject.GType<ViewportSwizzleNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineViewportSwizzleStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineViewportSwizzleStateCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class DiscardRectangleModeEXT {
        static $gtype: GObject.GType<DiscardRectangleModeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineDiscardRectangleStateCreateFlagsEXT {
        static $gtype: GObject.GType<PipelineDiscardRectangleStateCreateFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDiscardRectanglePropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDiscardRectanglePropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineDiscardRectangleStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineDiscardRectangleStateCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ConservativeRasterizationModeEXT {
        static $gtype: GObject.GType<ConservativeRasterizationModeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRasterizationConservativeStateCreateFlagsEXT {
        static $gtype: GObject.GType<PipelineRasterizationConservativeStateCreateFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceConservativeRasterizationPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceConservativeRasterizationPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRasterizationConservativeStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineRasterizationConservativeStateCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRasterizationDepthClipStateCreateFlagsEXT {
        static $gtype: GObject.GType<PipelineRasterizationDepthClipStateCreateFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDepthClipEnableFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDepthClipEnableFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRasterizationDepthClipStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineRasterizationDepthClipStateCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class XYColorEXT {
        static $gtype: GObject.GType<XYColorEXT>;
    }

    /**
     * @gir-type Struct
     */
    class HdrMetadataEXT {
        static $gtype: GObject.GType<HdrMetadataEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRelaxedLineRasterizationFeaturesIMG {
        static $gtype: GObject.GType<PhysicalDeviceRelaxedLineRasterizationFeaturesIMG>;
    }

    /**
     * @gir-type Struct
     */
    class DebugUtilsMessengerEXT {
        static $gtype: GObject.GType<DebugUtilsMessengerEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugUtilsMessengerCallbackDataFlagsEXT {
        static $gtype: GObject.GType<DebugUtilsMessengerCallbackDataFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugUtilsMessageSeverityFlagBitsEXT {
        static $gtype: GObject.GType<DebugUtilsMessageSeverityFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugUtilsMessageTypeFlagBitsEXT {
        static $gtype: GObject.GType<DebugUtilsMessageTypeFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugUtilsMessageTypeFlagsEXT {
        static $gtype: GObject.GType<DebugUtilsMessageTypeFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugUtilsMessageSeverityFlagsEXT {
        static $gtype: GObject.GType<DebugUtilsMessageSeverityFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugUtilsMessengerCreateFlagsEXT {
        static $gtype: GObject.GType<DebugUtilsMessengerCreateFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugUtilsLabelEXT {
        static $gtype: GObject.GType<DebugUtilsLabelEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugUtilsObjectNameInfoEXT {
        static $gtype: GObject.GType<DebugUtilsObjectNameInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugUtilsMessengerCallbackDataEXT {
        static $gtype: GObject.GType<DebugUtilsMessengerCallbackDataEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugUtilsMessengerCreateInfoEXT {
        static $gtype: GObject.GType<DebugUtilsMessengerCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DebugUtilsObjectTagInfoEXT {
        static $gtype: GObject.GType<DebugUtilsObjectTagInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerReductionModeEXT {
        static $gtype: GObject.GType<SamplerReductionModeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerReductionModeCreateInfoEXT {
        static $gtype: GObject.GType<SamplerReductionModeCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSamplerFilterMinmaxPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceSamplerFilterMinmaxPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceInlineUniformBlockFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceInlineUniformBlockFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceInlineUniformBlockPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceInlineUniformBlockPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class WriteDescriptorSetInlineUniformBlockEXT {
        static $gtype: GObject.GType<WriteDescriptorSetInlineUniformBlockEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorPoolInlineUniformBlockCreateInfoEXT {
        static $gtype: GObject.GType<DescriptorPoolInlineUniformBlockCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SampleLocationEXT {
        static $gtype: GObject.GType<SampleLocationEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SampleLocationsInfoEXT {
        static $gtype: GObject.GType<SampleLocationsInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class AttachmentSampleLocationsEXT {
        static $gtype: GObject.GType<AttachmentSampleLocationsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassSampleLocationsEXT {
        static $gtype: GObject.GType<SubpassSampleLocationsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassSampleLocationsBeginInfoEXT {
        static $gtype: GObject.GType<RenderPassSampleLocationsBeginInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineSampleLocationsStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineSampleLocationsStateCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSampleLocationsPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceSampleLocationsPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MultisamplePropertiesEXT {
        static $gtype: GObject.GType<MultisamplePropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class BlendOverlapEXT {
        static $gtype: GObject.GType<BlendOverlapEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceBlendOperationAdvancedFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceBlendOperationAdvancedFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceBlendOperationAdvancedPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceBlendOperationAdvancedPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineColorBlendAdvancedStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineColorBlendAdvancedStateCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCoverageToColorStateCreateFlagsNV {
        static $gtype: GObject.GType<PipelineCoverageToColorStateCreateFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCoverageToColorStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineCoverageToColorStateCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class CoverageModulationModeNV {
        static $gtype: GObject.GType<CoverageModulationModeNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCoverageModulationStateCreateFlagsNV {
        static $gtype: GObject.GType<PipelineCoverageModulationStateCreateFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCoverageModulationStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineCoverageModulationStateCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderSMBuiltinsPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceShaderSMBuiltinsPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderSMBuiltinsFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceShaderSMBuiltinsFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class DrmFormatModifierPropertiesEXT {
        static $gtype: GObject.GType<DrmFormatModifierPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DrmFormatModifierPropertiesListEXT {
        static $gtype: GObject.GType<DrmFormatModifierPropertiesListEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageDrmFormatModifierInfoEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageDrmFormatModifierInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageDrmFormatModifierListCreateInfoEXT {
        static $gtype: GObject.GType<ImageDrmFormatModifierListCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageDrmFormatModifierExplicitCreateInfoEXT {
        static $gtype: GObject.GType<ImageDrmFormatModifierExplicitCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageDrmFormatModifierPropertiesEXT {
        static $gtype: GObject.GType<ImageDrmFormatModifierPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DrmFormatModifierProperties2EXT {
        static $gtype: GObject.GType<DrmFormatModifierProperties2EXT>;
    }

    /**
     * @gir-type Struct
     */
    class DrmFormatModifierPropertiesList2EXT {
        static $gtype: GObject.GType<DrmFormatModifierPropertiesList2EXT>;
    }

    /**
     * @gir-type Struct
     */
    class ValidationCacheEXT {
        static $gtype: GObject.GType<ValidationCacheEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ValidationCacheHeaderVersionEXT {
        static $gtype: GObject.GType<ValidationCacheHeaderVersionEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ValidationCacheCreateFlagsEXT {
        static $gtype: GObject.GType<ValidationCacheCreateFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ValidationCacheCreateInfoEXT {
        static $gtype: GObject.GType<ValidationCacheCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderModuleValidationCacheCreateInfoEXT {
        static $gtype: GObject.GType<ShaderModuleValidationCacheCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorBindingFlagBitsEXT {
        static $gtype: GObject.GType<DescriptorBindingFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorBindingFlagsEXT {
        static $gtype: GObject.GType<DescriptorBindingFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetLayoutBindingFlagsCreateInfoEXT {
        static $gtype: GObject.GType<DescriptorSetLayoutBindingFlagsCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDescriptorIndexingFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorIndexingFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDescriptorIndexingPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorIndexingPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetVariableDescriptorCountAllocateInfoEXT {
        static $gtype: GObject.GType<DescriptorSetVariableDescriptorCountAllocateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetVariableDescriptorCountLayoutSupportEXT {
        static $gtype: GObject.GType<DescriptorSetVariableDescriptorCountLayoutSupportEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ShadingRatePaletteEntryNV {
        static $gtype: GObject.GType<ShadingRatePaletteEntryNV>;
    }

    /**
     * @gir-type Struct
     */
    class CoarseSampleOrderTypeNV {
        static $gtype: GObject.GType<CoarseSampleOrderTypeNV>;
    }

    /**
     * @gir-type Struct
     */
    class ShadingRatePaletteNV {
        static $gtype: GObject.GType<ShadingRatePaletteNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineViewportShadingRateImageStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineViewportShadingRateImageStateCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShadingRateImageFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceShadingRateImageFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShadingRateImagePropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceShadingRateImagePropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class CoarseSampleLocationNV {
        static $gtype: GObject.GType<CoarseSampleLocationNV>;
    }

    /**
     * @gir-type Struct
     */
    class CoarseSampleOrderCustomNV {
        static $gtype: GObject.GType<CoarseSampleOrderCustomNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineViewportCoarseSampleOrderStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineViewportCoarseSampleOrderStateCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureNV {
        static $gtype: GObject.GType<AccelerationStructureNV>;
    }

    /**
     * @gir-type Struct
     */
    class RayTracingShaderGroupTypeKHR {
        static $gtype: GObject.GType<RayTracingShaderGroupTypeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RayTracingShaderGroupTypeNV {
        static $gtype: GObject.GType<RayTracingShaderGroupTypeNV>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryTypeKHR {
        static $gtype: GObject.GType<GeometryTypeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryTypeNV {
        static $gtype: GObject.GType<GeometryTypeNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureTypeKHR {
        static $gtype: GObject.GType<AccelerationStructureTypeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureTypeNV {
        static $gtype: GObject.GType<AccelerationStructureTypeNV>;
    }

    /**
     * @gir-type Struct
     */
    class CopyAccelerationStructureModeKHR {
        static $gtype: GObject.GType<CopyAccelerationStructureModeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class CopyAccelerationStructureModeNV {
        static $gtype: GObject.GType<CopyAccelerationStructureModeNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureMemoryRequirementsTypeNV {
        static $gtype: GObject.GType<AccelerationStructureMemoryRequirementsTypeNV>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryFlagBitsKHR {
        static $gtype: GObject.GType<GeometryFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryFlagsKHR {
        static $gtype: GObject.GType<GeometryFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryFlagsNV {
        static $gtype: GObject.GType<GeometryFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryFlagBitsNV {
        static $gtype: GObject.GType<GeometryFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryInstanceFlagBitsKHR {
        static $gtype: GObject.GType<GeometryInstanceFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryInstanceFlagsKHR {
        static $gtype: GObject.GType<GeometryInstanceFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryInstanceFlagsNV {
        static $gtype: GObject.GType<GeometryInstanceFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryInstanceFlagBitsNV {
        static $gtype: GObject.GType<GeometryInstanceFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class BuildAccelerationStructureFlagBitsKHR {
        static $gtype: GObject.GType<BuildAccelerationStructureFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BuildAccelerationStructureFlagsKHR {
        static $gtype: GObject.GType<BuildAccelerationStructureFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BuildAccelerationStructureFlagsNV {
        static $gtype: GObject.GType<BuildAccelerationStructureFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class BuildAccelerationStructureFlagBitsNV {
        static $gtype: GObject.GType<BuildAccelerationStructureFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class RayTracingShaderGroupCreateInfoNV {
        static $gtype: GObject.GType<RayTracingShaderGroupCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class RayTracingPipelineCreateInfoNV {
        static $gtype: GObject.GType<RayTracingPipelineCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryTrianglesNV {
        static $gtype: GObject.GType<GeometryTrianglesNV>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryAABBNV {
        static $gtype: GObject.GType<GeometryAABBNV>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryDataNV {
        static $gtype: GObject.GType<GeometryDataNV>;
    }

    /**
     * @gir-type Struct
     */
    class GeometryNV {
        static $gtype: GObject.GType<GeometryNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureInfoNV {
        static $gtype: GObject.GType<AccelerationStructureInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureCreateInfoNV {
        static $gtype: GObject.GType<AccelerationStructureCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class BindAccelerationStructureMemoryInfoNV {
        static $gtype: GObject.GType<BindAccelerationStructureMemoryInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class WriteDescriptorSetAccelerationStructureNV {
        static $gtype: GObject.GType<WriteDescriptorSetAccelerationStructureNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureMemoryRequirementsInfoNV {
        static $gtype: GObject.GType<AccelerationStructureMemoryRequirementsInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRayTracingPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class TransformMatrixKHR {
        static $gtype: GObject.GType<TransformMatrixKHR>;
    }

    /**
     * @gir-type Struct
     */
    class TransformMatrixNV {
        static $gtype: GObject.GType<TransformMatrixNV>;
    }

    /**
     * @gir-type Struct
     */
    class AabbPositionsKHR {
        static $gtype: GObject.GType<AabbPositionsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AabbPositionsNV {
        static $gtype: GObject.GType<AabbPositionsNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureInstanceKHR {
        static $gtype: GObject.GType<AccelerationStructureInstanceKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureInstanceNV {
        static $gtype: GObject.GType<AccelerationStructureInstanceNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRepresentativeFragmentTestFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceRepresentativeFragmentTestFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRepresentativeFragmentTestStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineRepresentativeFragmentTestStateCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageViewImageFormatInfoEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageViewImageFormatInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class FilterCubicImageViewImageFormatPropertiesEXT {
        static $gtype: GObject.GType<FilterCubicImageViewImageFormatPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class QueueGlobalPriorityEXT {
        static $gtype: GObject.GType<QueueGlobalPriorityEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceQueueGlobalPriorityCreateInfoEXT {
        static $gtype: GObject.GType<DeviceQueueGlobalPriorityCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImportMemoryHostPointerInfoEXT {
        static $gtype: GObject.GType<ImportMemoryHostPointerInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryHostPointerPropertiesEXT {
        static $gtype: GObject.GType<MemoryHostPointerPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExternalMemoryHostPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceExternalMemoryHostPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCompilerControlFlagBitsAMD {
        static $gtype: GObject.GType<PipelineCompilerControlFlagBitsAMD>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCompilerControlFlagsAMD {
        static $gtype: GObject.GType<PipelineCompilerControlFlagsAMD>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCompilerControlCreateInfoAMD {
        static $gtype: GObject.GType<PipelineCompilerControlCreateInfoAMD>;
    }

    /**
     * @gir-type Struct
     */
    class TimeDomainEXT {
        static $gtype: GObject.GType<TimeDomainEXT>;
    }

    /**
     * @gir-type Struct
     */
    class CalibratedTimestampInfoEXT {
        static $gtype: GObject.GType<CalibratedTimestampInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderCorePropertiesAMD {
        static $gtype: GObject.GType<PhysicalDeviceShaderCorePropertiesAMD>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryOverallocationBehaviorAMD {
        static $gtype: GObject.GType<MemoryOverallocationBehaviorAMD>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceMemoryOverallocationCreateInfoAMD {
        static $gtype: GObject.GType<DeviceMemoryOverallocationCreateInfoAMD>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVertexAttributeDivisorPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceVertexAttributeDivisorPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class VertexInputBindingDivisorDescriptionEXT {
        static $gtype: GObject.GType<VertexInputBindingDivisorDescriptionEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineVertexInputDivisorStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineVertexInputDivisorStateCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVertexAttributeDivisorFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceVertexAttributeDivisorFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreationFeedbackFlagBitsEXT {
        static $gtype: GObject.GType<PipelineCreationFeedbackFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreationFeedbackFlagsEXT {
        static $gtype: GObject.GType<PipelineCreationFeedbackFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreationFeedbackCreateInfoEXT {
        static $gtype: GObject.GType<PipelineCreationFeedbackCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCreationFeedbackEXT {
        static $gtype: GObject.GType<PipelineCreationFeedbackEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceComputeShaderDerivativesFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceComputeShaderDerivativesFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMeshShaderFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceMeshShaderFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMeshShaderPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceMeshShaderPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class DrawMeshTasksIndirectCommandNV {
        static $gtype: GObject.GType<DrawMeshTasksIndirectCommandNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentShaderBarycentricFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShaderBarycentricFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderImageFootprintFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceShaderImageFootprintFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineViewportExclusiveScissorStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineViewportExclusiveScissorStateCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExclusiveScissorFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceExclusiveScissorFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class QueueFamilyCheckpointPropertiesNV {
        static $gtype: GObject.GType<QueueFamilyCheckpointPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class CheckpointDataNV {
        static $gtype: GObject.GType<CheckpointDataNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderIntegerFunctions2FeaturesINTEL {
        static $gtype: GObject.GType<PhysicalDeviceShaderIntegerFunctions2FeaturesINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceConfigurationINTEL {
        static $gtype: GObject.GType<PerformanceConfigurationINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceConfigurationTypeINTEL {
        static $gtype: GObject.GType<PerformanceConfigurationTypeINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class QueryPoolSamplingModeINTEL {
        static $gtype: GObject.GType<QueryPoolSamplingModeINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceOverrideTypeINTEL {
        static $gtype: GObject.GType<PerformanceOverrideTypeINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceParameterTypeINTEL {
        static $gtype: GObject.GType<PerformanceParameterTypeINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceValueTypeINTEL {
        static $gtype: GObject.GType<PerformanceValueTypeINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceValueDataINTEL {
        static $gtype: GObject.GType<PerformanceValueDataINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceValueINTEL {
        static $gtype: GObject.GType<PerformanceValueINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class InitializePerformanceApiInfoINTEL {
        static $gtype: GObject.GType<InitializePerformanceApiInfoINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class QueryPoolPerformanceQueryCreateInfoINTEL {
        static $gtype: GObject.GType<QueryPoolPerformanceQueryCreateInfoINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class QueryPoolCreateInfoINTEL {
        static $gtype: GObject.GType<QueryPoolCreateInfoINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceMarkerInfoINTEL {
        static $gtype: GObject.GType<PerformanceMarkerInfoINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceStreamMarkerInfoINTEL {
        static $gtype: GObject.GType<PerformanceStreamMarkerInfoINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceOverrideInfoINTEL {
        static $gtype: GObject.GType<PerformanceOverrideInfoINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class PerformanceConfigurationAcquireInfoINTEL {
        static $gtype: GObject.GType<PerformanceConfigurationAcquireInfoINTEL>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePCIBusInfoPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDevicePCIBusInfoPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DisplayNativeHdrSurfaceCapabilitiesAMD {
        static $gtype: GObject.GType<DisplayNativeHdrSurfaceCapabilitiesAMD>;
    }

    /**
     * @gir-type Struct
     */
    class SwapchainDisplayNativeHdrCreateInfoAMD {
        static $gtype: GObject.GType<SwapchainDisplayNativeHdrCreateInfoAMD>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentDensityMapFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFragmentDensityMapFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentDensityMapPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFragmentDensityMapPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassFragmentDensityMapCreateInfoEXT {
        static $gtype: GObject.GType<RenderPassFragmentDensityMapCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceScalarBlockLayoutFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceScalarBlockLayoutFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSubgroupSizeControlFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceSubgroupSizeControlFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSubgroupSizeControlPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceSubgroupSizeControlPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineShaderStageRequiredSubgroupSizeCreateInfoEXT {
        static $gtype: GObject.GType<PipelineShaderStageRequiredSubgroupSizeCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderCorePropertiesFlagBitsAMD {
        static $gtype: GObject.GType<ShaderCorePropertiesFlagBitsAMD>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderCorePropertiesFlagsAMD {
        static $gtype: GObject.GType<ShaderCorePropertiesFlagsAMD>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderCoreProperties2AMD {
        static $gtype: GObject.GType<PhysicalDeviceShaderCoreProperties2AMD>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCoherentMemoryFeaturesAMD {
        static $gtype: GObject.GType<PhysicalDeviceCoherentMemoryFeaturesAMD>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderImageAtomicInt64FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderImageAtomicInt64FeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMemoryBudgetPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMemoryBudgetPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMemoryPriorityFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMemoryPriorityFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryPriorityAllocateInfoEXT {
        static $gtype: GObject.GType<MemoryPriorityAllocateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDedicatedAllocationImageAliasingFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceDedicatedAllocationImageAliasingFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceBufferDeviceAddressFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceBufferDeviceAddressFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceBufferAddressFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceBufferAddressFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class BufferDeviceAddressInfoEXT {
        static $gtype: GObject.GType<BufferDeviceAddressInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class BufferDeviceAddressCreateInfoEXT {
        static $gtype: GObject.GType<BufferDeviceAddressCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ToolPurposeFlagBitsEXT {
        static $gtype: GObject.GType<ToolPurposeFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ToolPurposeFlagsEXT {
        static $gtype: GObject.GType<ToolPurposeFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceToolPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceToolPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageStencilUsageCreateInfoEXT {
        static $gtype: GObject.GType<ImageStencilUsageCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ValidationFeatureEnableEXT {
        static $gtype: GObject.GType<ValidationFeatureEnableEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ValidationFeatureDisableEXT {
        static $gtype: GObject.GType<ValidationFeatureDisableEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ValidationFeaturesEXT {
        static $gtype: GObject.GType<ValidationFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ComponentTypeNV {
        static $gtype: GObject.GType<ComponentTypeNV>;
    }

    /**
     * @gir-type Struct
     */
    class ScopeNV {
        static $gtype: GObject.GType<ScopeNV>;
    }

    /**
     * @gir-type Struct
     */
    class CooperativeMatrixPropertiesNV {
        static $gtype: GObject.GType<CooperativeMatrixPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCooperativeMatrixFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceCooperativeMatrixFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCooperativeMatrixPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceCooperativeMatrixPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class CoverageReductionModeNV {
        static $gtype: GObject.GType<CoverageReductionModeNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCoverageReductionStateCreateFlagsNV {
        static $gtype: GObject.GType<PipelineCoverageReductionStateCreateFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCoverageReductionModeFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceCoverageReductionModeFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineCoverageReductionStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineCoverageReductionStateCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class FramebufferMixedSamplesCombinationNV {
        static $gtype: GObject.GType<FramebufferMixedSamplesCombinationNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentShaderInterlockFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShaderInterlockFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceYcbcrImageArraysFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceYcbcrImageArraysFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ProvokingVertexModeEXT {
        static $gtype: GObject.GType<ProvokingVertexModeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceProvokingVertexFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceProvokingVertexFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceProvokingVertexPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceProvokingVertexPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRasterizationProvokingVertexStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineRasterizationProvokingVertexStateCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class HeadlessSurfaceCreateFlagsEXT {
        static $gtype: GObject.GType<HeadlessSurfaceCreateFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class HeadlessSurfaceCreateInfoEXT {
        static $gtype: GObject.GType<HeadlessSurfaceCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class LineRasterizationModeEXT {
        static $gtype: GObject.GType<LineRasterizationModeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceLineRasterizationFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceLineRasterizationFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceLineRasterizationPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceLineRasterizationPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineRasterizationLineStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineRasterizationLineStateCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderAtomicFloatFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderAtomicFloatFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceHostQueryResetFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceHostQueryResetFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceIndexTypeUint8FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceIndexTypeUint8FeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExtendedDynamicStateFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceExtendedDynamicStateFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class HostImageCopyFlagBitsEXT {
        static $gtype: GObject.GType<HostImageCopyFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class HostImageCopyFlagsEXT {
        static $gtype: GObject.GType<HostImageCopyFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceHostImageCopyFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceHostImageCopyFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceHostImageCopyPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceHostImageCopyPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryToImageCopyEXT {
        static $gtype: GObject.GType<MemoryToImageCopyEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageToMemoryCopyEXT {
        static $gtype: GObject.GType<ImageToMemoryCopyEXT>;
    }

    /**
     * @gir-type Struct
     */
    class CopyMemoryToImageInfoEXT {
        static $gtype: GObject.GType<CopyMemoryToImageInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class CopyImageToMemoryInfoEXT {
        static $gtype: GObject.GType<CopyImageToMemoryInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class CopyImageToImageInfoEXT {
        static $gtype: GObject.GType<CopyImageToImageInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class HostImageLayoutTransitionInfoEXT {
        static $gtype: GObject.GType<HostImageLayoutTransitionInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SubresourceHostMemcpySizeEXT {
        static $gtype: GObject.GType<SubresourceHostMemcpySizeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class HostImageCopyDevicePerformanceQueryEXT {
        static $gtype: GObject.GType<HostImageCopyDevicePerformanceQueryEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SubresourceLayout2EXT {
        static $gtype: GObject.GType<SubresourceLayout2EXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageSubresource2EXT {
        static $gtype: GObject.GType<ImageSubresource2EXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMapMemoryPlacedFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMapMemoryPlacedFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMapMemoryPlacedPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMapMemoryPlacedPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryMapPlacedInfoEXT {
        static $gtype: GObject.GType<MemoryMapPlacedInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderAtomicFloat2FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderAtomicFloat2FeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PresentScalingFlagBitsEXT {
        static $gtype: GObject.GType<PresentScalingFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PresentScalingFlagsEXT {
        static $gtype: GObject.GType<PresentScalingFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PresentGravityFlagBitsEXT {
        static $gtype: GObject.GType<PresentGravityFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PresentGravityFlagsEXT {
        static $gtype: GObject.GType<PresentGravityFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SurfacePresentModeEXT {
        static $gtype: GObject.GType<SurfacePresentModeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SurfacePresentScalingCapabilitiesEXT {
        static $gtype: GObject.GType<SurfacePresentScalingCapabilitiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SurfacePresentModeCompatibilityEXT {
        static $gtype: GObject.GType<SurfacePresentModeCompatibilityEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSwapchainMaintenance1FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceSwapchainMaintenance1FeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SwapchainPresentFenceInfoEXT {
        static $gtype: GObject.GType<SwapchainPresentFenceInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SwapchainPresentModesCreateInfoEXT {
        static $gtype: GObject.GType<SwapchainPresentModesCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SwapchainPresentModeInfoEXT {
        static $gtype: GObject.GType<SwapchainPresentModeInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SwapchainPresentScalingCreateInfoEXT {
        static $gtype: GObject.GType<SwapchainPresentScalingCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ReleaseSwapchainImagesInfoEXT {
        static $gtype: GObject.GType<ReleaseSwapchainImagesInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderDemoteToHelperInvocationFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderDemoteToHelperInvocationFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsLayoutNV {
        static $gtype: GObject.GType<IndirectCommandsLayoutNV>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsTokenTypeNV {
        static $gtype: GObject.GType<IndirectCommandsTokenTypeNV>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectStateFlagBitsNV {
        static $gtype: GObject.GType<IndirectStateFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectStateFlagsNV {
        static $gtype: GObject.GType<IndirectStateFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsLayoutUsageFlagBitsNV {
        static $gtype: GObject.GType<IndirectCommandsLayoutUsageFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsLayoutUsageFlagsNV {
        static $gtype: GObject.GType<IndirectCommandsLayoutUsageFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDeviceGeneratedCommandsPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceDeviceGeneratedCommandsPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDeviceGeneratedCommandsFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceDeviceGeneratedCommandsFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class GraphicsShaderGroupCreateInfoNV {
        static $gtype: GObject.GType<GraphicsShaderGroupCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class GraphicsPipelineShaderGroupsCreateInfoNV {
        static $gtype: GObject.GType<GraphicsPipelineShaderGroupsCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class BindShaderGroupIndirectCommandNV {
        static $gtype: GObject.GType<BindShaderGroupIndirectCommandNV>;
    }

    /**
     * @gir-type Struct
     */
    class BindIndexBufferIndirectCommandNV {
        static $gtype: GObject.GType<BindIndexBufferIndirectCommandNV>;
    }

    /**
     * @gir-type Struct
     */
    class BindVertexBufferIndirectCommandNV {
        static $gtype: GObject.GType<BindVertexBufferIndirectCommandNV>;
    }

    /**
     * @gir-type Struct
     */
    class SetStateFlagsIndirectCommandNV {
        static $gtype: GObject.GType<SetStateFlagsIndirectCommandNV>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsStreamNV {
        static $gtype: GObject.GType<IndirectCommandsStreamNV>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsLayoutTokenNV {
        static $gtype: GObject.GType<IndirectCommandsLayoutTokenNV>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsLayoutCreateInfoNV {
        static $gtype: GObject.GType<IndirectCommandsLayoutCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class GeneratedCommandsInfoNV {
        static $gtype: GObject.GType<GeneratedCommandsInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class GeneratedCommandsMemoryRequirementsInfoNV {
        static $gtype: GObject.GType<GeneratedCommandsMemoryRequirementsInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceInheritedViewportScissorFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceInheritedViewportScissorFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferInheritanceViewportScissorInfoNV {
        static $gtype: GObject.GType<CommandBufferInheritanceViewportScissorInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceTexelBufferAlignmentFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceTexelBufferAlignmentFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceTexelBufferAlignmentPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceTexelBufferAlignmentPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassTransformBeginInfoQCOM {
        static $gtype: GObject.GType<RenderPassTransformBeginInfoQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class CommandBufferInheritanceRenderPassTransformInfoQCOM {
        static $gtype: GObject.GType<CommandBufferInheritanceRenderPassTransformInfoQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class DepthBiasRepresentationEXT {
        static $gtype: GObject.GType<DepthBiasRepresentationEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDepthBiasControlFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDepthBiasControlFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DepthBiasInfoEXT {
        static $gtype: GObject.GType<DepthBiasInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DepthBiasRepresentationInfoEXT {
        static $gtype: GObject.GType<DepthBiasRepresentationInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceMemoryReportEventTypeEXT {
        static $gtype: GObject.GType<DeviceMemoryReportEventTypeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceMemoryReportFlagsEXT {
        static $gtype: GObject.GType<DeviceMemoryReportFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDeviceMemoryReportFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDeviceMemoryReportFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceMemoryReportCallbackDataEXT {
        static $gtype: GObject.GType<DeviceMemoryReportCallbackDataEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceDeviceMemoryReportCreateInfoEXT {
        static $gtype: GObject.GType<DeviceDeviceMemoryReportCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRobustness2FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceRobustness2FeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRobustness2PropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceRobustness2PropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerCustomBorderColorCreateInfoEXT {
        static $gtype: GObject.GType<SamplerCustomBorderColorCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCustomBorderColorPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceCustomBorderColorPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCustomBorderColorFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceCustomBorderColorFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePresentBarrierFeaturesNV {
        static $gtype: GObject.GType<PhysicalDevicePresentBarrierFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class SurfaceCapabilitiesPresentBarrierNV {
        static $gtype: GObject.GType<SurfaceCapabilitiesPresentBarrierNV>;
    }

    /**
     * @gir-type Struct
     */
    class SwapchainPresentBarrierCreateInfoNV {
        static $gtype: GObject.GType<SwapchainPresentBarrierCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PrivateDataSlotEXT {
        static $gtype: GObject.GType<PrivateDataSlotEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PrivateDataSlotCreateFlagsEXT {
        static $gtype: GObject.GType<PrivateDataSlotCreateFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePrivateDataFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePrivateDataFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DevicePrivateDataCreateInfoEXT {
        static $gtype: GObject.GType<DevicePrivateDataCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PrivateDataSlotCreateInfoEXT {
        static $gtype: GObject.GType<PrivateDataSlotCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePipelineCreationCacheControlFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePipelineCreationCacheControlFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceDiagnosticsConfigFlagBitsNV {
        static $gtype: GObject.GType<DeviceDiagnosticsConfigFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceDiagnosticsConfigFlagsNV {
        static $gtype: GObject.GType<DeviceDiagnosticsConfigFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDiagnosticsConfigFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceDiagnosticsConfigFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceDiagnosticsConfigCreateInfoNV {
        static $gtype: GObject.GType<DeviceDiagnosticsConfigCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class CudaModuleNV {
        static $gtype: GObject.GType<CudaModuleNV>;
    }

    /**
     * @gir-type Struct
     */
    class CudaFunctionNV {
        static $gtype: GObject.GType<CudaFunctionNV>;
    }

    /**
     * @gir-type Struct
     */
    class CudaModuleCreateInfoNV {
        static $gtype: GObject.GType<CudaModuleCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class CudaFunctionCreateInfoNV {
        static $gtype: GObject.GType<CudaFunctionCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class CudaLaunchInfoNV {
        static $gtype: GObject.GType<CudaLaunchInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCudaKernelLaunchFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceCudaKernelLaunchFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCudaKernelLaunchPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceCudaKernelLaunchPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class QueryLowLatencySupportNV {
        static $gtype: GObject.GType<QueryLowLatencySupportNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureKHR {
        static $gtype: GObject.GType<AccelerationStructureKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDescriptorBufferPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorBufferPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDescriptorBufferDensityMapPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorBufferDensityMapPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDescriptorBufferFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorBufferFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorAddressInfoEXT {
        static $gtype: GObject.GType<DescriptorAddressInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorBufferBindingInfoEXT {
        static $gtype: GObject.GType<DescriptorBufferBindingInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorBufferBindingPushDescriptorBufferHandleEXT {
        static $gtype: GObject.GType<DescriptorBufferBindingPushDescriptorBufferHandleEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorDataEXT {
        static $gtype: GObject.GType<DescriptorDataEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorGetInfoEXT {
        static $gtype: GObject.GType<DescriptorGetInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class BufferCaptureDescriptorDataInfoEXT {
        static $gtype: GObject.GType<BufferCaptureDescriptorDataInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCaptureDescriptorDataInfoEXT {
        static $gtype: GObject.GType<ImageCaptureDescriptorDataInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewCaptureDescriptorDataInfoEXT {
        static $gtype: GObject.GType<ImageViewCaptureDescriptorDataInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerCaptureDescriptorDataInfoEXT {
        static $gtype: GObject.GType<SamplerCaptureDescriptorDataInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class OpaqueCaptureDescriptorDataCreateInfoEXT {
        static $gtype: GObject.GType<OpaqueCaptureDescriptorDataCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureCaptureDescriptorDataInfoEXT {
        static $gtype: GObject.GType<AccelerationStructureCaptureDescriptorDataInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class GraphicsPipelineLibraryFlagBitsEXT {
        static $gtype: GObject.GType<GraphicsPipelineLibraryFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class GraphicsPipelineLibraryFlagsEXT {
        static $gtype: GObject.GType<GraphicsPipelineLibraryFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceGraphicsPipelineLibraryFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceGraphicsPipelineLibraryFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceGraphicsPipelineLibraryPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceGraphicsPipelineLibraryPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class GraphicsPipelineLibraryCreateInfoEXT {
        static $gtype: GObject.GType<GraphicsPipelineLibraryCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD {
        static $gtype: GObject.GType<PhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD>;
    }

    /**
     * @gir-type Struct
     */
    class FragmentShadingRateTypeNV {
        static $gtype: GObject.GType<FragmentShadingRateTypeNV>;
    }

    /**
     * @gir-type Struct
     */
    class FragmentShadingRateNV {
        static $gtype: GObject.GType<FragmentShadingRateNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentShadingRateEnumsFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShadingRateEnumsFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentShadingRateEnumsPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShadingRateEnumsPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineFragmentShadingRateEnumStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineFragmentShadingRateEnumStateCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureMotionInstanceTypeNV {
        static $gtype: GObject.GType<AccelerationStructureMotionInstanceTypeNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureMotionInfoFlagsNV {
        static $gtype: GObject.GType<AccelerationStructureMotionInfoFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureMotionInstanceFlagsNV {
        static $gtype: GObject.GType<AccelerationStructureMotionInstanceFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceOrHostAddressConstKHR {
        static $gtype: GObject.GType<DeviceOrHostAddressConstKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureGeometryMotionTrianglesDataNV {
        static $gtype: GObject.GType<AccelerationStructureGeometryMotionTrianglesDataNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureMotionInfoNV {
        static $gtype: GObject.GType<AccelerationStructureMotionInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureMatrixMotionInstanceNV {
        static $gtype: GObject.GType<AccelerationStructureMatrixMotionInstanceNV>;
    }

    /**
     * @gir-type Struct
     */
    class SRTDataNV {
        static $gtype: GObject.GType<SRTDataNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureSRTMotionInstanceNV {
        static $gtype: GObject.GType<AccelerationStructureSRTMotionInstanceNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureMotionInstanceDataNV {
        static $gtype: GObject.GType<AccelerationStructureMotionInstanceDataNV>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureMotionInstanceNV {
        static $gtype: GObject.GType<AccelerationStructureMotionInstanceNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRayTracingMotionBlurFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingMotionBlurFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentDensityMap2FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFragmentDensityMap2FeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentDensityMap2PropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFragmentDensityMap2PropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class CopyCommandTransformInfoQCOM {
        static $gtype: GObject.GType<CopyCommandTransformInfoQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageRobustnessFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageRobustnessFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCompressionFlagBitsEXT {
        static $gtype: GObject.GType<ImageCompressionFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCompressionFlagsEXT {
        static $gtype: GObject.GType<ImageCompressionFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCompressionFixedRateFlagBitsEXT {
        static $gtype: GObject.GType<ImageCompressionFixedRateFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCompressionFixedRateFlagsEXT {
        static $gtype: GObject.GType<ImageCompressionFixedRateFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageCompressionControlFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageCompressionControlFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCompressionControlEXT {
        static $gtype: GObject.GType<ImageCompressionControlEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageCompressionPropertiesEXT {
        static $gtype: GObject.GType<ImageCompressionPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevice4444FormatsFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevice4444FormatsFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceFaultAddressTypeEXT {
        static $gtype: GObject.GType<DeviceFaultAddressTypeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceFaultVendorBinaryHeaderVersionEXT {
        static $gtype: GObject.GType<DeviceFaultVendorBinaryHeaderVersionEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFaultFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFaultFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceFaultCountsEXT {
        static $gtype: GObject.GType<DeviceFaultCountsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceFaultAddressInfoEXT {
        static $gtype: GObject.GType<DeviceFaultAddressInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceFaultVendorInfoEXT {
        static $gtype: GObject.GType<DeviceFaultVendorInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceFaultInfoEXT {
        static $gtype: GObject.GType<DeviceFaultInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceFaultVendorBinaryHeaderVersionOneEXT {
        static $gtype: GObject.GType<DeviceFaultVendorBinaryHeaderVersionOneEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM {
        static $gtype: GObject.GType<PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRGBA10X6FormatsFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceRGBA10X6FormatsFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMutableDescriptorTypeFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMutableDescriptorTypeFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMutableDescriptorTypeFeaturesVALVE {
        static $gtype: GObject.GType<PhysicalDeviceMutableDescriptorTypeFeaturesVALVE>;
    }

    /**
     * @gir-type Struct
     */
    class MutableDescriptorTypeListEXT {
        static $gtype: GObject.GType<MutableDescriptorTypeListEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MutableDescriptorTypeListVALVE {
        static $gtype: GObject.GType<MutableDescriptorTypeListVALVE>;
    }

    /**
     * @gir-type Struct
     */
    class MutableDescriptorTypeCreateInfoEXT {
        static $gtype: GObject.GType<MutableDescriptorTypeCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MutableDescriptorTypeCreateInfoVALVE {
        static $gtype: GObject.GType<MutableDescriptorTypeCreateInfoVALVE>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceVertexInputDynamicStateFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceVertexInputDynamicStateFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class VertexInputBindingDescription2EXT {
        static $gtype: GObject.GType<VertexInputBindingDescription2EXT>;
    }

    /**
     * @gir-type Struct
     */
    class VertexInputAttributeDescription2EXT {
        static $gtype: GObject.GType<VertexInputAttributeDescription2EXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDrmPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDrmPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceAddressBindingTypeEXT {
        static $gtype: GObject.GType<DeviceAddressBindingTypeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceAddressBindingFlagBitsEXT {
        static $gtype: GObject.GType<DeviceAddressBindingFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceAddressBindingFlagsEXT {
        static $gtype: GObject.GType<DeviceAddressBindingFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceAddressBindingReportFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceAddressBindingReportFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceAddressBindingCallbackDataEXT {
        static $gtype: GObject.GType<DeviceAddressBindingCallbackDataEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDepthClipControlFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDepthClipControlFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineViewportDepthClipControlCreateInfoEXT {
        static $gtype: GObject.GType<PipelineViewportDepthClipControlCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePrimitiveTopologyListRestartFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePrimitiveTopologyListRestartFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassShadingPipelineCreateInfoHUAWEI {
        static $gtype: GObject.GType<SubpassShadingPipelineCreateInfoHUAWEI>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSubpassShadingFeaturesHUAWEI {
        static $gtype: GObject.GType<PhysicalDeviceSubpassShadingFeaturesHUAWEI>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSubpassShadingPropertiesHUAWEI {
        static $gtype: GObject.GType<PhysicalDeviceSubpassShadingPropertiesHUAWEI>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceInvocationMaskFeaturesHUAWEI {
        static $gtype: GObject.GType<PhysicalDeviceInvocationMaskFeaturesHUAWEI>;
    }

    /**
     * @gir-type Struct
     */
    class RemoteAddressNV {
        static $gtype: GObject.GType<RemoteAddressNV>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryGetRemoteAddressInfoNV {
        static $gtype: GObject.GType<MemoryGetRemoteAddressInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExternalMemoryRDMAFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceExternalMemoryRDMAFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineInfoEXT {
        static $gtype: GObject.GType<PipelineInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelinePropertiesIdentifierEXT {
        static $gtype: GObject.GType<PipelinePropertiesIdentifierEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePipelinePropertiesFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePipelinePropertiesFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class FrameBoundaryFlagBitsEXT {
        static $gtype: GObject.GType<FrameBoundaryFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class FrameBoundaryFlagsEXT {
        static $gtype: GObject.GType<FrameBoundaryFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFrameBoundaryFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFrameBoundaryFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class FrameBoundaryEXT {
        static $gtype: GObject.GType<FrameBoundaryEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMultisampledRenderToSingleSampledFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMultisampledRenderToSingleSampledFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassResolvePerformanceQueryEXT {
        static $gtype: GObject.GType<SubpassResolvePerformanceQueryEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MultisampledRenderToSingleSampledInfoEXT {
        static $gtype: GObject.GType<MultisampledRenderToSingleSampledInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExtendedDynamicState2FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceExtendedDynamicState2FeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceColorWriteEnableFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceColorWriteEnableFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineColorWriteCreateInfoEXT {
        static $gtype: GObject.GType<PipelineColorWriteCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePrimitivesGeneratedQueryFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePrimitivesGeneratedQueryFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceGlobalPriorityQueryFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceGlobalPriorityQueryFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class QueueFamilyGlobalPriorityPropertiesEXT {
        static $gtype: GObject.GType<QueueFamilyGlobalPriorityPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageViewMinLodFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageViewMinLodFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewMinLodCreateInfoEXT {
        static $gtype: GObject.GType<ImageViewMinLodCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMultiDrawFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMultiDrawFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMultiDrawPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMultiDrawPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MultiDrawInfoEXT {
        static $gtype: GObject.GType<MultiDrawInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MultiDrawIndexedInfoEXT {
        static $gtype: GObject.GType<MultiDrawIndexedInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImage2DViewOf3DFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceImage2DViewOf3DFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderTileImageFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderTileImageFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderTileImagePropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderTileImagePropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MicromapEXT {
        static $gtype: GObject.GType<MicromapEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MicromapTypeEXT {
        static $gtype: GObject.GType<MicromapTypeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class BuildMicromapModeEXT {
        static $gtype: GObject.GType<BuildMicromapModeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class CopyMicromapModeEXT {
        static $gtype: GObject.GType<CopyMicromapModeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class OpacityMicromapFormatEXT {
        static $gtype: GObject.GType<OpacityMicromapFormatEXT>;
    }

    /**
     * @gir-type Struct
     */
    class OpacityMicromapSpecialIndexEXT {
        static $gtype: GObject.GType<OpacityMicromapSpecialIndexEXT>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureCompatibilityKHR {
        static $gtype: GObject.GType<AccelerationStructureCompatibilityKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureBuildTypeKHR {
        static $gtype: GObject.GType<AccelerationStructureBuildTypeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class BuildMicromapFlagBitsEXT {
        static $gtype: GObject.GType<BuildMicromapFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class BuildMicromapFlagsEXT {
        static $gtype: GObject.GType<BuildMicromapFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MicromapCreateFlagBitsEXT {
        static $gtype: GObject.GType<MicromapCreateFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MicromapCreateFlagsEXT {
        static $gtype: GObject.GType<MicromapCreateFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MicromapUsageEXT {
        static $gtype: GObject.GType<MicromapUsageEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceOrHostAddressKHR {
        static $gtype: GObject.GType<DeviceOrHostAddressKHR>;
    }

    /**
     * @gir-type Struct
     */
    class MicromapBuildInfoEXT {
        static $gtype: GObject.GType<MicromapBuildInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MicromapCreateInfoEXT {
        static $gtype: GObject.GType<MicromapCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceOpacityMicromapFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceOpacityMicromapFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceOpacityMicromapPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceOpacityMicromapPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MicromapVersionInfoEXT {
        static $gtype: GObject.GType<MicromapVersionInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class CopyMicromapToMemoryInfoEXT {
        static $gtype: GObject.GType<CopyMicromapToMemoryInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class CopyMemoryToMicromapInfoEXT {
        static $gtype: GObject.GType<CopyMemoryToMicromapInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class CopyMicromapInfoEXT {
        static $gtype: GObject.GType<CopyMicromapInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MicromapBuildSizesInfoEXT {
        static $gtype: GObject.GType<MicromapBuildSizesInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureTrianglesOpacityMicromapEXT {
        static $gtype: GObject.GType<AccelerationStructureTrianglesOpacityMicromapEXT>;
    }

    /**
     * @gir-type Struct
     */
    class MicromapTriangleEXT {
        static $gtype: GObject.GType<MicromapTriangleEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceClusterCullingShaderFeaturesHUAWEI {
        static $gtype: GObject.GType<PhysicalDeviceClusterCullingShaderFeaturesHUAWEI>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceClusterCullingShaderPropertiesHUAWEI {
        static $gtype: GObject.GType<PhysicalDeviceClusterCullingShaderPropertiesHUAWEI>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceClusterCullingShaderVrsFeaturesHUAWEI {
        static $gtype: GObject.GType<PhysicalDeviceClusterCullingShaderVrsFeaturesHUAWEI>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceBorderColorSwizzleFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceBorderColorSwizzleFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerBorderColorComponentMappingCreateInfoEXT {
        static $gtype: GObject.GType<SamplerBorderColorComponentMappingCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePageableDeviceLocalMemoryFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePageableDeviceLocalMemoryFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderCorePropertiesARM {
        static $gtype: GObject.GType<PhysicalDeviceShaderCorePropertiesARM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSchedulingControlsFlagsARM {
        static $gtype: GObject.GType<PhysicalDeviceSchedulingControlsFlagsARM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSchedulingControlsFlagBitsARM {
        static $gtype: GObject.GType<PhysicalDeviceSchedulingControlsFlagBitsARM>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceQueueShaderCoreControlCreateInfoARM {
        static $gtype: GObject.GType<DeviceQueueShaderCoreControlCreateInfoARM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSchedulingControlsFeaturesARM {
        static $gtype: GObject.GType<PhysicalDeviceSchedulingControlsFeaturesARM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSchedulingControlsPropertiesARM {
        static $gtype: GObject.GType<PhysicalDeviceSchedulingControlsPropertiesARM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageSlicedViewOf3DFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageSlicedViewOf3DFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewSlicedCreateInfoEXT {
        static $gtype: GObject.GType<ImageViewSlicedCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDescriptorSetHostMappingFeaturesVALVE {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorSetHostMappingFeaturesVALVE>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetBindingReferenceVALVE {
        static $gtype: GObject.GType<DescriptorSetBindingReferenceVALVE>;
    }

    /**
     * @gir-type Struct
     */
    class DescriptorSetLayoutHostMappingInfoVALVE {
        static $gtype: GObject.GType<DescriptorSetLayoutHostMappingInfoVALVE>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDepthClampZeroOneFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDepthClampZeroOneFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceNonSeamlessCubeMapFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceNonSeamlessCubeMapFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRenderPassStripedFeaturesARM {
        static $gtype: GObject.GType<PhysicalDeviceRenderPassStripedFeaturesARM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRenderPassStripedPropertiesARM {
        static $gtype: GObject.GType<PhysicalDeviceRenderPassStripedPropertiesARM>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassStripeInfoARM {
        static $gtype: GObject.GType<RenderPassStripeInfoARM>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassStripeBeginInfoARM {
        static $gtype: GObject.GType<RenderPassStripeBeginInfoARM>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassStripeSubmitInfoARM {
        static $gtype: GObject.GType<RenderPassStripeSubmitInfoARM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentDensityMapOffsetFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceFragmentDensityMapOffsetFeaturesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceFragmentDensityMapOffsetPropertiesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceFragmentDensityMapOffsetPropertiesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassFragmentDensityMapOffsetEndInfoQCOM {
        static $gtype: GObject.GType<SubpassFragmentDensityMapOffsetEndInfoQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class CopyMemoryIndirectCommandNV {
        static $gtype: GObject.GType<CopyMemoryIndirectCommandNV>;
    }

    /**
     * @gir-type Struct
     */
    class CopyMemoryToImageIndirectCommandNV {
        static $gtype: GObject.GType<CopyMemoryToImageIndirectCommandNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCopyMemoryIndirectFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceCopyMemoryIndirectFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCopyMemoryIndirectPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceCopyMemoryIndirectPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryDecompressionMethodFlagBitsNV {
        static $gtype: GObject.GType<MemoryDecompressionMethodFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class MemoryDecompressionMethodFlagsNV {
        static $gtype: GObject.GType<MemoryDecompressionMethodFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class DecompressMemoryRegionNV {
        static $gtype: GObject.GType<DecompressMemoryRegionNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMemoryDecompressionFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceMemoryDecompressionFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMemoryDecompressionPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceMemoryDecompressionPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDeviceGeneratedCommandsComputeFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceDeviceGeneratedCommandsComputeFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class ComputePipelineIndirectBufferInfoNV {
        static $gtype: GObject.GType<ComputePipelineIndirectBufferInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineIndirectDeviceAddressInfoNV {
        static $gtype: GObject.GType<PipelineIndirectDeviceAddressInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class BindPipelineIndirectCommandNV {
        static $gtype: GObject.GType<BindPipelineIndirectCommandNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceLinearColorAttachmentFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceLinearColorAttachmentFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageCompressionControlSwapchainFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageCompressionControlSwapchainFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ImageViewSampleWeightCreateInfoQCOM {
        static $gtype: GObject.GType<ImageViewSampleWeightCreateInfoQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageProcessingFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceImageProcessingFeaturesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageProcessingPropertiesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceImageProcessingPropertiesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceNestedCommandBufferFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceNestedCommandBufferFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceNestedCommandBufferPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceNestedCommandBufferPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ExternalMemoryAcquireUnmodifiedEXT {
        static $gtype: GObject.GType<ExternalMemoryAcquireUnmodifiedEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExtendedDynamicState3FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceExtendedDynamicState3FeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExtendedDynamicState3PropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceExtendedDynamicState3PropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ColorBlendEquationEXT {
        static $gtype: GObject.GType<ColorBlendEquationEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ColorBlendAdvancedEXT {
        static $gtype: GObject.GType<ColorBlendAdvancedEXT>;
    }

    /**
     * @gir-type Struct
     */
    class SubpassMergeStatusEXT {
        static $gtype: GObject.GType<SubpassMergeStatusEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceSubpassMergeFeedbackFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceSubpassMergeFeedbackFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassCreationControlEXT {
        static $gtype: GObject.GType<RenderPassCreationControlEXT>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassCreationFeedbackInfoEXT {
        static $gtype: GObject.GType<RenderPassCreationFeedbackInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassCreationFeedbackCreateInfoEXT {
        static $gtype: GObject.GType<RenderPassCreationFeedbackCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassSubpassFeedbackInfoEXT {
        static $gtype: GObject.GType<RenderPassSubpassFeedbackInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class RenderPassSubpassFeedbackCreateInfoEXT {
        static $gtype: GObject.GType<RenderPassSubpassFeedbackCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DirectDriverLoadingModeLUNARG {
        static $gtype: GObject.GType<DirectDriverLoadingModeLUNARG>;
    }

    /**
     * @gir-type Struct
     */
    class DirectDriverLoadingFlagsLUNARG {
        static $gtype: GObject.GType<DirectDriverLoadingFlagsLUNARG>;
    }

    /**
     * @gir-type Struct
     */
    class DirectDriverLoadingInfoLUNARG {
        static $gtype: GObject.GType<DirectDriverLoadingInfoLUNARG>;
    }

    /**
     * @gir-type Struct
     */
    class DirectDriverLoadingListLUNARG {
        static $gtype: GObject.GType<DirectDriverLoadingListLUNARG>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderModuleIdentifierFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderModuleIdentifierFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderModuleIdentifierPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderModuleIdentifierPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PipelineShaderStageModuleIdentifierCreateInfoEXT {
        static $gtype: GObject.GType<PipelineShaderStageModuleIdentifierCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderModuleIdentifierEXT {
        static $gtype: GObject.GType<ShaderModuleIdentifierEXT>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowSessionNV {
        static $gtype: GObject.GType<OpticalFlowSessionNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowPerformanceLevelNV {
        static $gtype: GObject.GType<OpticalFlowPerformanceLevelNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowSessionBindingPointNV {
        static $gtype: GObject.GType<OpticalFlowSessionBindingPointNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowGridSizeFlagBitsNV {
        static $gtype: GObject.GType<OpticalFlowGridSizeFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowGridSizeFlagsNV {
        static $gtype: GObject.GType<OpticalFlowGridSizeFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowUsageFlagBitsNV {
        static $gtype: GObject.GType<OpticalFlowUsageFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowUsageFlagsNV {
        static $gtype: GObject.GType<OpticalFlowUsageFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowSessionCreateFlagBitsNV {
        static $gtype: GObject.GType<OpticalFlowSessionCreateFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowSessionCreateFlagsNV {
        static $gtype: GObject.GType<OpticalFlowSessionCreateFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowExecuteFlagBitsNV {
        static $gtype: GObject.GType<OpticalFlowExecuteFlagBitsNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowExecuteFlagsNV {
        static $gtype: GObject.GType<OpticalFlowExecuteFlagsNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceOpticalFlowFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceOpticalFlowFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceOpticalFlowPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceOpticalFlowPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowImageFormatInfoNV {
        static $gtype: GObject.GType<OpticalFlowImageFormatInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowImageFormatPropertiesNV {
        static $gtype: GObject.GType<OpticalFlowImageFormatPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowSessionCreateInfoNV {
        static $gtype: GObject.GType<OpticalFlowSessionCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowSessionCreatePrivateDataInfoNV {
        static $gtype: GObject.GType<OpticalFlowSessionCreatePrivateDataInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class OpticalFlowExecuteInfoNV {
        static $gtype: GObject.GType<OpticalFlowExecuteInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceLegacyDitheringFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceLegacyDitheringFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePipelineProtectedAccessFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePipelineProtectedAccessFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderEXT {
        static $gtype: GObject.GType<ShaderEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderCodeTypeEXT {
        static $gtype: GObject.GType<ShaderCodeTypeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderCreateFlagBitsEXT {
        static $gtype: GObject.GType<ShaderCreateFlagBitsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderCreateFlagsEXT {
        static $gtype: GObject.GType<ShaderCreateFlagsEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderObjectFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderObjectFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderObjectPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderObjectPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderCreateInfoEXT {
        static $gtype: GObject.GType<ShaderCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderRequiredSubgroupSizeCreateInfoEXT {
        static $gtype: GObject.GType<ShaderRequiredSubgroupSizeCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceTilePropertiesFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceTilePropertiesFeaturesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class TilePropertiesQCOM {
        static $gtype: GObject.GType<TilePropertiesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceAmigoProfilingFeaturesSEC {
        static $gtype: GObject.GType<PhysicalDeviceAmigoProfilingFeaturesSEC>;
    }

    /**
     * @gir-type Struct
     */
    class AmigoProfilingSubmitInfoSEC {
        static $gtype: GObject.GType<AmigoProfilingSubmitInfoSEC>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class RayTracingInvocationReorderModeNV {
        static $gtype: GObject.GType<RayTracingInvocationReorderModeNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRayTracingInvocationReorderPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingInvocationReorderPropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRayTracingInvocationReorderFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingInvocationReorderFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExtendedSparseAddressSpaceFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceExtendedSparseAddressSpaceFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceExtendedSparseAddressSpacePropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceExtendedSparseAddressSpacePropertiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceLegacyVertexAttributesFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceLegacyVertexAttributesFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceLegacyVertexAttributesPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceLegacyVertexAttributesPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class LayerSettingTypeEXT {
        static $gtype: GObject.GType<LayerSettingTypeEXT>;
    }

    /**
     * @gir-type Struct
     */
    class LayerSettingEXT {
        static $gtype: GObject.GType<LayerSettingEXT>;
    }

    /**
     * @gir-type Struct
     */
    class LayerSettingsCreateInfoEXT {
        static $gtype: GObject.GType<LayerSettingsCreateInfoEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderCoreBuiltinsFeaturesARM {
        static $gtype: GObject.GType<PhysicalDeviceShaderCoreBuiltinsFeaturesARM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderCoreBuiltinsPropertiesARM {
        static $gtype: GObject.GType<PhysicalDeviceShaderCoreBuiltinsPropertiesARM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePipelineLibraryGroupHandlesFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePipelineLibraryGroupHandlesFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDynamicRenderingUnusedAttachmentsFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDynamicRenderingUnusedAttachmentsFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class LatencyMarkerNV {
        static $gtype: GObject.GType<LatencyMarkerNV>;
    }

    /**
     * @gir-type Struct
     */
    class OutOfBandQueueTypeNV {
        static $gtype: GObject.GType<OutOfBandQueueTypeNV>;
    }

    /**
     * @gir-type Struct
     */
    class LatencySleepModeInfoNV {
        static $gtype: GObject.GType<LatencySleepModeInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class LatencySleepInfoNV {
        static $gtype: GObject.GType<LatencySleepInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class SetLatencyMarkerInfoNV {
        static $gtype: GObject.GType<SetLatencyMarkerInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class LatencyTimingsFrameReportNV {
        static $gtype: GObject.GType<LatencyTimingsFrameReportNV>;
    }

    /**
     * @gir-type Struct
     */
    class GetLatencyMarkerInfoNV {
        static $gtype: GObject.GType<GetLatencyMarkerInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class LatencySubmissionPresentIdNV {
        static $gtype: GObject.GType<LatencySubmissionPresentIdNV>;
    }

    /**
     * @gir-type Struct
     */
    class SwapchainLatencyCreateInfoNV {
        static $gtype: GObject.GType<SwapchainLatencyCreateInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class OutOfBandQueueTypeInfoNV {
        static $gtype: GObject.GType<OutOfBandQueueTypeInfoNV>;
    }

    /**
     * @gir-type Struct
     */
    class LatencySurfaceCapabilitiesNV {
        static $gtype: GObject.GType<LatencySurfaceCapabilitiesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMultiviewPerViewRenderAreasFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewPerViewRenderAreasFeaturesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class MultiviewPerViewRenderAreasRenderPassBeginInfoQCOM {
        static $gtype: GObject.GType<MultiviewPerViewRenderAreasRenderPassBeginInfoQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDevicePerStageDescriptorSetFeaturesNV {
        static $gtype: GObject.GType<PhysicalDevicePerStageDescriptorSetFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class BlockMatchWindowCompareModeQCOM {
        static $gtype: GObject.GType<BlockMatchWindowCompareModeQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageProcessing2FeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceImageProcessing2FeaturesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageProcessing2PropertiesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceImageProcessing2PropertiesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerBlockMatchWindowCreateInfoQCOM {
        static $gtype: GObject.GType<SamplerBlockMatchWindowCreateInfoQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class CubicFilterWeightsQCOM {
        static $gtype: GObject.GType<CubicFilterWeightsQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCubicWeightsFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceCubicWeightsFeaturesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerCubicWeightsCreateInfoQCOM {
        static $gtype: GObject.GType<SamplerCubicWeightsCreateInfoQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class BlitImageCubicWeightsInfoQCOM {
        static $gtype: GObject.GType<BlitImageCubicWeightsInfoQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceYcbcrDegammaFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceYcbcrDegammaFeaturesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class SamplerYcbcrConversionYcbcrDegammaCreateInfoQCOM {
        static $gtype: GObject.GType<SamplerYcbcrConversionYcbcrDegammaCreateInfoQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceCubicClampFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceCubicClampFeaturesQCOM>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceAttachmentFeedbackLoopDynamicStateFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceAttachmentFeedbackLoopDynamicStateFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class LayeredDriverUnderlyingApiMSFT {
        static $gtype: GObject.GType<LayeredDriverUnderlyingApiMSFT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceLayeredDriverPropertiesMSFT {
        static $gtype: GObject.GType<PhysicalDeviceLayeredDriverPropertiesMSFT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceDescriptorPoolOverallocationFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorPoolOverallocationFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRawAccessChainsFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceRawAccessChainsFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceShaderAtomicFloat16VectorFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceShaderAtomicFloat16VectorFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRayTracingValidationFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingValidationFeaturesNV>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageAlignmentControlFeaturesMESA {
        static $gtype: GObject.GType<PhysicalDeviceImageAlignmentControlFeaturesMESA>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceImageAlignmentControlPropertiesMESA {
        static $gtype: GObject.GType<PhysicalDeviceImageAlignmentControlPropertiesMESA>;
    }

    /**
     * @gir-type Struct
     */
    class ImageAlignmentControlCreateInfoMESA {
        static $gtype: GObject.GType<ImageAlignmentControlCreateInfoMESA>;
    }

    /**
     * @gir-type Struct
     */
    class BuildAccelerationStructureModeKHR {
        static $gtype: GObject.GType<BuildAccelerationStructureModeKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureCreateFlagBitsKHR {
        static $gtype: GObject.GType<AccelerationStructureCreateFlagBitsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureCreateFlagsKHR {
        static $gtype: GObject.GType<AccelerationStructureCreateFlagsKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureBuildRangeInfoKHR {
        static $gtype: GObject.GType<AccelerationStructureBuildRangeInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureGeometryTrianglesDataKHR {
        static $gtype: GObject.GType<AccelerationStructureGeometryTrianglesDataKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureGeometryAabbsDataKHR {
        static $gtype: GObject.GType<AccelerationStructureGeometryAabbsDataKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureGeometryInstancesDataKHR {
        static $gtype: GObject.GType<AccelerationStructureGeometryInstancesDataKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureGeometryDataKHR {
        static $gtype: GObject.GType<AccelerationStructureGeometryDataKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureGeometryKHR {
        static $gtype: GObject.GType<AccelerationStructureGeometryKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureBuildGeometryInfoKHR {
        static $gtype: GObject.GType<AccelerationStructureBuildGeometryInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureCreateInfoKHR {
        static $gtype: GObject.GType<AccelerationStructureCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class WriteDescriptorSetAccelerationStructureKHR {
        static $gtype: GObject.GType<WriteDescriptorSetAccelerationStructureKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceAccelerationStructureFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceAccelerationStructureFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceAccelerationStructurePropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceAccelerationStructurePropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureDeviceAddressInfoKHR {
        static $gtype: GObject.GType<AccelerationStructureDeviceAddressInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureVersionInfoKHR {
        static $gtype: GObject.GType<AccelerationStructureVersionInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class CopyAccelerationStructureToMemoryInfoKHR {
        static $gtype: GObject.GType<CopyAccelerationStructureToMemoryInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class CopyMemoryToAccelerationStructureInfoKHR {
        static $gtype: GObject.GType<CopyMemoryToAccelerationStructureInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class CopyAccelerationStructureInfoKHR {
        static $gtype: GObject.GType<CopyAccelerationStructureInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class AccelerationStructureBuildSizesInfoKHR {
        static $gtype: GObject.GType<AccelerationStructureBuildSizesInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class ShaderGroupShaderKHR {
        static $gtype: GObject.GType<ShaderGroupShaderKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RayTracingShaderGroupCreateInfoKHR {
        static $gtype: GObject.GType<RayTracingShaderGroupCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RayTracingPipelineInterfaceCreateInfoKHR {
        static $gtype: GObject.GType<RayTracingPipelineInterfaceCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class RayTracingPipelineCreateInfoKHR {
        static $gtype: GObject.GType<RayTracingPipelineCreateInfoKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRayTracingPipelineFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingPipelineFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRayTracingPipelinePropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingPipelinePropertiesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class StridedDeviceAddressRegionKHR {
        static $gtype: GObject.GType<StridedDeviceAddressRegionKHR>;
    }

    /**
     * @gir-type Struct
     */
    class TraceRaysIndirectCommandKHR {
        static $gtype: GObject.GType<TraceRaysIndirectCommandKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceRayQueryFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceRayQueryFeaturesKHR>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMeshShaderFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMeshShaderFeaturesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class PhysicalDeviceMeshShaderPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMeshShaderPropertiesEXT>;
    }

    /**
     * @gir-type Struct
     */
    class DrawMeshTasksIndirectCommandEXT {
        static $gtype: GObject.GType<DrawMeshTasksIndirectCommandEXT>;
    }

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

export default Vulkan;

// END
