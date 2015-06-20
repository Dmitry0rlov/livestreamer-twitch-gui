import Ember from "Ember";
import InfiniteScrollViewMixin from "mixins/InfiniteScrollViewMixin";
import template from "text!templates/user/subscriptions.html.hbs";


export default Ember.View.extend( InfiniteScrollViewMixin, {
	template: Ember.HTMLBars.compile( template ),
	tagName: "main",
	classNames: [ "content", "content-user", "content-user-subscriptions" ]
});
