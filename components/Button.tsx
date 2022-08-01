type Props = {
    label: string
    onClick: () => void
    typein: 'submit'
} 
const Button: React.FC<Props> = ({label, onClick,typein}) =>{
    return(
        <button
            className="rounded-xl bg-red-400 py-2 px-8 text-white"
            onClick={onClick}
            type={typein}
        >
            {label}
        </button>
    )
}
export default Button