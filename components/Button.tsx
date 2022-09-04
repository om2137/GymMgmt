type Props = {
    label: string,
    className: string
    onClick?: () => void;
    type?: string;
    typeIn?: 'submit'
} 
const Button: React.FC<Props> = ({label, onClick, className,typeIn}) =>{
    return(
        <button
            className={className+" text-white uppercase py-2 rounded font-normal text-sm "}
            onClick={onClick}
            type={typeIn}
        >
            {label}
        </button>
    )
}
export default Button