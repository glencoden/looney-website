<script>
    let inputElement

    let name = 'type here'
    $: console.log('name', name)

    let value = 'magic time'
    $: console.log('value', value, inputElement)
</script>

<input bind:value={name}>
<input id='hello' bind:value bind:this={inputElement}>