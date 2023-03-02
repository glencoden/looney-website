<script>
    import Navigation from '../components/Navigation.svelte'
</script>

<div class="viewport">
    <Navigation />

    <div class="main-content">
        <div class="vertical-spacer"></div>

        <slot></slot>

        <div class="vertical-spacer"></div>
    </div>
</div>

<style>
    .viewport {
        display: flex;
        justify-content: center;
        width: 100vw;
    }

    .main-content {
        position: relative;
        width: var(--main-content-width);
        overflow: hidden;
    }

    .vertical-spacer {
        height: var(--nav-height);
    }
</style>