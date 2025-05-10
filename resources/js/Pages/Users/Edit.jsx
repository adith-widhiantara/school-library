import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'
import SelectMenu from '@/Components/SelectMenu.jsx'
import SecondaryButton from '@/Components/SecondaryButton.jsx'
import DangerButton from '@/Components/DangerButton.jsx'

export default function Edit({ user }) {
    const {
        data,
        setData,
        put,
        delete: deleteuser,
        processing,
        errors,
    } = useForm({
        name: user.name,
        email: user.email,
        role: user.role,
    })

    const submit = (e) => {
        e.preventDefault()

        put(route('users.update', user.id))
    }

    const destroy = () => {
        if (confirm('Are you sure you want to delete this user?')) {
            deleteuser(route('users.destroy', user.id))
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {user.title}
                </h2>
            }
        >
            <Head title={user.title} />

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
                                        value={data.name}
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
                                    <InputLabel htmlFor="email" value="email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        isFocused={false}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className={'my-3'}>
                                    <InputLabel htmlFor="role" value="role" />

                                    <SelectMenu
                                        options={['admin', 'user']}
                                        onChange={(e) => {
                                            setData('role', e.target.value)
                                        }}
                                        defaultValue={user.role}
                                    />

                                    <InputError
                                        message={errors.role}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between">
                                        <DangerButton
                                            type="button"
                                            onClick={() => {
                                                destroy()
                                            }}
                                        >
                                            Delete
                                        </DangerButton>

                                        <SecondaryButton
                                            type="submit"
                                            className="ms-4"
                                            disabled={processing}
                                        >
                                            Save
                                        </SecondaryButton>

                                        <a
                                            href={route('users.index')}
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
