import { CommonModule } from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from '../components/main/main.component';
import {Home} from '../components/home/home.component';
import {appRoutingProviders, routing} from './app.routing';
import {LostPassword} from '../components/lost-password/lost-password.component';
import {ShippingAndDeliveryPopup} from '../components/shipping-and-delivery-popup/shipping-and-delivery-popup.component';
import {List5Obj} from '../components/list5-obj/list5-obj.component';
import {PageHeaderAt} from '../components/page-header-at/page-header-at.component';
import {ListSimple} from '../components/list-simple/list-simple.component';
import {TranslatePipe} from '../pipes/translate/translate.pipe';
import {Assist} from '../components/assist/assist.component';
import {ConfiguratorPopup2} from '../components/configurator-popup2/configurator-popup2.component';
import {Accessories} from '../components/accessories/accessories.component';
import {RecordTabs} from '../components/record-tabs/record-tabs.component';
import {ConfiguratorPopup} from '../components/configurator-popup/configurator-popup.component';
import {RecordPart} from '../components/record-part/record-part.component';
import {SliderCmp} from '../components/slider-cmp/slider-cmp.component';
import {Slider} from '../components/slider/slider.component';
import {SearchResultList} from '../components/search-result-list/search-result-list.component';
import {RegistrationPage} from '../components/registration-page/registration-page.component';
import {Login} from '../components/login/login.component';
import {ShippingAndPayment} from '../components/shipping-and-payment/shipping-and-payment.component';
import {OrderSideBar} from '../components/order-side-bar/order-side-bar.component';
import {AppWidth} from '../components/app-width/app-width.component';
import {Cart} from '../components/cart/cart.component';
import {CartPage} from '../components/cart-page/cart-page.component';
import {OrderHeader} from '../components/order-header/order-header.component';
import {Registration} from '../components/registration/registration.component';
import {OrderStep1} from '../components/order-step1/order-step1.component';
import {OrderStep2} from '../components/order-step2/order-step2.component';
import {OrderStep3} from '../components/order-step3/order-step3.component';
import {OrderStep4} from '../components/order-step4/order-step4.component';
import {OrderPersonalData} from '../components/order-personal-data/order-personal-data.component';
import {OrderShippingAndPayment} from '../components/order-shipping-and-payment/order-shipping-and-payment.component';
import {OrderSummary} from '../components/order-summary/order-summary.component';
import {OrderSuccess} from '../components/order-success/order-success.component';
import {RegistrationSuccess} from '../components/registration-success/registration-success.component';
import {Shipping} from '../components/shipping/shipping.component';
import {Payment} from '../components/payment/payment.component';
import {ListFilterBasicCustom8} from '../components/list-filter-basic-custom-8/list-filter-basic-custom-8.component';
import {ListFilterBasicCustom7} from '../components/list-filter-basic-custom-7/list-filter-basic-custom-7.component';
import {ListFilterBasicCustom9} from '../components/list-filter-basic-custom-9/list-filter-basic-custom-9.component';
import {Pagination} from '../components/pagination/pagination.component';
import {SimilarProducts} from '../components/similar-products/similar-products.component';
import {Configurator} from '../components/configurator/configurator.component';
import {ShopCategoriesObj} from '../components/shop-categories-obj/shop-categories-obj.component';
import {ShopCategoriesObjAt} from '../components/shop-categories-obj-at/shop-categories-obj-at.component';
import {ShopCategoriesDevObj} from '../components/shop-categories-dev-obj/shop-categories-dev-obj.component';
import {ShopCategoriesDev} from '../components/shop-categories-dev/shop-categories-dev.component';
import {ListObj} from '../components/list-obj/list-obj.component';
import {List3Obj} from '../components/list3-obj/list3-obj.component';
import {List4Obj} from '../components/list4-obj/list4-obj.component';
import {ScrollBarWidth} from '../components/scrollbar-width/scrollbar-width';
import {List} from '../components/list/list.component';
import {SelectBox} from '../components/select-box/select-box.component';
import {Attachments} from '../components/attachments/attachments.component';
import {CarouselVertical} from '../components/carousel-vertical/carousel-vertical.component';
import {List2} from '../components/list2/list2.component';
import {ListFilter} from '../components/list-filter/list-filter.component';
import {ListFilterBasic} from '../components/list-filter-basic/list-filter-basic.component';
import {ListFilterAdvanced} from '../components/list-filter-advanced/list-filter-advanced.component';
import {ListFilterBasicCustom1} from '../components/list-filter-basic-custom-1/list-filter-basic-custom-1.component';
import {ListFilterBasicCustom2} from '../components/list-filter-basic-custom-2/list-filter-basic-custom-2.component';
import {ListFilterBasicCustom3} from '../components/list-filter-basic-custom-3/list-filter-basic-custom-3.component';
import {ListFilterBasicCustom4} from '../components/list-filter-basic-custom-4/list-filter-basic-custom-4.component';
import {ListFilterBasicCustom5} from '../components/list-filter-basic-custom-5/list-filter-basic-custom-5.component';
import {ListFilterBasicCustom6} from '../components/list-filter-basic-custom-6/list-filter-basic-custom-6.component';
import {LoginNewsletter} from '../components/login-newsletter/login-newsletter.component';
import {SlidesObj} from '../components/slides-obj/slides-obj.component';
import {BannerMcled} from '../components/banner-mcled/banner-mcled.component';
import {ProductsHomepage} from '../components/products-homepage/products-homepage.component';
import {DeliveryFree} from '../components/delivery-free/delivery-free.component';
import {ArticlesHomepage} from '../components/articles-homepage/articles-homepage.component';
import {Copyright} from '../components/copyright/copyright.component';
import {Footer} from '../components/footer/footer.component';
import {CarouselPartners} from '../components/carousel-partners/carousel-partners.component';
import {Partners} from '../components/partners/partners.component';
import {LoginPage} from '../components/login-page/login-page.component';
import {RedirectNavigation} from '../components/redirect-navigation/redirect-navigation.component';
import {ListItem} from '../components/list-item/list-item.component';
import {List3Item} from '../components/list3-item/list3-item.component';
import {List4Item} from '../components/list4-item/list4-item.component';
import {HomeStatic} from '../components/home-static/home-static.component';
import {SectionSW} from '../components/section-sw/section-sw.component';
import {MyFilterArray} from '../pipes/my-filter-array.pipe';
import {SectionObject} from '../components/section-object/section-object.component';
import {ShopCategories} from '../components/shop-categories/shop-categories.component';
import {PageHeader} from '../components/page-header/page-header.component';
import {HtmlOutlet4} from '../components/html-outlet4/html-outlet4.component';
import {ShopCategoriesAt} from '../components/shop-categories-at/shop-categories-at.component';
import {LoginHeader} from '../components/login-header/login-header.component';
import {SlidesComponent} from '../components/slides/slides.component';
import {Carousel} from '../components/carousel/carousel.component';
import {RecordProduct} from '../components/record/record.component';
import {ApiService} from '../services/api.service';
import {TranslateService} from '../pipes/translate/translate.service';
import {TRANSLATION_PROVIDERS} from '../pipes/translate/translation';
import {ToolsService} from '../services/tools.service';
import {AppService} from './app.service';
import {HtmlOutlet} from '../components/html-outlet/html-outlet.component';

@NgModule({
  declarations: [
    MainComponent,
    Home,
    HomeStatic,
    SectionSW,
    MyFilterArray,
    SectionObject,
    HtmlOutlet4,
    PageHeader,
    ShopCategories,
    ShopCategoriesAt,
    LoginHeader,
    SlidesComponent,
    Carousel,
    SlidesObj,
    LoginNewsletter,
    BannerMcled,
    DeliveryFree,
    ProductsHomepage,
    ArticlesHomepage,
    Copyright,
    Footer,
    CarouselPartners,
    Partners,
    LoginPage,
    RedirectNavigation,
    ListItem,
    List3Item,
    List4Item,
    SelectBox,
    List,
    Attachments,
    CarouselVertical,
    List2,
    ListFilter,
    ListFilterBasic,
    ListFilterAdvanced,
    ListFilterBasicCustom1,
    ListFilterBasicCustom2,
    ListFilterBasicCustom3,
    ListFilterBasicCustom4,
    ListFilterBasicCustom5,
    ListFilterBasicCustom6,
    ListFilterBasicCustom7,
    ListFilterBasicCustom8,
    ListFilterBasicCustom9,
    Pagination,
    SimilarProducts,
    RecordProduct,
    Configurator,
    ShopCategoriesObj,
    ShopCategoriesObjAt,
    ShopCategoriesDevObj,
    ShopCategoriesDev,
    ListObj,
    List3Obj,
    List4Obj,
    ScrollBarWidth,
    AppWidth,
    Cart,
    CartPage,
    OrderHeader,
    Registration,
    OrderStep1,
    OrderStep2,
    OrderStep3,
    OrderStep4,
    OrderPersonalData,
    OrderShippingAndPayment,
    OrderSummary,
    OrderSuccess,
    RegistrationSuccess,
    Shipping,
    Payment,
    OrderSideBar,
    ShippingAndPayment,
    Login,
    RegistrationPage,
    SearchResultList,
    Slider,
    SliderCmp,
    RecordPart,
    ConfiguratorPopup,
    RecordTabs,
    Accessories,
    ConfiguratorPopup2,
    Assist,
    TranslatePipe,
    ListSimple,
    PageHeaderAt,
    List5Obj,
    ShippingAndDeliveryPopup,
    LostPassword,
    HtmlOutlet
  ],
  entryComponents: [
    PageHeader,
    SlidesObj,
    Partners,
    PageHeader,
    LoginPage,
    RedirectNavigation,
    List,
    List2,
    Configurator,
    RecordProduct,
    ShopCategoriesObj,
    ShopCategoriesObjAt,
    ShopCategoriesDevObj,
    ListObj,
    List3Obj,
    List4Obj,
    SlidesComponent,
    CartPage,
    OrderStep1,
    OrderStep2,
    OrderStep3,
    OrderStep4,
    RegistrationSuccess,
    RegistrationPage,
    SearchResultList,
    ProductsHomepage,
    ListSimple,
    PageHeaderAt,
    LoginNewsletter,
    List5Obj,
    LostPassword
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ApiService,
    ToolsService,
    AppService,
    TRANSLATION_PROVIDERS,
    TranslateService,
    { provide: LOCALE_ID, useValue: 'cs-CZ' },
  ],
  exports: [
    MainComponent
  ]
})
export class AppModule { }
