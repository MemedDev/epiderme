
# Epiderme Image

Image has to be created by passing a `src`.


## Props

| Name      | Type    | Default   | Description               | Required  |
| -------   |:-------:| --------: | ----------:               | --------: |
| src       | String  | -         | Patch for image/icon      | true      |
| alt       | String  | -         | Description of image/icon | false     |

## Usage

```jsx
<Image src="patch/file.png" alt="Description" />
```

For more changes use the `style` property and pass a object DOM CSS. Ex.:

```jsx
const style = {
  width: '80px',
  height: '80px',
  marginTop: '5px',
  marginLeft: '40px',
};

<Image src="patch/file.png" alt="Description" style={style} />
```
