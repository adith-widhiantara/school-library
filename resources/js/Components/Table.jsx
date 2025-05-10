const Table = ({ data, columns }) => {
    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    {columns.map((column, index) => (
                                        <th
                                            scope="col"
                                            key={index}
                                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                                        >
                                            {column.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        {columns.map((column, colIndex) => (
                                            <td
                                                key={colIndex}
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                                            >
                                                {column.selector
                                                    ? column.selector(item)
                                                    : column.cell(item)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
