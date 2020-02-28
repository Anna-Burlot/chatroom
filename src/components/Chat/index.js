import React from "react";

import Messages from "src/containers/Messages";
import Form from "src/containers/Form";
import PseudoForm from "src/containers/PseudoForm";
import TogglePseudoFormButton from "src/containers/TogglePseudoFormButton";

const Chat = () => (
  <div id="chatroom">
    <Messages />
    <Form />
    <TogglePseudoFormButton />
    <PseudoForm />
  </div>
);

export default Chat;
