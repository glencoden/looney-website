<script>
    export let label = 'no label'
</script>

<button on:click>{label}</button>
{#if label === 'no label'}
    <p>you have no label</p>
{/if}