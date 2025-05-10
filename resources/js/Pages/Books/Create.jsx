import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'
import SelectMenu from '@/Components/SelectMenu.jsx'
import SecondaryButton from '@/Components/SecondaryButton.jsx'

export default function Create({ creators }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        year: '',
        creator_name: creators[0],
    })

    const submit = (e) => {
        e.preventDefault()

        post(route('books.store'))
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Book
                </h2>
            }
        >
            <Head title={'Create Book'} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form onSubmit={submit}>
                            <div className="p-6 text-gray-900">
                                <div className={'my-3'}>
                                    <InputLabel htmlFor="title" value="Title" />

                                    <TextInput
                                        id="title"
                                        type="text"
                                        name="title"
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData('title', e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>

                                <div className={'my-3'}>
                                    <InputLabel htmlFor="year" value="Year" />

                                    <TextInput
                                        id="year"
                                        type="number"
                                        name="year"
                                        className="mt-1 block w-full"
                                        isFocused={false}
                                        onChange={(e) =>
                                            setData('year', e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.year}
                                        className="mt-2"
                                    />
                                </div>

                                <div className={'my-3'}>
                                    <InputLabel
                                        htmlFor="creator"
                                        value="Creator"
                                    />

                                    <SelectMenu
                                        options={creators}
                                        onChange={(e) => {
                                            setData(
                                                'creator_name',
                                                e.target.value,
                                            )
                                        }}
                                        defaultValue={creators[0]}
                                    />

                                    <InputError
                                        message={errors.creator_name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between">
                                        <SecondaryButton
                                            type="submit"
                                            className="ms-4"
                                            disabled={processing}
                                        >
                                            Save
                                        </SecondaryButton>

                                        <a
                                            href={route('books.index')}
                                            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            Back
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
