<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent()
        .where({ _path: path })
        .findOne()
})
</script>

<template>
    <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-7xl" />
    <div class="my-8">

    </div>
</template>