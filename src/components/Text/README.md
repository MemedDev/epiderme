# Text

This is a component to render text variations. You can use it to render titles, subtitles and any other predefined text style from Epiderme.

## Usage

```jsx
import { Text } from '@memed-dev/epiderme';

const TextExamples = () => (
  <Text
    align="left"
    color="primary"
    component="p"
    scale="subtitle2"
    weight="regular"
  >
    Default
  </Text>
);
```

## Props

| Name      | Type                                                                            | Default   | Description                                                  | Required |
| --------- | ------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------ | -------- |
| children  | node                                                                            | -         | Content to be rendered inside the component                  | true     |
| align     | enum: 'inherit', 'left', 'center', 'right', 'justify'                           | 'inherit' | Text alignment, works like CSS text-align property           | false    |
| color     | enum: 'default' \| 'primary' \| 'accent' \| 'black50' \| 'black24' \| 'inherit' | 'default' | Defines the text color                                       | false    |
| component | Component or DOM element                                                        | 'p'       | HTML Tag or Component that will be rendered on the root node | false    |
| scale     | enum: 'body1' \| 'caption1' \| 'subtitle2'                                      | 'body1'   | Defines the text scale                                       | false    |
| weight    | enum: 'light' \| 'regular' \| 'medium' \| 'semibold' \| 'bold' \| 'inherit'     | 'regular' | Defines the text weight                                      | false    |

Any other properties supplied will be passed to the rendered component.
That means you can pass any `html` attribute or `React` component props.
