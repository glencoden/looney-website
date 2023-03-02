<script>
    import format from 'date-fns/format/index'
    import useGet from '../../utils/useGet.ts'

    const { data, error, isLoading } = useGet('https://staging.api.looneytunez.de/calendar/events')
</script>

<h2>EVENTS</h2>

{#if $isLoading}

    <p>Loading...</p>

{:else if $error !== null}

    <pre>{JSON.stringify(error, null, 4)}</pre>

{:else if !Array.isArray($data.data)}

    <pre>{JSON.stringify($data, null, 2)}</pre>

{:else}
    {#each $data.data as event (event.start)}

        <p>{event.description} <strong>{event.venue}</strong> <span>{format(new Date(event.start), 'dd.MM.yyyy')}</span></p>

    {/each}
{/if}
