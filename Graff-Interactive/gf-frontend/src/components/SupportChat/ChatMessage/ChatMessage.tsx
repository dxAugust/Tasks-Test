interface ChatMessageProps {
    username: string,
    message: string,
    class: string
}

function ChatMessage(props: ChatMessageProps)
{
    props.class = "message " + props.class;

    return (
        <>
            <li className={ props.class }>
                <div className="profile-pic">{ props?.username }</div>
                <div className="tail"></div>
                <div className="message-block">{ props?.message }</div>
            </li>
        </>
    );
}

export default ChatMessage