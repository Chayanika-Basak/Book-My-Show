import React from 'react'

const Cast = (props) => {
    return (
        <>
        <div>
            <div className="flex flex-col items-center">
                <div className="h-32 w-32">
                    <img
                    src={props.image}
                    alt={props.name}
                    className="w-full h-full rounded-full"
                    />
                </div>
                <h1 className="text-lg text-gray-800">
                    {props.name}
                </h1>
                <h1 className="text-sm text-gray-600">
                    as {props.role}
                </h1>
            </div>
        </div>
        </>
    )
}

export default Cast;