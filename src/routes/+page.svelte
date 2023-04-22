<script>
    import { onMount, onDestroy } from 'svelte';
    import { base } from '$app/paths';
    import LoadingSpinner from '../components/LoadingSpinner.svelte'

    const SHOW_VIDEO_SAFETY_TIMEOUT = 2500

    let timeoutId
    let showVideo = false

    const onVideoReady = () => {
        showVideo = true
    }

    onMount(() => {
        timeoutId = setTimeout(onVideoReady, SHOW_VIDEO_SAFETY_TIMEOUT)
    })

    onDestroy(() => {
        clearTimeout(timeoutId)
    })
</script>

{#if !showVideo}
    <LoadingSpinner />
{/if}

<div
    class="video-box"
    class:show-video={showVideo}
>
    <video
        class="video-element"
        src='{base}/teaser-1v5.m4v'
        autoplay
        playsinline
        muted
        loop
        controls
        on:canplay={onVideoReady}
    >
    </video>
</div>

<style>
    @keyframes slide-in {
        0% {
            opacity: 0;
        }

        25% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .video-box {
        z-index: var(--level-2);
        position: relative;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--video-width);
        margin-top: var(--video-top);
        opacity: 0;
    }

    .show-video {
        animation: slide-in 0.7s ease;
        opacity: 1;
    }

    .video-element {
        width: 100%;
        border: var(--border-width) solid var(--black);
        border-radius: var(--boder-radius);
        background-color: var(--black);
    }
</style>