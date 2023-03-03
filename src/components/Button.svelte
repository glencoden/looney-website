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
    @keyframes flicker {
        0%, 18%, 22%, 25%, 53%, 57%, 100% {
            text-shadow:
                    0 0 4px #fff,
                    0 0 11px #fff,
                    0 0 19px #fff,
                    0 0 40px #0fa,
                    0 0 80px #0fa,
                    0 0 90px #0fa,
                    0 0 100px #0fa,
                    0 0 150px #0fa;
        }
        20%, 24%, 55% {
            text-shadow: none;
        }
    }

    .button {
        font-size: 30px;
        font-weight: 600;
        padding: calc(var(--padding) * 1px);
        border: 4px solid var(--black);
        box-shadow: calc(0.5 * var(--padding) * 1px) calc(0.5 * var(--padding) * 1px) 0 0 var(--black);
        color: var(--white);
        background-color: var(--blue-dark);
        animation: flicker 1.5s infinite alternate;
        overflow: hidden;
    }
</style>