interface IProps {
    text: string,
    color: string,
    onClick: React.MouseEventHandler<HTMLDivElement>,
}
function ButtonComponent(props: IProps) {
    return (
        <div onClick={props.onClick} className={`w-[174px] h-[42px] sm:w-[100px]  rounded-lg flex justify-center items-center ${props.color}`}>
            {props.text}
        </div>
    );
}

export default ButtonComponent;