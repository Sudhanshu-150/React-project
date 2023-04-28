import React, { useState } from 'react';
import { Channel,useChatContext,MessageSimple } from 'stream-chat-react';

import ChannelInner  from '../components/ChannelInner';
import EditChannel  from '../components/EditChannel';
import CreateChannel  from '../components/CreateChannel';
import TeamMessage  from '../components/TeamMessage';


const ChannelContainer = ({ isCreating, setIsCreating, isEditing, setIsEditing, createType }) => {
  if(isCreating) {
      return (
          <div className="channel__container">
              <CreateChannel createType={createType} setIsCreating={setIsCreating} />
          </div>
      )
  }

  if(isEditing) {
      return (
          <div className="channel__container">
              <EditChannel setIsEditing={setIsEditing} />
          </div> 
      )
  }

  const EmptyState = () => (
      <div className="channel-empty__container">
          <p className="channel-empty__first">This is the beginning of your chat history.</p>
          <p className="channel-empty__second">Send messages, attachments, links, emojis, and more!</p>
      </div>
  )

  return (
      <div className=" channel__container">
          <Channel
              EmptyStateIndicator={EmptyState}
              Message={(messageProps, i) => <TeamMessage key={i} {...messageProps} />}
          >
              <ChannelInner setIsEditing={setIsEditing} />
          </Channel>
      </div>
  );
}
export default ChannelContainer;
