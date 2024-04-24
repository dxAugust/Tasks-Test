import "./ChatMessage.css";

interface ChatMessageProps {
    username: string,
    message: string,
    self?: boolean
}

function ChatMessage(props: ChatMessageProps)
{
    let className = self ? "message self" : "message";

    return (
        <>
            <li className={ className }>
                <div className="profile-pic">{ props?.username }</div>
                
                <div className="message-block">{ props?.message }</div>
            </li>
        </>
    );
}

export default ChatMessage