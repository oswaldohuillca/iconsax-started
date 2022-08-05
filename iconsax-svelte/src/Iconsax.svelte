<script lang="ts">
  export let width: number = 24;
  export let height: number = 24;
  export let color: string = "#292D32";
  export let icon: string = "add";
  export let variant:
    | "bold"
    | "broken"
    | "bulk"
    | "linear"
    | "outline"
    | "twotone" = "outline";
</script>

<svg
  {width}
  {height}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- <svelte:component this={Icon} {color} /> -->
  {#await import(`../${variant}/${icon}.svelte`) then value}
    <svelte:component this={value.default} {color} />
  {/await}
</svg>
