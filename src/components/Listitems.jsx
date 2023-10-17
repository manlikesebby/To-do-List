

const ListItem = ({item, i, deleteItem}) => {
    return (
        <li onClick={() => deleteItem(i)}>
            {i}
            {item}
        </li>
    );
};

export default ListItem;