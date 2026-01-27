<script lang="ts">
	import "../../app.css";
	import { Spring } from 'svelte/motion';

	let { name, ref, flattened=false, ontransitionfinished=null, override_pressed=null } = $props();

	const raised = { outer: 4, blur: 8, inner: 0, innerBlur: 0 };
	const pressed = { outer: 0, blur: 0, inner: 4, innerBlur: 8 };
	const flat = { outer: 0, blur: 0, inner: 0, innerBlur: 0 };

	const shadow = new Spring(raised, {
		stiffness: 0.15,
		damping: 0.4
	});

	let p = $state(false);

	$effect(() => {
		shadow.target = flattened ? flat : p ? pressed : override_pressed ? pressed : raised;
		//console.log(shadow.target);
	});

	function on_spring_end() {
		if (ontransitionfinished) {
			ontransitionfinished()
		}
	}

	const isAtTarget = $derived(
        shadow.current.outer === shadow.target.outer &&
        shadow.current.blur === shadow.target.blur &&
        shadow.current.inner === shadow.target.inner &&
        shadow.current.innerBlur === shadow.target.innerBlur
    );

	$effect(() => {
		if (isAtTarget) {
			on_spring_end();
		}
	})
</script>

<style>
	.nav-item-neumorphic.manual {
		box-shadow: 
		var(--o) var(--o) var(--b) #becad7, 
		calc(-1 * var(--o)) calc(-1 * var(--o)) var(--b) #ffffff,
		inset var(--io) var(--io) var(--ib) #becad7, 
		inset calc(-1 * var(--io)) calc(-1 * var(--io)) var(--ib) #ffffff;
		}
</style>

<a
	href={ref}
	class="nav-item-neumorphic manual no-transition px-5 py-2 rounded-xl text-primary text-sm font-bold"
	onmousedown={() => (p = true)}
	onmouseup={() => (p = false)}
	onmouseleave={() => (p = false)}
	style:--o="{shadow.current.outer}px"
	style:--b="{shadow.current.blur}px"
	style:--io="{shadow.current.inner}px"
	style:--ib="{shadow.current.innerBlur}px"
	>
		{name}
</a>


