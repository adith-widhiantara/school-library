import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

const TextArea = forwardRef(function TextArea(
    { className = '', isFocused = false, onChange, ...props },
    ref,
) {
    const localRef = useRef(null)

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }))

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus()
        }
    }, [isFocused])

    return (
        <textarea
            {...props}
            onChange={onChange}
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' +
                className
            }
            ref={localRef}
        />
    )
})

export default TextArea
