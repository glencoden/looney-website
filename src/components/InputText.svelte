<script>
    let field
    export let value
</script>

<input
    class="input"
    bind:value
    bind:this={field}
    on:focus={() => value = ''}
/>

<style>
    .input {
        width: 100%;
        padding: calc(0.5 * var(--padding) * 1px);
        border: var(--border-width) solid var(--black);
        font-family: Poppins, sans-serif;
        font-size: var(--font-size-m);
        outline: none;
    }
</style>