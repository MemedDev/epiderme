# Button

A button is a basic element that can represent an action in an application.

## Usage

```jsx
import { Button } from '@memed-dev/epiderme';

const buttonExamples () => (
  <div>
    <Button type="button">Default</Button>
    <Button color="primary">Primary</Button>
    <Button disabled>Disabled</Button>
    <Button aspect="link" component="a" href="/users">Link</Button>
  </div>
);
```

## Props

| Name      | Type                                                  | Default   | Description                                 | Required |
| --------- | ----------------------------------------------------- | --------- | ------------------------------------------- | -------- |
| children  | node                                                  | -         | Content to be rendered inside the component | true     |
| color     | enum: 'default' \| 'inherit' \| 'primary' \| 'accent' | 'default' | Defines the component's color scheme        | false    |
| component | Component or HTML element                             | 'button'  | HTML Tag or Component that will be rendered | false    |
| aspect    | enum: 'button' \| 'link' \|                           | 'button'  | Describes how the button looks like         | false    |

Any other properties supplied will be passed to the rendered component.
That means you can pass any `html` attribute or `React` component props.
