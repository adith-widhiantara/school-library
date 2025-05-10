const Table = ({ data, columns }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th scope="col" key={index}>
                            {column.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex}>
                                {column.selector
                                    ? column.selector(item)
                                    : column.cell(item)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
