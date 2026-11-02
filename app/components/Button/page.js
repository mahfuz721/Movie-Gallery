'use client'

export default function Button({name, type, onClick, children}
) {
return (
    <button
    name={name}
    type={type}
    onClick={onClick}
    className="w-100 bg-blue-600 text-white font-medium rounded px-3 py-2 hover:bg-blue-700 active:scale-95 transition cursor-pointer"
    >
        {children}
    </button>

  
    

    
)
}
