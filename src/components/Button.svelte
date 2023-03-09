<script>
    export let secondary = false
    export let isActive = false
    export let label = 'no label'
    export let onClick = undefined
</script>

<button
    class="button"
    class:primary-color={!secondary}
    class:secondary-color={secondary}
    class:button-active={isActive}
    on:click={typeof onClick === 'function' && onClick()}
>
    {label.toUpperCase()}
</button>

<style>
    @keyframes flicker-primary {
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

    @keyframes flicker-secondary {
        0%, 18%, 22%, 25%, 53%, 57%, 100% {
            text-shadow:
                    0 0 4px #fff,
                    0 0 11px #fff,
                    0 0 19px #fff,
                    0 0 40px var(--pink),
                    0 0 80px var(--pink),
                    0 0 90px var(--pink),
                    0 0 100px var(--pink),
                    0 0 150px var(--pink);
        }
        20%, 24%, 55% {
            text-shadow: none;
        }
    }

    .button {
        font-family: Poppins, sans-serif;
        font-size: var(--button-font-size);
        font-weight: 600;
        padding: calc(var(--padding) * 1px);
        border: var(--border-width) solid var(--black);
        box-shadow: var(--box-shadow);
        overflow: hidden;
        transition: transform 0.1s ease;
    }

    .primary-color {
        color: var(--blue);
        background-color: var(--blue-dark);
    }

    .secondary-color {
        color: var(--pink);
        background-color: var(--pink-dark);
    }

    .button:hover {
        transform: scale(1.05);
    }

    .button:active {
        transform: scale(1);
    }

    .primary-color:hover, .primary-color:active, .button-active {
        color: var(--white);
        animation: flicker-primary 1.5s infinite alternate;
    }

    .secondary-color:hover, .secondary-color:active, .button-active {
        color: var(--white);
        animation: flicker-secondary 1.5s infinite alternate;
    }
</style>