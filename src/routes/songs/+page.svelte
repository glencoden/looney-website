<script>
    import useGet from '../../utils/useGet.ts'

    const { data, error, isLoading } = useGet('https://staging.api.looneytunez.de/repertoire/published')
</script>

<h2>SONGS</h2>

{#if $isLoading}

    <p>Loading...</p>

{:else if $error !== null}

    <pre>{JSON.stringify(error, null, 4)}</pre>

{:else if !Array.isArray($data?.data?.songs)}

    <pre>{JSON.stringify($data, null, 2)}</pre>

{:else}
    {#each $data.data.songs as song (`${song.artist}${song.title}`)}
        {#if song.artist.length > 0 && song.title.length > 0}

            <p><strong>{song.artist}</strong> {song.title}</p>

        {/if}
    {/each}
{/if}