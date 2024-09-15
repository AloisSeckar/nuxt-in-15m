<template>
  <UContainer class="m-4 text-center">
    <h1 class="text-3xl font-bold mb-4">PragVue 2024</h1>
    <h2 class="text-2xl">How do you like Vue.js?</h2>
    <div class="grid grid-rows-2 grid-cols-2 gap-2 justify-center mx-auto my-4 max-w-96">
      <div class="text-4xl font-bold text-green-600">
        {{ poll.upvotes }}
      </div>
      <div class="text-4xl font-bold text-red-600">
        {{ poll.downvotes }}
      </div>
      <UButton icon="i-heroicons-hand-thumb-up" color="green" @click="upvote">Like</UButton>
      <UButton icon="i-heroicons-hand-thumb-down" color="red" @click="downvote">Dislike</UButton>
    </div>
    <div class="text-3xl font-bold" :class="scoreFont">
      Score: {{ score }} %
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const poll = usePollStore()

function upvote() {
  poll.upvotes++
}

const downvote = () => {
  poll.downvotes++
}

const score = computed(() => {
  if (poll.downvotes === 0) {
    return poll.upvotes > 0 ? 100 : 0
  }
  const raw = poll.upvotes / (poll.upvotes + poll.downvotes)
  return Math.round(raw * 100).toFixed(0)
})

const scoreFont = computed(() => {
  if (score.value >= "75") {
    return "text-green-600"
  } else if (score.value >= "50") {
    return "text-yellow-400"
  } else if (score.value >= "25") {
    return "text-amber-600"
  } else {
    return "text-red-600"
  }
})
</script>
