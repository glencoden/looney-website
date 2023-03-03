<script>
    export let label = 'no label'
    export let onClick = undefined
</script>

<button
    class="button"
    on:click={typeof onClick === 'function' && onClick()}
>
    {label.toUpperCase()}
</button>

<style>
    .button {
        font-size: 30px;
        padding: calc(var(--padding) * 1px);
        border: 4px solid var(--black);
        box-shadow: calc(0.5 * var(--padding) * 1px) calc(0.5 * var(--padding) * 1px) 0 0 var(--black);
        color: var(--blue);
        background-color: var(--blue-dark);
    }
</style>