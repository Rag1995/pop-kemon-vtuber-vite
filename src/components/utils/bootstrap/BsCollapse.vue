<script setup lang="ts">
import { Collapse } from 'bootstrap'

const props = withDefaults(defineProps<{
  /**
   * Toggles the collapsible element on invocation
   * @default false
   */
  modelValue?: boolean
  /**
   * If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the card class). The attribute has to be set on the target collapsible area.
   * @default false
   */
  parent?: string | Element | JQuery | undefined
}>(), {
  modelValue: false,
  parent: undefined,
})
const emit = defineEmits<Emit>()
interface Emit {
  (e: 'show', value: Event): void
  (e: 'hide', value: Event): void
  (e: 'shown', value: Event): void
  (e: 'hidden', value: Event): void
  (e: 'update:modelValue', value: boolean): void
}

const root = ref<HTMLElement>()
const collapse = ref<Collapse>()
const expand = useVModel(props, 'modelValue', emit)

const init = () => {
  collapse.value = new Collapse(root.value!, {
    toggle: expand.value,
    parent: props.parent,
  })
}
const dispose = () => collapse.value?.dispose()
const update = () => {
  dispose()
  init()
}
const toggle = () => collapse.value?.toggle()
const show = () => collapse.value?.show()
const hide = () => collapse.value?.hide()
const on = reactive({
  'show.bs.collapse': (e: Event) => {
    e.stopPropagation()
    expand.value = true
    emit('show', e)
  },
  'hide.bs.collapse': (e: Event) => {
    e.stopPropagation()
    expand.value = false
    emit('hide', e)
  },
  'shown.bs.collapse': (e: Event) => {
    e.stopPropagation()
    emit('shown', e)
  },
  'hidden.bs.collapse': (e: Event) => {
    e.stopPropagation()
    emit('hidden', e)
  },
})

onMounted(() => init())
onUnmounted(() => dispose())
watch(() => props.parent, () => update())
watch(expand, (newValue) => {
  if (newValue)
    show()
  else
    hide()
})

defineExpose({
  toggle,
  show,
  hide,
})
</script>

<template>
  <div ref="root" class="collapse" v-on="on">
    <slot></slot>
  </div>
</template>
