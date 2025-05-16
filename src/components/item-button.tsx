type ItemButtonProps = {
  name: string;
  onClick: VoidFunction;
};

export function ItemButton({ name, onClick }: ItemButtonProps) {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid black",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {name}
    </div>
  );
}
