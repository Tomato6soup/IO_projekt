(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5652)}])},3672:function(e,n,i){"use strict";i.d(n,{Z:function(){return m},z:function(){return p}});var s=i(8564),t=i(2267),o=i(8007),r=i(3304),c=i(5893),a=i(7294),l=i(2814),u=i(1436),d=i(5841),h=i(1664),v=i.n(h),m=function(e){(0,o._)(i,e);var n=(0,r._)(i);function i(){return(0,s._)(this,i),n.apply(this,arguments)}return(0,t._)(i,[{key:"render",value:function(){var e=this.props.movie;return e?(0,c.jsxs)("div",{className:"hero-slide",children:[(0,c.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:"url('https://smartcinema.ua/".concat(e.detail_background,"')"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),(0,c.jsx)("div",{className:"movie-info-container",children:(0,c.jsxs)("div",{className:"movie-info",children:[(0,c.jsx)(v(),{href:"/movie/".concat(e.id),className:"movie-title",children:(0,c.jsx)("h1",{children:e.title})}),(0,c.jsx)(d.Z,{size:d.J.small,movie:e,className:"movie-labels"}),(0,c.jsx)("span",{className:"movie-trailer-link",children:(0,c.jsxs)("a",{href:e.trailer,target:"_blank",rel:"noreferrer",children:[(0,c.jsx)(l.G,{icon:u.aQp})," Дивитись трейлер"]})}),(0,c.jsx)(v(),{href:"/schedule?movieId=".concat(e.id),className:"button movie-tickets",children:(0,c.jsx)("button",{children:"Придбати квитки"})})]})})]},e.id):(0,c.jsx)(c.Fragment,{})}}]),i}(a.Component),p=m},4439:function(e,n,i){"use strict";i.d(n,{Z:function(){return k}});var s=i(8564),t=i(2267),o=i(8007),r=i(3304),c=i(5893),a=i(7294),l=i(567),u=i(4932),d=i(6066),h=i(9655),v=i(1163),m=i(5841),p=function(e){(0,o._)(i,e);var n=(0,r._)(i);function i(){var e;return(0,s._)(this,i),e=n.apply(this,arguments),e.goToMovieDetailsPage=function(n){e.props.router.push({pathname:"/movie/".concat(n.id)})},e.goToSchedulePage=function(n){e.props.router.push({pathname:"/schedule",search:(0,h.fW)({movieId:n.id}).toString()})},e}return(0,t._)(i,[{key:"render",value:function(){var e=this,n=this.props,i=n.movie,s=n.active;return i&&(0,c.jsx)("div",{onClick:function(){return e.goToMovieDetailsPage(i)},className:"movie-slide",style:{minWidth:"265px",minHeight:"405px",backgroundImage:"url('https://smartcinema.ua/".concat(i.poster,"')"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:(0,c.jsxs)("div",{className:"movie-info ".concat(s?"active":""),children:[(0,c.jsx)("div",{className:"labels",children:i&&(0,c.jsx)(m.Z,{movie:i,size:m.J.small})}),(0,c.jsx)("div",{className:"buy-ticket",children:(0,c.jsx)("button",{onClick:function(n){n.stopPropagation(),i.have_showtime?e.goToSchedulePage(i):e.goToMovieDetailsPage(i)},className:"button",children:i.have_showtime?"Придбати квиток":"Дізнатися більше"})})]})},i.id)}}]),i}(a.Component),f=(0,v.withRouter)(p),x=i(4806),j=i(3546),_=function(e){(0,o._)(i,e);var n=(0,r._)(i);function i(){var e;return(0,s._)(this,i),e=n.apply(this,arguments),e.state={number:0},e.nextSlide=function(){e.slider.slickNext()},e.previousSlide=function(){e.slider.slickPrev()},e}return(0,t._)(i,[{key:"render",value:function(){var e=this,n=this.props.movies;return n&&n.length>0&&(0,c.jsxs)("div",{className:"movie-carousel",children:[(0,c.jsxs)("div",{className:"buttons",children:[(0,c.jsx)("button",{className:"slider-button previous",onClick:this.previousSlide,children:(0,c.jsx)(j.Z,{})}),(0,c.jsx)("button",{className:"slider-button next",onClick:this.nextSlide,children:(0,c.jsx)(x.Z,{})})]}),(0,c.jsx)(d.Z,(0,u._)((0,l._)({ref:function(n){return e.slider=n}},{arrows:!1,className:"center",centerMode:!0,autoplay:!1,autoplaySpeed:4e3,infinite:!0,centerPadding:"1rem",slidesToShow:3,slidesToScroll:1,initialSlide:3,speed:500,responsive:[{breakpoint:1e3,settings:{slidesToShow:1}}]}),{children:n&&n.map(function(e){return(0,c.jsx)(f,{movie:e},e.id)})}))]})}}]),i}(a.Component),b=i(4603),g=i(430),k=function(e){(0,o._)(i,e);var n=(0,r._)(i);function i(){return(0,s._)(this,i),n.apply(this,arguments)}return(0,t._)(i,[{key:"render",value:function(){var e=this.props,n=e.movies,i=e.comingSoonMovies;return(0,c.jsxs)(g.Z,{defaultActiveTabKey:"0",children:[(0,c.jsx)(b.Z,{title:"Дивитися зараз",children:(0,c.jsx)(_,{movies:n})},"0"),(0,c.jsx)(b.Z,{title:"Дивитися незабаром",children:(0,c.jsx)(_,{movies:i})},"1")]})}}]),i}(a.Component)},5652:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return C}});var s=i(1309),t=i(5893),o=i(7294),r=i(9655),c=i(4775),a=i(5631),l=i(2664),u=i(8564),d=i(2267),h=i(8007),v=i(3304),m=i(567),p=i(4932),f=i(6066),x=i(3672),j=i(4806),_=i(3546),b=function(e){var n=e.movies,i=(0,o.useRef)();return n&&n.length>0&&(0,t.jsxs)("div",{className:"hero-carousel",children:[(0,t.jsxs)("div",{className:"buttons",children:[(0,t.jsx)("button",{className:"slider-button previous",onClick:function(){i.slickPrev()},children:(0,t.jsx)(_.Z,{})}),(0,t.jsx)("button",{className:"slider-button next",onClick:function(){i.slickNext()},children:(0,t.jsx)(j.Z,{})})]}),(0,t.jsx)(f.Z,(0,p._)((0,m._)({ref:function(e){return i=e}},{arrows:!1,infinite:!0,slidesToShow:1,autoplay:!0,autoplaySpeed:3e3,slidesToScroll:1,speed:500}),{children:n&&n.map(function(e){return(0,t.jsx)(x.Z,{movie:e},e.id)})})),(null==window?void 0:window.location.pathname)==="/schedule"&&(0,t.jsx)("div",{className:"arrow-down"})]})},g=i(239),k=i(4523),N=i(1302),w=i(1953),S=i(4439),y=function(e){(0,h._)(i,e);var n=(0,v._)(i);function i(){return(0,u._)(this,i),n.apply(this,arguments)}return(0,d._)(i,[{key:"componentDidMount",value:function(){this.props.dispatch((0,N.T0)()),this.props.dispatch((0,k.Qb)({branchId:this.props.branchId})),this.props.dispatch((0,w.Hs)())}},{key:"render",value:function(){var e=this.props,n=e.movies,i=e.comingSoonMovies,s=e.news;return(0,t.jsxs)("div",{className:"home-page",children:[n&&(0,t.jsx)(b,{movies:n}),(0,t.jsxs)("div",{className:"movies",children:[(0,t.jsx)("h2",{children:"Фільми в SmartCinema"}),n&&i&&(0,t.jsx)(S.Z,{movies:n,comingSoonMovies:i})]}),(0,t.jsx)("div",{id:"news",className:"news-and-sales",children:s&&(0,t.jsx)(g.Z,{news:s})})]})}}]),i}(o.Component),Z=(0,l.$j)(function(e){var n,i=null==e?void 0:null===(n=e.branches)||void 0===n?void 0:n.currentBranchId;return{movies:e.movies,comingSoonMovies:e.comingSoonMovies,news:e.news,branchId:i}})(y),C=function(){var e=(0,s._)((0,o.useState)(!1),2),n=e[0],i=e[1],u=(0,s._)((0,o.useState)(a.Z),2),d=u[0],h=u[1];return(0,o.useEffect)(function(){i(!0)},[]),(0,o.useEffect)(function(){h(a.Z)},[n]),n?(0,t.jsx)(r.VK,{children:(0,t.jsx)(l.zt,{store:d,children:(0,t.jsx)(c.g,{children:(0,t.jsx)(Z,{})})})}):null}}},function(e){e.O(0,[678,523,492,780,885,752,40,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);