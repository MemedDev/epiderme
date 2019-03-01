# Epiderme Avatar

Avatars can be created by passing a children or without for a avatar with color.


## Props

| Name      | Type    | Default   | Description               | Required  |
| -------   |:-------:| --------: | ----------:               | --------: |
| children  | Node    | -         | Content to be rendered inside the component | false |
| style     | Object  | -         | Object DOM CSS            | false     |

## Usage

```jsx
<Avatar />

<Avatar>
  MD
</Avatar>

<Avatar>
  <Image
    src={
      text('src', 'https://memed.com.br/resources/img/logo.png')
    }
    alt={
      text('alt', 'Image Placeholder')
    }
  />
</Avatar>
```

For more changes use the `style` property and pass a object DOM CSS. Ex.:

```jsx
const style = {
  width: '80px',
  height: '80px',
  marginTop: '5px',
  marginLeft: '40px',
};

<Avatar style={style} />
```
