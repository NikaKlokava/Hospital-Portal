"use strict";(self.webpackChunkhospital_portal=self.webpackChunkhospital_portal||[]).push([[984],{1984:(ht,v,c)=>{c.r(v),c.d(v,{StatisticsModule:()=>ct});var u=c(6895),b=c(2254),i=c(4650),D=c(1135),A=c(8104);let F=(()=>{class n{constructor(t){this.db=t,this.statisticsDataSubject=new D.X([]),this.statisticsData=this.statisticsDataSubject.asObservable()}loadData(){this.db.list("/statistics").valueChanges().subscribe(t=>{const a=t.sort((r,o)=>r.data.title.localeCompare(o.data.title));this.statisticsDataSubject.next(a)})}static#t=this.\u0275fac=function(e){return new(e||n)(i.LFG(A.KQ))};static#e=this.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var f=c(5861),C=c(4707),w=c(727),P=c(7579),m=c(4986),E=c(9751),N=c(4482),O=c(5403),R=c(8421);const S={leading:!0,trailing:!1};var j=c(3532);function B(n,s=m.z,t=S){const e=function Z(n=0,s,t=m.P){let e=-1;return null!=s&&((0,j.K)(s)?t=s:e=s),new E.y(a=>{let r=function U(n){return n instanceof Date&&!isNaN(n)}(n)?+n-t.now():n;r<0&&(r=0);let o=0;return t.schedule(function(){a.closed||(a.next(o++),0<=e?this.schedule(void 0,e):a.complete())},r)})}(n,s);return function I(n,s=S){return(0,N.e)((t,e)=>{const{leading:a,trailing:r}=s;let o=!1,y=null,h=null,g=!1;const rt=()=>{h?.unsubscribe(),h=null,r&&(L(),g&&e.complete())},ot=()=>{h=null,g&&e.complete()},x=d=>h=(0,R.Xf)(n(d)).subscribe((0,O.x)(e,rt,ot)),L=()=>{if(o){o=!1;const d=y;y=null,e.next(d),!g&&x(d)}};t.subscribe((0,O.x)(e,d=>{o=!0,y=d,(!h||h.closed)&&(a?L():x(d))},()=>{g=!0,(!(r&&o&&h)||h.closed)&&e.complete()}))})}(()=>e,t)}var V=c(3900);class G{constructor(){this.subject=new C.t(1),this.subscriptions=new w.w0}doFilter(s){this.subject.next(s)}dispose(){this.subscriptions.unsubscribe()}notEmpty(s,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[s]){const a=e[s].currentValue;null!=a&&t(a)}}))}has(s,t){this.subscriptions.add(this.subject.subscribe(e=>{e[s]&&t(e[s].currentValue)}))}notFirst(s,t){this.subscriptions.add(this.subject.subscribe(e=>{e[s]&&!e[s].isFirstChange()&&t(e[s].currentValue)}))}notFirstAndEmpty(s,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[s]&&!e[s].isFirstChange()){const a=e[s].currentValue;null!=a&&t(a)}}))}}const M=new i.OlP("NGX_ECHARTS_CONFIG");let J=(()=>{class n{constructor(t,e,a){this.el=e,this.ngZone=a,this.options=null,this.theme=null,this.initOpts=null,this.merge=null,this.autoResize=!0,this.loading=!1,this.loadingType="default",this.loadingOpts=null,this.chartInit=new i.vpe,this.optionsError=new i.vpe,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartPieSelectChanged=this.createLazyEvent("pieselectchanged"),this.chartPieSelected=this.createLazyEvent("pieselected"),this.chartPieUnselected=this.createLazyEvent("pieunselected"),this.chartMapSelectChanged=this.createLazyEvent("mapselectchanged"),this.chartMapSelected=this.createLazyEvent("mapselected"),this.chartMapUnselected=this.createLazyEvent("mapunselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartFocusNodeAdjacency=this.createLazyEvent("focusnodeadjacency"),this.chartUnfocusNodeAdjacency=this.createLazyEvent("unfocusnodeadjacency"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.chart$=new C.t(1),this.resize$=new P.x,this.changeFilter=new G,this.echarts=t.echarts}ngOnChanges(t){this.changeFilter.doFilter(t)}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe(B(100,m.z,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(()=>{this.animationFrameID=window.requestAnimationFrame(()=>this.resize$.next())})),this.resizeOb.observe(this.el.nativeElement)),this.changeFilter.notFirstAndEmpty("options",t=>this.onOptionsChange(t)),this.changeFilter.notFirstAndEmpty("merge",t=>this.setOption(t)),this.changeFilter.has("loading",t=>this.toggleLoading(!!t)),this.changeFilter.notFirst("theme",()=>this.refreshChart())}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.loadingSub&&this.loadingSub.unsubscribe(),this.changeFilter.dispose(),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(t){this.chart?t?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading():this.loadingSub=this.chart$.subscribe(e=>t?e.showLoading(this.loadingType,this.loadingOpts):e.hideLoading())}setOption(t,e){if(this.chart)try{this.chart.setOption(t,e)}catch(a){console.error(a),this.optionsError.emit(a)}}refreshChart(){var t=this;return(0,f.Z)(function*(){t.dispose(),yield t.initChart()})()}createChart(){const t=this.el.nativeElement;if(window&&window.getComputedStyle){const e=window.getComputedStyle(t,null).getPropertyValue("height");(!e||"0px"===e)&&(!t.style.height||"0px"===t.style.height)&&(t.style.height="400px")}return this.ngZone.runOutsideAngular(()=>("function"==typeof this.echarts?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:a})=>a(t,this.theme,this.initOpts)))}initChart(){var t=this;return(0,f.Z)(function*(){yield t.onOptionsChange(t.options),t.merge&&t.chart&&t.setOption(t.merge)})()}onOptionsChange(t){var e=this;return(0,f.Z)(function*(){t&&(e.chart||(e.chart=yield e.createChart(),e.chart$.next(e.chart),e.chartInit.emit(e.chart)),e.setOption(e.options,!0))})()}createLazyEvent(t){return this.chartInit.pipe((0,V.w)(e=>new E.y(a=>(e.on(t,r=>this.ngZone.run(()=>a.next(r))),()=>{this.chart&&(this.chart.isDisposed()||e.off(t))}))))}}return n.\u0275fac=function(t){return new(t||n)(i.Y36(M),i.Y36(i.SBq),i.Y36(i.R0b))},n.\u0275dir=i.lG2({type:n,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loading:"loading",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartPieSelectChanged:"chartPieSelectChanged",chartPieSelected:"chartPieSelected",chartPieUnselected:"chartPieUnselected",chartMapSelectChanged:"chartMapSelectChanged",chartMapSelected:"chartMapSelected",chartMapUnselected:"chartMapUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartFocusNodeAdjacency:"chartFocusNodeAdjacency",chartUnfocusNodeAdjacency:"chartUnfocusNodeAdjacency",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[i.TTD]}),n})(),$=(()=>{class n{static forRoot(t){return{ngModule:n,providers:[{provide:M,useValue:t}]}}static forChild(){return{ngModule:n}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({}),n})();const Q=["*"];let z=(()=>{class n{constructor(){this.tabTitle="",this.active=!1,this.index=0}ngOnInit(){0===this.index&&(this.active=!0)}static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275cmp=i.Xpm({type:n,selectors:[["hp-tab"]],inputs:{tabTitle:"tabTitle",active:"active",index:"index"},ngContentSelectors:Q,decls:2,vars:1,consts:[[3,"hidden"]],template:function(e,a){1&e&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA()),2&e&&i.Q6J("hidden",!a.active)}})}return n})();const Y=function(n){return{active:n}};function H(n,s){if(1&n){const t=i.EpF();i.TgZ(0,"li")(1,"button",3),i.NdJ("click",function(){const r=i.CHM(t).$implicit,o=i.oxw();return i.KtG(o.selectTab(r))}),i._uU(2),i.qZA()()}if(2&n){const t=s.$implicit;i.xp6(1),i.Q6J("ngClass",i.VKq(2,Y,t.active)),i.xp6(1),i.hij(" ",t.tabTitle," ")}}const K=["*"];let W=(()=>{class n{selectTab(t){this.tabs.toArray().forEach(e=>e.active=!1),t.active=!0}static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275cmp=i.Xpm({type:n,selectors:[["hp-tabs"]],contentQueries:function(e,a,r){if(1&e&&i.Suo(r,z,4),2&e){let o;i.iGM(o=i.CRH())&&(a.tabs=o)}},ngContentSelectors:K,decls:5,vars:1,consts:[[1,"hp-statistics-tab-container"],[4,"ngFor","ngForOf"],[1,"hp-statistics-tab-content"],[1,"hp-tab-btn",3,"ngClass","click"]],template:function(e,a){1&e&&(i.F$t(),i.TgZ(0,"div",0)(1,"ul"),i.YNc(2,H,3,4,"li",1),i.qZA(),i.TgZ(3,"div",2),i.Hsn(4),i.qZA()()),2&e&&(i.xp6(2),i.Q6J("ngForOf",a.tabs))},dependencies:[u.mk,u.sg],styles:['@font-face{font-family:Domine;src:url(Domine-VariableFont_wght.8f9c520ece2fb140.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Yeseva One;src:url(YesevaOne-Regular.2de61558739628c3.ttf) format("truetype");font-weight:400;font-style:normal}html[_ngcontent-%COMP%]{scroll-behavior:smooth}body[_ngcontent-%COMP%]{box-sizing:border-box;font-family:Domine,sans-serif}body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0;color:#353c3f}p[_ngcontent-%COMP%]{font-size:small}a[_ngcontent-%COMP%]{text-decoration:none}input[type=checkbox][_ngcontent-%COMP%]{width:20px;height:20px;accent-color:#a4bc41}.hp-statistics-tab-container[_ngcontent-%COMP%]{display:flex;padding:30px 120px;justify-content:space-between}.hp-statistics-tab-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none}.hp-statistics-tab-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .hp-tab-btn[_ngcontent-%COMP%]{width:100%;min-height:50px;background-color:#a4bc41;font-family:Domine,sans-serif;color:#353c3f;transition:.2s ease-in-out;cursor:pointer}.hp-statistics-tab-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .hp-tab-btn[_ngcontent-%COMP%]:hover, .hp-statistics-tab-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#fff}.hp-statistics-tab-container[_ngcontent-%COMP%]   .hp-statistics-tab-content[_ngcontent-%COMP%]{min-width:80%}']})}return n})();var l=(()=>{return(n=l||(l={})).APPOINTMENT_QUEUE_WEEK_LINE="appointment-queue-week-line",n.GENDERS_MONTHS_BAR="genders-months-bar",n.INSURANCE_PIE="insurance-pie",n.SPECIALIZATIONS_WEEK_SCUTTER="specializations-week-scutter",l;var n})();const T=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],X=["January","February","March","April","May","June","July","August","September","October","November","December"];function et(n){return n/10}function p(n,s){return n.reduce((t,e)=>(e.name&&t.legend.data.push(e.name),t.series.push({...e,type:s,symbolSize:"scatter"===s?et:void 0}),t),{legend:{data:[]},series:[]})}let nt=(()=>{class n{transform(t,e){switch(e){case l.APPOINTMENT_QUEUE_WEEK_LINE:return function k(n){const{legend:s,series:t}=p(n.series,"line");return{legend:s,xAxis:{type:"category",data:T},yAxis:{type:"value"},series:t}}(t);case l.GENDERS_MONTHS_BAR:return function _(n){const{legend:s,series:t}=p(n.series,"bar");return{legend:s,xAxis:{data:X},yAxis:{},series:t}}(t);case l.INSURANCE_PIE:return function q(n){const{series:s}=p(n.series,"pie");return{series:s}}(t);case l.SPECIALIZATIONS_WEEK_SCUTTER:return function tt(n){const{legend:s,series:t}=p(n.series,"scatter");return{legend:s,xAxis:{data:T},yAxis:{},series:t}}(t);default:throw new Error("Unsupported chart type")}}static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275pipe=i.Yjl({name:"echartsOption",type:n,pure:!0})}return n})();function it(n,s){if(1&n&&(i.TgZ(0,"hp-tab",1),i._UZ(1,"div",2),i.ALo(2,"echartsOption"),i.qZA()),2&n){const t=s.$implicit,e=s.index;i.Q6J("tabTitle",t.data.title)("index",e),i.xp6(1),i.Q6J("options",i.xi3(2,3,t.data,t.type))}}const st=[{path:"",component:(()=>{class n{constructor(t){this.statisticsService=t,this.statisticsService.loadData(),this.statisticsData=this.statisticsService.statisticsData}static#t=this.\u0275fac=function(e){return new(e||n)(i.Y36(F))};static#e=this.\u0275cmp=i.Xpm({type:n,selectors:[["hp-statistics"]],decls:3,vars:3,consts:[[3,"tabTitle","index",4,"ngFor","ngForOf"],[3,"tabTitle","index"],["echarts","",1,"hp-chart",3,"options"]],template:function(e,a){1&e&&(i.TgZ(0,"hp-tabs"),i.YNc(1,it,3,6,"hp-tab",0),i.ALo(2,"async"),i.qZA()),2&e&&(i.xp6(1),i.Q6J("ngForOf",i.lcZ(2,1,a.statisticsData)))},dependencies:[u.sg,J,z,W,u.Ov,nt],styles:[".hp-chart[_ngcontent-%COMP%]{min-width:200px;min-height:350px}"]})}return n})()}];let at=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=i.oAB({type:n});static#n=this.\u0275inj=i.cJS({imports:[b.Bz.forChild(st),b.Bz]})}return n})(),ct=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=i.oAB({type:n});static#n=this.\u0275inj=i.cJS({imports:[u.ez,at,$.forRoot({echarts:()=>c.e(581).then(c.bind(c,7581))})]})}return n})()}}]);