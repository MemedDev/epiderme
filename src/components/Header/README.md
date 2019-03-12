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
    <Avatar />
  }
  title={
    <Text>
      My Awesome title
    </Text>
  }
  subtitle={
    <Text>
      hooray!
    </Text>
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
    <Text>
      My Awesome title
    </Text>
  }
  divider
  dividerColor="#20afd6"
/>
```


