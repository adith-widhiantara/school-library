import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import Table from '@/Components/Table.jsx'

export default function Index({ books }) {
    const columns = [
        {
            name: 'Title',
            selector: (row) => row.title,
        },
        {
            name: 'Year',
            selector: (row) => row.year,
        },
        {
            name: 'Author',
            selector: (row) => row.creator.name,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div className="flex space-x-2">
                    <a
                        href={route('books.show', row.id)}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        View
                    </a>
                    <a
                        href={route('books.edit', row.id)}
                        className="text-green-500 hover:text-green-700"
                    >
                        Edit
                    </a>
                </div>
            ),
        },
    ]

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Books
                </h2>
            }
        >
            <Head title="Books" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Table data={books} columns={columns} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
