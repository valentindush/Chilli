<script lang="ts">
    export let type:string
    export let msg:string
</script>
<div class={`border p-4 max-w-[65%] w-fit rounded-full px-5 mt-3 ${type==="right"?"mr-0 ml-auto" : ""}`}  class:border-blue-500={type === "left"} class:border-pink-500={type === "right"}>
    <p class="text-gray-300 text-sm">{msg}</p>
</div>
<style>

</style>