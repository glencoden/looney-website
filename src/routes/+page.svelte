<div class="video-box">
    <video
        class="video"
        src='teaser-1v5.m4v'
        autoplay
        muted
        loop
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
        animation: slide-in 0.7s ease;
        position: fixed;
        left: 50%;
        top: var(--nav-height);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        height: min(calc(100vh - var(--nav-height)), 960px);
    }

    .video {
        position: relative;
        border: var(--border-width) solid var(--pink-dark);
        border-radius: var(--boder-radius);
        width: var(--video-width);
    }
</style>