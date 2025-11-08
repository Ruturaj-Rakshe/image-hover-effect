# React GSAP Image Hover Effect

A beautiful multi-layer image hover animation component built with React and GSAP.

## Features

- Multi-layer image hover effects
- Smooth GSAP animations
- Customizable number of layers
- Multiple animation types (scale, rotation, movement)
- Easy to integrate

## 📦 Installation

Make sure you have GSAP and React installed:

## Usage

1. Copy the ImageHover.ts and hoverImage function into your project
2. Use the component in your React App:

```
import { hoverImage } from './lib/ImageHover';

function MyComponent() {
  // Use with useRef and useEffect as shown in the example
  return (
    <div
      ref={imageRef}
      className="image-hover"
      style={{ backgroundImage: "url('/your-image.jpg')" }}
      data-repetition-elems="8"
    />
  );
}

```

## Configuration

Use data attributes to customize:

```data-repetition-elems``` - Number of layers (default: 8)
```data-repetition-duration``` - Animation duration
```data-repetition-ease``` - Easing function



```node
npm install gsap
```

## Contributing

This is my first open source component! So feel absolutely free to suggest improvements or report issues.

## License

MIT - see [LICENSE](LICENSE) file for details.




