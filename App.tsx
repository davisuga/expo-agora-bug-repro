import "expo-dev-client";
import React, { useState } from "react";
import AgoraUIKit from "agora-rn-uikit";
import { Text } from "react-native";

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: "<Agora App ID>",
    channel: "test",
  };
  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
  ) : (
    <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  );
};

export default App;
