type Props = {
    label: string,
    className: string
    onClick?: () => void;
    // typein: 'submit'
} 
const Button: React.FC<Props> = ({label, onClick, className,}) =>{
    return(
        <button
            className={className+" text-white uppercase py-2 rounded font-normal text-sm "}
            onClick={onClick}
            // type={typein}
        >
            {label}
        </button>
    )
}
export default Button