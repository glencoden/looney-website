<script>
    import useGet from '../../utils/useGet.ts'

    const { data, error, isLoading } = useGet('https://staging.api.looneytunez.de/repertoire/published')
</script>

{#if $isLoading}

    <p>Loading...</p>

{:else if $error !== null}

    <pre>{JSON.stringify(error, null, 4)}</pre>

{:else if !Array.isArray($data?.data?.songs)}

    <pre>{JSON.stringify($data, null, 2)}</pre>

{:else}

    {#each $data.data.songs as song (song.id)}
        {#if song.artist.length > 0 && song.title.length > 0}

            <div class="song-box">
                <p class="artist-name">{song.artist}</p><p>{song.title}</p>
            </div>

        {/if}
    {/each}

{/if}

<style>
    .song-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }

    .song-box p {
        white-space: nowrap;
        font-size: var(--font-size-m);
        margin: calc(0.25 * var(--padding) * 1px) 0;
    }

    .artist-name {
        font-family: "Playfair Display SC", sans-serif;
        font-weight: 700;
        color: var(--pink);
    }
</style>