/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './vulkan-1.0-ambient.d.ts';
import './vulkan-1.0-import.d.ts';
/**
 * Vulkan-1.0
 */

import type GObject from '@girs/gobject-2.0';

export namespace Vulkan {
    class Flags {}

    class Bool32 {}

    class DeviceSize {}

    class SampleMask {}

    class Instance {}

    class PhysicalDevice {}

    class Device {}

    class Queue {}

    class Semaphore {}

    class CommandBuffer {}

    class Fence {}

    class DeviceMemory {}

    class Buffer {}

    class Image {}

    class Event {}

    class QueryPool {}

    class BufferView {}

    class ImageView {}

    class ShaderModule {}

    class PipelineCache {}

    class PipelineLayout {}

    class RenderPass {}

    class Pipeline {}

    class DescriptorSetLayout {}

    class Sampler {}

    class DescriptorPool {}

    class DescriptorSet {}

    class Framebuffer {}

    class CommandPool {}

    class PipelineCacheHeaderVersion {}

    class Result {}

    class StructureType {}

    class SystemAllocationScope {}

    class InternalAllocationType {}

    class Format {}

    class ImageType {}

    class ImageTiling {}

    class PhysicalDeviceType {}

    class QueryType {}

    class SharingMode {}

    class ImageLayout {}

    class ImageViewType {}

    class ComponentSwizzle {}

    class VertexInputRate {}

    class PrimitiveTopology {}

    class PolygonMode {}

    class FrontFace {}

    class CompareOp {}

    class StencilOp {}

    class LogicOp {}

    class BlendFactor {}

    class BlendOp {}

    class DynamicState {}

    class Filter {}

    class SamplerMipmapMode {}

    class SamplerAddressMode {}

    class BorderColor {}

    class DescriptorType {}

    class AttachmentLoadOp {}

    class AttachmentStoreOp {}

    class PipelineBindPoint {}

    class CommandBufferLevel {}

    class IndexType {}

    class SubpassContents {}

    class ObjectType {}

    class VendorId {}

    class InstanceCreateFlags {}

    class FormatFeatureFlagBits {}

    class FormatFeatureFlags {}

    class ImageUsageFlagBits {}

    class ImageUsageFlags {}

    class ImageCreateFlagBits {}

    class ImageCreateFlags {}

    class SampleCountFlagBits {}

    class SampleCountFlags {}

    class QueueFlagBits {}

    class QueueFlags {}

    class MemoryPropertyFlagBits {}

    class MemoryPropertyFlags {}

    class MemoryHeapFlagBits {}

    class MemoryHeapFlags {}

    class DeviceCreateFlags {}

    class DeviceQueueCreateFlagBits {}

    class DeviceQueueCreateFlags {}

    class PipelineStageFlagBits {}

    class PipelineStageFlags {}

    class MemoryMapFlags {}

    class ImageAspectFlagBits {}

    class ImageAspectFlags {}

    class SparseImageFormatFlagBits {}

    class SparseImageFormatFlags {}

    class SparseMemoryBindFlagBits {}

    class SparseMemoryBindFlags {}

    class FenceCreateFlagBits {}

    class FenceCreateFlags {}

    class SemaphoreCreateFlags {}

    class EventCreateFlags {}

    class QueryPoolCreateFlags {}

    class QueryPipelineStatisticFlagBits {}

    class QueryPipelineStatisticFlags {}

    class QueryResultFlagBits {}

    class QueryResultFlags {}

    class BufferCreateFlagBits {}

    class BufferCreateFlags {}

    class BufferUsageFlagBits {}

    class BufferUsageFlags {}

    class BufferViewCreateFlags {}

    class ImageViewCreateFlagBits {}

    class ImageViewCreateFlags {}

    class ShaderModuleCreateFlags {}

    class PipelineCacheCreateFlags {}

    class PipelineCreateFlagBits {}

    class PipelineCreateFlags {}

    class PipelineShaderStageCreateFlags {}

    class ShaderStageFlagBits {}

    class PipelineVertexInputStateCreateFlags {}

    class PipelineInputAssemblyStateCreateFlags {}

    class PipelineTessellationStateCreateFlags {}

    class PipelineViewportStateCreateFlags {}

    class PipelineRasterizationStateCreateFlags {}

    class CullModeFlagBits {}

    class CullModeFlags {}

    class PipelineMultisampleStateCreateFlags {}

    class PipelineDepthStencilStateCreateFlags {}

    class PipelineColorBlendStateCreateFlags {}

    class ColorComponentFlagBits {}

    class ColorComponentFlags {}

    class PipelineDynamicStateCreateFlags {}

    class PipelineLayoutCreateFlags {}

    class ShaderStageFlags {}

    class SamplerCreateFlagBits {}

    class SamplerCreateFlags {}

    class DescriptorSetLayoutCreateFlagBits {}

    class DescriptorSetLayoutCreateFlags {}

    class DescriptorPoolCreateFlagBits {}

    class DescriptorPoolCreateFlags {}

    class DescriptorPoolResetFlags {}

    class FramebufferCreateFlags {}

    class RenderPassCreateFlags {}

    class AttachmentDescriptionFlagBits {}

    class AttachmentDescriptionFlags {}

    class SubpassDescriptionFlagBits {}

    class SubpassDescriptionFlags {}

    class AccessFlagBits {}

    class AccessFlags {}

    class DependencyFlagBits {}

    class DependencyFlags {}

    class CommandPoolCreateFlagBits {}

    class CommandPoolCreateFlags {}

    class CommandPoolResetFlagBits {}

    class CommandPoolResetFlags {}

    class CommandBufferUsageFlagBits {}

    class CommandBufferUsageFlags {}

    class QueryControlFlagBits {}

    class QueryControlFlags {}

    class CommandBufferResetFlagBits {}

    class CommandBufferResetFlags {}

    class StencilFaceFlagBits {}

    class StencilFaceFlags {}

    class ApplicationInfo {}

    class InstanceCreateInfo {}

    class AllocationCallbacks {}

    class PhysicalDeviceFeatures {}

    class FormatProperties {}

    class Extent3D {}

    class ImageFormatProperties {}

    class PhysicalDeviceLimits {}

    class PhysicalDeviceSparseProperties {}

    class PhysicalDeviceProperties {}

    class QueueFamilyProperties {}

    class MemoryType {}

    class MemoryHeap {}

    class PhysicalDeviceMemoryProperties {}

    class DeviceQueueCreateInfo {}

    class DeviceCreateInfo {}

    class ExtensionProperties {}

    class LayerProperties {}

    class SubmitInfo {}

    class MemoryAllocateInfo {}

    class MappedMemoryRange {}

    class MemoryRequirements {}

    class SparseImageFormatProperties {}

    class SparseImageMemoryRequirements {}

    class SparseMemoryBind {}

    class SparseBufferMemoryBindInfo {}

    class SparseImageOpaqueMemoryBindInfo {}

    class ImageSubresource {}

    class Offset3D {}

    class SparseImageMemoryBind {}

    class SparseImageMemoryBindInfo {}

    class BindSparseInfo {}

    class FenceCreateInfo {}

    class SemaphoreCreateInfo {}

    class EventCreateInfo {}

    class QueryPoolCreateInfo {}

    class BufferCreateInfo {}

    class BufferViewCreateInfo {}

    class ImageCreateInfo {}

    class SubresourceLayout {}

    class ComponentMapping {}

    class ImageSubresourceRange {}

    class ImageViewCreateInfo {}

    class ShaderModuleCreateInfo {}

    class PipelineCacheCreateInfo {}

    class SpecializationMapEntry {}

    class SpecializationInfo {}

    class PipelineShaderStageCreateInfo {}

    class VertexInputBindingDescription {}

    class VertexInputAttributeDescription {}

    class PipelineVertexInputStateCreateInfo {}

    class PipelineInputAssemblyStateCreateInfo {}

    class PipelineTessellationStateCreateInfo {}

    class Viewport {}

    class Offset2D {}

    class Extent2D {}

    class Rect2D {}

    class PipelineViewportStateCreateInfo {}

    class PipelineRasterizationStateCreateInfo {}

    class PipelineMultisampleStateCreateInfo {}

    class StencilOpState {}

    class PipelineDepthStencilStateCreateInfo {}

    class PipelineColorBlendAttachmentState {}

    class PipelineColorBlendStateCreateInfo {}

    class PipelineDynamicStateCreateInfo {}

    class GraphicsPipelineCreateInfo {}

    class ComputePipelineCreateInfo {}

    class PushConstantRange {}

    class PipelineLayoutCreateInfo {}

    class SamplerCreateInfo {}

    class DescriptorSetLayoutBinding {}

    class DescriptorSetLayoutCreateInfo {}

    class DescriptorPoolSize {}

    class DescriptorPoolCreateInfo {}

    class DescriptorSetAllocateInfo {}

    class DescriptorImageInfo {}

    class DescriptorBufferInfo {}

    class WriteDescriptorSet {}

    class CopyDescriptorSet {}

    class FramebufferCreateInfo {}

    class AttachmentDescription {}

    class AttachmentReference {}

    class SubpassDescription {}

    class SubpassDependency {}

    class RenderPassCreateInfo {}

    class CommandPoolCreateInfo {}

    class CommandBufferAllocateInfo {}

    class CommandBufferInheritanceInfo {}

    class CommandBufferBeginInfo {}

    class BufferCopy {}

    class ImageSubresourceLayers {}

    class ImageCopy {}

    class ImageBlit {}

    class BufferImageCopy {}

    class ClearColorValue {}

    class ClearDepthStencilValue {}

    class ClearValue {}

    class ClearAttachment {}

    class ClearRect {}

    class ImageResolve {}

    class MemoryBarrier {}

    class BufferMemoryBarrier {}

    class ImageMemoryBarrier {}

    class RenderPassBeginInfo {}

    class DispatchIndirectCommand {}

    class DrawIndexedIndirectCommand {}

    class DrawIndirectCommand {}

    class BaseOutStructure {}

    class BaseInStructure {}

    class SamplerYcbcrConversion {}

    class DescriptorUpdateTemplate {}

    class PointClippingBehavior {}

    class TessellationDomainOrigin {}

    class SamplerYcbcrModelConversion {}

    class SamplerYcbcrRange {}

    class ChromaLocation {}

    class DescriptorUpdateTemplateType {}

    class SubgroupFeatureFlagBits {}

    class SubgroupFeatureFlags {}

    class PeerMemoryFeatureFlagBits {}

    class PeerMemoryFeatureFlags {}

    class MemoryAllocateFlagBits {}

    class MemoryAllocateFlags {}

    class CommandPoolTrimFlags {}

    class DescriptorUpdateTemplateCreateFlags {}

    class ExternalMemoryHandleTypeFlagBits {}

    class ExternalMemoryHandleTypeFlags {}

    class ExternalMemoryFeatureFlagBits {}

    class ExternalMemoryFeatureFlags {}

    class ExternalFenceHandleTypeFlagBits {}

    class ExternalFenceHandleTypeFlags {}

    class ExternalFenceFeatureFlagBits {}

    class ExternalFenceFeatureFlags {}

    class FenceImportFlagBits {}

    class FenceImportFlags {}

    class SemaphoreImportFlagBits {}

    class SemaphoreImportFlags {}

    class ExternalSemaphoreHandleTypeFlagBits {}

    class ExternalSemaphoreHandleTypeFlags {}

    class ExternalSemaphoreFeatureFlagBits {}

    class ExternalSemaphoreFeatureFlags {}

    class PhysicalDeviceSubgroupProperties {}

    class BindBufferMemoryInfo {}

    class BindImageMemoryInfo {}

    class PhysicalDevice16BitStorageFeatures {}

    class MemoryDedicatedRequirements {}

    class MemoryDedicatedAllocateInfo {}

    class MemoryAllocateFlagsInfo {}

    class DeviceGroupRenderPassBeginInfo {}

    class DeviceGroupCommandBufferBeginInfo {}

    class DeviceGroupSubmitInfo {}

    class DeviceGroupBindSparseInfo {}

    class BindBufferMemoryDeviceGroupInfo {}

    class BindImageMemoryDeviceGroupInfo {}

    class PhysicalDeviceGroupProperties {}

    class DeviceGroupDeviceCreateInfo {}

    class BufferMemoryRequirementsInfo2 {}

    class ImageMemoryRequirementsInfo2 {}

    class ImageSparseMemoryRequirementsInfo2 {}

    class MemoryRequirements2 {}

    class MemoryRequirements2KHR {}

    class SparseImageMemoryRequirements2 {}

    class PhysicalDeviceFeatures2 {}

    class PhysicalDeviceProperties2 {}

    class FormatProperties2 {}

    class ImageFormatProperties2 {}

    class PhysicalDeviceImageFormatInfo2 {}

    class QueueFamilyProperties2 {}

    class PhysicalDeviceMemoryProperties2 {}

    class SparseImageFormatProperties2 {}

    class PhysicalDeviceSparseImageFormatInfo2 {}

    class PhysicalDevicePointClippingProperties {}

    class InputAttachmentAspectReference {}

    class RenderPassInputAttachmentAspectCreateInfo {}

    class ImageViewUsageCreateInfo {}

    class PipelineTessellationDomainOriginStateCreateInfo {}

    class RenderPassMultiviewCreateInfo {}

    class PhysicalDeviceMultiviewFeatures {}

    class PhysicalDeviceMultiviewProperties {}

    class PhysicalDeviceVariablePointersFeatures {}

    class PhysicalDeviceVariablePointerFeatures {}

    class PhysicalDeviceProtectedMemoryFeatures {}

    class PhysicalDeviceProtectedMemoryProperties {}

    class DeviceQueueInfo2 {}

    class ProtectedSubmitInfo {}

    class SamplerYcbcrConversionCreateInfo {}

    class SamplerYcbcrConversionInfo {}

    class BindImagePlaneMemoryInfo {}

    class ImagePlaneMemoryRequirementsInfo {}

    class PhysicalDeviceSamplerYcbcrConversionFeatures {}

    class SamplerYcbcrConversionImageFormatProperties {}

    class DescriptorUpdateTemplateEntry {}

    class DescriptorUpdateTemplateCreateInfo {}

    class ExternalMemoryProperties {}

    class PhysicalDeviceExternalImageFormatInfo {}

    class ExternalImageFormatProperties {}

    class PhysicalDeviceExternalBufferInfo {}

    class ExternalBufferProperties {}

    class PhysicalDeviceIDProperties {}

    class ExternalMemoryImageCreateInfo {}

    class ExternalMemoryBufferCreateInfo {}

    class ExportMemoryAllocateInfo {}

    class PhysicalDeviceExternalFenceInfo {}

    class ExternalFenceProperties {}

    class ExportFenceCreateInfo {}

    class ExportSemaphoreCreateInfo {}

    class PhysicalDeviceExternalSemaphoreInfo {}

    class ExternalSemaphoreProperties {}

    class PhysicalDeviceMaintenance3Properties {}

    class DescriptorSetLayoutSupport {}

    class PhysicalDeviceShaderDrawParametersFeatures {}

    class PhysicalDeviceShaderDrawParameterFeatures {}

    class SurfaceKHR {}

    class ColorSpaceKHR {}

    class PresentModeKHR {}

    class SurfaceTransformFlagBitsKHR {}

    class SurfaceTransformFlagsKHR {}

    class CompositeAlphaFlagBitsKHR {}

    class CompositeAlphaFlagsKHR {}

    class SurfaceCapabilitiesKHR {}

    class SurfaceFormatKHR {}

    class SwapchainKHR {}

    class SwapchainCreateFlagBitsKHR {}

    class SwapchainCreateFlagsKHR {}

    class DeviceGroupPresentModeFlagBitsKHR {}

    class DeviceGroupPresentModeFlagsKHR {}

    class SwapchainCreateInfoKHR {}

    class PresentInfoKHR {}

    class ImageSwapchainCreateInfoKHR {}

    class BindImageMemorySwapchainInfoKHR {}

    class AcquireNextImageInfoKHR {}

    class DeviceGroupPresentCapabilitiesKHR {}

    class DeviceGroupPresentInfoKHR {}

    class DeviceGroupSwapchainCreateInfoKHR {}

    class DisplayKHR {}

    class DisplayModeKHR {}

    class DisplayPlaneAlphaFlagBitsKHR {}

    class DisplayPlaneAlphaFlagsKHR {}

    class DisplayModeCreateFlagsKHR {}

    class DisplaySurfaceCreateFlagsKHR {}

    class DisplayPropertiesKHR {}

    class DisplayModeParametersKHR {}

    class DisplayModePropertiesKHR {}

    class DisplayModeCreateInfoKHR {}

    class DisplayPlaneCapabilitiesKHR {}

    class DisplayPlanePropertiesKHR {}

    class DisplaySurfaceCreateInfoKHR {}

    class DisplayPresentInfoKHR {}

    class RenderPassMultiviewCreateInfoKHR {}

    class PhysicalDeviceMultiviewFeaturesKHR {}

    class PhysicalDeviceMultiviewPropertiesKHR {}

    class PhysicalDeviceFeatures2KHR {}

    class PhysicalDeviceProperties2KHR {}

    class FormatProperties2KHR {}

    class ImageFormatProperties2KHR {}

    class PhysicalDeviceImageFormatInfo2KHR {}

    class QueueFamilyProperties2KHR {}

    class PhysicalDeviceMemoryProperties2KHR {}

    class SparseImageFormatProperties2KHR {}

    class PhysicalDeviceSparseImageFormatInfo2KHR {}

    class PeerMemoryFeatureFlagsKHR {}

    class PeerMemoryFeatureFlagBitsKHR {}

    class MemoryAllocateFlagsKHR {}

    class MemoryAllocateFlagBitsKHR {}

    class MemoryAllocateFlagsInfoKHR {}

    class DeviceGroupRenderPassBeginInfoKHR {}

    class DeviceGroupCommandBufferBeginInfoKHR {}

    class DeviceGroupSubmitInfoKHR {}

    class DeviceGroupBindSparseInfoKHR {}

    class BindBufferMemoryDeviceGroupInfoKHR {}

    class BindImageMemoryDeviceGroupInfoKHR {}

    class CommandPoolTrimFlagsKHR {}

    class PhysicalDeviceGroupPropertiesKHR {}

    class DeviceGroupDeviceCreateInfoKHR {}

    class ExternalMemoryHandleTypeFlagsKHR {}

    class ExternalMemoryHandleTypeFlagBitsKHR {}

    class ExternalMemoryFeatureFlagsKHR {}

    class ExternalMemoryFeatureFlagBitsKHR {}

    class ExternalMemoryPropertiesKHR {}

    class PhysicalDeviceExternalImageFormatInfoKHR {}

    class ExternalImageFormatPropertiesKHR {}

    class PhysicalDeviceExternalBufferInfoKHR {}

    class ExternalBufferPropertiesKHR {}

    class PhysicalDeviceIDPropertiesKHR {}

    class ExternalMemoryImageCreateInfoKHR {}

    class ExternalMemoryBufferCreateInfoKHR {}

    class ExportMemoryAllocateInfoKHR {}

    class ImportMemoryFdInfoKHR {}

    class MemoryFdPropertiesKHR {}

    class MemoryGetFdInfoKHR {}

    class ExternalSemaphoreHandleTypeFlagsKHR {}

    class ExternalSemaphoreHandleTypeFlagBitsKHR {}

    class ExternalSemaphoreFeatureFlagsKHR {}

    class ExternalSemaphoreFeatureFlagBitsKHR {}

    class PhysicalDeviceExternalSemaphoreInfoKHR {}

    class ExternalSemaphorePropertiesKHR {}

    class SemaphoreImportFlagsKHR {}

    class SemaphoreImportFlagBitsKHR {}

    class ExportSemaphoreCreateInfoKHR {}

    class ImportSemaphoreFdInfoKHR {}

    class SemaphoreGetFdInfoKHR {}

    class PhysicalDevicePushDescriptorPropertiesKHR {}

    class PhysicalDeviceFloat16Int8FeaturesKHR {}

    class PhysicalDevice16BitStorageFeaturesKHR {}

    class RectLayerKHR {}

    class PresentRegionKHR {}

    class PresentRegionsKHR {}

    class DescriptorUpdateTemplateKHR {}

    class DescriptorUpdateTemplateTypeKHR {}

    class DescriptorUpdateTemplateCreateFlagsKHR {}

    class DescriptorUpdateTemplateEntryKHR {}

    class DescriptorUpdateTemplateCreateInfoKHR {}

    class AttachmentDescription2KHR {}

    class AttachmentReference2KHR {}

    class SubpassDescription2KHR {}

    class SubpassDependency2KHR {}

    class RenderPassCreateInfo2KHR {}

    class SubpassBeginInfoKHR {}

    class SubpassEndInfoKHR {}

    class SharedPresentSurfaceCapabilitiesKHR {}

    class ExternalFenceHandleTypeFlagsKHR {}

    class ExternalFenceHandleTypeFlagBitsKHR {}

    class ExternalFenceFeatureFlagsKHR {}

    class ExternalFenceFeatureFlagBitsKHR {}

    class PhysicalDeviceExternalFenceInfoKHR {}

    class ExternalFencePropertiesKHR {}

    class FenceImportFlagsKHR {}

    class FenceImportFlagBitsKHR {}

    class ExportFenceCreateInfoKHR {}

    class ImportFenceFdInfoKHR {}

    class FenceGetFdInfoKHR {}

    class PointClippingBehaviorKHR {}

    class TessellationDomainOriginKHR {}

    class PhysicalDevicePointClippingPropertiesKHR {}

    class RenderPassInputAttachmentAspectCreateInfoKHR {}

    class InputAttachmentAspectReferenceKHR {}

    class ImageViewUsageCreateInfoKHR {}

    class PipelineTessellationDomainOriginStateCreateInfoKHR {}

    class PhysicalDeviceSurfaceInfo2KHR {}

    class SurfaceCapabilities2KHR {}

    class SurfaceFormat2KHR {}

    class PhysicalDeviceVariablePointerFeaturesKHR {}

    class PhysicalDeviceVariablePointersFeaturesKHR {}

    class DisplayProperties2KHR {}

    class DisplayPlaneProperties2KHR {}

    class DisplayModeProperties2KHR {}

    class DisplayPlaneInfo2KHR {}

    class DisplayPlaneCapabilities2KHR {}

    class MemoryDedicatedRequirementsKHR {}

    class MemoryDedicatedAllocateInfoKHR {}

    class BufferMemoryRequirementsInfo2KHR {}

    class ImageMemoryRequirementsInfo2KHR {}

    class ImageSparseMemoryRequirementsInfo2KHR {}

    class SparseImageMemoryRequirements2KHR {}

    class ImageFormatListCreateInfoKHR {}

    class SamplerYcbcrConversionKHR {}

    class SamplerYcbcrModelConversionKHR {}

    class SamplerYcbcrRangeKHR {}

    class ChromaLocationKHR {}

    class SamplerYcbcrConversionCreateInfoKHR {}

    class SamplerYcbcrConversionInfoKHR {}

    class BindImagePlaneMemoryInfoKHR {}

    class ImagePlaneMemoryRequirementsInfoKHR {}

    class PhysicalDeviceSamplerYcbcrConversionFeaturesKHR {}

    class SamplerYcbcrConversionImageFormatPropertiesKHR {}

    class BindBufferMemoryInfoKHR {}

    class BindImageMemoryInfoKHR {}

    class PhysicalDeviceMaintenance3PropertiesKHR {}

    class DescriptorSetLayoutSupportKHR {}

    class PhysicalDevice8BitStorageFeaturesKHR {}

    class PhysicalDeviceShaderAtomicInt64FeaturesKHR {}

    class DriverIdKHR {}

    class ConformanceVersionKHR {}

    class PhysicalDeviceDriverPropertiesKHR {}

    class PhysicalDeviceFloatControlsPropertiesKHR {}

    class ResolveModeFlagBitsKHR {}

    class ResolveModeFlagsKHR {}

    class SubpassDescriptionDepthStencilResolveKHR {}

    class PhysicalDeviceDepthStencilResolvePropertiesKHR {}

    class PhysicalDeviceVulkanMemoryModelFeaturesKHR {}

    class SurfaceProtectedCapabilitiesKHR {}

    class PhysicalDeviceUniformBufferStandardLayoutFeaturesKHR {}

    class DebugReportCallbackEXT {}

    class DebugReportObjectTypeEXT {}

    class DebugReportFlagBitsEXT {}

    class DebugReportFlagsEXT {}

    class DebugReportCallbackCreateInfoEXT {}

    class RasterizationOrderAMD {}

    class PipelineRasterizationStateRasterizationOrderAMD {}

    class DebugMarkerObjectNameInfoEXT {}

    class DebugMarkerObjectTagInfoEXT {}

    class DebugMarkerMarkerInfoEXT {}

    class DedicatedAllocationImageCreateInfoNV {}

    class DedicatedAllocationBufferCreateInfoNV {}

    class DedicatedAllocationMemoryAllocateInfoNV {}

    class PipelineRasterizationStateStreamCreateFlagsEXT {}

    class PhysicalDeviceTransformFeedbackFeaturesEXT {}

    class PhysicalDeviceTransformFeedbackPropertiesEXT {}

    class PipelineRasterizationStateStreamCreateInfoEXT {}

    class ImageViewHandleInfoNVX {}

    class TextureLODGatherFormatPropertiesAMD {}

    class ShaderInfoTypeAMD {}

    class ShaderResourceUsageAMD {}

    class ShaderStatisticsInfoAMD {}

    class PhysicalDeviceCornerSampledImageFeaturesNV {}

    class ExternalMemoryHandleTypeFlagBitsNV {}

    class ExternalMemoryHandleTypeFlagsNV {}

    class ExternalMemoryFeatureFlagBitsNV {}

    class ExternalMemoryFeatureFlagsNV {}

    class ExternalImageFormatPropertiesNV {}

    class ExternalMemoryImageCreateInfoNV {}

    class ExportMemoryAllocateInfoNV {}

    class ValidationCheckEXT {}

    class ValidationFlagsEXT {}

    class ImageViewASTCDecodeModeEXT {}

    class PhysicalDeviceASTCDecodeFeaturesEXT {}

    class ConditionalRenderingFlagBitsEXT {}

    class ConditionalRenderingFlagsEXT {}

    class ConditionalRenderingBeginInfoEXT {}

    class PhysicalDeviceConditionalRenderingFeaturesEXT {}

    class CommandBufferInheritanceConditionalRenderingInfoEXT {}

    class ObjectTableNVX {}

    class IndirectCommandsLayoutNVX {}

    class IndirectCommandsTokenTypeNVX {}

    class ObjectEntryTypeNVX {}

    class IndirectCommandsLayoutUsageFlagBitsNVX {}

    class IndirectCommandsLayoutUsageFlagsNVX {}

    class ObjectEntryUsageFlagBitsNVX {}

    class ObjectEntryUsageFlagsNVX {}

    class DeviceGeneratedCommandsFeaturesNVX {}

    class DeviceGeneratedCommandsLimitsNVX {}

    class IndirectCommandsTokenNVX {}

    class IndirectCommandsLayoutTokenNVX {}

    class IndirectCommandsLayoutCreateInfoNVX {}

    class CmdProcessCommandsInfoNVX {}

    class CmdReserveSpaceForCommandsInfoNVX {}

    class ObjectTableCreateInfoNVX {}

    class ObjectTableEntryNVX {}

    class ObjectTablePipelineEntryNVX {}

    class ObjectTableDescriptorSetEntryNVX {}

    class ObjectTableVertexBufferEntryNVX {}

    class ObjectTableIndexBufferEntryNVX {}

    class ObjectTablePushConstantEntryNVX {}

    class ViewportWScalingNV {}

    class PipelineViewportWScalingStateCreateInfoNV {}

    class SurfaceCounterFlagBitsEXT {}

    class SurfaceCounterFlagsEXT {}

    class SurfaceCapabilities2EXT {}

    class DisplayPowerStateEXT {}

    class DeviceEventTypeEXT {}

    class DisplayEventTypeEXT {}

    class DisplayPowerInfoEXT {}

    class DeviceEventInfoEXT {}

    class DisplayEventInfoEXT {}

    class SwapchainCounterCreateInfoEXT {}

    class RefreshCycleDurationGOOGLE {}

    class PastPresentationTimingGOOGLE {}

    class PresentTimeGOOGLE {}

    class PresentTimesInfoGOOGLE {}

    class PhysicalDeviceMultiviewPerViewAttributesPropertiesNVX {}

    class ViewportCoordinateSwizzleNV {}

    class PipelineViewportSwizzleStateCreateFlagsNV {}

    class ViewportSwizzleNV {}

    class PipelineViewportSwizzleStateCreateInfoNV {}

    class DiscardRectangleModeEXT {}

    class PipelineDiscardRectangleStateCreateFlagsEXT {}

    class PhysicalDeviceDiscardRectanglePropertiesEXT {}

    class PipelineDiscardRectangleStateCreateInfoEXT {}

    class ConservativeRasterizationModeEXT {}

    class PipelineRasterizationConservativeStateCreateFlagsEXT {}

    class PhysicalDeviceConservativeRasterizationPropertiesEXT {}

    class PipelineRasterizationConservativeStateCreateInfoEXT {}

    class PipelineRasterizationDepthClipStateCreateFlagsEXT {}

    class PhysicalDeviceDepthClipEnableFeaturesEXT {}

    class PipelineRasterizationDepthClipStateCreateInfoEXT {}

    class XYColorEXT {}

    class HdrMetadataEXT {}

    class DebugUtilsMessengerEXT {}

    class DebugUtilsMessengerCallbackDataFlagsEXT {}

    class DebugUtilsMessengerCreateFlagsEXT {}

    class DebugUtilsMessageSeverityFlagBitsEXT {}

    class DebugUtilsMessageSeverityFlagsEXT {}

    class DebugUtilsMessageTypeFlagBitsEXT {}

    class DebugUtilsMessageTypeFlagsEXT {}

    class DebugUtilsObjectNameInfoEXT {}

    class DebugUtilsObjectTagInfoEXT {}

    class DebugUtilsLabelEXT {}

    class DebugUtilsMessengerCallbackDataEXT {}

    class DebugUtilsMessengerCreateInfoEXT {}

    class SamplerReductionModeEXT {}

    class SamplerReductionModeCreateInfoEXT {}

    class PhysicalDeviceSamplerFilterMinmaxPropertiesEXT {}

    class PhysicalDeviceInlineUniformBlockFeaturesEXT {}

    class PhysicalDeviceInlineUniformBlockPropertiesEXT {}

    class WriteDescriptorSetInlineUniformBlockEXT {}

    class DescriptorPoolInlineUniformBlockCreateInfoEXT {}

    class SampleLocationEXT {}

    class SampleLocationsInfoEXT {}

    class AttachmentSampleLocationsEXT {}

    class SubpassSampleLocationsEXT {}

    class RenderPassSampleLocationsBeginInfoEXT {}

    class PipelineSampleLocationsStateCreateInfoEXT {}

    class PhysicalDeviceSampleLocationsPropertiesEXT {}

    class MultisamplePropertiesEXT {}

    class BlendOverlapEXT {}

    class PhysicalDeviceBlendOperationAdvancedFeaturesEXT {}

    class PhysicalDeviceBlendOperationAdvancedPropertiesEXT {}

    class PipelineColorBlendAdvancedStateCreateInfoEXT {}

    class PipelineCoverageToColorStateCreateFlagsNV {}

    class PipelineCoverageToColorStateCreateInfoNV {}

    class CoverageModulationModeNV {}

    class PipelineCoverageModulationStateCreateFlagsNV {}

    class PipelineCoverageModulationStateCreateInfoNV {}

    class DrmFormatModifierPropertiesEXT {}

    class DrmFormatModifierPropertiesListEXT {}

    class PhysicalDeviceImageDrmFormatModifierInfoEXT {}

    class ImageDrmFormatModifierListCreateInfoEXT {}

    class ImageDrmFormatModifierExplicitCreateInfoEXT {}

    class ImageDrmFormatModifierPropertiesEXT {}

    class ValidationCacheEXT {}

    class ValidationCacheHeaderVersionEXT {}

    class ValidationCacheCreateFlagsEXT {}

    class ValidationCacheCreateInfoEXT {}

    class ShaderModuleValidationCacheCreateInfoEXT {}

    class DescriptorBindingFlagBitsEXT {}

    class DescriptorBindingFlagsEXT {}

    class DescriptorSetLayoutBindingFlagsCreateInfoEXT {}

    class PhysicalDeviceDescriptorIndexingFeaturesEXT {}

    class PhysicalDeviceDescriptorIndexingPropertiesEXT {}

    class DescriptorSetVariableDescriptorCountAllocateInfoEXT {}

    class DescriptorSetVariableDescriptorCountLayoutSupportEXT {}

    class ShadingRatePaletteEntryNV {}

    class CoarseSampleOrderTypeNV {}

    class ShadingRatePaletteNV {}

    class PipelineViewportShadingRateImageStateCreateInfoNV {}

    class PhysicalDeviceShadingRateImageFeaturesNV {}

    class PhysicalDeviceShadingRateImagePropertiesNV {}

    class CoarseSampleLocationNV {}

    class CoarseSampleOrderCustomNV {}

    class PipelineViewportCoarseSampleOrderStateCreateInfoNV {}

    class AccelerationStructureNV {}

    class RayTracingShaderGroupTypeNV {}

    class GeometryTypeNV {}

    class AccelerationStructureTypeNV {}

    class CopyAccelerationStructureModeNV {}

    class AccelerationStructureMemoryRequirementsTypeNV {}

    class GeometryFlagBitsNV {}

    class GeometryFlagsNV {}

    class GeometryInstanceFlagBitsNV {}

    class GeometryInstanceFlagsNV {}

    class BuildAccelerationStructureFlagBitsNV {}

    class BuildAccelerationStructureFlagsNV {}

    class RayTracingShaderGroupCreateInfoNV {}

    class RayTracingPipelineCreateInfoNV {}

    class GeometryTrianglesNV {}

    class GeometryAABBNV {}

    class GeometryDataNV {}

    class GeometryNV {}

    class AccelerationStructureInfoNV {}

    class AccelerationStructureCreateInfoNV {}

    class BindAccelerationStructureMemoryInfoNV {}

    class WriteDescriptorSetAccelerationStructureNV {}

    class AccelerationStructureMemoryRequirementsInfoNV {}

    class PhysicalDeviceRayTracingPropertiesNV {}

    class PhysicalDeviceRepresentativeFragmentTestFeaturesNV {}

    class PipelineRepresentativeFragmentTestStateCreateInfoNV {}

    class PhysicalDeviceImageViewImageFormatInfoEXT {}

    class FilterCubicImageViewImageFormatPropertiesEXT {}

    class QueueGlobalPriorityEXT {}

    class DeviceQueueGlobalPriorityCreateInfoEXT {}

    class ImportMemoryHostPointerInfoEXT {}

    class MemoryHostPointerPropertiesEXT {}

    class PhysicalDeviceExternalMemoryHostPropertiesEXT {}

    class TimeDomainEXT {}

    class CalibratedTimestampInfoEXT {}

    class PhysicalDeviceShaderCorePropertiesAMD {}

    class MemoryOverallocationBehaviorAMD {}

    class DeviceMemoryOverallocationCreateInfoAMD {}

    class PhysicalDeviceVertexAttributeDivisorPropertiesEXT {}

    class VertexInputBindingDivisorDescriptionEXT {}

    class PipelineVertexInputDivisorStateCreateInfoEXT {}

    class PhysicalDeviceVertexAttributeDivisorFeaturesEXT {}

    class PipelineCreationFeedbackFlagBitsEXT {}

    class PipelineCreationFeedbackFlagsEXT {}

    class PipelineCreationFeedbackEXT {}

    class PipelineCreationFeedbackCreateInfoEXT {}

    class PhysicalDeviceComputeShaderDerivativesFeaturesNV {}

    class PhysicalDeviceMeshShaderFeaturesNV {}

    class PhysicalDeviceMeshShaderPropertiesNV {}

    class DrawMeshTasksIndirectCommandNV {}

    class PhysicalDeviceFragmentShaderBarycentricFeaturesNV {}

    class PhysicalDeviceShaderImageFootprintFeaturesNV {}

    class PipelineViewportExclusiveScissorStateCreateInfoNV {}

    class PhysicalDeviceExclusiveScissorFeaturesNV {}

    class QueueFamilyCheckpointPropertiesNV {}

    class CheckpointDataNV {}

    class PhysicalDevicePCIBusInfoPropertiesEXT {}

    class DisplayNativeHdrSurfaceCapabilitiesAMD {}

    class SwapchainDisplayNativeHdrCreateInfoAMD {}

    class PhysicalDeviceFragmentDensityMapFeaturesEXT {}

    class PhysicalDeviceFragmentDensityMapPropertiesEXT {}

    class RenderPassFragmentDensityMapCreateInfoEXT {}

    class PhysicalDeviceScalarBlockLayoutFeaturesEXT {}

    class PhysicalDeviceMemoryBudgetPropertiesEXT {}

    class PhysicalDeviceMemoryPriorityFeaturesEXT {}

    class MemoryPriorityAllocateInfoEXT {}

    class PhysicalDeviceDedicatedAllocationImageAliasingFeaturesNV {}

    class DeviceAddress {}

    class PhysicalDeviceBufferDeviceAddressFeaturesEXT {}

    class PhysicalDeviceBufferAddressFeaturesEXT {}

    class BufferDeviceAddressInfoEXT {}

    class BufferDeviceAddressCreateInfoEXT {}

    class ImageStencilUsageCreateInfoEXT {}

    class ValidationFeatureEnableEXT {}

    class ValidationFeatureDisableEXT {}

    class ValidationFeaturesEXT {}

    class ComponentTypeNV {}

    class ScopeNV {}

    class CooperativeMatrixPropertiesNV {}

    class PhysicalDeviceCooperativeMatrixFeaturesNV {}

    class PhysicalDeviceCooperativeMatrixPropertiesNV {}

    class CoverageReductionModeNV {}

    class PipelineCoverageReductionStateCreateFlagsNV {}

    class PhysicalDeviceCoverageReductionModeFeaturesNV {}

    class PipelineCoverageReductionStateCreateInfoNV {}

    class FramebufferMixedSamplesCombinationNV {}

    class PhysicalDeviceYcbcrImageArraysFeaturesEXT {}

    class HeadlessSurfaceCreateFlagsEXT {}

    class HeadlessSurfaceCreateInfoEXT {}

    class PhysicalDeviceHostQueryResetFeaturesEXT {}

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
