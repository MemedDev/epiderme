# Icon

Icons are useful to give the user some visual information about actions.

## Usage

In order to use the Epiderme Icons you have to import our icon styles on your page head:

```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/csilva2810/test-cdn/styles.css" />
</head>
```

Then you can use our Icon component on your components:

```jsx
import { Icon } from '@memed-dev/epiderme';

<div>
  <Icon name="done" />
  <Icon name="done" size="small" />
  <Icon name="done" size="large" />
  <Icon name="preloader" size="large" animation="spin" />
</div>
```

You can also customize the icon as you prefer passing a style object over props:

```jsx
const myCustomStyle = {
  color: 'rgba(74,144,226,1)',
  fontSize: '3em'
};

<Icon name="done" style={myCustomStyle} />
```

The icon will also inherit its parents styles like color and font-size,
unless you define a custom style passing it over props:

```jsx
<div style={{ fontSize: '20px', color: 'red' }}>
  <Icon name="done" size="inherit" />
</div>
```

## Props

| Name      | Type                                              | Default   | Description    | Required |
| --------- | ------------------------------------------------- | --------- | -------------- | -------- |
| name      | string                                            | -         | Icon name      | true     |
| size      | enum: 'small' \| 'medium' \| 'large' \| 'inherit' | 'medium'  | Icon size      | false    |
| type      | enum: 'solid' \| 'regular' \| 'light'             | 'regular' | Icon type      | false    |
| animation | enum: 'spin'                                      | ''        | Icon animation | false    |

Any other properties supplied will be passed to the rendered component.
That means you can pass any `html` attribute or `React` component props.
