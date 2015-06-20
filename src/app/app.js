import Ember from "Ember";
import DS from "EmberData";
import nwWindow from "nwjs/nwWindow";

import {} from "initializers/initializers";


import Resolver from "./resolver";
import Router from "./router";

import GithubAdapter from "store/GithubAdapter";
import TwitchAdapter from "store/TwitchAdapter";

import Livestreamer from "models/Livestreamer";

import Window from "models/localstorage/Window";
import Settings from "models/localstorage/Settings";
import Versioncheck from "models/localstorage/Versioncheck";
import Auth from "models/localstorage/Auth";
import Search from "models/localstorage/Search";
import ChannelSettings from "models/localstorage/ChannelSettings";

import GithubReleases from "models/github/Releases";
import GithubReleasesSerializer from "models/github/ReleasesSerializer";

import TwitchToken from "models/twitch/Token";
import TwitchTokenSerializer from "models/twitch/TokenSerializer";

import TwitchGame from "models/twitch/Game";
import TwitchGameSerializer from "models/twitch/GameSerializer";
import TwitchStream from "models/twitch/Stream";
import TwitchStreamSerializer from "models/twitch/StreamSerializer";
import TwitchChannel from "models/twitch/Channel";
import TwitchChannelSerializer from "models/twitch/ChannelSerializer";
import TwitchTeam from "models/twitch/Team";
import TwitchTeamSerializer from "models/twitch/TeamSerializer";
import TwitchImage from "models/twitch/Image";
import TwitchImageSerializer from "models/twitch/ImageSerializer";

import TwitchGamesTop from "models/twitch/GamesTop";
import TwitchGamesTopSerializer from "models/twitch/GamesTopSerializer";
import TwitchStreamsSummary from "models/twitch/StreamsSummary";
import TwitchStreamsSummarySerializer from "models/twitch/StreamsSummarySerializer";
import TwitchStreamsFeatured from "models/twitch/StreamsFeatured";
import TwitchStreamsFeaturedSerializer from "models/twitch/StreamsFeaturedSerializer";

import TwitchStreamsFollowed from "models/twitch/StreamsFollowed";
import TwitchStreamsFollowedSerializer from "models/twitch/StreamsFollowedSerializer";
import TwitchChannelsFollowed from "models/twitch/ChannelsFollowed";
import TwitchChannelsFollowedSerializer from "models/twitch/ChannelsFollowedSerializer";
import TwitchGamesFollowed from "models/twitch/GamesFollowed";
import TwitchGamesFollowedSerializer from "models/twitch/GamesFollowedSerializer";

import TwitchSearchGame from "models/twitch/SearchGame";
import TwitchSearchGameSerializer from "models/twitch/SearchGameSerializer";
import TwitchSearchStream from "models/twitch/SearchStream";
import TwitchSearchStreamSerializer from "models/twitch/SearchStreamSerializer";
import TwitchSearchChannel from "models/twitch/SearchChannel";
import TwitchSearchChannelSerializer from "models/twitch/SearchChannelSerializer";

import TwitchUserFollowsChannel from "models/twitch/UserFollowsChannel";
import TwitchUserFollowsChannelSerializer from "models/twitch/UserFollowsChannelSerializer";
import TwitchUserSubscription from "models/twitch/UserSubscription";
import TwitchUserSubscriptionSerializer from "models/twitch/UserSubscriptionSerializer";

import TwitchTicket from "models/twitch/Ticket";
import TwitchTicketSerializer from "models/twitch/TicketSerializer";
import TwitchProduct from "models/twitch/Product";
import TwitchProductSerializer from "models/twitch/ProductSerializer";
import TwitchProductEmoticon from "models/twitch/ProductEmoticon";
import TwitchProductEmoticonSerializer from "models/twitch/ProductEmoticonSerializer";


import BooleanTransform from "store/BooleanTransform";
import LinkView from "views/LinkView";
import SelectView from "views/SelectView";


// Services
import MetadataService from "services/MetadataService";
import AuthService from "services/AuthService";
import NotificationService from "services/NotificationService";


// Application
import ApplicationRoute from "routes/ApplicationRoute";
import ApplicationController from "controllers/ApplicationController";
import ApplicationView from "views/ApplicationView";

import LoadingRoute from "routes/LoadingRoute";
import LoadingView from "views/LoadingView";

import ErrorRoute from "routes/ErrorRoute";
import ErrorView from "views/ErrorView";

import IndexRoute from "routes/IndexRoute";

import ModalView from "views/ModalView";

import QuitModalTemplate from "text!templates/modals/quit.html.hbs";

import VersioncheckController from "controllers/VersioncheckController";
import VersioncheckModalTemplate from "text!templates/modals/versioncheck.html.hbs";

import LivestreamerController from "controllers/LivestreamerController";
import LivestreamerModalView from "views/LivestreamerModalView";
import LivestreamerModalTemplate from "text!templates/modals/livestreamer.html.hbs";


// Components
import FormButtonComponent from "components/FormButtonComponent";
import SearchBarComponent from "components/SearchBarComponent";
import SettingsBarComponent from "components/SettingsBarComponent";
import ExternalLinkComponent from "components/ExternalLinkComponent";
import LivestreamerDocsComponent from "components/LivestreamerDocsComponent";
import CheckBoxComponent from "components/CheckBoxComponent";
import RadioButtonComponent from "components/RadioButtonComponent";
import RadioButtonsComponent from "components/RadioButtonsComponent";
import FileSelectComponent from "components/FileSelectComponent";
import GameItemComponent from "components/GameItemComponent";
import StreamItemComponent from "components/StreamItemComponent";
import ChannelItemComponent from "components/ChannelItemComponent";
import SubscriptionItemComponent from "components/SubscriptionItemComponent";
import InfiniteScrollComponent from "components/InfiniteScrollComponent";
import EmbeddedLinksComponent from "components/EmbeddedLinksComponent";
import FlagIconComponent from "components/FlagIconComponent";
import StatsRowComponent from "components/StatsRowComponent";


// Content
import FeaturedRoute from "routes/FeaturedRoute";
import FeaturedController from "controllers/FeaturedController";
import FeaturedView from "views/FeaturedView";

import WatchingRoute from "routes/WatchingRoute";
import WatchingController from "controllers/WatchingController";
import WatchingView from "views/WatchingView";

import SearchRoute from "routes/SearchRoute";
import SearchController from "controllers/SearchController";
import SearchView from "views/SearchView";

import GamesLoadingRoute from "routes/LoadingRoute";
import GamesLoadingView from "views/LoadingView";
import GamesIndexRoute from "routes/GamesIndexRoute";
import GamesIndexController from "controllers/GamesIndexController";
import GamesIndexView from "views/GamesIndexView";
import GamesGameRoute from "routes/GamesGameRoute";
import GamesGameController from "controllers/GamesGameController";
import GamesGameView from "views/GamesGameView";

import ChannelsLoadingRoute from "routes/LoadingRoute";
import ChannelsLoadingView from "views/LoadingView";
import ChannelsRoute from "routes/ChannelsRoute";
import ChannelsController from "controllers/ChannelsController";
import ChannelsView from "views/ChannelsView";

import ChannelRoute from "routes/ChannelRoute";
import ChannelController from "controllers/ChannelController";
import ChannelView from "views/ChannelView";
import ChannelLoadingRoute from "routes/LoadingRoute";
import ChannelLoadingView from "views/LoadingView";
import ChannelIndexRoute from "routes/ChannelIndexRoute";
import ChannelIndexController from "controllers/ChannelIndexController";
import ChannelIndexView from "views/ChannelIndexView";
import ChannelSettingsRoute from "routes/ChannelSettingsRoute";
import ChannelSettingsController from "controllers/ChannelSettingsController";
import ChannelSettingsView from "views/ChannelSettingsView";

import UserLoadingRoute from "routes/LoadingRoute";
import UserLoadingView from "views/LoadingView";
import UserIndexRoute from "routes/UserIndexRoute";
import UserIndexController from "controllers/UserIndexController";
import UserIndexView from "views/UserIndexView";
import UserAuthRoute from "routes/UserAuthRoute";
import UserAuthController from "controllers/UserAuthController";
import UserAuthView from "views/UserAuthView";
import UserSubscriptionsRoute from "routes/UserSubscriptionsRoute";
import UserSubscriptionsView from "views/UserSubscriptionsView";
import UserFollowedStreamsRoute from "routes/UserFollowedStreamsRoute";
import UserFollowedStreamsView from "views/UserFollowedStreamsView";
import UserFollowedChannelsRoute from "routes/UserFollowedChannelsRoute";
import UserFollowedChannelsView from "views/UserFollowedChannelsView";
import UserFollowedGamesRoute from "routes/UserFollowedGamesRoute";
import UserFollowedGamesView from "views/UserFollowedGamesView";

import SettingsRoute from "routes/SettingsRoute";
import SettingsController from "controllers/SettingsController";
import SettingsView from "views/SettingsView";
import SettingsModalTemplate from "text!templates/modals/settings.html.hbs";

import AboutView from "views/AboutView";


export default Ember.Application.create({
	// Configuration
	rootElement: document.documentElement,


	// Resolver
	Resolver,


	// Routing
	Router,


	// Store
	ApplicationStore: DS.Store.extend(),
	ApplicationAdapter: TwitchAdapter,


	// Models: memory
	Livestreamer,
	LivestreamerAdapter: DS.Adapter,


	// Models: localstorage
	Window,
	WindowAdapter: DS.LSAdapter.extend({ namespace: "window" }),
	WindowSerializer: DS.LSSerializer,
	Settings,
	SettingsAdapter: DS.LSAdapter.extend({ namespace: "settings" }),
	SettingsSerializer: DS.LSSerializer,
	Versioncheck,
	VersioncheckAdapter: DS.LSAdapter.extend({ namespace: "versioncheck" }),
	VersioncheckSerializer: DS.LSSerializer,
	Auth,
	AuthAdapter: DS.LSAdapter.extend({ namespace: "auth" }),
	AuthSerializer: DS.LSSerializer,
	Search,
	SearchAdapter: DS.LSAdapter.extend({ namespace: "search" }),
	SearchSerializer: DS.LSSerializer,
	ChannelSettings,
	ChannelSettingsAdapter: DS.LSAdapter.extend({ namespace: "channelsettings" }),
	ChannelSettingsSerializer: DS.LSSerializer,


	// Models: github
	GithubReleases,
	GithubReleasesAdapter: GithubAdapter,
	GithubReleasesSerializer,


	// Models: twitch
	TwitchToken,
	TwitchTokenSerializer,

	TwitchGame,
	TwitchGameSerializer,
	TwitchStream,
	TwitchStreamSerializer,
	TwitchChannel,
	TwitchChannelSerializer,
	TwitchTeam,
	TwitchTeamSerializer,
	TwitchImage,
	TwitchImageSerializer,

	TwitchGamesTop,
	TwitchGamesTopSerializer,
	TwitchStreamsSummary,
	TwitchStreamsSummarySerializer,
	TwitchStreamsFeatured,
	TwitchStreamsFeaturedSerializer,

	TwitchStreamsFollowed,
	TwitchStreamsFollowedSerializer,
	TwitchChannelsFollowed,
	TwitchChannelsFollowedSerializer,
	TwitchGamesFollowed,
	TwitchGamesFollowedSerializer,

	TwitchSearchGame,
	TwitchSearchGameSerializer,
	TwitchSearchStream,
	TwitchSearchStreamSerializer,
	TwitchSearchChannel,
	TwitchSearchChannelSerializer,

	TwitchUserFollowsChannel,
	TwitchUserFollowsChannelSerializer,
	TwitchUserSubscription,
	TwitchUserSubscriptionSerializer,

	TwitchTicket,
	TwitchTicketSerializer,
	TwitchProduct,
	TwitchProductSerializer,
	TwitchProductEmoticon,
	TwitchProductEmoticonSerializer,


	// Ember additions/changes/fixes
	BooleanTransform,
	LinkView,
	SelectView,


	// Services
	MetadataService,
	AuthService,
	NotificationService,


	// Application
	ApplicationRoute,
	ApplicationController,
	ApplicationView,

	LoadingRoute,
	LoadingView,

	ErrorRoute,
	ErrorView,

	IndexRoute,

	ModalView,

	QuitModalTemplate,

	VersioncheckController,
	VersioncheckModalTemplate,

	LivestreamerController,
	LivestreamerModalView,
	LivestreamerModalTemplate,


	// Components
	FormButtonComponent,
	SearchBarComponent,
	SettingsBarComponent,
	ExternalLinkComponent,
	LivestreamerDocsComponent,
	CheckBoxComponent,
	RadioButtonComponent,
	RadioButtonsComponent,
	FileSelectComponent,
	GameItemComponent,
	StreamItemComponent,
	ChannelItemComponent,
	SubscriptionItemComponent,
	InfiniteScrollComponent,
	EmbeddedLinksComponent,
	FlagIconComponent,
	StatsRowComponent,


	// Content
	FeaturedRoute,
	FeaturedController,
	FeaturedView,

	WatchingRoute,
	WatchingController,
	WatchingView,

	SearchRoute,
	SearchController,
	SearchView,

	GamesLoadingRoute,
	GamesLoadingView,
	GamesIndexRoute,
	GamesIndexController,
	GamesIndexView,
	GamesGameRoute,
	GamesGameController,
	GamesGameView,

	ChannelsLoadingRoute,
	ChannelsLoadingView,
	ChannelsRoute,
	ChannelsController,
	ChannelsView,

	ChannelRoute,
	ChannelController,
	ChannelView,
	ChannelLoadingRoute,
	ChannelLoadingView,
	ChannelIndexRoute,
	ChannelIndexController,
	ChannelIndexView,
	ChannelSettingsRoute,
	ChannelSettingsController,
	ChannelSettingsView,

	UserLoadingRoute,
	UserLoadingView,
	UserIndexRoute,
	UserIndexController,
	UserIndexView,
	UserAuthRoute,
	UserAuthController,
	UserAuthView,
	UserSubscriptionsRoute,
	UserSubscriptionsView,
	UserFollowedStreamsRoute,
	UserFollowedStreamsView,
	UserFollowedChannelsRoute,
	UserFollowedChannelsView,
	UserFollowedGamesRoute,
	UserFollowedGamesView,

	SettingsRoute,
	SettingsController,
	SettingsView,
	SettingsModalTemplate,

	AboutView,


	// ready event
	ready() {
		// get the global settings record
		var settings = this.__container__.lookup( "record:settings" );

		// and emit the ready event to the nwjs window
		nwWindow.emit( "ready", settings );
	},

	toString() { return "App"; }
});
