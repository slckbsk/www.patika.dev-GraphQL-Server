"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Event=void 0;var Event={user:function user(_,__,_ref){var db=_ref.db;return db.users.find(function(user){return user.id===parent.user_id})},participants:function participants(_,__,_ref2){var db=_ref2.db;return db.participants.filter(function(participant){return participant.event_id===parent.id})},locations:function locations(_,__,_ref3){var db=_ref3.db;return db.locations.find(function(location){return location.id===parent.location_id})}};exports.Event=Event;