<script>
    import formatRelative from 'date-fns/formatRelative/index'
    import { de, enUS } from 'date-fns/locale'
    import useGet from '../../utils/useGet.ts'
    import LoadingSpinner from '../../components/LoadingSpinner.svelte'

    const { data, error, isLoading } = useGet('https://staging.api.looneytunez.de/calendar/events')
</script>

{#if $isLoading}

    <LoadingSpinner />

{:else if $error !== null}

    <pre>{JSON.stringify(error, null, 4)}</pre>

{:else if !Array.isArray($data.data)}

    <pre>{JSON.stringify($data, null, 2)}</pre>

{:else}

    {#each $data.data as event (event.start)}

        <div class="event-box">
            <p>{formatRelative(new Date(event.start), new Date(), { locale: de })}</p>
            <p class="venue">{event.venue}</p>
            <p>{event.description}</p>
        </div>

    {/each}
{/if}

<style>
    .event-box {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr;
        width: 100%;
    }

    .event-box p {
        white-space: nowrap;
        font-size: var(--font-size-m);
        margin: calc(0.5 * var(--padding) * 1px) 0;
    }

    .venue {
        font-family: "Playfair Display SC", sans-serif;
        font-weight: 700;
        color: var(--pink);
    }
</style>