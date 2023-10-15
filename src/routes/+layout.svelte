<script>
    import "../app.css";
    import LightDarkSwitch from './components/LightDarkSwitch.svelte';
</script>

<div class="flex justify-center pt-2">
    <LightDarkSwitch />
</div>

<div class="flex justify-center">
    <slot />
</div>
