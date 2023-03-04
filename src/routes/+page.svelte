<div class="video-box">
    <div class="video-stand-left"></div>
    <div class="video-stand-right"></div>

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
            transform: translate(-50%, 100%);
        }

        25% {
            transform: translate(-50%, 100%);
        }

        100% {
            transform: translate(-50%, 0);
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
        border: calc(0.5 * var(--padding) * 1px) solid var(--pink-dark);
        border-radius: var(--boder-radius);
        width: var(--video-width);
    }

    .video-stand-left, .video-stand-right {
        position: absolute;
        top: 50%;
        height: 100vh;
        width: calc(2 * var(--padding) * 1px);
        background-color: var(--pink-dark);
    }

    .video-stand-left {
        left: calc(4 * var(--padding) * 1px);
    }

    .video-stand-right {
        right: calc(4 * var(--padding) * 1px);
    }
</style>