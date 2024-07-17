export const usePollStore = defineStore('poll', () => {
    const upvotes = ref(0)
    const downvotes = ref(0)

    return { upvotes, downvotes }
})