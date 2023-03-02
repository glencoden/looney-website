<script>
    export let label = 'no label'
    export let onClick = undefined
</script>

<button on:click={typeof onClick === 'function' && onClick()}>{
    label}
</button>