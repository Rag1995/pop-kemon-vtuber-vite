<script setup lang="ts">
import { Offcanvas } from 'bootstrap'

const props = withDefaults(defineProps<{
  /**
   * Apply a backdrop on body while offcanvas is open. Alternatively, specify static for a backdrop which doesn’t close the offcanvas when clicked.
   * @default true
   */
  backdrop?: boolean
  /**
   * Closes the offcanvas when escape key is pressed
   * @default true
   */
  keyboard?: boolean
  /**
   * Allow body scrolling while offcanvas is open
   * @default false
   */
  scroll?: boolean
  /**
   * There’s no default placement for offcanvas components, so you must add one of the modifier classes below.
   * @default 'start'
   */
  placement?: 'start' | 'end' | 'top' | 'bottom'
  /**
   * Responsive offcanvas classes hide content outside the viewport from a specified breakpoint and down. Above that breakpoint, the contents within will behave as usual. For example, .offcanvas-lg hides content in an offcanvas below the lg breakpoint, but shows the content above the lg breakpoint.
   * @default null
   */
  responsive?: null | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}>(), {
  backdrop: true,
  keyboard: true,
  scroll: false,
  placement: 'start',
  responsive: null,
})
const emit = defineEmits<Emit>()
interface Emit {
  (e: 'show', value: Event): void
  (e: 'hide', value: Event): void
  (e: 'shown', value: Event): void
  (e: 'hidden', value: Event): void
}

const root = ref<HTMLElement>()
const offcanvas = ref<Offcanvas>()
const classList = computed(() => {
  const list = []
  const { placement, responsive } = props
  list.push(`offcanvas-${placement}`)
  if (responsive) list.push(`offcanvas-${responsive}`)
  else list.push('offcanvas')

  return list
})

const init = () => {
  const { backdrop, keyboard, scroll } = props
  offcanvas.value = new Offcanvas(root.value!, {
    backdrop, keyboard, scroll,
  })
}
const toggle = () => offcanvas.value?.toggle()
const show = () => offcanvas.value?.show()
const hide = () => offcanvas.value?.hide()
const on = reactive({
  'show.bs.offcanvas': (e: Event) => {
    e.stopPropagation()
    emit('show', e)
  },
  'hide.bs.offcanvas': (e: Event) => {
    e.stopPropagation()
    emit('hide', e)
  },
  'shown.bs.offcanvas': (e: Event) => {
    e.stopPropagation()
    emit('shown', e)
  },
  'hidden.bs.offcanvas': (e: Event) => {
    e.stopPropagation()
    emit('hidden', e)
  },
})

onMounted(() => init())

defineExpose({
  toggle,
  show,
  hide,
})
</script>

<template>
  <div ref="root" class="offcanvas" :class="classList" v-on="on">
    <slot></slot>
  </div>
</template>
