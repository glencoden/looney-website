<script>
    export let isActive = false
    export let label = 'no label'
    export let onClick = undefined
</script>

<button
    class="button"
    class:button-active={isActive}
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
                    0 0 40px var(--blue),
                    0 0 80px var(--blue),
                    0 0 90px var(--blue),
                    0 0 100px var(--blue),
                    0 0 150px var(--blue);
        }
        20%, 24%, 55% {
            text-shadow: none;
        }
    }

    .button {
        font-family: Poppins, sans-serif;
        font-size: var(--font-size-l);
        font-weight: 600;
        padding: calc(var(--padding) * 1px);
        border: var(--border-width) solid var(--black);
        box-shadow: var(--box-shadow);
        color: var(--blue);
        background-color: var(--blue-dark);
        overflow: hidden;
        transition: transform 0.1s ease;
    }

    .button:hover {
        transform: scale(1.05);
    }

    .button:active {
        transform: scale(1);
    }

    .button:hover, .button:active, .button-active {
        color: var(--white);
        animation: flicker 1.5s infinite alternate;
    }
</style>