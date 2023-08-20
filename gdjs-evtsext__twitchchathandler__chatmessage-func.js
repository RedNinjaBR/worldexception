
if (typeof gdjs.evtsExt__TwitchChatHandler__ChatMessage !== "undefined") {
  gdjs.evtsExt__TwitchChatHandler__ChatMessage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TwitchChatHandler__ChatMessage = {};


gdjs.evtsExt__TwitchChatHandler__ChatMessage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RegEx__HasPattern.func(runtimeScene, "PRIVMSG", "", gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Twitch").getChild("User").setString("@" + gdjs.evtTools.string.subStr(gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), 1, gdjs.evtTools.string.strFind(gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "!") - 1) + ":");
}{runtimeScene.getScene().getVariables().get("Twitch").getChild("ChatFilter").setString(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtTools.string.strFind(gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "#"), gdjs.evtTools.string.strLen(gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))), gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtTools.string.strFind(gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "#"), gdjs.evtTools.string.strLen(gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))), ":") + 1, gdjs.evtTools.string.strLen(gdjs.evtTools.string.subStr(gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtTools.string.strFind(gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "#"), gdjs.evtTools.string.strLen(gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))))));
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Twitch").getChild("User")) + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Twitch").getChild("ChatFilter")); }}}

}


};

gdjs.evtsExt__TwitchChatHandler__ChatMessage.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TwitchChatHandler__ChatMessage.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__TwitchChatHandler__ChatMessage.registeredGdjsCallbacks = [];