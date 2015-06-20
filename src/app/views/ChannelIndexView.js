import Ember from "Ember";
import PreviewImageViewMixin from "mixins/PreviewImageViewMixin";
import ChannelViewMixin from "mixins/ChannelViewMixin";
import template from "text!templates/channel/index.html.hbs";


export default Ember.View.extend( PreviewImageViewMixin, ChannelViewMixin, {
	template: Ember.HTMLBars.compile( template ),
	tagName: "section",
	classNames: [ "content", "content-index" ]
});
