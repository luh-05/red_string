<script>
  import { page } from "$app/state";
</script>

<div class="center">
  <h1>{$page.status}: {$page.error?.message}</h1>
</div>
