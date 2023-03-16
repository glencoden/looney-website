<script>
    let field
    export let value
</script>

<textarea
        class="textarea"
    bind:value
    bind:this={field}
    on:focus={() => value = ''}
></textarea>

<style>
    .textarea {
        resize: none;
        width: 100%;
        height: 100%;
        padding: calc(0.5 * var(--padding) * 1px);
        border: var(--border-width) solid var(--black);
        font-family: Poppins, sans-serif;
        font-size: var(--font-size-m);
        outline: none;
    }
</style>