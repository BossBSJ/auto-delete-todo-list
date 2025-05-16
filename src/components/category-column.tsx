import type { List } from "../types/list";
import { ItemButton } from "./item-button";

type CategoryColumnProps = {
  title?: string;
  lists: List[];
  onClick: (list: List) => void;
};

export function CategoryColumn({ title, lists, onClick }: CategoryColumnProps) {
  return (
    <div style={{ border: "1px solid black", flex: 1 }}>
      {title && (
        <div
          style={{
            backgroundColor: "grey",
            color: "white",
            padding: "16px",
            fontSize: "24px",
          }}
        >
          {title}
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px",
        }}
      >
        {lists.map((item) => (
          <ItemButton
            key={item.name}
            name={item.name}
            onClick={() => onClick(item)}
          />
        ))}
      </div>
    </div>
  );
}
