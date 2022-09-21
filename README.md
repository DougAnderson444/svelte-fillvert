# Svelte Fill Height

Fills app to visible height, even on mobile.

## Use

```svelte
<script>
	import FillVertical from '@douganderson444/svelte-fillvertical';
</script>

<FillVertical>
	<div style="height: 100%; background-color: aquamarine;">
		<div>Now this div will actually fill to 100%</div>
	</div>
</FillVertical>
```

## Defaults

The component sets body margin and padding to zero:

```js
document.body.style.padding = '0';
document.body.style.margin = '0';
```
