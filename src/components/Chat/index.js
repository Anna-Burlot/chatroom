import React from "react";

import Messages from "src/containers/Messages";
import Form from "src/containers/Form";
import PseudoForm from "src/containers/PseudoForm";

const Chat = () => (
  <div id="chatroom">
    <Messages />
    <Form />
    <PseudoForm />
  </div>
);

export default Chat;
