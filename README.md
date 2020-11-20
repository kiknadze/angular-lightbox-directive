# angular-lightbox-directive

# Usage

## Add this style to style.css
```
.image-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;

  &-img {
    max-width: 90%;
    max-height: 90%;
    width: auto;
    height: auto;
    border: 20px solid #fff;
    border-radius: 20px;
    animation: modal-appear 0.3s ease-in-out;
    cursor: pointer;
  }
}
```

## Modal appear animation
```
@keyframes modal-appear {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## In template
```
<img src="image" alt="No Image" lightBox />
```
