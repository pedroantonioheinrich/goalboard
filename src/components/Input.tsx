
import React from 'react'

type Inputprops = {
    label:string,
    className: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>
    ) => void,
    error?: string
}

const labelStyle: React.CSSProperties = {
    fontSize: '10px',
    alignSelf: 'flex-start',
    paddingLeft: '15px',
    color: '#000'
}

const inputGroupStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '10px', 
    marginBottom: '5px',
}

const errorStyle: React.CSSProperties = {
    color : 'red',
    fontSize: '10px',
    alignSelf: 'flex-start',
    paddingLeft: '15px'
}

export function Input({label, className, type, placeholder, value, onChange, error} : Inputprops ){
    return (
        <div className="input-group" style={inputGroupStyle}>
            <label style={labelStyle}>{label}</label>
            <input className={className} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
            {error && (<p className="input-error" style={errorStyle}>{error}</p>)}
        </div>
    )
}