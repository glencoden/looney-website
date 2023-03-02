<script>
    let field
    export let value
</script>

<input bind:value bind:this={field} on:focus={() => value = ''}>