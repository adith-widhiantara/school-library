import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'
import SecondaryButton from '@/Components/SecondaryButton.jsx'
import TextArea from '@/Components/Textarea.jsx'

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        bio: '',
    })

    const submit = (e) => {
        e.preventDefault()

        post(route('book-creators.store'))
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    New Creator
                </h2>
            }
        >
            <Head title={'New Creator'} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form onSubmit={submit}>
                            <div className="p-6 text-gray-900">
                                <div className={'my-3'}>
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className={'my-3'}>
                                    <InputLabel htmlFor="bio" value="Bio" />

                                    <TextArea
                                        id="bio"
                                        name="bio"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData('bio', e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.year}
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
                                            href={route('book-creators.index')}
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
