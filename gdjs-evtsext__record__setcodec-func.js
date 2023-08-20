
if (typeof gdjs.evtsExt__Record__SetCodec !== "undefined") {
  gdjs.evtsExt__Record__SetCodec.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Record__SetCodec = {};


gdjs.evtsExt__Record__SetCodec.userFunc0x10d92a8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionRecord.options.codec = ';codecs=' + eventsFunctionContext.getArgument('codec');
};
gdjs.evtsExt__Record__SetCodec.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Record__SetCodec.userFunc0x10d92a8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Record__SetCodec.func = function(runtimeScene, codec, parentEventsFunctionContext) {
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
if (argName === "codec") return codec;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Record__SetCodec.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Record__SetCodec.registeredGdjsCallbacks = [];