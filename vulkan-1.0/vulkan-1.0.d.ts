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
    class Flags {
        static $gtype: GObject.GType<Flags>;
    }

    /**
     * @gir-type Struct
     */
    class Bool32 {
        static $gtype: GObject.GType<Bool32>;
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
    class SampleMask {
        static $gtype: GObject.GType<SampleMask>;
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
    class RenderPass {
        static $gtype: GObject.GType<RenderPass>;
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
    class DescriptorPool {
        static $gtype: GObject.GType<DescriptorPool>;
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
    class PipelineCacheHeaderVersion {
        static $gtype: GObject.GType<PipelineCacheHeaderVersion>;
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
    class ImageType {
        static $gtype: GObject.GType<ImageType>;
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
    class ImageLayout {
        static $gtype: GObject.GType<ImageLayout>;
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
    class ComponentSwizzle {
        static $gtype: GObject.GType<ComponentSwizzle>;
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
    class FrontFace {
        static $gtype: GObject.GType<FrontFace>;
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
    class DynamicState {
        static $gtype: GObject.GType<DynamicState>;
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
    class SamplerMipmapMode {
        static $gtype: GObject.GType<SamplerMipmapMode>;
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
    class BorderColor {
        static $gtype: GObject.GType<BorderColor>;
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
    class InstanceCreateFlags {
        static $gtype: GObject.GType<InstanceCreateFlags>;
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
    class MemoryMapFlags {
        static $gtype: GObject.GType<MemoryMapFlags>;
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
    class EventCreateFlags {
        static $gtype: GObject.GType<EventCreateFlags>;
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
    class PipelineCacheCreateFlags {
        static $gtype: GObject.GType<PipelineCacheCreateFlags>;
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
    class PipelineMultisampleStateCreateFlags {
        static $gtype: GObject.GType<PipelineMultisampleStateCreateFlags>;
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
    class PipelineColorBlendStateCreateFlags {
        static $gtype: GObject.GType<PipelineColorBlendStateCreateFlags>;
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
    class PipelineDynamicStateCreateFlags {
        static $gtype: GObject.GType<PipelineDynamicStateCreateFlags>;
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
    class FramebufferCreateFlags {
        static $gtype: GObject.GType<FramebufferCreateFlags>;
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
    class ApplicationInfo {
        static $gtype: GObject.GType<ApplicationInfo>;
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
    class AllocationCallbacks {
        static $gtype: GObject.GType<AllocationCallbacks>;
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
    class FormatProperties {
        static $gtype: GObject.GType<FormatProperties>;
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
    class ImageFormatProperties {
        static $gtype: GObject.GType<ImageFormatProperties>;
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
    class MemoryType {
        static $gtype: GObject.GType<MemoryType>;
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
    class PhysicalDeviceMemoryProperties {
        static $gtype: GObject.GType<PhysicalDeviceMemoryProperties>;
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
    class MemoryAllocateInfo {
        static $gtype: GObject.GType<MemoryAllocateInfo>;
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
    class MemoryRequirements {
        static $gtype: GObject.GType<MemoryRequirements>;
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
    class Offset3D {
        static $gtype: GObject.GType<Offset3D>;
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
    class ImageSubresourceRange {
        static $gtype: GObject.GType<ImageSubresourceRange>;
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
    class Offset2D {
        static $gtype: GObject.GType<Offset2D>;
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
    class Rect2D {
        static $gtype: GObject.GType<Rect2D>;
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
    class ComputePipelineCreateInfo {
        static $gtype: GObject.GType<ComputePipelineCreateInfo>;
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
    class DescriptorImageInfo {
        static $gtype: GObject.GType<DescriptorImageInfo>;
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
    class WriteDescriptorSet {
        static $gtype: GObject.GType<WriteDescriptorSet>;
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
    class FramebufferCreateInfo {
        static $gtype: GObject.GType<FramebufferCreateInfo>;
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
    class ImageCopy {
        static $gtype: GObject.GType<ImageCopy>;
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
    class ImageResolve {
        static $gtype: GObject.GType<ImageResolve>;
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
    class BufferMemoryBarrier {
        static $gtype: GObject.GType<BufferMemoryBarrier>;
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
    class RenderPassBeginInfo {
        static $gtype: GObject.GType<RenderPassBeginInfo>;
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
    class BaseOutStructure {
        static $gtype: GObject.GType<BaseOutStructure>;
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
    class MemoryRequirements2KHR {
        static $gtype: GObject.GType<MemoryRequirements2KHR>;
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
    class SurfaceKHR {
        static $gtype: GObject.GType<SurfaceKHR>;
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
    class PresentModeKHR {
        static $gtype: GObject.GType<PresentModeKHR>;
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
    class SurfaceTransformFlagsKHR {
        static $gtype: GObject.GType<SurfaceTransformFlagsKHR>;
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
    class DisplayModeCreateFlagsKHR {
        static $gtype: GObject.GType<DisplayModeCreateFlagsKHR>;
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
    class DisplayPropertiesKHR {
        static $gtype: GObject.GType<DisplayPropertiesKHR>;
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
    class DisplayModePropertiesKHR {
        static $gtype: GObject.GType<DisplayModePropertiesKHR>;
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
    class RenderPassCreateInfo2KHR {
        static $gtype: GObject.GType<RenderPassCreateInfo2KHR>;
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
    class PhysicalDeviceVulkanMemoryModelFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVulkanMemoryModelFeaturesKHR>;
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
    class PhysicalDeviceUniformBufferStandardLayoutFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceUniformBufferStandardLayoutFeaturesKHR>;
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
    class ImageViewHandleInfoNVX {
        static $gtype: GObject.GType<ImageViewHandleInfoNVX>;
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
    class ObjectTableNVX {
        static $gtype: GObject.GType<ObjectTableNVX>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsLayoutNVX {
        static $gtype: GObject.GType<IndirectCommandsLayoutNVX>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsTokenTypeNVX {
        static $gtype: GObject.GType<IndirectCommandsTokenTypeNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ObjectEntryTypeNVX {
        static $gtype: GObject.GType<ObjectEntryTypeNVX>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsLayoutUsageFlagBitsNVX {
        static $gtype: GObject.GType<IndirectCommandsLayoutUsageFlagBitsNVX>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsLayoutUsageFlagsNVX {
        static $gtype: GObject.GType<IndirectCommandsLayoutUsageFlagsNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ObjectEntryUsageFlagBitsNVX {
        static $gtype: GObject.GType<ObjectEntryUsageFlagBitsNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ObjectEntryUsageFlagsNVX {
        static $gtype: GObject.GType<ObjectEntryUsageFlagsNVX>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGeneratedCommandsFeaturesNVX {
        static $gtype: GObject.GType<DeviceGeneratedCommandsFeaturesNVX>;
    }

    /**
     * @gir-type Struct
     */
    class DeviceGeneratedCommandsLimitsNVX {
        static $gtype: GObject.GType<DeviceGeneratedCommandsLimitsNVX>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsTokenNVX {
        static $gtype: GObject.GType<IndirectCommandsTokenNVX>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsLayoutTokenNVX {
        static $gtype: GObject.GType<IndirectCommandsLayoutTokenNVX>;
    }

    /**
     * @gir-type Struct
     */
    class IndirectCommandsLayoutCreateInfoNVX {
        static $gtype: GObject.GType<IndirectCommandsLayoutCreateInfoNVX>;
    }

    /**
     * @gir-type Struct
     */
    class CmdProcessCommandsInfoNVX {
        static $gtype: GObject.GType<CmdProcessCommandsInfoNVX>;
    }

    /**
     * @gir-type Struct
     */
    class CmdReserveSpaceForCommandsInfoNVX {
        static $gtype: GObject.GType<CmdReserveSpaceForCommandsInfoNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ObjectTableCreateInfoNVX {
        static $gtype: GObject.GType<ObjectTableCreateInfoNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ObjectTableEntryNVX {
        static $gtype: GObject.GType<ObjectTableEntryNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ObjectTablePipelineEntryNVX {
        static $gtype: GObject.GType<ObjectTablePipelineEntryNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ObjectTableDescriptorSetEntryNVX {
        static $gtype: GObject.GType<ObjectTableDescriptorSetEntryNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ObjectTableVertexBufferEntryNVX {
        static $gtype: GObject.GType<ObjectTableVertexBufferEntryNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ObjectTableIndexBufferEntryNVX {
        static $gtype: GObject.GType<ObjectTableIndexBufferEntryNVX>;
    }

    /**
     * @gir-type Struct
     */
    class ObjectTablePushConstantEntryNVX {
        static $gtype: GObject.GType<ObjectTablePushConstantEntryNVX>;
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
    class DebugUtilsMessengerCreateFlagsEXT {
        static $gtype: GObject.GType<DebugUtilsMessengerCreateFlagsEXT>;
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
    class DebugUtilsMessageSeverityFlagsEXT {
        static $gtype: GObject.GType<DebugUtilsMessageSeverityFlagsEXT>;
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
    class DebugUtilsObjectNameInfoEXT {
        static $gtype: GObject.GType<DebugUtilsObjectNameInfoEXT>;
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
    class DebugUtilsLabelEXT {
        static $gtype: GObject.GType<DebugUtilsLabelEXT>;
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
    class RayTracingShaderGroupTypeNV {
        static $gtype: GObject.GType<RayTracingShaderGroupTypeNV>;
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
    class AccelerationStructureTypeNV {
        static $gtype: GObject.GType<AccelerationStructureTypeNV>;
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
    class GeometryFlagBitsNV {
        static $gtype: GObject.GType<GeometryFlagBitsNV>;
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
    class GeometryInstanceFlagBitsNV {
        static $gtype: GObject.GType<GeometryInstanceFlagBitsNV>;
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
    class BuildAccelerationStructureFlagBitsNV {
        static $gtype: GObject.GType<BuildAccelerationStructureFlagBitsNV>;
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
    class PipelineCreationFeedbackEXT {
        static $gtype: GObject.GType<PipelineCreationFeedbackEXT>;
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
    class DeviceAddress {
        static $gtype: GObject.GType<DeviceAddress>;
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
    class PhysicalDeviceYcbcrImageArraysFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceYcbcrImageArraysFeaturesEXT>;
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
    class PhysicalDeviceHostQueryResetFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceHostQueryResetFeaturesEXT>;
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
