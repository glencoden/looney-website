<script>
    import useGet from '../../utils/useGet.ts'
    import LoadingSpinner from '../../components/LoadingSpinner.svelte'
    import VerticalSpacer from '../../components/VerticalSpacer.svelte'

    const { data, error, isLoading } = useGet('https://api.looneytunez.de/repertoire/published')
</script>

<VerticalSpacer />

{#if $isLoading}

    <LoadingSpinner />

{:else if $error !== null}

    <pre>{JSON.stringify(error, null, 4)}</pre>

{:else if !Array.isArray($data?.data?.songs)}

    <pre>{JSON.stringify($data, null, 2)}</pre>

{:else}

    {#each $data.data.songs as song (song.id)}
        {#if song.artist.length > 0 && song.title.length > 0}

            <div class="song-box">
                <p class="artist-name">{song.artist}</p>
                <p class="song-title">{song.title}</p>
            </div>

        {/if}
    {/each}

{/if}

<VerticalSpacer />

<style>
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

    .song-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }

    .song-box p {
        white-space: var(--list-whitespace);
        align-self: center;
        margin: calc(0.25 * var(--padding) * 1px) 0;
    }

    .artist-name {
        font-family: "Pacifico", serif;
        font-size: var(--font-size-xm);
        color: var(--pink);
        animation: slide-left 0.6s ease;
    }

    .song-title {
        font-size: var(--font-size-m);
        animation: slide-right 0.6s ease;
    }
</style>