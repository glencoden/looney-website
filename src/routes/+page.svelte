<script>
    import { base } from '$app/paths';
    import LoadingSpinner from '../components/LoadingSpinner.svelte'

    let showVideo = false

    const onVideoReady = () => {
        showVideo = true
    }
</script>

{#if !showVideo}
    <LoadingSpinner />
{/if}

<div
    class="video-box"
    class:show-video={showVideo}
>
    <div class="video">
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
        position: fixed;
        left: 50%;
        top: var(--nav-height);
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        height: var(--video-height);
        opacity: 0;
    }

    .show-video {
        animation: slide-in 0.7s ease;
        opacity: 1;
    }

    .video {
        position: relative;
        width: var(--video-width);
        padding: 0 calc(var(--padding) * 1px);
    }

    .video-element {
        width: 100%;
        border: var(--border-width) solid var(--pink-dark);
        border-radius: var(--boder-radius);
    }
</style>