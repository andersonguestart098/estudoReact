function LogoImage(props: any) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={props.style}
      className={props.className}
    />
  );
}

export default LogoImage;
