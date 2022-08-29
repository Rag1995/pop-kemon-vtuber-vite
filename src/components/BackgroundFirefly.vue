<template>
  <div class="position-absolute top-0 bottom-0 start-0 end-0">
    <div v-for="i in 15" :key="i" class="firefly"></div>
  </div>
</template>

<style lang="scss" scope>
$quantity: 15;

.firefly {
  position: absolute;
  top: 50%;
  left: 50%;
  aspect-ratio: 1/1;
  width: 2vw;
  animation: ease 200s alternate infinite;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform-origin: -10vw;
  }

  &::after {
    background: white;
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
    animation: drift ease alternate infinite, flash ease infinite;
  }

  @for $i from 1 through $quantity {
    $steps: random(12)+16;
    $rotationSpeed: random(10)+8s;

    &:nth-child(#{$i}) {
      animation-name: move#{$i};

      &::before {
        animation-duration: #{$rotationSpeed};
      }

      &::after {
        animation-duration: #{$rotationSpeed},
        random(6000)+5000ms;
        animation-delay: 0ms, random(8000) + 500ms;
      }
    }

    @keyframes move#{$i} {
      @for $step from 0 through $steps {
        #{$step / $steps * 100%} {
          transform: translateX(random(100) - 50vw) translateY(random(100) - 50vh) scale(random(75) / 100 + 0.25);
        }
      }
    }
  }
}

@keyframes drift {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes flash {

  0%,
  30%,
  100% {
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
  }

  5% {
    opacity: 1;
    box-shadow: 0 0 2vw 0.4vw yellow;
  }
}
</style>
