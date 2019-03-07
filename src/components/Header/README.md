# Epiderme Header
Header may be oriented to give the importance of a section in the context of the content that surrounds it, or can be formatted to emphasize an icon or avatar.

## Props
| Name            | Type                             | Required |
|-----------------|----------------------------------|----------|
| `title`         | `Node`                           | yes      |
| `subtitle `     | `Node`                           | no       |
| `thumb`         | `Node`                           | no       |
| `icon`          | `Node `                          | no       |
| `alignText`     | `String` (left, right, center)   | no       |
| `divider`       | `Bool`                           | no       |
| `dividerColor`  | `String` (#20afd6, rgba())       | no       |

## Usage

#### Default example
```javascript
<Header
  thumb={
    <MyAvatarComponent />
  }
  title={
    <Typography>
      My Awesome title
    </Typography>
  }
  subtitle={
    <Typography>
      hooray!
    </Typography>
  }
  icon={
    <Icon name="arrow-right" />
  }
/>
```

#### Example with divider
```javascript
<Header
  title={
    <Typography>
      My Awesome title
    </Typography>
  }
  divider
  dividerColor="#20afd6"
/>
```


