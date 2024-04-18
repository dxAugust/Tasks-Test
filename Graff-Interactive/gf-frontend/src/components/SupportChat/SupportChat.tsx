import "./SupportChat.css";

/*
interface SiteChatProps {
    showChatList?: boolean
}
*/

function SiteChat(/* props?: SiteChatProps */)
{
    return (
        <>
          <div className="client-chat">
            <h2>Чат с поддержкой</h2>

            <div className="chat-input-block">
              <div className="chat-messages-list">
                <ul>
                  
                </ul>
              </div>
  
              <div className="chat-message-input">
                <input type="text" placeholder="Написать сообщение..."/>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9486 6.31625C19.0739 5.94037 18.9655 5.52597 18.6721 5.25964C18.3788 4.99331 17.9559 4.92529 17.5938 5.08621L4.92082 10.7187C3.61718 11.298 3.78221 13.1986 5.16622 13.5446L7.2927 14.0762C7.9053 14.2294 8.55425 14.0842 9.04323 13.6847L14.4913 9.23314C14.6777 9.08084 14.9248 9.32698 14.7732 9.51396L10.7598 14.4648C10.2656 15.0744 10.1736 15.9168 10.5246 16.6187L11.899 19.3676C12.4967 20.5628 14.2411 20.4389 14.6637 19.1711L18.9486 6.31625Z" fill="#A3A7BF"/>
                </svg>
              </div> 
            </div>
          </div>
        </>
    )
}

export default SiteChat