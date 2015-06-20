import Ember from "Ember";
import ModalView from "views/ModalView";
import ChannelViewMixin from "mixins/ChannelViewMixin";
import layout from "text!templates/modals/layouts/livestreamer.html.hbs";

var alias = Ember.computed.alias;
var bool = Ember.computed.bool;


export default ModalView.extend( ChannelViewMixin, {
	layout: Ember.HTMLBars.compile( layout ),
	classNames: [ "mymodal", "modal-livestreamer" ],

	showStats: bool( "context.active.success" ),

	stream : alias( "context.active.stream" ),
	channel: alias( "context.active.channel" )
});
