import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import Table from '@/Components/Table.jsx'
import PrimaryAnchor from '@/Components/PrimaryAnchor.jsx'

export default function Index({ users }) {
    const columns = [
        {
            name: 'name',
            selector: (row) => row.name,
        },
        {
            name: 'email',
            selector: (row) => row.email,
        },
        {
            name: 'role',
            selector: (row) => row.role,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div className="flex space-x-2">
                    <a
                        href={route('users.show', row.id)}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                    >
                        View
                    </a>
                    <a
                        href={route('users.edit', row.id)}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 focus:outline-hidden focus:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-400 dark:focus:text-green-400"
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
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div
                            className={
                                'flex justify-end p-6 bg-white border-b border-gray-200'
                            }
                        >
                            <PrimaryAnchor href={route('users.create')}>
                                Create New User
                            </PrimaryAnchor>
                        </div>

                        <div className="p-6 text-gray-900">
                            <Table data={users} columns={columns} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
