<script>
    import formatRelative from 'date-fns/formatRelative/index'
    import { de, enUS } from 'date-fns/locale/index.js'
    import useGet from '../../utils/useGet'
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

    {#each $data.data.reverse() as event (event.start)}

        <div class="event-box">
            <p class={`date ${animations[Math.floor(Math.random() * 4)]}`}>
                {formatRelative(new Date(event.start), new Date(), { locale: de })}
                {event.venue.split('/')[1] ? `in ${event.venue.split('/')[1].trim()}` : ''}
            </p>
            <h3 class={`venue ${animations[Math.floor(Math.random() * 4)]}`}>
                {event.venue.split('/')[0].trim().replace(/\s/g, '\u00a0')}
            </h3>
            <p class={`description ${animations[Math.floor(Math.random() * 4)]}`}>
                {event.description || 'Looneytunez live!'}
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
        grid-gap: calc(0.5 * var(--padding) * 1px);
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            "date"
            "venue"
            "description";
        width: 100%;
        margin-bottom: calc(2 * var(--padding) * 1px);
    }

    .date {
        grid-area: date;

        white-space: var(--list-whitespace);
        font-family: 'Pacifico', serif;
        font-size: var(--font-size-xm);

        margin: 0;
    }

    .venue {
        grid-area: venue;

        font-size: var(--font-size-m);
        margin: calc(0.5 * var(--padding) * 1px) 0;
    }

    .description {
        grid-area: description;

        white-space: var(--list-whitespace);
        font-size: var(--font-size-m);
        margin: 0 0 calc(var(--padding) * 1px);
        color: var(--pink);
    }

    @media only screen and (min-width: 600px) {
        .event-box {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
            "date venue"
            "description description";
        }
    }
</style>