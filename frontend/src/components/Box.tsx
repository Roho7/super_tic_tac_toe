type BoxProps = {
  value: string;
  onClick: () => void;
};

function Box({ value, onClick }: BoxProps) {
  const style = value === "X" ? "box x" : value === "O" ? "box o" : "box";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Box;
