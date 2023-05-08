type ListProps<T> = {
  items: T[];
  onClick: (item: T) => void;
};

function ListExample<T extends {id:number,name:string}>({ items, onClick }: ListProps<T>) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} onClick={() => onClick(item)}>{item.name}</div>
      ))}
    </>
  );
}

export default ListExample;
