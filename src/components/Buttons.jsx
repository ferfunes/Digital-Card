function Button(props) {
  return (
    <a href={props.href} className="button">
      {props.icon}
      {props.text}
    </a>
  );
}

export default Button;
