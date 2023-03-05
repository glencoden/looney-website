<script>
    import LoadingSpinner from '../components/LoadingSpinner.svelte'

    let showVideo = false

    const onVideoReady = () => {
        showVideo = true
    }
</script>

<LoadingSpinner />

<div
    class="video-box"
    class:show-video={showVideo}
>
    <video
        class="video"
        src='teaser-1v5.m4v'
        autoplay
        muted
        loop
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
        position: fixed;
        left: 50%;
        top: var(--nav-height);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        height: min(calc(100vh - var(--nav-height)), 960px);
        opacity: 0;
    }

    .show-video {
        animation: slide-in 0.7s ease;
        opacity: 1;
    }

    .video {
        position: relative;
        border: var(--border-width) solid var(--pink-dark);
        border-radius: var(--boder-radius);
        width: var(--video-width);
    }
</style>