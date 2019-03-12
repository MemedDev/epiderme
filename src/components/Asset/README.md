# Asset

The asset component can be used to show complex data, usually on lists.

## Usage

```jsx
import {
  Asset,
  AssetHeader,
  AssetBody,
  AssetFooter,
  Text
} from '@memed-dev/epiderme';

const AssetExample = () => (
  <Asset thumbnail={<Avatar />}>
    <AssetHeader
      title={text('title', 'Title')}
      subtitle={text('subtitle', 'Subtitle')}
      icon="pointer-right"
    />
    <AssetDescription>
      Lorem ipsum dolor sit amet
    </AssetDescription>
    <AssetFooter>
      <div>
        <Text component="label" weight="bold">Qtd: </Text>
        <Text component="span" color="black50">Value</Text>
      </div>
      <div>
        <Button type="button" aspect="link">Action</Button>
      </div>
    </AssetFooter>
  </Asset>
);
```

## Props

| Name      | Type                        | Default   | Description                                 | Required |
| --------- | --------------------------- | --------- | ------------------------------------------- | -------- |
| children  | node                        | -         | Content to be rendered inside the component | false    |
| thumbnail | node                        | -         | Defines the component's color scheme        | false    |

Any other properties supplied will be passed to the rendered component.
That means you can pass any `html` attribute or `React` component props.
