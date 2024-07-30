import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1870} />
        <Item marca="Porsche" ano_lancamento={1968} />
        <Item marca="Tesla" ano_lancamento={2010} />
      </ul>
    </>
  );
}

export default List;
