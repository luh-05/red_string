<script lang="ts">
  let { floating=false } = $props();
  import NavButton from "./NavButton.svelte";

  import "../../app.css";
  import { page } from "$app/state";
  import { fade } from "svelte/transition";
  import { quintInOut } from "svelte/easing";

  let menu_open = $state(true);
  let menu_visible = $state(true);

  function active(name: string): boolean {
    return page.url.pathname === name;
  }

  function toggle_menu() {
    if (floating) {
      menu_open = !menu_open;
      if (menu_open) {
        menu_visible
        = true;
      }
    }
  }

  function button_transition_finished() {
    if (floating) {
      if (!menu_open) {
        menu_visible = false;
      }
    }
  }

  let background_size = $state({x: 52, y:52});
</script>

<header
  class="flex items-center justify-between px-5 py-5 z-50"
  style:width="100%"
  style:position={floating ? "absolute" : "static"}
>

  <div class="px-2 py-2 nav-item-neumorphic rounded-2xl"
    style:position="absolute"
    style:width="{background_size.x}px"
    style:height="{background_size.y}px"
    style:z-index="-1"
    style:transition="all 300ms ease-in-out">
  </div>

  <div
    class="flex items-center gap-4 rounded-xl px-2 py-2 "
    style:flex="1 1 1"
    style:width={!floating ? "calc(100% - 2px)" : "auto"}
    bind:clientWidth={background_size.x}
    bind:clientHeight={background_size.y}
  >
    <div class="items-center gap-3 text-primary">
      <button
        aria-label="show menu"
        class="size-9 p-1.5 nav-item-neumorphic rounded-lg"
        class:active={menu_visible}
        class:flat={!floating}
        onclick={toggle_menu}
      >
        <svg
          class="w-full h-full"
          fill="none"
          viewbox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
          <path
            clip-rule="evenodd"
            d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    
    {#if menu_visible || !floating}
        <nav class="flex items-center gap-6">
          <h2
            transition:fade={{ duration: 250, easing: quintInOut }}
            class="text-primary text-2xl font-bold tracking-tight"
          >
            red_string
          </h2>
          <div 
            in:fade={{ duration: 500, easing: quintInOut }}
            out:fade={{ delay: 0, duration: 300, easing: quintInOut }}
          >
            <NavButton
              name="Home"
              ref="/"
              flattened={!menu_open && floating}
              ontransitionfinished={button_transition_finished}
              override_pressed={active("/")}
            />
            <NavButton
              name="Graph"
              ref="/graph"
              flattened={!menu_open && floating}
              override_pressed={active('/graph')}
            />
          </div>
        </nav>
    {/if}
  </div>
</header>
