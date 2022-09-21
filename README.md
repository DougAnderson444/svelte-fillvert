# Svelte Fill Height

Fills app to visible height, even on mobile.

Zero dependencies. Just convenience.

## Why

Because `style: height: 100%` requires the parent HTML element to have an actual `px` height to refer to, and you might not know what the height of the viewport is (let alone know how to set it!). This library gets the height, and sets the css height to this value. It's even more critical on mobile when the soft keyboard pops up and the height gets interesting.

## Usage

Usign Svelte:

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

Using vanilla HTML and JS:

> TODO.

## Defaults

The component sets body margin and padding to zero:

```js
document.body.style.padding = '0';
document.body.style.margin = '0';
```
