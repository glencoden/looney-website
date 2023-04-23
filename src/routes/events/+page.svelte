<script>
    import formatRelative from 'date-fns/formatRelative/index'
    import { de, enUS } from 'date-fns/locale/index'
    import useGet from '../../utils/useGet.ts'
    import LoadingSpinner from '../../components/LoadingSpinner.svelte'
    import VerticalSpacer from '../../components/VerticalSpacer.svelte'


    const animations = [ 'slide-top', 'slide-bottom', 'slide-left', 'slide-right' ]

    const { data, error, isLoading } = useGet('https://api.looneytunez.de/calendar/events')
</script>

<VerticalSpacer />

{#if $isLoading}

    <LoadingSpinner />

{:else if $error !== null}

    <pre>{JSON.stringify(error, null, 4)}</pre>

{:else if !Array.isArray($data.data)}

    <pre>{JSON.stringify($data, null, 2)}</pre>

{:else}

    {#each $data.data as event (event.start)}

        <div class="event-box">
            <p class={`${animations[Math.floor(Math.random() * 4)]}`}>
                {formatRelative(new Date(event.start), new Date(), { locale: de })}
            </p>
            <p class={`venue ${animations[Math.floor(Math.random() * 4)]}`}>
                {event.venue}
            </p>
            <p class={`${animations[Math.floor(Math.random() * 4)]}`}>
                {event.description}
            </p>
        </div>

    {/each}
{/if}

<VerticalSpacer />

<style>
    @keyframes slide-top {
        0% {
            transform: translateY(-200vh);
        }

        25% {
            transform: translateY(-200vh);
        }

        100% {
            transform: translateY(0);
        }
    }

    @keyframes slide-bottom {
        0% {
            transform: translateY(200vh);
        }

        25% {
            transform: translateY(200vh);
        }

        100% {
            transform: translateY(0);
        }
    }

    @keyframes slide-left {
        0% {
            transform: translateX(-100vw);
        }

        25% {
            transform: translateX(-100vw);
        }

        100% {
            transform: translateX(0);
        }
    }

    @keyframes slide-right {
        0% {
            transform: translateX(100vw);
        }

        25% {
            transform: translateX(100vw);
        }

        100% {
            transform: translateX(0);
        }
    }

    .slide-top {
        animation: slide-top 0.7s ease;
    }

    .slide-bottom {
        animation: slide-bottom 0.7s ease;
    }

    .slide-left {
        animation: slide-left 0.7s ease;
    }

    .slide-right {
        animation: slide-right 0.7s ease;
    }

    .event-box {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr;
        grid-gap: calc(var(--padding) * 1px);
        width: 100%;
    }

    .event-box p {
        white-space: var(--list-whitespace);
        font-size: var(--font-size-m);
        margin: calc(0.5 * var(--padding) * 1px) 0;
    }

    .venue {
        font-family: 'Pacifico', serif;
        font-size: var(--font-size-xm);
        color: var(--pink);
    }
</style>