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

    class Bool32 {
        static $gtype: GObject.GType<Bool32>;
    }

    class DeviceAddress {
        static $gtype: GObject.GType<DeviceAddress>;
    }

    class DeviceSize {
        static $gtype: GObject.GType<DeviceSize>;
    }

    class Flags {
        static $gtype: GObject.GType<Flags>;
    }

    class SampleMask {
        static $gtype: GObject.GType<SampleMask>;
    }

    class Buffer {
        static $gtype: GObject.GType<Buffer>;
    }

    class Image {
        static $gtype: GObject.GType<Image>;
    }

    class Instance {
        static $gtype: GObject.GType<Instance>;
    }

    class PhysicalDevice {
        static $gtype: GObject.GType<PhysicalDevice>;
    }

    class Device {
        static $gtype: GObject.GType<Device>;
    }

    class Queue {
        static $gtype: GObject.GType<Queue>;
    }

    class Semaphore {
        static $gtype: GObject.GType<Semaphore>;
    }

    class CommandBuffer {
        static $gtype: GObject.GType<CommandBuffer>;
    }

    class Fence {
        static $gtype: GObject.GType<Fence>;
    }

    class DeviceMemory {
        static $gtype: GObject.GType<DeviceMemory>;
    }

    class Event {
        static $gtype: GObject.GType<Event>;
    }

    class QueryPool {
        static $gtype: GObject.GType<QueryPool>;
    }

    class BufferView {
        static $gtype: GObject.GType<BufferView>;
    }

    class ImageView {
        static $gtype: GObject.GType<ImageView>;
    }

    class ShaderModule {
        static $gtype: GObject.GType<ShaderModule>;
    }

    class PipelineCache {
        static $gtype: GObject.GType<PipelineCache>;
    }

    class PipelineLayout {
        static $gtype: GObject.GType<PipelineLayout>;
    }

    class Pipeline {
        static $gtype: GObject.GType<Pipeline>;
    }

    class RenderPass {
        static $gtype: GObject.GType<RenderPass>;
    }

    class DescriptorSetLayout {
        static $gtype: GObject.GType<DescriptorSetLayout>;
    }

    class Sampler {
        static $gtype: GObject.GType<Sampler>;
    }

    class DescriptorSet {
        static $gtype: GObject.GType<DescriptorSet>;
    }

    class DescriptorPool {
        static $gtype: GObject.GType<DescriptorPool>;
    }

    class Framebuffer {
        static $gtype: GObject.GType<Framebuffer>;
    }

    class CommandPool {
        static $gtype: GObject.GType<CommandPool>;
    }

    class Result {
        static $gtype: GObject.GType<Result>;
    }

    class StructureType {
        static $gtype: GObject.GType<StructureType>;
    }

    class PipelineCacheHeaderVersion {
        static $gtype: GObject.GType<PipelineCacheHeaderVersion>;
    }

    class ImageLayout {
        static $gtype: GObject.GType<ImageLayout>;
    }

    class ObjectType {
        static $gtype: GObject.GType<ObjectType>;
    }

    class VendorId {
        static $gtype: GObject.GType<VendorId>;
    }

    class SystemAllocationScope {
        static $gtype: GObject.GType<SystemAllocationScope>;
    }

    class InternalAllocationType {
        static $gtype: GObject.GType<InternalAllocationType>;
    }

    class Format {
        static $gtype: GObject.GType<Format>;
    }

    class ImageTiling {
        static $gtype: GObject.GType<ImageTiling>;
    }

    class ImageType {
        static $gtype: GObject.GType<ImageType>;
    }

    class PhysicalDeviceType {
        static $gtype: GObject.GType<PhysicalDeviceType>;
    }

    class QueryType {
        static $gtype: GObject.GType<QueryType>;
    }

    class SharingMode {
        static $gtype: GObject.GType<SharingMode>;
    }

    class ComponentSwizzle {
        static $gtype: GObject.GType<ComponentSwizzle>;
    }

    class ImageViewType {
        static $gtype: GObject.GType<ImageViewType>;
    }

    class BlendFactor {
        static $gtype: GObject.GType<BlendFactor>;
    }

    class BlendOp {
        static $gtype: GObject.GType<BlendOp>;
    }

    class CompareOp {
        static $gtype: GObject.GType<CompareOp>;
    }

    class DynamicState {
        static $gtype: GObject.GType<DynamicState>;
    }

    class FrontFace {
        static $gtype: GObject.GType<FrontFace>;
    }

    class VertexInputRate {
        static $gtype: GObject.GType<VertexInputRate>;
    }

    class PrimitiveTopology {
        static $gtype: GObject.GType<PrimitiveTopology>;
    }

    class PolygonMode {
        static $gtype: GObject.GType<PolygonMode>;
    }

    class StencilOp {
        static $gtype: GObject.GType<StencilOp>;
    }

    class LogicOp {
        static $gtype: GObject.GType<LogicOp>;
    }

    class BorderColor {
        static $gtype: GObject.GType<BorderColor>;
    }

    class Filter {
        static $gtype: GObject.GType<Filter>;
    }

    class SamplerAddressMode {
        static $gtype: GObject.GType<SamplerAddressMode>;
    }

    class SamplerMipmapMode {
        static $gtype: GObject.GType<SamplerMipmapMode>;
    }

    class DescriptorType {
        static $gtype: GObject.GType<DescriptorType>;
    }

    class AttachmentLoadOp {
        static $gtype: GObject.GType<AttachmentLoadOp>;
    }

    class AttachmentStoreOp {
        static $gtype: GObject.GType<AttachmentStoreOp>;
    }

    class PipelineBindPoint {
        static $gtype: GObject.GType<PipelineBindPoint>;
    }

    class CommandBufferLevel {
        static $gtype: GObject.GType<CommandBufferLevel>;
    }

    class IndexType {
        static $gtype: GObject.GType<IndexType>;
    }

    class SubpassContents {
        static $gtype: GObject.GType<SubpassContents>;
    }

    class AccessFlagBits {
        static $gtype: GObject.GType<AccessFlagBits>;
    }

    class AccessFlags {
        static $gtype: GObject.GType<AccessFlags>;
    }

    class ImageAspectFlagBits {
        static $gtype: GObject.GType<ImageAspectFlagBits>;
    }

    class ImageAspectFlags {
        static $gtype: GObject.GType<ImageAspectFlags>;
    }

    class FormatFeatureFlagBits {
        static $gtype: GObject.GType<FormatFeatureFlagBits>;
    }

    class FormatFeatureFlags {
        static $gtype: GObject.GType<FormatFeatureFlags>;
    }

    class ImageCreateFlagBits {
        static $gtype: GObject.GType<ImageCreateFlagBits>;
    }

    class ImageCreateFlags {
        static $gtype: GObject.GType<ImageCreateFlags>;
    }

    class SampleCountFlagBits {
        static $gtype: GObject.GType<SampleCountFlagBits>;
    }

    class SampleCountFlags {
        static $gtype: GObject.GType<SampleCountFlags>;
    }

    class ImageUsageFlagBits {
        static $gtype: GObject.GType<ImageUsageFlagBits>;
    }

    class ImageUsageFlags {
        static $gtype: GObject.GType<ImageUsageFlags>;
    }

    class InstanceCreateFlagBits {
        static $gtype: GObject.GType<InstanceCreateFlagBits>;
    }

    class InstanceCreateFlags {
        static $gtype: GObject.GType<InstanceCreateFlags>;
    }

    class MemoryHeapFlagBits {
        static $gtype: GObject.GType<MemoryHeapFlagBits>;
    }

    class MemoryHeapFlags {
        static $gtype: GObject.GType<MemoryHeapFlags>;
    }

    class MemoryPropertyFlagBits {
        static $gtype: GObject.GType<MemoryPropertyFlagBits>;
    }

    class MemoryPropertyFlags {
        static $gtype: GObject.GType<MemoryPropertyFlags>;
    }

    class QueueFlagBits {
        static $gtype: GObject.GType<QueueFlagBits>;
    }

    class QueueFlags {
        static $gtype: GObject.GType<QueueFlags>;
    }

    class DeviceCreateFlags {
        static $gtype: GObject.GType<DeviceCreateFlags>;
    }

    class DeviceQueueCreateFlagBits {
        static $gtype: GObject.GType<DeviceQueueCreateFlagBits>;
    }

    class DeviceQueueCreateFlags {
        static $gtype: GObject.GType<DeviceQueueCreateFlags>;
    }

    class PipelineStageFlagBits {
        static $gtype: GObject.GType<PipelineStageFlagBits>;
    }

    class PipelineStageFlags {
        static $gtype: GObject.GType<PipelineStageFlags>;
    }

    class MemoryMapFlagBits {
        static $gtype: GObject.GType<MemoryMapFlagBits>;
    }

    class MemoryMapFlags {
        static $gtype: GObject.GType<MemoryMapFlags>;
    }

    class SparseMemoryBindFlagBits {
        static $gtype: GObject.GType<SparseMemoryBindFlagBits>;
    }

    class SparseMemoryBindFlags {
        static $gtype: GObject.GType<SparseMemoryBindFlags>;
    }

    class SparseImageFormatFlagBits {
        static $gtype: GObject.GType<SparseImageFormatFlagBits>;
    }

    class SparseImageFormatFlags {
        static $gtype: GObject.GType<SparseImageFormatFlags>;
    }

    class FenceCreateFlagBits {
        static $gtype: GObject.GType<FenceCreateFlagBits>;
    }

    class FenceCreateFlags {
        static $gtype: GObject.GType<FenceCreateFlags>;
    }

    class SemaphoreCreateFlags {
        static $gtype: GObject.GType<SemaphoreCreateFlags>;
    }

    class EventCreateFlagBits {
        static $gtype: GObject.GType<EventCreateFlagBits>;
    }

    class EventCreateFlags {
        static $gtype: GObject.GType<EventCreateFlags>;
    }

    class QueryPipelineStatisticFlagBits {
        static $gtype: GObject.GType<QueryPipelineStatisticFlagBits>;
    }

    class QueryPipelineStatisticFlags {
        static $gtype: GObject.GType<QueryPipelineStatisticFlags>;
    }

    class QueryPoolCreateFlags {
        static $gtype: GObject.GType<QueryPoolCreateFlags>;
    }

    class QueryResultFlagBits {
        static $gtype: GObject.GType<QueryResultFlagBits>;
    }

    class QueryResultFlags {
        static $gtype: GObject.GType<QueryResultFlags>;
    }

    class BufferCreateFlagBits {
        static $gtype: GObject.GType<BufferCreateFlagBits>;
    }

    class BufferCreateFlags {
        static $gtype: GObject.GType<BufferCreateFlags>;
    }

    class BufferUsageFlagBits {
        static $gtype: GObject.GType<BufferUsageFlagBits>;
    }

    class BufferUsageFlags {
        static $gtype: GObject.GType<BufferUsageFlags>;
    }

    class BufferViewCreateFlags {
        static $gtype: GObject.GType<BufferViewCreateFlags>;
    }

    class ImageViewCreateFlagBits {
        static $gtype: GObject.GType<ImageViewCreateFlagBits>;
    }

    class ImageViewCreateFlags {
        static $gtype: GObject.GType<ImageViewCreateFlags>;
    }

    class ShaderModuleCreateFlags {
        static $gtype: GObject.GType<ShaderModuleCreateFlags>;
    }

    class PipelineCacheCreateFlagBits {
        static $gtype: GObject.GType<PipelineCacheCreateFlagBits>;
    }

    class PipelineCacheCreateFlags {
        static $gtype: GObject.GType<PipelineCacheCreateFlags>;
    }

    class ColorComponentFlagBits {
        static $gtype: GObject.GType<ColorComponentFlagBits>;
    }

    class ColorComponentFlags {
        static $gtype: GObject.GType<ColorComponentFlags>;
    }

    class PipelineCreateFlagBits {
        static $gtype: GObject.GType<PipelineCreateFlagBits>;
    }

    class PipelineCreateFlags {
        static $gtype: GObject.GType<PipelineCreateFlags>;
    }

    class PipelineShaderStageCreateFlagBits {
        static $gtype: GObject.GType<PipelineShaderStageCreateFlagBits>;
    }

    class PipelineShaderStageCreateFlags {
        static $gtype: GObject.GType<PipelineShaderStageCreateFlags>;
    }

    class ShaderStageFlagBits {
        static $gtype: GObject.GType<ShaderStageFlagBits>;
    }

    class CullModeFlagBits {
        static $gtype: GObject.GType<CullModeFlagBits>;
    }

    class CullModeFlags {
        static $gtype: GObject.GType<CullModeFlags>;
    }

    class PipelineVertexInputStateCreateFlags {
        static $gtype: GObject.GType<PipelineVertexInputStateCreateFlags>;
    }

    class PipelineInputAssemblyStateCreateFlags {
        static $gtype: GObject.GType<PipelineInputAssemblyStateCreateFlags>;
    }

    class PipelineTessellationStateCreateFlags {
        static $gtype: GObject.GType<PipelineTessellationStateCreateFlags>;
    }

    class PipelineViewportStateCreateFlags {
        static $gtype: GObject.GType<PipelineViewportStateCreateFlags>;
    }

    class PipelineRasterizationStateCreateFlags {
        static $gtype: GObject.GType<PipelineRasterizationStateCreateFlags>;
    }

    class PipelineMultisampleStateCreateFlags {
        static $gtype: GObject.GType<PipelineMultisampleStateCreateFlags>;
    }

    class PipelineDepthStencilStateCreateFlagBits {
        static $gtype: GObject.GType<PipelineDepthStencilStateCreateFlagBits>;
    }

    class PipelineDepthStencilStateCreateFlags {
        static $gtype: GObject.GType<PipelineDepthStencilStateCreateFlags>;
    }

    class PipelineColorBlendStateCreateFlagBits {
        static $gtype: GObject.GType<PipelineColorBlendStateCreateFlagBits>;
    }

    class PipelineColorBlendStateCreateFlags {
        static $gtype: GObject.GType<PipelineColorBlendStateCreateFlags>;
    }

    class PipelineDynamicStateCreateFlags {
        static $gtype: GObject.GType<PipelineDynamicStateCreateFlags>;
    }

    class PipelineLayoutCreateFlagBits {
        static $gtype: GObject.GType<PipelineLayoutCreateFlagBits>;
    }

    class PipelineLayoutCreateFlags {
        static $gtype: GObject.GType<PipelineLayoutCreateFlags>;
    }

    class ShaderStageFlags {
        static $gtype: GObject.GType<ShaderStageFlags>;
    }

    class SamplerCreateFlagBits {
        static $gtype: GObject.GType<SamplerCreateFlagBits>;
    }

    class SamplerCreateFlags {
        static $gtype: GObject.GType<SamplerCreateFlags>;
    }

    class DescriptorPoolCreateFlagBits {
        static $gtype: GObject.GType<DescriptorPoolCreateFlagBits>;
    }

    class DescriptorPoolCreateFlags {
        static $gtype: GObject.GType<DescriptorPoolCreateFlags>;
    }

    class DescriptorPoolResetFlags {
        static $gtype: GObject.GType<DescriptorPoolResetFlags>;
    }

    class DescriptorSetLayoutCreateFlagBits {
        static $gtype: GObject.GType<DescriptorSetLayoutCreateFlagBits>;
    }

    class DescriptorSetLayoutCreateFlags {
        static $gtype: GObject.GType<DescriptorSetLayoutCreateFlags>;
    }

    class AttachmentDescriptionFlagBits {
        static $gtype: GObject.GType<AttachmentDescriptionFlagBits>;
    }

    class AttachmentDescriptionFlags {
        static $gtype: GObject.GType<AttachmentDescriptionFlags>;
    }

    class DependencyFlagBits {
        static $gtype: GObject.GType<DependencyFlagBits>;
    }

    class DependencyFlags {
        static $gtype: GObject.GType<DependencyFlags>;
    }

    class FramebufferCreateFlagBits {
        static $gtype: GObject.GType<FramebufferCreateFlagBits>;
    }

    class FramebufferCreateFlags {
        static $gtype: GObject.GType<FramebufferCreateFlags>;
    }

    class RenderPassCreateFlagBits {
        static $gtype: GObject.GType<RenderPassCreateFlagBits>;
    }

    class RenderPassCreateFlags {
        static $gtype: GObject.GType<RenderPassCreateFlags>;
    }

    class SubpassDescriptionFlagBits {
        static $gtype: GObject.GType<SubpassDescriptionFlagBits>;
    }

    class SubpassDescriptionFlags {
        static $gtype: GObject.GType<SubpassDescriptionFlags>;
    }

    class CommandPoolCreateFlagBits {
        static $gtype: GObject.GType<CommandPoolCreateFlagBits>;
    }

    class CommandPoolCreateFlags {
        static $gtype: GObject.GType<CommandPoolCreateFlags>;
    }

    class CommandPoolResetFlagBits {
        static $gtype: GObject.GType<CommandPoolResetFlagBits>;
    }

    class CommandPoolResetFlags {
        static $gtype: GObject.GType<CommandPoolResetFlags>;
    }

    class CommandBufferUsageFlagBits {
        static $gtype: GObject.GType<CommandBufferUsageFlagBits>;
    }

    class CommandBufferUsageFlags {
        static $gtype: GObject.GType<CommandBufferUsageFlags>;
    }

    class QueryControlFlagBits {
        static $gtype: GObject.GType<QueryControlFlagBits>;
    }

    class QueryControlFlags {
        static $gtype: GObject.GType<QueryControlFlags>;
    }

    class CommandBufferResetFlagBits {
        static $gtype: GObject.GType<CommandBufferResetFlagBits>;
    }

    class CommandBufferResetFlags {
        static $gtype: GObject.GType<CommandBufferResetFlags>;
    }

    class StencilFaceFlagBits {
        static $gtype: GObject.GType<StencilFaceFlagBits>;
    }

    class StencilFaceFlags {
        static $gtype: GObject.GType<StencilFaceFlags>;
    }

    class Extent2D {
        static $gtype: GObject.GType<Extent2D>;
    }

    class Extent3D {
        static $gtype: GObject.GType<Extent3D>;
    }

    class Offset2D {
        static $gtype: GObject.GType<Offset2D>;
    }

    class Offset3D {
        static $gtype: GObject.GType<Offset3D>;
    }

    class Rect2D {
        static $gtype: GObject.GType<Rect2D>;
    }

    class BaseInStructure {
        static $gtype: GObject.GType<BaseInStructure>;
    }

    class BaseOutStructure {
        static $gtype: GObject.GType<BaseOutStructure>;
    }

    class BufferMemoryBarrier {
        static $gtype: GObject.GType<BufferMemoryBarrier>;
    }

    class DispatchIndirectCommand {
        static $gtype: GObject.GType<DispatchIndirectCommand>;
    }

    class DrawIndexedIndirectCommand {
        static $gtype: GObject.GType<DrawIndexedIndirectCommand>;
    }

    class DrawIndirectCommand {
        static $gtype: GObject.GType<DrawIndirectCommand>;
    }

    class ImageSubresourceRange {
        static $gtype: GObject.GType<ImageSubresourceRange>;
    }

    class ImageMemoryBarrier {
        static $gtype: GObject.GType<ImageMemoryBarrier>;
    }

    class MemoryBarrier {
        static $gtype: GObject.GType<MemoryBarrier>;
    }

    class PipelineCacheHeaderVersionOne {
        static $gtype: GObject.GType<PipelineCacheHeaderVersionOne>;
    }

    class AllocationCallbacks {
        static $gtype: GObject.GType<AllocationCallbacks>;
    }

    class ApplicationInfo {
        static $gtype: GObject.GType<ApplicationInfo>;
    }

    class FormatProperties {
        static $gtype: GObject.GType<FormatProperties>;
    }

    class ImageFormatProperties {
        static $gtype: GObject.GType<ImageFormatProperties>;
    }

    class InstanceCreateInfo {
        static $gtype: GObject.GType<InstanceCreateInfo>;
    }

    class MemoryHeap {
        static $gtype: GObject.GType<MemoryHeap>;
    }

    class MemoryType {
        static $gtype: GObject.GType<MemoryType>;
    }

    class PhysicalDeviceFeatures {
        static $gtype: GObject.GType<PhysicalDeviceFeatures>;
    }

    class PhysicalDeviceLimits {
        static $gtype: GObject.GType<PhysicalDeviceLimits>;
    }

    class PhysicalDeviceMemoryProperties {
        static $gtype: GObject.GType<PhysicalDeviceMemoryProperties>;
    }

    class PhysicalDeviceSparseProperties {
        static $gtype: GObject.GType<PhysicalDeviceSparseProperties>;
    }

    class PhysicalDeviceProperties {
        static $gtype: GObject.GType<PhysicalDeviceProperties>;
    }

    class QueueFamilyProperties {
        static $gtype: GObject.GType<QueueFamilyProperties>;
    }

    class DeviceQueueCreateInfo {
        static $gtype: GObject.GType<DeviceQueueCreateInfo>;
    }

    class DeviceCreateInfo {
        static $gtype: GObject.GType<DeviceCreateInfo>;
    }

    class ExtensionProperties {
        static $gtype: GObject.GType<ExtensionProperties>;
    }

    class LayerProperties {
        static $gtype: GObject.GType<LayerProperties>;
    }

    class SubmitInfo {
        static $gtype: GObject.GType<SubmitInfo>;
    }

    class MappedMemoryRange {
        static $gtype: GObject.GType<MappedMemoryRange>;
    }

    class MemoryAllocateInfo {
        static $gtype: GObject.GType<MemoryAllocateInfo>;
    }

    class MemoryRequirements {
        static $gtype: GObject.GType<MemoryRequirements>;
    }

    class SparseMemoryBind {
        static $gtype: GObject.GType<SparseMemoryBind>;
    }

    class SparseBufferMemoryBindInfo {
        static $gtype: GObject.GType<SparseBufferMemoryBindInfo>;
    }

    class SparseImageOpaqueMemoryBindInfo {
        static $gtype: GObject.GType<SparseImageOpaqueMemoryBindInfo>;
    }

    class ImageSubresource {
        static $gtype: GObject.GType<ImageSubresource>;
    }

    class SparseImageMemoryBind {
        static $gtype: GObject.GType<SparseImageMemoryBind>;
    }

    class SparseImageMemoryBindInfo {
        static $gtype: GObject.GType<SparseImageMemoryBindInfo>;
    }

    class BindSparseInfo {
        static $gtype: GObject.GType<BindSparseInfo>;
    }

    class SparseImageFormatProperties {
        static $gtype: GObject.GType<SparseImageFormatProperties>;
    }

    class SparseImageMemoryRequirements {
        static $gtype: GObject.GType<SparseImageMemoryRequirements>;
    }

    class FenceCreateInfo {
        static $gtype: GObject.GType<FenceCreateInfo>;
    }

    class SemaphoreCreateInfo {
        static $gtype: GObject.GType<SemaphoreCreateInfo>;
    }

    class EventCreateInfo {
        static $gtype: GObject.GType<EventCreateInfo>;
    }

    class QueryPoolCreateInfo {
        static $gtype: GObject.GType<QueryPoolCreateInfo>;
    }

    class BufferCreateInfo {
        static $gtype: GObject.GType<BufferCreateInfo>;
    }

    class BufferViewCreateInfo {
        static $gtype: GObject.GType<BufferViewCreateInfo>;
    }

    class ImageCreateInfo {
        static $gtype: GObject.GType<ImageCreateInfo>;
    }

    class SubresourceLayout {
        static $gtype: GObject.GType<SubresourceLayout>;
    }

    class ComponentMapping {
        static $gtype: GObject.GType<ComponentMapping>;
    }

    class ImageViewCreateInfo {
        static $gtype: GObject.GType<ImageViewCreateInfo>;
    }

    class ShaderModuleCreateInfo {
        static $gtype: GObject.GType<ShaderModuleCreateInfo>;
    }

    class PipelineCacheCreateInfo {
        static $gtype: GObject.GType<PipelineCacheCreateInfo>;
    }

    class SpecializationMapEntry {
        static $gtype: GObject.GType<SpecializationMapEntry>;
    }

    class SpecializationInfo {
        static $gtype: GObject.GType<SpecializationInfo>;
    }

    class PipelineShaderStageCreateInfo {
        static $gtype: GObject.GType<PipelineShaderStageCreateInfo>;
    }

    class ComputePipelineCreateInfo {
        static $gtype: GObject.GType<ComputePipelineCreateInfo>;
    }

    class VertexInputBindingDescription {
        static $gtype: GObject.GType<VertexInputBindingDescription>;
    }

    class VertexInputAttributeDescription {
        static $gtype: GObject.GType<VertexInputAttributeDescription>;
    }

    class PipelineVertexInputStateCreateInfo {
        static $gtype: GObject.GType<PipelineVertexInputStateCreateInfo>;
    }

    class PipelineInputAssemblyStateCreateInfo {
        static $gtype: GObject.GType<PipelineInputAssemblyStateCreateInfo>;
    }

    class PipelineTessellationStateCreateInfo {
        static $gtype: GObject.GType<PipelineTessellationStateCreateInfo>;
    }

    class Viewport {
        static $gtype: GObject.GType<Viewport>;
    }

    class PipelineViewportStateCreateInfo {
        static $gtype: GObject.GType<PipelineViewportStateCreateInfo>;
    }

    class PipelineRasterizationStateCreateInfo {
        static $gtype: GObject.GType<PipelineRasterizationStateCreateInfo>;
    }

    class PipelineMultisampleStateCreateInfo {
        static $gtype: GObject.GType<PipelineMultisampleStateCreateInfo>;
    }

    class StencilOpState {
        static $gtype: GObject.GType<StencilOpState>;
    }

    class PipelineDepthStencilStateCreateInfo {
        static $gtype: GObject.GType<PipelineDepthStencilStateCreateInfo>;
    }

    class PipelineColorBlendAttachmentState {
        static $gtype: GObject.GType<PipelineColorBlendAttachmentState>;
    }

    class PipelineColorBlendStateCreateInfo {
        static $gtype: GObject.GType<PipelineColorBlendStateCreateInfo>;
    }

    class PipelineDynamicStateCreateInfo {
        static $gtype: GObject.GType<PipelineDynamicStateCreateInfo>;
    }

    class GraphicsPipelineCreateInfo {
        static $gtype: GObject.GType<GraphicsPipelineCreateInfo>;
    }

    class PushConstantRange {
        static $gtype: GObject.GType<PushConstantRange>;
    }

    class PipelineLayoutCreateInfo {
        static $gtype: GObject.GType<PipelineLayoutCreateInfo>;
    }

    class SamplerCreateInfo {
        static $gtype: GObject.GType<SamplerCreateInfo>;
    }

    class CopyDescriptorSet {
        static $gtype: GObject.GType<CopyDescriptorSet>;
    }

    class DescriptorBufferInfo {
        static $gtype: GObject.GType<DescriptorBufferInfo>;
    }

    class DescriptorImageInfo {
        static $gtype: GObject.GType<DescriptorImageInfo>;
    }

    class DescriptorPoolSize {
        static $gtype: GObject.GType<DescriptorPoolSize>;
    }

    class DescriptorPoolCreateInfo {
        static $gtype: GObject.GType<DescriptorPoolCreateInfo>;
    }

    class DescriptorSetAllocateInfo {
        static $gtype: GObject.GType<DescriptorSetAllocateInfo>;
    }

    class DescriptorSetLayoutBinding {
        static $gtype: GObject.GType<DescriptorSetLayoutBinding>;
    }

    class DescriptorSetLayoutCreateInfo {
        static $gtype: GObject.GType<DescriptorSetLayoutCreateInfo>;
    }

    class WriteDescriptorSet {
        static $gtype: GObject.GType<WriteDescriptorSet>;
    }

    class AttachmentDescription {
        static $gtype: GObject.GType<AttachmentDescription>;
    }

    class AttachmentReference {
        static $gtype: GObject.GType<AttachmentReference>;
    }

    class FramebufferCreateInfo {
        static $gtype: GObject.GType<FramebufferCreateInfo>;
    }

    class SubpassDescription {
        static $gtype: GObject.GType<SubpassDescription>;
    }

    class SubpassDependency {
        static $gtype: GObject.GType<SubpassDependency>;
    }

    class RenderPassCreateInfo {
        static $gtype: GObject.GType<RenderPassCreateInfo>;
    }

    class CommandPoolCreateInfo {
        static $gtype: GObject.GType<CommandPoolCreateInfo>;
    }

    class CommandBufferAllocateInfo {
        static $gtype: GObject.GType<CommandBufferAllocateInfo>;
    }

    class CommandBufferInheritanceInfo {
        static $gtype: GObject.GType<CommandBufferInheritanceInfo>;
    }

    class CommandBufferBeginInfo {
        static $gtype: GObject.GType<CommandBufferBeginInfo>;
    }

    class BufferCopy {
        static $gtype: GObject.GType<BufferCopy>;
    }

    class ImageSubresourceLayers {
        static $gtype: GObject.GType<ImageSubresourceLayers>;
    }

    class BufferImageCopy {
        static $gtype: GObject.GType<BufferImageCopy>;
    }

    class ClearColorValue {
        static $gtype: GObject.GType<ClearColorValue>;
    }

    class ClearDepthStencilValue {
        static $gtype: GObject.GType<ClearDepthStencilValue>;
    }

    class ClearValue {
        static $gtype: GObject.GType<ClearValue>;
    }

    class ClearAttachment {
        static $gtype: GObject.GType<ClearAttachment>;
    }

    class ClearRect {
        static $gtype: GObject.GType<ClearRect>;
    }

    class ImageBlit {
        static $gtype: GObject.GType<ImageBlit>;
    }

    class ImageCopy {
        static $gtype: GObject.GType<ImageCopy>;
    }

    class ImageResolve {
        static $gtype: GObject.GType<ImageResolve>;
    }

    class RenderPassBeginInfo {
        static $gtype: GObject.GType<RenderPassBeginInfo>;
    }

    class SamplerYcbcrConversion {
        static $gtype: GObject.GType<SamplerYcbcrConversion>;
    }

    class DescriptorUpdateTemplate {
        static $gtype: GObject.GType<DescriptorUpdateTemplate>;
    }

    class PointClippingBehavior {
        static $gtype: GObject.GType<PointClippingBehavior>;
    }

    class TessellationDomainOrigin {
        static $gtype: GObject.GType<TessellationDomainOrigin>;
    }

    class SamplerYcbcrModelConversion {
        static $gtype: GObject.GType<SamplerYcbcrModelConversion>;
    }

    class SamplerYcbcrRange {
        static $gtype: GObject.GType<SamplerYcbcrRange>;
    }

    class ChromaLocation {
        static $gtype: GObject.GType<ChromaLocation>;
    }

    class DescriptorUpdateTemplateType {
        static $gtype: GObject.GType<DescriptorUpdateTemplateType>;
    }

    class SubgroupFeatureFlagBits {
        static $gtype: GObject.GType<SubgroupFeatureFlagBits>;
    }

    class SubgroupFeatureFlags {
        static $gtype: GObject.GType<SubgroupFeatureFlags>;
    }

    class PeerMemoryFeatureFlagBits {
        static $gtype: GObject.GType<PeerMemoryFeatureFlagBits>;
    }

    class PeerMemoryFeatureFlags {
        static $gtype: GObject.GType<PeerMemoryFeatureFlags>;
    }

    class MemoryAllocateFlagBits {
        static $gtype: GObject.GType<MemoryAllocateFlagBits>;
    }

    class MemoryAllocateFlags {
        static $gtype: GObject.GType<MemoryAllocateFlags>;
    }

    class CommandPoolTrimFlags {
        static $gtype: GObject.GType<CommandPoolTrimFlags>;
    }

    class DescriptorUpdateTemplateCreateFlags {
        static $gtype: GObject.GType<DescriptorUpdateTemplateCreateFlags>;
    }

    class ExternalMemoryHandleTypeFlagBits {
        static $gtype: GObject.GType<ExternalMemoryHandleTypeFlagBits>;
    }

    class ExternalMemoryHandleTypeFlags {
        static $gtype: GObject.GType<ExternalMemoryHandleTypeFlags>;
    }

    class ExternalMemoryFeatureFlagBits {
        static $gtype: GObject.GType<ExternalMemoryFeatureFlagBits>;
    }

    class ExternalMemoryFeatureFlags {
        static $gtype: GObject.GType<ExternalMemoryFeatureFlags>;
    }

    class ExternalFenceHandleTypeFlagBits {
        static $gtype: GObject.GType<ExternalFenceHandleTypeFlagBits>;
    }

    class ExternalFenceHandleTypeFlags {
        static $gtype: GObject.GType<ExternalFenceHandleTypeFlags>;
    }

    class ExternalFenceFeatureFlagBits {
        static $gtype: GObject.GType<ExternalFenceFeatureFlagBits>;
    }

    class ExternalFenceFeatureFlags {
        static $gtype: GObject.GType<ExternalFenceFeatureFlags>;
    }

    class FenceImportFlagBits {
        static $gtype: GObject.GType<FenceImportFlagBits>;
    }

    class FenceImportFlags {
        static $gtype: GObject.GType<FenceImportFlags>;
    }

    class SemaphoreImportFlagBits {
        static $gtype: GObject.GType<SemaphoreImportFlagBits>;
    }

    class SemaphoreImportFlags {
        static $gtype: GObject.GType<SemaphoreImportFlags>;
    }

    class ExternalSemaphoreHandleTypeFlagBits {
        static $gtype: GObject.GType<ExternalSemaphoreHandleTypeFlagBits>;
    }

    class ExternalSemaphoreHandleTypeFlags {
        static $gtype: GObject.GType<ExternalSemaphoreHandleTypeFlags>;
    }

    class ExternalSemaphoreFeatureFlagBits {
        static $gtype: GObject.GType<ExternalSemaphoreFeatureFlagBits>;
    }

    class ExternalSemaphoreFeatureFlags {
        static $gtype: GObject.GType<ExternalSemaphoreFeatureFlags>;
    }

    class PhysicalDeviceSubgroupProperties {
        static $gtype: GObject.GType<PhysicalDeviceSubgroupProperties>;
    }

    class BindBufferMemoryInfo {
        static $gtype: GObject.GType<BindBufferMemoryInfo>;
    }

    class BindImageMemoryInfo {
        static $gtype: GObject.GType<BindImageMemoryInfo>;
    }

    class PhysicalDevice16BitStorageFeatures {
        static $gtype: GObject.GType<PhysicalDevice16BitStorageFeatures>;
    }

    class MemoryDedicatedRequirements {
        static $gtype: GObject.GType<MemoryDedicatedRequirements>;
    }

    class MemoryDedicatedAllocateInfo {
        static $gtype: GObject.GType<MemoryDedicatedAllocateInfo>;
    }

    class MemoryAllocateFlagsInfo {
        static $gtype: GObject.GType<MemoryAllocateFlagsInfo>;
    }

    class DeviceGroupRenderPassBeginInfo {
        static $gtype: GObject.GType<DeviceGroupRenderPassBeginInfo>;
    }

    class DeviceGroupCommandBufferBeginInfo {
        static $gtype: GObject.GType<DeviceGroupCommandBufferBeginInfo>;
    }

    class DeviceGroupSubmitInfo {
        static $gtype: GObject.GType<DeviceGroupSubmitInfo>;
    }

    class DeviceGroupBindSparseInfo {
        static $gtype: GObject.GType<DeviceGroupBindSparseInfo>;
    }

    class BindBufferMemoryDeviceGroupInfo {
        static $gtype: GObject.GType<BindBufferMemoryDeviceGroupInfo>;
    }

    class BindImageMemoryDeviceGroupInfo {
        static $gtype: GObject.GType<BindImageMemoryDeviceGroupInfo>;
    }

    class PhysicalDeviceGroupProperties {
        static $gtype: GObject.GType<PhysicalDeviceGroupProperties>;
    }

    class DeviceGroupDeviceCreateInfo {
        static $gtype: GObject.GType<DeviceGroupDeviceCreateInfo>;
    }

    class BufferMemoryRequirementsInfo2 {
        static $gtype: GObject.GType<BufferMemoryRequirementsInfo2>;
    }

    class ImageMemoryRequirementsInfo2 {
        static $gtype: GObject.GType<ImageMemoryRequirementsInfo2>;
    }

    class ImageSparseMemoryRequirementsInfo2 {
        static $gtype: GObject.GType<ImageSparseMemoryRequirementsInfo2>;
    }

    class MemoryRequirements2 {
        static $gtype: GObject.GType<MemoryRequirements2>;
    }

    class SparseImageMemoryRequirements2 {
        static $gtype: GObject.GType<SparseImageMemoryRequirements2>;
    }

    class PhysicalDeviceFeatures2 {
        static $gtype: GObject.GType<PhysicalDeviceFeatures2>;
    }

    class PhysicalDeviceProperties2 {
        static $gtype: GObject.GType<PhysicalDeviceProperties2>;
    }

    class FormatProperties2 {
        static $gtype: GObject.GType<FormatProperties2>;
    }

    class ImageFormatProperties2 {
        static $gtype: GObject.GType<ImageFormatProperties2>;
    }

    class PhysicalDeviceImageFormatInfo2 {
        static $gtype: GObject.GType<PhysicalDeviceImageFormatInfo2>;
    }

    class QueueFamilyProperties2 {
        static $gtype: GObject.GType<QueueFamilyProperties2>;
    }

    class PhysicalDeviceMemoryProperties2 {
        static $gtype: GObject.GType<PhysicalDeviceMemoryProperties2>;
    }

    class SparseImageFormatProperties2 {
        static $gtype: GObject.GType<SparseImageFormatProperties2>;
    }

    class PhysicalDeviceSparseImageFormatInfo2 {
        static $gtype: GObject.GType<PhysicalDeviceSparseImageFormatInfo2>;
    }

    class PhysicalDevicePointClippingProperties {
        static $gtype: GObject.GType<PhysicalDevicePointClippingProperties>;
    }

    class InputAttachmentAspectReference {
        static $gtype: GObject.GType<InputAttachmentAspectReference>;
    }

    class RenderPassInputAttachmentAspectCreateInfo {
        static $gtype: GObject.GType<RenderPassInputAttachmentAspectCreateInfo>;
    }

    class ImageViewUsageCreateInfo {
        static $gtype: GObject.GType<ImageViewUsageCreateInfo>;
    }

    class PipelineTessellationDomainOriginStateCreateInfo {
        static $gtype: GObject.GType<PipelineTessellationDomainOriginStateCreateInfo>;
    }

    class RenderPassMultiviewCreateInfo {
        static $gtype: GObject.GType<RenderPassMultiviewCreateInfo>;
    }

    class PhysicalDeviceMultiviewFeatures {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewFeatures>;
    }

    class PhysicalDeviceMultiviewProperties {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewProperties>;
    }

    class PhysicalDeviceVariablePointersFeatures {
        static $gtype: GObject.GType<PhysicalDeviceVariablePointersFeatures>;
    }

    class PhysicalDeviceVariablePointerFeatures {
        static $gtype: GObject.GType<PhysicalDeviceVariablePointerFeatures>;
    }

    class PhysicalDeviceProtectedMemoryFeatures {
        static $gtype: GObject.GType<PhysicalDeviceProtectedMemoryFeatures>;
    }

    class PhysicalDeviceProtectedMemoryProperties {
        static $gtype: GObject.GType<PhysicalDeviceProtectedMemoryProperties>;
    }

    class DeviceQueueInfo2 {
        static $gtype: GObject.GType<DeviceQueueInfo2>;
    }

    class ProtectedSubmitInfo {
        static $gtype: GObject.GType<ProtectedSubmitInfo>;
    }

    class SamplerYcbcrConversionCreateInfo {
        static $gtype: GObject.GType<SamplerYcbcrConversionCreateInfo>;
    }

    class SamplerYcbcrConversionInfo {
        static $gtype: GObject.GType<SamplerYcbcrConversionInfo>;
    }

    class BindImagePlaneMemoryInfo {
        static $gtype: GObject.GType<BindImagePlaneMemoryInfo>;
    }

    class ImagePlaneMemoryRequirementsInfo {
        static $gtype: GObject.GType<ImagePlaneMemoryRequirementsInfo>;
    }

    class PhysicalDeviceSamplerYcbcrConversionFeatures {
        static $gtype: GObject.GType<PhysicalDeviceSamplerYcbcrConversionFeatures>;
    }

    class SamplerYcbcrConversionImageFormatProperties {
        static $gtype: GObject.GType<SamplerYcbcrConversionImageFormatProperties>;
    }

    class DescriptorUpdateTemplateEntry {
        static $gtype: GObject.GType<DescriptorUpdateTemplateEntry>;
    }

    class DescriptorUpdateTemplateCreateInfo {
        static $gtype: GObject.GType<DescriptorUpdateTemplateCreateInfo>;
    }

    class ExternalMemoryProperties {
        static $gtype: GObject.GType<ExternalMemoryProperties>;
    }

    class PhysicalDeviceExternalImageFormatInfo {
        static $gtype: GObject.GType<PhysicalDeviceExternalImageFormatInfo>;
    }

    class ExternalImageFormatProperties {
        static $gtype: GObject.GType<ExternalImageFormatProperties>;
    }

    class PhysicalDeviceExternalBufferInfo {
        static $gtype: GObject.GType<PhysicalDeviceExternalBufferInfo>;
    }

    class ExternalBufferProperties {
        static $gtype: GObject.GType<ExternalBufferProperties>;
    }

    class PhysicalDeviceIDProperties {
        static $gtype: GObject.GType<PhysicalDeviceIDProperties>;
    }

    class ExternalMemoryImageCreateInfo {
        static $gtype: GObject.GType<ExternalMemoryImageCreateInfo>;
    }

    class ExternalMemoryBufferCreateInfo {
        static $gtype: GObject.GType<ExternalMemoryBufferCreateInfo>;
    }

    class ExportMemoryAllocateInfo {
        static $gtype: GObject.GType<ExportMemoryAllocateInfo>;
    }

    class PhysicalDeviceExternalFenceInfo {
        static $gtype: GObject.GType<PhysicalDeviceExternalFenceInfo>;
    }

    class ExternalFenceProperties {
        static $gtype: GObject.GType<ExternalFenceProperties>;
    }

    class ExportFenceCreateInfo {
        static $gtype: GObject.GType<ExportFenceCreateInfo>;
    }

    class ExportSemaphoreCreateInfo {
        static $gtype: GObject.GType<ExportSemaphoreCreateInfo>;
    }

    class PhysicalDeviceExternalSemaphoreInfo {
        static $gtype: GObject.GType<PhysicalDeviceExternalSemaphoreInfo>;
    }

    class ExternalSemaphoreProperties {
        static $gtype: GObject.GType<ExternalSemaphoreProperties>;
    }

    class PhysicalDeviceMaintenance3Properties {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance3Properties>;
    }

    class DescriptorSetLayoutSupport {
        static $gtype: GObject.GType<DescriptorSetLayoutSupport>;
    }

    class PhysicalDeviceShaderDrawParametersFeatures {
        static $gtype: GObject.GType<PhysicalDeviceShaderDrawParametersFeatures>;
    }

    class PhysicalDeviceShaderDrawParameterFeatures {
        static $gtype: GObject.GType<PhysicalDeviceShaderDrawParameterFeatures>;
    }

    class DriverId {
        static $gtype: GObject.GType<DriverId>;
    }

    class ShaderFloatControlsIndependence {
        static $gtype: GObject.GType<ShaderFloatControlsIndependence>;
    }

    class SamplerReductionMode {
        static $gtype: GObject.GType<SamplerReductionMode>;
    }

    class SemaphoreType {
        static $gtype: GObject.GType<SemaphoreType>;
    }

    class ResolveModeFlagBits {
        static $gtype: GObject.GType<ResolveModeFlagBits>;
    }

    class ResolveModeFlags {
        static $gtype: GObject.GType<ResolveModeFlags>;
    }

    class DescriptorBindingFlagBits {
        static $gtype: GObject.GType<DescriptorBindingFlagBits>;
    }

    class DescriptorBindingFlags {
        static $gtype: GObject.GType<DescriptorBindingFlags>;
    }

    class SemaphoreWaitFlagBits {
        static $gtype: GObject.GType<SemaphoreWaitFlagBits>;
    }

    class SemaphoreWaitFlags {
        static $gtype: GObject.GType<SemaphoreWaitFlags>;
    }

    class PhysicalDeviceVulkan11Features {
        static $gtype: GObject.GType<PhysicalDeviceVulkan11Features>;
    }

    class PhysicalDeviceVulkan11Properties {
        static $gtype: GObject.GType<PhysicalDeviceVulkan11Properties>;
    }

    class PhysicalDeviceVulkan12Features {
        static $gtype: GObject.GType<PhysicalDeviceVulkan12Features>;
    }

    class ConformanceVersion {
        static $gtype: GObject.GType<ConformanceVersion>;
    }

    class PhysicalDeviceVulkan12Properties {
        static $gtype: GObject.GType<PhysicalDeviceVulkan12Properties>;
    }

    class ImageFormatListCreateInfo {
        static $gtype: GObject.GType<ImageFormatListCreateInfo>;
    }

    class AttachmentDescription2 {
        static $gtype: GObject.GType<AttachmentDescription2>;
    }

    class AttachmentReference2 {
        static $gtype: GObject.GType<AttachmentReference2>;
    }

    class SubpassDescription2 {
        static $gtype: GObject.GType<SubpassDescription2>;
    }

    class SubpassDependency2 {
        static $gtype: GObject.GType<SubpassDependency2>;
    }

    class RenderPassCreateInfo2 {
        static $gtype: GObject.GType<RenderPassCreateInfo2>;
    }

    class SubpassBeginInfo {
        static $gtype: GObject.GType<SubpassBeginInfo>;
    }

    class SubpassEndInfo {
        static $gtype: GObject.GType<SubpassEndInfo>;
    }

    class PhysicalDevice8BitStorageFeatures {
        static $gtype: GObject.GType<PhysicalDevice8BitStorageFeatures>;
    }

    class PhysicalDeviceDriverProperties {
        static $gtype: GObject.GType<PhysicalDeviceDriverProperties>;
    }

    class PhysicalDeviceShaderAtomicInt64Features {
        static $gtype: GObject.GType<PhysicalDeviceShaderAtomicInt64Features>;
    }

    class PhysicalDeviceShaderFloat16Int8Features {
        static $gtype: GObject.GType<PhysicalDeviceShaderFloat16Int8Features>;
    }

    class PhysicalDeviceFloatControlsProperties {
        static $gtype: GObject.GType<PhysicalDeviceFloatControlsProperties>;
    }

    class DescriptorSetLayoutBindingFlagsCreateInfo {
        static $gtype: GObject.GType<DescriptorSetLayoutBindingFlagsCreateInfo>;
    }

    class PhysicalDeviceDescriptorIndexingFeatures {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorIndexingFeatures>;
    }

    class PhysicalDeviceDescriptorIndexingProperties {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorIndexingProperties>;
    }

    class DescriptorSetVariableDescriptorCountAllocateInfo {
        static $gtype: GObject.GType<DescriptorSetVariableDescriptorCountAllocateInfo>;
    }

    class DescriptorSetVariableDescriptorCountLayoutSupport {
        static $gtype: GObject.GType<DescriptorSetVariableDescriptorCountLayoutSupport>;
    }

    class SubpassDescriptionDepthStencilResolve {
        static $gtype: GObject.GType<SubpassDescriptionDepthStencilResolve>;
    }

    class PhysicalDeviceDepthStencilResolveProperties {
        static $gtype: GObject.GType<PhysicalDeviceDepthStencilResolveProperties>;
    }

    class PhysicalDeviceScalarBlockLayoutFeatures {
        static $gtype: GObject.GType<PhysicalDeviceScalarBlockLayoutFeatures>;
    }

    class ImageStencilUsageCreateInfo {
        static $gtype: GObject.GType<ImageStencilUsageCreateInfo>;
    }

    class SamplerReductionModeCreateInfo {
        static $gtype: GObject.GType<SamplerReductionModeCreateInfo>;
    }

    class PhysicalDeviceSamplerFilterMinmaxProperties {
        static $gtype: GObject.GType<PhysicalDeviceSamplerFilterMinmaxProperties>;
    }

    class PhysicalDeviceVulkanMemoryModelFeatures {
        static $gtype: GObject.GType<PhysicalDeviceVulkanMemoryModelFeatures>;
    }

    class PhysicalDeviceImagelessFramebufferFeatures {
        static $gtype: GObject.GType<PhysicalDeviceImagelessFramebufferFeatures>;
    }

    class FramebufferAttachmentImageInfo {
        static $gtype: GObject.GType<FramebufferAttachmentImageInfo>;
    }

    class FramebufferAttachmentsCreateInfo {
        static $gtype: GObject.GType<FramebufferAttachmentsCreateInfo>;
    }

    class RenderPassAttachmentBeginInfo {
        static $gtype: GObject.GType<RenderPassAttachmentBeginInfo>;
    }

    class PhysicalDeviceUniformBufferStandardLayoutFeatures {
        static $gtype: GObject.GType<PhysicalDeviceUniformBufferStandardLayoutFeatures>;
    }

    class PhysicalDeviceShaderSubgroupExtendedTypesFeatures {
        static $gtype: GObject.GType<PhysicalDeviceShaderSubgroupExtendedTypesFeatures>;
    }

    class PhysicalDeviceSeparateDepthStencilLayoutsFeatures {
        static $gtype: GObject.GType<PhysicalDeviceSeparateDepthStencilLayoutsFeatures>;
    }

    class AttachmentReferenceStencilLayout {
        static $gtype: GObject.GType<AttachmentReferenceStencilLayout>;
    }

    class AttachmentDescriptionStencilLayout {
        static $gtype: GObject.GType<AttachmentDescriptionStencilLayout>;
    }

    class PhysicalDeviceHostQueryResetFeatures {
        static $gtype: GObject.GType<PhysicalDeviceHostQueryResetFeatures>;
    }

    class PhysicalDeviceTimelineSemaphoreFeatures {
        static $gtype: GObject.GType<PhysicalDeviceTimelineSemaphoreFeatures>;
    }

    class PhysicalDeviceTimelineSemaphoreProperties {
        static $gtype: GObject.GType<PhysicalDeviceTimelineSemaphoreProperties>;
    }

    class SemaphoreTypeCreateInfo {
        static $gtype: GObject.GType<SemaphoreTypeCreateInfo>;
    }

    class TimelineSemaphoreSubmitInfo {
        static $gtype: GObject.GType<TimelineSemaphoreSubmitInfo>;
    }

    class SemaphoreWaitInfo {
        static $gtype: GObject.GType<SemaphoreWaitInfo>;
    }

    class SemaphoreSignalInfo {
        static $gtype: GObject.GType<SemaphoreSignalInfo>;
    }

    class PhysicalDeviceBufferDeviceAddressFeatures {
        static $gtype: GObject.GType<PhysicalDeviceBufferDeviceAddressFeatures>;
    }

    class BufferDeviceAddressInfo {
        static $gtype: GObject.GType<BufferDeviceAddressInfo>;
    }

    class BufferOpaqueCaptureAddressCreateInfo {
        static $gtype: GObject.GType<BufferOpaqueCaptureAddressCreateInfo>;
    }

    class MemoryOpaqueCaptureAddressAllocateInfo {
        static $gtype: GObject.GType<MemoryOpaqueCaptureAddressAllocateInfo>;
    }

    class DeviceMemoryOpaqueCaptureAddressInfo {
        static $gtype: GObject.GType<DeviceMemoryOpaqueCaptureAddressInfo>;
    }

    class Flags64 {
        static $gtype: GObject.GType<Flags64>;
    }

    class PrivateDataSlot {
        static $gtype: GObject.GType<PrivateDataSlot>;
    }

    class PipelineCreationFeedbackFlagBits {
        static $gtype: GObject.GType<PipelineCreationFeedbackFlagBits>;
    }

    class PipelineCreationFeedbackFlags {
        static $gtype: GObject.GType<PipelineCreationFeedbackFlags>;
    }

    class ToolPurposeFlagBits {
        static $gtype: GObject.GType<ToolPurposeFlagBits>;
    }

    class ToolPurposeFlags {
        static $gtype: GObject.GType<ToolPurposeFlags>;
    }

    class PrivateDataSlotCreateFlags {
        static $gtype: GObject.GType<PrivateDataSlotCreateFlags>;
    }

    class PipelineStageFlags2 {
        static $gtype: GObject.GType<PipelineStageFlags2>;
    }

    class PipelineStageFlagBits2 {
        static $gtype: GObject.GType<PipelineStageFlagBits2>;
    }

    class AccessFlags2 {
        static $gtype: GObject.GType<AccessFlags2>;
    }

    class AccessFlagBits2 {
        static $gtype: GObject.GType<AccessFlagBits2>;
    }

    class SubmitFlagBits {
        static $gtype: GObject.GType<SubmitFlagBits>;
    }

    class SubmitFlags {
        static $gtype: GObject.GType<SubmitFlags>;
    }

    class RenderingFlagBits {
        static $gtype: GObject.GType<RenderingFlagBits>;
    }

    class RenderingFlags {
        static $gtype: GObject.GType<RenderingFlags>;
    }

    class FormatFeatureFlags2 {
        static $gtype: GObject.GType<FormatFeatureFlags2>;
    }

    class FormatFeatureFlagBits2 {
        static $gtype: GObject.GType<FormatFeatureFlagBits2>;
    }

    class PhysicalDeviceVulkan13Features {
        static $gtype: GObject.GType<PhysicalDeviceVulkan13Features>;
    }

    class PhysicalDeviceVulkan13Properties {
        static $gtype: GObject.GType<PhysicalDeviceVulkan13Properties>;
    }

    class PipelineCreationFeedback {
        static $gtype: GObject.GType<PipelineCreationFeedback>;
    }

    class PipelineCreationFeedbackCreateInfo {
        static $gtype: GObject.GType<PipelineCreationFeedbackCreateInfo>;
    }

    class PhysicalDeviceShaderTerminateInvocationFeatures {
        static $gtype: GObject.GType<PhysicalDeviceShaderTerminateInvocationFeatures>;
    }

    class PhysicalDeviceToolProperties {
        static $gtype: GObject.GType<PhysicalDeviceToolProperties>;
    }

    class PhysicalDeviceShaderDemoteToHelperInvocationFeatures {
        static $gtype: GObject.GType<PhysicalDeviceShaderDemoteToHelperInvocationFeatures>;
    }

    class PhysicalDevicePrivateDataFeatures {
        static $gtype: GObject.GType<PhysicalDevicePrivateDataFeatures>;
    }

    class DevicePrivateDataCreateInfo {
        static $gtype: GObject.GType<DevicePrivateDataCreateInfo>;
    }

    class PrivateDataSlotCreateInfo {
        static $gtype: GObject.GType<PrivateDataSlotCreateInfo>;
    }

    class PhysicalDevicePipelineCreationCacheControlFeatures {
        static $gtype: GObject.GType<PhysicalDevicePipelineCreationCacheControlFeatures>;
    }

    class MemoryBarrier2 {
        static $gtype: GObject.GType<MemoryBarrier2>;
    }

    class BufferMemoryBarrier2 {
        static $gtype: GObject.GType<BufferMemoryBarrier2>;
    }

    class ImageMemoryBarrier2 {
        static $gtype: GObject.GType<ImageMemoryBarrier2>;
    }

    class DependencyInfo {
        static $gtype: GObject.GType<DependencyInfo>;
    }

    class SemaphoreSubmitInfo {
        static $gtype: GObject.GType<SemaphoreSubmitInfo>;
    }

    class CommandBufferSubmitInfo {
        static $gtype: GObject.GType<CommandBufferSubmitInfo>;
    }

    class SubmitInfo2 {
        static $gtype: GObject.GType<SubmitInfo2>;
    }

    class PhysicalDeviceSynchronization2Features {
        static $gtype: GObject.GType<PhysicalDeviceSynchronization2Features>;
    }

    class PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures {
        static $gtype: GObject.GType<PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures>;
    }

    class PhysicalDeviceImageRobustnessFeatures {
        static $gtype: GObject.GType<PhysicalDeviceImageRobustnessFeatures>;
    }

    class BufferCopy2 {
        static $gtype: GObject.GType<BufferCopy2>;
    }

    class CopyBufferInfo2 {
        static $gtype: GObject.GType<CopyBufferInfo2>;
    }

    class ImageCopy2 {
        static $gtype: GObject.GType<ImageCopy2>;
    }

    class CopyImageInfo2 {
        static $gtype: GObject.GType<CopyImageInfo2>;
    }

    class BufferImageCopy2 {
        static $gtype: GObject.GType<BufferImageCopy2>;
    }

    class CopyBufferToImageInfo2 {
        static $gtype: GObject.GType<CopyBufferToImageInfo2>;
    }

    class CopyImageToBufferInfo2 {
        static $gtype: GObject.GType<CopyImageToBufferInfo2>;
    }

    class ImageBlit2 {
        static $gtype: GObject.GType<ImageBlit2>;
    }

    class BlitImageInfo2 {
        static $gtype: GObject.GType<BlitImageInfo2>;
    }

    class ImageResolve2 {
        static $gtype: GObject.GType<ImageResolve2>;
    }

    class ResolveImageInfo2 {
        static $gtype: GObject.GType<ResolveImageInfo2>;
    }

    class PhysicalDeviceSubgroupSizeControlFeatures {
        static $gtype: GObject.GType<PhysicalDeviceSubgroupSizeControlFeatures>;
    }

    class PhysicalDeviceSubgroupSizeControlProperties {
        static $gtype: GObject.GType<PhysicalDeviceSubgroupSizeControlProperties>;
    }

    class PipelineShaderStageRequiredSubgroupSizeCreateInfo {
        static $gtype: GObject.GType<PipelineShaderStageRequiredSubgroupSizeCreateInfo>;
    }

    class PhysicalDeviceInlineUniformBlockFeatures {
        static $gtype: GObject.GType<PhysicalDeviceInlineUniformBlockFeatures>;
    }

    class PhysicalDeviceInlineUniformBlockProperties {
        static $gtype: GObject.GType<PhysicalDeviceInlineUniformBlockProperties>;
    }

    class WriteDescriptorSetInlineUniformBlock {
        static $gtype: GObject.GType<WriteDescriptorSetInlineUniformBlock>;
    }

    class DescriptorPoolInlineUniformBlockCreateInfo {
        static $gtype: GObject.GType<DescriptorPoolInlineUniformBlockCreateInfo>;
    }

    class PhysicalDeviceTextureCompressionASTCHDRFeatures {
        static $gtype: GObject.GType<PhysicalDeviceTextureCompressionASTCHDRFeatures>;
    }

    class RenderingAttachmentInfo {
        static $gtype: GObject.GType<RenderingAttachmentInfo>;
    }

    class RenderingInfo {
        static $gtype: GObject.GType<RenderingInfo>;
    }

    class PipelineRenderingCreateInfo {
        static $gtype: GObject.GType<PipelineRenderingCreateInfo>;
    }

    class PhysicalDeviceDynamicRenderingFeatures {
        static $gtype: GObject.GType<PhysicalDeviceDynamicRenderingFeatures>;
    }

    class CommandBufferInheritanceRenderingInfo {
        static $gtype: GObject.GType<CommandBufferInheritanceRenderingInfo>;
    }

    class PhysicalDeviceShaderIntegerDotProductFeatures {
        static $gtype: GObject.GType<PhysicalDeviceShaderIntegerDotProductFeatures>;
    }

    class PhysicalDeviceShaderIntegerDotProductProperties {
        static $gtype: GObject.GType<PhysicalDeviceShaderIntegerDotProductProperties>;
    }

    class PhysicalDeviceTexelBufferAlignmentProperties {
        static $gtype: GObject.GType<PhysicalDeviceTexelBufferAlignmentProperties>;
    }

    class FormatProperties3 {
        static $gtype: GObject.GType<FormatProperties3>;
    }

    class PhysicalDeviceMaintenance4Features {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance4Features>;
    }

    class PhysicalDeviceMaintenance4Properties {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance4Properties>;
    }

    class DeviceBufferMemoryRequirements {
        static $gtype: GObject.GType<DeviceBufferMemoryRequirements>;
    }

    class DeviceImageMemoryRequirements {
        static $gtype: GObject.GType<DeviceImageMemoryRequirements>;
    }

    class SurfaceKHR {
        static $gtype: GObject.GType<SurfaceKHR>;
    }

    class PresentModeKHR {
        static $gtype: GObject.GType<PresentModeKHR>;
    }

    class ColorSpaceKHR {
        static $gtype: GObject.GType<ColorSpaceKHR>;
    }

    class SurfaceTransformFlagBitsKHR {
        static $gtype: GObject.GType<SurfaceTransformFlagBitsKHR>;
    }

    class CompositeAlphaFlagBitsKHR {
        static $gtype: GObject.GType<CompositeAlphaFlagBitsKHR>;
    }

    class CompositeAlphaFlagsKHR {
        static $gtype: GObject.GType<CompositeAlphaFlagsKHR>;
    }

    class SurfaceTransformFlagsKHR {
        static $gtype: GObject.GType<SurfaceTransformFlagsKHR>;
    }

    class SurfaceCapabilitiesKHR {
        static $gtype: GObject.GType<SurfaceCapabilitiesKHR>;
    }

    class SurfaceFormatKHR {
        static $gtype: GObject.GType<SurfaceFormatKHR>;
    }

    class SwapchainKHR {
        static $gtype: GObject.GType<SwapchainKHR>;
    }

    class SwapchainCreateFlagBitsKHR {
        static $gtype: GObject.GType<SwapchainCreateFlagBitsKHR>;
    }

    class SwapchainCreateFlagsKHR {
        static $gtype: GObject.GType<SwapchainCreateFlagsKHR>;
    }

    class DeviceGroupPresentModeFlagBitsKHR {
        static $gtype: GObject.GType<DeviceGroupPresentModeFlagBitsKHR>;
    }

    class DeviceGroupPresentModeFlagsKHR {
        static $gtype: GObject.GType<DeviceGroupPresentModeFlagsKHR>;
    }

    class SwapchainCreateInfoKHR {
        static $gtype: GObject.GType<SwapchainCreateInfoKHR>;
    }

    class PresentInfoKHR {
        static $gtype: GObject.GType<PresentInfoKHR>;
    }

    class ImageSwapchainCreateInfoKHR {
        static $gtype: GObject.GType<ImageSwapchainCreateInfoKHR>;
    }

    class BindImageMemorySwapchainInfoKHR {
        static $gtype: GObject.GType<BindImageMemorySwapchainInfoKHR>;
    }

    class AcquireNextImageInfoKHR {
        static $gtype: GObject.GType<AcquireNextImageInfoKHR>;
    }

    class DeviceGroupPresentCapabilitiesKHR {
        static $gtype: GObject.GType<DeviceGroupPresentCapabilitiesKHR>;
    }

    class DeviceGroupPresentInfoKHR {
        static $gtype: GObject.GType<DeviceGroupPresentInfoKHR>;
    }

    class DeviceGroupSwapchainCreateInfoKHR {
        static $gtype: GObject.GType<DeviceGroupSwapchainCreateInfoKHR>;
    }

    class DisplayKHR {
        static $gtype: GObject.GType<DisplayKHR>;
    }

    class DisplayModeKHR {
        static $gtype: GObject.GType<DisplayModeKHR>;
    }

    class DisplayModeCreateFlagsKHR {
        static $gtype: GObject.GType<DisplayModeCreateFlagsKHR>;
    }

    class DisplayPlaneAlphaFlagBitsKHR {
        static $gtype: GObject.GType<DisplayPlaneAlphaFlagBitsKHR>;
    }

    class DisplayPlaneAlphaFlagsKHR {
        static $gtype: GObject.GType<DisplayPlaneAlphaFlagsKHR>;
    }

    class DisplaySurfaceCreateFlagsKHR {
        static $gtype: GObject.GType<DisplaySurfaceCreateFlagsKHR>;
    }

    class DisplayModeParametersKHR {
        static $gtype: GObject.GType<DisplayModeParametersKHR>;
    }

    class DisplayModeCreateInfoKHR {
        static $gtype: GObject.GType<DisplayModeCreateInfoKHR>;
    }

    class DisplayModePropertiesKHR {
        static $gtype: GObject.GType<DisplayModePropertiesKHR>;
    }

    class DisplayPlaneCapabilitiesKHR {
        static $gtype: GObject.GType<DisplayPlaneCapabilitiesKHR>;
    }

    class DisplayPlanePropertiesKHR {
        static $gtype: GObject.GType<DisplayPlanePropertiesKHR>;
    }

    class DisplayPropertiesKHR {
        static $gtype: GObject.GType<DisplayPropertiesKHR>;
    }

    class DisplaySurfaceCreateInfoKHR {
        static $gtype: GObject.GType<DisplaySurfaceCreateInfoKHR>;
    }

    class DisplayPresentInfoKHR {
        static $gtype: GObject.GType<DisplayPresentInfoKHR>;
    }

    class VideoSessionKHR {
        static $gtype: GObject.GType<VideoSessionKHR>;
    }

    class VideoSessionParametersKHR {
        static $gtype: GObject.GType<VideoSessionParametersKHR>;
    }

    class QueryResultStatusKHR {
        static $gtype: GObject.GType<QueryResultStatusKHR>;
    }

    class VideoCodecOperationFlagBitsKHR {
        static $gtype: GObject.GType<VideoCodecOperationFlagBitsKHR>;
    }

    class VideoCodecOperationFlagsKHR {
        static $gtype: GObject.GType<VideoCodecOperationFlagsKHR>;
    }

    class VideoChromaSubsamplingFlagBitsKHR {
        static $gtype: GObject.GType<VideoChromaSubsamplingFlagBitsKHR>;
    }

    class VideoChromaSubsamplingFlagsKHR {
        static $gtype: GObject.GType<VideoChromaSubsamplingFlagsKHR>;
    }

    class VideoComponentBitDepthFlagBitsKHR {
        static $gtype: GObject.GType<VideoComponentBitDepthFlagBitsKHR>;
    }

    class VideoComponentBitDepthFlagsKHR {
        static $gtype: GObject.GType<VideoComponentBitDepthFlagsKHR>;
    }

    class VideoCapabilityFlagBitsKHR {
        static $gtype: GObject.GType<VideoCapabilityFlagBitsKHR>;
    }

    class VideoCapabilityFlagsKHR {
        static $gtype: GObject.GType<VideoCapabilityFlagsKHR>;
    }

    class VideoSessionCreateFlagBitsKHR {
        static $gtype: GObject.GType<VideoSessionCreateFlagBitsKHR>;
    }

    class VideoSessionCreateFlagsKHR {
        static $gtype: GObject.GType<VideoSessionCreateFlagsKHR>;
    }

    class VideoSessionParametersCreateFlagsKHR {
        static $gtype: GObject.GType<VideoSessionParametersCreateFlagsKHR>;
    }

    class VideoBeginCodingFlagsKHR {
        static $gtype: GObject.GType<VideoBeginCodingFlagsKHR>;
    }

    class VideoEndCodingFlagsKHR {
        static $gtype: GObject.GType<VideoEndCodingFlagsKHR>;
    }

    class VideoCodingControlFlagBitsKHR {
        static $gtype: GObject.GType<VideoCodingControlFlagBitsKHR>;
    }

    class VideoCodingControlFlagsKHR {
        static $gtype: GObject.GType<VideoCodingControlFlagsKHR>;
    }

    class QueueFamilyQueryResultStatusPropertiesKHR {
        static $gtype: GObject.GType<QueueFamilyQueryResultStatusPropertiesKHR>;
    }

    class QueueFamilyVideoPropertiesKHR {
        static $gtype: GObject.GType<QueueFamilyVideoPropertiesKHR>;
    }

    class VideoProfileInfoKHR {
        static $gtype: GObject.GType<VideoProfileInfoKHR>;
    }

    class VideoProfileListInfoKHR {
        static $gtype: GObject.GType<VideoProfileListInfoKHR>;
    }

    class VideoCapabilitiesKHR {
        static $gtype: GObject.GType<VideoCapabilitiesKHR>;
    }

    class PhysicalDeviceVideoFormatInfoKHR {
        static $gtype: GObject.GType<PhysicalDeviceVideoFormatInfoKHR>;
    }

    class VideoFormatPropertiesKHR {
        static $gtype: GObject.GType<VideoFormatPropertiesKHR>;
    }

    class VideoPictureResourceInfoKHR {
        static $gtype: GObject.GType<VideoPictureResourceInfoKHR>;
    }

    class VideoReferenceSlotInfoKHR {
        static $gtype: GObject.GType<VideoReferenceSlotInfoKHR>;
    }

    class VideoSessionMemoryRequirementsKHR {
        static $gtype: GObject.GType<VideoSessionMemoryRequirementsKHR>;
    }

    class BindVideoSessionMemoryInfoKHR {
        static $gtype: GObject.GType<BindVideoSessionMemoryInfoKHR>;
    }

    class VideoSessionCreateInfoKHR {
        static $gtype: GObject.GType<VideoSessionCreateInfoKHR>;
    }

    class VideoSessionParametersCreateInfoKHR {
        static $gtype: GObject.GType<VideoSessionParametersCreateInfoKHR>;
    }

    class VideoSessionParametersUpdateInfoKHR {
        static $gtype: GObject.GType<VideoSessionParametersUpdateInfoKHR>;
    }

    class VideoBeginCodingInfoKHR {
        static $gtype: GObject.GType<VideoBeginCodingInfoKHR>;
    }

    class VideoEndCodingInfoKHR {
        static $gtype: GObject.GType<VideoEndCodingInfoKHR>;
    }

    class VideoCodingControlInfoKHR {
        static $gtype: GObject.GType<VideoCodingControlInfoKHR>;
    }

    class VideoDecodeCapabilityFlagBitsKHR {
        static $gtype: GObject.GType<VideoDecodeCapabilityFlagBitsKHR>;
    }

    class VideoDecodeCapabilityFlagsKHR {
        static $gtype: GObject.GType<VideoDecodeCapabilityFlagsKHR>;
    }

    class VideoDecodeUsageFlagBitsKHR {
        static $gtype: GObject.GType<VideoDecodeUsageFlagBitsKHR>;
    }

    class VideoDecodeUsageFlagsKHR {
        static $gtype: GObject.GType<VideoDecodeUsageFlagsKHR>;
    }

    class VideoDecodeFlagsKHR {
        static $gtype: GObject.GType<VideoDecodeFlagsKHR>;
    }

    class VideoDecodeCapabilitiesKHR {
        static $gtype: GObject.GType<VideoDecodeCapabilitiesKHR>;
    }

    class VideoDecodeUsageInfoKHR {
        static $gtype: GObject.GType<VideoDecodeUsageInfoKHR>;
    }

    class VideoDecodeInfoKHR {
        static $gtype: GObject.GType<VideoDecodeInfoKHR>;
    }

    class VideoEncodeH264CapabilityFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH264CapabilityFlagBitsKHR>;
    }

    class VideoEncodeH264CapabilityFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH264CapabilityFlagsKHR>;
    }

    class VideoEncodeH264StdFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH264StdFlagBitsKHR>;
    }

    class VideoEncodeH264StdFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH264StdFlagsKHR>;
    }

    class VideoEncodeH264RateControlFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH264RateControlFlagBitsKHR>;
    }

    class VideoEncodeH264RateControlFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH264RateControlFlagsKHR>;
    }

    class VideoEncodeH264CapabilitiesKHR {
        static $gtype: GObject.GType<VideoEncodeH264CapabilitiesKHR>;
    }

    class VideoEncodeH264QpKHR {
        static $gtype: GObject.GType<VideoEncodeH264QpKHR>;
    }

    class VideoEncodeH264QualityLevelPropertiesKHR {
        static $gtype: GObject.GType<VideoEncodeH264QualityLevelPropertiesKHR>;
    }

    class VideoEncodeH264SessionCreateInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264SessionCreateInfoKHR>;
    }

    class VideoEncodeH264SessionParametersAddInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264SessionParametersAddInfoKHR>;
    }

    class VideoEncodeH264SessionParametersCreateInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264SessionParametersCreateInfoKHR>;
    }

    class VideoEncodeH264SessionParametersGetInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264SessionParametersGetInfoKHR>;
    }

    class VideoEncodeH264SessionParametersFeedbackInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264SessionParametersFeedbackInfoKHR>;
    }

    class VideoEncodeH264NaluSliceInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264NaluSliceInfoKHR>;
    }

    class VideoEncodeH264PictureInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264PictureInfoKHR>;
    }

    class VideoEncodeH264DpbSlotInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264DpbSlotInfoKHR>;
    }

    class VideoEncodeH264ProfileInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264ProfileInfoKHR>;
    }

    class VideoEncodeH264RateControlInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264RateControlInfoKHR>;
    }

    class VideoEncodeH264FrameSizeKHR {
        static $gtype: GObject.GType<VideoEncodeH264FrameSizeKHR>;
    }

    class VideoEncodeH264RateControlLayerInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264RateControlLayerInfoKHR>;
    }

    class VideoEncodeH264GopRemainingFrameInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH264GopRemainingFrameInfoKHR>;
    }

    class VideoEncodeH265CapabilityFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH265CapabilityFlagBitsKHR>;
    }

    class VideoEncodeH265CapabilityFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH265CapabilityFlagsKHR>;
    }

    class VideoEncodeH265StdFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH265StdFlagBitsKHR>;
    }

    class VideoEncodeH265StdFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH265StdFlagsKHR>;
    }

    class VideoEncodeH265CtbSizeFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH265CtbSizeFlagBitsKHR>;
    }

    class VideoEncodeH265CtbSizeFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH265CtbSizeFlagsKHR>;
    }

    class VideoEncodeH265TransformBlockSizeFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH265TransformBlockSizeFlagBitsKHR>;
    }

    class VideoEncodeH265TransformBlockSizeFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH265TransformBlockSizeFlagsKHR>;
    }

    class VideoEncodeH265RateControlFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeH265RateControlFlagBitsKHR>;
    }

    class VideoEncodeH265RateControlFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeH265RateControlFlagsKHR>;
    }

    class VideoEncodeH265CapabilitiesKHR {
        static $gtype: GObject.GType<VideoEncodeH265CapabilitiesKHR>;
    }

    class VideoEncodeH265SessionCreateInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265SessionCreateInfoKHR>;
    }

    class VideoEncodeH265QpKHR {
        static $gtype: GObject.GType<VideoEncodeH265QpKHR>;
    }

    class VideoEncodeH265QualityLevelPropertiesKHR {
        static $gtype: GObject.GType<VideoEncodeH265QualityLevelPropertiesKHR>;
    }

    class VideoEncodeH265SessionParametersAddInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265SessionParametersAddInfoKHR>;
    }

    class VideoEncodeH265SessionParametersCreateInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265SessionParametersCreateInfoKHR>;
    }

    class VideoEncodeH265SessionParametersGetInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265SessionParametersGetInfoKHR>;
    }

    class VideoEncodeH265SessionParametersFeedbackInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265SessionParametersFeedbackInfoKHR>;
    }

    class VideoEncodeH265NaluSliceSegmentInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265NaluSliceSegmentInfoKHR>;
    }

    class VideoEncodeH265PictureInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265PictureInfoKHR>;
    }

    class VideoEncodeH265DpbSlotInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265DpbSlotInfoKHR>;
    }

    class VideoEncodeH265ProfileInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265ProfileInfoKHR>;
    }

    class VideoEncodeH265RateControlInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265RateControlInfoKHR>;
    }

    class VideoEncodeH265FrameSizeKHR {
        static $gtype: GObject.GType<VideoEncodeH265FrameSizeKHR>;
    }

    class VideoEncodeH265RateControlLayerInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265RateControlLayerInfoKHR>;
    }

    class VideoEncodeH265GopRemainingFrameInfoKHR {
        static $gtype: GObject.GType<VideoEncodeH265GopRemainingFrameInfoKHR>;
    }

    class VideoDecodeH264PictureLayoutFlagBitsKHR {
        static $gtype: GObject.GType<VideoDecodeH264PictureLayoutFlagBitsKHR>;
    }

    class VideoDecodeH264PictureLayoutFlagsKHR {
        static $gtype: GObject.GType<VideoDecodeH264PictureLayoutFlagsKHR>;
    }

    class VideoDecodeH264ProfileInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH264ProfileInfoKHR>;
    }

    class VideoDecodeH264CapabilitiesKHR {
        static $gtype: GObject.GType<VideoDecodeH264CapabilitiesKHR>;
    }

    class VideoDecodeH264SessionParametersAddInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH264SessionParametersAddInfoKHR>;
    }

    class VideoDecodeH264SessionParametersCreateInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH264SessionParametersCreateInfoKHR>;
    }

    class VideoDecodeH264PictureInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH264PictureInfoKHR>;
    }

    class VideoDecodeH264DpbSlotInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH264DpbSlotInfoKHR>;
    }

    class RenderingFlagsKHR {
        static $gtype: GObject.GType<RenderingFlagsKHR>;
    }

    class RenderingFlagBitsKHR {
        static $gtype: GObject.GType<RenderingFlagBitsKHR>;
    }

    class RenderingInfoKHR {
        static $gtype: GObject.GType<RenderingInfoKHR>;
    }

    class RenderingAttachmentInfoKHR {
        static $gtype: GObject.GType<RenderingAttachmentInfoKHR>;
    }

    class PipelineRenderingCreateInfoKHR {
        static $gtype: GObject.GType<PipelineRenderingCreateInfoKHR>;
    }

    class PhysicalDeviceDynamicRenderingFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceDynamicRenderingFeaturesKHR>;
    }

    class CommandBufferInheritanceRenderingInfoKHR {
        static $gtype: GObject.GType<CommandBufferInheritanceRenderingInfoKHR>;
    }

    class RenderingFragmentShadingRateAttachmentInfoKHR {
        static $gtype: GObject.GType<RenderingFragmentShadingRateAttachmentInfoKHR>;
    }

    class RenderingFragmentDensityMapAttachmentInfoEXT {
        static $gtype: GObject.GType<RenderingFragmentDensityMapAttachmentInfoEXT>;
    }

    class AttachmentSampleCountInfoAMD {
        static $gtype: GObject.GType<AttachmentSampleCountInfoAMD>;
    }

    class AttachmentSampleCountInfoNV {
        static $gtype: GObject.GType<AttachmentSampleCountInfoNV>;
    }

    class MultiviewPerViewAttributesInfoNVX {
        static $gtype: GObject.GType<MultiviewPerViewAttributesInfoNVX>;
    }

    class RenderPassMultiviewCreateInfoKHR {
        static $gtype: GObject.GType<RenderPassMultiviewCreateInfoKHR>;
    }

    class PhysicalDeviceMultiviewFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewFeaturesKHR>;
    }

    class PhysicalDeviceMultiviewPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewPropertiesKHR>;
    }

    class PhysicalDeviceFeatures2KHR {
        static $gtype: GObject.GType<PhysicalDeviceFeatures2KHR>;
    }

    class PhysicalDeviceProperties2KHR {
        static $gtype: GObject.GType<PhysicalDeviceProperties2KHR>;
    }

    class FormatProperties2KHR {
        static $gtype: GObject.GType<FormatProperties2KHR>;
    }

    class ImageFormatProperties2KHR {
        static $gtype: GObject.GType<ImageFormatProperties2KHR>;
    }

    class PhysicalDeviceImageFormatInfo2KHR {
        static $gtype: GObject.GType<PhysicalDeviceImageFormatInfo2KHR>;
    }

    class QueueFamilyProperties2KHR {
        static $gtype: GObject.GType<QueueFamilyProperties2KHR>;
    }

    class PhysicalDeviceMemoryProperties2KHR {
        static $gtype: GObject.GType<PhysicalDeviceMemoryProperties2KHR>;
    }

    class SparseImageFormatProperties2KHR {
        static $gtype: GObject.GType<SparseImageFormatProperties2KHR>;
    }

    class PhysicalDeviceSparseImageFormatInfo2KHR {
        static $gtype: GObject.GType<PhysicalDeviceSparseImageFormatInfo2KHR>;
    }

    class PeerMemoryFeatureFlagsKHR {
        static $gtype: GObject.GType<PeerMemoryFeatureFlagsKHR>;
    }

    class PeerMemoryFeatureFlagBitsKHR {
        static $gtype: GObject.GType<PeerMemoryFeatureFlagBitsKHR>;
    }

    class MemoryAllocateFlagsKHR {
        static $gtype: GObject.GType<MemoryAllocateFlagsKHR>;
    }

    class MemoryAllocateFlagBitsKHR {
        static $gtype: GObject.GType<MemoryAllocateFlagBitsKHR>;
    }

    class MemoryAllocateFlagsInfoKHR {
        static $gtype: GObject.GType<MemoryAllocateFlagsInfoKHR>;
    }

    class DeviceGroupRenderPassBeginInfoKHR {
        static $gtype: GObject.GType<DeviceGroupRenderPassBeginInfoKHR>;
    }

    class DeviceGroupCommandBufferBeginInfoKHR {
        static $gtype: GObject.GType<DeviceGroupCommandBufferBeginInfoKHR>;
    }

    class DeviceGroupSubmitInfoKHR {
        static $gtype: GObject.GType<DeviceGroupSubmitInfoKHR>;
    }

    class DeviceGroupBindSparseInfoKHR {
        static $gtype: GObject.GType<DeviceGroupBindSparseInfoKHR>;
    }

    class BindBufferMemoryDeviceGroupInfoKHR {
        static $gtype: GObject.GType<BindBufferMemoryDeviceGroupInfoKHR>;
    }

    class BindImageMemoryDeviceGroupInfoKHR {
        static $gtype: GObject.GType<BindImageMemoryDeviceGroupInfoKHR>;
    }

    class CommandPoolTrimFlagsKHR {
        static $gtype: GObject.GType<CommandPoolTrimFlagsKHR>;
    }

    class PhysicalDeviceGroupPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceGroupPropertiesKHR>;
    }

    class DeviceGroupDeviceCreateInfoKHR {
        static $gtype: GObject.GType<DeviceGroupDeviceCreateInfoKHR>;
    }

    class ExternalMemoryHandleTypeFlagsKHR {
        static $gtype: GObject.GType<ExternalMemoryHandleTypeFlagsKHR>;
    }

    class ExternalMemoryHandleTypeFlagBitsKHR {
        static $gtype: GObject.GType<ExternalMemoryHandleTypeFlagBitsKHR>;
    }

    class ExternalMemoryFeatureFlagsKHR {
        static $gtype: GObject.GType<ExternalMemoryFeatureFlagsKHR>;
    }

    class ExternalMemoryFeatureFlagBitsKHR {
        static $gtype: GObject.GType<ExternalMemoryFeatureFlagBitsKHR>;
    }

    class ExternalMemoryPropertiesKHR {
        static $gtype: GObject.GType<ExternalMemoryPropertiesKHR>;
    }

    class PhysicalDeviceExternalImageFormatInfoKHR {
        static $gtype: GObject.GType<PhysicalDeviceExternalImageFormatInfoKHR>;
    }

    class ExternalImageFormatPropertiesKHR {
        static $gtype: GObject.GType<ExternalImageFormatPropertiesKHR>;
    }

    class PhysicalDeviceExternalBufferInfoKHR {
        static $gtype: GObject.GType<PhysicalDeviceExternalBufferInfoKHR>;
    }

    class ExternalBufferPropertiesKHR {
        static $gtype: GObject.GType<ExternalBufferPropertiesKHR>;
    }

    class PhysicalDeviceIDPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceIDPropertiesKHR>;
    }

    class ExternalMemoryImageCreateInfoKHR {
        static $gtype: GObject.GType<ExternalMemoryImageCreateInfoKHR>;
    }

    class ExternalMemoryBufferCreateInfoKHR {
        static $gtype: GObject.GType<ExternalMemoryBufferCreateInfoKHR>;
    }

    class ExportMemoryAllocateInfoKHR {
        static $gtype: GObject.GType<ExportMemoryAllocateInfoKHR>;
    }

    class ImportMemoryFdInfoKHR {
        static $gtype: GObject.GType<ImportMemoryFdInfoKHR>;
    }

    class MemoryFdPropertiesKHR {
        static $gtype: GObject.GType<MemoryFdPropertiesKHR>;
    }

    class MemoryGetFdInfoKHR {
        static $gtype: GObject.GType<MemoryGetFdInfoKHR>;
    }

    class ExternalSemaphoreHandleTypeFlagsKHR {
        static $gtype: GObject.GType<ExternalSemaphoreHandleTypeFlagsKHR>;
    }

    class ExternalSemaphoreHandleTypeFlagBitsKHR {
        static $gtype: GObject.GType<ExternalSemaphoreHandleTypeFlagBitsKHR>;
    }

    class ExternalSemaphoreFeatureFlagsKHR {
        static $gtype: GObject.GType<ExternalSemaphoreFeatureFlagsKHR>;
    }

    class ExternalSemaphoreFeatureFlagBitsKHR {
        static $gtype: GObject.GType<ExternalSemaphoreFeatureFlagBitsKHR>;
    }

    class PhysicalDeviceExternalSemaphoreInfoKHR {
        static $gtype: GObject.GType<PhysicalDeviceExternalSemaphoreInfoKHR>;
    }

    class ExternalSemaphorePropertiesKHR {
        static $gtype: GObject.GType<ExternalSemaphorePropertiesKHR>;
    }

    class SemaphoreImportFlagsKHR {
        static $gtype: GObject.GType<SemaphoreImportFlagsKHR>;
    }

    class SemaphoreImportFlagBitsKHR {
        static $gtype: GObject.GType<SemaphoreImportFlagBitsKHR>;
    }

    class ExportSemaphoreCreateInfoKHR {
        static $gtype: GObject.GType<ExportSemaphoreCreateInfoKHR>;
    }

    class ImportSemaphoreFdInfoKHR {
        static $gtype: GObject.GType<ImportSemaphoreFdInfoKHR>;
    }

    class SemaphoreGetFdInfoKHR {
        static $gtype: GObject.GType<SemaphoreGetFdInfoKHR>;
    }

    class PhysicalDevicePushDescriptorPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDevicePushDescriptorPropertiesKHR>;
    }

    class PhysicalDeviceShaderFloat16Int8FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderFloat16Int8FeaturesKHR>;
    }

    class PhysicalDeviceFloat16Int8FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceFloat16Int8FeaturesKHR>;
    }

    class PhysicalDevice16BitStorageFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDevice16BitStorageFeaturesKHR>;
    }

    class RectLayerKHR {
        static $gtype: GObject.GType<RectLayerKHR>;
    }

    class PresentRegionKHR {
        static $gtype: GObject.GType<PresentRegionKHR>;
    }

    class PresentRegionsKHR {
        static $gtype: GObject.GType<PresentRegionsKHR>;
    }

    class DescriptorUpdateTemplateKHR {
        static $gtype: GObject.GType<DescriptorUpdateTemplateKHR>;
    }

    class DescriptorUpdateTemplateTypeKHR {
        static $gtype: GObject.GType<DescriptorUpdateTemplateTypeKHR>;
    }

    class DescriptorUpdateTemplateCreateFlagsKHR {
        static $gtype: GObject.GType<DescriptorUpdateTemplateCreateFlagsKHR>;
    }

    class DescriptorUpdateTemplateEntryKHR {
        static $gtype: GObject.GType<DescriptorUpdateTemplateEntryKHR>;
    }

    class DescriptorUpdateTemplateCreateInfoKHR {
        static $gtype: GObject.GType<DescriptorUpdateTemplateCreateInfoKHR>;
    }

    class PhysicalDeviceImagelessFramebufferFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceImagelessFramebufferFeaturesKHR>;
    }

    class FramebufferAttachmentsCreateInfoKHR {
        static $gtype: GObject.GType<FramebufferAttachmentsCreateInfoKHR>;
    }

    class FramebufferAttachmentImageInfoKHR {
        static $gtype: GObject.GType<FramebufferAttachmentImageInfoKHR>;
    }

    class RenderPassAttachmentBeginInfoKHR {
        static $gtype: GObject.GType<RenderPassAttachmentBeginInfoKHR>;
    }

    class RenderPassCreateInfo2KHR {
        static $gtype: GObject.GType<RenderPassCreateInfo2KHR>;
    }

    class AttachmentDescription2KHR {
        static $gtype: GObject.GType<AttachmentDescription2KHR>;
    }

    class AttachmentReference2KHR {
        static $gtype: GObject.GType<AttachmentReference2KHR>;
    }

    class SubpassDescription2KHR {
        static $gtype: GObject.GType<SubpassDescription2KHR>;
    }

    class SubpassDependency2KHR {
        static $gtype: GObject.GType<SubpassDependency2KHR>;
    }

    class SubpassBeginInfoKHR {
        static $gtype: GObject.GType<SubpassBeginInfoKHR>;
    }

    class SubpassEndInfoKHR {
        static $gtype: GObject.GType<SubpassEndInfoKHR>;
    }

    class SharedPresentSurfaceCapabilitiesKHR {
        static $gtype: GObject.GType<SharedPresentSurfaceCapabilitiesKHR>;
    }

    class ExternalFenceHandleTypeFlagsKHR {
        static $gtype: GObject.GType<ExternalFenceHandleTypeFlagsKHR>;
    }

    class ExternalFenceHandleTypeFlagBitsKHR {
        static $gtype: GObject.GType<ExternalFenceHandleTypeFlagBitsKHR>;
    }

    class ExternalFenceFeatureFlagsKHR {
        static $gtype: GObject.GType<ExternalFenceFeatureFlagsKHR>;
    }

    class ExternalFenceFeatureFlagBitsKHR {
        static $gtype: GObject.GType<ExternalFenceFeatureFlagBitsKHR>;
    }

    class PhysicalDeviceExternalFenceInfoKHR {
        static $gtype: GObject.GType<PhysicalDeviceExternalFenceInfoKHR>;
    }

    class ExternalFencePropertiesKHR {
        static $gtype: GObject.GType<ExternalFencePropertiesKHR>;
    }

    class FenceImportFlagsKHR {
        static $gtype: GObject.GType<FenceImportFlagsKHR>;
    }

    class FenceImportFlagBitsKHR {
        static $gtype: GObject.GType<FenceImportFlagBitsKHR>;
    }

    class ExportFenceCreateInfoKHR {
        static $gtype: GObject.GType<ExportFenceCreateInfoKHR>;
    }

    class ImportFenceFdInfoKHR {
        static $gtype: GObject.GType<ImportFenceFdInfoKHR>;
    }

    class FenceGetFdInfoKHR {
        static $gtype: GObject.GType<FenceGetFdInfoKHR>;
    }

    class PerformanceCounterUnitKHR {
        static $gtype: GObject.GType<PerformanceCounterUnitKHR>;
    }

    class PerformanceCounterScopeKHR {
        static $gtype: GObject.GType<PerformanceCounterScopeKHR>;
    }

    class PerformanceCounterStorageKHR {
        static $gtype: GObject.GType<PerformanceCounterStorageKHR>;
    }

    class PerformanceCounterDescriptionFlagBitsKHR {
        static $gtype: GObject.GType<PerformanceCounterDescriptionFlagBitsKHR>;
    }

    class PerformanceCounterDescriptionFlagsKHR {
        static $gtype: GObject.GType<PerformanceCounterDescriptionFlagsKHR>;
    }

    class AcquireProfilingLockFlagBitsKHR {
        static $gtype: GObject.GType<AcquireProfilingLockFlagBitsKHR>;
    }

    class AcquireProfilingLockFlagsKHR {
        static $gtype: GObject.GType<AcquireProfilingLockFlagsKHR>;
    }

    class PhysicalDevicePerformanceQueryFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDevicePerformanceQueryFeaturesKHR>;
    }

    class PhysicalDevicePerformanceQueryPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDevicePerformanceQueryPropertiesKHR>;
    }

    class PerformanceCounterKHR {
        static $gtype: GObject.GType<PerformanceCounterKHR>;
    }

    class PerformanceCounterDescriptionKHR {
        static $gtype: GObject.GType<PerformanceCounterDescriptionKHR>;
    }

    class QueryPoolPerformanceCreateInfoKHR {
        static $gtype: GObject.GType<QueryPoolPerformanceCreateInfoKHR>;
    }

    class PerformanceCounterResultKHR {
        static $gtype: GObject.GType<PerformanceCounterResultKHR>;
    }

    class AcquireProfilingLockInfoKHR {
        static $gtype: GObject.GType<AcquireProfilingLockInfoKHR>;
    }

    class PerformanceQuerySubmitInfoKHR {
        static $gtype: GObject.GType<PerformanceQuerySubmitInfoKHR>;
    }

    class PointClippingBehaviorKHR {
        static $gtype: GObject.GType<PointClippingBehaviorKHR>;
    }

    class TessellationDomainOriginKHR {
        static $gtype: GObject.GType<TessellationDomainOriginKHR>;
    }

    class PhysicalDevicePointClippingPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDevicePointClippingPropertiesKHR>;
    }

    class RenderPassInputAttachmentAspectCreateInfoKHR {
        static $gtype: GObject.GType<RenderPassInputAttachmentAspectCreateInfoKHR>;
    }

    class InputAttachmentAspectReferenceKHR {
        static $gtype: GObject.GType<InputAttachmentAspectReferenceKHR>;
    }

    class ImageViewUsageCreateInfoKHR {
        static $gtype: GObject.GType<ImageViewUsageCreateInfoKHR>;
    }

    class PipelineTessellationDomainOriginStateCreateInfoKHR {
        static $gtype: GObject.GType<PipelineTessellationDomainOriginStateCreateInfoKHR>;
    }

    class PhysicalDeviceSurfaceInfo2KHR {
        static $gtype: GObject.GType<PhysicalDeviceSurfaceInfo2KHR>;
    }

    class SurfaceCapabilities2KHR {
        static $gtype: GObject.GType<SurfaceCapabilities2KHR>;
    }

    class SurfaceFormat2KHR {
        static $gtype: GObject.GType<SurfaceFormat2KHR>;
    }

    class PhysicalDeviceVariablePointerFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVariablePointerFeaturesKHR>;
    }

    class PhysicalDeviceVariablePointersFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVariablePointersFeaturesKHR>;
    }

    class DisplayProperties2KHR {
        static $gtype: GObject.GType<DisplayProperties2KHR>;
    }

    class DisplayPlaneProperties2KHR {
        static $gtype: GObject.GType<DisplayPlaneProperties2KHR>;
    }

    class DisplayModeProperties2KHR {
        static $gtype: GObject.GType<DisplayModeProperties2KHR>;
    }

    class DisplayPlaneInfo2KHR {
        static $gtype: GObject.GType<DisplayPlaneInfo2KHR>;
    }

    class DisplayPlaneCapabilities2KHR {
        static $gtype: GObject.GType<DisplayPlaneCapabilities2KHR>;
    }

    class MemoryDedicatedRequirementsKHR {
        static $gtype: GObject.GType<MemoryDedicatedRequirementsKHR>;
    }

    class MemoryDedicatedAllocateInfoKHR {
        static $gtype: GObject.GType<MemoryDedicatedAllocateInfoKHR>;
    }

    class BufferMemoryRequirementsInfo2KHR {
        static $gtype: GObject.GType<BufferMemoryRequirementsInfo2KHR>;
    }

    class ImageMemoryRequirementsInfo2KHR {
        static $gtype: GObject.GType<ImageMemoryRequirementsInfo2KHR>;
    }

    class ImageSparseMemoryRequirementsInfo2KHR {
        static $gtype: GObject.GType<ImageSparseMemoryRequirementsInfo2KHR>;
    }

    class MemoryRequirements2KHR {
        static $gtype: GObject.GType<MemoryRequirements2KHR>;
    }

    class SparseImageMemoryRequirements2KHR {
        static $gtype: GObject.GType<SparseImageMemoryRequirements2KHR>;
    }

    class ImageFormatListCreateInfoKHR {
        static $gtype: GObject.GType<ImageFormatListCreateInfoKHR>;
    }

    class SamplerYcbcrConversionKHR {
        static $gtype: GObject.GType<SamplerYcbcrConversionKHR>;
    }

    class SamplerYcbcrModelConversionKHR {
        static $gtype: GObject.GType<SamplerYcbcrModelConversionKHR>;
    }

    class SamplerYcbcrRangeKHR {
        static $gtype: GObject.GType<SamplerYcbcrRangeKHR>;
    }

    class ChromaLocationKHR {
        static $gtype: GObject.GType<ChromaLocationKHR>;
    }

    class SamplerYcbcrConversionCreateInfoKHR {
        static $gtype: GObject.GType<SamplerYcbcrConversionCreateInfoKHR>;
    }

    class SamplerYcbcrConversionInfoKHR {
        static $gtype: GObject.GType<SamplerYcbcrConversionInfoKHR>;
    }

    class BindImagePlaneMemoryInfoKHR {
        static $gtype: GObject.GType<BindImagePlaneMemoryInfoKHR>;
    }

    class ImagePlaneMemoryRequirementsInfoKHR {
        static $gtype: GObject.GType<ImagePlaneMemoryRequirementsInfoKHR>;
    }

    class PhysicalDeviceSamplerYcbcrConversionFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceSamplerYcbcrConversionFeaturesKHR>;
    }

    class SamplerYcbcrConversionImageFormatPropertiesKHR {
        static $gtype: GObject.GType<SamplerYcbcrConversionImageFormatPropertiesKHR>;
    }

    class BindBufferMemoryInfoKHR {
        static $gtype: GObject.GType<BindBufferMemoryInfoKHR>;
    }

    class BindImageMemoryInfoKHR {
        static $gtype: GObject.GType<BindImageMemoryInfoKHR>;
    }

    class PhysicalDeviceMaintenance3PropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance3PropertiesKHR>;
    }

    class DescriptorSetLayoutSupportKHR {
        static $gtype: GObject.GType<DescriptorSetLayoutSupportKHR>;
    }

    class PhysicalDeviceShaderSubgroupExtendedTypesFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderSubgroupExtendedTypesFeaturesKHR>;
    }

    class PhysicalDevice8BitStorageFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDevice8BitStorageFeaturesKHR>;
    }

    class PhysicalDeviceShaderAtomicInt64FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderAtomicInt64FeaturesKHR>;
    }

    class PhysicalDeviceShaderClockFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderClockFeaturesKHR>;
    }

    class VideoDecodeH265ProfileInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH265ProfileInfoKHR>;
    }

    class VideoDecodeH265CapabilitiesKHR {
        static $gtype: GObject.GType<VideoDecodeH265CapabilitiesKHR>;
    }

    class VideoDecodeH265SessionParametersAddInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH265SessionParametersAddInfoKHR>;
    }

    class VideoDecodeH265SessionParametersCreateInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH265SessionParametersCreateInfoKHR>;
    }

    class VideoDecodeH265PictureInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH265PictureInfoKHR>;
    }

    class VideoDecodeH265DpbSlotInfoKHR {
        static $gtype: GObject.GType<VideoDecodeH265DpbSlotInfoKHR>;
    }

    class QueueGlobalPriorityKHR {
        static $gtype: GObject.GType<QueueGlobalPriorityKHR>;
    }

    class DeviceQueueGlobalPriorityCreateInfoKHR {
        static $gtype: GObject.GType<DeviceQueueGlobalPriorityCreateInfoKHR>;
    }

    class PhysicalDeviceGlobalPriorityQueryFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceGlobalPriorityQueryFeaturesKHR>;
    }

    class QueueFamilyGlobalPriorityPropertiesKHR {
        static $gtype: GObject.GType<QueueFamilyGlobalPriorityPropertiesKHR>;
    }

    class DriverIdKHR {
        static $gtype: GObject.GType<DriverIdKHR>;
    }

    class ConformanceVersionKHR {
        static $gtype: GObject.GType<ConformanceVersionKHR>;
    }

    class PhysicalDeviceDriverPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceDriverPropertiesKHR>;
    }

    class ShaderFloatControlsIndependenceKHR {
        static $gtype: GObject.GType<ShaderFloatControlsIndependenceKHR>;
    }

    class PhysicalDeviceFloatControlsPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceFloatControlsPropertiesKHR>;
    }

    class ResolveModeFlagBitsKHR {
        static $gtype: GObject.GType<ResolveModeFlagBitsKHR>;
    }

    class ResolveModeFlagsKHR {
        static $gtype: GObject.GType<ResolveModeFlagsKHR>;
    }

    class SubpassDescriptionDepthStencilResolveKHR {
        static $gtype: GObject.GType<SubpassDescriptionDepthStencilResolveKHR>;
    }

    class PhysicalDeviceDepthStencilResolvePropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceDepthStencilResolvePropertiesKHR>;
    }

    class SemaphoreTypeKHR {
        static $gtype: GObject.GType<SemaphoreTypeKHR>;
    }

    class SemaphoreWaitFlagBitsKHR {
        static $gtype: GObject.GType<SemaphoreWaitFlagBitsKHR>;
    }

    class SemaphoreWaitFlagsKHR {
        static $gtype: GObject.GType<SemaphoreWaitFlagsKHR>;
    }

    class PhysicalDeviceTimelineSemaphoreFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceTimelineSemaphoreFeaturesKHR>;
    }

    class PhysicalDeviceTimelineSemaphorePropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceTimelineSemaphorePropertiesKHR>;
    }

    class SemaphoreTypeCreateInfoKHR {
        static $gtype: GObject.GType<SemaphoreTypeCreateInfoKHR>;
    }

    class TimelineSemaphoreSubmitInfoKHR {
        static $gtype: GObject.GType<TimelineSemaphoreSubmitInfoKHR>;
    }

    class SemaphoreWaitInfoKHR {
        static $gtype: GObject.GType<SemaphoreWaitInfoKHR>;
    }

    class SemaphoreSignalInfoKHR {
        static $gtype: GObject.GType<SemaphoreSignalInfoKHR>;
    }

    class PhysicalDeviceVulkanMemoryModelFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVulkanMemoryModelFeaturesKHR>;
    }

    class PhysicalDeviceShaderTerminateInvocationFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderTerminateInvocationFeaturesKHR>;
    }

    class FragmentShadingRateCombinerOpKHR {
        static $gtype: GObject.GType<FragmentShadingRateCombinerOpKHR>;
    }

    class FragmentShadingRateAttachmentInfoKHR {
        static $gtype: GObject.GType<FragmentShadingRateAttachmentInfoKHR>;
    }

    class PipelineFragmentShadingRateStateCreateInfoKHR {
        static $gtype: GObject.GType<PipelineFragmentShadingRateStateCreateInfoKHR>;
    }

    class PhysicalDeviceFragmentShadingRateFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShadingRateFeaturesKHR>;
    }

    class PhysicalDeviceFragmentShadingRatePropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShadingRatePropertiesKHR>;
    }

    class PhysicalDeviceFragmentShadingRateKHR {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShadingRateKHR>;
    }

    class PhysicalDeviceDynamicRenderingLocalReadFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceDynamicRenderingLocalReadFeaturesKHR>;
    }

    class RenderingAttachmentLocationInfoKHR {
        static $gtype: GObject.GType<RenderingAttachmentLocationInfoKHR>;
    }

    class RenderingInputAttachmentIndexInfoKHR {
        static $gtype: GObject.GType<RenderingInputAttachmentIndexInfoKHR>;
    }

    class PhysicalDeviceShaderQuadControlFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderQuadControlFeaturesKHR>;
    }

    class SurfaceProtectedCapabilitiesKHR {
        static $gtype: GObject.GType<SurfaceProtectedCapabilitiesKHR>;
    }

    class PhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR>;
    }

    class AttachmentReferenceStencilLayoutKHR {
        static $gtype: GObject.GType<AttachmentReferenceStencilLayoutKHR>;
    }

    class AttachmentDescriptionStencilLayoutKHR {
        static $gtype: GObject.GType<AttachmentDescriptionStencilLayoutKHR>;
    }

    class PhysicalDevicePresentWaitFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDevicePresentWaitFeaturesKHR>;
    }

    class PhysicalDeviceUniformBufferStandardLayoutFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceUniformBufferStandardLayoutFeaturesKHR>;
    }

    class PhysicalDeviceBufferDeviceAddressFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceBufferDeviceAddressFeaturesKHR>;
    }

    class BufferDeviceAddressInfoKHR {
        static $gtype: GObject.GType<BufferDeviceAddressInfoKHR>;
    }

    class BufferOpaqueCaptureAddressCreateInfoKHR {
        static $gtype: GObject.GType<BufferOpaqueCaptureAddressCreateInfoKHR>;
    }

    class MemoryOpaqueCaptureAddressAllocateInfoKHR {
        static $gtype: GObject.GType<MemoryOpaqueCaptureAddressAllocateInfoKHR>;
    }

    class DeviceMemoryOpaqueCaptureAddressInfoKHR {
        static $gtype: GObject.GType<DeviceMemoryOpaqueCaptureAddressInfoKHR>;
    }

    class DeferredOperationKHR {
        static $gtype: GObject.GType<DeferredOperationKHR>;
    }

    class PipelineExecutableStatisticFormatKHR {
        static $gtype: GObject.GType<PipelineExecutableStatisticFormatKHR>;
    }

    class PhysicalDevicePipelineExecutablePropertiesFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDevicePipelineExecutablePropertiesFeaturesKHR>;
    }

    class PipelineInfoKHR {
        static $gtype: GObject.GType<PipelineInfoKHR>;
    }

    class PipelineExecutablePropertiesKHR {
        static $gtype: GObject.GType<PipelineExecutablePropertiesKHR>;
    }

    class PipelineExecutableInfoKHR {
        static $gtype: GObject.GType<PipelineExecutableInfoKHR>;
    }

    class PipelineExecutableStatisticValueKHR {
        static $gtype: GObject.GType<PipelineExecutableStatisticValueKHR>;
    }

    class PipelineExecutableStatisticKHR {
        static $gtype: GObject.GType<PipelineExecutableStatisticKHR>;
    }

    class PipelineExecutableInternalRepresentationKHR {
        static $gtype: GObject.GType<PipelineExecutableInternalRepresentationKHR>;
    }

    class MemoryUnmapFlagBitsKHR {
        static $gtype: GObject.GType<MemoryUnmapFlagBitsKHR>;
    }

    class MemoryUnmapFlagsKHR {
        static $gtype: GObject.GType<MemoryUnmapFlagsKHR>;
    }

    class MemoryMapInfoKHR {
        static $gtype: GObject.GType<MemoryMapInfoKHR>;
    }

    class MemoryUnmapInfoKHR {
        static $gtype: GObject.GType<MemoryUnmapInfoKHR>;
    }

    class PhysicalDeviceShaderIntegerDotProductFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderIntegerDotProductFeaturesKHR>;
    }

    class PhysicalDeviceShaderIntegerDotProductPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderIntegerDotProductPropertiesKHR>;
    }

    class PipelineLibraryCreateInfoKHR {
        static $gtype: GObject.GType<PipelineLibraryCreateInfoKHR>;
    }

    class PresentIdKHR {
        static $gtype: GObject.GType<PresentIdKHR>;
    }

    class PhysicalDevicePresentIdFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDevicePresentIdFeaturesKHR>;
    }

    class VideoEncodeTuningModeKHR {
        static $gtype: GObject.GType<VideoEncodeTuningModeKHR>;
    }

    class VideoEncodeFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeFlagBitsKHR>;
    }

    class VideoEncodeFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeFlagsKHR>;
    }

    class VideoEncodeCapabilityFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeCapabilityFlagBitsKHR>;
    }

    class VideoEncodeCapabilityFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeCapabilityFlagsKHR>;
    }

    class VideoEncodeRateControlModeFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeRateControlModeFlagBitsKHR>;
    }

    class VideoEncodeRateControlModeFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeRateControlModeFlagsKHR>;
    }

    class VideoEncodeFeedbackFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeFeedbackFlagBitsKHR>;
    }

    class VideoEncodeFeedbackFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeFeedbackFlagsKHR>;
    }

    class VideoEncodeUsageFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeUsageFlagBitsKHR>;
    }

    class VideoEncodeUsageFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeUsageFlagsKHR>;
    }

    class VideoEncodeContentFlagBitsKHR {
        static $gtype: GObject.GType<VideoEncodeContentFlagBitsKHR>;
    }

    class VideoEncodeContentFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeContentFlagsKHR>;
    }

    class VideoEncodeRateControlFlagsKHR {
        static $gtype: GObject.GType<VideoEncodeRateControlFlagsKHR>;
    }

    class VideoEncodeInfoKHR {
        static $gtype: GObject.GType<VideoEncodeInfoKHR>;
    }

    class VideoEncodeCapabilitiesKHR {
        static $gtype: GObject.GType<VideoEncodeCapabilitiesKHR>;
    }

    class QueryPoolVideoEncodeFeedbackCreateInfoKHR {
        static $gtype: GObject.GType<QueryPoolVideoEncodeFeedbackCreateInfoKHR>;
    }

    class VideoEncodeUsageInfoKHR {
        static $gtype: GObject.GType<VideoEncodeUsageInfoKHR>;
    }

    class VideoEncodeRateControlLayerInfoKHR {
        static $gtype: GObject.GType<VideoEncodeRateControlLayerInfoKHR>;
    }

    class VideoEncodeRateControlInfoKHR {
        static $gtype: GObject.GType<VideoEncodeRateControlInfoKHR>;
    }

    class PhysicalDeviceVideoEncodeQualityLevelInfoKHR {
        static $gtype: GObject.GType<PhysicalDeviceVideoEncodeQualityLevelInfoKHR>;
    }

    class VideoEncodeQualityLevelPropertiesKHR {
        static $gtype: GObject.GType<VideoEncodeQualityLevelPropertiesKHR>;
    }

    class VideoEncodeQualityLevelInfoKHR {
        static $gtype: GObject.GType<VideoEncodeQualityLevelInfoKHR>;
    }

    class VideoEncodeSessionParametersGetInfoKHR {
        static $gtype: GObject.GType<VideoEncodeSessionParametersGetInfoKHR>;
    }

    class VideoEncodeSessionParametersFeedbackInfoKHR {
        static $gtype: GObject.GType<VideoEncodeSessionParametersFeedbackInfoKHR>;
    }

    class PipelineStageFlags2KHR {
        static $gtype: GObject.GType<PipelineStageFlags2KHR>;
    }

    class PipelineStageFlagBits2KHR {
        static $gtype: GObject.GType<PipelineStageFlagBits2KHR>;
    }

    class AccessFlags2KHR {
        static $gtype: GObject.GType<AccessFlags2KHR>;
    }

    class AccessFlagBits2KHR {
        static $gtype: GObject.GType<AccessFlagBits2KHR>;
    }

    class SubmitFlagBitsKHR {
        static $gtype: GObject.GType<SubmitFlagBitsKHR>;
    }

    class SubmitFlagsKHR {
        static $gtype: GObject.GType<SubmitFlagsKHR>;
    }

    class MemoryBarrier2KHR {
        static $gtype: GObject.GType<MemoryBarrier2KHR>;
    }

    class BufferMemoryBarrier2KHR {
        static $gtype: GObject.GType<BufferMemoryBarrier2KHR>;
    }

    class ImageMemoryBarrier2KHR {
        static $gtype: GObject.GType<ImageMemoryBarrier2KHR>;
    }

    class DependencyInfoKHR {
        static $gtype: GObject.GType<DependencyInfoKHR>;
    }

    class SubmitInfo2KHR {
        static $gtype: GObject.GType<SubmitInfo2KHR>;
    }

    class SemaphoreSubmitInfoKHR {
        static $gtype: GObject.GType<SemaphoreSubmitInfoKHR>;
    }

    class CommandBufferSubmitInfoKHR {
        static $gtype: GObject.GType<CommandBufferSubmitInfoKHR>;
    }

    class PhysicalDeviceSynchronization2FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceSynchronization2FeaturesKHR>;
    }

    class QueueFamilyCheckpointProperties2NV {
        static $gtype: GObject.GType<QueueFamilyCheckpointProperties2NV>;
    }

    class CheckpointData2NV {
        static $gtype: GObject.GType<CheckpointData2NV>;
    }

    class PhysicalDeviceFragmentShaderBarycentricFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShaderBarycentricFeaturesKHR>;
    }

    class PhysicalDeviceFragmentShaderBarycentricPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShaderBarycentricPropertiesKHR>;
    }

    class PhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR>;
    }

    class PhysicalDeviceZeroInitializeWorkgroupMemoryFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceZeroInitializeWorkgroupMemoryFeaturesKHR>;
    }

    class PhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR>;
    }

    class CopyBufferInfo2KHR {
        static $gtype: GObject.GType<CopyBufferInfo2KHR>;
    }

    class CopyImageInfo2KHR {
        static $gtype: GObject.GType<CopyImageInfo2KHR>;
    }

    class CopyBufferToImageInfo2KHR {
        static $gtype: GObject.GType<CopyBufferToImageInfo2KHR>;
    }

    class CopyImageToBufferInfo2KHR {
        static $gtype: GObject.GType<CopyImageToBufferInfo2KHR>;
    }

    class BlitImageInfo2KHR {
        static $gtype: GObject.GType<BlitImageInfo2KHR>;
    }

    class ResolveImageInfo2KHR {
        static $gtype: GObject.GType<ResolveImageInfo2KHR>;
    }

    class BufferCopy2KHR {
        static $gtype: GObject.GType<BufferCopy2KHR>;
    }

    class ImageCopy2KHR {
        static $gtype: GObject.GType<ImageCopy2KHR>;
    }

    class ImageBlit2KHR {
        static $gtype: GObject.GType<ImageBlit2KHR>;
    }

    class BufferImageCopy2KHR {
        static $gtype: GObject.GType<BufferImageCopy2KHR>;
    }

    class ImageResolve2KHR {
        static $gtype: GObject.GType<ImageResolve2KHR>;
    }

    class FormatFeatureFlags2KHR {
        static $gtype: GObject.GType<FormatFeatureFlags2KHR>;
    }

    class FormatFeatureFlagBits2KHR {
        static $gtype: GObject.GType<FormatFeatureFlagBits2KHR>;
    }

    class FormatProperties3KHR {
        static $gtype: GObject.GType<FormatProperties3KHR>;
    }

    class PhysicalDeviceRayTracingMaintenance1FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingMaintenance1FeaturesKHR>;
    }

    class TraceRaysIndirectCommand2KHR {
        static $gtype: GObject.GType<TraceRaysIndirectCommand2KHR>;
    }

    class PhysicalDeviceMaintenance4FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance4FeaturesKHR>;
    }

    class PhysicalDeviceMaintenance4PropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance4PropertiesKHR>;
    }

    class DeviceBufferMemoryRequirementsKHR {
        static $gtype: GObject.GType<DeviceBufferMemoryRequirementsKHR>;
    }

    class DeviceImageMemoryRequirementsKHR {
        static $gtype: GObject.GType<DeviceImageMemoryRequirementsKHR>;
    }

    class PhysicalDeviceShaderSubgroupRotateFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderSubgroupRotateFeaturesKHR>;
    }

    class PhysicalDeviceShaderMaximalReconvergenceFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderMaximalReconvergenceFeaturesKHR>;
    }

    class PipelineCreateFlags2KHR {
        static $gtype: GObject.GType<PipelineCreateFlags2KHR>;
    }

    class PipelineCreateFlagBits2KHR {
        static $gtype: GObject.GType<PipelineCreateFlagBits2KHR>;
    }

    class BufferUsageFlags2KHR {
        static $gtype: GObject.GType<BufferUsageFlags2KHR>;
    }

    class BufferUsageFlagBits2KHR {
        static $gtype: GObject.GType<BufferUsageFlagBits2KHR>;
    }

    class PhysicalDeviceMaintenance5FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance5FeaturesKHR>;
    }

    class PhysicalDeviceMaintenance5PropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance5PropertiesKHR>;
    }

    class RenderingAreaInfoKHR {
        static $gtype: GObject.GType<RenderingAreaInfoKHR>;
    }

    class ImageSubresource2KHR {
        static $gtype: GObject.GType<ImageSubresource2KHR>;
    }

    class DeviceImageSubresourceInfoKHR {
        static $gtype: GObject.GType<DeviceImageSubresourceInfoKHR>;
    }

    class SubresourceLayout2KHR {
        static $gtype: GObject.GType<SubresourceLayout2KHR>;
    }

    class PipelineCreateFlags2CreateInfoKHR {
        static $gtype: GObject.GType<PipelineCreateFlags2CreateInfoKHR>;
    }

    class BufferUsageFlags2CreateInfoKHR {
        static $gtype: GObject.GType<BufferUsageFlags2CreateInfoKHR>;
    }

    class PhysicalDeviceRayTracingPositionFetchFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingPositionFetchFeaturesKHR>;
    }

    class ComponentTypeKHR {
        static $gtype: GObject.GType<ComponentTypeKHR>;
    }

    class ScopeKHR {
        static $gtype: GObject.GType<ScopeKHR>;
    }

    class CooperativeMatrixPropertiesKHR {
        static $gtype: GObject.GType<CooperativeMatrixPropertiesKHR>;
    }

    class PhysicalDeviceCooperativeMatrixFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceCooperativeMatrixFeaturesKHR>;
    }

    class PhysicalDeviceCooperativeMatrixPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceCooperativeMatrixPropertiesKHR>;
    }

    class VideoDecodeAV1ProfileInfoKHR {
        static $gtype: GObject.GType<VideoDecodeAV1ProfileInfoKHR>;
    }

    class VideoDecodeAV1CapabilitiesKHR {
        static $gtype: GObject.GType<VideoDecodeAV1CapabilitiesKHR>;
    }

    class VideoDecodeAV1SessionParametersCreateInfoKHR {
        static $gtype: GObject.GType<VideoDecodeAV1SessionParametersCreateInfoKHR>;
    }

    class VideoDecodeAV1PictureInfoKHR {
        static $gtype: GObject.GType<VideoDecodeAV1PictureInfoKHR>;
    }

    class VideoDecodeAV1DpbSlotInfoKHR {
        static $gtype: GObject.GType<VideoDecodeAV1DpbSlotInfoKHR>;
    }

    class PhysicalDeviceVideoMaintenance1FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVideoMaintenance1FeaturesKHR>;
    }

    class VideoInlineQueryInfoKHR {
        static $gtype: GObject.GType<VideoInlineQueryInfoKHR>;
    }

    class PhysicalDeviceVertexAttributeDivisorPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVertexAttributeDivisorPropertiesKHR>;
    }

    class VertexInputBindingDivisorDescriptionKHR {
        static $gtype: GObject.GType<VertexInputBindingDivisorDescriptionKHR>;
    }

    class PipelineVertexInputDivisorStateCreateInfoKHR {
        static $gtype: GObject.GType<PipelineVertexInputDivisorStateCreateInfoKHR>;
    }

    class PhysicalDeviceVertexAttributeDivisorFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceVertexAttributeDivisorFeaturesKHR>;
    }

    class PhysicalDeviceShaderFloatControls2FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderFloatControls2FeaturesKHR>;
    }

    class PhysicalDeviceIndexTypeUint8FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceIndexTypeUint8FeaturesKHR>;
    }

    class LineRasterizationModeKHR {
        static $gtype: GObject.GType<LineRasterizationModeKHR>;
    }

    class PhysicalDeviceLineRasterizationFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceLineRasterizationFeaturesKHR>;
    }

    class PhysicalDeviceLineRasterizationPropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceLineRasterizationPropertiesKHR>;
    }

    class PipelineRasterizationLineStateCreateInfoKHR {
        static $gtype: GObject.GType<PipelineRasterizationLineStateCreateInfoKHR>;
    }

    class TimeDomainKHR {
        static $gtype: GObject.GType<TimeDomainKHR>;
    }

    class CalibratedTimestampInfoKHR {
        static $gtype: GObject.GType<CalibratedTimestampInfoKHR>;
    }

    class PhysicalDeviceShaderExpectAssumeFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceShaderExpectAssumeFeaturesKHR>;
    }

    class PhysicalDeviceMaintenance6FeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance6FeaturesKHR>;
    }

    class PhysicalDeviceMaintenance6PropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceMaintenance6PropertiesKHR>;
    }

    class BindMemoryStatusKHR {
        static $gtype: GObject.GType<BindMemoryStatusKHR>;
    }

    class BindDescriptorSetsInfoKHR {
        static $gtype: GObject.GType<BindDescriptorSetsInfoKHR>;
    }

    class PushConstantsInfoKHR {
        static $gtype: GObject.GType<PushConstantsInfoKHR>;
    }

    class PushDescriptorSetInfoKHR {
        static $gtype: GObject.GType<PushDescriptorSetInfoKHR>;
    }

    class PushDescriptorSetWithTemplateInfoKHR {
        static $gtype: GObject.GType<PushDescriptorSetWithTemplateInfoKHR>;
    }

    class SetDescriptorBufferOffsetsInfoEXT {
        static $gtype: GObject.GType<SetDescriptorBufferOffsetsInfoEXT>;
    }

    class BindDescriptorBufferEmbeddedSamplersInfoEXT {
        static $gtype: GObject.GType<BindDescriptorBufferEmbeddedSamplersInfoEXT>;
    }

    class DebugReportCallbackEXT {
        static $gtype: GObject.GType<DebugReportCallbackEXT>;
    }

    class DebugReportObjectTypeEXT {
        static $gtype: GObject.GType<DebugReportObjectTypeEXT>;
    }

    class DebugReportFlagBitsEXT {
        static $gtype: GObject.GType<DebugReportFlagBitsEXT>;
    }

    class DebugReportFlagsEXT {
        static $gtype: GObject.GType<DebugReportFlagsEXT>;
    }

    class DebugReportCallbackCreateInfoEXT {
        static $gtype: GObject.GType<DebugReportCallbackCreateInfoEXT>;
    }

    class RasterizationOrderAMD {
        static $gtype: GObject.GType<RasterizationOrderAMD>;
    }

    class PipelineRasterizationStateRasterizationOrderAMD {
        static $gtype: GObject.GType<PipelineRasterizationStateRasterizationOrderAMD>;
    }

    class DebugMarkerObjectNameInfoEXT {
        static $gtype: GObject.GType<DebugMarkerObjectNameInfoEXT>;
    }

    class DebugMarkerObjectTagInfoEXT {
        static $gtype: GObject.GType<DebugMarkerObjectTagInfoEXT>;
    }

    class DebugMarkerMarkerInfoEXT {
        static $gtype: GObject.GType<DebugMarkerMarkerInfoEXT>;
    }

    class DedicatedAllocationImageCreateInfoNV {
        static $gtype: GObject.GType<DedicatedAllocationImageCreateInfoNV>;
    }

    class DedicatedAllocationBufferCreateInfoNV {
        static $gtype: GObject.GType<DedicatedAllocationBufferCreateInfoNV>;
    }

    class DedicatedAllocationMemoryAllocateInfoNV {
        static $gtype: GObject.GType<DedicatedAllocationMemoryAllocateInfoNV>;
    }

    class PipelineRasterizationStateStreamCreateFlagsEXT {
        static $gtype: GObject.GType<PipelineRasterizationStateStreamCreateFlagsEXT>;
    }

    class PhysicalDeviceTransformFeedbackFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceTransformFeedbackFeaturesEXT>;
    }

    class PhysicalDeviceTransformFeedbackPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceTransformFeedbackPropertiesEXT>;
    }

    class PipelineRasterizationStateStreamCreateInfoEXT {
        static $gtype: GObject.GType<PipelineRasterizationStateStreamCreateInfoEXT>;
    }

    class CuModuleNVX {
        static $gtype: GObject.GType<CuModuleNVX>;
    }

    class CuFunctionNVX {
        static $gtype: GObject.GType<CuFunctionNVX>;
    }

    class CuModuleCreateInfoNVX {
        static $gtype: GObject.GType<CuModuleCreateInfoNVX>;
    }

    class CuFunctionCreateInfoNVX {
        static $gtype: GObject.GType<CuFunctionCreateInfoNVX>;
    }

    class CuLaunchInfoNVX {
        static $gtype: GObject.GType<CuLaunchInfoNVX>;
    }

    class ImageViewHandleInfoNVX {
        static $gtype: GObject.GType<ImageViewHandleInfoNVX>;
    }

    class ImageViewAddressPropertiesNVX {
        static $gtype: GObject.GType<ImageViewAddressPropertiesNVX>;
    }

    class TextureLODGatherFormatPropertiesAMD {
        static $gtype: GObject.GType<TextureLODGatherFormatPropertiesAMD>;
    }

    class ShaderInfoTypeAMD {
        static $gtype: GObject.GType<ShaderInfoTypeAMD>;
    }

    class ShaderResourceUsageAMD {
        static $gtype: GObject.GType<ShaderResourceUsageAMD>;
    }

    class ShaderStatisticsInfoAMD {
        static $gtype: GObject.GType<ShaderStatisticsInfoAMD>;
    }

    class PhysicalDeviceCornerSampledImageFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceCornerSampledImageFeaturesNV>;
    }

    class ExternalMemoryHandleTypeFlagBitsNV {
        static $gtype: GObject.GType<ExternalMemoryHandleTypeFlagBitsNV>;
    }

    class ExternalMemoryHandleTypeFlagsNV {
        static $gtype: GObject.GType<ExternalMemoryHandleTypeFlagsNV>;
    }

    class ExternalMemoryFeatureFlagBitsNV {
        static $gtype: GObject.GType<ExternalMemoryFeatureFlagBitsNV>;
    }

    class ExternalMemoryFeatureFlagsNV {
        static $gtype: GObject.GType<ExternalMemoryFeatureFlagsNV>;
    }

    class ExternalImageFormatPropertiesNV {
        static $gtype: GObject.GType<ExternalImageFormatPropertiesNV>;
    }

    class ExternalMemoryImageCreateInfoNV {
        static $gtype: GObject.GType<ExternalMemoryImageCreateInfoNV>;
    }

    class ExportMemoryAllocateInfoNV {
        static $gtype: GObject.GType<ExportMemoryAllocateInfoNV>;
    }

    class ValidationCheckEXT {
        static $gtype: GObject.GType<ValidationCheckEXT>;
    }

    class ValidationFlagsEXT {
        static $gtype: GObject.GType<ValidationFlagsEXT>;
    }

    class PhysicalDeviceTextureCompressionASTCHDRFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceTextureCompressionASTCHDRFeaturesEXT>;
    }

    class ImageViewASTCDecodeModeEXT {
        static $gtype: GObject.GType<ImageViewASTCDecodeModeEXT>;
    }

    class PhysicalDeviceASTCDecodeFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceASTCDecodeFeaturesEXT>;
    }

    class PipelineRobustnessBufferBehaviorEXT {
        static $gtype: GObject.GType<PipelineRobustnessBufferBehaviorEXT>;
    }

    class PipelineRobustnessImageBehaviorEXT {
        static $gtype: GObject.GType<PipelineRobustnessImageBehaviorEXT>;
    }

    class PhysicalDevicePipelineRobustnessFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePipelineRobustnessFeaturesEXT>;
    }

    class PhysicalDevicePipelineRobustnessPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDevicePipelineRobustnessPropertiesEXT>;
    }

    class PipelineRobustnessCreateInfoEXT {
        static $gtype: GObject.GType<PipelineRobustnessCreateInfoEXT>;
    }

    class ConditionalRenderingFlagBitsEXT {
        static $gtype: GObject.GType<ConditionalRenderingFlagBitsEXT>;
    }

    class ConditionalRenderingFlagsEXT {
        static $gtype: GObject.GType<ConditionalRenderingFlagsEXT>;
    }

    class ConditionalRenderingBeginInfoEXT {
        static $gtype: GObject.GType<ConditionalRenderingBeginInfoEXT>;
    }

    class PhysicalDeviceConditionalRenderingFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceConditionalRenderingFeaturesEXT>;
    }

    class CommandBufferInheritanceConditionalRenderingInfoEXT {
        static $gtype: GObject.GType<CommandBufferInheritanceConditionalRenderingInfoEXT>;
    }

    class ViewportWScalingNV {
        static $gtype: GObject.GType<ViewportWScalingNV>;
    }

    class PipelineViewportWScalingStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineViewportWScalingStateCreateInfoNV>;
    }

    class SurfaceCounterFlagBitsEXT {
        static $gtype: GObject.GType<SurfaceCounterFlagBitsEXT>;
    }

    class SurfaceCounterFlagsEXT {
        static $gtype: GObject.GType<SurfaceCounterFlagsEXT>;
    }

    class SurfaceCapabilities2EXT {
        static $gtype: GObject.GType<SurfaceCapabilities2EXT>;
    }

    class DisplayPowerStateEXT {
        static $gtype: GObject.GType<DisplayPowerStateEXT>;
    }

    class DeviceEventTypeEXT {
        static $gtype: GObject.GType<DeviceEventTypeEXT>;
    }

    class DisplayEventTypeEXT {
        static $gtype: GObject.GType<DisplayEventTypeEXT>;
    }

    class DisplayPowerInfoEXT {
        static $gtype: GObject.GType<DisplayPowerInfoEXT>;
    }

    class DeviceEventInfoEXT {
        static $gtype: GObject.GType<DeviceEventInfoEXT>;
    }

    class DisplayEventInfoEXT {
        static $gtype: GObject.GType<DisplayEventInfoEXT>;
    }

    class SwapchainCounterCreateInfoEXT {
        static $gtype: GObject.GType<SwapchainCounterCreateInfoEXT>;
    }

    class RefreshCycleDurationGOOGLE {
        static $gtype: GObject.GType<RefreshCycleDurationGOOGLE>;
    }

    class PastPresentationTimingGOOGLE {
        static $gtype: GObject.GType<PastPresentationTimingGOOGLE>;
    }

    class PresentTimeGOOGLE {
        static $gtype: GObject.GType<PresentTimeGOOGLE>;
    }

    class PresentTimesInfoGOOGLE {
        static $gtype: GObject.GType<PresentTimesInfoGOOGLE>;
    }

    class PhysicalDeviceMultiviewPerViewAttributesPropertiesNVX {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewPerViewAttributesPropertiesNVX>;
    }

    class ViewportCoordinateSwizzleNV {
        static $gtype: GObject.GType<ViewportCoordinateSwizzleNV>;
    }

    class PipelineViewportSwizzleStateCreateFlagsNV {
        static $gtype: GObject.GType<PipelineViewportSwizzleStateCreateFlagsNV>;
    }

    class ViewportSwizzleNV {
        static $gtype: GObject.GType<ViewportSwizzleNV>;
    }

    class PipelineViewportSwizzleStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineViewportSwizzleStateCreateInfoNV>;
    }

    class DiscardRectangleModeEXT {
        static $gtype: GObject.GType<DiscardRectangleModeEXT>;
    }

    class PipelineDiscardRectangleStateCreateFlagsEXT {
        static $gtype: GObject.GType<PipelineDiscardRectangleStateCreateFlagsEXT>;
    }

    class PhysicalDeviceDiscardRectanglePropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDiscardRectanglePropertiesEXT>;
    }

    class PipelineDiscardRectangleStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineDiscardRectangleStateCreateInfoEXT>;
    }

    class ConservativeRasterizationModeEXT {
        static $gtype: GObject.GType<ConservativeRasterizationModeEXT>;
    }

    class PipelineRasterizationConservativeStateCreateFlagsEXT {
        static $gtype: GObject.GType<PipelineRasterizationConservativeStateCreateFlagsEXT>;
    }

    class PhysicalDeviceConservativeRasterizationPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceConservativeRasterizationPropertiesEXT>;
    }

    class PipelineRasterizationConservativeStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineRasterizationConservativeStateCreateInfoEXT>;
    }

    class PipelineRasterizationDepthClipStateCreateFlagsEXT {
        static $gtype: GObject.GType<PipelineRasterizationDepthClipStateCreateFlagsEXT>;
    }

    class PhysicalDeviceDepthClipEnableFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDepthClipEnableFeaturesEXT>;
    }

    class PipelineRasterizationDepthClipStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineRasterizationDepthClipStateCreateInfoEXT>;
    }

    class XYColorEXT {
        static $gtype: GObject.GType<XYColorEXT>;
    }

    class HdrMetadataEXT {
        static $gtype: GObject.GType<HdrMetadataEXT>;
    }

    class PhysicalDeviceRelaxedLineRasterizationFeaturesIMG {
        static $gtype: GObject.GType<PhysicalDeviceRelaxedLineRasterizationFeaturesIMG>;
    }

    class DebugUtilsMessengerEXT {
        static $gtype: GObject.GType<DebugUtilsMessengerEXT>;
    }

    class DebugUtilsMessengerCallbackDataFlagsEXT {
        static $gtype: GObject.GType<DebugUtilsMessengerCallbackDataFlagsEXT>;
    }

    class DebugUtilsMessageSeverityFlagBitsEXT {
        static $gtype: GObject.GType<DebugUtilsMessageSeverityFlagBitsEXT>;
    }

    class DebugUtilsMessageTypeFlagBitsEXT {
        static $gtype: GObject.GType<DebugUtilsMessageTypeFlagBitsEXT>;
    }

    class DebugUtilsMessageTypeFlagsEXT {
        static $gtype: GObject.GType<DebugUtilsMessageTypeFlagsEXT>;
    }

    class DebugUtilsMessageSeverityFlagsEXT {
        static $gtype: GObject.GType<DebugUtilsMessageSeverityFlagsEXT>;
    }

    class DebugUtilsMessengerCreateFlagsEXT {
        static $gtype: GObject.GType<DebugUtilsMessengerCreateFlagsEXT>;
    }

    class DebugUtilsLabelEXT {
        static $gtype: GObject.GType<DebugUtilsLabelEXT>;
    }

    class DebugUtilsObjectNameInfoEXT {
        static $gtype: GObject.GType<DebugUtilsObjectNameInfoEXT>;
    }

    class DebugUtilsMessengerCallbackDataEXT {
        static $gtype: GObject.GType<DebugUtilsMessengerCallbackDataEXT>;
    }

    class DebugUtilsMessengerCreateInfoEXT {
        static $gtype: GObject.GType<DebugUtilsMessengerCreateInfoEXT>;
    }

    class DebugUtilsObjectTagInfoEXT {
        static $gtype: GObject.GType<DebugUtilsObjectTagInfoEXT>;
    }

    class SamplerReductionModeEXT {
        static $gtype: GObject.GType<SamplerReductionModeEXT>;
    }

    class SamplerReductionModeCreateInfoEXT {
        static $gtype: GObject.GType<SamplerReductionModeCreateInfoEXT>;
    }

    class PhysicalDeviceSamplerFilterMinmaxPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceSamplerFilterMinmaxPropertiesEXT>;
    }

    class PhysicalDeviceInlineUniformBlockFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceInlineUniformBlockFeaturesEXT>;
    }

    class PhysicalDeviceInlineUniformBlockPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceInlineUniformBlockPropertiesEXT>;
    }

    class WriteDescriptorSetInlineUniformBlockEXT {
        static $gtype: GObject.GType<WriteDescriptorSetInlineUniformBlockEXT>;
    }

    class DescriptorPoolInlineUniformBlockCreateInfoEXT {
        static $gtype: GObject.GType<DescriptorPoolInlineUniformBlockCreateInfoEXT>;
    }

    class SampleLocationEXT {
        static $gtype: GObject.GType<SampleLocationEXT>;
    }

    class SampleLocationsInfoEXT {
        static $gtype: GObject.GType<SampleLocationsInfoEXT>;
    }

    class AttachmentSampleLocationsEXT {
        static $gtype: GObject.GType<AttachmentSampleLocationsEXT>;
    }

    class SubpassSampleLocationsEXT {
        static $gtype: GObject.GType<SubpassSampleLocationsEXT>;
    }

    class RenderPassSampleLocationsBeginInfoEXT {
        static $gtype: GObject.GType<RenderPassSampleLocationsBeginInfoEXT>;
    }

    class PipelineSampleLocationsStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineSampleLocationsStateCreateInfoEXT>;
    }

    class PhysicalDeviceSampleLocationsPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceSampleLocationsPropertiesEXT>;
    }

    class MultisamplePropertiesEXT {
        static $gtype: GObject.GType<MultisamplePropertiesEXT>;
    }

    class BlendOverlapEXT {
        static $gtype: GObject.GType<BlendOverlapEXT>;
    }

    class PhysicalDeviceBlendOperationAdvancedFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceBlendOperationAdvancedFeaturesEXT>;
    }

    class PhysicalDeviceBlendOperationAdvancedPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceBlendOperationAdvancedPropertiesEXT>;
    }

    class PipelineColorBlendAdvancedStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineColorBlendAdvancedStateCreateInfoEXT>;
    }

    class PipelineCoverageToColorStateCreateFlagsNV {
        static $gtype: GObject.GType<PipelineCoverageToColorStateCreateFlagsNV>;
    }

    class PipelineCoverageToColorStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineCoverageToColorStateCreateInfoNV>;
    }

    class CoverageModulationModeNV {
        static $gtype: GObject.GType<CoverageModulationModeNV>;
    }

    class PipelineCoverageModulationStateCreateFlagsNV {
        static $gtype: GObject.GType<PipelineCoverageModulationStateCreateFlagsNV>;
    }

    class PipelineCoverageModulationStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineCoverageModulationStateCreateInfoNV>;
    }

    class PhysicalDeviceShaderSMBuiltinsPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceShaderSMBuiltinsPropertiesNV>;
    }

    class PhysicalDeviceShaderSMBuiltinsFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceShaderSMBuiltinsFeaturesNV>;
    }

    class DrmFormatModifierPropertiesEXT {
        static $gtype: GObject.GType<DrmFormatModifierPropertiesEXT>;
    }

    class DrmFormatModifierPropertiesListEXT {
        static $gtype: GObject.GType<DrmFormatModifierPropertiesListEXT>;
    }

    class PhysicalDeviceImageDrmFormatModifierInfoEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageDrmFormatModifierInfoEXT>;
    }

    class ImageDrmFormatModifierListCreateInfoEXT {
        static $gtype: GObject.GType<ImageDrmFormatModifierListCreateInfoEXT>;
    }

    class ImageDrmFormatModifierExplicitCreateInfoEXT {
        static $gtype: GObject.GType<ImageDrmFormatModifierExplicitCreateInfoEXT>;
    }

    class ImageDrmFormatModifierPropertiesEXT {
        static $gtype: GObject.GType<ImageDrmFormatModifierPropertiesEXT>;
    }

    class DrmFormatModifierProperties2EXT {
        static $gtype: GObject.GType<DrmFormatModifierProperties2EXT>;
    }

    class DrmFormatModifierPropertiesList2EXT {
        static $gtype: GObject.GType<DrmFormatModifierPropertiesList2EXT>;
    }

    class ValidationCacheEXT {
        static $gtype: GObject.GType<ValidationCacheEXT>;
    }

    class ValidationCacheHeaderVersionEXT {
        static $gtype: GObject.GType<ValidationCacheHeaderVersionEXT>;
    }

    class ValidationCacheCreateFlagsEXT {
        static $gtype: GObject.GType<ValidationCacheCreateFlagsEXT>;
    }

    class ValidationCacheCreateInfoEXT {
        static $gtype: GObject.GType<ValidationCacheCreateInfoEXT>;
    }

    class ShaderModuleValidationCacheCreateInfoEXT {
        static $gtype: GObject.GType<ShaderModuleValidationCacheCreateInfoEXT>;
    }

    class DescriptorBindingFlagBitsEXT {
        static $gtype: GObject.GType<DescriptorBindingFlagBitsEXT>;
    }

    class DescriptorBindingFlagsEXT {
        static $gtype: GObject.GType<DescriptorBindingFlagsEXT>;
    }

    class DescriptorSetLayoutBindingFlagsCreateInfoEXT {
        static $gtype: GObject.GType<DescriptorSetLayoutBindingFlagsCreateInfoEXT>;
    }

    class PhysicalDeviceDescriptorIndexingFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorIndexingFeaturesEXT>;
    }

    class PhysicalDeviceDescriptorIndexingPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorIndexingPropertiesEXT>;
    }

    class DescriptorSetVariableDescriptorCountAllocateInfoEXT {
        static $gtype: GObject.GType<DescriptorSetVariableDescriptorCountAllocateInfoEXT>;
    }

    class DescriptorSetVariableDescriptorCountLayoutSupportEXT {
        static $gtype: GObject.GType<DescriptorSetVariableDescriptorCountLayoutSupportEXT>;
    }

    class ShadingRatePaletteEntryNV {
        static $gtype: GObject.GType<ShadingRatePaletteEntryNV>;
    }

    class CoarseSampleOrderTypeNV {
        static $gtype: GObject.GType<CoarseSampleOrderTypeNV>;
    }

    class ShadingRatePaletteNV {
        static $gtype: GObject.GType<ShadingRatePaletteNV>;
    }

    class PipelineViewportShadingRateImageStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineViewportShadingRateImageStateCreateInfoNV>;
    }

    class PhysicalDeviceShadingRateImageFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceShadingRateImageFeaturesNV>;
    }

    class PhysicalDeviceShadingRateImagePropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceShadingRateImagePropertiesNV>;
    }

    class CoarseSampleLocationNV {
        static $gtype: GObject.GType<CoarseSampleLocationNV>;
    }

    class CoarseSampleOrderCustomNV {
        static $gtype: GObject.GType<CoarseSampleOrderCustomNV>;
    }

    class PipelineViewportCoarseSampleOrderStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineViewportCoarseSampleOrderStateCreateInfoNV>;
    }

    class AccelerationStructureNV {
        static $gtype: GObject.GType<AccelerationStructureNV>;
    }

    class RayTracingShaderGroupTypeKHR {
        static $gtype: GObject.GType<RayTracingShaderGroupTypeKHR>;
    }

    class RayTracingShaderGroupTypeNV {
        static $gtype: GObject.GType<RayTracingShaderGroupTypeNV>;
    }

    class GeometryTypeKHR {
        static $gtype: GObject.GType<GeometryTypeKHR>;
    }

    class GeometryTypeNV {
        static $gtype: GObject.GType<GeometryTypeNV>;
    }

    class AccelerationStructureTypeKHR {
        static $gtype: GObject.GType<AccelerationStructureTypeKHR>;
    }

    class AccelerationStructureTypeNV {
        static $gtype: GObject.GType<AccelerationStructureTypeNV>;
    }

    class CopyAccelerationStructureModeKHR {
        static $gtype: GObject.GType<CopyAccelerationStructureModeKHR>;
    }

    class CopyAccelerationStructureModeNV {
        static $gtype: GObject.GType<CopyAccelerationStructureModeNV>;
    }

    class AccelerationStructureMemoryRequirementsTypeNV {
        static $gtype: GObject.GType<AccelerationStructureMemoryRequirementsTypeNV>;
    }

    class GeometryFlagBitsKHR {
        static $gtype: GObject.GType<GeometryFlagBitsKHR>;
    }

    class GeometryFlagsKHR {
        static $gtype: GObject.GType<GeometryFlagsKHR>;
    }

    class GeometryFlagsNV {
        static $gtype: GObject.GType<GeometryFlagsNV>;
    }

    class GeometryFlagBitsNV {
        static $gtype: GObject.GType<GeometryFlagBitsNV>;
    }

    class GeometryInstanceFlagBitsKHR {
        static $gtype: GObject.GType<GeometryInstanceFlagBitsKHR>;
    }

    class GeometryInstanceFlagsKHR {
        static $gtype: GObject.GType<GeometryInstanceFlagsKHR>;
    }

    class GeometryInstanceFlagsNV {
        static $gtype: GObject.GType<GeometryInstanceFlagsNV>;
    }

    class GeometryInstanceFlagBitsNV {
        static $gtype: GObject.GType<GeometryInstanceFlagBitsNV>;
    }

    class BuildAccelerationStructureFlagBitsKHR {
        static $gtype: GObject.GType<BuildAccelerationStructureFlagBitsKHR>;
    }

    class BuildAccelerationStructureFlagsKHR {
        static $gtype: GObject.GType<BuildAccelerationStructureFlagsKHR>;
    }

    class BuildAccelerationStructureFlagsNV {
        static $gtype: GObject.GType<BuildAccelerationStructureFlagsNV>;
    }

    class BuildAccelerationStructureFlagBitsNV {
        static $gtype: GObject.GType<BuildAccelerationStructureFlagBitsNV>;
    }

    class RayTracingShaderGroupCreateInfoNV {
        static $gtype: GObject.GType<RayTracingShaderGroupCreateInfoNV>;
    }

    class RayTracingPipelineCreateInfoNV {
        static $gtype: GObject.GType<RayTracingPipelineCreateInfoNV>;
    }

    class GeometryTrianglesNV {
        static $gtype: GObject.GType<GeometryTrianglesNV>;
    }

    class GeometryAABBNV {
        static $gtype: GObject.GType<GeometryAABBNV>;
    }

    class GeometryDataNV {
        static $gtype: GObject.GType<GeometryDataNV>;
    }

    class GeometryNV {
        static $gtype: GObject.GType<GeometryNV>;
    }

    class AccelerationStructureInfoNV {
        static $gtype: GObject.GType<AccelerationStructureInfoNV>;
    }

    class AccelerationStructureCreateInfoNV {
        static $gtype: GObject.GType<AccelerationStructureCreateInfoNV>;
    }

    class BindAccelerationStructureMemoryInfoNV {
        static $gtype: GObject.GType<BindAccelerationStructureMemoryInfoNV>;
    }

    class WriteDescriptorSetAccelerationStructureNV {
        static $gtype: GObject.GType<WriteDescriptorSetAccelerationStructureNV>;
    }

    class AccelerationStructureMemoryRequirementsInfoNV {
        static $gtype: GObject.GType<AccelerationStructureMemoryRequirementsInfoNV>;
    }

    class PhysicalDeviceRayTracingPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingPropertiesNV>;
    }

    class TransformMatrixKHR {
        static $gtype: GObject.GType<TransformMatrixKHR>;
    }

    class TransformMatrixNV {
        static $gtype: GObject.GType<TransformMatrixNV>;
    }

    class AabbPositionsKHR {
        static $gtype: GObject.GType<AabbPositionsKHR>;
    }

    class AabbPositionsNV {
        static $gtype: GObject.GType<AabbPositionsNV>;
    }

    class AccelerationStructureInstanceKHR {
        static $gtype: GObject.GType<AccelerationStructureInstanceKHR>;
    }

    class AccelerationStructureInstanceNV {
        static $gtype: GObject.GType<AccelerationStructureInstanceNV>;
    }

    class PhysicalDeviceRepresentativeFragmentTestFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceRepresentativeFragmentTestFeaturesNV>;
    }

    class PipelineRepresentativeFragmentTestStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineRepresentativeFragmentTestStateCreateInfoNV>;
    }

    class PhysicalDeviceImageViewImageFormatInfoEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageViewImageFormatInfoEXT>;
    }

    class FilterCubicImageViewImageFormatPropertiesEXT {
        static $gtype: GObject.GType<FilterCubicImageViewImageFormatPropertiesEXT>;
    }

    class QueueGlobalPriorityEXT {
        static $gtype: GObject.GType<QueueGlobalPriorityEXT>;
    }

    class DeviceQueueGlobalPriorityCreateInfoEXT {
        static $gtype: GObject.GType<DeviceQueueGlobalPriorityCreateInfoEXT>;
    }

    class ImportMemoryHostPointerInfoEXT {
        static $gtype: GObject.GType<ImportMemoryHostPointerInfoEXT>;
    }

    class MemoryHostPointerPropertiesEXT {
        static $gtype: GObject.GType<MemoryHostPointerPropertiesEXT>;
    }

    class PhysicalDeviceExternalMemoryHostPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceExternalMemoryHostPropertiesEXT>;
    }

    class PipelineCompilerControlFlagBitsAMD {
        static $gtype: GObject.GType<PipelineCompilerControlFlagBitsAMD>;
    }

    class PipelineCompilerControlFlagsAMD {
        static $gtype: GObject.GType<PipelineCompilerControlFlagsAMD>;
    }

    class PipelineCompilerControlCreateInfoAMD {
        static $gtype: GObject.GType<PipelineCompilerControlCreateInfoAMD>;
    }

    class TimeDomainEXT {
        static $gtype: GObject.GType<TimeDomainEXT>;
    }

    class CalibratedTimestampInfoEXT {
        static $gtype: GObject.GType<CalibratedTimestampInfoEXT>;
    }

    class PhysicalDeviceShaderCorePropertiesAMD {
        static $gtype: GObject.GType<PhysicalDeviceShaderCorePropertiesAMD>;
    }

    class MemoryOverallocationBehaviorAMD {
        static $gtype: GObject.GType<MemoryOverallocationBehaviorAMD>;
    }

    class DeviceMemoryOverallocationCreateInfoAMD {
        static $gtype: GObject.GType<DeviceMemoryOverallocationCreateInfoAMD>;
    }

    class PhysicalDeviceVertexAttributeDivisorPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceVertexAttributeDivisorPropertiesEXT>;
    }

    class VertexInputBindingDivisorDescriptionEXT {
        static $gtype: GObject.GType<VertexInputBindingDivisorDescriptionEXT>;
    }

    class PipelineVertexInputDivisorStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineVertexInputDivisorStateCreateInfoEXT>;
    }

    class PhysicalDeviceVertexAttributeDivisorFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceVertexAttributeDivisorFeaturesEXT>;
    }

    class PipelineCreationFeedbackFlagBitsEXT {
        static $gtype: GObject.GType<PipelineCreationFeedbackFlagBitsEXT>;
    }

    class PipelineCreationFeedbackFlagsEXT {
        static $gtype: GObject.GType<PipelineCreationFeedbackFlagsEXT>;
    }

    class PipelineCreationFeedbackCreateInfoEXT {
        static $gtype: GObject.GType<PipelineCreationFeedbackCreateInfoEXT>;
    }

    class PipelineCreationFeedbackEXT {
        static $gtype: GObject.GType<PipelineCreationFeedbackEXT>;
    }

    class PhysicalDeviceComputeShaderDerivativesFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceComputeShaderDerivativesFeaturesNV>;
    }

    class PhysicalDeviceMeshShaderFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceMeshShaderFeaturesNV>;
    }

    class PhysicalDeviceMeshShaderPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceMeshShaderPropertiesNV>;
    }

    class DrawMeshTasksIndirectCommandNV {
        static $gtype: GObject.GType<DrawMeshTasksIndirectCommandNV>;
    }

    class PhysicalDeviceFragmentShaderBarycentricFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShaderBarycentricFeaturesNV>;
    }

    class PhysicalDeviceShaderImageFootprintFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceShaderImageFootprintFeaturesNV>;
    }

    class PipelineViewportExclusiveScissorStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineViewportExclusiveScissorStateCreateInfoNV>;
    }

    class PhysicalDeviceExclusiveScissorFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceExclusiveScissorFeaturesNV>;
    }

    class QueueFamilyCheckpointPropertiesNV {
        static $gtype: GObject.GType<QueueFamilyCheckpointPropertiesNV>;
    }

    class CheckpointDataNV {
        static $gtype: GObject.GType<CheckpointDataNV>;
    }

    class PhysicalDeviceShaderIntegerFunctions2FeaturesINTEL {
        static $gtype: GObject.GType<PhysicalDeviceShaderIntegerFunctions2FeaturesINTEL>;
    }

    class PerformanceConfigurationINTEL {
        static $gtype: GObject.GType<PerformanceConfigurationINTEL>;
    }

    class PerformanceConfigurationTypeINTEL {
        static $gtype: GObject.GType<PerformanceConfigurationTypeINTEL>;
    }

    class QueryPoolSamplingModeINTEL {
        static $gtype: GObject.GType<QueryPoolSamplingModeINTEL>;
    }

    class PerformanceOverrideTypeINTEL {
        static $gtype: GObject.GType<PerformanceOverrideTypeINTEL>;
    }

    class PerformanceParameterTypeINTEL {
        static $gtype: GObject.GType<PerformanceParameterTypeINTEL>;
    }

    class PerformanceValueTypeINTEL {
        static $gtype: GObject.GType<PerformanceValueTypeINTEL>;
    }

    class PerformanceValueDataINTEL {
        static $gtype: GObject.GType<PerformanceValueDataINTEL>;
    }

    class PerformanceValueINTEL {
        static $gtype: GObject.GType<PerformanceValueINTEL>;
    }

    class InitializePerformanceApiInfoINTEL {
        static $gtype: GObject.GType<InitializePerformanceApiInfoINTEL>;
    }

    class QueryPoolPerformanceQueryCreateInfoINTEL {
        static $gtype: GObject.GType<QueryPoolPerformanceQueryCreateInfoINTEL>;
    }

    class QueryPoolCreateInfoINTEL {
        static $gtype: GObject.GType<QueryPoolCreateInfoINTEL>;
    }

    class PerformanceMarkerInfoINTEL {
        static $gtype: GObject.GType<PerformanceMarkerInfoINTEL>;
    }

    class PerformanceStreamMarkerInfoINTEL {
        static $gtype: GObject.GType<PerformanceStreamMarkerInfoINTEL>;
    }

    class PerformanceOverrideInfoINTEL {
        static $gtype: GObject.GType<PerformanceOverrideInfoINTEL>;
    }

    class PerformanceConfigurationAcquireInfoINTEL {
        static $gtype: GObject.GType<PerformanceConfigurationAcquireInfoINTEL>;
    }

    class PhysicalDevicePCIBusInfoPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDevicePCIBusInfoPropertiesEXT>;
    }

    class DisplayNativeHdrSurfaceCapabilitiesAMD {
        static $gtype: GObject.GType<DisplayNativeHdrSurfaceCapabilitiesAMD>;
    }

    class SwapchainDisplayNativeHdrCreateInfoAMD {
        static $gtype: GObject.GType<SwapchainDisplayNativeHdrCreateInfoAMD>;
    }

    class PhysicalDeviceFragmentDensityMapFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFragmentDensityMapFeaturesEXT>;
    }

    class PhysicalDeviceFragmentDensityMapPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFragmentDensityMapPropertiesEXT>;
    }

    class RenderPassFragmentDensityMapCreateInfoEXT {
        static $gtype: GObject.GType<RenderPassFragmentDensityMapCreateInfoEXT>;
    }

    class PhysicalDeviceScalarBlockLayoutFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceScalarBlockLayoutFeaturesEXT>;
    }

    class PhysicalDeviceSubgroupSizeControlFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceSubgroupSizeControlFeaturesEXT>;
    }

    class PhysicalDeviceSubgroupSizeControlPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceSubgroupSizeControlPropertiesEXT>;
    }

    class PipelineShaderStageRequiredSubgroupSizeCreateInfoEXT {
        static $gtype: GObject.GType<PipelineShaderStageRequiredSubgroupSizeCreateInfoEXT>;
    }

    class ShaderCorePropertiesFlagBitsAMD {
        static $gtype: GObject.GType<ShaderCorePropertiesFlagBitsAMD>;
    }

    class ShaderCorePropertiesFlagsAMD {
        static $gtype: GObject.GType<ShaderCorePropertiesFlagsAMD>;
    }

    class PhysicalDeviceShaderCoreProperties2AMD {
        static $gtype: GObject.GType<PhysicalDeviceShaderCoreProperties2AMD>;
    }

    class PhysicalDeviceCoherentMemoryFeaturesAMD {
        static $gtype: GObject.GType<PhysicalDeviceCoherentMemoryFeaturesAMD>;
    }

    class PhysicalDeviceShaderImageAtomicInt64FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderImageAtomicInt64FeaturesEXT>;
    }

    class PhysicalDeviceMemoryBudgetPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMemoryBudgetPropertiesEXT>;
    }

    class PhysicalDeviceMemoryPriorityFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMemoryPriorityFeaturesEXT>;
    }

    class MemoryPriorityAllocateInfoEXT {
        static $gtype: GObject.GType<MemoryPriorityAllocateInfoEXT>;
    }

    class PhysicalDeviceDedicatedAllocationImageAliasingFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceDedicatedAllocationImageAliasingFeaturesNV>;
    }

    class PhysicalDeviceBufferDeviceAddressFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceBufferDeviceAddressFeaturesEXT>;
    }

    class PhysicalDeviceBufferAddressFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceBufferAddressFeaturesEXT>;
    }

    class BufferDeviceAddressInfoEXT {
        static $gtype: GObject.GType<BufferDeviceAddressInfoEXT>;
    }

    class BufferDeviceAddressCreateInfoEXT {
        static $gtype: GObject.GType<BufferDeviceAddressCreateInfoEXT>;
    }

    class ToolPurposeFlagBitsEXT {
        static $gtype: GObject.GType<ToolPurposeFlagBitsEXT>;
    }

    class ToolPurposeFlagsEXT {
        static $gtype: GObject.GType<ToolPurposeFlagsEXT>;
    }

    class PhysicalDeviceToolPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceToolPropertiesEXT>;
    }

    class ImageStencilUsageCreateInfoEXT {
        static $gtype: GObject.GType<ImageStencilUsageCreateInfoEXT>;
    }

    class ValidationFeatureEnableEXT {
        static $gtype: GObject.GType<ValidationFeatureEnableEXT>;
    }

    class ValidationFeatureDisableEXT {
        static $gtype: GObject.GType<ValidationFeatureDisableEXT>;
    }

    class ValidationFeaturesEXT {
        static $gtype: GObject.GType<ValidationFeaturesEXT>;
    }

    class ComponentTypeNV {
        static $gtype: GObject.GType<ComponentTypeNV>;
    }

    class ScopeNV {
        static $gtype: GObject.GType<ScopeNV>;
    }

    class CooperativeMatrixPropertiesNV {
        static $gtype: GObject.GType<CooperativeMatrixPropertiesNV>;
    }

    class PhysicalDeviceCooperativeMatrixFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceCooperativeMatrixFeaturesNV>;
    }

    class PhysicalDeviceCooperativeMatrixPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceCooperativeMatrixPropertiesNV>;
    }

    class CoverageReductionModeNV {
        static $gtype: GObject.GType<CoverageReductionModeNV>;
    }

    class PipelineCoverageReductionStateCreateFlagsNV {
        static $gtype: GObject.GType<PipelineCoverageReductionStateCreateFlagsNV>;
    }

    class PhysicalDeviceCoverageReductionModeFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceCoverageReductionModeFeaturesNV>;
    }

    class PipelineCoverageReductionStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineCoverageReductionStateCreateInfoNV>;
    }

    class FramebufferMixedSamplesCombinationNV {
        static $gtype: GObject.GType<FramebufferMixedSamplesCombinationNV>;
    }

    class PhysicalDeviceFragmentShaderInterlockFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShaderInterlockFeaturesEXT>;
    }

    class PhysicalDeviceYcbcrImageArraysFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceYcbcrImageArraysFeaturesEXT>;
    }

    class ProvokingVertexModeEXT {
        static $gtype: GObject.GType<ProvokingVertexModeEXT>;
    }

    class PhysicalDeviceProvokingVertexFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceProvokingVertexFeaturesEXT>;
    }

    class PhysicalDeviceProvokingVertexPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceProvokingVertexPropertiesEXT>;
    }

    class PipelineRasterizationProvokingVertexStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineRasterizationProvokingVertexStateCreateInfoEXT>;
    }

    class HeadlessSurfaceCreateFlagsEXT {
        static $gtype: GObject.GType<HeadlessSurfaceCreateFlagsEXT>;
    }

    class HeadlessSurfaceCreateInfoEXT {
        static $gtype: GObject.GType<HeadlessSurfaceCreateInfoEXT>;
    }

    class LineRasterizationModeEXT {
        static $gtype: GObject.GType<LineRasterizationModeEXT>;
    }

    class PhysicalDeviceLineRasterizationFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceLineRasterizationFeaturesEXT>;
    }

    class PhysicalDeviceLineRasterizationPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceLineRasterizationPropertiesEXT>;
    }

    class PipelineRasterizationLineStateCreateInfoEXT {
        static $gtype: GObject.GType<PipelineRasterizationLineStateCreateInfoEXT>;
    }

    class PhysicalDeviceShaderAtomicFloatFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderAtomicFloatFeaturesEXT>;
    }

    class PhysicalDeviceHostQueryResetFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceHostQueryResetFeaturesEXT>;
    }

    class PhysicalDeviceIndexTypeUint8FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceIndexTypeUint8FeaturesEXT>;
    }

    class PhysicalDeviceExtendedDynamicStateFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceExtendedDynamicStateFeaturesEXT>;
    }

    class HostImageCopyFlagBitsEXT {
        static $gtype: GObject.GType<HostImageCopyFlagBitsEXT>;
    }

    class HostImageCopyFlagsEXT {
        static $gtype: GObject.GType<HostImageCopyFlagsEXT>;
    }

    class PhysicalDeviceHostImageCopyFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceHostImageCopyFeaturesEXT>;
    }

    class PhysicalDeviceHostImageCopyPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceHostImageCopyPropertiesEXT>;
    }

    class MemoryToImageCopyEXT {
        static $gtype: GObject.GType<MemoryToImageCopyEXT>;
    }

    class ImageToMemoryCopyEXT {
        static $gtype: GObject.GType<ImageToMemoryCopyEXT>;
    }

    class CopyMemoryToImageInfoEXT {
        static $gtype: GObject.GType<CopyMemoryToImageInfoEXT>;
    }

    class CopyImageToMemoryInfoEXT {
        static $gtype: GObject.GType<CopyImageToMemoryInfoEXT>;
    }

    class CopyImageToImageInfoEXT {
        static $gtype: GObject.GType<CopyImageToImageInfoEXT>;
    }

    class HostImageLayoutTransitionInfoEXT {
        static $gtype: GObject.GType<HostImageLayoutTransitionInfoEXT>;
    }

    class SubresourceHostMemcpySizeEXT {
        static $gtype: GObject.GType<SubresourceHostMemcpySizeEXT>;
    }

    class HostImageCopyDevicePerformanceQueryEXT {
        static $gtype: GObject.GType<HostImageCopyDevicePerformanceQueryEXT>;
    }

    class SubresourceLayout2EXT {
        static $gtype: GObject.GType<SubresourceLayout2EXT>;
    }

    class ImageSubresource2EXT {
        static $gtype: GObject.GType<ImageSubresource2EXT>;
    }

    class PhysicalDeviceMapMemoryPlacedFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMapMemoryPlacedFeaturesEXT>;
    }

    class PhysicalDeviceMapMemoryPlacedPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMapMemoryPlacedPropertiesEXT>;
    }

    class MemoryMapPlacedInfoEXT {
        static $gtype: GObject.GType<MemoryMapPlacedInfoEXT>;
    }

    class PhysicalDeviceShaderAtomicFloat2FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderAtomicFloat2FeaturesEXT>;
    }

    class PresentScalingFlagBitsEXT {
        static $gtype: GObject.GType<PresentScalingFlagBitsEXT>;
    }

    class PresentScalingFlagsEXT {
        static $gtype: GObject.GType<PresentScalingFlagsEXT>;
    }

    class PresentGravityFlagBitsEXT {
        static $gtype: GObject.GType<PresentGravityFlagBitsEXT>;
    }

    class PresentGravityFlagsEXT {
        static $gtype: GObject.GType<PresentGravityFlagsEXT>;
    }

    class SurfacePresentModeEXT {
        static $gtype: GObject.GType<SurfacePresentModeEXT>;
    }

    class SurfacePresentScalingCapabilitiesEXT {
        static $gtype: GObject.GType<SurfacePresentScalingCapabilitiesEXT>;
    }

    class SurfacePresentModeCompatibilityEXT {
        static $gtype: GObject.GType<SurfacePresentModeCompatibilityEXT>;
    }

    class PhysicalDeviceSwapchainMaintenance1FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceSwapchainMaintenance1FeaturesEXT>;
    }

    class SwapchainPresentFenceInfoEXT {
        static $gtype: GObject.GType<SwapchainPresentFenceInfoEXT>;
    }

    class SwapchainPresentModesCreateInfoEXT {
        static $gtype: GObject.GType<SwapchainPresentModesCreateInfoEXT>;
    }

    class SwapchainPresentModeInfoEXT {
        static $gtype: GObject.GType<SwapchainPresentModeInfoEXT>;
    }

    class SwapchainPresentScalingCreateInfoEXT {
        static $gtype: GObject.GType<SwapchainPresentScalingCreateInfoEXT>;
    }

    class ReleaseSwapchainImagesInfoEXT {
        static $gtype: GObject.GType<ReleaseSwapchainImagesInfoEXT>;
    }

    class PhysicalDeviceShaderDemoteToHelperInvocationFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderDemoteToHelperInvocationFeaturesEXT>;
    }

    class IndirectCommandsLayoutNV {
        static $gtype: GObject.GType<IndirectCommandsLayoutNV>;
    }

    class IndirectCommandsTokenTypeNV {
        static $gtype: GObject.GType<IndirectCommandsTokenTypeNV>;
    }

    class IndirectStateFlagBitsNV {
        static $gtype: GObject.GType<IndirectStateFlagBitsNV>;
    }

    class IndirectStateFlagsNV {
        static $gtype: GObject.GType<IndirectStateFlagsNV>;
    }

    class IndirectCommandsLayoutUsageFlagBitsNV {
        static $gtype: GObject.GType<IndirectCommandsLayoutUsageFlagBitsNV>;
    }

    class IndirectCommandsLayoutUsageFlagsNV {
        static $gtype: GObject.GType<IndirectCommandsLayoutUsageFlagsNV>;
    }

    class PhysicalDeviceDeviceGeneratedCommandsPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceDeviceGeneratedCommandsPropertiesNV>;
    }

    class PhysicalDeviceDeviceGeneratedCommandsFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceDeviceGeneratedCommandsFeaturesNV>;
    }

    class GraphicsShaderGroupCreateInfoNV {
        static $gtype: GObject.GType<GraphicsShaderGroupCreateInfoNV>;
    }

    class GraphicsPipelineShaderGroupsCreateInfoNV {
        static $gtype: GObject.GType<GraphicsPipelineShaderGroupsCreateInfoNV>;
    }

    class BindShaderGroupIndirectCommandNV {
        static $gtype: GObject.GType<BindShaderGroupIndirectCommandNV>;
    }

    class BindIndexBufferIndirectCommandNV {
        static $gtype: GObject.GType<BindIndexBufferIndirectCommandNV>;
    }

    class BindVertexBufferIndirectCommandNV {
        static $gtype: GObject.GType<BindVertexBufferIndirectCommandNV>;
    }

    class SetStateFlagsIndirectCommandNV {
        static $gtype: GObject.GType<SetStateFlagsIndirectCommandNV>;
    }

    class IndirectCommandsStreamNV {
        static $gtype: GObject.GType<IndirectCommandsStreamNV>;
    }

    class IndirectCommandsLayoutTokenNV {
        static $gtype: GObject.GType<IndirectCommandsLayoutTokenNV>;
    }

    class IndirectCommandsLayoutCreateInfoNV {
        static $gtype: GObject.GType<IndirectCommandsLayoutCreateInfoNV>;
    }

    class GeneratedCommandsInfoNV {
        static $gtype: GObject.GType<GeneratedCommandsInfoNV>;
    }

    class GeneratedCommandsMemoryRequirementsInfoNV {
        static $gtype: GObject.GType<GeneratedCommandsMemoryRequirementsInfoNV>;
    }

    class PhysicalDeviceInheritedViewportScissorFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceInheritedViewportScissorFeaturesNV>;
    }

    class CommandBufferInheritanceViewportScissorInfoNV {
        static $gtype: GObject.GType<CommandBufferInheritanceViewportScissorInfoNV>;
    }

    class PhysicalDeviceTexelBufferAlignmentFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceTexelBufferAlignmentFeaturesEXT>;
    }

    class PhysicalDeviceTexelBufferAlignmentPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceTexelBufferAlignmentPropertiesEXT>;
    }

    class RenderPassTransformBeginInfoQCOM {
        static $gtype: GObject.GType<RenderPassTransformBeginInfoQCOM>;
    }

    class CommandBufferInheritanceRenderPassTransformInfoQCOM {
        static $gtype: GObject.GType<CommandBufferInheritanceRenderPassTransformInfoQCOM>;
    }

    class DepthBiasRepresentationEXT {
        static $gtype: GObject.GType<DepthBiasRepresentationEXT>;
    }

    class PhysicalDeviceDepthBiasControlFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDepthBiasControlFeaturesEXT>;
    }

    class DepthBiasInfoEXT {
        static $gtype: GObject.GType<DepthBiasInfoEXT>;
    }

    class DepthBiasRepresentationInfoEXT {
        static $gtype: GObject.GType<DepthBiasRepresentationInfoEXT>;
    }

    class DeviceMemoryReportEventTypeEXT {
        static $gtype: GObject.GType<DeviceMemoryReportEventTypeEXT>;
    }

    class DeviceMemoryReportFlagsEXT {
        static $gtype: GObject.GType<DeviceMemoryReportFlagsEXT>;
    }

    class PhysicalDeviceDeviceMemoryReportFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDeviceMemoryReportFeaturesEXT>;
    }

    class DeviceMemoryReportCallbackDataEXT {
        static $gtype: GObject.GType<DeviceMemoryReportCallbackDataEXT>;
    }

    class DeviceDeviceMemoryReportCreateInfoEXT {
        static $gtype: GObject.GType<DeviceDeviceMemoryReportCreateInfoEXT>;
    }

    class PhysicalDeviceRobustness2FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceRobustness2FeaturesEXT>;
    }

    class PhysicalDeviceRobustness2PropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceRobustness2PropertiesEXT>;
    }

    class SamplerCustomBorderColorCreateInfoEXT {
        static $gtype: GObject.GType<SamplerCustomBorderColorCreateInfoEXT>;
    }

    class PhysicalDeviceCustomBorderColorPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceCustomBorderColorPropertiesEXT>;
    }

    class PhysicalDeviceCustomBorderColorFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceCustomBorderColorFeaturesEXT>;
    }

    class PhysicalDevicePresentBarrierFeaturesNV {
        static $gtype: GObject.GType<PhysicalDevicePresentBarrierFeaturesNV>;
    }

    class SurfaceCapabilitiesPresentBarrierNV {
        static $gtype: GObject.GType<SurfaceCapabilitiesPresentBarrierNV>;
    }

    class SwapchainPresentBarrierCreateInfoNV {
        static $gtype: GObject.GType<SwapchainPresentBarrierCreateInfoNV>;
    }

    class PrivateDataSlotEXT {
        static $gtype: GObject.GType<PrivateDataSlotEXT>;
    }

    class PrivateDataSlotCreateFlagsEXT {
        static $gtype: GObject.GType<PrivateDataSlotCreateFlagsEXT>;
    }

    class PhysicalDevicePrivateDataFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePrivateDataFeaturesEXT>;
    }

    class DevicePrivateDataCreateInfoEXT {
        static $gtype: GObject.GType<DevicePrivateDataCreateInfoEXT>;
    }

    class PrivateDataSlotCreateInfoEXT {
        static $gtype: GObject.GType<PrivateDataSlotCreateInfoEXT>;
    }

    class PhysicalDevicePipelineCreationCacheControlFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePipelineCreationCacheControlFeaturesEXT>;
    }

    class DeviceDiagnosticsConfigFlagBitsNV {
        static $gtype: GObject.GType<DeviceDiagnosticsConfigFlagBitsNV>;
    }

    class DeviceDiagnosticsConfigFlagsNV {
        static $gtype: GObject.GType<DeviceDiagnosticsConfigFlagsNV>;
    }

    class PhysicalDeviceDiagnosticsConfigFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceDiagnosticsConfigFeaturesNV>;
    }

    class DeviceDiagnosticsConfigCreateInfoNV {
        static $gtype: GObject.GType<DeviceDiagnosticsConfigCreateInfoNV>;
    }

    class CudaModuleNV {
        static $gtype: GObject.GType<CudaModuleNV>;
    }

    class CudaFunctionNV {
        static $gtype: GObject.GType<CudaFunctionNV>;
    }

    class CudaModuleCreateInfoNV {
        static $gtype: GObject.GType<CudaModuleCreateInfoNV>;
    }

    class CudaFunctionCreateInfoNV {
        static $gtype: GObject.GType<CudaFunctionCreateInfoNV>;
    }

    class CudaLaunchInfoNV {
        static $gtype: GObject.GType<CudaLaunchInfoNV>;
    }

    class PhysicalDeviceCudaKernelLaunchFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceCudaKernelLaunchFeaturesNV>;
    }

    class PhysicalDeviceCudaKernelLaunchPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceCudaKernelLaunchPropertiesNV>;
    }

    class QueryLowLatencySupportNV {
        static $gtype: GObject.GType<QueryLowLatencySupportNV>;
    }

    class AccelerationStructureKHR {
        static $gtype: GObject.GType<AccelerationStructureKHR>;
    }

    class PhysicalDeviceDescriptorBufferPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorBufferPropertiesEXT>;
    }

    class PhysicalDeviceDescriptorBufferDensityMapPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorBufferDensityMapPropertiesEXT>;
    }

    class PhysicalDeviceDescriptorBufferFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorBufferFeaturesEXT>;
    }

    class DescriptorAddressInfoEXT {
        static $gtype: GObject.GType<DescriptorAddressInfoEXT>;
    }

    class DescriptorBufferBindingInfoEXT {
        static $gtype: GObject.GType<DescriptorBufferBindingInfoEXT>;
    }

    class DescriptorBufferBindingPushDescriptorBufferHandleEXT {
        static $gtype: GObject.GType<DescriptorBufferBindingPushDescriptorBufferHandleEXT>;
    }

    class DescriptorDataEXT {
        static $gtype: GObject.GType<DescriptorDataEXT>;
    }

    class DescriptorGetInfoEXT {
        static $gtype: GObject.GType<DescriptorGetInfoEXT>;
    }

    class BufferCaptureDescriptorDataInfoEXT {
        static $gtype: GObject.GType<BufferCaptureDescriptorDataInfoEXT>;
    }

    class ImageCaptureDescriptorDataInfoEXT {
        static $gtype: GObject.GType<ImageCaptureDescriptorDataInfoEXT>;
    }

    class ImageViewCaptureDescriptorDataInfoEXT {
        static $gtype: GObject.GType<ImageViewCaptureDescriptorDataInfoEXT>;
    }

    class SamplerCaptureDescriptorDataInfoEXT {
        static $gtype: GObject.GType<SamplerCaptureDescriptorDataInfoEXT>;
    }

    class OpaqueCaptureDescriptorDataCreateInfoEXT {
        static $gtype: GObject.GType<OpaqueCaptureDescriptorDataCreateInfoEXT>;
    }

    class AccelerationStructureCaptureDescriptorDataInfoEXT {
        static $gtype: GObject.GType<AccelerationStructureCaptureDescriptorDataInfoEXT>;
    }

    class GraphicsPipelineLibraryFlagBitsEXT {
        static $gtype: GObject.GType<GraphicsPipelineLibraryFlagBitsEXT>;
    }

    class GraphicsPipelineLibraryFlagsEXT {
        static $gtype: GObject.GType<GraphicsPipelineLibraryFlagsEXT>;
    }

    class PhysicalDeviceGraphicsPipelineLibraryFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceGraphicsPipelineLibraryFeaturesEXT>;
    }

    class PhysicalDeviceGraphicsPipelineLibraryPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceGraphicsPipelineLibraryPropertiesEXT>;
    }

    class GraphicsPipelineLibraryCreateInfoEXT {
        static $gtype: GObject.GType<GraphicsPipelineLibraryCreateInfoEXT>;
    }

    class PhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD {
        static $gtype: GObject.GType<PhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD>;
    }

    class FragmentShadingRateTypeNV {
        static $gtype: GObject.GType<FragmentShadingRateTypeNV>;
    }

    class FragmentShadingRateNV {
        static $gtype: GObject.GType<FragmentShadingRateNV>;
    }

    class PhysicalDeviceFragmentShadingRateEnumsFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShadingRateEnumsFeaturesNV>;
    }

    class PhysicalDeviceFragmentShadingRateEnumsPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceFragmentShadingRateEnumsPropertiesNV>;
    }

    class PipelineFragmentShadingRateEnumStateCreateInfoNV {
        static $gtype: GObject.GType<PipelineFragmentShadingRateEnumStateCreateInfoNV>;
    }

    class AccelerationStructureMotionInstanceTypeNV {
        static $gtype: GObject.GType<AccelerationStructureMotionInstanceTypeNV>;
    }

    class AccelerationStructureMotionInfoFlagsNV {
        static $gtype: GObject.GType<AccelerationStructureMotionInfoFlagsNV>;
    }

    class AccelerationStructureMotionInstanceFlagsNV {
        static $gtype: GObject.GType<AccelerationStructureMotionInstanceFlagsNV>;
    }

    class DeviceOrHostAddressConstKHR {
        static $gtype: GObject.GType<DeviceOrHostAddressConstKHR>;
    }

    class AccelerationStructureGeometryMotionTrianglesDataNV {
        static $gtype: GObject.GType<AccelerationStructureGeometryMotionTrianglesDataNV>;
    }

    class AccelerationStructureMotionInfoNV {
        static $gtype: GObject.GType<AccelerationStructureMotionInfoNV>;
    }

    class AccelerationStructureMatrixMotionInstanceNV {
        static $gtype: GObject.GType<AccelerationStructureMatrixMotionInstanceNV>;
    }

    class SRTDataNV {
        static $gtype: GObject.GType<SRTDataNV>;
    }

    class AccelerationStructureSRTMotionInstanceNV {
        static $gtype: GObject.GType<AccelerationStructureSRTMotionInstanceNV>;
    }

    class AccelerationStructureMotionInstanceDataNV {
        static $gtype: GObject.GType<AccelerationStructureMotionInstanceDataNV>;
    }

    class AccelerationStructureMotionInstanceNV {
        static $gtype: GObject.GType<AccelerationStructureMotionInstanceNV>;
    }

    class PhysicalDeviceRayTracingMotionBlurFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingMotionBlurFeaturesNV>;
    }

    class PhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT>;
    }

    class PhysicalDeviceFragmentDensityMap2FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFragmentDensityMap2FeaturesEXT>;
    }

    class PhysicalDeviceFragmentDensityMap2PropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFragmentDensityMap2PropertiesEXT>;
    }

    class CopyCommandTransformInfoQCOM {
        static $gtype: GObject.GType<CopyCommandTransformInfoQCOM>;
    }

    class PhysicalDeviceImageRobustnessFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageRobustnessFeaturesEXT>;
    }

    class ImageCompressionFlagBitsEXT {
        static $gtype: GObject.GType<ImageCompressionFlagBitsEXT>;
    }

    class ImageCompressionFlagsEXT {
        static $gtype: GObject.GType<ImageCompressionFlagsEXT>;
    }

    class ImageCompressionFixedRateFlagBitsEXT {
        static $gtype: GObject.GType<ImageCompressionFixedRateFlagBitsEXT>;
    }

    class ImageCompressionFixedRateFlagsEXT {
        static $gtype: GObject.GType<ImageCompressionFixedRateFlagsEXT>;
    }

    class PhysicalDeviceImageCompressionControlFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageCompressionControlFeaturesEXT>;
    }

    class ImageCompressionControlEXT {
        static $gtype: GObject.GType<ImageCompressionControlEXT>;
    }

    class ImageCompressionPropertiesEXT {
        static $gtype: GObject.GType<ImageCompressionPropertiesEXT>;
    }

    class PhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT>;
    }

    class PhysicalDevice4444FormatsFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevice4444FormatsFeaturesEXT>;
    }

    class DeviceFaultAddressTypeEXT {
        static $gtype: GObject.GType<DeviceFaultAddressTypeEXT>;
    }

    class DeviceFaultVendorBinaryHeaderVersionEXT {
        static $gtype: GObject.GType<DeviceFaultVendorBinaryHeaderVersionEXT>;
    }

    class PhysicalDeviceFaultFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFaultFeaturesEXT>;
    }

    class DeviceFaultCountsEXT {
        static $gtype: GObject.GType<DeviceFaultCountsEXT>;
    }

    class DeviceFaultAddressInfoEXT {
        static $gtype: GObject.GType<DeviceFaultAddressInfoEXT>;
    }

    class DeviceFaultVendorInfoEXT {
        static $gtype: GObject.GType<DeviceFaultVendorInfoEXT>;
    }

    class DeviceFaultInfoEXT {
        static $gtype: GObject.GType<DeviceFaultInfoEXT>;
    }

    class DeviceFaultVendorBinaryHeaderVersionOneEXT {
        static $gtype: GObject.GType<DeviceFaultVendorBinaryHeaderVersionOneEXT>;
    }

    class PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT>;
    }

    class PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM {
        static $gtype: GObject.GType<PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM>;
    }

    class PhysicalDeviceRGBA10X6FormatsFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceRGBA10X6FormatsFeaturesEXT>;
    }

    class PhysicalDeviceMutableDescriptorTypeFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMutableDescriptorTypeFeaturesEXT>;
    }

    class PhysicalDeviceMutableDescriptorTypeFeaturesVALVE {
        static $gtype: GObject.GType<PhysicalDeviceMutableDescriptorTypeFeaturesVALVE>;
    }

    class MutableDescriptorTypeListEXT {
        static $gtype: GObject.GType<MutableDescriptorTypeListEXT>;
    }

    class MutableDescriptorTypeListVALVE {
        static $gtype: GObject.GType<MutableDescriptorTypeListVALVE>;
    }

    class MutableDescriptorTypeCreateInfoEXT {
        static $gtype: GObject.GType<MutableDescriptorTypeCreateInfoEXT>;
    }

    class MutableDescriptorTypeCreateInfoVALVE {
        static $gtype: GObject.GType<MutableDescriptorTypeCreateInfoVALVE>;
    }

    class PhysicalDeviceVertexInputDynamicStateFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceVertexInputDynamicStateFeaturesEXT>;
    }

    class VertexInputBindingDescription2EXT {
        static $gtype: GObject.GType<VertexInputBindingDescription2EXT>;
    }

    class VertexInputAttributeDescription2EXT {
        static $gtype: GObject.GType<VertexInputAttributeDescription2EXT>;
    }

    class PhysicalDeviceDrmPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDrmPropertiesEXT>;
    }

    class DeviceAddressBindingTypeEXT {
        static $gtype: GObject.GType<DeviceAddressBindingTypeEXT>;
    }

    class DeviceAddressBindingFlagBitsEXT {
        static $gtype: GObject.GType<DeviceAddressBindingFlagBitsEXT>;
    }

    class DeviceAddressBindingFlagsEXT {
        static $gtype: GObject.GType<DeviceAddressBindingFlagsEXT>;
    }

    class PhysicalDeviceAddressBindingReportFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceAddressBindingReportFeaturesEXT>;
    }

    class DeviceAddressBindingCallbackDataEXT {
        static $gtype: GObject.GType<DeviceAddressBindingCallbackDataEXT>;
    }

    class PhysicalDeviceDepthClipControlFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDepthClipControlFeaturesEXT>;
    }

    class PipelineViewportDepthClipControlCreateInfoEXT {
        static $gtype: GObject.GType<PipelineViewportDepthClipControlCreateInfoEXT>;
    }

    class PhysicalDevicePrimitiveTopologyListRestartFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePrimitiveTopologyListRestartFeaturesEXT>;
    }

    class SubpassShadingPipelineCreateInfoHUAWEI {
        static $gtype: GObject.GType<SubpassShadingPipelineCreateInfoHUAWEI>;
    }

    class PhysicalDeviceSubpassShadingFeaturesHUAWEI {
        static $gtype: GObject.GType<PhysicalDeviceSubpassShadingFeaturesHUAWEI>;
    }

    class PhysicalDeviceSubpassShadingPropertiesHUAWEI {
        static $gtype: GObject.GType<PhysicalDeviceSubpassShadingPropertiesHUAWEI>;
    }

    class PhysicalDeviceInvocationMaskFeaturesHUAWEI {
        static $gtype: GObject.GType<PhysicalDeviceInvocationMaskFeaturesHUAWEI>;
    }

    class RemoteAddressNV {
        static $gtype: GObject.GType<RemoteAddressNV>;
    }

    class MemoryGetRemoteAddressInfoNV {
        static $gtype: GObject.GType<MemoryGetRemoteAddressInfoNV>;
    }

    class PhysicalDeviceExternalMemoryRDMAFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceExternalMemoryRDMAFeaturesNV>;
    }

    class PipelineInfoEXT {
        static $gtype: GObject.GType<PipelineInfoEXT>;
    }

    class PipelinePropertiesIdentifierEXT {
        static $gtype: GObject.GType<PipelinePropertiesIdentifierEXT>;
    }

    class PhysicalDevicePipelinePropertiesFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePipelinePropertiesFeaturesEXT>;
    }

    class FrameBoundaryFlagBitsEXT {
        static $gtype: GObject.GType<FrameBoundaryFlagBitsEXT>;
    }

    class FrameBoundaryFlagsEXT {
        static $gtype: GObject.GType<FrameBoundaryFlagsEXT>;
    }

    class PhysicalDeviceFrameBoundaryFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceFrameBoundaryFeaturesEXT>;
    }

    class FrameBoundaryEXT {
        static $gtype: GObject.GType<FrameBoundaryEXT>;
    }

    class PhysicalDeviceMultisampledRenderToSingleSampledFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMultisampledRenderToSingleSampledFeaturesEXT>;
    }

    class SubpassResolvePerformanceQueryEXT {
        static $gtype: GObject.GType<SubpassResolvePerformanceQueryEXT>;
    }

    class MultisampledRenderToSingleSampledInfoEXT {
        static $gtype: GObject.GType<MultisampledRenderToSingleSampledInfoEXT>;
    }

    class PhysicalDeviceExtendedDynamicState2FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceExtendedDynamicState2FeaturesEXT>;
    }

    class PhysicalDeviceColorWriteEnableFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceColorWriteEnableFeaturesEXT>;
    }

    class PipelineColorWriteCreateInfoEXT {
        static $gtype: GObject.GType<PipelineColorWriteCreateInfoEXT>;
    }

    class PhysicalDevicePrimitivesGeneratedQueryFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePrimitivesGeneratedQueryFeaturesEXT>;
    }

    class PhysicalDeviceGlobalPriorityQueryFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceGlobalPriorityQueryFeaturesEXT>;
    }

    class QueueFamilyGlobalPriorityPropertiesEXT {
        static $gtype: GObject.GType<QueueFamilyGlobalPriorityPropertiesEXT>;
    }

    class PhysicalDeviceImageViewMinLodFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageViewMinLodFeaturesEXT>;
    }

    class ImageViewMinLodCreateInfoEXT {
        static $gtype: GObject.GType<ImageViewMinLodCreateInfoEXT>;
    }

    class PhysicalDeviceMultiDrawFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMultiDrawFeaturesEXT>;
    }

    class PhysicalDeviceMultiDrawPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMultiDrawPropertiesEXT>;
    }

    class MultiDrawInfoEXT {
        static $gtype: GObject.GType<MultiDrawInfoEXT>;
    }

    class MultiDrawIndexedInfoEXT {
        static $gtype: GObject.GType<MultiDrawIndexedInfoEXT>;
    }

    class PhysicalDeviceImage2DViewOf3DFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceImage2DViewOf3DFeaturesEXT>;
    }

    class PhysicalDeviceShaderTileImageFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderTileImageFeaturesEXT>;
    }

    class PhysicalDeviceShaderTileImagePropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderTileImagePropertiesEXT>;
    }

    class MicromapEXT {
        static $gtype: GObject.GType<MicromapEXT>;
    }

    class MicromapTypeEXT {
        static $gtype: GObject.GType<MicromapTypeEXT>;
    }

    class BuildMicromapModeEXT {
        static $gtype: GObject.GType<BuildMicromapModeEXT>;
    }

    class CopyMicromapModeEXT {
        static $gtype: GObject.GType<CopyMicromapModeEXT>;
    }

    class OpacityMicromapFormatEXT {
        static $gtype: GObject.GType<OpacityMicromapFormatEXT>;
    }

    class OpacityMicromapSpecialIndexEXT {
        static $gtype: GObject.GType<OpacityMicromapSpecialIndexEXT>;
    }

    class AccelerationStructureCompatibilityKHR {
        static $gtype: GObject.GType<AccelerationStructureCompatibilityKHR>;
    }

    class AccelerationStructureBuildTypeKHR {
        static $gtype: GObject.GType<AccelerationStructureBuildTypeKHR>;
    }

    class BuildMicromapFlagBitsEXT {
        static $gtype: GObject.GType<BuildMicromapFlagBitsEXT>;
    }

    class BuildMicromapFlagsEXT {
        static $gtype: GObject.GType<BuildMicromapFlagsEXT>;
    }

    class MicromapCreateFlagBitsEXT {
        static $gtype: GObject.GType<MicromapCreateFlagBitsEXT>;
    }

    class MicromapCreateFlagsEXT {
        static $gtype: GObject.GType<MicromapCreateFlagsEXT>;
    }

    class MicromapUsageEXT {
        static $gtype: GObject.GType<MicromapUsageEXT>;
    }

    class DeviceOrHostAddressKHR {
        static $gtype: GObject.GType<DeviceOrHostAddressKHR>;
    }

    class MicromapBuildInfoEXT {
        static $gtype: GObject.GType<MicromapBuildInfoEXT>;
    }

    class MicromapCreateInfoEXT {
        static $gtype: GObject.GType<MicromapCreateInfoEXT>;
    }

    class PhysicalDeviceOpacityMicromapFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceOpacityMicromapFeaturesEXT>;
    }

    class PhysicalDeviceOpacityMicromapPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceOpacityMicromapPropertiesEXT>;
    }

    class MicromapVersionInfoEXT {
        static $gtype: GObject.GType<MicromapVersionInfoEXT>;
    }

    class CopyMicromapToMemoryInfoEXT {
        static $gtype: GObject.GType<CopyMicromapToMemoryInfoEXT>;
    }

    class CopyMemoryToMicromapInfoEXT {
        static $gtype: GObject.GType<CopyMemoryToMicromapInfoEXT>;
    }

    class CopyMicromapInfoEXT {
        static $gtype: GObject.GType<CopyMicromapInfoEXT>;
    }

    class MicromapBuildSizesInfoEXT {
        static $gtype: GObject.GType<MicromapBuildSizesInfoEXT>;
    }

    class AccelerationStructureTrianglesOpacityMicromapEXT {
        static $gtype: GObject.GType<AccelerationStructureTrianglesOpacityMicromapEXT>;
    }

    class MicromapTriangleEXT {
        static $gtype: GObject.GType<MicromapTriangleEXT>;
    }

    class PhysicalDeviceClusterCullingShaderFeaturesHUAWEI {
        static $gtype: GObject.GType<PhysicalDeviceClusterCullingShaderFeaturesHUAWEI>;
    }

    class PhysicalDeviceClusterCullingShaderPropertiesHUAWEI {
        static $gtype: GObject.GType<PhysicalDeviceClusterCullingShaderPropertiesHUAWEI>;
    }

    class PhysicalDeviceClusterCullingShaderVrsFeaturesHUAWEI {
        static $gtype: GObject.GType<PhysicalDeviceClusterCullingShaderVrsFeaturesHUAWEI>;
    }

    class PhysicalDeviceBorderColorSwizzleFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceBorderColorSwizzleFeaturesEXT>;
    }

    class SamplerBorderColorComponentMappingCreateInfoEXT {
        static $gtype: GObject.GType<SamplerBorderColorComponentMappingCreateInfoEXT>;
    }

    class PhysicalDevicePageableDeviceLocalMemoryFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePageableDeviceLocalMemoryFeaturesEXT>;
    }

    class PhysicalDeviceShaderCorePropertiesARM {
        static $gtype: GObject.GType<PhysicalDeviceShaderCorePropertiesARM>;
    }

    class PhysicalDeviceSchedulingControlsFlagsARM {
        static $gtype: GObject.GType<PhysicalDeviceSchedulingControlsFlagsARM>;
    }

    class PhysicalDeviceSchedulingControlsFlagBitsARM {
        static $gtype: GObject.GType<PhysicalDeviceSchedulingControlsFlagBitsARM>;
    }

    class DeviceQueueShaderCoreControlCreateInfoARM {
        static $gtype: GObject.GType<DeviceQueueShaderCoreControlCreateInfoARM>;
    }

    class PhysicalDeviceSchedulingControlsFeaturesARM {
        static $gtype: GObject.GType<PhysicalDeviceSchedulingControlsFeaturesARM>;
    }

    class PhysicalDeviceSchedulingControlsPropertiesARM {
        static $gtype: GObject.GType<PhysicalDeviceSchedulingControlsPropertiesARM>;
    }

    class PhysicalDeviceImageSlicedViewOf3DFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageSlicedViewOf3DFeaturesEXT>;
    }

    class ImageViewSlicedCreateInfoEXT {
        static $gtype: GObject.GType<ImageViewSlicedCreateInfoEXT>;
    }

    class PhysicalDeviceDescriptorSetHostMappingFeaturesVALVE {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorSetHostMappingFeaturesVALVE>;
    }

    class DescriptorSetBindingReferenceVALVE {
        static $gtype: GObject.GType<DescriptorSetBindingReferenceVALVE>;
    }

    class DescriptorSetLayoutHostMappingInfoVALVE {
        static $gtype: GObject.GType<DescriptorSetLayoutHostMappingInfoVALVE>;
    }

    class PhysicalDeviceDepthClampZeroOneFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDepthClampZeroOneFeaturesEXT>;
    }

    class PhysicalDeviceNonSeamlessCubeMapFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceNonSeamlessCubeMapFeaturesEXT>;
    }

    class PhysicalDeviceRenderPassStripedFeaturesARM {
        static $gtype: GObject.GType<PhysicalDeviceRenderPassStripedFeaturesARM>;
    }

    class PhysicalDeviceRenderPassStripedPropertiesARM {
        static $gtype: GObject.GType<PhysicalDeviceRenderPassStripedPropertiesARM>;
    }

    class RenderPassStripeInfoARM {
        static $gtype: GObject.GType<RenderPassStripeInfoARM>;
    }

    class RenderPassStripeBeginInfoARM {
        static $gtype: GObject.GType<RenderPassStripeBeginInfoARM>;
    }

    class RenderPassStripeSubmitInfoARM {
        static $gtype: GObject.GType<RenderPassStripeSubmitInfoARM>;
    }

    class PhysicalDeviceFragmentDensityMapOffsetFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceFragmentDensityMapOffsetFeaturesQCOM>;
    }

    class PhysicalDeviceFragmentDensityMapOffsetPropertiesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceFragmentDensityMapOffsetPropertiesQCOM>;
    }

    class SubpassFragmentDensityMapOffsetEndInfoQCOM {
        static $gtype: GObject.GType<SubpassFragmentDensityMapOffsetEndInfoQCOM>;
    }

    class CopyMemoryIndirectCommandNV {
        static $gtype: GObject.GType<CopyMemoryIndirectCommandNV>;
    }

    class CopyMemoryToImageIndirectCommandNV {
        static $gtype: GObject.GType<CopyMemoryToImageIndirectCommandNV>;
    }

    class PhysicalDeviceCopyMemoryIndirectFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceCopyMemoryIndirectFeaturesNV>;
    }

    class PhysicalDeviceCopyMemoryIndirectPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceCopyMemoryIndirectPropertiesNV>;
    }

    class MemoryDecompressionMethodFlagBitsNV {
        static $gtype: GObject.GType<MemoryDecompressionMethodFlagBitsNV>;
    }

    class MemoryDecompressionMethodFlagsNV {
        static $gtype: GObject.GType<MemoryDecompressionMethodFlagsNV>;
    }

    class DecompressMemoryRegionNV {
        static $gtype: GObject.GType<DecompressMemoryRegionNV>;
    }

    class PhysicalDeviceMemoryDecompressionFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceMemoryDecompressionFeaturesNV>;
    }

    class PhysicalDeviceMemoryDecompressionPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceMemoryDecompressionPropertiesNV>;
    }

    class PhysicalDeviceDeviceGeneratedCommandsComputeFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceDeviceGeneratedCommandsComputeFeaturesNV>;
    }

    class ComputePipelineIndirectBufferInfoNV {
        static $gtype: GObject.GType<ComputePipelineIndirectBufferInfoNV>;
    }

    class PipelineIndirectDeviceAddressInfoNV {
        static $gtype: GObject.GType<PipelineIndirectDeviceAddressInfoNV>;
    }

    class BindPipelineIndirectCommandNV {
        static $gtype: GObject.GType<BindPipelineIndirectCommandNV>;
    }

    class PhysicalDeviceLinearColorAttachmentFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceLinearColorAttachmentFeaturesNV>;
    }

    class PhysicalDeviceImageCompressionControlSwapchainFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceImageCompressionControlSwapchainFeaturesEXT>;
    }

    class ImageViewSampleWeightCreateInfoQCOM {
        static $gtype: GObject.GType<ImageViewSampleWeightCreateInfoQCOM>;
    }

    class PhysicalDeviceImageProcessingFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceImageProcessingFeaturesQCOM>;
    }

    class PhysicalDeviceImageProcessingPropertiesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceImageProcessingPropertiesQCOM>;
    }

    class PhysicalDeviceNestedCommandBufferFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceNestedCommandBufferFeaturesEXT>;
    }

    class PhysicalDeviceNestedCommandBufferPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceNestedCommandBufferPropertiesEXT>;
    }

    class ExternalMemoryAcquireUnmodifiedEXT {
        static $gtype: GObject.GType<ExternalMemoryAcquireUnmodifiedEXT>;
    }

    class PhysicalDeviceExtendedDynamicState3FeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceExtendedDynamicState3FeaturesEXT>;
    }

    class PhysicalDeviceExtendedDynamicState3PropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceExtendedDynamicState3PropertiesEXT>;
    }

    class ColorBlendEquationEXT {
        static $gtype: GObject.GType<ColorBlendEquationEXT>;
    }

    class ColorBlendAdvancedEXT {
        static $gtype: GObject.GType<ColorBlendAdvancedEXT>;
    }

    class SubpassMergeStatusEXT {
        static $gtype: GObject.GType<SubpassMergeStatusEXT>;
    }

    class PhysicalDeviceSubpassMergeFeedbackFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceSubpassMergeFeedbackFeaturesEXT>;
    }

    class RenderPassCreationControlEXT {
        static $gtype: GObject.GType<RenderPassCreationControlEXT>;
    }

    class RenderPassCreationFeedbackInfoEXT {
        static $gtype: GObject.GType<RenderPassCreationFeedbackInfoEXT>;
    }

    class RenderPassCreationFeedbackCreateInfoEXT {
        static $gtype: GObject.GType<RenderPassCreationFeedbackCreateInfoEXT>;
    }

    class RenderPassSubpassFeedbackInfoEXT {
        static $gtype: GObject.GType<RenderPassSubpassFeedbackInfoEXT>;
    }

    class RenderPassSubpassFeedbackCreateInfoEXT {
        static $gtype: GObject.GType<RenderPassSubpassFeedbackCreateInfoEXT>;
    }

    class DirectDriverLoadingModeLUNARG {
        static $gtype: GObject.GType<DirectDriverLoadingModeLUNARG>;
    }

    class DirectDriverLoadingFlagsLUNARG {
        static $gtype: GObject.GType<DirectDriverLoadingFlagsLUNARG>;
    }

    class DirectDriverLoadingInfoLUNARG {
        static $gtype: GObject.GType<DirectDriverLoadingInfoLUNARG>;
    }

    class DirectDriverLoadingListLUNARG {
        static $gtype: GObject.GType<DirectDriverLoadingListLUNARG>;
    }

    class PhysicalDeviceShaderModuleIdentifierFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderModuleIdentifierFeaturesEXT>;
    }

    class PhysicalDeviceShaderModuleIdentifierPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderModuleIdentifierPropertiesEXT>;
    }

    class PipelineShaderStageModuleIdentifierCreateInfoEXT {
        static $gtype: GObject.GType<PipelineShaderStageModuleIdentifierCreateInfoEXT>;
    }

    class ShaderModuleIdentifierEXT {
        static $gtype: GObject.GType<ShaderModuleIdentifierEXT>;
    }

    class OpticalFlowSessionNV {
        static $gtype: GObject.GType<OpticalFlowSessionNV>;
    }

    class OpticalFlowPerformanceLevelNV {
        static $gtype: GObject.GType<OpticalFlowPerformanceLevelNV>;
    }

    class OpticalFlowSessionBindingPointNV {
        static $gtype: GObject.GType<OpticalFlowSessionBindingPointNV>;
    }

    class OpticalFlowGridSizeFlagBitsNV {
        static $gtype: GObject.GType<OpticalFlowGridSizeFlagBitsNV>;
    }

    class OpticalFlowGridSizeFlagsNV {
        static $gtype: GObject.GType<OpticalFlowGridSizeFlagsNV>;
    }

    class OpticalFlowUsageFlagBitsNV {
        static $gtype: GObject.GType<OpticalFlowUsageFlagBitsNV>;
    }

    class OpticalFlowUsageFlagsNV {
        static $gtype: GObject.GType<OpticalFlowUsageFlagsNV>;
    }

    class OpticalFlowSessionCreateFlagBitsNV {
        static $gtype: GObject.GType<OpticalFlowSessionCreateFlagBitsNV>;
    }

    class OpticalFlowSessionCreateFlagsNV {
        static $gtype: GObject.GType<OpticalFlowSessionCreateFlagsNV>;
    }

    class OpticalFlowExecuteFlagBitsNV {
        static $gtype: GObject.GType<OpticalFlowExecuteFlagBitsNV>;
    }

    class OpticalFlowExecuteFlagsNV {
        static $gtype: GObject.GType<OpticalFlowExecuteFlagsNV>;
    }

    class PhysicalDeviceOpticalFlowFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceOpticalFlowFeaturesNV>;
    }

    class PhysicalDeviceOpticalFlowPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceOpticalFlowPropertiesNV>;
    }

    class OpticalFlowImageFormatInfoNV {
        static $gtype: GObject.GType<OpticalFlowImageFormatInfoNV>;
    }

    class OpticalFlowImageFormatPropertiesNV {
        static $gtype: GObject.GType<OpticalFlowImageFormatPropertiesNV>;
    }

    class OpticalFlowSessionCreateInfoNV {
        static $gtype: GObject.GType<OpticalFlowSessionCreateInfoNV>;
    }

    class OpticalFlowSessionCreatePrivateDataInfoNV {
        static $gtype: GObject.GType<OpticalFlowSessionCreatePrivateDataInfoNV>;
    }

    class OpticalFlowExecuteInfoNV {
        static $gtype: GObject.GType<OpticalFlowExecuteInfoNV>;
    }

    class PhysicalDeviceLegacyDitheringFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceLegacyDitheringFeaturesEXT>;
    }

    class PhysicalDevicePipelineProtectedAccessFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePipelineProtectedAccessFeaturesEXT>;
    }

    class ShaderEXT {
        static $gtype: GObject.GType<ShaderEXT>;
    }

    class ShaderCodeTypeEXT {
        static $gtype: GObject.GType<ShaderCodeTypeEXT>;
    }

    class ShaderCreateFlagBitsEXT {
        static $gtype: GObject.GType<ShaderCreateFlagBitsEXT>;
    }

    class ShaderCreateFlagsEXT {
        static $gtype: GObject.GType<ShaderCreateFlagsEXT>;
    }

    class PhysicalDeviceShaderObjectFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderObjectFeaturesEXT>;
    }

    class PhysicalDeviceShaderObjectPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceShaderObjectPropertiesEXT>;
    }

    class ShaderCreateInfoEXT {
        static $gtype: GObject.GType<ShaderCreateInfoEXT>;
    }

    class ShaderRequiredSubgroupSizeCreateInfoEXT {
        static $gtype: GObject.GType<ShaderRequiredSubgroupSizeCreateInfoEXT>;
    }

    class PhysicalDeviceTilePropertiesFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceTilePropertiesFeaturesQCOM>;
    }

    class TilePropertiesQCOM {
        static $gtype: GObject.GType<TilePropertiesQCOM>;
    }

    class PhysicalDeviceAmigoProfilingFeaturesSEC {
        static $gtype: GObject.GType<PhysicalDeviceAmigoProfilingFeaturesSEC>;
    }

    class AmigoProfilingSubmitInfoSEC {
        static $gtype: GObject.GType<AmigoProfilingSubmitInfoSEC>;
    }

    class PhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM>;
    }

    class RayTracingInvocationReorderModeNV {
        static $gtype: GObject.GType<RayTracingInvocationReorderModeNV>;
    }

    class PhysicalDeviceRayTracingInvocationReorderPropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingInvocationReorderPropertiesNV>;
    }

    class PhysicalDeviceRayTracingInvocationReorderFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingInvocationReorderFeaturesNV>;
    }

    class PhysicalDeviceExtendedSparseAddressSpaceFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceExtendedSparseAddressSpaceFeaturesNV>;
    }

    class PhysicalDeviceExtendedSparseAddressSpacePropertiesNV {
        static $gtype: GObject.GType<PhysicalDeviceExtendedSparseAddressSpacePropertiesNV>;
    }

    class PhysicalDeviceLegacyVertexAttributesFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceLegacyVertexAttributesFeaturesEXT>;
    }

    class PhysicalDeviceLegacyVertexAttributesPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceLegacyVertexAttributesPropertiesEXT>;
    }

    class LayerSettingTypeEXT {
        static $gtype: GObject.GType<LayerSettingTypeEXT>;
    }

    class LayerSettingEXT {
        static $gtype: GObject.GType<LayerSettingEXT>;
    }

    class LayerSettingsCreateInfoEXT {
        static $gtype: GObject.GType<LayerSettingsCreateInfoEXT>;
    }

    class PhysicalDeviceShaderCoreBuiltinsFeaturesARM {
        static $gtype: GObject.GType<PhysicalDeviceShaderCoreBuiltinsFeaturesARM>;
    }

    class PhysicalDeviceShaderCoreBuiltinsPropertiesARM {
        static $gtype: GObject.GType<PhysicalDeviceShaderCoreBuiltinsPropertiesARM>;
    }

    class PhysicalDevicePipelineLibraryGroupHandlesFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDevicePipelineLibraryGroupHandlesFeaturesEXT>;
    }

    class PhysicalDeviceDynamicRenderingUnusedAttachmentsFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceDynamicRenderingUnusedAttachmentsFeaturesEXT>;
    }

    class LatencyMarkerNV {
        static $gtype: GObject.GType<LatencyMarkerNV>;
    }

    class OutOfBandQueueTypeNV {
        static $gtype: GObject.GType<OutOfBandQueueTypeNV>;
    }

    class LatencySleepModeInfoNV {
        static $gtype: GObject.GType<LatencySleepModeInfoNV>;
    }

    class LatencySleepInfoNV {
        static $gtype: GObject.GType<LatencySleepInfoNV>;
    }

    class SetLatencyMarkerInfoNV {
        static $gtype: GObject.GType<SetLatencyMarkerInfoNV>;
    }

    class LatencyTimingsFrameReportNV {
        static $gtype: GObject.GType<LatencyTimingsFrameReportNV>;
    }

    class GetLatencyMarkerInfoNV {
        static $gtype: GObject.GType<GetLatencyMarkerInfoNV>;
    }

    class LatencySubmissionPresentIdNV {
        static $gtype: GObject.GType<LatencySubmissionPresentIdNV>;
    }

    class SwapchainLatencyCreateInfoNV {
        static $gtype: GObject.GType<SwapchainLatencyCreateInfoNV>;
    }

    class OutOfBandQueueTypeInfoNV {
        static $gtype: GObject.GType<OutOfBandQueueTypeInfoNV>;
    }

    class LatencySurfaceCapabilitiesNV {
        static $gtype: GObject.GType<LatencySurfaceCapabilitiesNV>;
    }

    class PhysicalDeviceMultiviewPerViewRenderAreasFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceMultiviewPerViewRenderAreasFeaturesQCOM>;
    }

    class MultiviewPerViewRenderAreasRenderPassBeginInfoQCOM {
        static $gtype: GObject.GType<MultiviewPerViewRenderAreasRenderPassBeginInfoQCOM>;
    }

    class PhysicalDevicePerStageDescriptorSetFeaturesNV {
        static $gtype: GObject.GType<PhysicalDevicePerStageDescriptorSetFeaturesNV>;
    }

    class BlockMatchWindowCompareModeQCOM {
        static $gtype: GObject.GType<BlockMatchWindowCompareModeQCOM>;
    }

    class PhysicalDeviceImageProcessing2FeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceImageProcessing2FeaturesQCOM>;
    }

    class PhysicalDeviceImageProcessing2PropertiesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceImageProcessing2PropertiesQCOM>;
    }

    class SamplerBlockMatchWindowCreateInfoQCOM {
        static $gtype: GObject.GType<SamplerBlockMatchWindowCreateInfoQCOM>;
    }

    class CubicFilterWeightsQCOM {
        static $gtype: GObject.GType<CubicFilterWeightsQCOM>;
    }

    class PhysicalDeviceCubicWeightsFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceCubicWeightsFeaturesQCOM>;
    }

    class SamplerCubicWeightsCreateInfoQCOM {
        static $gtype: GObject.GType<SamplerCubicWeightsCreateInfoQCOM>;
    }

    class BlitImageCubicWeightsInfoQCOM {
        static $gtype: GObject.GType<BlitImageCubicWeightsInfoQCOM>;
    }

    class PhysicalDeviceYcbcrDegammaFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceYcbcrDegammaFeaturesQCOM>;
    }

    class SamplerYcbcrConversionYcbcrDegammaCreateInfoQCOM {
        static $gtype: GObject.GType<SamplerYcbcrConversionYcbcrDegammaCreateInfoQCOM>;
    }

    class PhysicalDeviceCubicClampFeaturesQCOM {
        static $gtype: GObject.GType<PhysicalDeviceCubicClampFeaturesQCOM>;
    }

    class PhysicalDeviceAttachmentFeedbackLoopDynamicStateFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceAttachmentFeedbackLoopDynamicStateFeaturesEXT>;
    }

    class LayeredDriverUnderlyingApiMSFT {
        static $gtype: GObject.GType<LayeredDriverUnderlyingApiMSFT>;
    }

    class PhysicalDeviceLayeredDriverPropertiesMSFT {
        static $gtype: GObject.GType<PhysicalDeviceLayeredDriverPropertiesMSFT>;
    }

    class PhysicalDeviceDescriptorPoolOverallocationFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceDescriptorPoolOverallocationFeaturesNV>;
    }

    class PhysicalDeviceRawAccessChainsFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceRawAccessChainsFeaturesNV>;
    }

    class PhysicalDeviceShaderAtomicFloat16VectorFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceShaderAtomicFloat16VectorFeaturesNV>;
    }

    class PhysicalDeviceRayTracingValidationFeaturesNV {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingValidationFeaturesNV>;
    }

    class PhysicalDeviceImageAlignmentControlFeaturesMESA {
        static $gtype: GObject.GType<PhysicalDeviceImageAlignmentControlFeaturesMESA>;
    }

    class PhysicalDeviceImageAlignmentControlPropertiesMESA {
        static $gtype: GObject.GType<PhysicalDeviceImageAlignmentControlPropertiesMESA>;
    }

    class ImageAlignmentControlCreateInfoMESA {
        static $gtype: GObject.GType<ImageAlignmentControlCreateInfoMESA>;
    }

    class BuildAccelerationStructureModeKHR {
        static $gtype: GObject.GType<BuildAccelerationStructureModeKHR>;
    }

    class AccelerationStructureCreateFlagBitsKHR {
        static $gtype: GObject.GType<AccelerationStructureCreateFlagBitsKHR>;
    }

    class AccelerationStructureCreateFlagsKHR {
        static $gtype: GObject.GType<AccelerationStructureCreateFlagsKHR>;
    }

    class AccelerationStructureBuildRangeInfoKHR {
        static $gtype: GObject.GType<AccelerationStructureBuildRangeInfoKHR>;
    }

    class AccelerationStructureGeometryTrianglesDataKHR {
        static $gtype: GObject.GType<AccelerationStructureGeometryTrianglesDataKHR>;
    }

    class AccelerationStructureGeometryAabbsDataKHR {
        static $gtype: GObject.GType<AccelerationStructureGeometryAabbsDataKHR>;
    }

    class AccelerationStructureGeometryInstancesDataKHR {
        static $gtype: GObject.GType<AccelerationStructureGeometryInstancesDataKHR>;
    }

    class AccelerationStructureGeometryDataKHR {
        static $gtype: GObject.GType<AccelerationStructureGeometryDataKHR>;
    }

    class AccelerationStructureGeometryKHR {
        static $gtype: GObject.GType<AccelerationStructureGeometryKHR>;
    }

    class AccelerationStructureBuildGeometryInfoKHR {
        static $gtype: GObject.GType<AccelerationStructureBuildGeometryInfoKHR>;
    }

    class AccelerationStructureCreateInfoKHR {
        static $gtype: GObject.GType<AccelerationStructureCreateInfoKHR>;
    }

    class WriteDescriptorSetAccelerationStructureKHR {
        static $gtype: GObject.GType<WriteDescriptorSetAccelerationStructureKHR>;
    }

    class PhysicalDeviceAccelerationStructureFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceAccelerationStructureFeaturesKHR>;
    }

    class PhysicalDeviceAccelerationStructurePropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceAccelerationStructurePropertiesKHR>;
    }

    class AccelerationStructureDeviceAddressInfoKHR {
        static $gtype: GObject.GType<AccelerationStructureDeviceAddressInfoKHR>;
    }

    class AccelerationStructureVersionInfoKHR {
        static $gtype: GObject.GType<AccelerationStructureVersionInfoKHR>;
    }

    class CopyAccelerationStructureToMemoryInfoKHR {
        static $gtype: GObject.GType<CopyAccelerationStructureToMemoryInfoKHR>;
    }

    class CopyMemoryToAccelerationStructureInfoKHR {
        static $gtype: GObject.GType<CopyMemoryToAccelerationStructureInfoKHR>;
    }

    class CopyAccelerationStructureInfoKHR {
        static $gtype: GObject.GType<CopyAccelerationStructureInfoKHR>;
    }

    class AccelerationStructureBuildSizesInfoKHR {
        static $gtype: GObject.GType<AccelerationStructureBuildSizesInfoKHR>;
    }

    class ShaderGroupShaderKHR {
        static $gtype: GObject.GType<ShaderGroupShaderKHR>;
    }

    class RayTracingShaderGroupCreateInfoKHR {
        static $gtype: GObject.GType<RayTracingShaderGroupCreateInfoKHR>;
    }

    class RayTracingPipelineInterfaceCreateInfoKHR {
        static $gtype: GObject.GType<RayTracingPipelineInterfaceCreateInfoKHR>;
    }

    class RayTracingPipelineCreateInfoKHR {
        static $gtype: GObject.GType<RayTracingPipelineCreateInfoKHR>;
    }

    class PhysicalDeviceRayTracingPipelineFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingPipelineFeaturesKHR>;
    }

    class PhysicalDeviceRayTracingPipelinePropertiesKHR {
        static $gtype: GObject.GType<PhysicalDeviceRayTracingPipelinePropertiesKHR>;
    }

    class StridedDeviceAddressRegionKHR {
        static $gtype: GObject.GType<StridedDeviceAddressRegionKHR>;
    }

    class TraceRaysIndirectCommandKHR {
        static $gtype: GObject.GType<TraceRaysIndirectCommandKHR>;
    }

    class PhysicalDeviceRayQueryFeaturesKHR {
        static $gtype: GObject.GType<PhysicalDeviceRayQueryFeaturesKHR>;
    }

    class PhysicalDeviceMeshShaderFeaturesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMeshShaderFeaturesEXT>;
    }

    class PhysicalDeviceMeshShaderPropertiesEXT {
        static $gtype: GObject.GType<PhysicalDeviceMeshShaderPropertiesEXT>;
    }

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
