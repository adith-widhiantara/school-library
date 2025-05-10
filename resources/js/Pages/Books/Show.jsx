import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'

export default function Show({ book }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {book.title}
                </h2>
            }
        >
            <Head title={book.title} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className={'my-3'}>
                                <InputLabel htmlFor="title" value="Title" />

                                <TextInput
                                    className={'mt-1 block w-full'}
                                    value={book.title}
                                    readOnly
                                />
                            </div>

                            <div className={'my-3'}>
                                <InputLabel htmlFor="year" value="Year" />

                                <TextInput
                                    className={'mt-1 block w-full'}
                                    value={book.year}
                                    readOnly
                                />
                            </div>

                            <div className={'my-3'}>
                                <InputLabel htmlFor="creator" value="Creator" />

                                <TextInput
                                    className={'mt-1 block w-full'}
                                    value={book.creator.name}
                                    readOnly
                                />
                            </div>

                            {/*  button back  */}
                            <div className="mt-6">
                                <div className="flex justify-end">
                                    <a
                                        href={route('books.index')}
                                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        Back
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
